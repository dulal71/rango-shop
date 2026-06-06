'use server'
export const allProducts=async( page = 1,search = '', category = '',brand = '',color = '',sort = '')=>{
    console.log(sort);
    const res=await fetch(`${process.env.SERVER_URL}/products?page=${page}&search=${search}&category=${category}&brand=${brand}&color=${color}&sort=${sort}`,{
         cache:'no-store',
    })
    const data = await res.json()
    return data
}

export const topProduct=async()=>{
    const res =await fetch(`${process.env.SERVER_URL}/topProducts`)
    const data = await res.json();
    return data;
}
export const productById=async(id)=>{
    const res =await fetch(`${process.env.SERVER_URL}/products/${id}`)
    const data = await res.json();
    return data;
}
export const relatedProduct=async(id)=>{
    const res =await fetch(`${process.env.SERVER_URL}/related-products/${id}`,{
     cache:'no-store',    
    })
    const data = await res.json();
    return data;
}