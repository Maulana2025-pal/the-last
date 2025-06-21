import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Adidas Rework",
    price: 299000,
    image: "/9.png",
    category: "Hoodie",
    sizes: ["L", "XL"],
    colors: ["Black", "White"],
    materials: ["Cotton"],
  },
  {
    id: 2,
    name: "Denim Work Shirt",
    price: 319000,
    image: "/11.png",
    category: "Hoodie",
    sizes: ["L", "XL"],
    colors: ["Black", "White"],
    materials: ["Cotton"],
  },
  {
    id: 3,
    name: "Puma Hoodie",
    price: 289000,
    image: "/5.png",
    category: "Hoodie",
    sizes: ["S", "M", "L"],
    colors: ["Gray", "Black"],
    materials: ["Polyester"],
  },
  {
    id: 4,
    name: "Uniqlo Hodie Basic Navy",
    price: 339000,
    image: "/7.png",
    category: "Hoodie",
    sizes: ["L", "XL"],
    colors: ["Black", "White"],
    materials: ["Cotton"],
  },
  {
    id: 5,
    name: "Nike Hodie Black",
    price: 339000,
    image: "/13.png",
    category: "Hoodie",
    sizes: ["M", "L", "XL"],
    colors: ["Black", "White"],
    materials: ["Cotton"],
  },
  {
    id: 6,
    name: "Rework Painting",
    price: 300000,
    image: "/2(1).png",
    category: "Jacket",
    sizes: ["M", "L", "XL"],
    colors: ["Black", "White", "Blue"],
    materials: ["Cotton"],
  },
  {
    id: 7,
    name: "Croptop Spider Painting",
    price: 350000,
    image: "./crop.png",
    category: "Croptop",
    sizes: ["M", "L", "XL"],
    colors: ["Black", "White"],
    materials: ["Cotton"],
  },
];

function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const [cart, setCart] = useState([]);
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedMaterial, setSelectedMaterial] = useState("");

  function addToCart() {
    const newItem = {
      id: selectedProduct.id,
      name: selectedProduct.name,
      image: selectedProduct.image,
      price: selectedProduct.price,
      size: selectedSize,
      color: selectedColor,
      material: selectedMaterial,
    };
    setCart([...cart, newItem]);
    closeModal();
  }

  function goToCart() {
    navigate("/cart", { state: { cart } });
  }

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
    const message =
      `Halo! Saya ingin memesan:\n\n` +
      `Produk: ${selectedProduct.name}\n` +
      `Ukuran: ${selectedSize}\n` +
      `Warna: ${selectedColor}\n` +
      `Bahan: ${selectedMaterial}\n` +
      `Harga: Rp${selectedProduct.price.toLocaleString("id-ID")}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/6285768111508?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
    closeModal();
  }

  return (
    <div className="px-6 py-10 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-blue-950 mb-4">
        Koleksi Alvi Thrift Shop
      </h1>
      <p className="text-gray-600 mb-6">
        Pilih produk rework handmade yang unik dan mendukung gaya hidup ramah
        lingkungan 🌱
      </p>

      {/* Kategori Filter */}
      <div className="flex gap-4 mb-10">
        {["All", "Hoodie", "Jacket", "Croptop"].map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full border transition ${
              selectedCategory === cat
                ? "bg-blue-950 text-white border-blue-950"
                : "text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid Produk */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts.map((product) => (
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

      {/* Modal Pilihan */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl relative animate-fadeIn">
            <button
              onClick={closeModal}
              className="absolute top-3 right-4 text-gray-400 hover:text-gray-700 text-2xl"
            >
              &times;
            </button>

            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-64 object-cover rounded-xl mb-4"
            />

            <div className="flex justify-between items-center mb-4">
              <div className="flex gap-2">
                {[1, 2, 3, 4].map((s) => (
                  <div
                    key={s}
                    className={`w-3 h-3 rounded-full ${
                      s === step ? "bg-blue-950" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={goToCart}
                className="bg-blue-950 text-white px-3 py-1 text-sm rounded-md hover:bg-black transition"
              >
                Keranjang ({cart.length})
              </button>
            </div>

            <h2 className="text-xl font-semibold text-center text-blue-950 mb-4">
              {step === 1 && `Pilih Ukuran`}
              {step === 2 && `Pilih Warna`}
              {step === 3 && `Pilih Bahan`}
              {step === 4 && `Konfirmasi Pesanan`}
            </h2>

            <div className="space-y-4 mb-6">
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
                <div className="text-sm text-gray-700 space-y-2">
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

                  <div className="flex flex-col gap-3 mt-4 sm:flex-row sm:justify-between">
                    <button
                      onClick={addToCart}
                      className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition w-full sm:w-auto"
                    >
                      Masukkan ke Keranjang
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="flex justify-between">
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
