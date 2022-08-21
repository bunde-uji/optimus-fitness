import React from 'react';
import '../Footer/Footer.css';


function Footer() {
    return (  
        <div className="footer">
            <div className="footer-top">
                <div>
                    <span className='footer-item'><i className='fa-solid fa-phone'></i>+234-810-5541-296</span>
                    <span className='footer-item'><i className='fa-solid fa-envelope'></i>info@optimusfitness.com</span>
                    <span className='footer-item'><i className='fa-solid fa-location-dot'></i>102 Moshood Abiola Rd, Garki 900103, Abuja</span>
                </div>
                <div>
                    <h3>DELIVERY & RETURNS</h3>
                    <p className='footer-item'>Terms & Conditions</p>
                    <p className='footer-item'>Privacy Policy</p>
                    <p className='footer-item'>Shipping Policy</p>
                </div>
                <div>
                    <h3>CUSTOMER SERVICE</h3>
                    <p className='footer-item'>Contact Us</p>
                    <p className='footer-item'>30 Day Guarantee</p>
                </div>
            </div>
            <div className="footer-bottom">
                <div>
                    <i className='fa-brands fa-twitter'></i>
                    <i className='fa-brands fa-instagram'></i>
                    <i className='fa-brands fa-facebook'></i>
                    <i className='fa-brands fa-linkedin'></i>
                </div>
                <div>
                    <p className='copyright'>&copy; 2022 Optimus Fitness.</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;