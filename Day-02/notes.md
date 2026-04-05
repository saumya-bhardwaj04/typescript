# 1.basics:-
- Typescript is javascript with added syntax for types.
- Typescript allows developers to add types to javascript. 
- TypeScript compiler checks if the specified types match before running the code, not while running the code.
- installation: npm i -g typescript
- compile: tsc index.ts
- run: node index.js

# 2.Array, Tuple and Object:-
- Array: An array stores multiple values in a single variable.
- In TypeScript, arrays can be typed like `string[]` or `Array<string>`.
- Arrays can also use union types like `(string | number)[]`.
- `readonly` makes an array immutable, so methods like `push()` are not allowed.
- `any[]` can store any type, but it removes type safety.

- Tuple: A tuple is a typed array with a fixed length and types for each index.
- Example: `[number, boolean, string]` means the first value must be a number, second a boolean, and third a string.
- Tuples can also be `readonly`.
- Named tuples improve readability, for example: `[x: number, y: number]`.
- Tuples support destructuring like `const [x, y] = tuple`.

- Object: An object type describes the structure of an object using property names and their types.
- Example: `name: string` and `email: string` mean those fields are required.
- Optional properties are written using `?`, like `age?: number`.
- Objects can be stored inside arrays, such as `let users = [user, user, user]`.
