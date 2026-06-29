import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Reserve = () => {
  const sectionRef = useRef(null);
  const formRef = useRef(null);

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
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        },
      );

      gsap.fromTo(
        formRef.current,
        {
          opacity: 0,
          y: 80,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          delay: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: formRef.current,
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
      className="relative min-h-screen w-full flex items-center overflow-hidden"
    >
      {/* Background */}

      <img
        className="absolute inset-0 w-full h-full object-cover"
        src="https://res.cloudinary.com/dgfp5n7bn/image/upload/v1782718620/restroimg_vxnr3j.jpg"
        alt="Reserve"
      />

      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}

      <div className="relative z-10 w-full px-8 md:px-20 lg:px-32 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text */}

        <div>
          <p className="  uppercase tracking-[0.35em]text-orange-300  ">
            Reserve a Table
          </p>

          <h1 className="mt-5 text-5xl md:text-7xl text-white font-serif font-bold">
            Make Your
            <br />
            Moment Special
          </h1>

          <p className="mt-6 max-w-xl text-gray-200 text-lg leading-relaxed">
            Planning a dinner, celebration, or casual hangout? Reserve your
            table and enjoy a comfortable dining experience with your favorite
            food waiting for you.
          </p>

          <h3
            className="
            mt-8 text-2xl text-orange-200 font-serif"
          >
            Book Your Table Today
          </h3>
        </div>

        {/* Form */}

        <form
          ref={formRef}
          className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 space-y-5"
        >
          {/* <input
            type="text"
            placeholder="Name"
            className="w-full p-4 rounded-xl bg-white/20 text-white placeholder-gray-300 outline-none"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full p-4 rounded-xl bg-white/20 text-white placeholder-gray-300 outline-none"
          />

          <input
            type="date"
            className="w-full p-4 rounded-xl  bg-white/20 text-white outline-none"
          />

          <input
            type="time"
            className="w-full p-4 rounded-xl bg-white/20 text-white outline-none"
          />

          <input
            type="number"
            placeholder="Number of Guests"
            className="w-full p-4 rounded-xl bg-white/20 text-white placeholder-gray-300 outline-none"
          /> */}

          <button
            type="submit"
            className="w-full py-4 rounded-xl bg-orange-500 hover:bg-orange-600 transition text-white font-semibold text-lg"
          >
            Reserve Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default Reserve;
