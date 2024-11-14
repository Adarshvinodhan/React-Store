import React from "react";
import { useState,useEffect } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import CartPopup from "./components/CartPopup";


export default function App() {
  const [products, setProducts] = useState([]);
  const [cart,setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false); 

  useEffect(() => {
      fetch('https://fakestoreapi.com/products/')
          .then((res) => res.json())
          .then((data) => setProducts(data))
          .catch((error) => console.error('Error fetching products:', error));
  }, []);

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
        <>
         <Navbar cartCount={cartCount} openCart={openCart}/>
         <ProductList products={products} addToCart={addToCart}/>
         {isCartOpen && (
                <CartPopup cart={cart} closeCart={closeCart} removeFromCart={removeFromCart} />
         )}
        </>
      )
}

