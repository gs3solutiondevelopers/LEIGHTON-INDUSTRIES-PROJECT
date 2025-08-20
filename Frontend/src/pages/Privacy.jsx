import React from "react";
import {
  FiDatabase,
  FiShare2,
  FiLock,
  FiInfo,
  FiUserCheck,
} from "react-icons/fi";

const PrivacyPolicyPage = () => {
  return (
    <div className="bg-white">
      <div className="relative h-110">
        <img
          src="https://sunandsocial.com/frontend-assets/images/component/Privacy-Policy-banner.jpg"
          alt="Privacy and security"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="relative z-10 h-full flex flex-col items-center justify-center bg-black/60 text-white text-center p-4">
          <h1 className="text-5xl font-bold">Privacy Policy</h1>
          <p className="text-lg mt-4">Your privacy is important to us.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="bg-gray-50 p-8 sm:p-12 rounded-lg shadow-lg">
          <p className="text-sm text-gray-500 mb-8">
            Last updated: August 19, 2025
          </p>

          <div className="space-y-10">
            <div className="flex items-start space-x-4">
              <FiInfo className="h-8 w-8 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-3xl font-semibold text-brand-dark mb-2">
                  1. Information We Collect
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We collect information that you provide directly to us when
                  you fill out a contact form, warranty claim, or product
                  complaint. This information may include your name, email
                  address, phone number, and details about your product.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <FiUserCheck className="h-8 w-8 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-3xl font-semibold text-brand-dark mb-2">
                  2. How We Use Your Information
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  The information we collect is used solely to process your
                  requests, provide customer support, and improve our services.
                  We may use your contact information to communicate with you
                  regarding your inquiries or claims.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <FiDatabase className="h-8 w-8 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-3xl font-semibold text-brand-dark mb-2">
                  3. Use of Cookies
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our website uses cookies to enhance your browsing experience.
                  A cookie is a small file placed on your computer's hard drive.
                  We use cookies to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>
                    Understand and save your preferences for future visits.
                  </li>
                  <li>
                    Compile aggregate data about site traffic and site
                    interactions.
                  </li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  You can choose to disable cookies through your individual
                  browser options.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <FiShare2 className="h-8 w-8 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-3xl font-semibold text-brand-dark mb-2">
                  4. Data Sharing and Disclosure
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We do not sell, trade, or otherwise transfer to outside
                  parties your personally identifiable information. This does
                  not include trusted third parties who assist us in operating
                  our website or servicing you, so long as those parties agree
                  to keep this information confidential.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <FiLock className="h-8 w-8 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-3xl font-semibold text-brand-dark mb-2">
                  5. Data Security
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We implement a variety of security measures to maintain the
                  safety of your personal information when you submit a request
                  or enter your personal information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
