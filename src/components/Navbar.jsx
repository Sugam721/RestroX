import React from "react";

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
            <a href="#home" className="hover:text-red-400 transition">
              Home
            </a>

            <a href="#menu" className="hover:text-red-400 transition">
              Menu
            </a>

            <a href="#about" className="hover:text-red-400 transition">
              About
            </a>

            <a href="#contact" className="hover:text-red-400 transition">
              Contact
            </a>
          </div>

          {/* Book Button */}
          <button
            className="
              bg-red-600
              text-white
              px-7
              py-3
              rounded-full
              font-semibold
              transition-all
              duration-300
              hover:bg-white
              hover:text-black
            "
          >
            Book a Table
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
