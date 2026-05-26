'use client'
import Image from 'next/image';
import React from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const BrandSlider = () => {
    const brands = [
  {
    id: 1,
    image: "/brands/bershka.png",
    name: "Bershka",
  },
  {
    id: 2,
    image: "/brands/hm.png",
    name: "H&M",
  },
  {
    id: 3,
    image: "/brands/zara.png",
    name: "Zara",
  },
  {
    id: 4,
    image: "/brands/dkny.png",
    name: "Dkny",
  },
  {
    id: 5,
    image: "/brands/pullbear.png",
    name: "Pull & Bear",
  },
  {
    id: 6,
    image: "/brands/jackjones.png",
    name: "Jackjones",
  },
  {
    id: 7,
    image: "/brands/rayban.png",
    name: "Rayban",
  },
  {
    id: 8,
    image: "/brands/onnly.png",
    name: "Onnly",
  },
];
    return (
        <div className="w-full bg-white py-10">
      <div className="max-w-7xl mx-auto px-4">
        
        <Swiper
          modules={[Autoplay]}
          slidesPerView={2}
          spaceBetween={30}
          loop={true}
          speed={4000}
          autoplay={{
            delay: 0,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
        >
          {brands.map((brand) => (
            <SwiperSlide key={brand.id}>
              <div className="flex items-center justify-center h-20">
                <Image
                  src={brand.image}
                  alt={brand.name}
                  width={140}
                  height={60}
                  className="object-contain grayscale hover:grayscale-0 transition duration-500"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
      </div>
    </div>
    );
};

export default BrandSlider;