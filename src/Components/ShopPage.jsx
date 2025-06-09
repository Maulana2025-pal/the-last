import React, { useState } from "react";

const products = [
  {
    id: 1,
    name: "Adidas Rework",
    price: 299000,
    image: "/AdidasRework.jpg",
    category: "Hoodie",
    sizes: ["L", "XL"],
    colors: ["Black", "White"],
    materials: ["Cotton"],
  },
  {
    id: 2,
    name: "Denim Work Shirt",
    price: 319000,
    image: "/DenimWorkShirt.jpg",
    category: "Hoodie",
    sizes: ["L", "XL"],
    colors: ["Black", "White"],
    materials: ["Cotton"],
  },
  {
    id: 3,
    name: "Puma Hoodie",
    price: 289000,
    image: "/PumaHodie.jpg",
    category: "Hoodie",
    sizes: ["S", "M", "L"],
    colors: ["Gray", "Black"],
    materials: ["Polyester"],
  },
  {
    id: 4,
    name: "Vavi Basic",
    price: 339000,
    image: "/VaviBasic.jpg",
    category: "Hoodie",
    sizes: ["L", "XL"],
    colors: ["Black", "White"],
    materials: ["Cotton"],
  },
];

function ShopPage() {
  const hoodieProducts = products.filter((p) => p.category === "Hoodie");

  const [modalOpen, setModalOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedMaterial, setSelectedMaterial] = useState("");

  function openModal(product) {
    setSelectedProduct(product);
    setSelectedSize("");
    setSelectedColor("");
    setSelectedMaterial("");
    setStep(1);
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
    setSelectedProduct(null);
    setStep(1);
  }

  function nextStep() {
    if (step === 1 && !selectedSize) return alert("Pilih ukuran dulu!");
    if (step === 2 && !selectedColor) return alert("Pilih warna dulu!");
    if (step === 3 && !selectedMaterial) return alert("Pilih bahan dulu!");
    setStep(step + 1);
  }

  function prevStep() {
    if (step > 1) setStep(step - 1);
  }

  function confirmOrder() {
    alert(`Pesanan berhasil!
Produk: ${selectedProduct.name}
Ukuran: ${selectedSize}
Warna: ${selectedColor}
Bahan: ${selectedMaterial}
Harga: Rp${selectedProduct.price.toLocaleString("id-ID")}`);
    closeModal();
  }

  return (
    <div className="px-6 py-10 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-blue-950 mb-6">
        Shop Hoodie Collection
      </h1>
      <p className="text-gray-600 mb-10">
        Temukan hoodie berkualitas tinggi yang stylish dan ramah lingkungan.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {hoodieProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden transition hover:shadow-lg"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-blue-950 mb-2">
                {product.name}
              </h2>
              <p className="text-gray-700 font-medium mb-4">
                Rp{product.price.toLocaleString("id-ID")}
              </p>
              <button
                onClick={() => openModal(product)}
                className="bg-blue-950 text-white px-4 py-2 rounded-md w-full hover:bg-black transition"
              >
                Pesan Sekarang
              </button>
            </div>
          </div>
        ))}
      </div>

      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl relative animate-fadeIn">
            <button
              onClick={closeModal}
              className="absolute top-3 right-4 text-gray-400 hover:text-gray-700 text-2xl"
            >
              &times;
            </button>

            {/* Langkah indikator */}
            <div className="flex justify-center mb-6 gap-2">
              {[1, 2, 3, 4].map((s) => (
                <div
                  key={s}
                  className={`w-3 h-3 rounded-full ${
                    s === step ? "bg-blue-950" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>

            <h2 className="text-xl font-semibold text-center text-blue-950 mb-4">
              {step === 1 && `Pilih Ukuran`}
              {step === 2 && `Pilih Warna`}
              {step === 3 && `Pilih Bahan`}
              {step === 4 && `Konfirmasi Pesanan`}
            </h2>

            <div className="space-y-4">
              {step === 1 &&
                selectedProduct.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-full py-2 border rounded-lg font-medium ${
                      selectedSize === size
                        ? "bg-blue-950 text-white border-blue-950"
                        : "border-gray-300 text-gray-700 hover:border-blue-950"
                    } transition`}
                  >
                    {size}
                  </button>
                ))}

              {step === 2 &&
                selectedProduct.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-full py-2 border rounded-lg font-medium ${
                      selectedColor === color
                        ? "bg-blue-950 text-white border-blue-950"
                        : "border-gray-300 text-gray-700 hover:border-blue-950"
                    } transition`}
                  >
                    {color}
                  </button>
                ))}

              {step === 3 &&
                selectedProduct.materials.map((mat) => (
                  <button
                    key={mat}
                    onClick={() => setSelectedMaterial(mat)}
                    className={`w-full py-2 border rounded-lg font-medium ${
                      selectedMaterial === mat
                        ? "bg-blue-950 text-white border-blue-950"
                        : "border-gray-300 text-gray-700 hover:border-blue-950"
                    } transition`}
                  >
                    {mat}
                  </button>
                ))}

              {step === 4 && (
                <div className="space-y-2 text-sm text-gray-800 bg-gray-50 rounded-lg p-4">
                  <p>
                    <strong>Produk:</strong> {selectedProduct.name}
                  </p>
                  <p>
                    <strong>Ukuran:</strong> {selectedSize}
                  </p>
                  <p>
                    <strong>Warna:</strong> {selectedColor}
                  </p>
                  <p>
                    <strong>Bahan:</strong> {selectedMaterial}
                  </p>
                  <p>
                    <strong>Harga:</strong> Rp
                    {selectedProduct.price.toLocaleString("id-ID")}
                  </p>
                </div>
              )}
            </div>

            <div className="flex justify-between mt-6">
              <button
                onClick={prevStep}
                disabled={step === 1}
                className={`px-4 py-2 rounded-md border ${
                  step === 1
                    ? "border-gray-300 text-gray-400 cursor-not-allowed"
                    : "border-gray-400 hover:bg-gray-100 text-gray-700"
                } transition`}
              >
                Kembali
              </button>

              {step < 4 ? (
                <button
                  onClick={nextStep}
                  className="bg-blue-950 text-white px-4 py-2 rounded-md hover:bg-black transition"
                >
                  Lanjut
                </button>
              ) : (
                <button
                  onClick={confirmOrder}
                  className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
                >
                  Konfirmasi Pesanan
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShopPage;
