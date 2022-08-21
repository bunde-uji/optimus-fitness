import React, { useState } from 'react';
import '../Newsletter/Newsletter.css';


function Newsletter() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function handleSubmit(e){
        e.preventDefault();
        setIsSubmitted(true);
        console.log(isSubmitted);
        e.target.reset();
    }

    return (  
        <div className='newsletter'>
            <div className="newsletter-wrapper">
                <div className="newsletter-text">
                    <h2>Become an insider</h2>
                    <p>Learn first about exclusive offers and new equipment.</p>
                </div>
                <form className="newsletter-form" onSubmit={handleSubmit}>
                    <div class="textInputWrapper">
                        <input placeholder="Enter your email address" type="email" class="textInput" />
                    </div>
                    <input type="submit" className='btn-submit' value='Subscribe' />
                </form>
            </div>
            
            {isSubmitted && <p className='subscribed-message'>Thank you for subscribing to Optimus Fitness' newsletter!</p>}

        </div>
    );
}

export default Newsletter;