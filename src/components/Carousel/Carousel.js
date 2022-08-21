import React, { useState } from 'react';
import '../Carousel/Carousel.css';
import background1 from '../../assets/images/background1.jpg';
import background2 from '../../assets/images/background2.jpg';
import background3 from '../../assets/images/background3.jpg';


function Carousel() {
    let [slides, setSlides] = useState([
        {image: background1, message: "If we don't equip your gym, who will?"},
        {image: background2, message: "Your one stop shop for gym equipment"},
        {image: background3, message: "We also offer equipment rental services"}
    ])
    let [currentSlide, setCurrentSlide] = useState(slides[0])
    
    function slider(){
        setCurrentSlide(slides[slides.indexOf(currentSlide)+1]);
        if (slides.indexOf(currentSlide) === 2){
            setCurrentSlide(slides[0]);
        }
    }

    setTimeout(slider, 5000);

    return (  
        <div className="carousel" style={{backgroundImage: `url(${currentSlide.image})`}}>
            <div className="overlay"></div>

            <h1 className="message">
                {currentSlide.message}
            </h1>
        </div>
    );
}

export default Carousel;

