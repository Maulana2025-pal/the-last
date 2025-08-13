import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function CartPage() {
  const navigate = useNavigate();

  // Load cart from sessionStorage
  const [cart, setCart] = useState(() => {
    const savedCart = sessionStorage.getItem("thriftShopCart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Update cart in sessionStorage when cart changes
  useEffect(() => {
    sessionStorage.setItem("thriftShopCart", JSON.stringify(cart));
  }, [cart]);

  // Update quantity of item in cart
  function updateQuantity(itemId, newQuantity) {
    if (newQuantity < 1) return;
    if (newQuantity > 10) return;

    const updatedCart = cart.map((item) =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    setCart(updatedCart);
  }
  function removeFromCart(itemId) {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
    alert("Produk berhasil dihapus dari keranjang!");
  }

  // Clear entire cart
  function clearCart() {
    setCart([]);
    sessionStorage.removeItem("thriftShopCart");
    alert("Keranjang berhasil dikosongkan!");
  }

  // Calculate total price
  function calculateTotal() {
    return cart.reduce(
      (total, item) => total + item.price * (item.quantity || 1),
      0
    );
  }

  // Calculate total items
  function getTotalItems() {
    return cart.reduce((total, item) => total + (item.quantity || 1), 0);
  }

  function generateWhatsAppMessage(cart) {
    let message = "Halo! Saya ingin memesan produk berikut:\n\n";
    cart.forEach((item, idx) => {
      const quantity = item.quantity || 1;
      const itemTotal = item.price * quantity;
      message += `Produk ${idx + 1}:\n`;
      message += `- Nama: ${item.name}\n`;
      message += `- Ukuran: ${item.size}\n`;
      message += `- Warna: ${item.color}\n`;
      message += `- Bahan: ${item.material}\n`;
      message += `- Jumlah: ${quantity} item\n`;
      message += `- Harga per item: Rp${item.price.toLocaleString("id-ID")}\n`;
      message += `- Subtotal: Rp${itemTotal.toLocaleString("id-ID")}\n\n`;
    });
    message += `Total Keseluruhan: Rp${calculateTotal().toLocaleString(
      "id-ID"
    )}\n`;
    message += `Total Item: ${getTotalItems()} item`;
    return message;
  }

  return (
    <div className="px-6 py-10 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-blue-950">Keranjang Anda</h1>
        <button
          onClick={() => navigate(-1)}
          className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition"
        >
          Kembali Belanja
        </button>
      </div>

      {cart.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-gray-600 mb-4 text-lg">Keranjang masih kosong.</p>
          <button
            onClick={() => navigate("/shop")}
            className="bg-blue-950 text-white px-6 py-3 rounded-md hover:bg-black transition"
          >
            Mulai Belanja
          </button>
        </div>
      ) : (
        <>
          <div className="space-y-6">
            {cart.map((item) => {
              const quantity = item.quantity || 1;
              const itemTotal = item.price * quantity;

              return (
                <div
                  key={item.id}
                  className="flex gap-4 bg-white rounded-xl shadow p-4 relative"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-28 h-28 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h2 className="text-lg font-semibold text-blue-950">
                      {item.name}
                    </h2>
                    <p className="text-sm text-gray-700">
                      Ukuran: <strong>{item.size}</strong> | Warna:{" "}
                      <strong>{item.color}</strong> | Bahan:{" "}
                      <strong>{item.material}</strong>
                    </p>
                    <p className="text-gray-600 text-sm mt-1">
                      Harga per item: Rp{item.price.toLocaleString("id-ID")}
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3 mt-3">
                      <span className="text-sm text-gray-600">Jumlah:</span>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, quantity - 1)}
                          className={`w-8 h-8 rounded-full border flex items-center justify-center text-sm font-bold transition ${
                            quantity > 1
                              ? "border-blue-950 text-blue-950 hover:bg-blue-950 hover:text-white"
                              : "border-gray-300 text-gray-400 cursor-not-allowed"
                          }`}
                          disabled={quantity <= 1}
                        >
                          −
                        </button>

                        <span className="px-3 py-1 border border-blue-950 rounded text-blue-950 font-semibold min-w-[40px] text-center">
                          {quantity}
                        </span>

                        <button
                          onClick={() => updateQuantity(item.id, quantity + 1)}
                          className={`w-8 h-8 rounded-full border flex items-center justify-center text-sm font-bold transition ${
                            quantity < 10
                              ? "border-blue-950 text-blue-950 hover:bg-blue-950 hover:text-white"
                              : "border-gray-300 text-gray-400 cursor-not-allowed"
                          }`}
                          disabled={quantity >= 10}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <p className="text-blue-950 mt-2 font-bold">
                      Subtotal: Rp{itemTotal.toLocaleString("id-ID")}
                    </p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="absolute top-4 right-4 text-red-500 hover:text-red-700 text-xl"
                    title="Hapus dari keranjang"
                  >
                    &times;
                  </button>
                </div>
              );
            })}
          </div>

          <div className="mt-8 bg-gray-50 rounded-xl p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-blue-950">
                Total Pesanan
              </h3>
              <p className="text-xl font-bold text-blue-950">
                Rp{calculateTotal().toLocaleString("id-ID")}
              </p>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Total {getTotalItems()} item dari {cart.length} produk dalam
              keranjang
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-between">
              <button
                onClick={clearCart}
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
              >
                Kosongkan Keranjang
              </button>

              <a
                href={`https://wa.me/6285768111508?text=${encodeURIComponent(
                  generateWhatsAppMessage(cart)
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition text-center"
              >
                Lanjutkan Pesan via WhatsApp
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default CartPage;
