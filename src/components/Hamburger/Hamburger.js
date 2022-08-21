import React, { useState } from 'react';
import '../Hamburger/Hamburger.css';


function Hamburger(props) {
    const menuActive = props.menuActive;
    const setMenuActive = props.setMenuActive;

    function handleMenuClick() {
        setMenuActive(!menuActive);
    }


    return (  
        <button className="hamburger" onClick={handleMenuClick}>
            <i className={`fa-solid fa-${menuActive ? 'x' : 'bars'}`}></i>
        </button>
    );
}

export default Hamburger;