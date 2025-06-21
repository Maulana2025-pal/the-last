import React from "react";
import Navbar from "../Components/Navbar";
import HeroSection from "../Components/Hero-Section";
import { Routes, Route } from "react-router-dom";
import ShopPage from "./ShopPage";
import KontakSection from "../Components/Kontak-Section";
import Pack from "../Components/Pack";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ShopPage />
      <Pack />
    </div>
  );
}
