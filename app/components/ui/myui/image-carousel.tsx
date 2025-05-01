import React, { useEffect, useState } from "react";

export interface SlideContent {
  image: string;
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
}

interface CarouselProps {
  slides: SlideContent[];
}

const ImageCarousel: React.FC<CarouselProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-center px-4">
            <h2 className="text-white text-3xl md:text-5xl font-bold mb-4">
              {slide.title}
            </h2>
            <p className="text-white text-lg md:text-xl mb-6">
              {slide.description}
            </p>
            <a
              href={slide.buttonHref}
              className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition"
            >
              {slide.buttonText}
            </a>
          </div>
        </div>
      ))}

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-3 w-3 rounded-full transition-all ${
              idx === currentIndex ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
