import { useState } from "react";
import axios from 'axios';

const Form = (props) => {
const [title, setTitle] = useState('')
const [price, setPrice] = useState('')
const [description, setDescription] = useState('')

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
    axios.post('http://localhost:8000/api/product/create', {
        title,
        price,
        description
    })
    .then(res=>console.log(res))
    .catch(err=>console.log(err))

}

    return(
    <div className = "productForm">
        <form onSubmit={handleSubmit}>
            <label>Text:</label><input type="text" value={title} onChange={updateTitle}/><br/>
            <label>Price:</label><input type="text" value={price} onChange={updatePrice}/><br/>
            <label>Description:</label><input type="text" value={description} onChange={updateDescription}/><br/>
            <input type="submit" value="Submit"/>
        </form>
    </div>)
}

export default Form