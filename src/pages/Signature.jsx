import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Signature = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(imageRef.current, {
        x: -70,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(textRef.current.children, {
        x: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const viewSpecials = () => {
    document.getElementById("specials")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      ref={sectionRef}
      className="bg-[#000000] w-full py-24 px-6 md:px-16 lg:px-32"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[40%_60%] gap-14 items-center">
        {/* IMAGE */}

        <div ref={imageRef} className="relative  rounded-3xl overflow-hidden">
          <img
            src="https://res.cloudinary.com/dgfp5n7bn/image/upload/v1782751136/Momo_Bamboo_cq4eoj.webp"
            alt="RestroX Signature Dish"
            className="w-full h-full object-cover hover:scale-105 transition duration-700"
          />

          <div className="absolute inset-0 bg-black/20" />

          <span className=" absolute top-5 left-5 bg-white text-black px-4 py-2 rounded-full text-xs font-special uppercase tracking-widest ">
            Best Seller
          </span>
        </div>

        {/* CONTENT */}

        <div ref={textRef} className="text-white opacity-100">
          <p className="font-heading uppercase tracking-[0.4em] text-red-500 text-xl">
            Signature
          </p>

          <h1 className="mt-5 text-4xl md:text-6xl font-special leading-tight">
            The Taste
            <br />
            That Defines Us
          </h1>

          <div className="mt-6">
            <h3 className="text-red-500 font-special text-2xl">About</h3>

            <p className="mt-3 text-white max-w-xl leading-relaxed font-body">
              Our signature creations are crafted with fresh ingredients,
              authentic flavors and the passion behind every plate. A perfect
              blend of tradition and creativity that makes every visit
              memorable.
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-red-500 font-special text-2xl">Special Dish</h3>

            <p className="mt-2 text-white font-body">
              RestroX Special Momo — handmade, freshly prepared and served with
              our signature house sauce.
            </p>
          </div>

          <button
            onClick={viewSpecials}
            className=" mt-10 px-8 py-3 rounded-full bg-red-500 hover:bg-red-600 transition-all duration-300 text-white font-semibold "
          >
            View Specials
          </button>
        </div>
      </div>
    </section>
  );
};

export default Signature;
