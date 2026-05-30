'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const SortBy = () => {
    const router = useRouter()
    const pathname=usePathname()
    const searchParams=useSearchParams()
    const handleSort=(value)=>{
        const params=new URLSearchParams(searchParams)
        if(value){
            params.set('sort',value)
        }else{
            params.delete('sort')
        }
        router.push(`${pathname}?${params.toString()}`)
    }
    return (
       <div className="flex items-center gap-3">
      <label className="font-medium text-gray-700">
        Sort By:
      </label>

      <select
        defaultValue={searchParams.get('sort') || ''}
        onChange={(e) => handleSort(e.target.value)}
        className="px-4 py-2 border rounded-lg bg-white text-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
      >
        <option value="">Default</option>
        <option value="newest">Newest</option>
        <option value="price-low-high">Price: Low to High</option>
        <option value="price-high-low">Price: High to Low</option>
        <option value="name-asc">Name: A-Z</option>
        <option value="name-desc">Name: Z-A</option>
        <option value="rating">Top Rated</option>
      </select>
    </div>
    );
};

export default SortBy;