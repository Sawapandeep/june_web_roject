"use client";
import React from "react";
import ImageCarousel, {
  SlideContent,
} from "@/app/components/ui/myui/image-carousel";

import Image from "next/image";

import pizza from "@/public/images/pizza.jpg";
const slidesData: SlideContent[] = [
  {
    image: "https://unsplash.com/photos/pizza-with-berries-MQUqbmszGGM",
    title: "Adventure Awaits",
    description: "Take the leap and explore uncharted territories.",
    buttonText: "Join Us",
    buttonHref: "/adventure",
  },
  {
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2560&q=80",
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
