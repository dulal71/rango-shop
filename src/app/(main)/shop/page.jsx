
import Filter from "@/components/Filter";
import PaginationControls from "@/components/PaginationControls";
import ProductCard from "@/components/ProductCard";
import Searchbar from "@/components/Searchbar";
import SortBy from "@/components/SortBy";
import { allProducts } from "@/services/data";
import { IoIosArrowDown } from "react-icons/io";




const Shop =async ({searchParams}) => {
    const params=await searchParams
    console.log(params);
    const page = Number(params.page) || 1
const products = await allProducts(page,params.search,params.category,params.brand,params.color,params.sort) 

    return (
        <div className="max-w-7xl mx-auto my-3">
            {/* header */}
            <div></div>
            {/* search and filter */}
           <div className="flex flex-col items-center justify-center">
            <div className="flex items-center gap-10">
     <Searchbar></Searchbar>  
     <SortBy></SortBy> 
        </div>  
     <div>
    <Filter></Filter>
    </div> 
           </div> 
        

 
 
            {/* products */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 my-8">
             {
                products?.map(item=> <ProductCard key={item._id} item={item}></ProductCard>)
             }   
            </div>
           <div>
            <PaginationControls></PaginationControls>
           </div>
        </div>
    );
};

export default Shop;