import React, { useState, useRef, useContext } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import '../Navbar/Navbar.css';
import logo from '../../assets/images/optimus2.png';
import { AppContext } from '../../App';
import Commerce from '@chec/commerce.js';
import Hamburger from '../Hamburger/Hamburger';



function Navbar(props) {
    const commerce = new Commerce('pk_45647cd582af582c51ebc43dfa646d99885a2d646e48c', true);

    const {searchResults, setSearchResults, dropdownActive, setDropdownActive, menuActive, setMenuActive} = useContext(AppContext);

    const [mobileSearchActive, setMobileSearchActive] = useState(false);

    const navigate = useNavigate();

    const cart = props.cart;

    function handleDropdownClick(){
        setDropdownActive(!dropdownActive);
    }

    function handleMenuClick(){
        // if (menuActive) setMenuActive(false);
        setMenuActive(!menuActive);
    }

    function handleSearch(e){
        e.preventDefault();
        const searchInput = searchRef.current.value;
        
        commerce.products.list({
            query: searchInput,
          }).then(response => response.data)
          .then(data => setSearchResults(data))
            .then(navigate(`/search/${searchInput}`))
        
        e.target.reset();
        setMobileSearchActive(false);            
    }

    function handleMobileSearch() {
        setMobileSearchActive(!mobileSearchActive);
    }

    function menuDeactivate(){
        setMenuActive(false);
    }

    const searchRef = useRef();

    const { category, q } = useParams()

    if (searchResults) console.log(searchResults);


    return (
        <>  
        <div className='navbar'>
                <Link to='/' className="nav-portion nav-start" onClick={menuDeactivate}>
                    <img src={logo} alt="logo" className="logo" />
                </Link>
                <ul className={`nav-portion nav-mid navlist ${menuActive ? 'menu-active' : 'menu-inactive'}`}>
                    <Link to='/' className='nav-item' onClick={menuDeactivate}><li>Home</li></Link>
                    <div className='nav-item products'>
                        <li onClick={handleDropdownClick} className='nav-products'>
                            Products 
                            <i className={`products-chevron fa-solid fa-chevron-${dropdownActive? 'up': 'down'}`}></i>
                        </li>
                        <ul className={`dropdown ${dropdownActive? 'active': 'inactive'}`} onClick={menuDeactivate}>
                            <li className='dropdown-item'><Link to='/products/treadmills'>Treadmills</Link></li>
                            <li className='dropdown-item'><Link to='/products/ellipticals'>Ellipticals</Link></li>
                            <li className='dropdown-item'><Link to='/products/bikes'>Bikes</Link></li>
                            <li className='dropdown-item'><Link to='/products/weights'>Weights</Link></li>
                            <li className='dropdown-item'><Link to='/products/accessories'>Accessories</Link></li>
                        </ul>
                    </div>
                    <Link to='/about' className='nav-item' onClick={menuDeactivate}>
                        <li>About</li>
                    </Link>
                    <Link to='/contact' className='nav-item' onClick={menuDeactivate}>
                        <li>Contact</li>
                    </Link>
                </ul>

            <div className="nav-portion nav-end">
                <form className="search" onSubmit={handleSearch}>
                    <input type="text" placeholder='Search' ref={searchRef} />
                    <button type='submit' className='search-submit' >
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </form>

                <button className='search-icon' onClick={handleMobileSearch}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>

                <Link className='cart' to='/cart'>
                    <i className="fa-solid fa-cart-shopping"></i>
                    {cart && <div><span className='cart-quantity'>{cart.total_items}</span></div>}
                </Link>

                <Hamburger menuActive={menuActive} setMenuActive={setMenuActive} />
            </div>
        </div>

        {mobileSearchActive &&
            <div className="search-wrapper">
                <form id='mobile-search' onSubmit={handleSearch}>
                    <input type="text" placeholder='Search' ref={searchRef} />
                    <i className="fa-solid fa-magnifying-glass"></i>
                </form>
            </div>  
        }
        </>
    );
}

export default Navbar;