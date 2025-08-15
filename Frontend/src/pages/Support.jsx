
import React from 'react';
import { FiFileText, FiShield, FiMessageSquare, FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { FaUserCheck } from 'react-icons/fa';


const supportLinks = [
  {
    icon: <FiShield />,
    title: 'Warranty Claim',
    description: 'Submit a new warranty claim or check the status of an existing one.',
    path: '/support/warranty',
  },
  {
    icon: <FiMessageSquare />,
    title: 'Product Complaint',
    description: 'Lodge a complaint or provide feedback about a specific product.',
    path: '/support/complaint',
  },
  {
    icon: <FiFileText />,
    title: 'Terms & Conditions',
    description: 'Read the terms and conditions for our products and services.',
    path: '/terms-conditions',
  },
  {
    icon: <FaUserCheck />,
    title: 'Find a Dealer',
    description: 'Locate your nearest Dealers in seconds.',
    path: '/support/dealer',
  },
];

const SupportPage = () => {
  return (
    <div className="bg-white">
      <div className="relative h-109">
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz8z8nMQL6_V0SYIRk-59Rn1wcPOEh4R1ilg&s" 
          alt="Customer support" 
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="relative z-10 h-full flex flex-col items-center justify-center bg-black/60 text-white text-center p-4">
          <h1 className="text-5xl font-bold">Support Center</h1>
          <p className="text-lg mt-4">We're here to help. Choose an option below to get started.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="space-y-6">
          {supportLinks.map((link, index) => (
            <Link 
              to={link.path} 
              key={index} 
              className="group flex items-center justify-between bg-gray-50 p-6 rounded-lg shadow-sm transition-all duration-300 hover:shadow-lg hover:bg-green-50"
            >
              <div className="flex items-center space-x-6">
                <div className="flex-shrink-0 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center transition-colors duration-300 group-hover:bg-green-500">
                  <div className="text-green-600 text-3xl transition-colors duration-300 group-hover:text-white">
                    {link.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-brand-dark">{link.title}</h3>
                  <p className="text-gray-600">{link.description}</p>
                </div>
              </div>
              <FiChevronRight className="h-7 w-7 text-gray-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-green-600" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
