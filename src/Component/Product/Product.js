import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Rating from 'react-rating';

const Product = (props) => {
    // console.log(props.product)
    const {name, img, price, seller, stock,star} = props.product
    return (
        <div className='product-detail-container'>
            <div>
            <img src={img} alt="" />
            </div>
            <div>
            <h3>{name}</h3>
            <p>Seller : {seller}</p>
            <p>Price : {price}</p>
            <p><small>only have in stock : {stock}</small></p>
            <Rating
              emptySymbol="far fa-star icon-color"
              fullSymbol="fas fa-star icon-color"
              initialRating={star}
              readonly/>
            <br /> <br />
            <button
             onClick={() => props.handleAddToCart(props.product)}
             className='main-button'>
            <FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>
        </div>
    );
};

export default Product;