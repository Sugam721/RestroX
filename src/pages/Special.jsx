import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

gsap.registerPlugin(ScrollTrigger);

const dishes = [
  {
    name: "RestroX Special Momo",
    price: "Rs.650",
    tag: "Best Seller",
    image:
      "https://res.cloudinary.com/dgfp5n7bn/image/upload/v1782896936/Special_Momo_fj4utu.webp",
    description:
      "Handmade steamed momo served with our signature spicy tomato chutney.",
  },
  {
    name: "Spicy Chilli Momo",
    price: "Rs.390",
    tag: "Fan Favourite",
    image:
      "https://res.cloudinary.com/dgfp5n7bn/image/upload/v1782896935/2_pvt6kc.png",
    description:
      "Crispy fried momo tossed in garlic, onions, peppers and our special chilli sauce.",
  },
  {
    name: "Chef's Special Noodles",
    price: "Rs.490",

    image:
      "https://res.cloudinary.com/dgfp5n7bn/image/upload/v1782896937/Noodles_gdowek.png",
    description:
      "Wok-fried noodles with fresh vegetables, herbs, and authentic Asian flavors.",
  },
  {
    name: "Signature Thali",
    price: "Rs.550",

    image:
      "https://res.cloudinary.com/dgfp5n7bn/image/upload/v1782897333/Thali_Set-removebg-preview_awu35i.png",
    description:
      "A complete Nepali meal featuring rice, curry, vegetables, pickles, and salad.",
  },
  {
    name: "Crispy Chicken Wings",
    price: "Rs.790",

    image:
      "https://res.cloudinary.com/dgfp5n7bn/image/upload/v1782897447/pngtree-crispy-fried-chicken-wings-with-dipping-sauce-png-image_17697079-removebg-preview_wvylix.png",
    description:
      "Golden crispy wings glazed with our house-made spicy garlic sauce.",
  },
  {
    name: "Chocolate Lava Cake",
    price: "Rs.450",

    image:
      "https://res.cloudinary.com/dgfp5n7bn/image/upload/v1782898064/Pngtree_chocolate_lava_cake_molten_center_23381823_rsvpec.png",
    description:
      "Warm chocolate lava cake served with vanilla ice cream and chocolate drizzle.",
  },
];

