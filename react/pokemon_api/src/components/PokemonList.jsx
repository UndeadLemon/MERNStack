import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios'




const PokemonList = (props) => {
    const [pokemon, setPokemon] = useState([]);
    const mapPokemon = (poke, i) =>{
        return(<li key={i}>{poke.name}</li>)
    }
    const renderPokemon = (e) => (axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
    .then(response => setPokemon(response.data.results))
    .catch( (err) => console.log(err)))
    return(
        <div>
            <ul>
                <button onClick={(e) => renderPokemon()}>Fetch Pokemon</button>{pokemon.map(mapPokemon)}
            </ul>
        </div>
    )
}

export default PokemonList