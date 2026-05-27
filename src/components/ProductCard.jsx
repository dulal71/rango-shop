import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";


const ProductCard = ({item}) => {
    return (
      <div className="relative w-full h-[400px] flex flex-col items-center justify-center group">
               <div className="w-[300px] h-[300px] relative">
  <Image
    src={item.images[0]}
    alt={item.description}
    fill
    className="object-contain"
  />
</div>

                {/* Hover Icons */}
                <div className="absolute right-5 top-1/3 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition flex flex-col gap-2">
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
             
              </div>
    );
};

export default ProductCard;