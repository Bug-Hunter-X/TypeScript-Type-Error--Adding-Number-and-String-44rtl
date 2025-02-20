# TypeScript Type Error: Adding Number and String

This repository demonstrates a common TypeScript type error that occurs when performing arithmetic operations with incompatible data types.  The example involves adding a number and a string, which results in a type error because TypeScript's type system enforces type safety.

The `bug.ts` file contains the erroneous code, while `bugSolution.ts` shows how to correctly handle this issue using type assertions or type guards. The solution demonstrates how to effectively prevent runtime errors by carefully managing data types in TypeScript.

## How to reproduce the bug:

1. Clone this repository.
2. Compile and run the `bug.ts` file. You will encounter a compilation error due to the type mismatch.

## How to fix the bug:

The solution provided in `bugSolution.ts` addresses this issue by explicitly converting the string to a number before performing the addition using type casting or the `parseInt` function. This allows TypeScript to correctly infer the data types and prevents runtime errors.