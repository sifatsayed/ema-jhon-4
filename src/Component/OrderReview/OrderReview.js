import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReveiwItem from '../ReviewItem/ReveiwItem';

const OrderReview = () => {
    const [products, setProducts] = useProducts()
    const [cart, setCart] = useCart(products);
    const navigate = useNavigate();

    const handleRemove = (key) => {
        const newCart = cart.filter(product => product.key !== key)
        setCart(newCart)
        removeFromDb(key)
    }

    const handlePlaceOrder = () => {
        navigate('/placeorder')
        setCart([])
        clearTheCart()
    }
    return (
        <div className='shop-container'>
           <div className="product-container">
             {
                 cart.map(product => <ReveiwItem 
                    handleRemove={handleRemove}
                    product={product}></ReveiwItem>)
             }
           </div>
           <div className="cart-container">
               <Cart cart={cart}>
                   <button 
                   onClick={handlePlaceOrder}
                   className='main-button'>Place Order</button>
               </Cart>
           </div>
        </div>
    );
};

export default OrderReview;