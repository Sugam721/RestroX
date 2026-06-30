import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import OurStories from "./OurStories";
import Special from "./Special";
import Reserve from "./Reserve";
import Glimpse from "./Glimpse";
import Stories from "./Stories";
import Reviews from "./Reviews";
import Signature from "./Signature";

gsap.registerPlugin(ScrollTrigger);

const Homepage = () => {
  const heroSectionRef = useRef(null);
  const heroContentRef = useRef(null);
  const heroImageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero text animation
      gsap.from(heroContentRef.current.children, {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: heroSectionRef.current,
          start: "top 70%",
          end: "bottom top",
          toggleActions: "restart reverse restart reverse",
        },
      });

      // Hero image zoom animation
      gsap.fromTo(
        heroImageRef.current,
        {
          scale: 1.12,
        },
        {
          scale: 1,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: heroSectionRef.current,
            start: "top 70%",
            end: "bottom top",
            toggleActions: "restart reverse restart reverse",
          },
        },
      );

      // Hero image parallax
      gsap.to(heroImageRef.current, {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: heroSectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      ScrollTrigger.refresh();
    }, heroSectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <main>
      {/* HERO SECTION */}
      <section
        ref={heroSectionRef}
        className="relative min-h-screen overflow-hidden flex items-center"
      >
        {/* Background Image */}
        <img
          ref={heroImageRef}
          src="https://res.cloudinary.com/dgfp5n7bn/image/upload/v1782749698/momo_bg_zze76d.jpg"
          alt="RestroX Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-black/85 via-black/55 to-black/20" />

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
          <div ref={heroContentRef} className="max-w-2xl text-left text-white">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2">
              <span>🥟</span>
              <span className="uppercase tracking-[0.25em] text-xs md:text-sm">
                Signature Handmade Momo
              </span>
            </div>

            {/* Heading */}
            <h1 className="mt-8 text-6xl md:text-8xl font-serif font-bold leading-[0.9]">
              Welcome to
              <br />
              <span className="text-orange-400">RestroX</span>
            </h1>

            {/* Tagline */}
            <p className="mt-6 text-2xl md:text-3xl text-gray-100">
              Every flavor tells a story.
            </p>

            {/* Description */}
            <p className="mt-6 text-lg md:text-xl text-gray-300 leading-8 max-w-xl">
              Freshly handcrafted comfort food made for unforgettable moments.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button
                className="px-10 py-4 rounded-full bg-orange-500 hover:bg-orange-600
                transition-all duration-300 hover:scale-105 active:scale-95
                font-semibold shadow-xl"
              >
                Explore Menu
              </button>

              <button
                onClick={() => {
                  document.getElementById("booking").scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                }}
                className="px-10 py-4 rounded-full border border-white
                hover:bg-white hover:text-black transition-all duration-300
                hover:scale-105 active:scale-95 font-semibold"
              >
                Reserve Table
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
          <span className="text-white text-xs uppercase tracking-[0.3em]">
            Scroll
          </span>

          <div className="mt-3 w-0.5 h-14 bg-white/30 overflow-hidden rounded-full">
            <div className="w-full h-6 bg-orange-400 animate-bounce" />
          </div>
        </div>
      </section>

      <OurStories />
      <Special />
      <Signature />

      <div id="booking">
        <Reserve />
      </div>

      <Glimpse />
      <Stories />
      <Reviews />
    </main>
  );
};

export default Homepage;
