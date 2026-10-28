import React from "react";
import Image from "next/image";
import { BeeFlight } from "./BeeFlight";

export function BenefitsSection() {
  const cards = [
    {
      icon: "/assets/icon_benefit_nutrients.png",
      title: "CONTAINS A VARIETY OF NUTRIENTS",
      desc: "Rich in active enzymes, amino acids, antioxidants, and essential plant compounds that nourish your daily vitality."
    },
    {
      icon: "/assets/icon_benefit_bloodsugar.png",
      title: "BETTER FOR BLOOD SUGAR LEVELS",
      desc: "Balanced natural glucose-fructose ratio provides steady, sustained energy without the harsh glycemic spikes of white sugar."
    },
    {
      icon: "/assets/icon_benefit_wound.png",
      title: "PROMOTES BURN WOUND HEALING",
      desc: "Natural antibacterial and anti-inflammatory properties soothe persistent coughs, sore throats, and accelerate tissue recovery."
    },
    {
      icon: "/assets/icon_benefit_support.png",
      title: "IMPROVE HEALTH SUPPORT",
      desc: "Flavonoids and polyphenols protect cardiovascular health, enhance digestive gut flora, and strengthen immune resilience."
    }
  ];

  return (
    <section id="benefits" className="relative pt-14 sm:pt-20 pb-4 bg-[#FAF7F2] overflow-hidden">
      {/* Flying Little Bee on Top Left with dotted trail */}
      <div className="absolute top-10 left-6 sm:left-16 pointer-events-none z-20">
        <BeeFlight variant="loop" flip />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-12">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-black text-[#2B1506] tracking-wider uppercase">
            THE BENEFITS OF NATURAL HONEY
          </h2>
          <div className="w-10 h-1 bg-[#8D4B0A]/40 rounded-full mx-auto mt-1" />
        </div>

        {/* 4 Vertical White Cards with Golden Border (Exact Dribbble Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative z-20">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-amber-300 shadow-sm flex flex-col items-center text-center hover:border-amber-400 transition-all duration-300"
            >
              {/* Golden Icon */}
              <div className="relative w-12 h-12 mb-4 flex items-center justify-center">
                <Image
                  src={card.icon}
                  alt={card.title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="font-serif text-xs sm:text-sm font-black text-[#2B1506] uppercase tracking-wider leading-snug">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-[11px] sm:text-xs text-[#381F0E]/75 leading-relaxed font-medium mt-3">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Watercolor Meadow Landscape Panorama with 3D Bee Mascot (Exact Dribbble Scene) */}
        <div className="relative mt-10 sm:mt-12 w-full h-44 sm:h-64 lg:h-80 rounded-3xl overflow-hidden shadow-sm">
          <Image
            src="/assets/benefits_watercolor_meadow.png"
            alt="Watercolor countryside apiary landscape with honey bee mascot"
            fill
            className="object-cover object-bottom"
          />
        </div>
      </div>
    </section>
  );
}
