import { useState } from "react"
import { NavButton } from "./Tools"

export const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const onLogin = e => {
        e.preventDefault()
        fetch('/login',  {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                username,
                password
            })
        }).then(r=>{
            if (r.ok) {
                r.json().then(data=>console.log(data))
            } else {
                r.json().then(error=>console.log(error))
            }
        })
    }


    return (
        <div>
            <form onSubmit={onLogin}>
                <input type='text' name='username' placeholder="username" onChange={e=>setUsername(e.target.value)}/><br/>
                <input type='password' name='password' placeholder="password" onChange={e=>setPassword(e.target.value)}/><br/>
                <button type="submit">Submit</button>
                <NavButton />
            </form>
        </div>
    )

}