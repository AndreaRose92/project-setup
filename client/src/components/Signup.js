import { NavButton } from "./Tools"

export const Signup = () => {

    return (
        <div>
            <form>
                <input type='text' name='username' placeholder="username"/><br/>
                <input type='password' name='password' placeholder="password"/><br/>
                <input type='password' name='password' placeholder="passwordConfirmation"/><br/>
                <button type="submit">Submit</button>
                <NavButton />
            </form>
        </div>
    )

}