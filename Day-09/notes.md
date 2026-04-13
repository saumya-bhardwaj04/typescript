# Generics

### Generics in Class
- `ItemStorage<T>` is a generic class to store any type safely.
- `addItem(item: T)` adds data of type `T`.
- `removeItem(item: T)` removes matching item using `filter`.
- `getAllItems()` prints all stored values.

### Usage Examples
- `ItemStorage<string>` stores text (`pen`, `pencil`).
- `ItemStorage<number>` stores numbers (`72624`).
- `ItemStorage<User>` stores objects with a defined shape.

### Index Property
- `interface User` has fixed fields: `name`, `age`.
- `[prop: string]: string | number | object` allows extra keys.
- So properties like `email` and `chats` can be added.