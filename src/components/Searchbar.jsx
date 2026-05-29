'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { HiMagnifyingGlass } from 'react-icons/hi2';

const Searchbar = () => {
    const [searchInput,setSearchInput]=useState('')
   const searchParams=useSearchParams()
   const pathname=usePathname()
   const router=useRouter()
    const handleSearch=()=>{
        const params=new URLSearchParams(searchParams)
        if(searchInput){
            params.set('search',searchInput)
        }else{
            params.delete('search')
        }
router.push(`${pathname}?${params.toString()}`)
   }
    return (
        <div className="relative md:w-[500px] h-12  flex items-center bg-white/80 border border-slate-200 rounded-full shadow-sm focus-within:ring-4 focus-within:ring-blue-600/10 focus-within:border-white transition-all overflow-hidden">
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
    );
};

export default Searchbar;