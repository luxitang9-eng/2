import { GoogleGenAI, Type, Schema } from "@google/genai";
import { Problem, EvaluationResult } from "../types";

const apiKey = process.env.API_KEY || '';

// Initialize client only if key exists (handled in UI if missing)
const ai = new GoogleGenAI({ apiKey });

const evaluationSchema: Schema = {
  type: Type.OBJECT,
  properties: {
    compiled: {
      type: Type.BOOLEAN,
      description: "Whether the Java code compiled successfully.",
    },
    compileErrorMessage: {
      type: Type.STRING,
      description: "If compiled is false, this contains the compiler error message.",
    },
    results: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          input: { type: Type.STRING },
          expected: { type: Type.STRING },
          actual: { type: Type.STRING },
          passed: { type: Type.BOOLEAN },
        },
        required: ["input", "expected", "actual", "passed"],
      },
    },
  },
  required: ["compiled", "results"],
};

export const evaluateCode = async (
  problem: Problem,
  userCode: string
): Promise<EvaluationResult> => {
  if (!apiKey) {
    throw new Error("API Key is missing");
  }

  const model = "gemini-2.5-flash";
  
  const testCasesString = problem.testCases.map(tc => 
    `Input: ${tc.input}, Expected Output: ${tc.expected}`
  ).join("\n");

  const prompt = `
    You are a Java Code Compiler and Executor simulator.
    
    Task:
    1. Analyze the provided Java method against the problem description.
    2. Simulate compiling the code. Check for syntax errors, type mismatches, or missing return statements.
    3. If it compiles, simulate running the code against the provided Test Cases.
    4. For each test case, determine the "Actual" output produced by the user's code.
    5. Compare "Actual" vs "Expected".
    
    Problem Title: ${problem.title}
    Problem Description: ${problem.description}
    Method Signature: ${problem.methodSignature}
    
    Test Cases to Run:
    ${testCasesString}
    
    User's Code:
    ${userCode}
    
    Output JSON matching the schema provided.
    If there is a compilation error, set compiled to false and provide a helpful message in compileErrorMessage.
    If compiled is true, provide an array of results for each test case.
  `;

  try {
    const response = await ai.models.generateContent({
      model,
      contents: [{ parts: [{ text: prompt }] }],
      config: {
        responseMimeType: "application/json",
        responseSchema: evaluationSchema,
        temperature: 0, // Deterministic for code execution
      },
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");
    
    return JSON.parse(text) as EvaluationResult;
  } catch (error) {
    console.error("Gemini Evaluation Error:", error);
    // Fallback error result
    return {
      compiled: false,
      compileErrorMessage: "System Error: Failed to evaluate code via Gemini API. " + (error instanceof Error ? error.message : String(error)),
      results: []
    };
  }
};