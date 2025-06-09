import React from "react";
import Navbar from "../Components/Navbar";
import HeroSection from "../Components/Hero-Section";
import {Routes, Route} from 'react-router-dom';
import ShopPage from "../Components/ShopPage";
import KontakSection from "../Components/Kontak-Section";

export default function HomePage() {
  return (
    <div>
      <Navbar/>
      <HeroSection />
      <ShopPage/>
      
      
    </div>
  );
}
