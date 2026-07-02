import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../components/Button";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const heroRef = useRef(null);
  const leftRef = useRef(null);
  const formRef = useRef(null);
  const heroImageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(heroRef.current, {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 80%",
        },
      });

      gsap.from(leftRef.current.children, {
        x: -60,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: leftRef.current,
          start: "top 75%",
        },
      });
      gsap.to(heroImageRef.current, {
        scale: 1.15,
        duration: 8,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.from(formRef.current, {
        x: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#000000] text-white py-28">
      <div className="max-w-full mx-auto px-6">
        {/* Hero / Header with background image */}
        <div
          ref={heroRef}
          className="relative rounded-3xl overflow-hidden mb-16 h-112 md:h-128"
        >
          {/* Background image */}
          <img
            ref={heroImageRef}
            src="https://res.cloudinary.com/dgfp5n7bn/image/upload/v1782890930/image_ljj6x3.webp"
            alt="Background"
            className="absolute inset-0 w-full h-full "
          />

          {/* Gradient overlays to blend into black background */}
          <div className="absolute inset-0 bg-linear-to-t from-black via-black/70 to-black/30" />
          <div className="absolute inset-0 bg-linear-to-b from-black/60 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-linear-to-r from-black/40 via-transparent to-black/40" />

          {/* Text content on top */}
          <div className="relative z-10 h-full flex flex-col items-center px-6 md:px-10 pb-10 mt-24 ">
            <h1 className="text-4xl md:text-6xl font-special text-red-500 leading-tight">
              Step Into RestroX
            </h1>

            <p className="mt-4 text-white text-base md:text-lg leading-relaxed items-center text-center">
              We welcome your inquiries and conversations. Whether it’s about
              dining, experiences, or <br />
              collaborations, our team is here to connect with you.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Content */}

          <div ref={leftRef} className="space-y-3 px-12 ">
            <div>
              <h2 className="text-2xl text-red-500 font-special">
                A Table at RestroX
              </h2>

              <p className="mt-4 text-white leading-relaxed max-w-lg">
                Enjoy exceptional dining and unforgettable moments. <br />
                For reservations or inquiries, reach out to our team
              </p>
            </div>

            <div className="  p-3 ">
              <h3 className="text-xl text-red-500 font-semibold mb-5 font-special">
                Location
              </h3>

              <p className="text-white">RestroX Restaurant, Kathmandu, Nepal</p>
            </div>

            <div className=" p-3">
              <h3 className="text-xl font-special mb-5 text-red-500">Phone</h3>

              <div className="space-y-3 text-white">
                <p className="text-white">+977 9864835573</p>
              </div>
            </div>

            <div className=" p-3">
              <h3 className="text-xl font-special mb-5 text-red-500">Email</h3>

              <div className="space-y-3 text-white">
                <p className="text-white">hello@restrox.com</p>
              </div>
            </div>

            <div className="  p-3  ">
              <h3 className="text-xl font-body text-red-500 mb-3 font-special">
                Hours
              </h3>

              <p className="text-white">Monday - Sunday: 10:00 AM - 10:00 PM</p>
            </div>
          </div>

          {/* Form */}
          <div ref={formRef} className="bg-white/5 border border-white/10 p-6 ">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Full Name */}
              <div>
                <label className="block text-white/70 text-xs uppercase tracking-widest mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-white/20 py-3 outline-none focus:border-red-400 transition-colors duration-300"
                />
              </div>

              {/* Address */}
              <div>
                <label className="block text-white/70 text-xs uppercase tracking-widest mb-2">
                  Address
                </label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-white/20 py-3 outline-none focus:border-red-400 transition-colors duration-300"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-white/70 text-xs uppercase tracking-widest mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full bg-transparent border-b border-white/20 py-3 outline-none focus:border-red-400 transition-colors duration-300"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-white/70 text-xs uppercase tracking-widest mb-2">
                  Phone Number
                </label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-white/20 py-3 outline-none focus:border-red-400 transition-colors duration-300"
                />
              </div>

              {/* Message */}
              <div className="md:col-span-2">
                <label className="block text-white/70 text-xs uppercase tracking-widest mb-2">
                  Message
                </label>
                <textarea
                  rows="4"
                  className="w-full bg-transparent border-b border-white/20 py-3 outline-none focus:border-red-400 transition-colors duration-300 resize-none"
                />
              </div>

              <div className="md:col-span-2 flex justify-start">
                <Button>Send Message</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
