// CarouselDemo.tsx or wherever you use it
"use client";

import { Carousel } from "./ui/carousal";

export function CarouselDemo() {
  const slideData = [
    {
      src: "https://c8.alamy.com/comp/FXX10B/a-large-numbers-of-vehicles-stuck-in-traffic-jam-at-national-highway-FXX10B.jpg"
    },
    {
      src: "https://www.hindustantimes.com/ht-img/img/2025/01/01/1600x900/Traffic-congestion-at-Lucknow-s-Lohia-Path--Mustaq_1735754771834.jpg"
    },
    {
      src: "https://www.hindustantimes.com/ht-img/img/2024/01/01/1600x900/Traffic-jam-on-a-busy-road-in-Lucknow-on-Monday--D_1704136103345.jpg"
    },
    {
      src: "https://img.inextlive.com/inext/2732023/trafficce.jpg"
    },
  ];

  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  );
}
