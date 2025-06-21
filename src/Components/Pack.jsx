import React from "react";

function Pack() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-lg mt-10 space-y-6">
      <h1 className="text-3xl font-bold text-center text-gray-800">
        Packaging Alvi Thrift Shop
      </h1>
      <p className="text-center text-lg text-gray-600">
        Apa saja yang kamu dapatkan saat membeli produk dari kami? 💚
      </p>

      <div className="bg-green-50 p-4 rounded-xl border border-green-200 text-green-800 text-sm text-center">
        Alvi Thrift Shop adalah brand rework dengan teknik jahit dan lukis
        tangan. Kami percaya bahwa fashion bisa tetap stylish sambil peduli
        bumi. Dengan memilih produk kami, kamu sudah ikut mengurangi limbah
        tekstil dan mendukung bumi yang lebih sehat. 🌍
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Hang Tag */}
        <div className="space-y-3">
          <img
            src="./hangtaq.png"
            alt="Hang Tag"
            className="rounded-xl shadow-md w-full"
          />
          <h2 className="text-xl font-semibold text-gray-800">
            🌱 Hang Tag Ramah Lingkungan
          </h2>
          <p className="text-gray-600">
            Hang tag dibuat dari <strong>kertas daur ulang</strong> dan berisi
            benih tanaman. Setelah digunakan, hang tag ini bisa kamu tanam dan
            tumbuhkan!
          </p>
        </div>

        {/* Box Packaging */}
        <div className="space-y-3">
          <img
            src="./box.png"
            alt="Box Packaging"
            className="rounded-xl shadow-md w-full"
          />
          <h2 className="text-xl font-semibold text-gray-800">
            📦 Box dari Kertas Daur Ulang
          </h2>
          <p className="text-gray-600">
            Setiap produk dikemas dengan box eksklusif berbahan dasar{" "}
            <strong>kertas daur ulang</strong>, memberikan pengalaman unboxing
            yang bermakna dan ramah lingkungan.
          </p>
        </div>

        {/* Thank You Card */}
        <div className="space-y-3">
          <img
            src="./thankyoucard.png"
            alt="Thank You Card"
            className="rounded-xl shadow-md w-full"
          />
          <h2 className="text-xl font-semibold text-gray-800">
            💌 Thank You Card Spesial
          </h2>
          <p className="text-gray-600">
            Kartu ucapan terima kasih kami juga dibuat dari kertas daur ulang.
            Sebuah pesan kecil untukmu, dari hati kami, yang ingin berbagi
            semangat #SadarLingkungan.
          </p>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-gray-700 text-md">
          Dengan setiap pembelian, kamu bukan hanya mendapat produk fashion
          rework yang unik, tapi juga turut berkontribusi menjaga bumi. Terima
          kasih telah memilih Alvi Thrift Shop! 🌿✨
        </p>
      </div>
    </div>
  );
}

export default Pack;
