"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { BeeFlight } from "./BeeFlight";

export function GallerySection() {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  const columns = [
    [
      { src: "/assets/gallery_honey_comb_jar.png", alt: "Honey jar" },
      { src: "/assets/gallery_chamomile_honey.png", alt: "Honey jar with chamomile daisies" }
    ],
    [
      { src: "/assets/gallery_dipper_drip.png", alt: "Dipper dripping honey" },
      { src: "/assets/gallery_golden_jar_spoon.png", alt: "Honey jar with spoon" }
    ],
    [
      { src: "/assets/gallery_fresh_comb_jar.png", alt: "Honey jar" },
      { src: "/assets/gallery_wooden_bowl_honey.png", alt: "Wooden bowl with honey dipper" }
    ],
    [
      { src: "/assets/gallery_dripping_spoon_macro.png", alt: "Macro honey drip" },
      { src: "/assets/gallery_rustic_jar_flowers.png", alt: "Honey jar with flowers" }
    ],
    [
      { src: "/assets/gallery_dark_honey_comb.png", alt: "Dark honey comb harvest" },
      { src: "/assets/gallery_comb_frame_spread.png", alt: "Honey being served" }
    ]
  ];

  return (
    <section className="relative py-12 sm:py-16 bg-[#FAF7F2] overflow-hidden">
      {/* Background Subtle Honeycomb Watermark */}
      <div className="absolute inset-0 opacity-10 bg-honeycomb pointer-events-none" />

      {/* Little Flying Bee with Dotted Trail on Left */}
      <div className="absolute top-8 left-4 sm:left-12 pointer-events-none z-20">
        <BeeFlight variant="loop" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading (Left-aligned, matches Dribbble) */}
        <div className="mb-8 sm:mb-10 text-left pl-2 sm:pl-4">
          <h2 className="font-serif text-2xl sm:text-3xl font-black text-[#2B1506] tracking-wider uppercase">
            OUR GALLERY
          </h2>
          <div className="w-10 h-1 bg-[#8D4B0A]/40 rounded-full mt-1" />
        </div>

        {/* 10 Photo Tiles in 5-Column Staggered Grid (Exact Dribbble Match) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 max-w-5xl mx-auto items-start">
          {columns.map((col, cIdx) => {
            const colOffset =
              cIdx === 0
                ? "lg:pt-8"
                : cIdx === 1
                ? "lg:pt-5"
                : cIdx === 2
                ? "lg:pt-6"
                : cIdx === 3
                ? "lg:pt-2"
                : "lg:pt-0";
            return (
              <div key={cIdx} className={`flex flex-col gap-3 sm:gap-4 ${colOffset}`}>
                {col.map((img, rIdx) => (
                  <div
                    key={rIdx}
                    onClick={() => setSelectedPhoto(img.src)}
                    className="relative aspect-square w-full rounded-2xl overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 group cursor-pointer hover:scale-102 bg-amber-50"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          onClick={() => setSelectedPhoto(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-2xl w-full bg-white rounded-3xl overflow-hidden p-2 shadow-2xl border border-amber-300"
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 text-white hover:bg-black/80"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="relative aspect-4/3 w-full rounded-2xl overflow-hidden">
              <Image
                src={selectedPhoto}
                alt="Enlarged gallery photo"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
