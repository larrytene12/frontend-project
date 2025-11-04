// src/components/Header/Generations/Generations.jsx
import React from "react";
import Gen1 from "./Gen1";
import Gen2 from "./Gen2";
import Gen3 from "./Gen3";
import Gen4 from "./Gen4";

export default function Generations({ searchTerm }) {
  // Semua data hero dengan path gambar dari folder public
  const allHeroes = [
    { name: "Alucard", gen: 1, image: "/alucard.png" },
    { name: "Miya", gen: 1, image: "/miyaa.png" },
    { name: "Tigreal", gen: 1, image: "/trigeal.png" },
    { name: "Lancelot", gen: 2, image: "/lancelot.png" },
    { name: "Odette", gen: 2, image: "/oddete.png" },
    { name: "Harley", gen: 2, image: "/harley.png" },
    { name: "Angela", gen: 2, image: "/angela.png" },
    { name: "Gusion", gen: 2, image: "/guison.png" },
    { name: "Selena", gen: 3, image: "/selena.png" },
    { name: "Granger", gen: 3, image: "/granger.png" },
    { name: "Khaleed", gen: 3, image: "/khaleed.png" },
    { name: "Vale", gen: 3, image: "/vale.png" },
    { name: "Pharsa", gen: 3, image: "/pharsa.png" },
  ];

  // Filter hero berdasarkan pencarian
  const filteredHeroes = allHeroes.filter((hero) =>
    hero.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Jika tidak sedang mencari → tampilkan generasi
  if (!searchTerm.trim()) {
    return (
      <section className="relative py-10">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{ backgroundImage: "url('/background.png')" }}
        ></div>

        <div className="relative z-10 flex flex-col gap-10 px-6">
          <Gen1 title="Generasi 1 – Hero Awal Land of Dawn" />
          <Gen2 title="Generasi 2 – Pahlawan Baru Bangkit" />
          <Gen3 title="Generasi 3 – Legenda Modern" />
          <Gen4 title="Generasi 4 – Era Cyber & Beyond" />
        </div>
      </section>
    );
  }

  // Jika user sedang mencari hero
  return (
    <div className="mt-10 px-6">
      <h2 className="text-center text-2xl font-bold text-blue-700 mb-6">
        Hasil Pencarian: "{searchTerm}"
      </h2>

      {filteredHeroes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {filteredHeroes.map((hero, index) => (
            <div
              key={index}
              className="bg-blue-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              {/* Gambar Hero */}
              <img
                src={hero.image}
                alt={hero.name}
                className="w-full h-48 object-cover"
              />

              {/* Info Hero */}
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-yellow-300">
                  {hero.name}
                </h3>
                <p className="text-blue-100 mt-1">Generasi {hero.gen}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">Hero tidak ditemukan 😔</p>
      )}
    </div>
  );
}
