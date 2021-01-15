import { useEffect, useState } from 'react';
import { fetchProducts } from '../api';
import OrderLocation from './OrderLocation';
import ProductList from './ProductsList';
import StepsHeader from './StepsHeader';
import { OrderLocationdata, Product } from './types';
import './styles.css';
import OrderSummary from './OrderSummary';
import Footer from '../Footer';

function Orders(){

    const [products, setProducts] = useState<Product[]>([]);
    const [orderLocation, setOrderLocation] = useState<OrderLocationdata>();

    useEffect(() =>{
        fetchProducts()
        .then(response => setProducts(response.data))
        .catch(error => console.log(error))
    },[]);

    return(
        <>
            <div className="orders-container">
                <StepsHeader/>
                <ProductList products={products}/>
                <OrderLocation onChangeLocation={location => setOrderLocation(location)}/>
                <OrderSummary/>
            </div>
            <Footer/>
        </>
    )
}

export default Orders;