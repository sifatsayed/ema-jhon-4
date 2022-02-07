import React from 'react';

const ReveiwItem = (props) => {
    const {name , quantity , price, stock, key} = props.product;
    const {handleRemove} = props ;
    return (
        <div className='product'>
           <div>
           <h4>{name}</h4>
            <p>Price : {price}</p>
            <p>Quantity : {quantity}</p>
            <p>only have in stock : {stock}</p>
            <button onClick={ () => handleRemove(key)} className='main-button'>Remove Item</button>
           </div>
        </div>
    );
};

export default ReveiwItem;