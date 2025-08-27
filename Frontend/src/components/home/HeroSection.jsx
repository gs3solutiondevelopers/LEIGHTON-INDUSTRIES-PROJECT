import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import slider1 from "../../assets/slider1.jpg";
import slider2 from "../../assets/slider2.png";
import slide3 from "../../assets/slide3.png";
import slide4 from "../../assets/slide4.png";

const sliderData = [
  { image: slider1 },
  { image: slider2 },
  { image: slide3 },
  { image: slide4 },
];

const HeroSlider = () => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        pagination={{ clickable: true, type: "bullets" }}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="h-[80vh] min-h-[400px]"
      >
        {sliderData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-cover bg-no-repeat bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* The text pop-up and overlay have been removed from here */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
