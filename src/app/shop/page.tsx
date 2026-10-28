"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShoppingBag,
  Star,
  ShieldCheck,
  Filter,
  ArrowUpDown,
  Check
} from "lucide-react";
import { PRODUCTS, BRAND_INFO } from "@/data/products";
import { useCart } from "@/context/CartContext";

export default function ShopPage() {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [sortBy, setSortBy] = useState<string>("featured");

  const categories = [
    "All",
    "Sidr Raw Honey",
    "Wild Forest Honey",
    "Raw Honey",
    "Comb Honey",
    "Infusions"
  ];

  const filtered = PRODUCTS.filter((p) => {
    if (selectedCategory === "All") return true;
    return p.category === selectedCategory;
  }).sort((a, b) => {
    if (sortBy === "price-low") return a.pricePKR - b.pricePKR;
    if (sortBy === "price-high") return b.pricePKR - a.pricePKR;
    if (sortBy === "rating") return b.rating - a.rating;
    return 0; // featured default
  });

  return (
    <div className="bg-[#FAF7F2] min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Banner */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-800 bg-amber-100 px-4 py-1.5 rounded-full inline-block mb-3">
            Pure Raw Harvests from Pakistan
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-[#2D1A0E] tracking-tight">
            Pak and Pakiza Honey Shop
          </h1>
          <p className="font-script text-xl sm:text-2xl text-amber-700 font-bold mt-1">
            خالص اور پاکیزہ قدرتی شہد کی تمام اقسام
          </p>
          <p className="text-xs sm:text-sm text-amber-900/75 mt-3 leading-relaxed">
            Every jar is cold-extracted, unheated, unpasteurized, and lab-tested for absolute purity. Free delivery nationwide on orders above Rs. 3,500.
          </p>
        </div>

        {/* Filters and Sorting Bar */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-amber-200/90 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <span className="text-xs font-bold text-amber-900 uppercase tracking-wider mr-2 hidden sm:inline-flex items-center gap-1">
              <Filter className="w-3.5 h-3.5 text-amber-700" /> Filter:
            </span>
            {categories.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                    active
                      ? "bg-amber-500 text-[#2D1A0E] shadow-xs"
                      : "bg-[#FAF7F2] text-amber-900 hover:bg-amber-100"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Sort Selector */}
          <div className="flex items-center gap-2 w-full md:w-auto justify-end">
            <ArrowUpDown className="w-4 h-4 text-amber-700" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-[#FAF7F2] border border-amber-200 text-xs font-bold text-[#2D1A0E] rounded-xl px-3 py-2 outline-none focus:border-amber-500 cursor-pointer"
            >
              <option value="featured">Featured Varieties</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filtered.map((product) => {
            const defaultSize = product.sizes[1] || product.sizes[0];
            return (
              <div
                key={product.id}
                className="bg-white rounded-3xl p-6 border-2 border-amber-200/80 hover:border-amber-400 honey-card-shadow transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group"
              >
                <div>
                  {/* Thumbnail */}
                  <Link
                    href={`/product/${product.slug}`}
                    className="relative aspect-square w-full rounded-2xl bg-[#FAF7F2] p-4 flex items-center justify-center overflow-hidden border border-amber-100 group-hover:bg-amber-50/50 transition-colors block"
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-2 group-hover:scale-105 transition-transform duration-300 drop-shadow-md"
                    />
                    {product.badge && (
                      <span className="absolute top-3 left-3 bg-[#2D1A0E] text-amber-300 text-[10px] font-black uppercase px-2.5 py-1 rounded-full shadow-xs">
                        {product.badge}
                      </span>
                    )}
                    <span className="absolute bottom-3 right-3 bg-white/90 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-md border border-emerald-200 flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-emerald-600" /> 100% Raw
                    </span>
                  </Link>

                  {/* Rating */}
                  <div className="flex items-center gap-1.5 mt-4">
                    <div className="flex text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current text-amber-500" />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-amber-900">
                      {product.rating.toFixed(1)} ({product.reviewCount} reviews)
                    </span>
                  </div>

                  {/* Title & Description */}
                  <Link href={`/product/${product.slug}`}>
                    <h3 className="font-serif text-xl font-bold text-[#2D1A0E] mt-2 group-hover:text-amber-800 transition-colors">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="font-script text-base text-amber-700 font-bold">
                    {product.urduName}
                  </p>
                  <p className="text-xs text-amber-900/70 mt-1.5 line-clamp-2 leading-relaxed">
                    {product.tagline}
                  </p>

                  {/* Size options preview */}
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {product.sizes.map((s) => (
                      <span
                        key={s.label}
                        className="text-[10px] bg-amber-50 text-amber-900 font-semibold px-2 py-0.5 rounded-md border border-amber-200/60"
                      >
                        {s.label}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price & Add to Cart */}
                <div className="mt-6 pt-4 border-t border-amber-100 flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] text-amber-800/70 block uppercase font-bold">
                      Starts from
                    </span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-xl font-black text-[#2D1A0E]">
                        Rs. {product.pricePKR.toLocaleString()}
                      </span>
                      {product.originalPricePKR && (
                        <span className="text-xs text-amber-900/40 line-through">
                          Rs. {product.originalPricePKR.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => addToCart(product, defaultSize, 1)}
                      className="px-4 py-2.5 rounded-full honey-gold-btn text-xs font-bold flex items-center gap-1.5 shadow-sm hover:scale-105 transition-all"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Add</span>
                    </button>
                    <Link
                      href={`/product/${product.slug}`}
                      className="px-3 py-2.5 rounded-full bg-[#FAF7F2] hover:bg-amber-100 text-[#2D1A0E] text-xs font-bold border border-amber-200 transition-colors"
                    >
                      View
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 p-6 sm:p-8 rounded-3xl bg-amber-50/80 border border-amber-200/80 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div>
            <span className="text-2xl mb-1 block">🌿</span>
            <h4 className="font-bold text-sm text-[#2D1A0E]">100% Cold-Extracted</h4>
            <p className="text-xs text-amber-900/70 mt-0.5">
              Never heated or adulterated with artificial syrups.
            </p>
          </div>
          <div>
            <span className="text-2xl mb-1 block">🚚</span>
            <h4 className="font-bold text-sm text-[#2D1A0E]">Nationwide Cash on Delivery</h4>
            <p className="text-xs text-amber-900/70 mt-0.5">
              Inspect your parcel upon delivery with TCS &amp; Leopards.
            </p>
          </div>
          <div>
            <span className="text-2xl mb-1 block">🔬</span>
            <h4 className="font-bold text-sm text-[#2D1A0E]">Lab Certified Purity</h4>
            <p className="text-xs text-amber-900/70 mt-0.5">
              Meets strict international Codex standards for pure honey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
