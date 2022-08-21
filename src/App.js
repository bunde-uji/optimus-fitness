import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect, createContext, useContext, useRef } from 'react';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import CartPage from './pages/CartPage';  
// import { commerce } from './lib/commerce';
import Commerce from '@chec/commerce.js';
import ProductsPage from './pages/ProductsPage';
import ProductDetails from './pages/ProductDetailsPage';
import ContactPage from './pages/ContactPage';
import SearchPage from './pages/SearchPage';
import AboutPage from './pages/AboutPage';


export const AppContext = createContext();


function App() {
  const commerce = new Commerce('pk_45647cd582af582c51ebc43dfa646d99885a2d646e48c', true);

  let [products, setProducts] = useState([]);
  let [cart, setCart] = useState();
  const [searchResults, setSearchResults] = useState();
  const [dropdownActive, setDropdownActive] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  const pageRef = useRef();

  function fetchProducts(){
    commerce.products.list({ limit:40 }).then(response => response.data)
    .then(data=>setProducts(data))
  }

  function fetchCart(){
    commerce.cart.retrieve().then(c => setCart(c));
  }

  function handleDropdown(){
    if (dropdownActive) setDropdownActive(false);
  }

  useEffect(()=>{
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(()=>{
    fetchCart();
  }, []);




  return (
    <AppContext.Provider value={{products, setProducts, cart, setCart, searchResults, setSearchResults, dropdownActive, setDropdownActive, menuActive, setMenuActive}}> 
      <div className='main' ref={pageRef} onClick={dropdownActive ? handleDropdown : undefined} >
        <Navbar cart={cart} />
        <Routes>              
          <Route path='/' index element={<HomePage fetchCart={fetchCart} />} />
          <Route path='/cart' element={<CartPage cart={cart} fetchCart={fetchCart} setCart={setCart} />} />
          <Route path='/products/:category' element={<ProductsPage />} products={products} cart={cart} fetchCart={fetchCart} />
          <Route path='/product/:id' element={<ProductDetails />} products={products} fetchCart={fetchCart} />
          <Route path='/contact' element={<ContactPage />} products={products} />
          <Route path='/about' element={<AboutPage />} products={products} />
          <Route path='/search/:q' element={<SearchPage />} />
          <Route path='*' element={<h1>404</h1>} />
        </Routes>
        <Footer />
      </div>
    </AppContext.Provider>
  );
}


export default App;
