"use client";
import { Drinks } from "./components/ui/acernity/drinks";
import { Munchies } from "./components/ui/acernity/munchies";
import CarouselContainer from "./containers/CarouselContainer";
import CTA from "./containers/cta";
import Footer from "./containers/Footer";
import Navbar from "./containers/Navbar";
import { Testimonials } from "./containers/Testimonials";

export default function Home() {
  return (
    <div>
      <Navbar />
      <CarouselContainer />
      {/* <FoodGallery /> */}
      <Munchies />
      <Drinks />
      <CTA />
      <Testimonials />
      <Footer />
    </div>
  );
}

