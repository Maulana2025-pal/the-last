import React from 'react'

function HeroSection() {
  return (
    <div>
      <section
        className="relative h-[80vh] bg-cover bg-center bg-no-repeat flex items-center"
        style={{ backgroundImage: `url('/1.jpeg')` }}
      >
        {/* Gradasi hanya pada background */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-0"></div>

        {/* Konten teks dengan z-10 agar berada di atas gradasi */}
        <div className="relative z-10 pl-16 max-w-xl text-white">
          <h2 className="text-5xl font-bold mb-4">REVIBES WEAR</h2>
          <p className="text-lg text-gray-400 mb-6">
            Hoodie kekinian yang peduli bumi dan penuh gaya
          </p>
          <a
            href="#"
            className="align-text-bottom bg-blue-950 text-white px-6 py-3 rounded-full shadow-md hover:bg-black hover:text-white  "
          >
            Belanja Sekarang
          </a>
        </div>
      </section>
    </div>
  );
}

export default HeroSection