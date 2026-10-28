"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { BeeFlight } from "./BeeFlight";

export function ProductShowcase() {
  const [activeTab, setActiveTab] = useState<string>("MANUKA");

  const categories = [
    { id: "MANUKA", label: "MANUKA", product: PRODUCTS[0] }, // Sidr / Manuka
    { id: "WILD FLOWER", label: "WILD FLOWER", product: PRODUCTS[1] }, // Wild Forest
    { id: "BLUEBERRY", label: "BLUEBERRY", product: PRODUCTS[2] } // Acacia / Comb
  ];

  const currentTabObj = categories.find((c) => c.id === activeTab) || categories[0];
  const currentProduct = currentTabObj.product;

  const handlePrev = () => {
    const idx = categories.findIndex((c) => c.id === activeTab);
    const newIdx = idx === 0 ? categories.length - 1 : idx - 1;
    setActiveTab(categories[newIdx].id);
  };

  const handleNext = () => {
    const idx = categories.findIndex((c) => c.id === activeTab);
    const newIdx = idx === categories.length - 1 ? 0 : idx + 1;
    setActiveTab(categories[newIdx].id);
  };

  return (
    <section className="relative pt-12 sm:pt-16 pb-16 sm:pb-24 bg-[#FAF7F2] overflow-hidden">
      {/* Background Little Flying Bee on Left */}
      <div className="absolute top-16 left-6 sm:left-14 pointer-events-none z-10">
        <BeeFlight variant="simple" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-xl mx-auto mb-8 sm:mb-10">
          <h2 className="font-serif text-3xl sm:text-4xl font-black text-[#2B1506] tracking-wider uppercase">
            OUR PRODUCT
          </h2>
          <div className="w-10 h-1 bg-[#8D4B0A]/40 rounded-full mx-auto mt-1 mb-3" />

          {/* Cute Baby Bee Icon below heading (Matches Dribbble) */}
          <div className="relative w-8 h-9 mb-4">
            <Image
              src="/assets/mascot_baby_bee.png"
              alt="Baby bee icon"
              fill
              className="object-contain"
            />
          </div>

          {/* Category Filter Pills: MANUKA / WILD FLOWER / BLUEBERRY */}
          <div className="flex items-center justify-center gap-2.5 sm:gap-4">
            {categories.map((cat) => {
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`px-5 sm:px-7 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                    isActive
                      ? "bg-gradient-to-r from-[#EFA526] via-[#EA9A1B] to-[#E38B0F] text-[#2B1506] shadow-sm"
                      : "bg-white text-[#2B1506] border border-[#2B1506]/30 hover:border-[#2B1506]"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Showcase with Left & Right Peeks and Golden Circle Arrows */}
        <div className="relative max-w-5xl mx-auto flex items-center justify-center">
          {/* Left Peeking Faded Jar */}
          <div
            onClick={handlePrev}
            className="hidden lg:block w-36 xl:w-44 h-72 relative opacity-30 hover:opacity-60 transition-opacity cursor-pointer transform -translate-x-4 flex-shrink-0"
          >
            <Image
              src="/assets/product_peek_left_clean.png"
              alt="Previous Honey jar"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Left Round Golden Arrow Button */}
          <button
            onClick={handlePrev}
            className="p-2 sm:p-2.5 rounded-full bg-gradient-to-r from-[#EFA526] to-[#E38B0F] text-[#2B1506] shadow-md hover:scale-110 transition-transform z-30 mx-2 flex-shrink-0"
            aria-label="Previous Honey"
          >
            <ChevronLeft className="w-4 h-4 stroke-[3]" />
          </button>

          {/* Center Showcase: Jar + Dipper on Left, Title + Text + Button on Right */}
          <div className="flex-1 max-w-2xl mx-auto flex flex-col md:flex-row items-center gap-6 sm:gap-10 py-4 px-2">
            {/* Left: Honey Jar with Dipper */}
            <div className="relative w-64 sm:w-72 aspect-square flex items-center justify-center flex-shrink-0">
              <Image
                src="/assets/product_center_jar.png"
                alt={`${currentProduct.name} jar`}
                fill
                className="object-contain drop-shadow-xl"
                priority
              />
            </div>

            {/* Right: Title, Text, Button */}
            <div className="flex-1 text-center md:text-left flex flex-col items-center md:items-start">
              <h3 className="font-serif text-2xl sm:text-3xl font-black text-[#2B1506] uppercase tracking-wide">
                {activeTab === "MANUKA"
                  ? "MANUKA HONEY"
                  : activeTab === "WILD FLOWER"
                  ? "WILD FLOWER HONEY"
                  : "BLUEBERRY HONEY"}
              </h3>

              <p className="text-xs sm:text-sm text-[#381F0E]/80 leading-relaxed font-medium mt-3">
                {currentProduct.description.slice(0, 180)}...
              </p>

              <p className="text-xs sm:text-sm text-[#381F0E]/80 leading-relaxed font-medium mt-2 hidden sm:block">
                Cold-extracted at peak bloom and tested for 100% natural purity with zero artificial heating.
              </p>

              <div className="mt-5">
                <Link
                  href={`/product/${currentProduct.slug}`}
                  className="px-8 py-2.5 rounded-full bg-gradient-to-r from-[#EFA526] via-[#EA9A1B] to-[#E38B0F] hover:from-[#EA9A1B] hover:to-[#D97E06] text-[#2B1506] text-xs sm:text-sm font-bold shadow-sm transition-all hover:scale-105 inline-block"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>

          {/* Right Round Golden Arrow Button */}
          <button
            onClick={handleNext}
            className="p-2 sm:p-2.5 rounded-full bg-gradient-to-r from-[#EFA526] to-[#E38B0F] text-[#2B1506] shadow-md hover:scale-110 transition-transform z-30 mx-2 flex-shrink-0"
            aria-label="Next Honey"
          >
            <ChevronRight className="w-4 h-4 stroke-[3]" />
          </button>

          {/* Right Peeking Faded Jar */}
          <div
            onClick={handleNext}
            className="hidden lg:block w-36 xl:w-44 h-72 relative opacity-30 hover:opacity-60 transition-opacity cursor-pointer transform translate-x-4 flex-shrink-0"
          >
            <Image
              src="/assets/product_peek_right_clean.png"
              alt="Next Honey jar"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
