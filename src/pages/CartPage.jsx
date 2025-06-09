import React from "react";
import { useLocation } from "react-router-dom";

function CartPage() {
  const location = useLocation();
  const cart = location.state?.cart || [];

  function generateWhatsAppMessage(cart) {
    let message = "Halo! Saya ingin memesan produk berikut:\n\n";
    cart.forEach((item, idx) => {
      message += `Produk ${idx + 1}:\n`;
      message += `- Nama: ${item.name}\n`;
      message += `- Ukuran: ${item.size}\n`;
      message += `- Warna: ${item.color}\n`;
      message += `- Bahan: ${item.material}\n`;
      message += `- Harga: Rp${item.price.toLocaleString("id-ID")}\n\n`;
    });
    return message;
  }

  return (
    <div className="px-6 py-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-950 mb-6">Keranjang Anda</h1>

      {cart.length === 0 ? (
        <p className="text-gray-600">Keranjang masih kosong.</p>
      ) : (
        <>
          <div className="space-y-6">
            {cart.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 bg-white rounded-xl shadow p-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-28 h-28 object-cover rounded-lg"
                />
                <div>
                  <h2 className="text-lg font-semibold text-blue-950">
                    {item.name}
                  </h2>
                  <p className="text-sm text-gray-700">
                    Ukuran: <strong>{item.size}</strong> | Warna:{" "}
                    <strong>{item.color}</strong> | Bahan:{" "}
                    <strong>{item.material}</strong>
                  </p>
                  <p className="text-gray-800 mt-1">
                    Harga: Rp{item.price.toLocaleString("id-ID")}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-right">
            <a
              href={`https://wa.me/6285768111508?text=${encodeURIComponent(
                generateWhatsAppMessage(cart)
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition"
            >
              Lanjutkan Pesan via WhatsApp
            </a>
          </div>
        </>
      )}
    </div>
  );
}

export default CartPage;
