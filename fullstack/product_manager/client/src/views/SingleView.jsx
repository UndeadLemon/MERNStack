import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

const SingleView = (props) => {
    const navigate = useNavigate();
    const [product, setProduct] = useState({})
    const { id } = useParams();
    useEffect(() => {axios.get(`http://localhost:8000/api/product/${id}`)
    .then(res => setProduct(res.data))
    .catch(err => console.error(err));
}, [])
const deleteButton = (id) => {
    axios.delete(`http://localhost:8000/api/product/${id}`)
    .then(res => console.log(res))
    .catch(err => console.error(err));
    navigate('/')
}

    return (
        <div>
            Title: {product.title}<br/>
            Price: {product.price}<br/>
            Description: {product.description}<br/>
            <button onClick={() => navigate(`/${id}/edit`)}>Edit</button>
            <button onClick={() => navigate('/')}>Return</button>
            <button onClick={() => deleteButton(id)}>Delete</button>
        </div>
    )
}

export default SingleView