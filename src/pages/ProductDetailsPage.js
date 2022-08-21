import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom'
import '../pages/pageStyles/ProductDetailsPage.css';
import Commerce from '@chec/commerce.js';
import Card from '../components/Card/Card';    
import ProductQuantity from '../components/ProductQuantity/ProductQuantity';
import ProductDetailsBtn from '../components/ProductDetailsBtn/ProductDetailsBtn';



function ProductDetails(props) {
    const commerce = new Commerce('pk_45647cd582af582c51ebc43dfa646d99885a2d646e48c', true);

    const { id } = useParams();

    const fetchCart = props.fetchCart;

    const quantityRef = useRef();

    const [product, setProduct] = useState();

    const [relatedProducts, setRelatedProducts] = useState();

    function getProduct(){
        commerce.products.retrieve(id).then((data) => setProduct(data));
    }

    function getRelatedProducts(){
        commerce.products.list({
            category_slug: [product.categories[0].name],
        }).then(response => setRelatedProducts(response.data.filter(p=>p.name != product.name).slice(0,4)))
    }

    function handleClick(){
        commerce.cart.add(id, quantityRef.current.value).then((response) => console.log(response))
            .then(fetchCart())
    }

    useEffect(()=>{
        getProduct();
        // eslint-disable-next-line
    }, [id])

    // useEffect(()=>{
    //     getRelatedProducts();
    // })
    
    if (product) {
        console.log(product.categories[0].name);
        getRelatedProducts();
    };

    console.log(relatedProducts);
    

    return (  
        <div className='product-page'>
            {/* {product && <Card name={product.name} price={product.price.formatted} image={product.image.url} to='/' />} */}
            {product && <div className="product">
                <img src={product.image.url} alt="" />
                <div className="product-details">
                    <h2 className='product-detail'>{product.name}</h2>
                    <p dangerouslySetInnerHTML={{__html: product.description}} className='product-detail product-description' />
                    <h3 className='product-price product-detail'>{product.price.formatted_with_symbol}</h3>

                    <div className='quantity-bar'>
                        <span>Quantity: </span>
                        <input type="number" defaultValue='1' min='1' className='quantity-input' ref={quantityRef} />
                    </div>

                    <ProductDetailsBtn onClick={handleClick} />
                </div>
            </div>}

            {relatedProducts && <div className="related-products">
                <h2>You might also like</h2>
                
                <div className="related-products-container">
                    {relatedProducts.map(p => {
                        return <Card id={p.id} name={p.name} price={p.price.formatted} image={p.image.url} width='15rem' to={`/product/${p.id}`} />
                    })}
                </div>
                {/* <Card id={relatedProducts[0].id} /> */}
            </div>}
        </div>
    );
}

export default ProductDetails;