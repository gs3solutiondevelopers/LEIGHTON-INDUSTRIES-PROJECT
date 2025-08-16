// src/components/products/CategoryShow.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const CategoryShow = ({ categoryKey, title, description, products }) => {
  return (
    <section>
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-brand-dark">{title}</h2>
        <p className="text-lg text-gray-600 mt-2">{description}</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map(product => (
          <div key={product.id} className="group bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
            <div className="bg-gray-50 p-4">
              <img src={product.image} alt={product.name} className="w-full h-48 object-contain group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-brand-dark mb-2">{product.name}</h3>
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">{product.description}</p>
              <Link 
                to={`/batteries/${categoryKey}/${product.id}`}
                className="w-full block text-center bg-green-500 text-white font-bold py-2 px-4 rounded-md hover:bg-green-600 transition-colors duration-300"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryShow;
