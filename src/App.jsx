import React from "react";
import { useState,useEffect } from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Cart from "./pages/Cart"



export default function App() {
  const [products, setProducts] = useState([]);
  const [activeCategory,setActiveCategory] = useState('all')
  const [cart,setCart] = useState([{"id":1,"title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops","price":109.95,"description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday","category":"men's clothing","image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg","rating":{"rate":3.9,"count":120}}]);


  useEffect(() => {
      fetch('https://fakestoreapi.com/products/')
          .then((res) => res.json())
          .then((data) => setProducts(data))
          .catch((error) => console.error('Error fetching products:', error));
  }, []);

  //Category Based Filtering
  const handleCategoryChange = (category)=>setActiveCategory(category)


  const addToCart = (product) => {
    // Check if the product is already in the cart by comparing product IDs
    const isProductInCart = cart.some((item) => item.id === product.id);
    
    if (isProductInCart) {
        alert("This product is already in the cart.");
    } else {
        setCart((prevCart) => [...prevCart, product]);
    }
};

  const cartCount = cart.length
  
  const removeFromCart = (product) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== product.id));
};

const closeCart = () => {
    setIsCartOpen(false);
};

const openCart = () => {
    setIsCartOpen(true);
};
  

      return(
       
        <Router>
          <Navbar handleCategoryChange={handleCategoryChange} cartCount={cartCount} openCart={openCart}/>
           <Routes>
              <Route path='/' element={<ProductList products={products} activeCategory={activeCategory} addToCart={addToCart}/>}/>
              <Route path='/cart' element={<Cart cart={cart} removeFromCart={removeFromCart}/>}/>
          </Routes>
         </Router>
        )}

