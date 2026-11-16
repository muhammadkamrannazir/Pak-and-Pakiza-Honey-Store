import React from "react";
import Image from "next/image";
import { BeeFlight } from "./BeeFlight";

export function WhyChooseSection() {
  return (
    <section className="relative py-14 sm:py-20 bg-[#341606] text-[#FAF7F2] overflow-hidden">
      {/* Subtle Honeycomb Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 bg-honeycomb pointer-events-none" />

      {/* Little Bee & Flight Trail on Top Right */}
      <div className="absolute top-4 right-6 sm:right-16 pointer-events-none opacity-80 z-20">
        <BeeFlight variant="simple" flip />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-black text-[#FEF3C7] tracking-wider uppercase">
              WHY CHOOSE NATURAL HONEY
            </h2>
            <div className="w-10 h-1 bg-[#EFA526] rounded-full mt-1.5 mb-5" />

            <p className="text-xs sm:text-sm text-[#FDE8C7]/85 leading-relaxed font-normal max-w-xl">
              Pak and Pakiza Honey is carefully packed in Burewala and delivered to families across Pakistan. Choose from three convenient sizes for your home.
            </p>

            <p className="text-xs sm:text-sm text-[#FDE8C7]/85 leading-relaxed font-normal max-w-xl mt-3 hidden sm:block">
              Each jar is sealed for safe delivery and ready to enjoy with your favorite meals and drinks.
            </p>
          </div>

          {/* Right Column: Two Overlapping Circular Cutouts (Exact Dribbble Match) */}
          <div className="lg:col-span-5 flex items-center justify-center relative pt-4 lg:pt-0">
            <div className="relative w-72 sm:w-88 h-64 sm:h-76">
              {/* Circle 1: Bee on flower / comb (top left) */}
              <div className="absolute top-0 left-0 w-44 sm:w-56 h-44 sm:h-56 rounded-full overflow-hidden border-2 border-amber-300/40 shadow-2xl z-10">
                <Image
                  src="/assets/circle_honeycomb_bees.png"
                  alt="Bee collecting nectar"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Circle 2: Golden honey jar with dipper (bottom right overlapping) */}
              <div className="absolute bottom-0 right-0 w-40 sm:w-52 h-40 sm:h-52 rounded-full overflow-hidden border-2 border-amber-400 shadow-2xl z-20">
                <Image
                  src="/assets/circle_dripping_spoon.png"
                  alt="Dripping golden honey jar"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
