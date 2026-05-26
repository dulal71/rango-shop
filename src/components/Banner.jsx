"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { motion } from "framer-motion";
const bannerData = [
  {
    id: 1,
    title: "NEW COLLECTION",
    subtitle: "SALE UP TO 50% OFF",
    description: "Discover premium fashion collection now.",
    buttonText: "Shop Now",
    image: "/images/banner-image.avif",
  },
  {
    id: 2,
    title: "WINTER VIBES",
    subtitle: "LIMITED EDITION",
    description: "Stay warm with modern winter style.",
    buttonText: "Explore",
    image: "/images/banner-image-4.avif",
  },
  {
    id: 3,
    title: "SUMMER SPECIAL",
    subtitle: "HOT DEALS",
    description: "Fresh summer collection available now.",
    buttonText: "View More",
    image: "/images/banner-image-3.avif",
  },
];

export default function Banner() {
  return (
    <div className="w-full h-[80vh]">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        className="h-full"
      >
        {bannerData.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              className="relative w-full h-[80vh] bg-cover bg-center flex items-center"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40"></div>

              {/* Content */}
            <div className="relative z-10 w-full flex justify-center px-6 md:px-16">
  
  <div className="max-w-xl text-center text-white space-y-4">

    {/* TITLE */}
    <motion.h2
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-3xl md:text-5xl font-bold leading-tight"
    >
      {item.title}
    </motion.h2>

    {/* SUBTITLE */}
    <motion.p
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2, duration: 0.8 }}
      className="uppercase tracking-[4px] text-sm text-gray-200"
    >
      {item.subtitle}
    </motion.p>

    {/* DESCRIPTION */}
    <motion.p
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3, duration: 0.8 }}
      className="text-gray-300 text-sm md:text-base leading-relaxed"
    >
      {item.description}
    </motion.p>

    {/* BUTTON */}
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.6 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="mt-4 px-6 py-3 bg-white text-black rounded-md font-medium hover:bg-gray-200 transition"
    >
      {item.buttonText}
    </motion.button>

  </div>
</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}