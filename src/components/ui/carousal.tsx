// carousal.tsx
"use client";
import React, { useState } from "react";

export type SlideData = {
  title?: string;
  button?: string;
  src: string;
};

export interface CarouselProps {
  slides: SlideData[];
}

export const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-lg shadow-lg">
      <div className="relative h-[400px]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.src}
              alt={slide.title || `Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {(slide.title || slide.button) && (
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-black bg-opacity-50 text-white text-center">
                {slide.title && <h2 className="text-xl font-bold">{slide.title}</h2>}
                {slide.button && (
                  <button className="mt-2 px-4 py-2 bg-white text-black rounded">
                    {slide.button}
                  </button>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
      >
        ◀
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
      >
        ▶
      </button>
    </div>
  );
};
