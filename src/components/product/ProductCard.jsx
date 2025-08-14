

import React from 'react';
import { FiZap, FiShield, FiCalendar } from 'react-icons/fi';

const ProductCard = ({ product }) => {
  return (
    <div className="group bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
      <div className="bg-green-500 p-4">
        <img src={product.image} alt={product.name} className="w-full h-48 object-contain group-hover:scale-105 transition-transform duration-300" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-brand-dark mb-3">{product.name}</h3>
        
        <div className="space-y-3 text-gray-600 mb-4">
          <div className="flex items-center"><FiZap className="mr-2 text-green-500" /> Capacity: <strong>{product.specs.capacity}</strong></div>
          <div className="flex items-center"><FiShield className="mr-2 text-green-500" /> Warranty: <strong>{product.specs.warranty}</strong></div>
          <div className="flex items-center"><FiCalendar className="mr-2 text-green-500" /> Type: <strong>{product.specs.type}</strong></div>
        </div>

        <div className="text-2xl font-bold text-green-600 mb-4">
          {product.price}
        </div>

        <button className="w-full bg-green-500 text-white font-bold py-2 px-4 rounded-md hover:bg-green-600 transition-colors duration-300">
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
