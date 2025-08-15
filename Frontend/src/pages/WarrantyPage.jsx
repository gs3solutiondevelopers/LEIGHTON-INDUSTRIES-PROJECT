// src/pages/WarrantyPage.jsx

import React from 'react';
import { useForm } from 'react-hook-form';
import warranty from '../assets/warranty.png';
import { FiFileText, FiCheckCircle, FiMessageSquare, FiClipboard } from 'react-icons/fi';

const WarrantyPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert('Your warranty claim has been submitted successfully. We will contact you shortly.');
  };

  return (
    <div className="bg-gray-50">
      {/* Header Banner */}
      <div className="relative h-106">
        <img 
          src={warranty} 
          alt="Customer support" 
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="relative z-10 h-full flex flex-col items-center justify-center bg-black/60 text-white text-center p-4">
          <h1 className="text-5xl font-bold">Warranty Claim</h1>
          <p className="text-lg mt-4">Please review the conditions below before submitting your claim.</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="space-y-12">

          {/* Redesigned Warranty Conditions Section */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-brand-dark mb-8 text-center">Warranty Process & Conditions</h2>
            
            <div className="mb-10">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center"><FiClipboard className="mr-3 text-green-500"/> How to Claim Your Warranty</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg flex items-start space-x-4">
                  <div className="flex-shrink-0 text-green-500 font-bold text-2xl">1.</div>
                  <p>Complete the claim form below with all required details, ensuring accuracy.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg flex items-start space-x-4">
                  <div className="flex-shrink-0 text-green-500 font-bold text-2xl">2.</div>
                  <p>Provide a clear description of the issue you are facing with the battery.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg flex items-start space-x-4">
                  <div className="flex-shrink-0 text-green-500 font-bold text-2xl">3.</div>
                  <p>Attach a clear copy of your original proof of purchase (invoice or receipt).</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg flex items-start space-x-4">
                  <div className="flex-shrink-0 text-green-500 font-bold text-2xl">4.</div>
                  <p>Our support team will review your claim and contact you within 2-3 business days.</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center"><FiCheckCircle className="mr-3 text-green-500"/> Conditions for a Valid Claim</h3>
              <ul className="space-y-4">
                <li className="flex items-start"><FiFileText className="h-5 w-5 mr-3 mt-1 text-green-500 flex-shrink-0"/>The warranty is valid only from the original date of purchase and is non-transferable.</li>
                <li className="flex items-start"><FiFileText className="h-5 w-5 mr-3 mt-1 text-green-500 flex-shrink-0"/>The battery must not show signs of physical damage, tampering, or unauthorized repairs.</li>
                <li className="flex items-start"><FiFileText className="h-5 w-5 mr-3 mt-1 text-green-500 flex-shrink-0"/>The warranty is void if the battery is used in a vehicle type for which it was not designed.</li>
                <li className="flex items-start"><FiFileText className="h-5 w-5 mr-3 mt-1 text-green-500 flex-shrink-0"/>Normal wear and tear or damage due to negligence is not covered.</li>
              </ul>
            </div>
          </div>

          {/* Claim Submission Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-brand-dark mb-6">Claim Submission Form</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input 
                    type="text" 
                    id="name"
                    {...register("name", { required: "Full name is required." })}
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone"
                    {...register("phone", { required: "Phone number is required." })}
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                </div>
              </div>
              <div>
                <label htmlFor="serialNumber" className="block text-sm font-medium text-gray-700">Battery Serial Number</label>
                <input 
                  type="text" 
                  id="serialNumber"
                  {...register("serialNumber", { required: "Serial number is required." })}
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                  placeholder="e.g., L123456789"
                />
                {errors.serialNumber && <p className="text-red-500 text-sm mt-1">{errors.serialNumber.message}</p>}
              </div>
              <div>
                <label htmlFor="purchaseDate" className="block text-sm font-medium text-gray-700">Date of Purchase</label>
                <input 
                  type="date" 
                  id="purchaseDate"
                  {...register("purchaseDate", { required: "Date of purchase is required." })}
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                />
                {errors.purchaseDate && <p className="text-red-500 text-sm mt-1">{errors.purchaseDate.message}</p>}
              </div>
              <div>
                <label htmlFor="issue" className="block text-sm font-medium text-gray-700">Describe the Issue</label>
                <textarea 
                  id="issue" 
                  rows="5"
                  {...register("issue", { required: "Please describe the issue." })}
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                ></textarea>
                {errors.issue && <p className="text-red-500 text-sm mt-1">{errors.issue.message}</p>}
              </div>
              <div>
                <button 
                  type="submit"
                  className="w-full bg-green-500 text-white font-bold py-3 px-6 rounded-md hover:bg-green-600 transition-all duration-300 transform hover:scale-105"
                >
                  Submit Claim
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WarrantyPage;
