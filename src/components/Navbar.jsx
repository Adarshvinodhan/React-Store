import React from 'react'


function Navbar({handleCategoryChange,cartCount,openCart}) {
  return (
    <>
<nav className="h-[10vh] flex items-center justify-between px-4 sm:px-12 shadow-md relative">
  {/* Logo */}
  <div className="flex items-center">
    <img src="/icons/logo.png" alt="Logo" className="h-10 sm:h-11 mr-2" />
  </div>

  {/* Category Menu */}
  <div className="hidden sm:flex">
    <ul className="flex space-x-6">
      <li>
        <button
          onClick={() => handleCategoryChange("men's clothing")}
          className="relative text-gray-600 font-semibold underline-offset-8 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-red-600 before:transition-all before:duration-300 hover:before:w-full">
          Men
        </button>
      </li>
      <li>
        <button
          onClick={() => handleCategoryChange("women's clothing")}
          className="relative text-gray-600 font-semibold underline-offset-8 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-red-600 before:transition-all before:duration-300 hover:before:w-full">
          Women
        </button>
      </li>
      <li>
        <button
          onClick={() => handleCategoryChange("electronics")}
          className="relative text-gray-600 font-semibold underline-offset-8 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-red-600 before:transition-all before:duration-300 hover:before:w-full">
        
          Electronics
        </button>
      </li>
      <li>
        <button
          onClick={() => handleCategoryChange("jewelery")}
          className="relative text-gray-600 font-semibold underline-offset-8 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-red-600 before:transition-all before:duration-300 hover:before:w-full">
          Jewelry
        </button>
      </li>
    </ul>
  </div>

  {/* Dropdown for Smaller Devices */}
  <div className="sm:hidden relative">
    <button className="text-gray-600 focus:outline-none">
      Categories
    </button>
    <ul className="absolute hidden bg-white shadow-md mt-2 w-40 rounded-md group-hover:block">
      <li>
        <button
          onClick={() => handleCategoryChange("men's clothing")}
          className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100"
        >
          Men
        </button>
      </li>
      <li>
        <button
          onClick={() => handleCategoryChange("women's clothing")}
          className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100"
        >
          Women
        </button>
      </li>
      <li>
        <button
          onClick={() => handleCategoryChange("electronics")}
          className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100"
        >
          Electronics
        </button>
      </li>
      <li>
        <button
          onClick={() => handleCategoryChange("jewelery")}
          className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100"
        >
          Jewelry
        </button>
      </li>
    </ul>
  </div>

  {/* Search Bar */}
  <div className="relative flex-grow max-w-lg ml-4 sm:ml-0 hidden sm:flex">
    <img
      src="/icons/search.png"
      alt="Search"
      className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
    />
    <input
      type="text"
      placeholder="Search for products, brands and more"
      className="w-full pl-10 pr-4 py-2 text-sm bg-gray-100 rounded-md focus:outline-none focus:bg-white"
    />
  </div>

  {/* Search Icon for Smaller Devices */}
  <div className="sm:hidden">
    <button className="text-gray-600 focus:outline-none">
      <img src="/icons/search.png" alt="Search" className="h-6 w-6" />
    </button>
    <div className="hidden group-hover:block absolute top-10 left-0 w-full bg-white shadow-md p-2">
      <input
        type="text"
        placeholder="Search for products, brands and more"
        className="w-full pl-4 pr-4 py-2 text-sm bg-gray-100 rounded-md focus:outline-none focus:bg-white"
      />
    </div>
  </div>

  {/* Cart and LinkedIn Icons */}
  <div className="flex items-center space-x-4 ml-4">
    <button className="relative" onClick={openCart}>
      <img src="/icons/cart.png" alt="Cart" className="h-7 sm:h-6" />
      <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-semibold rounded-full h-5 w-5 flex items-center justify-center">
        {cartCount}
      </span>
    </button>
    <a
      href="https://linkedin.com/in/adarshvinodhan"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src="/icons/linkedin.png" alt="LinkedIn" className="h-7 sm:h-6" />
    </a>
  </div>
</nav>








    </>
  )
}

export default Navbar
