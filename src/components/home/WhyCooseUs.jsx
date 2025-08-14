// src/components/home/WhyChooseUs.jsx

import React from 'react';
import { FaBatteryFull, FaShieldAlt, FaTachometerAlt } from 'react-icons/fa';

const features = [
  { icon: <FaBatteryFull />, title: "Long Life", description: "Our batteries are built to last, providing you with years of reliable service." },
  { icon: <FaShieldAlt />, title: "Maximum Safety", description: "Engineered with advanced safety features to protect you and your vehicle." },
  { icon: <FaTachometerAlt />, title: "High Performance", description: "Delivering peak performance even in the most demanding conditions." },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-brand-dark mb-12">Why Choose Leighton?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group bg-white rounded-lg p-8 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6 transition-colors duration-300 group-hover:bg-green-500">
                <div className="text-green-500 text-4xl transition-colors duration-300 group-hover:text-white">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
