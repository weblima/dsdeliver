import { useEffect, useState } from 'react';
import { fetchProducts } from '../api';
import OrderLocation from './OrderLocation';
import ProductList from './ProductsList';
import StepsHeader from './StepsHeader';
import { Product } from './types';
import './styles.css';

function Orders(){

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() =>{
        fetchProducts()
        .then(response => setProducts(response.data))
        .catch(error => console.log(error))
    },[]);

    return(
        <div className="orders-container">
            <StepsHeader/>
            <ProductList products={products}/>
            <OrderLocation/>
        </div>
    )
}

export default Orders;