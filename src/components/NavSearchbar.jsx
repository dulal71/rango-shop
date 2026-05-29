'use client'

import { useEffect, useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import Banner from "./Banner";
import { allProducts } from "@/services/data";
import Homeproducts from "./Homeproducts";



const NavSearchbar = () => {
const [products, setProducts] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSearch = async () => {
        if (!searchInput.trim()) {
            setProducts([]);
            return;
        }

        setLoading(true);

        try {
            const data = await allProducts(1 , searchInput);
            setProducts(data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };
    console.log(products);
    return (
        <div className="w-full py-1 bg-white">
            <div className="relative w-[400px] md:w-[700px] mx-auto h-10  flex items-center bg-white/80 border border-slate-200 rounded-full shadow-sm focus-within:ring-4 focus-within:ring-blue-600/10 focus-within:border-white transition-all overflow-hidden mb-2">
                   {/* icon */}
                <div className='pl-2 text-slate-400'>
               <HiMagnifyingGlass className='w-5 h-5' />
                   </div>
       
                   <input type="text"
                   value={searchInput}
                   onChange={(e)=>setSearchInput(e.target.value)}
                   placeholder='Search here....'
                   className='flex-1 h-14 px-2 outline-none bg-transparent text-slate-700 placeholder:text-slate-400'
                   />
                   <button
                 onClick={handleSearch}
                  className="h-full px-6 border-none bg-black text-white hover:bg-[#998345] transition-colors"
                   >
        <HiMagnifyingGlass />
                   </button>
               </div>
               <div>
                {
                    products.length > 0?  <Homeproducts products={products}></Homeproducts>: <Banner></Banner>
                }
               </div>
        </div>
    );
};

export default NavSearchbar;