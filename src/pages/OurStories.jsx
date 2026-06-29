import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const OurStories = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        },
      );

      gsap.fromTo(
        titleRef.current,
        {
          y: 70,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
          },
        },
      );

      gsap.fromTo(
        textRef.current.children,
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 85%",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full flex items-center overflow-hiddenbg-black"
    >
      {/*Background */}
      <img
        className="absolute inset-0 w-full h-full object-cover scale-110 opacity-70"
        src="https://res.cloudinary.com/dgfp5n7bn/image/upload/v1782721755/Stories_ry7zvv.jpg"
        alt="RestroX Story"
      />

      {/* Soft dark layer bg*/}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className=" relative z-10 px-8 md:px-20 lg:px-32 max-w-6xl">
        <p className="uppercase tracking-[0.4em] text-orange-300 mb-6">
          Our Journey
        </p>

        <h1
          ref={titleRef}
          className=" text-white text-6xl md:text-8xl font-serif font-bold leading-none"
        >
          Our Story
        </h1>

        <h2 className="mt-5 text-3xl md:text-5xl font-seriftext-orange-200">
          The Story Behind RestroX
        </h2>

        <div
          ref={textRef}
          className="mt-8 max-w-3xl space-y-5 text-gray-100 text-lg md:text-xl leading-relaxed"
        >
          <p>
            RestroX began with a simple idea — create a place where people can
            enjoy amazing food and unforgettable experiences.
          </p>

          <p>
            What started as a love for crafting delicious dishes grew into a
            restaurant where every plate represents quality, creativity, and
            care.
          </p>

          <p>
            Our famous momo became a customer favorite, but our journey is about
            much more — bringing people together through great food.
          </p>
        </div>

        <div className="mt-10 text-2xl md:text-4xltext-white font-serif italic">
          "Good food. Good people. Great memories."
        </div>

        <button className="mt-10 px-10 py-4 rounded-full bg-orange-500  hover:bg-orange-600 transition hover:scale-105 text-white font-semibold">
          Discover Our Menu
        </button>
      </div>
    </section>
  );
};

export default OurStories;
