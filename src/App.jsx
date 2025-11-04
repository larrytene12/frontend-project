import React, { useState } from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="min-h-screen overflow-y-auto bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 text-gray-800">
      <Header title="MOBILE LEGENDS" />
      <main className="container mx-auto px-6 py-10">
        <Home searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </main>
      <Footer />
    </div>
  );
}
