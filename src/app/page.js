import Banner from "@/components/Banner";
import BrandSlider from "@/components/BrandSlider";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
     <Banner></Banner>
  <Features></Features>
  <Testimonials></Testimonials>
  <BrandSlider></BrandSlider>
    </div>
  );
}
