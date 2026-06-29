import React from "react";

const Glimpse = () => {
  const images = [
    {
      title: "Restaurant Interior",
      image:
        "https://res.cloudinary.com/dgfp5n7bn/image/upload/v1782721767/outlet_ogz92l.webp    ",
      size: "normal",
    },
    {
      title: "Food Presentation",
      image:
        "https://res.cloudinary.com/dgfp5n7bn/image/upload/v1782721739/Dish5_ymue6v.webp",
      size: "normal",
    },
    {
      title: "Happy Guests",
      image:
        "https://res.cloudinary.com/dgfp5n7bn/image/upload/v1782722923/images_1_cqtpnx.jpg",
      size: "normal",
    },
    {
      title: "Chef Preparing Dishes",
      image:
        "https://res.cloudinary.com/dgfp5n7bn/image/upload/v1782723235/chef_m5gi5c.webp",
      size: "normal",
    },
    {
      title: "Signature Momos",
      image:
        "https://res.cloudinary.com/dgfp5n7bn/image/upload/v1782723335/momo_grizlf.jpg",
      size: "large",
    },
  ];

  return (
    <section className="bg-[#faf7f2] py-24 px-6 md:px-12">
      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <p className="uppercase tracking-[4px] text-sm text-orange-600 font-semibold">
          Inside RestroX
        </p>

        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mt-4">
          A Glimpse of <span className="text-orange-600">RestroX</span>
        </h2>

        <p className="mt-6 text-gray-600 text-lg leading-relaxed">
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
            key={index}
            className={`relative overflow-hidden rounded-3xl group shadow-lg
            ${
              item.size === "large"
                ? "md:col-span-2 md:row-span-2"
                : "md:col-span-1"
            }`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="
              w-full h-full object-cover
              transition duration-700
              group-hover:scale-110
              "
            />

            {/* Overlay */}
            <div
              className="
              absolute inset-0 
              bg-linear-to-t from-black/70 via-black/20 to-transparent
              opacity-0 group-hover:opacity-100
              transition duration-500
              flex items-end
              p-6
              "
            >
              <h3 className="text-white text-xl font-semibold">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Highlight */}
      <div className="mt-16 max-w-3xl mx-auto text-center">
        <p className="text-gray-700 italic text-lg">
          "Every dish has a story, every table has a memory."
        </p>
      </div>
    </section>
  );
};

export default Glimpse;
