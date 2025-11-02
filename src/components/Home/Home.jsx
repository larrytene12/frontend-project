// src/components/Home/Home.jsx
import React from "react";
import Search from "./Search";
import Generations from "../Header/Generations/Generations";
import CardInfo from "./CardInfo/CardInfo";

export default function Home({ searchTerm, setSearchTerm }) {
  return (
    <div>
      {/* Input pencarian */}
      <Search
        placeholder="Cari hero Mobile Legends..."
        onSearchChange={setSearchTerm}
      />

      {/* Bagian generasi hero */}
      <Generations searchTerm={searchTerm} />

      {/* Bagian info kartu hero */}
      <section className="mt-12">
        <CardInfo />
      </section>
    </div>
  );
}
