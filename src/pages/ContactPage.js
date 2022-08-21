import React, { useRef } from 'react';
import './pageStyles/ContactPage.css';
import contact from '../assets/images/contact.svg';


function ContactPage() {
    const inputRef = useRef();

    return (  
        <div className='contact-page'>
            <h2>Contact Us</h2>

            <div className="form-area">
                <form action="" className='contact-form'>
                    <input type="text" placeholder='Name' className="contact-input" />
                    <input type="email" placeholder='Email' className="contact-input" />
                    <input type="text" placeholder='Subject' className="contact-input" />
                    <input type="text" placeholder='Zip Code' className="contact-input" />
                    <textarea name="" id="" cols="30" rows="8" placeholder='Enter your question or message here' className="contact-input" ></textarea>
                    <input type="submit" className="contact-btn" />
                </form>

                <img src={contact} alt="" className='contact-svg' />
            </div>
        </div>
    );
}

export default ContactPage;