import React, { useContext, useState, useEffect } from 'react';
import { productsContext } from '../App';
import Commerce from '@chec/commerce.js';
import { Link, useParams } from 'react-router-dom';
import Card from '../components/Card/Card';
import '../pages/pageStyles/ProductsPage.css';
import Loader from '../components/Loader/Loader';


function ProductsPage(props) {

    const { category } = useParams();

    const fetchCart = props.fetchCart;

    const [categories, setCategories] = useState();

    const commerce = new Commerce('pk_45647cd582af582c51ebc43dfa646d99885a2d646e48c', true);

    function fetchCategories(){
        commerce.products.list({
            category_slug: [category],
        }).then(response => response.data)
        .then(data=>setCategories(data))
    }

    useEffect(()=>{
        fetchCategories();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [category])


    return (  
        <div className='wrapper'>
            {categories ? categories.map(product=>{
                return (<>
                    <Card name={product.name} image={product.image.url} price={product.price.formatted} id={product.id} to={`/product/${product.id}`} fetchCart={fetchCart} width='20rem' />
                </>)
            }): <Loader />}
            
        </div>
        
    );
}

export default ProductsPage;