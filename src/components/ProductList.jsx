import React, { useState,useEffect } from 'react'
import ProductCard from './ProductCard';


function ProductList({products,addToCart}) {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {products.map((product) => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
    </div>
    );
}

export default ProductList;