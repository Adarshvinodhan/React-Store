import React from 'react'


function Navbar({cartCount,openCart}) {
  return (
    <>
<nav className="h-[10vh] flex items-center justify-between px-4 sm:px-12 shadow-md">
  {/* Logo */}
  <div className="flex items-center">
    <img src="/icons/logo.png" alt="Logo" className="h-11 sm:h-10 mr-2" />
  </div>
  
  {/* Search Bar */}
  <div className="relative w-full sm:w-[35vw] sm:left-60 mt-2 sm:mt-0">
    <img 
      src="/icons/search.png" 
      alt="Search" 
      className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
    />
    <input 
      type="text" 
      placeholder="Search for products, brands and more" 
      className="w-full pl-10 pr-4 py-1 text-sm bg-gray-100 rounded-md focus:outline-none focus:bg-white"
    />
  </div>
  
  {/* Cart and LinkedIn Icons */}
  <div className="flex items-center space-x-4 ml-2">
    <button className="relative" onClick={openCart}>

      {/*Cart icon */}
      <img src="/icons/cart.png" alt="Cart" className="h-7 w-11 sm:h-6 sm:w-full" />
      <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-semibold rounded-full h-5 w-5 flex items-center justify-center">
        {cartCount}
      </span>
    </button>
    
    {/* LinkedIn Icon */}
    <a href="https://linkedin.com/in/adarshvinodhan" target="_blank" rel="noopener noreferrer">
      <img src="/icons/linkedin.png" alt="LinkedIn" className="h-7 w-11 sm:h-6 sm:w-full" />
    </a>
  </div>
</nav>




    </>
  )
}

export default Navbar
