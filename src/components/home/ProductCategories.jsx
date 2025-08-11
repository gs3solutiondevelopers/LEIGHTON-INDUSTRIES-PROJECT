// src/components/home/ProductCategories.jsx

import React from 'react';
import { FaCar, FaMotorcycle, FaTruck } from 'react-icons/fa';
import { MdElectricRickshaw } from "react-icons/md";

const categories = [
  // Since your business is E-Rickshaws, I've made it the primary, featured category.
  { icon: <MdElectricRickshaw size={40} />, name: "E-Rickshaw" },
  { icon: <FaCar size={40} />, name: "Four Wheelers" },
  { icon: <FaMotorcycle size={40} />, name: "Two Wheelers" },
  { icon: <FaTruck size={40} />, name: "Commercial Vehicles" },
];

const ProductCategories = () => {
  return (
    <div className="py-16 bg-gray-100" style={{backgroundImage: "url(https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI1LTA3L3Jhd3BpeGVsX29mZmljZV8yMl9hYnN0cmFjdF92ZWN0b3Jfb2ZfZ3JlZW5fbmVvbl9iYWNrZ3JvdW5kX2dyYV82NWZhYTM1MC05OGRlLTQ4MGYtYWE2NS05MDA0Y2QzNTRlYjItYmFubmVyLW1kNWdjeDJzLmpwZw.jpg"}}>
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-2">Find the Right Battery</h2>
        <p className="text-gray-200 mb-12 text-lg">Select your vehicle type to get started.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {categories.map((cat, index) => (
            <div 
              key={index} 
              className={`group relative bg-white p-8 rounded-lg shadow-md transition-all duration-300 cursor-pointer overflow-hidden border-2 hover:shadow-xl hover:border-green-500 ${cat.name === 'E-Rickshaw' ? 'border-green-500' : 'border-transparent'}`}
            >
              <div className="absolute inset-0 bg-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></div>
              
              <div className="relative z-10">
                <div className="text-brand-red group-hover:text-white mx-auto mb-4 transition-all duration-300 transform group-hover:scale-110">{cat.icon}</div>
                <h3 className="text-xl font-semibold text-brand-dark group-hover:text-white transition-colors duration-300">{cat.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCategories;
