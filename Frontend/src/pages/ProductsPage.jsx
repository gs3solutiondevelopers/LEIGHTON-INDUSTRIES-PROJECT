
import React from 'react';
import ProductCard from '../components/product/ProductCard';
import ev from "../assets/ev.png"
const products = [
  {
    id: 1,
    name: 'Leighton Tubular Pro 1500',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9gWFeSTlm7wHoMkFDRnpzKkbnEK0-C8YQDw&s', 
    specs: {
      capacity: '150 Ah',
      warranty: '18 Months',
      type: 'Tubular',
    },
    price: '₹ 12,500',
  },
  {
    id: 2,
    name: 'Leighton PowerMax 1600',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYfY-SiBTdHwfx3CtabEX_O6-XwhJkcnIH7Q&s', 
    specs: {
      capacity: '160 Ah',
      warranty: '24 Months',
      type: 'Tubular',
    },
    price: '₹ 14,000',
  },
  {
    id: 3,
    name: 'Leighton Endura-Drive 1400',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWlkrP2RPQ_0RtsYhUjoLgA2BQiJdq5G522A&s', 
    specs: {
      capacity: '140 Ah',
      warranty: '12 Months',
      type: 'Flat Plate',
    },
    price: '₹ 11,000',
  },
  
];

const ProductsPage = () => {
  return (
    <div className="bg-white">
      <div className="relative h-104">
        <img 
          src={ev}
          alt="E-Rickshaw batteries" 
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="relative z-10 h-full flex flex-col items-center justify-center bg-black/60 text-white text-center p-4">
          <h1 className="text-5xl font-bold">Our E-Rickshaw Batteries</h1>
          <p className="text-lg mt-4">Engineered for performance, built to last.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          
          <aside className="lg:w-1/4">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold text-brand-dark mb-6">Filter By</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Capacity (Ah)</h4>
                  <div className="space-y-2">
                    <label className="flex items-center"><input type="checkbox" className="h-4 w-4 rounded text-green-600 focus:ring-green-500" /> <span className="ml-2">140 Ah</span></label>
                    <label className="flex items-center"><input type="checkbox" className="h-4 w-4 rounded text-green-600 focus:ring-green-500" /> <span className="ml-2">150 Ah</span></label>
                    <label className="flex items-center"><input type="checkbox" className="h-4 w-4 rounded text-green-600 focus:ring-green-500" /> <span className="ml-2">160 Ah</span></label>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Warranty</h4>
                  <div className="space-y-2">
                    <label className="flex items-center"><input type="checkbox" className="h-4 w-4 rounded text-green-600 focus:ring-green-500" /> <span className="ml-2">12 Months</span></label>
                    <label className="flex items-center"><input type="checkbox" className="h-4 w-4 rounded text-green-600 focus:ring-green-500" /> <span className="ml-2">18 Months</span></label>
                    <label className="flex items-center"><input type="checkbox" className="h-4 w-4 rounded text-green-600 focus:ring-green-500" /> <span className="ml-2">24 Months</span></label>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <main className="lg:w-3/4">
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">
              {products.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </main>

        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
