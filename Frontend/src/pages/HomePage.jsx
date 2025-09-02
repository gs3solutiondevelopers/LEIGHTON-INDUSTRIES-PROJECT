import React from "react";

import ProductCategories from "../components/home/ProductCategories";
import WhyChooseUs from "../components/home/WhyCooseUs";
import HeroSection from "../components/home/HeroSection";
import Testimonials from "../components/home/Testimonials";
const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <ProductCategories />
      <Testimonials/>
      <WhyChooseUs />
    </div>
  );
};

export default HomePage;
