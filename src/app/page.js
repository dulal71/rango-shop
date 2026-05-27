import Banner from "@/components/Banner";
import BrandSlider from "@/components/BrandSlider";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import TopSelling from "@/components/TopSelling";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-white font-sans ">
     <Banner></Banner>
  <Features></Features>
  <TopSelling></TopSelling>
  <Testimonials></Testimonials>
  <BrandSlider></BrandSlider>
    </div>
  );
}
