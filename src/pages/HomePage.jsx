import React from "react";
import Navbar from "../Components/Navbar";
import HeroSection from "../Components/Hero-Section";
import {Routes, Route} from 'react-router';
import ShopPage from "../Components/ShopPage";

export default function HomePage() {
  return (
    <div>
      <Navbar/>
      <HeroSection />
      <ShopPage />
      
    </div>
  );
}
