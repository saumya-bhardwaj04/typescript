# Generics

## Generics in TypeScript
- Generics let us write reusable functions for different data types.
- `<T>` is a type parameter that works like a placeholder for a type.
- `getFirstElement<T>(arr: T[])` returns the first value with the correct type.
- `T extends { length: number }` means the value must have a `length` property.
- `keyof T` lets us access only valid keys from an object.
