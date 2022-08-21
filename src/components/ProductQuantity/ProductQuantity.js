import React from 'react';
import '../ProductQuantity/ProductQuantity.css';


function ProductQuantity(props) {

    return (  
        <div className='quantity-bar'>
            Quantity:
            {/* <button className='minus change-quantity' onClick={props.increment}>-</button> */}
            <input type="number" defaultValue='1' min='1' className='quantity-input' ref={props.ref}/>
            {/* <button className='plus change-quantity' onClick={props.decrement}>+</button> */}
        </div>
    );
}

export default ProductQuantity;