const Special = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const overlayRef = useRef(null);

  const headingRef = useRef(null);
  const subRef = useRef(null);
  const lineRef = useRef(null);
  const cardsRef = useRef([]);
  const cardImgRef = useRef([]);
  const cardGlowRef = useRef([]);
  const btnRef = useRef(null);
  const marqueeRef = useRef(null);
  const emberLayerRef = useRef(null);

  const navigate = useNavigate();

  // letter-split headline ref
  const titleChars = "RestroX Specials".split("");

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        subRef.current,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
        },
      )

        .fromTo(
          ".special-char",
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            stagger: 0.03,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.3",
        )

        .fromTo(
          lineRef.current,
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
          },
          "-=0.3",
        );

      // Background Parallax

      gsap.fromTo(
        imageRef.current,
        {
          yPercent: 15,
          scale: 1.15,
        },
        {
          yPercent: -15,
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );

      // Dark overlay

      gsap.to(overlayRef.current, {
        opacity: 0.35,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Cards reveal

      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 70,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        );

        // card image movement

        const img = cardImgRef.current[index];

        if (img) {
          gsap.fromTo(
            img,
            {
              yPercent: -10,
            },
            {
              yPercent: 10,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.5,
              },
            },
          );
        }
      });

      // Button reveal

      gsap.fromTo(
        btnRef.current,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: btnRef.current,
            start: "top 90%",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0d0d0d] py-28 overflow-hidden"
      style={{ perspective: "1200px" }}
    >
      {/* Background Parallax Image */}

      <div ref={imageRef} className="absolute inset-0 -z-20"></div>

      {/* Dark Overlay */}

      <div
        ref={overlayRef}
        className="absolute inset-0 bg-black opacity-70 -z-10"
      />

      {/* Ambient glow blobs */}
      <div
        className="glow-blob-1 pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2
          w-175 h-100 rounded-full opacity-10"
        style={{
          background: "radial-gradient(ellipse, #f97316 0%, transparent 70%)",
        }}
      />
      <div
        className="glow-blob-2 pointer-events-none absolute bottom-0 right-0
          w-100 h-100 rounded-full opacity-[0.06]"
        style={{
          background: "radial-gradient(ellipse, #f97316 0%, transparent 70%)",
        }}
      />

      {/* Floating embers */}
      <div
        ref={emberLayerRef}
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {Array.from({ length: 18 }).map((_, i) => (
          <span
            key={i}
            className="ember absolute w-1 h-1 rounded-full bg-red-500"
            style={{ boxShadow: "0 0 8px 2px rgba(249,115,22,0.7)" }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* ── Heading ── */}
        <div className="text-center mb-14">
          <span
            ref={subRef}
            className="inline-block uppercase tracking-[0.4em] text-red-500 text-xl font-special font-semibold mb-5"
          >
            Our Menu
          </span>

          <h2
            ref={headingRef}
            className="text-5xl md:text-7xl font-special font-bold text-white leading-tight"
            style={{ perspective: "600px" }}
          >
            {"RestroX ".split("").map((c, i) => (
              <span
                key={`r-${i}`}
                className="special-char inline-block"
                style={{ display: "inline-block" }}
              >
                {c === " " ? "\u00A0" : c}
              </span>
            ))}
            <span className="relative inline-block">
              {"Specials".split("").map((c, i) => (
                <span
                  key={`s-${i}`}
                  className="special-char relative z-10 text-red-500 inline-block"
                >
                  {c}
                </span>
              ))}
              {/* Underline accent */}
              <svg
                className="special-underline absolute -bottom-2 left-0 w-full"
                height="6"
                viewBox="0 0 200 6"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 5 Q100 0 200 5"
                  fill="none"
                  stroke="#f97316"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeDasharray="220"
                  strokeDashoffset="220"
                />
              </svg>
            </span>
          </h2>

          <p
            ref={lineRef}
            className="text-gray-400 mt-7 max-w-xl mx-auto text-lg leading-relaxed font-body"
          >
            Fresh ingredients, authentic flavors, and passion in every plate.
          </p>
        </div>

        {/* ── Cards Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {dishes.map((dish, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group relative flex flex-col bg-white/4 border border-white/8
                rounded-3xl overflow-hidden will-change-transform
                hover:border-red-500/60 hover:bg-white/[0.07]
                transition-[border-color,background-color] duration-500 cursor-pointer"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Cursor-follow glow */}
              <div
                ref={(el) => (cardGlowRef.current[index] = el)}
                className="pointer-events-none absolute w-56 h-56 rounded-full opacity-0 z-20"
                style={{
                  background:
                    "radial-gradient(circle, rgba(249,115,22,0.25) 0%, transparent 70%)",
                  transform: "translate(-50%, -50%)",
                }}
              />

              {/* Image */}
              {/* Image */}
              <div className="relative overflow-hidden h-72">
                <img
                  ref={(el) => (cardImgRef.current[index] = el)}
                  src={dish.image}
                  alt={dish.name}
                  className="  w-full  h-full  object-contain  group-hover:scale-110  transition-transform  duration-700  ease-out"
                />

                {/* Dark gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-[#0d0d0d]/80 via-transparent to-transparent" />

                {/* Tag badge */}
                <span className="  absolute top-4 left-4  bg-black text-white  text-[10px]  uppercase  tracking-[0.2em]  font-special  px-3 py-1  rounded-full  shadow-lg">
                  {dish.tag}
                </span>
              </div>

              {/* Body */}
              <div
                className="flex flex-col flex-1 p-6"
                style={{ transform: "translateZ(30px)" }}
              >
                <h3 className="text-white text-xl  leading-snug group-hover:text-red-500 font-special transition-colors duration-300">
                  {dish.name}
                </h3>

                <p className="text-white mt-3 text-sm leading-relaxed flex-1 font-body">
                  {dish.description}
                </p>

                {/* CTA row */}
                <div className="mt-6 flex items-center justify-between"></div>
              </div>
              <button
                type="button"
                aria-label="Rs.750"
                className=" w-fit mx-auto px-4 py-2 transition-all duration-300 cursor-pointer text-sm font-medium inline-flex items-center justify-center rounded-full bg-red-500 text-white hover:bg-red-600 mb-6"
              >
                {dish.price}
              </button>

              {/* Hover glow border shimmer */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
                  transition-opacity duration-500 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(249,115,22,0.06) 0%, transparent 60%)",
                }}
              />
            </div>
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <div ref={btnRef} className="text-center mt-20 text-white">
          <p className=" text-xl mb-6 uppercase tracking-[0.3em] font-heading text-red-600 font-extrabold">
            And many more on our full menu
          </p>
          <Button onClick={() => navigate("/menu")}>
            Explore Full Menu
            <span className="text-lg">→</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Special;
