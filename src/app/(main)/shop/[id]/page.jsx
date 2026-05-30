import Details from '@/components/Details';
import ProductCard from '@/components/ProductCard';
import { productById, relatedProduct } from '@/services/data';
import React from 'react';

const ProductDetails =async ({params}) => {
    const {id}=await params
    const product= await  productById(id)
   
    const relatedProducts=await relatedProduct(id)

    return (
        <div className='max-w-7xl mx-auto flex flex-col gap-3'>
            <div>
 <Details product={product}></Details>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-6">
    Related Products
  </h2>   
            </div>
         <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 my-8">
             {
                relatedProducts?.map(item=> <ProductCard key={item._id} item={item}></ProductCard>)
             }   
            </div>
        </div>
    );
};

export default ProductDetails;