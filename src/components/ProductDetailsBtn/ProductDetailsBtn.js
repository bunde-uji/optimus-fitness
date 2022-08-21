import React from 'react';
import { useParams } from 'react-router-dom';
import '../ProductDetailsBtn/ProductDetailsBtn.css';


function ProductDetailsBtn(props) {
    return (  
        <button className='addBtn' onClick={props.onClick} >ADD TO CART</button>
    );
}

export default ProductDetailsBtn;