import { useContext } from "react"
import { UserContext } from "../context/user"
import { Logout } from "./Tools"

export const User = () => {    

    const {user, setUser} = useContext(UserContext)

    if (user !== null ) {
        return (
            <div>
                {user.username}<br/>
                <Logout action={setUser} variable={null} />
            </div>
        )
    } else {
        return (
            <div>
                <h2>How did you get here?</h2>
                <Logout />
            </div>
        )
    }
}