import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../context/user"

export const NavButton = ({path="/", text="back"}) => {
    
    const navigate = useNavigate()

    return (
        <button onClick={()=> navigate(path)}>{text}</button>
    )

}

export const Logout = () => {

    const {user, setUser} = useContext(UserContext)

    const navigate = useNavigate()

    const handleLogout = () => {
        fetch('/logout', {method: "DELETE"}).then(()=>{setUser(null); navigate('/')})
    }

    return (
        <button onClick={handleLogout}>Logout</button>
    )

}