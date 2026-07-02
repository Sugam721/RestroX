import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

import OurStories from "./OurStories";
import Special from "./Special";
import Reserve from "./Reserve";
import Glimpse from "./Glimpse";
import Stories from "./Stories";
import Reviews from "./Reviews";
import Signature from "./Signature";
import Ambience from "./Ambience";

gsap.registerPlugin(ScrollTrigger);

const Homepage = () => {
  const heroSectionRef = useRef(null);
  const heroContentRef = useRef(null);
  const heroImageRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.hash === "#booking") {
      setTimeout(() => {
        document.getElementById("booking")?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 200);
    }
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Text animation of the top
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

      // Image Zoom Animation fix
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

      // Image parallax
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

            {/* Heading */}
            <h1 className="mt-8 text-6xl md:text-7xl font-special font-bold leading-[0.9]">
              Welcome to
              <br />
              <span className="text-red-500">RestroX</span>
            </h1>

            {/* Tagline */}
            <p className="mt-6 text-2xl md:text-3xl text-gray-100 font-body">
              Every flavor tells a story.
            </p>

            {/* Description */}

            {/* Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button onClick={() => navigate("/menu")}>Explore Menu →</Button>
            </div>
          </div>
        </div>

        <div className="mt-3 w-0.5 h-14 bg-white/30 overflow-hidden rounded-full"></div>
      </section>

      <OurStories />
      <Special />
      <Ambience />
      <Signature />

      {/* <div id="booking">
        <Reserve />
      </div> */}

      <Glimpse />
      {/* <Stories /> */}
      <Reviews />
    </main>
  );
};

export default Homepage;
