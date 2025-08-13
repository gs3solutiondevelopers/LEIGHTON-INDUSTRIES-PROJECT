// src/pages/WarrantyPage.jsx

import React from 'react';
import { useForm } from 'react-hook-form';
import warranty from '../assets/warranty.png'
const WarrantyPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert('Your warranty claim has been submitted successfully. We will contact you shortly.');
  };

  return (
    <div className="bg-gray-50">
      {/* Header Banner */}
      <div className="relative h-108">
        <img 
          src={warranty} 
          alt="Customer support" 
          className="absolute inset-0 w-full h-108 object-cover z-0"
        />
        <div className="relative z-10 h-106 flex flex-col items-center justify-center bg-black/60 text-white text-center p-4">
          <h1 className="text-5xl font-bold">Warranty Claim</h1>
          <p className="text-lg mt-4">Please review the conditions below before submitting your claim.</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="space-y-12">

          {/* Warranty Conditions Section */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-brand-dark mb-6">Warranty Process & Conditions</h2>
            <div className="prose lg:prose-lg max-w-none">
              <h3>How to Claim Your Warranty</h3>
              <ol>
                <li>Complete the warranty claim form below with all required details.</li>
                <li>Ensure the battery serial number and date of purchase are accurate.</li>
                <li>Provide a clear description of the issue you are facing with the battery.</li>
                <li>Once submitted, our support team will review your claim and contact you within 2-3 business days.</li>
              </ol>

              <h3>Conditions for a Valid Warranty Claim</h3>
              <ul>
                <li>The warranty is only valid from the original date of purchase and is non-transferable.</li>
                <li>The claim must be accompanied by the original proof of purchase (invoice or receipt).</li>
                <li>The battery must not show any signs of physical damage, tampering, or unauthorized repairs.</li>
                <li>The warranty is void if the battery is used in a vehicle type for which it was not designed.</li>
                <li>Normal wear and tear or damage due to negligence (e.g., improper charging, deep discharge) is not covered.</li>
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
