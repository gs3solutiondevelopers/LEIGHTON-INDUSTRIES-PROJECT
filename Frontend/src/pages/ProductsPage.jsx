
import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { batteryData } from '../data/ProductData';
import ProductCard from '../components/product/ProductCard';

const categories = [
  { key: 'e-rickshaw', name: 'E-Rickshaw' },
  { key: 'four-wheelers', name: 'Four Wheelers' },
  { key: 'home-segment', name: 'Home Segment' },
  { key: 'commercial-vehicles', name: 'Commercial Vehicles' },
];

const ProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState('e-rickshaw');
  const activeProducts = batteryData[activeCategory].products;

  return (
    <div className="bg-white">

      <div className="relative h-72 md:h-96">
        <img 
          src={batteryData[activeCategory].bannerImage} 
          alt={`${batteryData[activeCategory].title}`} 
          className="absolute inset-0 w-full h-full object-cover z-0 transition-all duration-500"
        />
        <div className="relative z-10 h-full flex flex-col items-center justify-center bg-black/60 text-white text-center p-4">
          <h1 className="text-4xl md:text-5xl font-bold">Our Batteries</h1>
          <p className="text-lg mt-4">Powering every journey with reliability and performance.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="border-b border-gray-200 mb-12">
          <div className="flex justify-start md:justify-center overflow-x-auto whitespace-nowrap">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`relative py-4 px-4 sm:px-6 text-base sm:text-lg font-semibold transition-colors duration-300 flex-shrink-0 ${
                  activeCategory === cat.key ? 'text-green-600' : 'text-gray-500 hover:text-green-500'
                }`}
              >
                {cat.name}
                {activeCategory === cat.key && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-green-600"
                    layoutId="underline"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {activeProducts.map((product) => (
              <ProductCard key={product.id} product={product} categoryKey={activeCategory} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
export default ProductsPage;
