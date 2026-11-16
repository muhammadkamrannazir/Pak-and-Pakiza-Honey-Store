"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BeeFlight } from "./BeeFlight";

export function HeroSection() {
  return (
    <section className="relative pt-2 sm:pt-6 pb-8 sm:pb-14 overflow-hidden bg-[#FAF7F2]">
      {/* Delicate Botanical Sketch - Top Right Corner (Pure Vector SVG - Zero Background Bleed) */}
      <div className="absolute top-0 right-0 w-44 sm:w-72 h-44 sm:h-72 pointer-events-none opacity-40 z-0">
        <svg
          viewBox="0 0 200 200"
          fill="none"
          stroke="#8C6D46"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-full h-full"
        >
          {/* Main curving stem */}
          <path d="M 210, -10 C 180, 40 140, 80 80, 140 C 60, 160 30, 180 0, 190" />
          {/* Leaf pairs & sprigs */}
          <path d="M 170, 30 C 150, 20 135, 30 145, 45 C 155, 60 170, 50 170, 30 Z" fill="#8C6D46" fillOpacity="0.08" />
          <path d="M 160, 37 Q 148, 38 145, 45" />
          <path d="M 185, 45 C 195, 65 185, 75 170, 70 C 155, 65 165, 50 185, 45 Z" fill="#8C6D46" fillOpacity="0.08" />
          <path d="M 140, 70 C 120, 65 110, 80 120, 95 C 130, 105 145, 90 140, 70 Z" fill="#8C6D46" fillOpacity="0.08" />
          <path d="M 130, 80 Q 120, 83 120, 95" />
          <path d="M 125, 95 C 145, 110 135, 130 120, 125 C 105, 120 110, 105 125, 95 Z" fill="#8C6D46" fillOpacity="0.08" />
          <path d="M 95, 125 C 80, 115 65, 125 75, 140 C 85, 150 100, 140 95, 125 Z" fill="#8C6D46" fillOpacity="0.08" />
          <path d="M 85, 133 Q 75, 135 75, 140" />
          <path d="M 70, 148 C 50, 145 45, 160 55, 170 C 65, 180 80, 165 70, 148 Z" fill="#8C6D46" fillOpacity="0.08" />
          {/* Side floral branch */}
          <path d="M 140, 70 Q 110, 45 90, 40" />
          <circle cx="85" cy="38" r="4" fill="#8C6D46" fillOpacity="0.15" />
          <circle cx="95" cy="48" r="3" fill="#8C6D46" fillOpacity="0.15" />
          <circle cx="78" cy="45" r="3.5" fill="#8C6D46" fillOpacity="0.15" />
          {/* Little flower blossoms */}
          <g transform="translate(45, 175) scale(0.7)">
            <circle cx="10" cy="10" r="3" fill="#E08E0B" fillOpacity="0.4" />
            <ellipse cx="10" cy="3" rx="2.5" ry="4" fill="#8C6D46" fillOpacity="0.12" />
            <ellipse cx="10" cy="17" rx="2.5" ry="4" fill="#8C6D46" fillOpacity="0.12" />
            <ellipse cx="3" cy="10" rx="4" ry="2.5" fill="#8C6D46" fillOpacity="0.12" />
            <ellipse cx="17" cy="10" rx="4" ry="2.5" fill="#8C6D46" fillOpacity="0.12" />
          </g>
        </svg>
      </div>

      {/* Delicate Botanical Sketch - Top Left Corner (Pure Vector SVG) */}
      <div className="absolute top-8 left-0 w-36 sm:w-60 h-44 sm:h-72 pointer-events-none opacity-35 z-0 hidden sm:block">
        <svg
          viewBox="0 0 200 200"
          fill="none"
          stroke="#8C6D46"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-full h-full"
        >
          {/* Graceful curving branch entering from top left */}
          <path d="M -10, 20 C 40, 40 80, 80 120, 140 C 140, 170 150, 190 160, 210" />
          {/* Leaf pairs & sprigs */}
          <path d="M 25, 33 C 35, 15 55, 20 50, 35 C 45, 50 30, 45 25, 33 Z" fill="#8C6D46" fillOpacity="0.08" />
          <path d="M 37, 28 Q 42, 32 50, 35" />
          <path d="M 45, 50 C 65, 45 75, 60 65, 75 C 55, 85 45, 70 45, 50 Z" fill="#8C6D46" fillOpacity="0.08" />
          <path d="M 75, 75 C 95, 65 110, 75 105, 90 C 95, 105 80, 95 75, 75 Z" fill="#8C6D46" fillOpacity="0.08" />
          <path d="M 90, 80 Q 98, 85 105, 90" />
          <path d="M 95, 110 C 115, 105 125, 120 120, 135 C 110, 145 95, 130 95, 110 Z" fill="#8C6D46" fillOpacity="0.08" />
          {/* Side floral branch */}
          <path d="M 75, 75 Q 70, 110 55, 130" />
          <circle cx="50" cy="135" r="4" fill="#8C6D46" fillOpacity="0.15" />
          <circle cx="62" cy="125" r="3" fill="#8C6D46" fillOpacity="0.15" />
          <circle cx="48" cy="120" r="3.5" fill="#8C6D46" fillOpacity="0.15" />
          {/* Flower blossom */}
          <g transform="translate(130, 145) scale(0.7)">
            <circle cx="10" cy="10" r="3" fill="#E08E0B" fillOpacity="0.4" />
            <ellipse cx="10" cy="3" rx="2.5" ry="4" fill="#8C6D46" fillOpacity="0.12" />
            <ellipse cx="10" cy="17" rx="2.5" ry="4" fill="#8C6D46" fillOpacity="0.12" />
            <ellipse cx="3" cy="10" rx="4" ry="2.5" fill="#8C6D46" fillOpacity="0.12" />
            <ellipse cx="17" cy="10" rx="4" ry="2.5" fill="#8C6D46" fillOpacity="0.12" />
          </g>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Giant Watermark Text "HONEY" behind the product pedestal (Exact Dribbble Watermark) */}
        <div className="relative text-center select-none pointer-events-none -mb-16 sm:-mb-32 lg:-mb-44 z-0">
          <span className="font-serif text-[72px] sm:text-[140px] md:text-[190px] lg:text-[230px] font-black tracking-widest text-[#4A2610]/[0.08] uppercase block leading-none">
            HONEY
          </span>
        </div>

        {/* Hero 3-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-4 relative z-10 pt-4">
          {/* Left Column: Guardians of Honey Since 1998 + Shop Now Pill */}
          <div className="lg:col-span-3 text-center lg:text-left flex flex-col items-center lg:items-start order-2 lg:order-1 pt-2 lg:pt-0">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#2B1506] block">
              GUARDIANS OF HONEY
            </span>
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#2B1506] block mt-0.5">
              SINCE 1998
            </span>
            <div className="mt-4 sm:mt-5">
              <Link
                href="/shop"
                className="px-6 sm:px-7 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-[#EFA526] via-[#EA9A1B] to-[#E38B0F] hover:from-[#EA9A1B] hover:to-[#D97E06] text-[#2B1506] text-xs sm:text-sm font-bold shadow-sm transition-all hover:scale-105 inline-block"
              >
                Shop Now
              </Link>
            </div>
          </div>

          {/* Center Stage: Wooden Slab Pedestal + Honey Jar and Dipper */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center order-1 lg:order-2">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg aspect-square flex items-center justify-center">
              <div className="relative w-full h-full">
                <Image
                  src="/assets/hero_jar_pedestal.png"
                  alt="Pak and Pakiza Pure Honey Jar on Wooden Slab"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right Column: HONEY 100% pure + Flying Bee with Dotted Flight Trail */}
          <div className="lg:col-span-3 text-center lg:text-left flex flex-col items-center lg:items-start order-3 relative">
            <div className="space-y-0.5">
              <span className="font-serif text-3xl sm:text-4xl font-black text-[#2B1506] tracking-tight block uppercase">
                HONEY
              </span>
              <span className="font-script text-2xl sm:text-3xl text-[#5C2B11] block -mt-1 transform -rotate-2">
                100% pure
              </span>
            </div>

            {/* Flying Little Bee with loop-de-loop flight trail */}
            <div className="mt-2 -ml-2 pointer-events-none">
              <BeeFlight variant="loop" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
