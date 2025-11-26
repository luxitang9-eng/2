export interface TestCase {
  input: string;
  expected: string;
}

export interface Problem {
  id: string;
  title: string;
  category: string;
  description: string;
  methodSignature: string;
  starterCode: string;
  examples: TestCase[];
  testCases: TestCase[]; // Used for validation
}

export interface TestResultItem {
  input: string;
  expected: string;
  actual: string;
  passed: boolean;
}

export interface EvaluationResult {
  compiled: boolean;
  compileErrorMessage?: string;
  results: TestResultItem[];
}

export enum ViewState {
  LIST = 'LIST',
  SOLVING = 'SOLVING'
}