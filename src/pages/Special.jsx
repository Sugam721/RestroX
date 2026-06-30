import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const dishes = [
  {
    name: "RestroX Special Momo",
    price: "Rs.650",
    tag: "Best Seller",
    image:
      "https://res.cloudinary.com/dgfp5n7bn/image/upload/v1782723335/momo_grizlf.jpg",
    description:
      "Handmade steamed momo served with our signature spicy tomato chutney.",
  },
  {
    name: "Spicy Chilli Momo",
    price: "Rs.390",
    tag: "Fan Favourite",
    image:
      "https://res.cloudinary.com/dgfp5n7bn/image/upload/v1782728078/Momo101_owpv6r.jpg",
    description:
      "Crispy fried momo tossed in garlic, onions, peppers and our special chilli sauce.",
  },
  {
    name: "Chef's Special Noodles",
    price: "Rs.490",
    tag: "Chef's Pick",
    image:
      "https://res.cloudinary.com/dgfp5n7bn/image/upload/v1782728528/Noodles_m38inu.jpg",
    description:
      "Wok-fried noodles with fresh vegetables, herbs, and authentic Asian flavors.",
  },
  {
    name: "Signature Thali",
    price: "Rs.550",
    tag: "Comfort Meal",
    image:
      "https://res.cloudinary.com/dgfp5n7bn/image/upload/v1782728598/images_wnvmo1.jpg",
    description:
      "A complete Nepali meal featuring rice, curry, vegetables, pickles, and salad.",
  },
  {
    name: "Crispy Chicken Wings",
    price: "Rs.790",
    tag: "Must Try",
    image:
      "https://res.cloudinary.com/dgfp5n7bn/image/upload/v1782728759/images_1_ierofx.jpg",
    description:
      "Golden crispy wings glazed with our house-made spicy garlic sauce.",
  },
  {
    name: "Chocolate Lava Cake",
    price: "Rs.450",
    tag: "Sweet Finish",
    image:
      "https://res.cloudinary.com/dgfp5n7bn/image/upload/v1782728800/images_2_nsor6d.jpg",
    description:
      "Warm chocolate lava cake served with vanilla ice cream and chocolate drizzle.",
  },
];

const MARQUEE_WORDS = [
  "Handmade",
  "★",
  "Wood-Fired",
  "★",
  "Slow-Simmered",
  "★",
  "Fresh Daily",
  "★",
  "Hand-Tossed",
  "★",
  "Authentic",
  "★",
];

