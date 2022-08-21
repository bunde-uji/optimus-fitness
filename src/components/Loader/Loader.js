import React from 'react';
import '../Loader/Loader.css';


function Loader(props) {
    return (  
    <div class="pinwheel">
        <div class="pinwheel__line"></div>
        <div class="pinwheel__line"></div>
        <div class="pinwheel__line"></div>
        <div class="pinwheel__line"></div>
        <div class="pinwheel__line"></div>
        <div class="pinwheel__line"></div>
    </div>
    );
}

export default Loader;