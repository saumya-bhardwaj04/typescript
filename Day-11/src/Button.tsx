interface ButtonProps {
  count: number,
  setCount: React.Dispatch<React.SetStateAction<number>>,
}
function Button({ count, setCount }: ButtonProps) {
  return (
    <button
      className="counter"
      onClick={() => setCount((count) => count + 1)}
    >
      Count is {count}
    </button>
  )
}
export default Button;