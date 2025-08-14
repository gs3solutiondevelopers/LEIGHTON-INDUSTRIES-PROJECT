import React from "react";
import { FiShoppingCart, FiUser } from "react-icons/fi";

import Logo from "../../assets/Logo.png";

const Navbar = () => {
  return (
    <nav className="bg-lime-500 w-full h-20 flex justify-center items-center text-white shadow-lg">
      <div className="flex justify-between items-center w-full max-w-screen-xl mx-auto px-6">
        <a href="/" className="flex-shrink-0">
          <img
            src={Logo}
            alt="Leighton Industries Logo"
            className="h-14 w-68 "
          />
        </a>

        <div className="flex items-center space-x-10">
          <ul className="hidden md:flex items-center space-x-12">
            <li>
              <a href="/about" className="nav-link-underline">
                About Us
              </a>
            </li>
            <li>
              <a href="/batteries" className="nav-link-underline">
                Our Batteries
              </a>
            </li>
            <li>
              <a href="/support" className="nav-link-underline">
                Support
              </a>
            </li>
            <li>
              <a href="/contact" className="nav-link-underline">
                Contact Us
              </a>
            </li>
          </ul>

          {/* <div className="flex items-center space-x-8">
            <a
              href="/cart"
              className="relative hover:text-gray-200 transition-colors"
            >
              <FiShoppingCart className="h-7 w-7" />
              <span className="absolute -top-2 -right-2 bg-red-600 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center border-2 border-lime-600">
                3
              </span>
            </a> */}
          {/* <a
              href="/login"
              className="flex items-center space-x-2 font-semibold hover:text-gray-200 transition-colors"
            >
              <FiUser className="h-6 w-6" />
              <span>SignUp</span>
            </a> */}
          {/* </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
