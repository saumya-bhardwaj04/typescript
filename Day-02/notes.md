# 1.basics:-
- Typescript is javascript with added syntax for types.
- Typescript allows developers to add types to javascript. 
- TypeScript compiler checks if the specified types match before running the code, not while running the code.
- installation: npm i -g typescript
- compile: tsc index.ts
- run: node index.js

# 2.Array, Tuple and Object:-
- Array: Stores multiple values in one variable and can be typed like `string[]` or `Array<string>`.
- Arrays can use union types like `(string | number)[]`.
- `readonly` prevents changes, and `any[]` removes type safety.
- Tuple: A fixed-length array where each index has its own type.
- Example: `[number, boolean, string]`.
- Tuples can also be `readonly`, named like `[x: number, y: number]`, and destructured.
- Object: Defines property names and their types.
- `?` makes a property optional, for example `age?: number`.
- Objects can also be stored inside arrays like `users`.
