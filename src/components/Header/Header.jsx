import React from "react";
import Logo from "./Logo";

export default function Header({ title }) {
  return (
    <header className="relative min-h-[350px] md:min-h-[420px] w-full overflow-hidden">
      {}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/bgImage.jpg')",
          filter: "brightness(0.5)",
          
        }}
      ></div>

      {}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/4 left-[-10%] w-[130%] h-[60%]
          bg-gradient-to-r from-cyan-300/50 via-purple-400/40 to-pink-400/50
          blur-[90px] animate-aurora-slow opacity-90 mix-blend-screen"
        ></div>
      </div>

      {}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-blue-200 opacity-80 animate-twinkle-slow"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              boxShadow: "0 0 14px 4px rgba(96,165,250,0.8)",
            }}
          ></span>
        ))}
      </div>

      {}
      <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
        <div className="w-[65%] max-w-[600px] animate-bounce-slow">
          <Logo />
        </div>
      </div>

      {}
      <div className="absolute bottom-6 left-6 z-20 max-w-xl drop-shadow-[0_0_16px_rgba(255,215,0,0.8)] animate-fade-slide">
        <h1
          className="text-4xl md:text-5xl font-extrabold tracking-wide mb-2 leading-tight uppercase 
          bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-600 
          text-transparent bg-clip-text"
        >
          {title}
        </h1>
        <p
          className="text-base md:text-lg font-light 
          bg-gradient-to-r from-yellow-200 to-amber-400 
          text-transparent bg-clip-text"
        >
          Bergabunglah dalam pertempuran epik Mobile Legends dan raih kemenangan!
        </p>
      </div>
    </header>
  );
}
