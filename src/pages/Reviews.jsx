import React from "react";

const Reviews = () => {
  const reviews = [
    {
      name: "Happy Guest",
      role: "First Visit",
      review:
        "The momos are incredible! Fresh, flavorful, and easily the best part of my visit.",
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

  return (
    <section className="bg-[#f8f3ec] py-28 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="mb-20">
          <p className="  text-orange-600  uppercase  tracking-[6px]  text-sm  font-medium">
            Guest Reviews
          </p>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mt-4">
            <h1 className="  text-5xl md:text-7xl  font-serif  text-gray-900  leading-tight">
              What our guests
              <br />
              <span className="text-orange-600">remember</span>
            </h1>

            <p className="  max-w-md  text-gray-600  text-lg  leading-relaxed">
              Every visit creates a small story — from the first bite, shared
              conversations, and moments around the table.
            </p>
          </div>
        </div>

        {/* Reviews */}
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((item, index) => (
            <article
              key={index}
              className={` bg-white rounded-4xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.06)] relative ${index === 1 ? "md:-translate-y-8" : ""}   `}
            >
              {/* quote */}
              <div className=" absolute top-5 right-7 text-7xl text-orange-100 font-serif">
                ”
              </div>

              <div className=" flex gap-1 text-orange-500 mb-8">★★★★★</div>

              <p className="  text-gray-700  text-lg  leading-relaxed  mb-10">
                "{item.review}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 rounded-full object-cover  "
                />

                <div>
                  <h3 className="  font-semibold  text-gray-900">
                    {item.name}
                  </h3>

                  <p className="  text-sm  text-gray-500">{item.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom message */}
        <div className="  mt-20  flex  justify-center">
          <div className="  bg-orange-600  text-white  rounded-full  px-8  py-4  shadow-lg  text-center"></div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
