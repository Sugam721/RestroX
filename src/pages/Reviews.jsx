import React, { useEffect, useRef, useState } from "react";

const reviews = [
  {
    name: "Happy Guest",
    role: "First Visit",
    review:
      "The momo are incredible! Fresh, flavorful, and easily the best part of my visit.",
    image:
      "https://res.cloudinary.com/dgfp5n7bn/image/upload/v1782634883/69d2e0dd1ef87a76018e6c8c_72874c8877deb022dd35906d595c09ff_karv_h3bgey.jpg",
  },
  {
    name: "Food Lover",
    role: "Weekend Visitor",
    review:
      "A great place to hang out with friends. The food quality and atmosphere are amazing.",
    image:
      "https://res.cloudinary.com/dgfp5n7bn/image/upload/v1782634884/69f4f3ddc133b021f490b970_69f4f303c34b09ee4b3f2706_69c9bcd6cde239dfec9d53a6_mattengas.jpg_zqa6fb.avif",
  },
  {
    name: "Regular Customer",
    role: "Food Explorer",
    review:
      "RestroX has the perfect mix of variety and taste. Always a satisfying experience.",
    image:
      "https://res.cloudinary.com/dgfp5n7bn/image/upload/v1782634881/69f4f3e8c133b021f490c122_69f4f37910945e66967e1908_69c9bd1166bef5d335655619_talkintacos.jpg_c1emev.avif",
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [ref, inView];
};

const Star = ({ filled = true }) => (
  <svg
    viewBox="0 0 20 20"
    className={`w-4 h-4 ${filled ? "fill-orange-500" : "fill-orange-200"}`}
  >
    <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.1-5.4 3.1 1.3-6L1.3 7.7l6.1-.6L10 1.5z" />
  </svg>
);

const Reviews = () => {
  const [sectionRef, sectionInView] = useInView();

  return (
    <section
      ref={sectionRef}
      className="bg-[#000000] py-28 px-6 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div
          className={`mb-20 transition-all duration-700 ease-out ${
            sectionInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-red-600 uppercase tracking-[5px] text-xl font-special">
            Guest Reviews
          </p>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mt-4">
            <h1 className="text-5xl md:text-7xl font-special text-white leading-tight">
              What our guests
              <br />
              <span className="text-red-600 font-special">remember</span>
            </h1>

            <p className="max-w-md text-white text-lg leading-relaxed font-body">
              Every visit creates a small story — from the first bite, shared
              conversations, and moments around the table.
            </p>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((item, index) => (
            <article
              key={item.name}
              style={{
                transitionDelay: sectionInView ? `${index * 120}ms` : "0ms",
              }}
              className={`group relative bg-white rounded-4xl p-8
                shadow-[0_20px_50px_rgba(0,0,0,0.06)]
                transition-all duration-700 ease-out
                hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(234,88,12,0.14)]
                ${index === 1 ? "md:-translate-y-8 md:hover:-translate-y-10" : ""}
                ${sectionInView ? "opacity-100 translate-y-0 md:translate-y-0" : "opacity-0 translate-y-8"}
                ${sectionInView && index === 1 ? "md:-translate-y-8!" : ""}`}
            >
              {/* Quote mark */}
              <div className="absolute top-5 right-7 text-7xl text-orange-100 font-body select-none transition-colors duration-500 group-hover:text-orange-200">
                ”
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-8">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} />
                ))}
              </div>

              <p className="text-gray-700 text-lg leading-relaxed mb-10 relative z-10">
                "{item.review}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-white-50 transition-transform duration-500 group-hover:scale-105"
                />

                <div>
                  <h3 className="font-heading text-4xl text-gray-900">
                    {item.name}
                  </h3>
                  <p className="font-body text-sm text-gray-500">{item.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div
          className={`mt-20 flex justify-center transition-all duration-700 ease-out delay-300 ${
            sectionInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        ></div>
      </div>
    </section>
  );
};

export default Reviews;
