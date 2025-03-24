import React from "react";
import Products from "./Products.js";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeaturedProducts from "../components/FeaturedProducts";
import Footer from "../components/Footer";
 // Import the Products component

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <HeroSection/>
      <Products /> 
      <FeaturedProducts/>
      <Footer/>
    </div>
  );
};

export default App;
