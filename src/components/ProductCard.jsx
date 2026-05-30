'use client'
import Image from "next/image";
import { useRef, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import{easeInOut, motion} from "framer-motion"
import { useRouter } from "next/navigation";

const ProductCard = ({item}) => {

  const router = useRouter()
  const [imgIndex,setImgIndex]=useState(0)
   const  intervalRaf= useRef(null)
   const handleMouseEnter=()=>{
    intervalRaf.current=setInterval(()=>{
      setImgIndex((prev)=>(prev + 1) % item.images.length)
    },2000)
   }
   const handleMouseLeave=()=>{
    clearInterval(intervalRaf.current)
    setImgIndex(0)
   }
  return (
      <motion.div
      onClick={()=>router.push(`/shop/${item._id}`)}
      whileHover={{y:-6}}
      transition={{duration:0.3}}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-[400px] flex flex-col items-center justify-center group">
               <div className="w-[300px] h-[300px] relative">
  <motion.div
  key={imgIndex}
  initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0.5 }}
        
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="absolute inset-0"
  >
    <Image
    src={item.images[imgIndex]}
    alt={item.description}
    fill
    className="object-contain cursor-pointer"
  />
  </motion.div>
</div>

                {/* Hover Icons */}
                <div className="absolute right-6 top-1/3 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition flex flex-col gap-2">
                  <button className="bg-white p-2 shadow"><CiHeart /></button>
                  <button className="bg-white p-2 shadow"><FaArrowRightArrowLeft /></button>
                  <button className="bg-white p-2 shadow"><HiMiniMagnifyingGlass /></button>
                </div>
                 <div className="p-4 text-center">
                <h3 className="text-[18px] font-semibold">{item.name}</h3>

                <div className="mt-2">
                  <span className="text-black font-bold">${item.price}</span>
 </div>

                <button className="mt-3  bg-black text-white py-2 px-4 text-sm hover:bg-[#998345]">
                  ADD TO CART
                </button>
              </div>

              {/* Content */}
             
              </motion.div>
    );
};

export default ProductCard;