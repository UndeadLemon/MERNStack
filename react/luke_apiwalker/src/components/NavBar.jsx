import { useState } from "react";
import { useNavigate } from "react-router-dom";
console.log("Navbar loaded")

const NavBar = (props) => {
    const [selectedType, setSelectedType] = useState("people")
    const [id, setId] = useState(1)
    const navigate = useNavigate();
    return(
        <div className = "navBar">
            <form onSubmit={e => {e.preventDefault()
                navigate(`/${selectedType}/${id}`)}}>
            Search For: <select value={selectedType} onChange ={e => setSelectedType(e.target.value)}>
                <option value="people">People</option>
                <option value="planets">Planets</option>
            </select>
            <span>ID:</span><input type="number" value={id} onChange={e => setId(e.target.value)}/>
            <input type="submit" value="Search"/>
            </form>
        </div>
    )
}

export default NavBar