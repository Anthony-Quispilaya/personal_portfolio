"use client";

import React, { useState } from "react";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface CarouselProps {
  images: string[];
}

const Carousel = ({ images }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-full group">
      {/* Main Image */}
      <div className="w-full h-full overflow-hidden rounded-lg flex items-start justify-center bg-[#f5f5f7] border border-black/10">
        <Image
          src={images[currentIndex]}
          alt={`Screenshot ${currentIndex + 1}`}
          width={800}
          height={450}
          className="w-auto h-auto max-w-full max-h-full"
        />
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 text-black p-2 rounded-full border border-black/10 shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black hover:text-white"
      >
        <IoIosArrowBack className="w-6 h-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 text-black p-2 rounded-full border border-black/10 shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black hover:text-white"
      >
        <IoIosArrowForward className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-black scale-125" : "bg-black/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel; 