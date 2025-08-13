import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaPaperPlane,
  FaInstagram,
} from "react-icons/fa";
import Logo from "../../assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">

          <div className="flex flex-col ">
            <img src={Logo} alt="Leighton Industries" className="h-1 w-80 mb-2 " />
            <p className="text-md">
              The leading manufacturer of high-performance batteries for
              e-rickshaws, engineered for a greener tomorrow.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-white text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/batteries"
                  className="hover:text-white transition-colors"
                >
                  Our Batteries
                </a>
              </li>
              <li>
                <a
                  href="/support"
                  className="hover:text-white transition-colors"
                >
                  Support
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-white text-lg">Support</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/support/warranty"
                  className="hover:text-white transition-colors"
                >
                  Warranty
                </a>
              </li>
              <li>
                <a
                  href="/support/dealer"
                  className="hover:text-white transition-colors"
                >
                  Find a Dealer
                </a>
              </li>
              <li>
                <a
                  href="/support/faq"
                  className="hover:text-white transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-white text-lg">Stay Updated</h3>
            <p className="text-sm">
              Get the latest news and updates from Leighton Industries.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 text-gray-800 bg-gray-200 rounded-l-md focus:outline-none"
              />
              <button className="bg-green-500 text-white p-3 rounded-r-md hover:bg-green-600 transition-colors">
                <FaPaperPlane />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="text-sm text-center sm:text-left">
            <p>&copy; {new Date().getFullYear()} Leighton Reliable Battery. All Rights Reserved.</p>
            <div className="mt-2 space-x-4">
              <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
              <span>|</span>
              <a href="/terms-conditions" className="hover:text-white transition-colors">Terms & Conditions</a>
            </div>
          </div>
          <div className="flex space-x-5 mt-4 sm:mt-0">
            <a
              href="#"
              className="text-xl hover:text-blue-600 transition-colors"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className="text-xl hover:text-blue-400 transition-colors"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="text-xl hover:text-red-600 transition-colors"
            >
              <FaYoutube />
            </a>
            <a
              href="#"
              className="text-xl hover:text-pink-600 transition-colors"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
