import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-20">
      <div className="max-w-7xl mx-auto px-8 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-3xl font-bold text-red-500">
            Restro<span className="text-white">X</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8 text-white font-medium">
            <Link to="/" className="hover:text-red-400 transition">
              Home
            </Link>

            <Link to="/menu" className="hover:text-red-400 transition">
              Menu
            </Link>

            <Link to="/about" className="hover:text-red-400 transition">
              About
            </Link>

            <Link to="/contact" className="hover:text-red-400 transition">
              Contact
            </Link>
          </div>

          {/* Book Button */}
          <button
            onClick={() => {
              document.getElementById("booking").scrollIntoView({
                behavior: "smooth",
                block: "center",
              });
            }}
            className=" bg-red-600 text-white px-7 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-white hover:text-black "
          >
            Book a Table
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
