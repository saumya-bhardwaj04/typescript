# TypeScript with React

## Example 1: `ChildComponent`

- `ChildComponent.tsx` uses `interface ChildComponentProps` to define the props shape before the component is used in `App.tsx`.
- `name` and `age` are required, while `email?: string` is optional, so TypeScript checks the component call and warns if the wrong props are passed.

## Example 2: `Button`

- In `App.tsx`, `const [count, setCount] = useState(0)` lets TypeScript infer that `count` is a number and `setCount` is the updater for that number state.
- In `Button.tsx`, `ButtonProps` keeps both props linked to that same type, especially `setCount: React.Dispatch<React.SetStateAction<number>>`, which means the child must receive the correct React setter.

## Example 3: Typed object state

- `App.tsx` exports `interface User`, which gives the form state a fixed structure: `name`, `email`, and `password` must all be strings.
- `useState<User>({ name: "", email: "", password: "" })` makes the state strongly typed from the start, so every update must still match the `User` shape.

## Example 4: Typed form handling

- `inputHandler(e: ChangeEvent<HTMLInputElement>)` types the event object, so TypeScript knows the change is coming from an input element and allows safe access to `e.target.name` and `e.target.value`.
- `setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }))` updates one field at a time while preserving the full typed `User` object.

## Example 5: React Redux

- First install the packages: `npm i @reduxjs/toolkit` and `npm i react-redux`. Then `src/store/Store.ts` creates the Redux store with `configureStore`, and `src/store/userSlice.ts` creates a slice where `addUser` accepts `PayloadAction<User>`.
- In `main.tsx`, `Provider store={store}` makes Redux available to the app, and in `App.tsx`, `useDispatch()` plus `dispatch(addUser(user))` sends the typed `user` object into the Redux store.
