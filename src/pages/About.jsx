import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flame, Beef, Wine, Sparkles } from "lucide-react";
import Button from "../components/Button";

gsap.registerPlugin(ScrollTrigger);

const difference = [
  {
    title: "Signature Momos",
    desc: "Our handcrafted momos are the heart of RestroX—freshly prepared, perfectly seasoned, and loved by every guest.",
    Icon: Flame,
  },
  {
    title: "Fresh Quality Ingredients",
    desc: "From crisp vegetables to premium meats, every dish is prepared using fresh ingredients for authentic flavor.",
    Icon: Beef,
  },
  {
    title: "Variety for Every Craving",
    desc: "Beyond our famous momos, enjoy noodles, rice bowls, snacks, meals, and refreshing beverages all in one place.",
    Icon: Wine,
  },
  {
    title: "Warm Dining Experience",
    desc: "Comfortable ambience, friendly service, and memorable moments that make every visit to RestroX worth returning for.",
    Icon: Sparkles,
  },
];
const experience = [
  {
    num: "01",
    title: "Walk In Hungry",
    desc: "Step into a warm, modern space designed for comfort, conversations, and great food.",
  },
  {
    num: "02",
    title: "Explore the Menu",
    desc: "Choose from signature momos, hearty meals, flavorful noodles, snacks, and refreshing beverages.",
  },
  {
    num: "03",
    title: "Savor Every Bite",
    desc: "Enjoy dishes crafted with care, balanced flavors, and the quality that keeps guests coming back.",
  },
  {
    num: "04",
    title: "Create Memories",
    desc: "Leave with more than a satisfying meal—leave with moments worth sharing and reasons to return.",
  },
];

