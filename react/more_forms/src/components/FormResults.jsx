import { useState } from "react";
const FormResults = props => {

    return (
        
        <div>
            <p>
                First Name: {props.firstname}
            </p>
            <p>
                Last Name: {props.lastname}
            </p>
            <p>
                Email: {props.email}
            </p>
            <p>
                Password: {props.password}
            </p>
            <p>
                Confirm Password: {props.confirmPassword}
            </p>
        </div>
    )
}

export default FormResults