import React from "react";
import Button from "../components/Button";

const Stories = () => {
  return (
    <section className="relative bg-[#000000] min-h-screen py-24 px-6 md:px-12 overflow-hidden">
      {/* Decorative Background */}

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        {/* Image Side */}
        <div className="relative">
          <div className="rounded-[40px] overflow-hidden shadow-2xl  group">
            <img
              src="https://res.cloudinary.com/dgfp5n7bn/image/upload/v1782905663/Final_momo_byutbw.jpg"
              alt="RestroX Story"
              className="w-full h-137.5 object-cover transition duration-700 group-hover:scale-110"
            />
          </div>

          {/* Floating Card */}

          {/* <h3 className="text-sm font-bold text-white">More Than Food</h3> */}
          <div className="text-red-500 font-heading text-5xl mt-7 ">
            Moments and memories served together.
          </div>
        </div>

        {/* Content Side */}
        <div>
          <p className="uppercase tracking-[5px] text-red-600 font-special text-xl">
            Stories & Aesthetics
          </p>

          <h1 className="text-4xl md:text-7xl font-special text-white mt-4 leading-tight">
            More Than Food —
            <br />
            <span className="text-red-600 font-special">
              {" "}
              It’s an Experience
            </span>
          </h1>

          <div className="mt-8  space-y-5  text-white  text-lg  leading-relaxed font-body">
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

          <Button className="mt-10 px-8 py-3 rounded-full border-white text-white ">
            Explore All Chronicles →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Stories;
