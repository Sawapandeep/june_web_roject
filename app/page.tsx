"use client";
import Navbar from "./containers/Navbar";
import CarouselContainer from "./containers/CarouselContainer";
import FoodGallery from "./containers/FoodGallery";
import { Testimonials } from "./containers/Testimonials";

export default function Home() {
  return (
    <div>
      <Navbar />
      <CarouselContainer />
      <FoodGallery />
      <Testimonials />
    </div>
  );
}

