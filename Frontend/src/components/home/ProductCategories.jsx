import React from 'react';
import { FaCar, FaHome, FaTruck } from 'react-icons/fa';
import { MdElectricRickshaw } from "react-icons/md";
import { Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const categories = [
  { 
    icon: <MdElectricRickshaw size={40} />, 
    name: "E-Rickshaw",
    key: 'e-rickshaw',
    description: "Our specialty. High-performance batteries engineered for daily e-rickshaw use."
  },
  { 
    icon: <FaCar size={40} />, 
    name: "Four Wheelers",
    key: 'four-wheelers',
    description: "Reliable power and long life for all types of passenger cars, from hatchbacks to SUVs."
  },
  { 
    icon: <FaHome size={40} />, 
    name: "Home Segments",
    key: 'home-segment',
    description: "Compact and powerful batteries designed for uninterrupted power at home."
  },
  { 
    icon: <FaTruck size={40} />, 
    name: "Commercial Vehicles",
    key: 'commercial-vehicles',
    description: "Heavy-duty batteries built to withstand long journeys and tough road conditions."
  },
];

// Animation variants for the container and items
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const ProductCategories = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-2">Find the Right Battery</h2>
        <p className="text-gray-600 mb-12 text-md md:text-lg">Select your vehicle type to get started.</p>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {categories.map((cat) => (
            <motion.div 
              key={cat.key} 
              variants={itemVariants}
              className="group relative bg-white p-5 rounded-lg shadow-md transition-all duration-300 cursor-pointer overflow-hidden border-green-500 border-2 pb-0.5"
            >
              <div className="absolute inset-0 bg-lime-500 transform scale-x-100 md:scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></div>
              
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
                {/* On mobile, icon is white. On desktop, it's brand-red and turns white on hover. */}
                <div className="text-black md:text-brand-red group-hover:text-white transition-colors duration-300 mt-2 mb-2">
                  {cat.icon}
                </div>
                {/* On mobile, heading is white. On desktop, it's dark and turns white on hover. */}
                <h3 className="text-xl font-semibold text-black  md:text-brand-dark group-hover:text-white transition-colors duration-300 min-h-[56px] flex items-center justify-center">
                  {cat.name}
                </h3>
                <p className="text-sm text-white mt-2 max-h-40 opacity-100 md:max-h-0 md:opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-300 delay-150">
                  {cat.description}
                </p>
                <Link 
                  to="/batteries" 
                  state={{ defaultCategory: cat.key }}
                  className="mt-3 text-white font-bold py-2 px-5 rounded-full bg-black/20 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200 hover:bg-white hover:transition-all hover:duration-500"
                >
                  Explore
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ProductCategories;

