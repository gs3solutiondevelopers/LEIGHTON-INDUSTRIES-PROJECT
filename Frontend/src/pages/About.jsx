
import React from 'react';

const About = () => {
  return (
    <div className="bg-white">
      <div className="relative h-90">
        <img 
          src="https://lh3.googleusercontent.com/proxy/GgxGu7Byqv-buuj6AuRVHIvVN-LztUFDlePaFsmV39ADqttc5Z3_ZCXhEPM3AwDX1db5_OUGnqa3CZzeEIJV6YWxi1pmA2SnKkWnD0dzljtle6ud4eoL3Tp-pRI6KMmcUlLj" 
          alt="Our team working together" 
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="relative z-10 h-full flex flex-col items-center justify-center bg-black/60 text-white text-center p-4">
          <h1 className="text-5xl font-bold">About Leighton Industries</h1>
          <p className="text-lg mt-4">Pioneering Power Solutions for E-Rickshaws.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="prose lg:prose-lg max-w-none text-center">
          <h2 className="text-4xl font-bold text-brand-dark mb-6">Our Story</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Founded in the heart of West Bengal, Leighton Industries was born from a singular vision: to revolutionize the e-rickshaw industry with power solutions that drivers can trust. We saw a critical need for batteries that could withstand the demanding conditions of Indian roads while providing consistent, long-lasting performance. Driven by a commitment to innovation, quality, and sustainability, we have dedicated ourselves to engineering and manufacturing high-performance tubular batteries that not only empower the livelihoods of thousands of drivers but also contribute to a cleaner, greener future. Today, we are proud to be a leading name in the e-rickshaw battery market, known for our unwavering reliability and our dedication to the community we serve.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
