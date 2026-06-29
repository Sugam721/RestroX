import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h2 className="text-3xl font-bold text-red-500">RestroX</h2>

          <p className="text-gray-400 mt-4 leading-relaxed">
            Great food, great moments. Serving delicious dishes with our
            signature flavors and unforgettable hospitality.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>

          <ul className="space-y-3 text-gray-400">
            <li>Home</li>
            <li>Menu</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>

          <ul className="space-y-3 text-gray-400">
            <li>📍 Kathmandu, Nepal</li>
            <li>📞 +977 9864835573</li>
            <li>✉ hello@restrox.com</li>
          </ul>
        </div>

        {/* Opening */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Opening Hours</h3>

          <p className="text-gray-400">Monday - Sunday</p>

          <p className="mt-2 text-red-400 font-medium">10:00 AM - 10:00 PM</p>

          <div className="flex gap-4 mt-6">
            <span className="hover:text-red-500 cursor-pointer">Instagram</span>

            <span className="hover:text-red-500 cursor-pointer">Facebook</span>

            <span className="hover:text-red-500 cursor-pointer">TikTok</span>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 text-center py-5 text-gray-500">
        © 2026 RestroX. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
