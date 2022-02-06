import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products , setProducts] = useState([]);
    const [cart, setCart] = useState([])
    const [displayProducts, setDisplayProducts] = useState([])

    useEffect(() => {
        fetch('./products.JSON')
        .then(res => res.json())
        .then(data => {
            setProducts(data);
            setDisplayProducts(data)
        })
    },[]);

   
    const handleAddToCart = (product) => {
        const newCart = [...cart , product];
        setCart(newCart)
        // save to local storage for now 
        addToDb(product.key)
    }

    useEffect(() => {
        if(products.length) {
             const saveCart = getStoredCart();
             const storedCart = [];
             for(const key in saveCart) {
                 const addedProduct = products.find(product => product.key === key);
                 if(addedProduct) {
                     const quantity = saveCart[key];
                     addedProduct.quantity = quantity ;
                    storedCart.push(addedProduct);   
                 }    
             }
             setCart(storedCart)
        }
     },[products])

     const handleSearch = (event) => {
         const searchText = (event.target.value);
         const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()))
         setDisplayProducts(matchedProducts)
         console.log(matchedProducts.length)
     }

    return (
        <div>
            <div className="search-container">
                <input
                 onChange={handleSearch}
                 type="text" placeholder='Search Your Products' />
            </div>
            <div className='shop-container'>
            <div className="product-container">
                {
                   displayProducts.map(product => <Product 
                        handleAddToCart={handleAddToCart}
                        key = {product.key}
                        product={product}></Product>)
                }
            </div>
            <div className="cart-container">
               <Cart cart={cart}></Cart>
            </div>
        </div>
        </div>
    );
};

export default Shop;