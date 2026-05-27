'use client'

import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

import "swiper/css";


import { Swiper, SwiperSlide } from "swiper/react";


const TopSelling = () => {
  const [products,setProducts]=useState([])
  useEffect(()=>{
    const fetchData = async()=>{
const res=await fetch('http://localhost:5000/topProducts')
const data = await res.json()
console.log(data);
setProducts(data)
    }
    fetchData()
  },[])
  console.log(products);
  return (
    <div className="max-w-7xl mx-auto bg-white my-14 overflow-hidden group">
      <div className="text-center mb-12">
        <span className="text-md italic text-gray-500 block mb-1">
          All the best items for you!
        </span>
        <h2 className="text-2xl md:text-3xl font-black uppercase tracking-widest">
         TOP SELLING PRODUCTS
        </h2>
        <div className="w-12 border-t border-dotted border-gray-400 mx-auto mt-3"></div>
      </div>
       <div>
        <Swiper className="mySwiper"
          spaceBetween={10}
  slidesPerView={1}
  grabCursor={true}
  breakpoints={{
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  }}
        >
        {products.map((item) => (
          <SwiperSlide key={item._id}>
            <ProductCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
       </div>
      
    </div>
  );
};

export default TopSelling;