import React, {useContext} from 'react';
import { Link, useParams } from 'react-router-dom';
import '../Card/Card.css';
import Button from '../Button/Button';
import Commerce from '@chec/commerce.js';
import { AppContext } from '../../App';


function Card(props) {
    const commerce = new Commerce('pk_45647cd582af582c51ebc43dfa646d99885a2d646e48c', true);

    const { id } = useParams();

    const {cart, setCart, products} = useContext(AppContext);

    const fetchCart = props.fetchCart;

    function handleClick(){
        commerce.cart.add(props.id, 1).then((response) => console.log(response))
            .then(fetchCart())
        let prod = products.filter(p => p.id === props.id)
        cart.line_items.push(prod);
    }


    return (  
        <div className="card" id={props.id} style={{width: props.width}}>
            <Link to={props.to}>
                <img src={props.image} alt="" className='image' />
            </Link>
            <h4 className='name'>{props.name}</h4>
            <span className='price'>${props.price}</span>
            <Button width='9rem' onClick={handleClick} />
        </div>
    );
}

export default Card;