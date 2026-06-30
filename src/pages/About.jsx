import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const highlights = [
  {
    title: "Fresh Ingredients",
    desc: "Every dish begins with carefully selected ingredients prepared fresh every day.",
    image:
      "https://res.cloudinary.com/dgfp5n7bn/image/upload/v1782840602/Fresh_zjp7ud.jpg",
  },

  {
    title: "Signature Recipes",
    desc: "Our recipes are crafted with passion, creativity, and authentic flavors.",
    image:
      "https://res.cloudinary.com/dgfp5n7bn/image/upload/v1782723335/momo_grizlf.jpg",
  },

  {
    title: "Amazing Variety",
    desc: "From famous momos to meals, snacks, and drinks — something for everyone.",
    image:
      "https://res.cloudinary.com/dgfp5n7bn/image/upload/v1782721739/Dish5_ymue6v.webp",
  },

  {
    title: "Warm Ambience",
    desc: "A comfortable place where friends and families create memories.",
    image:
      "https://res.cloudinary.com/dgfp5n7bn/image/upload/v1782721767/outlet_ogz92l.webp",
  },

  {
    title: "Fast Service",
    desc: "Quality food and smooth service for every dining experience.",
    image:
      "https://res.cloudinary.com/dgfp5n7bn/image/upload/v1782722923/images_1_cqtpnx.jpg",
  },
];

const About = () => {
  const sectionRef = useRef(null);

  const bgRef = useRef(null);

  const labelRef = useRef(null);

  const headingRef = useRef(null);

  const lineRef = useRef(null);

  const subRef = useRef(null);

  const paraRef = useRef(null);

  const cardsRef = useRef(null);

  const quoteRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const paragraphs = Array.from(paraRef.current.children);

      const cards = Array.from(cardsRef.current.children);

      // Main animation

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
          {
            opacity: 0,

            y: 70,

            scale: 0.95,

            duration: 1,

            ease: "expo.out",
          },
          "-=.3",
        )

        .from(
          lineRef.current,
          {
            scaleX: 0,

            duration: 0.7,
          },
          "-=.5",
        )

        .from(
          subRef.current,
          {
            opacity: 0,

            y: 30,

            duration: 0.7,
          },
          "-=.4",
        )

        .from(
          paragraphs,
          {
            opacity: 0,

            y: 30,

            stagger: 0.15,

            duration: 0.7,
          },
          "-=.3",
        )

        .from(quoteRef.current, {
          opacity: 0,

          y: 30,

          duration: 0.8,
        });

      // FIXED CARDS ANIMATION

      gsap.set(cards, {
        opacity: 1,

        y: 0,
      });

      gsap.from(cards, {
        opacity: 0,

        y: 60,

        stagger: 0.15,

        duration: 0.8,

        ease: "power3.out",

        scrollTrigger: {
          trigger: cardsRef.current,

          start: "top 85%",

          toggleActions: "play none none reverse",
        },
      });

      // Background animation

      gsap.fromTo(
        bgRef.current,

        {
          scale: 1.15,

          yPercent: -5,
        },

        {
          scale: 1,

          yPercent: 5,

          ease: "none",

          scrollTrigger: {
            trigger: sectionRef.current,

            start: "top bottom",

            end: "bottom top",

            scrub: 1,
          },
        },
      );

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
relative
min-h-screen
bg-black
overflow-hidden
py-24
"
    >
      <img
        ref={bgRef}
        src="https://res.cloudinary.com/dgfp5n7bn/image/upload/v1782721755/Stories_ry7zvv.jpg"
        alt="RestroX"
        className="
absolute
inset-0
w-full
h-full
object-cover
opacity-40
"
      />

      <div className="absolute inset-0 bg-black/70" />

      <div
        className="
relative
z-10
px-8
md:px-20
lg:px-32
"
      >
        <p
          ref={labelRef}
          className="
uppercase
tracking-[0.4em]
text-orange-300
text-sm
mb-6
"
        >
          About RestroX
        </p>

        <h1
          ref={headingRef}
          className="
text-white
text-6xl
md:text-8xl
font-serif
font-bold
leading-none
"
        >
          Beyond Food
        </h1>

        <div
          ref={lineRef}
          className="
origin-left
h-px
w-28
bg-orange-400
my-8
"
        />

        <h2
          ref={subRef}
          className="
text-orange-200
text-3xl
md:text-5xl
font-serif
"
        >
          The Heart Behind RestroX
        </h2>

        <div
          ref={paraRef}
          className="
mt-8
max-w-4xl
space-y-5
text-gray-200
text-lg
md:text-xl
leading-relaxed
"
        >
          <p>
            RestroX started with one simple vision — creating a place where
            people can enjoy delicious food, comfort, and unforgettable moments.
          </p>

          <p>
            From our handmade momos to carefully crafted dishes, every plate
            represents passion, quality, and dedication.
          </p>

          <p>
            We believe a restaurant is more than food. It is about people,
            conversations, celebrations, and memories shared together.
          </p>
        </div>

        <div
          ref={cardsRef}
          className="
mt-16
grid
sm:grid-cols-2
lg:grid-cols-5
gap-6
"
        >
          {highlights.map((item) => (
            <div
              key={item.title}
              className="
bg-black/60
border
border-gray-800
rounded-2xl
p-6
text-center
hover:-translate-y-2
transition
duration-300
"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="eager"
                onLoad={() => console.log(item.title, "loaded")}
                className="
w-20
h-20
rounded-full
object-cover
mx-auto
mb-5
border
border-orange-400/40
"
              />

              <h3 className="text-white font-bold mb-2">{item.title}</h3>

              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        <div
          ref={quoteRef}
          className="
mt-20
text-center
text-3xl
md:text-5xl
font-serif
italic
text-white
"
        >
          "Good food. Good people. Great memories."
        </div>
      </div>
    </section>
  );
};

export default About;
