import React from 'react';
import '../Button/Button.css'; 


function Button(props) {
    return (  
        <button className='btn' style={{ width:props.width }} onClick={props.onClick}>Add to cart</button>
    );
}

export default Button;