
import React from 'react';
import { FaCar, FaHome, FaTruck } from 'react-icons/fa';
import { MdElectricRickshaw } from "react-icons/md";

const categories = [
  { 
    icon: <MdElectricRickshaw size={40} />, 
    name: "E-Rickshaw",
    description: "Our specialty. High-performance batteries engineered for daily e-rickshaw use."
  },
  { 
    icon: <FaCar size={40} />, 
    name: "Four Wheelers",
    description: "Reliable power and long life for all types of passenger cars, from hatchbacks to SUVs."
  },
  { 
    icon: <FaHome size={40} />, 
    name: "Home Segments",
    description: "Compact and powerful batteries designed for quick starts and consistent performance."
  },
  { 
    icon: <FaTruck size={40} />, 
    name: "Commercial Vehicles",
    description: "Heavy-duty batteries built to withstand long journeys and tough road conditions."
  },
];

const ProductCategories = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-brand-dark mb-2">Find the Right Battery</h2>
        <p className="text-gray-600 mb-12 text-lg">Select your vehicle type to get started.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {categories.map((cat, index) => (
            <div 
              key={index} 
              className="group relative bg-white p-8 rounded-lg shadow-md transition-all duration-300 cursor-pointer overflow-hidden hover:scale-105 border-green-500 border-2"
            >
              <div className="absolute inset-0 bg-lime-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></div>
              
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
                <div className="text-brand-red group-hover:text-white transition-colors duration-300 mb-4">
                  {cat.icon}
                </div>
                <h3 className="text-xl font-semibold text-brand-dark group-hover:text-white transition-colors duration-300">
                  {cat.name}
                </h3>
                <p className="text-sm text-white mt-2 max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-300 delay-150">
                  {cat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCategories;