const Special = () => {
  const sectionRef = useRef(null);
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
      // ── Page-load hero sequence ──────────────────────────────
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        subRef.current,
        { opacity: 0, y: 20, letterSpacing: "0.1em" },
        {
          opacity: 1,
          y: 0,
          letterSpacing: "0.4em",
          duration: 0.7,
          ease: "power3.out",
        },
      )
        .fromTo(
          ".special-char",
          { opacity: 0, y: 60, rotateX: -90, transformOrigin: "50% 100%" },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.8,
            stagger: 0.025,
            ease: "back.out(1.7)",
          },
          "-=0.3",
        )
        .fromTo(
          lineRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          "-=0.3",
        );

      // underline draw
      gsap.fromTo(
        ".special-underline path",
        { strokeDashoffset: 220 },
        {
          strokeDashoffset: 0,
          duration: 1.1,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // ── Infinite marquee ──────────────────────────────────────
      const marqueeEl = marqueeRef.current;
      if (marqueeEl) {
        const totalWidth = marqueeEl.scrollWidth / 2;
        gsap.to(marqueeEl, {
          x: -totalWidth,
          duration: 18,
          ease: "none",
          repeat: -1,
        });
      }

      // ── Ambient embers ─────────────────────────────────────────
      const embers = emberLayerRef.current
        ? emberLayerRef.current.querySelectorAll(".ember")
        : [];
      embers.forEach((ember) => {
        gsap.set(ember, {
          x: gsap.utils.random(0, 1200),
          y: gsap.utils.random(0, 800),
          opacity: gsap.utils.random(0.15, 0.5),
          scale: gsap.utils.random(0.4, 1.1),
        });
        gsap.to(ember, {
          y: "-=200",
          x: `+=${gsap.utils.random(-60, 60)}`,
          opacity: 0,
          duration: gsap.utils.random(5, 10),
          repeat: -1,
          ease: "power1.out",
          delay: gsap.utils.random(0, 6),
        });
      });

      // ── Cards: staggered reveal + 3D tilt + magnetic glow ──────
      cardsRef.current.forEach((card, i) => {
        if (!card) return;

        gsap.fromTo(
          card,
          { opacity: 0, y: 80, scale: 0.92, rotateX: 8 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            duration: 0.85,
            ease: "power3.out",
            delay: (i % 3) * 0.12,
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          },
        );

        // image parallax drift while scrolling past card
        const img = cardImgRef.current[i];
        if (img) {
          gsap.fromTo(
            img,
            { yPercent: -12 },
            {
              yPercent: 12,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.6,
              },
            },
          );
        }

        // 3D tilt + glow follow on pointer move
        const glow = cardGlowRef.current[i];
        const handleMove = (e) => {
          const rect = card.getBoundingClientRect();
          const px = (e.clientX - rect.left) / rect.width;
          const py = (e.clientY - rect.top) / rect.height;
          gsap.to(card, {
            rotateY: (px - 0.5) * 10,
            rotateX: (0.5 - py) * 10,
            transformPerspective: 800,
            duration: 0.5,
            ease: "power2.out",
          });
          if (glow) {
            gsap.to(glow, {
              opacity: 1,
              left: `${px * 100}%`,
              top: `${py * 100}%`,
              duration: 0.3,
              ease: "power2.out",
            });
          }
        };
        const handleLeave = () => {
          gsap.to(card, {
            rotateY: 0,
            rotateX: 0,
            duration: 0.6,
            ease: "elastic.out(1, 0.6)",
          });
          if (glow) gsap.to(glow, { opacity: 0, duration: 0.4 });
        };

        card.addEventListener("mousemove", handleMove);
        card.addEventListener("mouseleave", handleLeave);
      });

      // ── Bottom CTA reveal + magnetic button ─────────────────────
      gsap.fromTo(
        btnRef.current,
        { opacity: 0, y: 30, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.6)",
          scrollTrigger: {
            trigger: btnRef.current,
            start: "top 92%",
            toggleActions: "play none none reverse",
          },
        },
      );

      const magnetBtn = btnRef.current
        ? btnRef.current.querySelector("button")
        : null;
      if (magnetBtn) {
        const onMove = (e) => {
          const rect = magnetBtn.getBoundingClientRect();
          const relX = e.clientX - rect.left - rect.width / 2;
          const relY = e.clientY - rect.top - rect.height / 2;
          gsap.to(magnetBtn, {
            x: relX * 0.35,
            y: relY * 0.5,
            duration: 0.4,
            ease: "power2.out",
          });
        };
        const onLeave = () => {
          gsap.to(magnetBtn, {
            x: 0,
            y: 0,
            duration: 0.6,
            ease: "elastic.out(1, 0.5)",
          });
        };
        magnetBtn.addEventListener("mousemove", onMove);
        magnetBtn.addEventListener("mouseleave", onLeave);
      }

      // ── Glow blob ambient float ──────────────────────────────────
      gsap.to(".glow-blob-1", {
        x: 40,
        y: 30,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(".glow-blob-2", {
        x: -30,
        y: -20,
        duration: 9,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0d0d0d] py-28 overflow-hidden"
      style={{ perspective: "1200px" }}
    >
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
            className="ember absolute w-1 h-1 rounded-full bg-orange-400"
            style={{ boxShadow: "0 0 8px 2px rgba(249,115,22,0.7)" }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* ── Heading ── */}
        <div className="text-center mb-14">
          <span
            ref={subRef}
            className="inline-block uppercase tracking-[0.4em] text-orange-400 text-xs font-semibold mb-5"
          >
            Our Menu
          </span>

          <h2
            ref={headingRef}
            className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight"
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
                  className="special-char relative z-10 text-orange-400 inline-block"
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
            className="text-gray-400 mt-7 max-w-xl mx-auto text-lg leading-relaxed"
          >
            Fresh ingredients, authentic flavors, and passion in every plate.
          </p>
        </div>

        {/* ── Marquee ticker ── */}
        <div className="relative mb-16 overflow-hidden border-y border-white/10 py-3">
          <div ref={marqueeRef} className="flex whitespace-nowrap w-max">
            {[...MARQUEE_WORDS, ...MARQUEE_WORDS].map((word, i) => (
              <span
                key={i}
                className={`mx-6 text-sm uppercase tracking-[0.3em] font-semibold ${
                  word === "★" ? "text-orange-500" : "text-gray-500"
                }`}
              >
                {word}
              </span>
            ))}
          </div>
        </div>

        {/* ── Cards Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {dishes.map((dish, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group relative flex flex-col bg-white/4 border border-white/8
                rounded-2xl overflow-hidden will-change-transform
                hover:border-orange-500/60 hover:bg-white/[0.07]
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
              <div className="relative overflow-hidden h-64">
                <img
                  ref={(el) => (cardImgRef.current[index] = el)}
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-[125%] object-cover translate-y-[-8%]
                    group-hover:scale-110 transition-transform duration-700 ease-out"
                />

                {/* Dark gradient over image bottom */}
                <div className="absolute inset-0 bg-linear-to-t from-[#0d0d0d]/80 via-transparent to-transparent" />

                {/* Tag badge */}
                <span
                  className="absolute top-4 left-4 bg-orange-500 text-white
                    text-[10px] uppercase tracking-[0.2em] font-bold
                    px-3 py-1 rounded-full shadow-lg"
                >
                  {dish.tag}
                </span>

                {/* Price floated on image bottom-right */}
                <span
                  className="absolute bottom-4 right-4 text-orange-400 font-bold text-xl
                    drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]
                    group-hover:scale-110 transition-transform duration-300"
                >
                  {dish.price}
                </span>
              </div>

              {/* Body */}
              <div
                className="flex flex-col flex-1 p-6"
                style={{ transform: "translateZ(30px)" }}
              >
                <h3 className="text-white text-xl font-bold leading-snug group-hover:text-orange-300 transition-colors duration-300">
                  {dish.name}
                </h3>

                <p className="text-gray-400 mt-3 text-sm leading-relaxed flex-1">
                  {dish.description}
                </p>

                {/* CTA row */}
                <div className="mt-6 flex items-center justify-between">
                  {/* <button
                    className="text-sm text-orange-400 font-semibold
                      flex items-center gap-1.5
                      hover:text-orange-300 hover:gap-3
                      transition-all duration-300"
                  >
                    View Details
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </button> */}

                  {/* Add button */}
                  {/* <button
                    className="w-9 h-9 rounded-full border border-orange-500/50 flex items-center justify-center text-orange-400 text-lg
                    font-light hover:bg-orange-500 hover:text-white hover:border-orange-500
                    hover:scale-110 hover:rotate-90 active:scale-95 transition-all duration-300"
                    aria-label="Add to order"
                  >
                    +
                  </button> */}
                </div>
              </div>

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
        <div ref={btnRef} className="text-center mt-20">
          <p className="text-gray-500 text-sm mb-6 uppercase tracking-[0.3em]">
            And many more on our full menu
          </p>
          <button
            onClick={() => navigate("/menu")}
            className="relative inline-flex items-center gap-3 px-10 py-4
              bg-orange-500 hover:bg-orange-600
              rounded-full text-white text-base font-semibold
              shadow-[0_0_40px_rgba(249,115,22,0.3)]
              hover:shadow-[0_0_60px_rgba(249,115,22,0.45)]
              active:scale-95
              transition-[background-color,box-shadow] duration-300"
          >
            Explore Full Menu
            <span className="text-lg">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Special;
