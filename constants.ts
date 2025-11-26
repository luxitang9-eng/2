import { Problem } from './types';

export const PROBLEMS: Problem[] = [
  {
    id: 'sumUpTo',
    title: 'sumUpTo',
    category: 'Loops-Basic',
    description: 'Given an integer n, return the sum of all numbers from 1 to n. For example, if n is 3, return 1 + 2 + 3 = 6.',
    methodSignature: 'public int sumUpTo(int n)',
    starterCode: `public int sumUpTo(int n) {
  
}`,
    examples: [
      { input: 'sumUpTo(3)', expected: '6' },
      { input: 'sumUpTo(1)', expected: '1' },
      { input: 'sumUpTo(5)', expected: '15' }
    ],
    testCases: [
      { input: 'sumUpTo(3)', expected: '6' },
      { input: 'sumUpTo(1)', expected: '1' },
      { input: 'sumUpTo(5)', expected: '15' },
      { input: 'sumUpTo(0)', expected: '0' },
      { input: 'sumUpTo(10)', expected: '55' },
      { input: 'sumUpTo(100)', expected: '5050' }
    ]
  },
  {
    id: 'factorial',
    title: 'factorial',
    category: 'Loops-Basic',
    description: 'Given n of 1 or more, return the factorial of n, which is n * (n-1) * (n-2) ... 1. Compute the result as an int.',
    methodSignature: 'public int factorial(int n)',
    starterCode: `public int factorial(int n) {
  
}`,
    examples: [
      { input: 'factorial(3)', expected: '6' },
      { input: 'factorial(4)', expected: '24' },
      { input: 'factorial(5)', expected: '120' }
    ],
    testCases: [
      { input: 'factorial(3)', expected: '6' },
      { input: 'factorial(4)', expected: '24' },
      { input: 'factorial(5)', expected: '120' },
      { input: 'factorial(1)', expected: '1' },
      { input: 'factorial(6)', expected: '720' }
    ]
  },
  {
    id: 'sumRange',
    title: 'sumRange',
    category: 'Loops-Basic',
    description: 'Given two integers start and end, return the sum of all numbers from start to end (inclusive).',
    methodSignature: 'public int sumRange(int start, int end)',
    starterCode: `public int sumRange(int start, int end) {
  
}`,
    examples: [
      { input: 'sumRange(1, 3)', expected: '6' },
      { input: 'sumRange(2, 5)', expected: '14' },
      { input: 'sumRange(5, 5)', expected: '5' }
    ],
    testCases: [
      { input: 'sumRange(1, 3)', expected: '6' },
      { input: 'sumRange(2, 5)', expected: '14' },
      { input: 'sumRange(5, 5)', expected: '5' },
      { input: 'sumRange(0, 4)', expected: '10' },
      { input: 'sumRange(-2, 2)', expected: '0' }
    ]
  },
  {
    id: 'sumEvens',
    title: 'sumEvens',
    category: 'Loops-Basic',
    description: 'Given an integer n, return the sum of all even numbers from 0 to n inclusive.',
    methodSignature: 'public int sumEvens(int n)',
    starterCode: `public int sumEvens(int n) {
  
}`,
    examples: [
      { input: 'sumEvens(5)', expected: '6' },
      { input: 'sumEvens(4)', expected: '6' },
      { input: 'sumEvens(2)', expected: '2' }
    ],
    testCases: [
      { input: 'sumEvens(5)', expected: '6' },
      { input: 'sumEvens(4)', expected: '6' },
      { input: 'sumEvens(2)', expected: '2' },
      { input: 'sumEvens(0)', expected: '0' },
      { input: 'sumEvens(10)', expected: '30' }
    ]
  },
  {
    id: 'sumOdds',
    title: 'sumOdds',
    category: 'Loops-Basic',
    description: 'Given an integer n, return the sum of all odd numbers from 0 to n inclusive.',
    methodSignature: 'public int sumOdds(int n)',
    starterCode: `public int sumOdds(int n) {
  
}`,
    examples: [
      { input: 'sumOdds(5)', expected: '9' },
      { input: 'sumOdds(4)', expected: '4' },
      { input: 'sumOdds(1)', expected: '1' }
    ],
    testCases: [
      { input: 'sumOdds(5)', expected: '9' },
      { input: 'sumOdds(4)', expected: '4' },
      { input: 'sumOdds(1)', expected: '1' },
      { input: 'sumOdds(0)', expected: '0' },
      { input: 'sumOdds(10)', expected: '25' }
    ]
  },
  {
    id: 'stringNumbers',
    title: 'stringNumbers',
    category: 'Loops-Basic',
    description: 'Given an integer n, return a string composed of integers from 0 to n concatenated together.',
    methodSignature: 'public String stringNumbers(int n)',
    starterCode: `public String stringNumbers(int n) {
  
}`,
    examples: [
      { input: 'stringNumbers(3)', expected: '"0123"' },
      { input: 'stringNumbers(1)', expected: '"01"' },
      { input: 'stringNumbers(0)', expected: '"0"' }
    ],
    testCases: [
      { input: 'stringNumbers(3)', expected: '"0123"' },
      { input: 'stringNumbers(1)', expected: '"01"' },
      { input: 'stringNumbers(0)', expected: '"0"' },
      { input: 'stringNumbers(5)', expected: '"012345"' }
    ]
  },
  {
    id: 'countDown',
    title: 'countDown',
    category: 'Loops-Basic',
    description: 'Given an integer n, return a string composed of integers from n down to 1 concatenated.',
    methodSignature: 'public String countDown(int n)',
    starterCode: `public String countDown(int n) {
  
}`,
    examples: [
      { input: 'countDown(3)', expected: '"321"' },
      { input: 'countDown(1)', expected: '"1"' },
      { input: 'countDown(0)', expected: '""' }
    ],
    testCases: [
      { input: 'countDown(3)', expected: '"321"' },
      { input: 'countDown(1)', expected: '"1"' },
      { input: 'countDown(5)', expected: '"54321"' },
      { input: 'countDown(0)', expected: '""' }
    ]
  },
  {
    id: 'powerN',
    title: 'powerN',
    category: 'Loops-Basic',
    description: 'Given a base and an exponent n, compute base to the power of n using a loop.',
    methodSignature: 'public int powerN(int base, int n)',
    starterCode: `public int powerN(int base, int n) {
  
}`,
    examples: [
      { input: 'powerN(3, 1)', expected: '3' },
      { input: 'powerN(3, 2)', expected: '9' },
      { input: 'powerN(3, 3)', expected: '27' }
    ],
    testCases: [
      { input: 'powerN(3, 1)', expected: '3' },
      { input: 'powerN(3, 2)', expected: '9' },
      { input: 'powerN(3, 3)', expected: '27' },
      { input: 'powerN(2, 5)', expected: '32' },
      { input: 'powerN(5, 0)', expected: '1' }
    ]
  },
  {
    id: 'sumSquares',
    title: 'sumSquares',
    category: 'Loops-Basic',
    description: 'Given an integer n, return the sum of squares of all numbers from 1 to n (1*1 + 2*2 + ... + n*n).',
    methodSignature: 'public int sumSquares(int n)',
    starterCode: `public int sumSquares(int n) {
  
}`,
    examples: [
      { input: 'sumSquares(3)', expected: '14' },
      { input: 'sumSquares(2)', expected: '5' },
      { input: 'sumSquares(1)', expected: '1' }
    ],
    testCases: [
      { input: 'sumSquares(3)', expected: '14' },
      { input: 'sumSquares(2)', expected: '5' },
      { input: 'sumSquares(1)', expected: '1' },
      { input: 'sumSquares(4)', expected: '30' },
      { input: 'sumSquares(0)', expected: '0' }
    ]
  },
  {
    id: 'sumDigits',
    title: 'sumDigits',
    category: 'Loops-Basic',
    description: 'Given a non-negative integer n, return the sum of its digits.',
    methodSignature: 'public int sumDigits(int n)',
    starterCode: `public int sumDigits(int n) {
  
}`,
    examples: [
      { input: 'sumDigits(126)', expected: '9' },
      { input: 'sumDigits(49)', expected: '13' },
      { input: 'sumDigits(12)', expected: '3' }
    ],
    testCases: [
      { input: 'sumDigits(126)', expected: '9' },
      { input: 'sumDigits(49)', expected: '13' },
      { input: 'sumDigits(12)', expected: '3' },
      { input: 'sumDigits(0)', expected: '0' },
      { input: 'sumDigits(1111)', expected: '4' }
    ]
  },
  {
    id: 'stringTimes',
    title: 'stringTimes',
    category: 'Loops-Strings',
    description: 'Given a string and a non-negative int n, return a larger string that is n copies of the original string.',
    methodSignature: 'public String stringTimes(String str, int n)',
    starterCode: `public String stringTimes(String str, int n) {
  
}`,
    examples: [
      { input: 'stringTimes("Hi", 2)', expected: '"HiHi"' },
      { input: 'stringTimes("Hi", 3)', expected: '"HiHiHi"' },
      { input: 'stringTimes("Hi", 1)', expected: '"Hi"' }
    ],
    testCases: [
      { input: 'stringTimes("Hi", 2)', expected: '"HiHi"' },
      { input: 'stringTimes("Hi", 3)', expected: '"HiHiHi"' },
      { input: 'stringTimes("Hi", 1)', expected: '"Hi"' },
      { input: 'stringTimes("Hi", 0)', expected: '""' },
      { input: 'stringTimes("Hi", 5)', expected: '"HiHiHiHiHi"' },
      { input: 'stringTimes("Oh Boy!", 2)', expected: '"Oh Boy!Oh Boy!"' },
      { input: 'stringTimes("x", 4)', expected: '"xxxx"' }
    ]
  },
  {
    id: 'countE',
    title: 'countE',
    category: 'Loops-Strings',
    description: 'Return the number of times the character "e" appears in the given string.',
    methodSignature: 'public int countE(String str)',
    starterCode: `public int countE(String str) {
  
}`,
    examples: [
      { input: 'countE("Hello")', expected: '1' },
      { input: 'countE("Helele")', expected: '3' },
      { input: 'countE("Hii")', expected: '0' }
    ],
    testCases: [
      { input: 'countE("Hello")', expected: '1' },
      { input: 'countE("Helele")', expected: '3' },
      { input: 'countE("Hii")', expected: '0' },
      { input: 'countE("")', expected: '0' },
      { input: 'countE("eeee")', expected: '4' }
    ]
  },
  {
    id: 'doubleChar',
    title: 'doubleChar',
    category: 'Loops-Strings',
    description: 'Given a string, return a string where for every char in the original, there are two chars.',
    methodSignature: 'public String doubleChar(String str)',
    starterCode: `public String doubleChar(String str) {
  
}`,
    examples: [
      { input: 'doubleChar("The")', expected: '"TThhee"' },
      { input: 'doubleChar("AAbb")', expected: '"AAAAbbbb"' },
      { input: 'doubleChar("Hi-There")', expected: '"HHii--TThheerree"' }
    ],
    testCases: [
      { input: 'doubleChar("The")', expected: '"TThhee"' },
      { input: 'doubleChar("AAbb")', expected: '"AAAAbbbb"' },
      { input: 'doubleChar("Hi-There")', expected: '"HHii--TThheerree"' },
      { input: 'doubleChar("Word")', expected: '"WWoorrdd"' },
      { input: 'doubleChar("")', expected: '""' },
      { input: 'doubleChar(".")', expected: '".."' }
    ]
  },
  {
    id: 'countHi',
    title: 'countHi',
    category: 'Loops-Strings',
    description: 'Return the number of times that the string "hi" appears anywhere in the given string.',
    methodSignature: 'public int countHi(String str)',
    starterCode: `public int countHi(String str) {
  
}`,
    examples: [
      { input: 'countHi("abc hi ho")', expected: '1' },
      { input: 'countHi("ABChi hi")', expected: '2' },
      { input: 'countHi("hihi")', expected: '2' }
    ],
    testCases: [
      { input: 'countHi("abc hi ho")', expected: '1' },
      { input: 'countHi("ABChi hi")', expected: '2' },
      { input: 'countHi("hihi")', expected: '2' },
      { input: 'countHi("hi")', expected: '1' },
      { input: 'countHi("Hi is no hi")', expected: '1' },
      { input: 'countHi("")', expected: '0' }
    ]
  },
  {
    id: 'sumArray',
    title: 'sumArray',
    category: 'Loops-Arrays',
    description: 'Given an array of ints, return the sum of the integers.',
    methodSignature: 'public int sumArray(int[] nums)',
    starterCode: `public int sumArray(int[] nums) {
  
}`,
    examples: [
      { input: 'sumArray({1, 2, 3})', expected: '6' },
      { input: 'sumArray({5, 11, 2})', expected: '18' },
      { input: 'sumArray({7, 0, 0})', expected: '7' }
    ],
    testCases: [
      { input: 'sumArray({1, 2, 3})', expected: '6' },
      { input: 'sumArray({5, 11, 2})', expected: '18' },
      { input: 'sumArray({7, 0, 0})', expected: '7' },
      { input: 'sumArray({3, -2, 1})', expected: '2' },
      { input: 'sumArray({})', expected: '0' }
    ]
  }
];

export const CATEGORIES = Array.from(new Set(PROBLEMS.map(p => p.category)));