import { useState, useEffect } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

const ProductList =(props) =>{
    const navigate=useNavigate()

    const buttonNavigate = (id) => {
        
    }
    const listProducts = (product, i) => {
        return (<li key={i}>
        
        Title: {product.title}<br/>
        Price: {product.price}<br/>
        Description: {product.description}<br/>
        <button onClick={() => navigate(`/single/${product._id}`)}>Look at Product: {product.title}</button><br/>
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