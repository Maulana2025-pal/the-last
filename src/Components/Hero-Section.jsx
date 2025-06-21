import React from "react";

function HeroSection() {
  return (
    <section
      className="relative h-[70vh] sm:h-[80vh] bg-cover bg-center bg-no-repeat flex items-center"
      style={{ backgroundImage: `url('/1.jpeg')` }}
    >
      {/* Gradasi hitam transparan */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-0"></div>

      {/* Konten Teks */}
      <div className="relative z-10 px-4 sm:pl-16 max-w-2xl text-white text-center sm:text-left">
        <h2 className="text-3xl sm:text-5xl font-bold mb-4 leading-snug">
          ALVI THRIFT SHOP
        </h2>
        <p className="text-sm sm:text-lg text-gray-300 mb-6">
          Hoodie kekinian yang peduli bumi dan penuh gaya 
        </p>
        <a
          href="/shop"
          className="inline-block bg-blue-950 text-white px-6 py-3 rounded-full shadow-md hover:bg-black transition"
        >
          Belanja Sekarang
        </a>
      </div>
    </section>
  );
}

export default HeroSection;
