import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { batteryData,productDetails } from '../data/ProductData';
import { FiZap, FiShield, FiCalendar, FiCheckCircle } from 'react-icons/fi';

const ProductDetails = () => {
  const { category, productId } = useParams();
  const product = batteryData[category]?.products.find(p => p.id === productId);
  const details = productDetails[productId];

  if (!product || !details) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold">Product Not Found</h1>
        <Link to="/batteries" className="text-green-600 mt-4 inline-block">Go back to Our Batteries</Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 bg-white p-8 rounded-lg shadow-xl">
          <div>
            <img src={product.image} alt={product.name} className="w-full h-auto object-contain rounded-lg" />
          </div>
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-brand-dark">{product.name}</h1>
            <p className="text-lg text-gray-600">{product.description}</p>
            <div className="border-t pt-6">
              <h3 className="text-2xl font-semibold mb-4">Key Specifications</h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-center text-lg"><FiZap className="mr-3 text-green-500" /> Capacity: <strong>{details.capacity}</strong></div>
                <div className="flex items-center text-lg"><FiShield className="mr-3 text-green-500" /> Warranty: <strong>{details.warranty}</strong></div>
                <div className="flex items-center text-lg"><FiCalendar className="mr-3 text-green-500" /> Type: <strong>{details.type}</strong></div>
              </div>
            </div>
            <div className="border-t pt-6">
              <h3 className="text-2xl font-semibold mb-4">Features</h3>
              <ul className="space-y-2">
                {details.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <FiCheckCircle className="h-5 w-5 mr-3 text-green-500 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetails;