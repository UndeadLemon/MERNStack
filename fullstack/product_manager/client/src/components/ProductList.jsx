import { useState, useEffect } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

const ProductList =(props) =>{
    const navigate=useNavigate()
    const handleDelete = (id) => {
    axios.delete(`http://localhost:8000/api/product/${id}`)
    .then(res => props.removeFromDom(id))
    .catch(err => console.error(err));
    }
    
    const listProducts = (product, i) => {
        return (<li key={i}>
        
        Title: {product.title}<br/>
        Price: {product.price}<br/>
        Description: {product.description}<br/>
        <button onClick={() => handleDelete(product._id)}>Delete</button>
        <button onClick={() => navigate(`${product._id}/view`)}>Look at Product: {product.title}</button><br/>
        </li>)
    }



    return(
        <div>
            <ul>
            {props.products.map(listProducts)}
            </ul>
        </div>
    )
}

export default ProductList