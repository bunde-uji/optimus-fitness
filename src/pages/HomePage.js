import React, { useState, useContext, useEffect } from 'react';
import './pageStyles/HomePage.css';
import Carousel from '../components/Carousel/Carousel';
import Card from '../components/Card/Card';
import gym1 from '../assets/images/gym1.jpg';
import gym2 from '../assets/images/gym2.jpg';
import Newsletter from '../components/Newsletter/Newsletter';
import { AppContext } from '../App';
import Commerce from '@chec/commerce.js';
import { Link, useParams } from 'react-router-dom';


// import { commerce } from '../lib/commerce';



function HomePage(props) {
    const commerce = new Commerce('pk_45647cd582af582c51ebc43dfa646d99885a2d646e48c', true);

    const {products} = useContext(AppContext)

    const fetchCart = props.fetchCart;

    const [featuredProducts, setFeaturedProducts] = useState();

    function fetchFeaturedProducts(){
        commerce.products.list({
            sortBy: 'price',
            sortOrder: 'desc',
        }).then(response => response.data)
        .then(data=>setFeaturedProducts(data.slice(4,8)))
    }

    useEffect(()=>{
        fetchFeaturedProducts();
    },[])
    
    // console.log(featuredProducts);
    
    return (  
        <div className='home'>
            <Carousel />
            
            <div className="featured-products">
                <h2>Featured products</h2>
                <div className="featured-products-wrapper">
                {featuredProducts && featuredProducts.map(product=>{
                    return (
                        <Card name={product.name} image={product.image.url} price={product.price.formatted} id={product.id} to={`/product/${product.id}`} fetchCart={fetchCart} width='16rem' />
                    )
                })}
                </div>
            </div>

            <div className="about-section">
                <div id='about-top'>
                    <div className="about-text">
                        <h2>Quality workout in the convenience of your home</h2>
                        <p>Sophisticated machines engineered to withstand hardcore training. From mall walkers to ultra-marathoners, our treadmills are designed to deliver an exceptional experience.</p>
                    </div>
                    <img src={gym1} alt="" className='about-img img1' />
                </div>

                <div id='about-bottom'>
                    <img src={gym2} alt="" className='about-img img2' />
                    <div className="about-text">
                        <h2>We provide the exercise tools needed to enhance your fitness experience from your home.</h2>
                        <p>We carry the largest selection of exercise equipment. If you are looking for the best equipment to add to your home gym, you've come to the right place. Chat with our knowledgeable Fitness Professionals help you find the perfect fitness equipment for your needs!</p>
                    </div>
                </div>
                
            </div>

            <Newsletter />
        </div>
    );
}


 

export default HomePage;