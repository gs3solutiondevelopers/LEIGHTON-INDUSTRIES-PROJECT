import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import slide1 from "../../assets/slide1.png";
import slide2 from "../../assets/slide2.png";
import slide3 from "../../assets/slide3.png";
import slide4 from "../../assets/slide4.png";

const sliderData = [
  {
    image: slide1,
    headline: "Dumdaar Battery",
    description: "Shaandaar Performance for your E-Rickshaw.",
    buttonText: "Explore E-Rickshaw Batteries",
  },
  {
    image: slide2,
    headline: "Engineered for India's Roads",
    description: "Built tough for every journey, every time.",
    buttonText: "Find Your Battery",
  },
  {
    image: slide3,
    headline: "Maximum Power",
    description: "Unleash the full potential of your vehicle.",
    buttonText: "View Our Range",
  },
  {
    image: slide4,
    headline: "Eco-Friendly Technology",
    description: "Powering a greener tomorrow.",
    buttonText: "Learn More",
  },
];

const HeroSlider = () => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
       
        pagination={{ clickable: true ,type:"custom"}}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="h-[80vh] min-h-[400px] "
      >
        {sliderData.map((slide, index) => (
          <SwiperSlide key={index} className="group">
            <div
              className="w-full h-full bg-cover bg-no-repeat bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="w-full h-full flex items-center justify-center bg-black/10 bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 hover:bg-black/50 ">
                <div className="text-center text-white bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-xl shadow-lg max-w-2xl mx-4 opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all duration-300">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    {slide.headline}
                  </h1>
                  <p className="text-lg md:text-xl mb-6">{slide.description}</p>
                  <button className="bg-brand-green text-white font-bold py-3 px-8 rounded-md bg-lime-500 hover:bg-lime-600 transition-all duration-300 transform hover:scale-105">
                    {slide.buttonText}
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
