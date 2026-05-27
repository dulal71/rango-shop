'use server'

export const topProduct=async()=>{
    const res =await fetch(`${process.env.SERVER_URL}/topProducts`)
    const data = await res.json();
    return data;
}