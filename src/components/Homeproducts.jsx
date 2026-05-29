
import ProductCard from './ProductCard';

const Homeproducts = ({products}) => {
    return (
       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 my-8">
             {
                products?.map(item=> <ProductCard key={item._id} item={item}></ProductCard>)
             }   
            </div> 
    );
};

export default Homeproducts;