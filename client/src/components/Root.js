import { NavButton } from "./Tools"

export const Root = () => {
    return (
        <>
            <h1>Welcome to the internet</h1>
            <NavButton path={"/login"} text={"login"} /> <NavButton path={"/signup"} text={"signup"} />
        </>
    )
}