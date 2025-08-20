import React from "react";
import { FiAward, FiCpu, FiLayers, FiShield } from "react-icons/fi";

const AboutPage = () => {
  return (
    <div className="bg-white">
      <div className="relative h-114">
        <img
          src="https://richuninet.com/wp-content/uploads/2023/04/about-us-banner.jpg"
          alt="Our team working together"
          className="absolute inset-0 w-full h-full object-cover z-0 "
        />
        <div className="relative z-10 h-full flex flex-col items-center justify-center bg-black/60 text-white text-center p-4">
          <h1 className="text-5xl font-bold">About Leighton Industries</h1>
          <p className="text-lg mt-4">
            Pioneering Power Solutions for Vehicles.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 space-y-20">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-brand-dark mb-6">Our Story</h2>
          <p className="text-gray-700 leading-relaxed text-lg max-w-4xl mx-auto">
            Founded in the heart of West Bengal, Leighton Industries was born
            from a singular vision: to revolutionize the e-rickshaw industry
            with power solutions that drivers can trust. We saw a critical need
            for batteries that could withstand the demanding conditions of
            Indian roads while providing consistent, long-lasting performance.
            Driven by a commitment to innovation, quality, and sustainability,
            we have dedicated ourselves to engineering and manufacturing
            high-performance tubular batteries that not only empower the
            livelihoods of thousands of drivers but also contribute to a
            cleaner, greener future. Today, we are proud to be a leading name in
            the e-rickshaw battery market, known for our unwavering reliability
            and our dedication to the community we serve.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h2 className="text-5xl font-bold text-brand-dark">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              To lead the charge in providing reliable, high-performance, and
              eco-friendly battery solutions for the e-rickshaw industry. We are
              committed to engineering products that not only meet the rigorous
              demands of daily use but also contribute to a greener, more
              sustainable future for transportation in India.
            </p>
          </div>
          <div>
            <img
              src="https://call2recycle.ca/wp-content/uploads/2024/12/EV-Battery-Recovery-Image.jpg"
              alt="Engineer working on a battery"
              className="rounded-lg shadow-xl hover:scale-110 duration-200"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-last md:order-first">
            <img
              src="https://rmi.org/wp-content/uploads/2023/03/ev-battery-iStock-1393018046.jpg"
              alt="Futuristic technology"
              className="rounded-lg shadow-xl hover:scale-110 duration-200"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-5xl font-bold text-brand-dark">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              To be the most trusted and innovative power solutions provider in
              the electric vehicle sector, driving the future of mobility with
              cutting-edge technology and an unwavering commitment to quality
              and customer satisfaction. We envision a world where clean energy
              powers every journey.
            </p>
          </div>
        </div>

        <div className="border-t pt-20 text-center">
          <h2 className="font-bold text-5xl mb-12">Our Promise</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group bg-gray-50 rounded-lg shadow-lg overflow-hidden transition-all duration-300 ">
              <img
                src="https://t4.ftcdn.net/jpg/09/31/19/05/360_F_931190502_hWdPZ0hRmCsNuKmhESYZlZ0RE6ViFC1g.jpg"
                alt="Quality control"
                className="w-full h-64 object-cover hover:scale-110 duration-200"
              />
              <div className="p-6 text-left">
                <h3 className="text-2xl font-bold text-brand-dark mb-2 flex items-center">
                  <FiAward className="mr-3 text-green-500" />
                  Quality
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Our commitment to quality is unwavering. Every Leighton
                  battery undergoes rigorous testing to meet the highest
                  international standards.
                </p>
              </div>
            </div>

            <div className="group bg-gray-50 rounded-lg shadow-lg overflow-hidden transition-all duration-300">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThvHywWBNzmQBHKJ-bhb_mO-94AGrLN7xH3g&s"
                alt="Manufacturing facility"
                className="w-full h-64 object-cover hover:scale-110 duration-200"
              />
              <div className="p-6 text-left">
                <h3 className="text-2xl font-bold text-brand-dark mb-2 flex items-center">
                  <FiCpu className="mr-3 text-green-500" />
                  Manufacturing Strength
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Our state-of-the-art facility uses cutting-edge technology to
                  produce high-quality batteries at scale while maintaining
                  strict quality control.
                </p>
              </div>
            </div>

            <div className="group bg-gray-50 rounded-lg shadow-lg overflow-hidden transition-all duration-300 ">
              <img
                src="https://external-preview.redd.it/L20CnGpXemy3gKFItWl5LublgKH6M72Ehu6IHmbbS0U.jpg?width=1080&crop=smart&auto=webp&s=e3e3f53d2e2ba9bd086104d97ea73eb7384b6215"
                alt="Battery product line"
                className="w-full h-64 object-cover hover:scale-110 duration-200"
              />
              <div className="p-6 text-left">
                <h3 className="text-2xl font-bold text-brand-dark mb-2 flex items-center">
                  <FiLayers className="mr-3 text-green-500" />
                  Product Range
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We offer a comprehensive range of tubular batteries
                  specifically designed for e-rickshaws to meet the diverse
                  needs of our customers.
                </p>
              </div>
            </div>

            <div className="group bg-gray-50 rounded-lg shadow-lg overflow-hidden transition-all duration-300 ">
              <img
                src="https://www.slashgear.com/img/gallery/whats-going-to-happen-to-the-millions-of-electric-car-batteries-after-their-lifespan-ends/recycling-is-complex-1655753094.jpg"
                alt="Safety inspection"
                className="w-full h-64 object-cover hover:scale-110 duration-200 "
              />
              <div className="p-6 text-left ">
                <h3 className="text-2xl font-bold text-brand-dark mb-2 flex items-center">
                  <FiShield className="mr-3 text-green-500" />
                  Safety
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Safety is at the core of our design. Our batteries are
                  engineered with multiple safety features to ensure the
                  well-being of our users.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
