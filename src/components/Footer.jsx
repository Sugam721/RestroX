import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#000000] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h2 className="text-3xl font-body font-bold text-red-500">RestroX</h2>

          <p className="text-gray-400 mt-4 leading-relaxed font-body">
            Great food, great moments. Serving delicious dishes with our
            signature flavors and unforgettable hospitality.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-xl font-special mb-4">Quick Links</h3>

          <ul className="space-y-3 text-gray-400">
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/menu">Menu</Link>
            </li>

            <li>
              <Link to="/about">About</Link>
            </li>

            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-special mb-4">Contact</h3>

          <ul className="space-y-3 text-gray-400 font-body">
            <li>📍 Kathmandu, Nepal</li>
            <li>📞 +977 9864835573</li>
            <li>✉ hello@restrox.com</li>
          </ul>
        </div>

        {/* Opening */}
        <div>
          <h3 className="text-xl font-special mb-4">Opening Hours</h3>

          <p className="text-gray-400 ">Monday - Sunday</p>

          <p className="mt-2 text-red-500 font-body">10:00 AM - 10:00 PM</p>

          <div className="flex gap-4 mt-6">
            <span className="hover:text-red-500 cursor-pointer">Instagram</span>

            <span className="hover:text-red-500 cursor-pointer">Facebook</span>

            <span className="hover:text-red-500 cursor-pointer">TikTok</span>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 py-5 text-gray-500 relative">
        {/* Go To Top Arrow */}
        <button
          onClick={scrollToTop}
          className="absolute right-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border border-gray-700 text-white text-xl flex items-center justify-center hover:bg-red-500 hover:border-red-500 transition-all duration-300"
        >
          ↑{" "}
        </button>

        <p className="text-center">© 2026 RestroX. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
