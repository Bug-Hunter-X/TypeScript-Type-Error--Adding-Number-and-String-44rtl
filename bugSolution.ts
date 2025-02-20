function add(a: number, b: number): number {
  return a + b;
}

let result = add(5, parseInt('10', 10)); // Correct: Using parseInt

let result2 = add(5, <number><unknown>'10'); // Correct: Type Assertion (use with caution)