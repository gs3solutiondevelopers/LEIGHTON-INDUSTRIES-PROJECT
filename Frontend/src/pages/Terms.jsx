
import React from 'react';
import { FiFileText, FiShield, FiSlash, FiAlertTriangle, FiGlobe } from 'react-icons/fi';

const TermsPage = () => {
  return (
    <div className="bg-white">
      <div className="relative h-100">
        <img 
          src="https://www.phoenixlubricants.com/wp-content/uploads/2022/04/terms-conditions.webp" 
          alt="Legal documents on a desk" 
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="relative z-10 h-full flex flex-col items-center justify-center bg-black/60 text-white text-center p-4">
          <h1 className="text-5xl font-bold">Terms & Conditions</h1>
          <p className="text-lg mt-4">Please read our terms carefully before using our services.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="bg-gray-50 p-8 sm:p-12 rounded-lg shadow-lg">
          <p className="text-sm text-gray-500 mb-8">Last updated: August 19, 2025</p>
          
          <div className="space-y-10">
            <div className="flex items-start space-x-4">
              <FiFileText className="h-8 w-8 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-3xl font-semibold text-brand-dark mb-2">1. Introduction</h2>
                <p className="text-gray-700 leading-relaxed">
                  Welcome to Leighton Industries ("Company", "we", "our", "us"). These Terms and Conditions govern your use of our website and any related services. By accessing our website, we assume you accept these terms and conditions in full.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <FiShield className="h-8 w-8 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-3xl font-semibold text-brand-dark mb-2">2. Intellectual Property Rights</h2>
                <p className="text-gray-700 leading-relaxed">
                  Other than the content you own, under these Terms, Leighton Industries and/or its licensors own all the intellectual property rights and materials contained in this website. You are granted a limited license only for viewing the material.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <FiSlash className="h-8 w-8 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-3xl font-semibold text-brand-dark mb-2">3. Restrictions</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You are expressly and emphatically restricted from all of the following:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Publishing any website material in any media without prior written consent.</li>
                  <li>Selling, sublicensing and/or otherwise commercializing any website material.</li>
                  <li>Using this website in any way that is, or may be, damaging to this website.</li>
                  <li>Using this website contrary to applicable laws and regulations.</li>
                </ul>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <FiAlertTriangle className="h-8 w-8 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-3xl font-semibold text-brand-dark mb-2">4. Limitation of Liability</h2>
                <p className="text-gray-700 leading-relaxed">
                  In no event shall Leighton Industries, nor any of its officers, directors and employees, be liable to you for anything arising out of or in any way connected with your use of this website, whether such liability is under contract, tort or otherwise.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <FiGlobe className="h-8 w-8 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-3xl font-semibold text-brand-dark mb-2">5. Governing Law & Jurisdiction</h2>
                <p className="text-gray-700 leading-relaxed">
                  These Terms will be governed by and construed in accordance with the laws of the State of West Bengal, India, and you submit to the non-exclusive jurisdiction of the state and federal courts located in West Bengal for the resolution of any disputes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
