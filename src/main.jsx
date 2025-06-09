import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import KontakSection from "./Components/Kontak-Section";
import AboutPages from "./pages/AboutPages";
import Shop from "./pages/Shop";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/kontak" element={<KontakSection />} />
        <Route path="/about" element={<AboutPages />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
