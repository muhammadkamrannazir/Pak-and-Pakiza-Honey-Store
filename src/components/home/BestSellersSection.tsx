import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PRODUCTS } from "@/data/products";

export function BestSellersSection() {
  const product = PRODUCTS[0];

  return (
    <section className="relative py-12 sm:py-16 bg-[#FAF7F2] overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-12">
          <h2 className="font-serif text-2xl sm:text-3xl font-black text-[#2B1506] tracking-wider uppercase">
            HONEY SIZES &amp; PRICES
          </h2>
          <div className="w-10 h-1 bg-[#8D4B0A]/40 rounded-full mx-auto mt-1" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 max-w-4xl mx-auto">
          {product.sizes.map((size) => (
            <Link
              key={size.label}
              href={`/product/${product.slug}`}
              className="flex flex-col items-center text-center group transition-transform hover:-translate-y-1.5"
            >
              <div className="relative w-48 sm:w-56 h-36 sm:h-44 flex items-center justify-center">
                <Image
                  src="/assets/bestseller_clean_1.png"
                  alt="Honey"
                  fill
                  className="object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-serif text-sm sm:text-base font-black text-[#2B1506] uppercase tracking-wider mt-4 group-hover:text-amber-800 transition-colors">
                {size.label}
              </h3>
              <span className="text-sm sm:text-base font-bold text-[#E08E0B] mt-1 block">
                Rs. {size.pricePKR.toLocaleString()}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
