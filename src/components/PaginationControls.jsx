"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";


const PaginationControls = () => {
   
    const searchParams= useSearchParams()

    const pathname=usePathname()
    const router= useRouter()
     const currentPage=Number(searchParams.get("page")) || 1

           
    const nextPage=()=>{
         const params=new URLSearchParams(searchParams)
params.set('page',currentPage+1)
router.push(`${pathname}?${params.toString()}`)
    }
    const prePage=()=>{
        if(currentPage <=1) return
         const params=new URLSearchParams(searchParams)
params.set('page',currentPage-1)
router.push(`${pathname}?${params.toString()}`)
    }
    return (
        <div className="flex justify-center items-center gap-3 my-12">
      
      {/* prev button */}
      <button onClick={prePage} className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-black hover:text-white transition-all duration-300">
        <MdKeyboardArrowLeft size={22} />
      </button>

      {/* page numbers */}
      <button className={`w-10 h-10 rounded-full  font-semibold shadow-md ${currentPage===1? 'bg-black text-white': 'bg-white text-black'}`}>
        1
      </button>

      <button className={`w-10 h-10 rounded-full  font-semibold shadow-md ${currentPage===2? 'bg-black text-white': 'bg-white text-black'}`}>
        2
      </button>

      <button className={`w-10 h-10 rounded-full  font-semibold shadow-md ${currentPage === 3? 'bg-black text-white': 'bg-white text-black'}`}>
        3
      </button>

     

      {/* next button */}
      <button onClick={nextPage} className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-black hover:text-white transition-all duration-300">
        <MdKeyboardArrowRight size={22} />
      </button>
    </div>
    );
};

export default PaginationControls;