
import React from 'react';
import { useParams, Link } from 'react-router-dom';

import { batteryData, productDetails } from '../data/productData'; 
import { FiZap, FiShield, FiCalendar, FiCheckCircle } from 'react-icons/fi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import ProductCard from '../components/product/ProductCard'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ProductDetailPage = () => {
  const { category, productId } = useParams();
  const product = batteryData[category]?.products.find(p => p.id === productId);
  const details = productDetails[productId];

  const relatedProducts = batteryData[category]?.products.filter(p => p.id !== productId);

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
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 bg-white p-6 sm:p-8 rounded-lg shadow-xl">
          
          <div className="w-full">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={10}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              className="w-full rounded-lg"
            >
              {details.images.map((image, index) => (
                <SwiperSlide key={index}>
                  <img 
                    src={image} 
                    alt={`${product.name} view ${index + 1}`} 
                    className="w-full h-72 md:h-96 object-contain" 
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold text-brand-dark">{product.name}</h1>
            <p className="text-base md:text-lg text-gray-600">{product.description}</p>
            
            <div className="border-t pt-6">
              <h3 className="text-xl md:text-2xl font-semibold mb-4">Key Specifications</h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-center text-base md:text-lg"><FiZap className="mr-3 text-green-500" /> Capacity: <strong>{details.capacity}</strong></div>
                <div className="flex items-center text-base md:text-lg"><FiShield className="mr-3 text-green-500" /> Warranty: <strong>{details.warranty}</strong></div>
                <div className="flex items-center text-base md:text-lg"><FiCalendar className="mr-3 text-green-500" /> Type: <strong>{details.type}</strong></div>
              </div>
            </div>

            <div className="border-t pt-6">
              <h3 className="text-xl md:text-2xl font-semibold mb-4">Features</h3>
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

      {relatedProducts && relatedProducts.length > 0 && (
        <div className="max-w-7xl mx-auto px-6 pb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark text-center mb-12">You Might Also Like</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedProducts.map(relatedProduct => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} categoryKey={category} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailPage;
