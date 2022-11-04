import { Navigate, useParams } from "react-router-dom"
import axios from 'axios'
import { useEffect, useState } from "react";
import Error from "./Error";


const DisplayPlanet = (props) => {
    const { id } = useParams();
    const [planet, setPlanet] = useState({})
    const [error, setError] = useState(null)
    useEffect(() => {axios.get(`https://swapi.dev/api/planets/${id}`).then(response => {
    
    setPlanet(response.data)

    }).catch( () => setError(true))}
    , [id])

    const planetMap = (property, i) => {
        
        return(
            <p key={i}>{property}: {planet[property]}</p>
        )
    }
    if (error) {return (<Error/>)}
    return(
        <div>
            <h1>{planet.name}</h1>
            
                {Object.keys(planet).map((planetMap))}
            
        </div>
    )
}

export default DisplayPlanet