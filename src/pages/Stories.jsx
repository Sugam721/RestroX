import React from "react";

const Stories = () => {
  return (
    <section className="relative bg-[#fffaf4] min-h-screen py-24 px-6 md:px-12 overflow-hidden">
      {/* Decorative Background */}
      <div className="  absolute top-0 right-0   w-72 h-72   bg-orange-200/40   rounded-full blur-3xl" />

      <div className="  absolute bottom-0 left-0   w-80 h-80   bg-red-200/30   rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        {/* Image Side */}
        <div className="relative">
          <div className="  rounded-[40px]  overflow-hidden  shadow-2xl  group">
            <img
              src="https://res.cloudinary.com/dgfp5n7bn/image/upload/v1782721739/Dish2_wbwxc0.webp"
              alt="RestroX Story"
              className="w-full h-137.5 object-cover transition duration-700 group-hover:scale-110"
            />
          </div>

          {/* Floating Card */}
          <div
            className="  absolute   -bottom-8   -right-5  md:right-10  bg-white  
          rounded-3xl  shadow-xl  p-6  max-w-xs"
          >
            {" "}
            <h3 className="text-xl font-bold text-gray-900">More Than Food</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Moments, emotions and memories served together.
            </p>
          </div>
        </div>

        {/* Content Side */}
        <div>
          <p className="  uppercase   tracking-[5px]  text-orange-600  font-semibold  text-sm">
            Stories & Aesthetics
          </p>

          <h1 className="  text-4xl  md:text-6xl  font-bold  text-gray-900  mt-5  leading-tight">
            More Than Food —
            <span className="text-orange-600"> It’s an Experience</span>
          </h1>

          <div className="  mt-8  space-y-5  text-gray-600  text-lg  leading-relaxed">
            <p>At RestroX, every dish has a story.</p>

            <p>
              The aroma from the kitchen, the sound of friends laughing, and the
              excitement of sharing food — these are the moments that make
              dining special.
            </p>

            <p>
              We believe food connects people, and every visit should feel
              memorable.
            </p>
          </div>

          <button
            className="mt-10bg-orange-600hover:bg-orange-700text-white  
          px-8  py-4 rounded-full font-semibold shadow-lg transition"
          >
            Explore All Chronicles →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Stories;
