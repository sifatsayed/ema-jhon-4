import React from 'react';
import './Cart.css'

const Cart = (props) => {
    // console.log(props.cart)
    const {cart} = props;
    
    let total = 0 ;
    let totalQuantity = 0;
    // }
    // const total = cart.reduce((total , product) => total + product.price , 0)
    for(const product of cart) {
        product.quantity = !product.quantity ? 1 : product.quantity;
        // if(!product.quantity) {
        //     product.quantity = 1 ;
        // } else {
        //     return product.quantity
        // }

        total = total + product.price * product.quantity ;
        totalQuantity = totalQuantity + product.quantity ;
    }

    const tax = Math.round(total * .10)

    let shipping = total > 0 ? 15 : 0;

    function formetNumber (num)  {
        const precision = num.toFixed(2);
        return Number(precision)
    }

    return (
        <div style={{textAlign : "center"}}>
             <h2>Order Summary</h2>
             <h4>Items Ordered : {totalQuantity}</h4>
             <h4>Product Price : {formetNumber(total)}</h4>
             <p><small>Shipping Cost : {formetNumber(shipping)}</small></p>
             <p>Tax & Vat : {tax}</p>
             <p>Total Product Price : {formetNumber(total+tax+shipping)}</p>
        </div>
    );
};

export default Cart;