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
          start: "top 75%",
        },
      });

      tl.from(labelRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power3.out",
      })
        .from(
          headingRef.current,
          { opacity: 0, y: 70, scale: 0.96, duration: 1.1, ease: "expo.out" },
          "-=0.5",
        )
        .from(
          lineRef.current,
          { scaleX: 0, duration: 0.9, ease: "power3.out" },
          "-=0.7",
        )
        .from(
          subRef.current,
          { opacity: 0, y: 40, duration: 0.9, ease: "power3.out" },
          "-=0.6",
        )
        .from(
          paraRef.current.children,
          {
            opacity: 0,
            y: 30,
            stagger: 0.15,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5",
        )
        .from(
          quoteRef.current,
          { opacity: 0, y: 30, scale: 0.98, duration: 0.9, ease: "power3.out" },
          "-=0.4",
        )
        .from(
          btnRef.current,
          { opacity: 0, y: 20, duration: 0.7, ease: "power3.out" },
          "-=0.5",
        );

      // Cinematic parallax + slow zoom on the background while scrolling
      gsap.fromTo(
        bgRef.current,
        { scale: 1.15, yPercent: -6 },
        {
          scale: 1,
          yPercent: 6,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full flex items-center overflow-hidden bg-black"
    >
      {/* Background Image */}
      <img
        ref={bgRef}
        className="absolute inset-0 w-full h-full object-cover scale-110 opacity-70 will-change-transform"
        src="https://res.cloudinary.com/dgfp5n7bn/image/upload/v1782721755/Stories_ry7zvv.jpg"
        alt="RestroX Story"
      />

      {/* Dark overlay + cinematic gradient */}
      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent" />

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 px-8 md:px-20 lg:px-32 max-w-5xl"
      >
        {/* Eyebrow label */}
        <p
          ref={labelRef}
          className="uppercase tracking-[0.4em] text-orange-300 text-sm mb-6"
        >
          Our Journey
        </p>

        {/* Main heading */}
        <h1
          ref={headingRef}
          className="text-white text-6xl md:text-8xl font-serif font-bold leading-none"
        >
          Our Story
        </h1>

        {/* Divider line */}
        <div
          ref={lineRef}
          className="origin-left h-px w-24 md:w-32 bg-linear-to-r from-orange-300 to-transparent my-7"
        />

        {/* Subheading */}
        <h2
          ref={subRef}
          className="text-3xl md:text-5xl font-serif text-orange-200"
        >
          The Story Behind RestroX
        </h2>

        {/* Story paragraphs */}
        <div
          ref={paraRef}
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

        {/* Quote */}
        <div
          ref={quoteRef}
          className="mt-10 text-2xl md:text-4xl text-white font-serif italic"
        >
          "Good food. Good people. Great memories."
        </div>

        {/* CTA Button */}
        <button
          ref={btnRef}
          className="mt-10 px-10 py-4 rounded-full bg-orange-500 hover:bg-orange-600 transition-all duration-300 hover:scale-105 text-white font-semibold shadow-lg shadow-orange-500/30"
        >
          Discover Our Menu
        </button>
      </div>
    </section>
  );
};

export default OurStories;