const About = () => {
  const sectionRef = useRef(null);
  const emberRef = useRef(null);
  const labelRef = useRef(null);

  const headingRef = useRef(null);

  const paraRef = useRef(null);
  const cardsRef = useRef(null);
  const stepsRef = useRef(null);
  const quoteRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const paragraphs = Array.from(paraRef.current.children);
      const cards = Array.from(cardsRef.current.children);
      const steps = Array.from(stepsRef.current.children);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(labelRef.current, {
        opacity: 0,

        y: 20,

        duration: 0.6,

        ease: "power3.out",
      })

        .from(
          headingRef.current,
          { opacity: 0, y: 70, scale: 0.96, duration: 1, ease: "expo.out" },
          "-=.3",
        )

        .from(
          paragraphs,
          { opacity: 0, y: 30, stagger: 0.15, duration: 0.7 },
          "-=.4",
        );

      gsap.set(cards, { opacity: 1, y: 0 });
      gsap.from(cards, {
        opacity: 0,

        y: 60,

        stagger: 0.15,

        duration: 0.8,

        ease: "power3.out",

        scrollTrigger: {
          trigger: cardsRef.current,

          start: "top 95%",

          toggleActions: "play none none reverse",
        },
      });

      gsap.set(steps, { opacity: 1, x: 0 });
      gsap.from(steps, {
        opacity: 0,
        x: -40,
        stagger: 0.15,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: stepsRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(quoteRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        scrollTrigger: {
          trigger: quoteRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(ctaRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.7,
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 95%",
          toggleActions: "play none none reverse",
        },
      });

      // Ambient ember glow drifting behind the hero heading
      gsap.to(emberRef.current, {
        backgroundPosition: "200% 50%",
        duration: 14,
        repeat: -1,
        ease: "none",
      });

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-[#000000] overflow-hidden py-24"
    >
      <section className="relative w-full h-screen overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full brightness-75"
        >
          <source
            src="https://res.cloudinary.com/dgfp5n7bn/video/upload/v1782974342/Smoke_transition_longclip_high_quality_2_x3hulu.mp4"
            type="video/mp4"
          />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Center Content */}
        <div className="relative z-10 flex h-full items-center justify-center">
          <h1 className="text-white text-7xl md:text-9xl lg:text-[11rem] font-body font-bold tracking-[0.2em] uppercase">
            RestroX
          </h1>
        </div>
      </section>

      <div className="relative z-10 px-8 md:px-20 lg:px-32 flex flex-col items-center mt-12 ">
        <span
          ref={labelRef}
          className="inline-block font-special text-5xl uppercase text-red-500"
        >
          Beyond the Name
        </span>

        <div
          ref={paraRef}
          className="mt-10 max-w-4xl  text-center space-y-6 text-white text-lg md:text-xm leading-relaxed font-body "
        >
          <p>
            RestroX is born from the vision to elevate live fire cooking into a
            refined culinary experience — it represents discipline, precision,
            and intent in every detail. From carefully sourced ingredients to
            the rhythm of open flame and thoughtful hospitality, every element
            exists in pursuit of quiet excellence.
          </p>
          <p>
            At RestroX, live fire is the foundation of every dish and every
            experience. From handcrafted cocktails to flame grilled cuisine,
            everything is built around warmth, depth, and precision. Our open
            hearth transforms simple ingredients into expressive dishes, where
            smoke, ember, and flame enhance natural flavor and define every
            plate.
          </p>
          <p>
            Every cut, pour, and preparation is guided by intent, not excess. We
            focus on balance, technique, and restraint, allowing fire to shape
            flavor rather than overpower it. What remains is not just a meal,
            but a memory shaped by flame, craft, and quiet precision.
          </p>
          <p>
            What remains is not just a meal, but a memory shaped by flame,
            craft, and quiet precision.
          </p>
        </div>
      </div>

      {/* video */}
      <div className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 h-96 lg:h-150 mt-24 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://res.cloudinary.com/dgfp5n7bn/video/upload/v1782972072/restaurant-video-1_1_enbes0.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      <div className="relative z-10 px-8 md:px-20 lg:px-32 flex flex-col items-center text-center mt-12 ">
        {/* The RestroX Difference */}
        <div className="mt-24">
          <h3 className="text-red-500 text-6xl md:text-6xl font-special">
            The RestroX Difference
          </h3>

          <p className="mt-3 text-white itemstext-center font-body">
            Discover the elements that define every Prestige experience, from
            live fire craftsmanship to refined <br />
            hospitality.
          </p>

          <div ref={cardsRef} className="mt-10 grid grid-cols-4 gap-12 ">
            {difference.map(({ title, desc, Icon }) => (
              <div
                key={title}
                className=" p-7 text-center hover:-translate-y-2 hover:border-[#C1441E]/50 transition duration-300"
              >
                <div className="mx-auto mb-5 flex h-28 w-28 items-center justify-center ">
                  <Icon className="h-28 w-28 text-red-500" strokeWidth={1.5} />
                </div>
                <h4 className="text-white max-w-2xl font-special mb-2 text-xl">
                  {title}
                </h4>
                <p className="text-white text-sm font-body ">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* image */}
      <div className="mt-24 w-screen relative left-1/2 -translate-x-1/2 h-80 overflow-hidden">
        <img
          src="https://res.cloudinary.com/dgfp5n7bn/image/upload/v1782972070/bg_anwfsy.webp"
          alt="Dish"
          className="w-full h-full object-cover"
        />
      </div>

      {/* The RestroX Experience */}
      <div className="relative z-10 px-8 md:px-20 lg:px-32 flex flex-col items-center text-center">
        <div className="mt-24 w-full">
          <h3 className="text-red-500 text-3xl md:text-5xl font-special">
            The RestroX Experience
          </h3>
          <p className="mt-3 text-white font-body">
            A world shaped by fire, craft, and precision — where every element,
            from the grill to the glass, is designed with intent and restraint.
          </p>

          <div
            ref={stepsRef}
            className="mt-12 grid gap-8 items-center justify-items-center
        grid-cols-1
        md:grid-cols-3 md:grid-rows-3
        md:[grid-template-areas:'top_top_top''left_center_right''bottom_bottom_bottom']"
          >
            {experience.map(({ num, title, desc }, i) => {
              const areas = ["top", "left", "right", "bottom"];
              return (
                <div
                  key={num}
                  className="text-center max-w-xs"
                  style={{ gridArea: areas[i] }}
                >
                  <span className="font-body italic text-5xl text-[#262626]">
                    {num}
                  </span>
                  <h4 className="text-[#D41F27] font-bold text-3xl md:text-4xl font-special mt-2">
                    {title}
                  </h4>
                  <p className="text-white font-body leading-relaxed mt-3">
                    {desc}
                  </p>
                </div>
              );
            })}

            {/* Centered round video */}
            <div
              style={{ gridArea: "center" }}
              className="w-full max-w-[256px] md:max-w-70 aspect-square rounded-full border border-white/30 overflow-hidden relative"
            >
              <video
                autoPlay
                loop
                playsInline
                muted
                className="pointer-events-none w-full h-full object-cover"
              >
                <source
                  src="https://res.cloudinary.com/dgfp5n7bn/video/upload/v1782978018/grill-video-5_gjupfk.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </div>

      <div
        className="relative bg-cover bg-center bg-no-repeat py-24"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dgfp5n7bn/image/upload/v1782978389/dine_dsbh4b.webp')",
        }}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10">
          <div
            ref={quoteRef}
            className="mt-24 text-center text-3xl md:text-5xl text-red-500 font-heading font-bold leading-snug px-6"
          >
            "Good food. Good people. Great memories."
          </div>

          <div
            ref={ctaRef}
            className="mt-14 flex flex-wrap items-center justify-center gap-6"
          >
            {/* <Button
              href="/special"
              className="px-8 py-3 rounded-full border border-[#E8873A]/50 text-[#E8873A] font-body text-sm tracking-wide hover:bg-[#E8873A]/10 transition"
            >
              Exclusive Specials
            </Button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
