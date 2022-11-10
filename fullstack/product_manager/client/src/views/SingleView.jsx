import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

const SingleView = (props) => {
    const [product, setProduct] = useState({})
    const { id } = useParams();
    useEffect(() => {axios.get(`http://localhost:8000/api/product/${id}`)
    .then(res => setProduct(res.data))
    .catch(err => console.error(err));
}, [])
const navigate = useNavigate();
    return (
        <div>
            Title: {product.title}<br/>
            Price: {product.price}<br/>
            Description: {product.description}<br/>
            <button onClick={() => navigate('/')}>Return</button>
        </div>
    )
}

export default SingleView