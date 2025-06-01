"use client";
import ImageCarousel, {
  SlideContent,
} from "@/app/components/ui/myui/image-carousel";
import React from "react";


const slidesData: SlideContent[] = [
  {
    image: "/images/pizza.png",
    title: "Adventure Awaits",
    description: "Take the leap and explore uncharted territories.",
    buttonText: "Join Us",
    buttonHref: "/adventure",
  },
  {
    image: "/images/pizza.png",
    title: "Seaside Relaxation",
    description: "Feel the breeze and relax by the ocean.",
    buttonText: "Discover More",
    buttonHref: "/seaside",
  },
];

const CarouselContainer: React.FC = () => {
  return (
    <div className="carousel w-full h-screen">
      <ImageCarousel slides={slidesData} />
    </div>
  );
};

export default CarouselContainer;
