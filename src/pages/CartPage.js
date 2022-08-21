import React from 'react';
import './pageStyles/CartPage.css';
import paypal from '../assets/images/paypal.png';
import paystack from '../assets/images/paystack-2.svg';
import stripe from '../assets/images/stripe-4.svg';
import Commerce from '@chec/commerce.js';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader/Loader';



function CartPage(props) {
    const commerce = new Commerce('pk_45647cd582af582c51ebc43dfa646d99885a2d646e48c', true);

    let cart = props.cart;

    let setCart = props.setCart;

    let fetchCart = props.fetchCart;

    console.log(cart);
    console.log(fetchCart);

    function handleRemove(id){
        commerce.cart.remove(id)
            .then(fetchCart())
        cart.line_items.filter(item=>item.id !== id)
    }

    function handleClearCart() {
        commerce.cart.empty()
        .then(fetchCart())
        .then(cart.line_items = [])
    }


    return (  
        <div style={{padding:'2rem 1rem', boxSizing: 'content-box', minHeight: '60vh'}}> 

            <h1 style={{margin:'0 2rem', fontWeight:'500'}}>Shopping Cart</h1>

            {cart ? <div className="cart-page"> {cart.line_items.length ? <>
                <div className='items-section'>{cart.line_items.map(item => {
                    return (
                            <div className="item-wrapper">
                                <div className="item">
                                    <img src={item.image.url} alt="" className="item-image" />
                                    <div className="item-info">
                                        <h3>{item.name}</h3>
                                        <h4>{item.price.formatted_with_symbol}</h4>
                                        <p>Quantity: {item.quantity}</p>
                                        <h4>Subtotal: {item.line_total.formatted_with_symbol}</h4>
                                    </div>
                                </div>

                                <span onClick={()=>handleRemove(item.id)}>Remove</span>
                            </div>
                    )
                })}
                    <button className='clearCart' onClick={handleClearCart}>Clear cart</button>
                </div>
                
                <div className="checkout-section">
                    <h3 style={{marginBottom:'9%'}}>TOTAL: {cart.subtotal.formatted_with_symbol}</h3>
                    <p>Orders will be processed in USD.</p>
                    <button className="checkout-btn" style={{marginBottom:'12%', marginTop:'5%'}}>
                        CHECKOUT
                    </button>
                    <button className="checkout-btn" style={{backgroundColor:'grey'}}>
                        <img src={paystack} alt="" className='brand-logo' />
                    </button>
                    <button className="checkout-btn" style={{backgroundColor:'grey'}}>
                        <img src={paypal} alt="" className='brand-logo' />
                    </button>
                    <button className="checkout-btn" style={{backgroundColor:'black'}}>
                        <img src={stripe} alt="" className='brand-logo' style={{width:'25%'}} />
                    </button>
                </div>
                 
            </>:
                <div className="cart-empty-layout">
                    <p className="cart-empty-message">There are no items in your cart</p>
                    <Link to='/' className="continue-shopping">CONTINUE SHOPPING</Link>
                </div>               
            }   
            </div>:

            <Loader />

            }

        </div>
    );
}

export default CartPage;