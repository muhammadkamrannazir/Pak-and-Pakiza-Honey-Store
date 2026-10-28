import React from "react";
import Image from "next/image";
import Link from "next/link";

export function AboutBanner() {
  return (
    <section className="relative pt-6 pb-12 sm:pb-16 bg-[#FAF7F2] overflow-visible">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Golden Yellow About Us Card */}
        <div className="relative rounded-[32px] bg-gradient-to-b from-[#FCD34D] via-[#FBBF24] to-[#F59E0B] px-6 sm:px-12 pt-8 sm:pt-10 pb-12 sm:pb-14 shadow-lg border border-amber-300">
          {/* Left Honey Dipper with Dripping Stream to Puddle */}
          <div className="absolute -top-10 -left-6 sm:-left-12 w-28 sm:w-44 h-48 sm:h-72 pointer-events-none drop-shadow-xl z-20">
            <Image
              src="/assets/about_honey_dipper_clean.png"
              alt="Honey Dipper with dripping honey"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Right Honey Jar with Fabric Lid, Bees & Flowers */}
          <div className="absolute -bottom-4 -right-4 sm:-right-8 w-32 sm:w-48 h-40 sm:h-60 pointer-events-none drop-shadow-xl z-20">
            <Image
              src="/assets/about_jar_bees_clean.png"
              alt="Honey jar with bees and flowers"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Centered Content */}
          <div className="relative z-10 max-w-xl mx-auto text-center flex flex-col items-center">
            {/* Header: ABOUT US + Amber Underline Bar */}
            <h2 className="font-serif text-2xl sm:text-3xl font-black text-[#2B1506] tracking-wider uppercase">
              ABOUT US
            </h2>
            <div className="w-10 h-1 bg-[#8D4B0A]/40 rounded-full mx-auto mt-1 mb-4" />

            {/* Paragraph Text (Clean & faithful to Dribbble aesthetic) */}
            <p className="text-xs sm:text-sm text-[#381F0E] leading-relaxed font-medium">
              Pak and Pakiza brings you 100% pure, natural, and raw honey harvested directly from organic beehives in Burewala and across Pakistan. Unheated, cold-extracted, and unadulterated, every drop preserves nature&apos;s living enzymes, wild pollens, and medicinal benefits.
            </p>

            <p className="text-xs sm:text-sm text-[#381F0E] leading-relaxed font-medium mt-3 hidden sm:block">
              We take pride in transparent beekeeping and traditional harvesting that honors the sacred purity of pure honey.
            </p>

            {/* Centered Button: Shop Now */}
            <div className="mt-6">
              <Link
                href="/shop"
                className="px-8 py-2.5 rounded-full bg-gradient-to-r from-[#EFA526] via-[#EA9A1B] to-[#E38B0F] hover:from-[#EA9A1B] hover:to-[#D97E06] text-[#2B1506] text-xs sm:text-sm font-bold shadow-md transition-all hover:scale-105 inline-block border border-amber-400/40"
              >
                Shop Now
              </Link>
            </div>
          </div>

          {/* 3D Liquid Dripping Honey Bottom Wave */}
          <div className="absolute -bottom-7 sm:-bottom-9 left-0 right-0 overflow-hidden leading-none pointer-events-none z-10">
            <svg
              viewBox="0 0 1200 90"
              preserveAspectRatio="none"
              className="relative block w-full h-8 sm:h-10 text-[#F59E0B] fill-current drop-shadow-sm"
            >
              <path d="M0,0 L1200,0 L1200,10 C1140,25 1100,55 1060,55 C1020,55 980,15 930,15 C880,15 850,75 800,75 C750,75 720,20 670,20 C620,20 590,85 540,85 C490,85 460,25 410,25 C360,25 330,65 280,65 C230,65 200,15 150,15 C100,15 60,45 0,35 Z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
