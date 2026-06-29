import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import OurStories from "./OurStories";
import Special from "./Special";
import Reserve from "./Reserve";
import Glimpse from "./Glimpse";
import Stories from "./Stories";
import Reviews from "./Reviews";

gsap.registerPlugin(ScrollTrigger);

const Homepage = () => {
  const heroRef = useRef(null);
  const storyRef = useRef(null);
  const specialRef = useRef(null);

  useEffect(() => {
    // Hero entrance Animation
    gsap.fromTo(
      heroRef.current,
      {
        opacity: 0,
        y: 120,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power4.out",
      },
    );

    // Swipe up reveal sections
    const sections = [storyRef.current, specialRef.current];

    sections.forEach((section) => {
      gsap.fromTo(
        section,
        {
          y: 120,
          opacity: 0,
          scale: 0.96,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <main>
      {/* Hero background Image  */}
      <section
        className=" min-h-screen bg-cover bg-center flex items-center justify-center relative overflow-hidden "
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dgfp5n7bn/image/upload/v1782718620/Homepage_adsqaj.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />

        <div
          ref={heroRef}
          className=" relative z-10 text-center text-white px-6 max-w-4xl "
        >
          {" "}
          <h1 className=" text-5xl md:text-7xl font-serif font-bold mb-4 ">
            {" "}
            Welcome to RestroX
          </h1>
          <h2 className="  text-3xl md:text-5xl  font-light  mb-6  ">
            Where Every Flavor Has a Story
          </h2>
          <p className="text-lg md:text-xltext-gray-200 leading-relaxed  mb-6">
            Experience a perfect blend of taste, comfort, and creativity. From
            our signature handmade momo to a variety of delicious dishes,
            RestroX brings you food made with passion.
          </p>
          <p className="text-lg font-medium mb-8">
            Fresh Ingredients • Great Taste • Memorable Moments
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="px-8 py-3 rounded-full bg-orange-500 hover:bg-orange-600  
            transition  font-semibold  "
            >
              Explore Menu
            </button>

            <button
              className="  px-8 py-3  rounded-full  border  border-white  hover:bg-white 
             hover:text-black  transition  font-semibold  "
            >
              Reserve a Table
            </button>
          </div>
        </div>
      </section>

      {/* Sections */}
      <div ref={storyRef}>
        <OurStories />
      </div>

      <div
      // ref={specialRef}
      >
        <Special />
      </div>
      <div>
        <Reserve />
        <Glimpse />
        <Stories />
        <Reviews />
      </div>
    </main>
  );
};

export default Homepage;
