import { useState } from "react";
import FormResults from "./FormResults";

const Form = props => {
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const createUser = (e) => {
        e.preventDefault();


    }
    return (
        <div class="formContainer">
            <form onSubmit={createUser}>
                <div class="formBox">
                    <label for='firstname'>First Name: </label>
                    <input name='firstname' type="text" onChange={(e) => setFirstname(e.target.value)} value={firstname} />
                </div>
                <div class="formBox">
                    <label for='lastname'>Last Name: </label>
                    <input name='lastname' type="text" onChange={(e) => setLastname(e.target.value)} value={lastname} />
                </div>
                <div class="formBox">
                    <label for='emailAddress'>Email Address: </label>
                    <input name='emailAddress' type="text" onChange={(e) => setEmail(e.target.value)} value={email} />
                </div>
                <div class="formBox">
                    <label for='password'>Password: </label>
                    <input name='password' type="text" onChange={(e) => setPassword(e.target.value)} value={password} />
                </div>
                <div class="formBox">
                    <label for='confirmPassword'>Confirm Password: </label>
                    <input name='confirmPassword' type="text" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} />
                </div>
                <input type="submit" value="Create User" />
            </form>
            <div class="formResults">
                <FormResults firstname={firstname} lastname={lastname} email={email} password={password} confirmPassword={confirmPassword} />
            </div>
        </div>


    )
}

export default Form