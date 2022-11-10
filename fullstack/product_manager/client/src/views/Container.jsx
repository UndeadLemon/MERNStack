import react, { useEffect, useState} from 'react'
import Form from '../components/Form';
import ProductList from '../components/ProductList';
import axios from 'axios';

const Container = (props) => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const removeFromDom = id => {
        setProducts(products.filter(product => product._id != id));
    }
    useEffect (() => {
        axios.get('http://localhost:8000/api/product')
        .then(res =>{
            console.log(res.data)
            setProducts(res.data);
            setLoaded(true);
        })
        .catch(err => console.error(err));
        }, []);

    return (
        <div>
            <Form edit={false} product={{}}/>
            <hr/>
            {loaded && <ProductList products={products} removeFromDom={removeFromDom}/>}
        </div>
    )
    }

    export default Container