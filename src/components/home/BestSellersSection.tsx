import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PRODUCTS } from "@/data/products";

export function BestSellersSection() {
  const items = [
    {
      title: "RAW HONEY",
      price: "Rs. 2,450",
      image: "/assets/bestseller_clean_1.png",
      slug: PRODUCTS[0].slug
    },
    {
      title: "MANUKA HONEY",
      price: "Rs. 3,200",
      image: "/assets/bestseller_clean_2.png",
      slug: PRODUCTS[1].slug
    },
    {
      title: "WILDFLOWER HONEY",
      price: "Rs. 1,850",
      image: "/assets/bestseller_clean_3.png",
      slug: PRODUCTS[2].slug
    }
  ];

  return (
    <section className="relative py-12 sm:py-16 bg-[#FAF7F2] overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-12">
          <h2 className="font-serif text-2xl sm:text-3xl font-black text-[#2B1506] tracking-wider uppercase">
            BEST SELLER PRODUCT
          </h2>
          <div className="w-10 h-1 bg-[#8D4B0A]/40 rounded-full mx-auto mt-1" />
        </div>

        {/* 3 Clean Product Showcases directly on cream background (Exact Dribbble Match) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 items-end max-w-4xl mx-auto">
          {items.map((prod, idx) => (
            <Link
              key={idx}
              href={`/product/${prod.slug}`}
              className="flex flex-col items-center text-center group cursor-pointer transition-transform hover:-translate-y-1.5"
            >
              {/* Product Visual Composition */}
              <div className="relative w-48 sm:w-56 h-36 sm:h-44 flex items-center justify-center">
                <Image
                  src={prod.image}
                  alt={prod.title}
                  fill
                  className="object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Title: Bold Uppercase Dark Brown */}
              <h3 className="font-serif text-sm sm:text-base font-black text-[#2B1506] uppercase tracking-wider mt-4 group-hover:text-amber-800 transition-colors">
                {prod.title}
              </h3>

              {/* Price: Golden Amber */}
              <span className="text-sm sm:text-base font-bold text-[#E08E0B] mt-1 block">
                {prod.price}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
