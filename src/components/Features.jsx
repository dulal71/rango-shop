"use client";

import React from 'react';
import { 
  FaTruckFast, 
  FaRotateLeft, 
  FaGift, 
  FaHeadphonesSimple 
} from 'react-icons/fa6';

const featuresData = [
  {
    id: 1,
    icon: FaTruckFast,
    title: "FREE SHIPPING",
    description: "For All Orders Over $220",
  },
  {
    id: 2,
    icon: FaRotateLeft,
    title: "30 DAYS RETURNS",
    description: "Money Back Guarantee",
  },
  {
    id: 3,
    icon: FaGift,
    title: "PROMOTIONS",
    description: "10% Member Discount",
  },
  {
    id: 4,
    icon: FaHeadphonesSimple,
    title: "ONLINE SUPPORT",
    description: "Free Support 24/7 Per Week",
  },
];

export default function Features() {
  return (
    <div className="w-full bg-white border-b border-gray-100 py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center md:justify-items-start">
        
        {featuresData.map((feature) => {
          const IconComponent = feature.icon;
          return (
            <div 
              key={feature.id} 
              className="flex items-center space-x-4 w-full max-w-[280px]"
            >
              {/* Icon Container with Dual-tone Blue Circles */}
             <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#D1DFEE] flex-shrink-0 ">
  <div className="flex items-center justify-center w-11 h-11 rounded-full bg-[#7FA3CB] text-white transition-transform duration-700 ease-in-out hover:rotate-360 hover:bg-zinc-500">
    <IconComponent className="w-5 h-5" />
  </div>
</div>

              {/* Text Layout */}
              <div className="flex flex-col">
                <h3 className="text-sm font-black tracking-wider text-[#4a4a4a] uppercase leading-tight">
                  {feature.title}
                </h3>
                <p className="text-xs text-gray-500 mt-1 font-medium whitespace-nowrap">
                  {feature.description}
                </p>
              </div>
            </div>
          );
        })}

      </div>
    </div>
  );
}