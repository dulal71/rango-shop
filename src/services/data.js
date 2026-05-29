'use server'
export const allProducts=async( page = 1,search = '', category = '',brand = '',color = '')=>{
    console.log(brand);
    const res=await fetch(`${process.env.SERVER_URL}/products?page=${page}&search=${search}&category=${category}&brand=${brand}&color=${color}`,{
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