import React from "react";
import Navbar from "../Components/Navbar";
import HeroSection from "../Components/Hero-Section";
import { Routes, Route } from "react-router-dom";
import KontakSection from "../Components/Kontak-Section";
import Pack from "../Components/Pack";
import Footer from "../Components/Footer";
import AllShop from "./AllShop";
import ShopPage from "./ShopPage";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ShopPage />
      <Pack />
      <Footer/>
    </div>
  );
}
