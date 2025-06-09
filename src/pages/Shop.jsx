import React from 'react'
import ShopPage from '../Components/ShopPage'
import {Routes, Route} from 'react-router-dom';
import Navbar from '../Components/Navbar';


function Shop() {
  return (
    <div>
        <Navbar/>
       <ShopPage/> 
    </div>
  );
}

export default Shop