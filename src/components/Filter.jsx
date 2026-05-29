'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Filter = () => {
  const [open,setOpen]=useState(false)
  
   const searchParams=useSearchParams()
    const pathname=usePathname()
    const router=useRouter()
    // filter category
    const handleFilter=(key,value)=>{
      console.log(key,value);
      const params=new URLSearchParams(searchParams)
      if(value){
        params.set(key,value)
      }else{
        params.delete(key)
      }
      router.push(`${pathname}?${params.toString()}`)
    }
 
    return (
        <div className=" p-1 flex flex-col items-center justify-center w-full">
  {/* Button Wrapper */}
  <div className="relative flex justify-center w-full">
    <button 
      onClick={() => setOpen(!open)} 
      className="flex gap-2 items-center cursor-pointer font-medium  px-4 py-2 rounded-lg  hover:bg-gray-100 transition-colors"
    >
      Filter {open ? <IoIosArrowUp /> : <IoIosArrowDown />}
    </button>
  </div>

  {/* Filters Dropdown */}
  <div 
    className={`flex flex-col md:flex-row items-center justify-center transition-all duration-500 ease-in-out overflow-hidden gap-4  ${
      open ? "max-h-60 opacity-100 my-6" : "max-h-0 opacity-0 mt-0 pointer-events-none"
    }`}
  >
    {/* category */}
    <div>
      <select
      onChange={(e) =>handleFilter('category',e.target.value)}
        className="border border-zinc-600 px-4 py-2 rounded-lg bg-white cursor-pointer"
      >
        <option value="">Category</option>
        <option value="Men Drop Shoulder T-Shirt">Men Drop Shoulder T-Shirt</option>
        <option value="Men Denim">Men Denim</option>
        <option value="Women Dress">Women Dress</option>
        <option value="Activewear">Activewear</option>
      </select>
    </div>

    {/* brand */}
    <div>
      <select
onChange={(e) =>handleFilter('brand',e.target.value)}
               className="border border-zinc-600 px-4 py-2 rounded-lg bg-white cursor-pointer"
      >
        <option value="">Brand</option>
        <option value="ModeWear">ModeWear</option>
        <option value="UrbanFit">UrbanFit</option>
        <option value="DenimCo">DenimCo</option>
        <option value="SportPulse">SportPulse</option>
      </select>
    </div>

    {/* color */}
    <div>
      <select
      onChange={(e) => handleFilter('color',e.target.value)}
        className="border border-zinc-600 px-4 py-2 rounded-lg bg-white cursor-pointer"
      >
        <option value="">Color</option>
        <option value="Black">Black</option>
        <option value="White">White</option>
        <option value="Beige">Beige</option>
        <option value="Pink">Pink</option>
      </select>
    </div>
    <button
  onClick={() => router.push(pathname)}
  className="px-4 py-2 rounded-xl border border-red-200 text-red-500 hover:bg-red-50 transition"
>
  Clear Filter
</button>
  </div>
</div>
   
  )
   
};

export default Filter;