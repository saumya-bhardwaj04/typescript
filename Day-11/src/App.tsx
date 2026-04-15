import { useEffect, useState, type ChangeEvent } from 'react'
import './App.css'
import ChildComponent from './ChildComponent'
import Button from './Button'
import { useDispatch } from 'react-redux'
import { addUser } from './store/userSlice'

// example-3 and 4
export interface User {
  name: string,
  // age: number,
  email: string,
  password: string,
}

function App() {
  // example-2
  const [count, setCount] = useState(0)
  // example-3 and 4
  const [user, setUser] = useState<User>({ name: "", email: "", password: "" });
  // example-5
  const dispatch = useDispatch();
  useEffect(() => {
    // Api call
    // setUser({ name: "rohan", age: 22, email: "rohan@gmail.com" })
  }, [])

  // example-4
  function inputHandler(e: ChangeEvent<HTMLInputElement>) {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }
  // example-5
  function formHandler(e: ChangeEvent<HTMLFormElement>){
    e.preventDefault();
    console.log(user);
    dispatch(addUser(user))
  }

  return (
    <>
      <section id="center">
        {/* example-1 */}
        <ChildComponent name="hello" age="22" email="hello000@gmail.com" />

        {/* example-2 */}
        <Button count={count} setCount={setCount} />

        {/* example-3 */}
        {user?.name} {user?.email} {user?.password}

        {/* example-4 and 5 */}
        <form onSubmit={formHandler}>
          <div>
            <label htmlFor="">Name</label>
            <input type="text" name="name" onChange={inputHandler} />
          </div>
          <div>
            <label htmlFor="">Email</label>
            <input type="text" name="email" onChange={inputHandler} />
          </div>
          <div>
            <label htmlFor="">Password</label>
            <input type="text" name="password" onChange={inputHandler} />
          </div>
          <button type="submit">Add</button>
        </form>
      </section>
      <section id="spacer"></section>
    </>
  )
}

export default App;