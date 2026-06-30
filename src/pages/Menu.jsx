import React, { useState } from "react";

const menuBackground =
  "https://res.cloudinary.com/dgfp5n7bn/image/upload/v1782839157/menubg_ewjmm2.avif";

const menuPages = [
  {
    title: "Momo Specials",
    subtitle: "Our Signature",
    items: [
      {
        name: "Steam Momo (Veg)",
        price: 280,
        desc: "Classic handmade dumplings, steamed and served with house sesame chutney.",
        image:
          "https://res.cloudinary.com/dgfp5n7bn/image/upload/v1782728078/chicken_xrmdnf.jpg",
      },
      {
        name: "Steam Momo (Chicken)",
        price: 320,
        desc: "Juicy minced chicken filling wrapped in delicate dough.",
        image:
          "https://res.cloudinary.com/dgfp5n7bn/image/upload/v1782751136/Momo_Bamboo_cq4eoj.webp",
      },
      {
        name: "Fried Momo",
        price: 340,
        desc: "Crispy golden-fried momos tossed in a light spiced coating.",
        image:
          "https://res.cloudinary.com/dgfp5n7bn/image/upload/v1782839623/Fried_momo_olydoi.jpg",
      },
      {
        name: "Jhol Momo",
        price: 360,
        desc: "Momos drenched in a tangy, spiced sesame-tomato broth.",
        image:
          "https://res.cloudinary.com/dgfp5n7bn/image/upload/v1782728077/jholmomo_r0gxli.jpg",
      },
      {
        name: "Chilli Momo",
        price: 390,
        desc: "Pan-tossed momos in a bold chilli-garlic sauce.",
        image:
          "https://res.cloudinary.com/dgfp5n7bn/image/upload/v1782728077/c-momo-600x600_mrgg2n.jpg",
      },
      {
        name: "RestroX Special Momo",
        price: 650,
        desc: "Our chef's signature recipe — a house secret blend.",
        image:
          "https://res.cloudinary.com/dgfp5n7bn/image/upload/v1782723335/momo_grizlf.jpg",
      },
    ],
  },

  {
    title: "Nepali & Indian",
    subtitle: "Main Course",
    items: [
      {
        name: "Dal Bhat Tarkari",
        price: 350,
        desc: "Steamed rice, lentil soup, seasonal vegetables, and pickle.",
        image:
          "https://res.cloudinary.com/dgfp5n7bn/image/upload/v1782728598/images_wnvmo1.jpg",
      },
      {
        name: "Chicken Curry",
        price: 420,
        desc: "Slow-cooked chicken in traditional spiced gravy.",
        image: "",
      },
      {
        name: "Mutton Curry",
        price: 520,
        desc: "Tender mutton simmered in rich aromatic spices.",
        image: "",
      },
      {
        name: "Paneer Butter Masala",
        price: 380,
        desc: "Cottage cheese cubes in creamy tomato butter sauce.",
        image: "",
      },
      {
        name: "Butter Chicken",
        price: 450,
        desc: "Tandoor chicken in a velvety tomato cream sauce.",
        image: "",
      },
      {
        name: "Dal Makhani",
        price: 320,
        desc: "Slow simmered black lentils finished with cream.",
        image: "",
      },
    ],
  },

  {
    title: "Chinese & Pan-Asian",
    subtitle: "Noodles & Rice",
    items: [
      {
        name: "Chicken Chowmein",
        price: 300,
        desc: "Stir fried noodles with vegetables and chicken.",
        image:
          "https://res.cloudinary.com/dgfp5n7bn/image/upload/v1782728528/Noodles_m38inu.jpg",
      },
      {
        name: "Veg Fried Rice",
        price: 260,
        desc: "Wok tossed rice with seasonal vegetables.",
        image: "",
      },
      {
        name: "Chicken Fried Rice",
        price: 300,
        desc: "Classic fried rice loaded with diced chicken.",
        image: "",
      },
      {
        name: "Chilli Chicken",
        price: 380,
        desc: "Crispy chicken tossed in spicy soy chilli glaze.",
        image: "",
      },
      {
        name: "Schezwan Noodles",
        price: 320,
        desc: "Fiery Schezwan style noodles.",
        image:
          "https://res.cloudinary.com/dgfp5n7bn/image/upload/v1782728528/Noodles_m38inu.jpg",
      },
      {
        name: "Thukpa",
        price: 280,
        desc: "Himalayan noodle soup with vegetables and herbs.",
        image: "",
      },
    ],
  },

  {
    title: "Continental & Italian",
    subtitle: "World Flavours",
    items: [
      {
        name: "Margherita Pizza",
        price: 550,
        desc: "Classic pizza with tomato mozzarella and basil.",
        image: "",
      },
      {
        name: "Chicken BBQ Pizza",
        price: 750,
        desc: "Smoky barbecue chicken with mozzarella.",
        image: "",
      },
      {
        name: "Spaghetti Aglio e Olio",
        price: 490,
        desc: "Garlic infused olive oil pasta.",
        image: "",
      },
      {
        name: "Grilled Chicken Steak",
        price: 790,
        desc: "Herb marinated chicken with vegetables.",
        image:
          "https://res.cloudinary.com/dgfp5n7bn/image/upload/v1782721739/Dish4_knlhpl.webp",
      },
      {
        name: "Club Sandwich",
        price: 320,
        desc: "Triple layered sandwich with chicken and egg.",
        image: "",
      },
      {
        name: "Mushroom Soup",
        price: 220,
        desc: "Creamy roasted mushroom soup.",
        image: "",
      },
    ],
  },

  {
    title: "Snacks & Sides",
    subtitle: "Light Bites",
    items: [
      {
        name: "Classic French Fries",
        price: 180,
        desc: "Crispy golden fries with house dip.",
        image: "",
      },
      {
        name: "Peri Peri Fries",
        price: 210,
        desc: "Fries tossed in peri peri seasoning.",
        image: "",
      },
      {
        name: "Chicken Lollipop",
        price: 350,
        desc: "Fried chicken wings with glaze.",
        image: "",
      },
      {
        name: "Paneer Pakora",
        price: 260,
        desc: "Crispy cottage cheese fritters.",
        image: "",
      },
      {
        name: "Spring Rolls",
        price: 240,
        desc: "Crisp vegetable rolls.",
        image: "",
      },
      {
        name: "Onion Rings",
        price: 190,
        desc: "Golden fried onion rings.",
        image: "",
      },
    ],
  },

  {
    title: "Beverages",
    subtitle: "Drinks & Refreshments",
    items: [
      {
        name: "Masala Tea",
        price: 80,
        desc: "Traditional spiced milk tea.",
        image: "",
      },
      {
        name: "Cold Coffee",
        price: 180,
        desc: "Chilled coffee blended with milk.",
        image: "",
      },
      {
        name: "Fresh Lime Soda",
        price: 150,
        desc: "Sweet or salted chilled soda.",
        image:
          "https://res.cloudinary.com/dgfp5n7bn/image/upload/v1782839665/drink-4_kdiumc.webp",
      },
      {
        name: "Mango Juice",
        price: 290,
        desc: "Creamy mango yogurt smoothie.",
        image:
          "https://res.cloudinary.com/dgfp5n7bn/image/upload/v1782839664/drink-2_ndvozm.webp",
      },
      {
        name: "Iced Lemon Tea",
        price: 260,
        desc: "Refreshing citrus iced tea.",
        image:
          "https://res.cloudinary.com/dgfp5n7bn/image/upload/v1782839663/drink-1_aawiyw.webp",
      },
      {
        name: "Soft Drinks",
        price: 120,
        desc: "Coke, Sprite, Fanta served chilled.",
        image:
          "https://res.cloudinary.com/dgfp5n7bn/image/upload/v1782839664/drink-3_ve3oo5.webp",
      },
    ],
  },
];

export default function Menu() {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState("next");

  const total = menuPages.length;
  const current = menuPages[page];

  const goNext = () => {
    if (page < total - 1) {
      setDirection("next");
      setPage((p) => p + 1);
    }
  };

  const goPrev = () => {
    if (page > 0) {
      setDirection("prev");
      setPage((p) => p - 1);
    }
  };

  return (
    <section className="min-h-screen bg-black py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-10 text-center">
          <h2 className="mt-2 text-5xl font-serif font-bold text-white">
            Our Menu
          </h2>

          <p className="mt-4 text-gray-400">
            A curated selection of RestroX signature dishes.
          </p>
        </div>

        <div className="relative mx-auto flex max-w-3xl items-center gap-5">
          <button
            onClick={goPrev}
            disabled={page === 0}
            className="h-12 w-12 rounded-full border border-gray-700 text-white hover:border-orange-500 disabled:opacity-30"
          >
            ←
          </button>

          <div
            className="
  w-full 
  overflow-hidden 
  rounded-2xl 
  shadow-2xl
  border
  border-gray-300
  "
            style={{
              perspective: "1800px",
              backgroundImage: `url(${menuBackground})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div
              key={page}
              className="px-8 py-10 sm:px-12"
              style={{
                animation:
                  direction === "next"
                    ? "pageFlipNext .5s ease"
                    : "pageFlipPrev .5s ease",
              }}
            >
              <div className="mb-8 border-b-2 border-double border-gray-300 pb-5 text-center">
                <p className="text-xs uppercase tracking-[0.3em] text-orange-600">
                  {current.subtitle}
                </p>

                <h3 className="mt-2 text-4xl font-serif font-bold text-gray-900">
                  {current.title}
                </h3>
              </div>

              <ul className="space-y-6">
                {current.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex gap-4 hover:translate-x-2 transition"
                  >
                    <div className="h-20 w-20 rounded-xl overflow-hidden shrink-0border border-gray-300 bg-gray-200">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.name}
                          loading="lazy"
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="flexh-full items-center justify-center text-xs text-gray-400">
                          Food
                        </div>
                      )}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <span className="font-serif text-lg font-semibold text-gray-900">
                          {item.name}
                        </span>

                        <span className="flex-1 border-b border-dotted border-gray-400" />

                        <span className="font-serif text-lg font-bold text-orange-700">
                          Rs. {item.price}
                        </span>
                      </div>

                      <p className="mt-1 text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-10 text-center text-xs tracking-widest text-gray-400">
                {page + 1}/{total}
              </div>
            </div>
          </div>

          <button
            onClick={goNext}
            disabled={page === total - 1}
            className="h-12 w-12 rounded-full border border-gray-700 text-white hover:border-orange-500 disabled:opacity-30"
          >
            →
          </button>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {menuPages.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > page ? "next" : "prev");
                setPage(i);
              }}
              className={`h-2 rounded-full transition-all ${
                i === page ? "w-7 bg-orange-500" : "w-2 bg-gray-700"
              }`}
            />
          ))}
        </div>
      </div>

      <style>{`@keyframes pageFlipNext{
0%{
transform:rotateY(-90deg);
opacity:0;
}

100%{
transform:rotateY(0);
opacity:1;
}

}


@keyframes pageFlipPrev{

0%{
transform:rotateY(90deg);
opacity:0;
}

100%{
transform:rotateY(0);
opacity:1;
}

}

`}</style>
    </section>
  );
}
