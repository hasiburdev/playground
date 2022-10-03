import { useState } from "react";

const users = [
    {name: "Alex", age: 20},
    {name: "Jhon", age: 23},
    {name: "Jane", age: 32}
]

const UserSearch:React.FC = () => {
    const [name, setName] = useState('')
    const [user, setUser] = useState<{name: string, age: number} | undefined>()
    const onClick = () => {
        const foundUser = users.find(user=> user.name === name )
        setUser(foundUser);

    }
    return <div>
        <h2>User Search</h2>
        <input value={name} onChange={e => setName(e.target.value)} />
        <button onClick={onClick}>Search</button>
        <hr />
        {user && <h3>Name: {user.name}</h3> }
        {user && <p>Age: {user.age}</p>}
    </div>

}

export default UserSearch;