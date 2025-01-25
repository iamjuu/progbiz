import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Arrow } from "../../Assets";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="shadow-md">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center">
          <span className="text-2xl font-bold text-blue-500">COOL</span>
          <span className="text-sm ml-2 text-gray-600">TECHNOLOGIES</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-600 hover:text-blue-500">
            HOME
          </Link>
          <Link to="/about" className="text-gray-600 hover:text-blue-500">
            ABOUT
          </Link>
          <Link to="/services" className="text-gray-600 hover:text-blue-500">
            SERVICES
          </Link>
          <Link to="/products" className="text-gray-600 hover:text-blue-500">
            PRODUCTS
          </Link>
          <Link to="/blog" className="text-gray-600 hover:text-blue-500">
            BLOG
          </Link>
          <Link to="/contact" className="text-gray-600 hover:text-blue-500">
            CONTACT
          </Link>

          {/* LET'S TALK Button */}
          <button
            style={{ fontSize: "14px" }}
            className="hidden lg:flex border p-2 items-center justify-center gap-2 border-black rounded-full"
          >
            LET'S TALK
            <img style={{ width: "14px" }} src={Arrow} alt="arrow" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-red-100">
          <div className="flex flex-col space-y-2 px-6 py-4">
            <Link to="/" className="text-black hover:text-blue-500">
              HOME
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-blue-500">
              ABOUT
            </Link>
            <Link to="/services" className="text-gray-600 hover:text-blue-500">
              SERVICES
            </Link>
            <Link to="/products" className="text-gray-600 hover:text-blue-500">
              PRODUCTS
            </Link>
            <Link to="/blog" className="text-gray-600 hover:text-blue-500">
              BLOG
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-blue-500">
              CONTACT
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
