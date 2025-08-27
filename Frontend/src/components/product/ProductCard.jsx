// src/components/products/ProductCard.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, categoryKey }) => {
  // --- THIS IS THE FIX ---
  // Use the correct property 'heroImage' and add a check to prevent errors
  const imageUrl = product.heroImage 
    ? `${import.meta.env.VITE_API_URL}/${product.heroImage.replace(/public[\\/]/, '')}`
    : 'https://placehold.co/600x400?text=No+Image'; // Fallback image
  // -------------------------

  return (
    <div className="group bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col">
      <div className="bg-gray-50 p-4">
        <img 
          src={imageUrl} 
          alt={product.name} 
          className="w-full h-48 object-contain group-hover:scale-105 transition-transform duration-300" 
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-brand-dark mb-2">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-3 flex-grow">
          {product.description}
        </p>
        <Link 
          to={`/batteries/${categoryKey}/${product._id}`}
          className="w-full block text-center mt-auto bg-green-500 text-white font-bold py-2 px-4 rounded-md hover:bg-green-600 transition-colors duration-300"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};
export default ProductCard;
