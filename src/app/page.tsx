import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { AboutBanner } from "@/components/home/AboutBanner";
import { ProductShowcase } from "@/components/home/ProductShowcase";
import { WhyChooseSection } from "@/components/home/WhyChooseSection";
import { BenefitsSection } from "@/components/home/BenefitsSection";
import { BestSellersSection } from "@/components/home/BestSellersSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { GallerySection } from "@/components/home/GallerySection";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <AboutBanner />
      <ProductShowcase />
      <WhyChooseSection />
      <BenefitsSection />
      <BestSellersSection />
      <TestimonialsSection />
      <GallerySection />
    </div>
  );
}
