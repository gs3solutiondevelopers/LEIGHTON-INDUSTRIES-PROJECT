
import React, { useState } from "react";
import { FiUser, FiX, FiMenu } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    setIsMenuOpen(false);
    navigate(path);
  };

  return (
    <nav className="bg-lime-500 w-full h-20 flex justify-center items-center text-white shadow-lg relative z-50">
      <div className="flex justify-between items-center w-full max-w-screen-xl mx-auto px-6">
        <Link to="/" className="flex-shrink-0">
          <img
            src={Logo}
            alt="Leighton Industries Logo"
            className="h-16 w-74"
          />
        </Link>

        <div className="hidden md:flex items-center space-x-10">
          <ul className="flex items-center space-x-12">
            <li><Link to="/about" className="nav-link-underline">About Us</Link></li>
            <li><Link to="/batteries" className="nav-link-underline">Our Batteries</Link></li>
            <li><Link to="/support" className="nav-link-underline">Support</Link></li>
            <li><Link to="/contact" className="nav-link-underline">Contact Us</Link></li>
          </ul>
        </div>


        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(true)} aria-label="Open menu">
            <FiMenu className="h-8 w-8" />
          </button>
        </div>
      </div>


      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900 text-white p-8 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end mb-8">
          <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
            <FiX className="h-8 w-8" />
          </button>
        </div>
        <ul className="flex flex-col space-y-6 text-lg">
          <li><button onClick={() => handleNavigate('/about')}>About Us</button></li>
          <li><button onClick={() => handleNavigate('/batteries')}>Our Batteries</button></li>
          <li><button onClick={() => handleNavigate('/support')}>Support</button></li>
          <li><button onClick={() => handleNavigate('/contact')}>Contact Us</button></li>
         
        </ul>
      </div>
      

      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
