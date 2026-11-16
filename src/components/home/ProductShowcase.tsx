import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PRODUCTS } from "@/data/products";
import { BeeFlight } from "./BeeFlight";

export function ProductShowcase() {
  const product = PRODUCTS[0];

  return (
    <section className="relative pt-12 sm:pt-16 pb-16 sm:pb-24 bg-[#FAF7F2] overflow-hidden">
      <div className="absolute top-16 left-6 sm:left-14 pointer-events-none z-10">
        <BeeFlight variant="simple" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-xl mx-auto mb-8 sm:mb-10">
          <h2 className="font-serif text-3xl sm:text-4xl font-black text-[#2B1506] tracking-wider uppercase">
            OUR HONEY
          </h2>
          <div className="w-10 h-1 bg-[#8D4B0A]/40 rounded-full mx-auto mt-1 mb-3" />
          <div className="relative w-8 h-9">
            <Image
              src="/assets/mascot_baby_bee.png"
              alt="Baby bee icon"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 sm:gap-12">
          <div className="relative w-64 sm:w-80 aspect-square flex-shrink-0">
            <Image
              src="/assets/product_center_jar.png"
              alt="Pak and Pakiza Honey"
              fill
              className="object-contain drop-shadow-xl"
              priority
            />
          </div>

          <div className="flex-1 w-full text-center md:text-left">
            <h3 className="font-serif text-2xl sm:text-3xl font-black text-[#2B1506] uppercase tracking-wide">
              Honey
            </h3>
            <p className="text-sm text-[#381F0E]/80 leading-relaxed font-medium mt-3">
              Choose the size that suits you.
            </p>

            <div className="grid grid-cols-3 gap-2 sm:gap-3 mt-5">
              {product.sizes.map((size) => (
                <div
                  key={size.label}
                  className="rounded-2xl bg-white border border-amber-200 p-3 text-center"
                >
                  <span className="block text-sm font-bold text-[#2B1506]">
                    {size.label}
                  </span>
                  <span className="block text-xs sm:text-sm font-black text-amber-700 mt-1">
                    Rs. {size.pricePKR.toLocaleString()}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <Link
                href={`/product/${product.slug}`}
                className="px-8 py-2.5 rounded-full bg-gradient-to-r from-[#EFA526] via-[#EA9A1B] to-[#E38B0F] hover:from-[#EA9A1B] hover:to-[#D97E06] text-[#2B1506] text-xs sm:text-sm font-bold shadow-sm transition-all hover:scale-105 inline-block"
              >
                Choose Size
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
