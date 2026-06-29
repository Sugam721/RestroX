import React from "react";

const dishes = [
  {
    name: "RestroX Special Momo",
    price: "Rs.750",
    image:
      "https://res.cloudinary.com/dgfp5n7bn/image/upload/v1782723335/momo_grizlf.jpg",
    description:
      "Handmade steamed momo served with our signature spicy tomato chutney.",
  },
  {
    name: "Spicy Chilli Momo",
    price: "Rs.390",
    image:
      "https://res.cloudinary.com/dgfp5n7bn/image/upload/v1782728078/Momo101_owpv6r.jpg",
    description:
      "Crispy fried momo tossed in garlic, onions, peppers and our special chilli sauce.",
  },
  {
    name: "Chef's Special Noodles",
    price: "Rs.490",
    image:
      "https://res.cloudinary.com/dgfp5n7bn/image/upload/v1782728528/Noodles_m38inu.jpg",
    description:
      "Wok-fried noodles with fresh vegetables, herbs, and authentic Asian flavors.",
  },
  {
    name: "RestroX Signature Thali",
    price: "Rs.550",
    image:
      "https://res.cloudinary.com/dgfp5n7bn/image/upload/v1782728598/images_wnvmo1.jpg",
    description:
      "A complete Nepali meal featuring rice, curry, vegetables, pickles, and salad.",
  },
  {
    name: "Crispy Chicken Wings",
    price: "Rs.790",
    image:
      "https://res.cloudinary.com/dgfp5n7bn/image/upload/v1782728759/images_1_ierofx.jpg",
    description:
      "Golden crispy wings glazed with our house-made spicy garlic sauce.",
  },
  {
    name: "Chocolate Lava Cake",
    price: "Rs.450",
    image:
      "https://res.cloudinary.com/dgfp5n7bn/image/upload/v1782728800/images_2_nsor6d.jpg",
    description:
      "Warm chocolate lava cake served with vanilla ice cream and chocolate drizzle.",
  },
];

const Special = () => {
  return (
    <section className="bg-[#111] py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <div className="text-center mb-16">
          <span className="uppercase tracking-[0.35em] text-orange-400 text-sm">
            Our Menu
          </span>

          <h2 className="text-5xl md:text-6xl font-bold text-white mt-4">
            RestroX Specials
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Discover our signature dishes prepared with fresh ingredients,
            authentic flavors, and passion in every bite.
          </p>
        </div>

        {/* Grid for view*/}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dishes.map((dish, index) => (
            <div
              key={index}
              className="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-orange-500 transition-all duration-500"
            >
              <div className="overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-72 object-cover group-hover:scale-110 duration-700"
                />
              </div>

              <div className="p-7">
                <span className="text-orange-400 text-sm uppercase tracking-widest">
                  RestroX Special
                </span>

                <div className="flex justify-between items-center mt-3">
                  <h3 className="text-2xl font-bold text-white">{dish.name}</h3>

                  <span className="text-orange-400 font-bold text-xl">
                    {dish.price}
                  </span>
                </div>

                <p className="text-gray-400 mt-5 leading-7">
                  {dish.description}
                </p>

                <button className="mt-8 text-orange-400 font-semibold hover:text-orange-300 transition">
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}

        <div className="text-center mt-16">
          <button className="px-10 py-4 bg-orange-500 hover:bg-orange-600 rounded-full text-white text-lg font-semibold transition hover:scale-105">
            Explore Our Full Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default Special;
