import React from "react";

export default function Gen3({ title }) {
  const heroes = [
    { name: "Selena", image: "/selena.png" },
    { name: "Granger", image: "/granger.png" },
    { name: "Khaleed", image: "/khaleed.png" },
    { name: "Vale", image: "/vale.png" },
    { name: "Pharsa", image: "/pharsa.png" },
  ];

  return (
    <div className="bg-rose-700/90 hover:bg-rose-600 transition-all duration-300 p-6 rounded-2xl shadow-lg">
      <h3 className="text-xl font-bold text-yellow-200 mb-5 text-center">
        {title}
      </h3>

      <div className="flex flex-wrap justify-center gap-6">
        {heroes.map((hero) => (
          <div
            key={hero.name}
            className="bg-rose-900/50 rounded-xl overflow-hidden shadow-md hover:scale-105 hover:shadow-rose-400/50 transition-all duration-300 w-56"
          >
            <img
              src={hero.image}
              alt={hero.name}
              className="w-full h-36 object-cover"
            />
            <p className="py-2 text-rose-50 font-semibold text-center text-sm">
              {hero.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
