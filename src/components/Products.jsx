import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../features/cartSlice';
import { fetchProducts } from '../features/ProductsSlice';
import { STATUSES } from '../features/ProductsSlice';

const Products = () => {
    // const [products, setProducts] = useState([]);
    const dispatch = useDispatch();
    const {data: products, status} = useSelector((state) => state.product)

    const handleAdd = (product) => {
        dispatch(add(product))
    }

    useEffect(() => {

        dispatch(fetchProducts());

        // const fetchProducts = async () => {
        //     const res = await fetch('https://fakestoreapi.com/products');
        //     const data = await res.json();
        //     console.log(data);
        //     setProducts(data);
            
        // };
        // fetchProducts();
    },[]);

    if( status ===STATUSES.LOADING){
        return <h2> Loading...</h2>
    }
    if( status ===STATUSES.ERROR){
        return <h2> Something Went Wrong !</h2>
    }

  return (
    <div className="productsWrapper">
            {products.map((product) => (
                <div className="card" key={product.id}>
                    <img src={product.image} alt="" />
                    <h4>{product.title}</h4>
                    <h5>{product.price}</h5>
                    <button onClick={() => handleAdd(product)} className="btn">
                        Add to cart
                    </button>
                </div>
            ))}
        </div>
  )
}

export default Products