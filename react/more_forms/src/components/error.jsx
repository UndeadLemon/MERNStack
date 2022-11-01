import {useState} from "react"

const Error = props => {
    return (
        
            props.errorMessage ?
                <p style={{ color: 'red' }}>{props.errorMessage}</p> :
                ''
        
    )
}

export default Error