import { useState } from "react";
import FormResults from "./FormResults";
import Error from "./error";

const Form = props => {
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [firstnameError, setFirstnameError] = useState("")
    const [lastnameError, setLastnameError] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const createUser = (e) => {
        e.preventDefault();
    }

    const handleFirstname = (e) => {
        setFirstname(e.target.value)
        if (e.target.value.length < 2 && e.target.value.length !=0) {
            setFirstnameError("Name must be longer than 2 characters!")
        }
        else {
            setFirstnameError("")
        }
    }
    const handleLastname = (e) => {
        setLastname(e.target.value)
        if (e.target.value.length < 2 && e.target.value.length !=0) {
            setLastnameError("Name must be longer than 2 characters!")
        }
        else {
            setLastnameError("")
        }
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
        if (e.target.value.length < 5 && e.target.value.length !=0) {
            setEmailError("Email must be at least 5 characters!")
        }
        else {
            setEmailError("")
        }
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
        if (e.target.value != confirmPassword && e.target.value.length !=0) {
            setPasswordError("Passwords do not match!")
        }
        else {
            setPasswordError("")
        }
    }
    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
        if (e.target.value != password && e.target.value.length !=0) {
            setPasswordError("Passwords do not match!")
        }
        else {
            setPasswordError("")
        }
    }
    
    return (
        <div className="formContainer">
            <form onSubmit={createUser}>
                <div className="formBox">
                    <label for='firstname'>First Name: </label>
                    <input name='firstname' type="text" onChange={handleFirstname} value={firstname} />
                    <Error errorMessage={firstnameError} />
                </div>
                <div className="formBox">
                    <label for='lastname'>Last Name: </label>
                    <input name='lastname' type="text" onChange={handleLastname} value={lastname} />
                    <Error errorMessage={lastnameError} />
                </div>
                <div className="formBox">
                    <label for='emailAddress'>Email Address: </label>
                    <input name='emailAddress' type="text" onChange={handleEmail} value={email} />
                    <Error errorMessage={emailError} />
                </div>
                <div className="formBox">
                    <label for='password'>Password: </label>
                    <input name='password' type="text" onChange={handlePassword} value={password} />
                </div>
                <div className="formBox">
                    <label for='confirmPassword'>Confirm Password: </label>
                    <input name='confirmPassword' type="text" onChange={handleConfirmPassword} value={confirmPassword} />
                    <Error errorMessage={passwordError} />
                </div>
                <input type="submit" value="Create User" />
            </form>
            <div className="formResults">
                <FormResults firstname={firstname} lastname={lastname} email={email} password={password} confirmPassword={confirmPassword} />
            </div>
        </div>


    )
}

export default Form