import React from 'react'
import HeroSection from '../Components/Hero-Section';
import {Routes,Route} from 'react-router-dom' ;
import KontakSection from '../Components/Kontak-Section';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

function Kontak() {
  return (
    <div>
      <Navbar/>
      <KontakSection />
      <Footer/>
    </div>
  );
}

export default Kontak
