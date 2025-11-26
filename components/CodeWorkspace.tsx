import React, { useState, useEffect, useCallback } from 'react';
import { Problem, EvaluationResult } from '../types';
import { evaluateCode } from '../services/geminiService';

interface CodeWorkspaceProps {
  problem: Problem;
}

const CodeWorkspace: React.FC<CodeWorkspaceProps> = ({ problem }) => {
  const [code, setCode] = useState(problem.starterCode);
  const [result, setResult] = useState<EvaluationResult | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  
  // Reset state when problem changes
  useEffect(() => {
    setCode(problem.starterCode);
    setResult(null);
    setIsRunning(false);
  }, [problem]);

  const handleRun = useCallback(async () => {
    setIsRunning(true);
    setResult(null);
    try {
      const evalResult = await evaluateCode(problem, code);
      setResult(evalResult);
    } catch (e) {
      console.error(e);
      setResult({
        compiled: false,
        compileErrorMessage: "An unexpected network error occurred.",
        results: []
      });
    } finally {
      setIsRunning(false);
    }
  }, [code, problem]);

  const passedCount = result?.results.filter(r => r.passed).length || 0;
  const totalCount = result?.results.length || 0;
  const allPassed = totalCount > 0 && passedCount === totalCount;

  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 px-6 py-4 shadow-sm flex-shrink-0">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-slate-800">{problem.title}</h1>
            <p className="text-slate-600 mt-2 max-w-3xl leading-relaxed">{problem.description}</p>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={() => setCode(problem.starterCode)}
              className="px-4 py-2 text-sm font-medium text-slate-600 bg-white border border-slate-300 rounded-md hover:bg-slate-50 transition-colors"
            >
              Reset
            </button>
            <button 
              onClick={handleRun}
              disabled={isRunning}
              className={`px-6 py-2 text-sm font-medium text-white rounded-md transition-all shadow-sm flex items-center gap-2 ${
                isRunning 
                  ? 'bg-indigo-400 cursor-not-allowed' 
                  : 'bg-indigo-600 hover:bg-indigo-700 hover:shadow'
              }`}
            >
              {isRunning ? (
                <>
                  <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Running...
                </>
              ) : (
                <>
                  <span>▶</span> Run Code
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
          {/* Left Column: Editor & Examples */}
          <div className="flex flex-col gap-6">
             {/* Examples Card */}
             <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-5">
              <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">Examples</h3>
              <div className="bg-slate-50 rounded border border-slate-200 overflow-hidden">
                <table className="w-full text-sm text-left">
                  <thead className="bg-slate-100 text-slate-600 font-medium border-b border-slate-200">
                    <tr>
                      <th className="px-4 py-2">Code Call</th>
                      <th className="px-4 py-2">Expected</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {problem.examples.map((ex, idx) => (
                      <tr key={idx} className="font-mono text-xs">
                        <td className="px-4 py-2 text-slate-700">{ex.input}</td>
                        <td className="px-4 py-2 text-green-600">{ex.expected}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Code Editor */}
            <div className="flex-1 min-h-[400px] flex flex-col">
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-semibold text-slate-700">Solution</label>
                <span className="text-xs text-slate-400">Java</span>
              </div>
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="flex-1 w-full p-4 font-mono text-sm bg-slate-900 text-slate-100 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none leading-relaxed"
                spellCheck={false}
              />
            </div>
          </div>

          {/* Right Column: Output */}
          <div className="flex flex-col h-full">
            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">Output</h3>
            
            <div className={`flex-1 bg-white rounded-lg border shadow-sm overflow-hidden flex flex-col ${result ? 'border-slate-200' : 'border-dashed border-slate-300 justify-center items-center'}`}>
              {!result && !isRunning && (
                <div className="text-center p-8">
                  <div className="text-4xl mb-3">⚡</div>
                  <p className="text-slate-500">Ready to compile.</p>
                  <p className="text-sm text-slate-400">Click "Run Code" to test your solution.</p>
                </div>
              )}

              {isRunning && (
                <div className="flex-1 flex flex-col items-center justify-center p-8">
                  <div className="animate-bounce text-4xl mb-4">☕</div>
                  <p className="text-slate-600 font-medium">Compiling & Testing...</p>
                  <p className="text-sm text-slate-400 mt-2">Gemini is evaluating your Java code.</p>
                </div>
              )}

              {result && (
                <div className="flex-1 flex flex-col h-full">
                  {/* Compilation Status */}
                  <div className={`px-6 py-4 border-b ${result.compiled ? 'bg-green-50 border-green-100' : 'bg-red-50 border-red-100'}`}>
                    <h4 className={`font-bold flex items-center gap-2 ${result.compiled ? 'text-green-700' : 'text-red-700'}`}>
                      {result.compiled ? (
                        <>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                          Compilation Successful
                        </>
                      ) : (
                        <>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                          Compilation Failed
                        </>
                      )}
                    </h4>
                    {!result.compiled && result.compileErrorMessage && (
                      <pre className="mt-2 text-xs font-mono text-red-600 bg-red-100 p-3 rounded whitespace-pre-wrap">
                        {result.compileErrorMessage}
                      </pre>
                    )}
                    {result.compiled && (
                      <div className="mt-1 text-sm text-green-800">
                        {allPassed ? "All tests passed! Great job." : `${passedCount} / ${totalCount} tests passed.`}
                      </div>
                    )}
                  </div>

                  {/* Test Results Table */}
                  {result.compiled && (
                    <div className="flex-1 overflow-y-auto">
                      <table className="w-full text-left text-sm">
                        <thead className="bg-slate-50 text-slate-500 font-medium border-b border-slate-100 sticky top-0">
                          <tr>
                            <th className="px-6 py-3 w-8"></th>
                            <th className="px-6 py-3">Test Case</th>
                            <th className="px-6 py-3">Expected</th>
                            <th className="px-6 py-3">Run</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {result.results.map((r, i) => (
                            <tr key={i} className={`hover:bg-slate-50 transition-colors ${r.passed ? '' : 'bg-red-50/30'}`}>
                              <td className="px-6 py-3 text-center">
                                {r.passed ? (
                                  <span className="inline-block w-6 h-6 bg-green-500 text-white rounded flex items-center justify-center text-xs">✓</span>
                                ) : (
                                  <span className="inline-block w-6 h-6 bg-red-500 text-white rounded flex items-center justify-center text-xs">✕</span>
                                )}
                              </td>
                              <td className="px-6 py-3 font-mono text-slate-700 text-xs">{r.input}</td>
                              <td className="px-6 py-3 font-mono text-slate-600 text-xs">{r.expected}</td>
                              <td className="px-6 py-3 font-mono text-xs font-bold">
                                <span className={r.passed ? 'text-green-600' : 'text-red-600'}>
                                  {r.actual}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                  
                  {allPassed && result.compiled && (
                     <div className="p-6 bg-green-50 border-t border-green-100 text-center animate-pulse">
                        <span className="text-2xl">🎉</span>
                        <span className="ml-2 font-bold text-green-800">Problem Solved!</span>
                     </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeWorkspace;