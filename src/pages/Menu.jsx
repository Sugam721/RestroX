import React from "react";

const MenuCategories = [
  {
    title: "Not only momo:",
    items: [
      { name: "Steam", emoji: "🥟" },
      { name: "Fried", emoji: "🥟" },
      { name: "Jhol", emoji: "🥟" },
    ],
  },
  {
    title: "Main Course",
    items: [
      { name: "Rice Dishes", emoji: "🍛" },
      { name: "Noodles", emoji: "🍜" },
      { name: "Meals", emoji: "🍲" },
    ],
  },
  {
    title: "Snacks",
    items: [
      { name: "Fries", emoji: "🍟" },
      { name: "Snacks", emoji: "🥪" },
    ],
  },
  {
    title: "Drinks",
    items: [{ name: "Beverages", emoji: "🥤" }],
  },
];

export default function Menu() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
            Explore
          </p>
          <h2 className="mt-2 text-4xl font-bold text-gray-900 md:text-5xl">
            Menu Categories
          </h2>
          <p className="mt-4 text-gray-600">
            Discover our delicious selection of momos, meals, snacks, and
            refreshing beverages.
          </p>
        </div>

        {/* Categories */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {menuCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <h3 className="mb-6 border-b border-gray-200 pb-3 text-xl font-bold text-gray-900">
                {category.title}
              </h3>

              <ul className="space-y-4">
                {category.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-center gap-4 rounded-xl p-3 transition hover:bg-orange-50"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-2xl">
                      {item.emoji}
                    </span>

                    <span className="text-lg font-medium text-gray-700">
                      {item.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
