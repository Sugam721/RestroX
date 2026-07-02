import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const OurStories = () => {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);
  const contentRef = useRef(null);
  const labelRef = useRef(null);
  const headingRef = useRef(null);
  const subRef = useRef(null);
  const lineRef = useRef(null);
  const paraRef = useRef(null);
  const quoteRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 95%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(
        [
          labelRef.current,
          headingRef.current,
          lineRef.current,
          subRef.current,
          paraRef.current.children,
          quoteRef.current,
          btnRef.current,
        ],
        {
          opacity: 0,
          y: 30,
          duration: 0.45,
          stagger: 0.08,
          ease: "power3.out",
        },
      );

      // Background parallax
      gsap.to(bgRef.current, {
        scale: 1,
        yPercent: 8,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.7,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full flex items-center overflow-hidden bg-black"
    >
      {/* Background Image for The page*/}
      <img
        ref={bgRef}
        className="absolute inset-0 w-full h-full object-cover scale-110 opacity-70 will-change-transform brightness-75"
        src="https://res.cloudinary.com/dgfp5n7bn/image/upload/v1782721755/Stories_ry7zvv.jpg"
        alt="RestroX Story"
      />

      {/* Dark overlay and Gradient */}
      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent" />

      {/* Content  */}
      <div
        ref={contentRef}
        className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 lg:px-24"
      >
        <div className="grid lg:grid-cols-2 gap-4 items-center">
          {/* Left Image */}
          <div className="flex justify-center">
            <img
              src="https://res.cloudinary.com/dgfp5n7bn/image/upload/v1782894555/Chef1_xq6ixz.jpg"
              alt="Chef"
              className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-2xl object-cover brightness-80"
            />
          </div>

          {/* Right Content */}
          <div>
            {/* Eyebrow label */}
            <p
              ref={labelRef}
              className="uppercase tracking-wide text-red-500 text-3xl font-heading font-bold"
            >
              Discover
            </p>

            {/* Main heading */}
            <h1
              ref={headingRef}
              className="text-red-500 text-5xl md:text-6xl font-special font-bold leading-none"
            >
              Our Story
            </h1>

            <div
              ref={paraRef}
              className="mt-6 space-y-5 text-gray-100 text-lg md:text-xl leading-relaxed font-body"
            >
              <p>
                RestroX began with a simple idea — create a place where people
                can enjoy amazing food and unforgettable experiences. What
                started as a love for crafting delicious dishes grew into a
                restaurant where every plate represents quality, creativity, and
                care. Our famous momo became a customer favorite, but our
                journey is about much more — bringing people together through
                great food.
              </p>
            </div>

            {/* Quote */}
          </div>
        </div>
        <div
          ref={quoteRef}
          className="mt-10 text-3xl md:text-6xl text-red-500 font-heading  item-center px-55"
        >
          "Good food. Good people. Great memories."
        </div>
      </div>
    </section>
  );
};

export default OurStories;
