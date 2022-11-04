
import { Navigate, useParams } from "react-router-dom"
import axios from 'axios'
import { useEffect, useState } from "react";
import Error from "./Error";


const DisplayPerson = (props) => {
    const { id } = useParams();
    const [person, setPerson] = useState({})
    const [error, setError] = useState(null)
    useEffect(() => {axios.get(`https://swapi.dev/api/people/${id}`).then(response => {
        
        setPerson(response.data)}).catch(() => {setError(true)})}
    , [id])

    const personMap = (property, i) => {
        
        return(
            <p key={i}>{property}: {person[property]}</p>
        )
    }
    if (error) {return (<Error/>)}
    return(
        <div>
            <h1>{person.name}</h1>
            
                {Object.keys(person).map((personMap))}
            
        </div>
    )
}

export default DisplayPerson