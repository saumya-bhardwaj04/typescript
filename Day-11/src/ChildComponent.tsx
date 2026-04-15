interface ChildComponentProps {
    name: string, 
    age: string, 
    email? : string
}

function ChildComponent({ name, age, email }: ChildComponentProps) {
    return (
        <h1>{name} - {age} - {email}</h1>
    )
}
export default ChildComponent;