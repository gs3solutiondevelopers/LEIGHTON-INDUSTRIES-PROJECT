import React from "react";

import ProductCategories from "../components/home/ProductCategories";
import WhyChooseUs from "../components/home/WhyCooseUs";
import HeroSection from "../components/home/HeroSection";
const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <ProductCategories />
      <WhyChooseUs />
    </div>
  );
};

export default HomePage;
