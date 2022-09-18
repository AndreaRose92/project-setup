import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../context/user"
import { NavButton } from "./Tools"

export const Signup = () => {

    const navigate = useNavigate()

    const { setUser } = useContext(UserContext)

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('') 
    const [passwordConfirmation, setPasswordConfirmation] = useState('') 

    const onSignup = e => {
        e.preventDefault()
        fetch('/signup',  {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                username,
                password,
                password_confirmation: passwordConfirmation
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
            <form onSubmit={onSignup}>
                <input type='text' name='username' placeholder="username" onChange={e=>setUsername(e.target.value)} /><br/>
                <input type='password' name='password' placeholder="password" onChange={e=>setPassword(e.target.value)} /><br/>
                <input type='password' name='password' placeholder="passwordConfirmation" onChange={e=>setPasswordConfirmation(e.target.value)} /><br/>
                <button type="submit">Submit</button>
                <NavButton />
            </form>
        </div>
    )

}