// CartPopup.js
import React from 'react';

// CartPopup.js
// CartPopup.js
function CartPopup({ cart, closeCart, removeFromCart }) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-8 rounded-lg w-96 max-w-full shadow-xl relative">
                {/* Close Button inside the popup */}
                <button 
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                    onClick={closeCart}
                >
                    <span className="text-2xl font-bold">&times;</span> {/* Close symbol */}
                </button>
                <h2 className="text-2xl font-semibold mb-6 text-center">Your Cart</h2>
                <ul className="space-y-4">
                    {cart.length === 0 ? (
                        <li className="text-center text-gray-500">Your cart is empty.</li>
                    ) : (
                        cart.map((product, index) => (
                            <li key={index} className="flex justify-between items-center">
                                {/* Product Image */}
                                <img 
                                    src={product.image} 
                                    alt={product.title} 
                                    className="w-16 h-16 object-cover rounded mr-4"
                                />
                                <span className="flex-1">{product.title}</span>
                                <button 
                                    className="bg-red-700 text-white text-sm font-bold px-2 py-2 rounded-lg hover:bg-red-800"
                                    onClick={() => removeFromCart(product)}
                                >
                                    Remove
                                </button>
                            </li>
                        ))
                    )}
                </ul>
            </div>
        </div>
    );
}


export default CartPopup;


