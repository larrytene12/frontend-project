import React from "react";

export default function Gen4({ title }) {
  const heroes = [
    { name: "Yin", image: "/yin.png" },
    { name: "Julian", image: "/julian.png" },
    { name: "Fredrinn", image: "/ferdrin.png" },
    { name: "Novaria", image: "/novaria.png" },
    { name: "Arlott", image: "/arlott.png" },
  ];

  return (
    <div className="bg-red-700/90 hover:bg-red-600 transition-all duration-300 p-6 rounded-2xl shadow-lg">
      <h3 className="text-xl font-bold text-yellow-300 mb-5 text-center">
        {title}
      </h3>

      <div className="flex flex-wrap justify-center gap-6">
        {heroes.map((hero) => (
          <div
            key={hero.name}
            className="bg-red-900/50 rounded-xl overflow-hidden shadow-md hover:scale-105 hover:shadow-red-400/50 transition-all duration-300 w-56"
          >
            <img
              src={hero.image}
              alt={hero.name}
              className="w-full h-36 object-cover"
            />
            <p className="py-2 text-red-50 font-semibold text-center text-sm">
              {hero.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
