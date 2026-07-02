import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="absolute top-0 left-0 w-full z-20">
      <div className="max-w-7xl mx-37 px-8 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-3xl font-bold text-red-500">
            Restro<span className="text-white">X</span>
          </div>
          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8 text-white font-medium">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `relative pb-2 transition duration-300 ${
                  isActive
                    ? "text-red-500 after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-red-500"
                    : "text-white hover:text-red-500"
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/menu"
              className={({ isActive }) =>
                `relative pb-2 transition duration-300 ${
                  isActive
                    ? "text-red-500 after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-red-500"
                    : "text-white hover:text-red-500"
                }`
              }
            >
              Menu
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `relative pb-2 transition duration-300 ${
                  isActive
                    ? "text-red-500 after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-red-500"
                    : "text-white hover:text-red-500"
                }`
              }
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `relative pb-2 transition duration-300 ${
                  isActive
                    ? "text-red-500 after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-red-500"
                    : "text-white hover:text-red-500"
                }`
              }
            >
              Contact
            </NavLink>
          </div>
          {/* Book a Table Button */}
          <button
            onClick={() => {
              navigate("/#booking");
            }}
            className="bg-red-600 text-white px-7 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-white hover:text-black"
          >
            Book a Table
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
