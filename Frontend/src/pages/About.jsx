import React from "react";
import {
  FiAward,
  FiCpu,
  FiLayers,
  FiShield,
  FiTrendingUp,
  FiGlobe,
} from "react-icons/fi";

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

      <div className="max-w-7xl mx-auto px-6 py-20 space-y-24">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-brand-dark mb-6">Our <span className="text-lime-500">Story</span></h2>
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
            <h2 className="text-5xl font-bold text-brand-dark">Our <span className="text-lime-500">Mission</span></h2>
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
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-last md:order-first">
            <img
              src="https://rmi.org/wp-content/uploads/2023/03/ev-battery-iStock-1393018046.jpg"
              alt="Futuristic technology"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-5xl font-bold text-brand-dark">Our <span className="text-lime-500">Vision</span></h2>
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
          <h2 className="font-bold text-5xl mb-12">Our <span className="text-lime-500">Promise</span></h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group bg-gray-50 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <img
                src="https://www.automotivepowertraintechnologyinternational.com/wp-content/uploads/2023/05/P90505652_highRes_assembly-of-high-vol-scaled.jpg"
                alt="Quality check"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-brand-dark mb-2">
                  Quality
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Every Leighton battery undergoes rigorous testing to meet the
                  highest international standards.
                </p>
              </div>
            </div>

            <div className="group bg-gray-50 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <img
                src="https://eriks.co.uk/en/know-how-hub/blogs/tools-safety-maintenance/ansell-protect-ev-battery-manufacturing/_jcr_content/content_mainpar/section_1/par/blogimage.coreimg.jpeg/1735898720347/ansell-protect-ev-battery-manufacturing.jpeg"
                alt="Manufacturing facility"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-brand-dark mb-2">
                  Manufacturing
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Our state-of-the-art facility uses cutting-edge technology to
                  produce high-quality batteries at scale.
                </p>
              </div>
            </div>

            <div className="group bg-gray-50 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <img
                src="https://www.autoworldjournal.com/wp-content/uploads/2023/12/Gotion-Thailand_Battery-Manufacturing.jpg"
                alt="Battery product range"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-brand-dark mb-2">
                  Product Range
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We offer a comprehensive range of tubular batteries designed
                  for the diverse needs of our customers.
                </p>
              </div>
            </div>

            <div className="group bg-gray-50 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIlrzGM4C2GEdXM_jvhBilyh_sXDA96L5feOlBRVGjg9uyl2JRtg0c3MC1t6ksPemZeks&usqp=CAU"
                alt="Safety inspection"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-brand-dark mb-2">
                  Safety
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Our batteries are engineered with multiple safety features to
                  ensure the well-being of our users.
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
