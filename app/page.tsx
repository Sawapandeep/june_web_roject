"use client";
import { MenuSection } from "./components/ui/acernity/feature-section";
import CarouselContainer from "./containers/CarouselContainer";
import CTA from "./containers/cta";
import FoodGallery from "./containers/FoodGallery";
import Footer from "./containers/Footer";
import Navbar from "./containers/Navbar";
import { Testimonials } from "./containers/Testimonials";

export default function Home() {
  return (
    <div>
      <Navbar />
      <CarouselContainer />
      {/* <FoodGallery /> */}
      <MenuSection />
      <CTA />
      <Testimonials />
      <Footer />
    </div>
  );
}

