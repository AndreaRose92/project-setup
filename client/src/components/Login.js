import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../context/user"
import { NavButton } from "./Tools"

export const Login = () => {

    const { setUser } = useContext(UserContext)

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

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
                r.json().then(data=>{setUser(data); navigate('/')})
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
            </form>
            <NavButton />
        </div>
    )

}