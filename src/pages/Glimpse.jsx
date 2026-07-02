import React, { useEffect, useRef, useState } from "react";

const images = [
  {
    title: "Restaurant Interior",
    image:
      "https://res.cloudinary.com/dgfp5n7bn/image/upload/v1782978389/dine_dsbh4b.webp",
    size: "normal",
  },
  {
    title: "Food Presentation",
    image:
      "https://res.cloudinary.com/dgfp5n7bn/image/upload/v1782894555/Chef1_xq6ixz.jpg",
    size: "normal",
  },

  {
    title: "Chef Preparing Dishes",
    image:
      "https://res.cloudinary.com/dgfp5n7bn/image/upload/v1782723235/chef_m5gi5c.webp",
    size: "normal",
  },
  {
    title: "Signature Momo",
    image:
      "https://res.cloudinary.com/dgfp5n7bn/image/upload/v1782723335/momo_grizlf.jpg",
    size: "normal",
  },
];

const useInView = (options = { threshold: 0.15 }) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.disconnect();
      }
    }, options);

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return [ref, inView];
};

const Glimpse = () => {
  const [sectionRef, sectionInView] = useInView();

  return (
    <section
      ref={sectionRef}
      className="bg-[#000000] py-24 px-6 md:px-12 overflow-hidden"
    >
      {/* Heading */}
      <div
        className={`max-w-4xl mx-auto text-center mb-16 transition-all duration-700 ease-out ${
          sectionInView
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-6"
        }`}
      >
        <p className="uppercase tracking-[4px] text-2xl text-red-600 font-special">
          Inside RestroX
        </p>

        <h2 className="text-4xl md:text-6xl font-special text-gray-300 mt-4">
          A Glimpse of <span className="text-red-600">RestroX</span>
        </h2>

        <p className="mt-6 text-gray-400 text-lg leading-relaxed font-body">
          A place designed for food, conversations, and memories.
          <br />
          From the first bite to the final smile, every corner of RestroX
          reflects our passion for creating a welcoming experience.
        </p>
      </div>

      {/* Gallery */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-5 auto-rows-[260px]">
        {images.map((item, index) => (
          <div
            key={item.title}
            style={{
              transitionDelay: sectionInView ? `${index * 90}ms` : "0ms",
            }}
            className={`relative overflow-hidden rounded-3xl group shadow-lg
              transition-all duration-700 ease-out
              hover:shadow-2xl hover:shadow-Red-900/20
              ${sectionInView ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-[0.97]"}
              ${item.size === "large" ? "md:col-span-2 md:row-span-2" : "md:col-span-1"}`}
          >
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />

            <div
              className="absolute inset-0 bg-linear-to-t from-black/75 via-black/20 to-transparent
                opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out
                flex items-end p-6"
            >
              <h3
                className="text-white text-xl font-special translate-y-3 group-hover:translate-y-0
                  opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out delay-75"
              >
                {item.title}
              </h3>
            </div>

            <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/0 group-hover:ring-white/20 transition-all duration-500 pointer-events-none" />
          </div>
        ))}
      </div>

      {/* Bottom Highlight */}
      <div
        className={`mt-16 max-w-3xl mx-auto text-center transition-all duration-700 ease-out delay-300 ${
          sectionInView
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-6"
        }`}
      >
        <p className="text-red-500 translate-x-[0.25em] text-5xl font-heading">
          "Every dish has a story, every table has a memory."
        </p>
      </div>
    </section>
  );
};

export default Glimpse;
