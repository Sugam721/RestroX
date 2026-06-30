import React from "react";

const Contact = () => {
  return (
    <section className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.35em] text-sm text-red-500">
            Contact Us
          </p>

          <h1 className="mt-4 text-4xl md:text-6xl font-bold">Let's Connect</h1>

          <p className="mt-5 max-w-2xl mx-auto text-gray-400 leading-relaxed">
            Whether you want to know more about our food, visit our restaurant,
            or simply share your experience — we would love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* About */}
          <div className="border border-gray-800 rounded-2xl p-8 bg-gray-900/40">
            <h2 className="text-2xl font-semibold mb-5">About RestroX</h2>

            <p className="text-gray-400 leading-relaxed">
              RestroX is a place where authentic flavors meet warm hospitality.
              From our signature momos to carefully crafted dishes, every meal
              is made to create memorable moments.
            </p>
          </div>

          {/* Contact */}
          <div className="border border-gray-800 rounded-2xl p-8 bg-gray-900/40">
            <h2 className="text-2xl font-semibold mb-5">Find Us</h2>

            <div className="space-y-5 text-gray-400">
              <div>
                <p className="text-white font-medium">Location</p>

                <p>Kathmandu, Nepal</p>
              </div>

              <div>
                <p className="text-white font-medium">Phone</p>

                <p>+977 9864835573</p>
              </div>

              <div>
                <p className="text-white font-medium">Email</p>

                <p>hello@restrox.com</p>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="border border-gray-800 rounded-2xl p-8 bg-gray-900/40">
            <h2 className="text-2xl font-semibold mb-5">Opening Hours</h2>

            <p className="text-gray-400">Monday - Sunday</p>

            <p className="text-red-400 text-lg mt-2 font-semibold">
              10:00 AM - 10:00 PM
            </p>

            <div className="mt-8">
              <h3 className="text-white font-medium mb-4">Follow Us</h3>

              <div className="flex gap-5 text-gray-400">
                <span className="hover:text-red-500 cursor-pointer transition">
                  Instagram
                </span>

                <span className="hover:text-red-500 cursor-pointer transition">
                  Facebook
                </span>

                <span className="hover:text-red-500 cursor-pointer transition">
                  TikTok
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Message */}
        <div className="mt-16 text-center border-t border-gray-800 pt-10">
          <p className="text-gray-400 text-lg">
            Great food. Great people. Great memories.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
