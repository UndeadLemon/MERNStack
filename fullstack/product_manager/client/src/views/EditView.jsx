import Form from "../components/Form";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const EditView = (props) => {
    const {id} = useParams();
    
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const navigate = useNavigate()
    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
        .then(res => {
            setTitle(res.data.title)
            setPrice(res.data.price)
            setDescription(res.data.description)
        })
        .catch(err => {console.error(err)})
    }, []);
    

    const updateTitle = (e) => {
        e.preventDefault();
        setTitle(e.target.value)
    }
    const updatePrice = (e) => {
        e.preventDefault();
        setPrice(e.target.value)
    }
    const updateDescription = (e) => {
        e.preventDefault();
        setDescription(e.target.value);
    }
    
    const handleSubmit = (e) => {

        e.preventDefault();
        axios.put(`http://localhost:8000/api/product/${id}`, {
            title,
            price,
            description
        })
        .then(res=>console.log(res))
        .catch(err=>console.error(err))
        navigate('/')
    }
    return(
        <div className = "productForm">
            <form onSubmit={handleSubmit}>
                <label>Text:</label><input type="text" value={title} onChange={updateTitle}/><br/>
                <label>Price:</label><input type="text" value={price} onChange={updatePrice}/><br/>
                <label>Description:</label><input type="text" value={description} onChange={updateDescription}/><br/>
                <input type="submit" value="Submit"/>
            </form>
            <button onClick={() => navigate('/')}>Return</button>
        </div>)
}

export default EditView