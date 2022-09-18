import { useContext, useEffect } from "react"
import { UserContext } from "../context/user"
import { NavButton } from "./Tools"

export const Root = () => {

    const {user, setUser} = useContext(UserContext)

    useEffect(()=>{
        fetch('/me').then(r=>{
            if (r.ok) {
                r.json().then(data=>setUser(data))
            } else {
                r.json().then(error=>{setUser(null); console.log(error)})
            }
        })
    }, [])

    if (user) {
        return (
            <>
                <h1>Welcome to the internet, {user.username}</h1>
                <NavButton path={`/user/${user.id}`} text={'me'} />
            </>
        )
    } else {
        return (
            <>
                <h1>Welcome to the internet. Sign in to continue</h1>
                <NavButton path={'/login'} text={'login'} />{" "}
                <NavButton path={'/signup'} text={'signup'} />
            </>
        )
    }
}