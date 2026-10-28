"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Star,
  ShoppingBag,
  ShieldCheck,
  Truck,
  RotateCcw,
  Sparkles,
  Phone,
  CheckCircle2,
  FileText,
  MapPin,
  ChevronRight,
  Plus,
  Minus
} from "lucide-react";
import { HoneyProduct, SizeOption } from "@/types";
import { useCart } from "@/context/CartContext";
import { BRAND_INFO, PRODUCTS } from "@/data/products";

export function ProductDetailClient({ product }: { product: HoneyProduct }) {
  const router = useRouter();
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(product.image);
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<"benefits" | "harvest" | "lab" | "reviews">("benefits");
  const [labModalOpen, setLabModalOpen] = useState(false);

  const currentSize: SizeOption = product.sizes[selectedSizeIndex] || product.sizes[0];
  const totalPrice = currentSize.pricePKR * quantity;

  const handleBuyNow = () => {
    addToCart(product, currentSize, quantity);
    router.push("/checkout");
  };

  const related = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <div className="bg-[#FAF7F2] min-h-screen py-8 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-amber-900/60 mb-6">
          <Link href="/" className="hover:text-amber-800 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/shop" className="hover:text-amber-800 transition-colors">
            Honey Shop
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-amber-900 font-bold truncate">{product.name}</span>
        </nav>

        {/* Main Product Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 bg-white rounded-3xl p-6 sm:p-10 border border-amber-200/90 honey-card-shadow">
          {/* Left Column: Image Gallery */}
          <div className="lg:col-span-6 flex flex-col items-center">
            {/* Main Stage Image */}
            <div className="relative w-full aspect-square max-w-lg rounded-2xl bg-[#FAF7F2] p-6 flex items-center justify-center border border-amber-200/80 overflow-hidden group">
              <div className="relative w-full h-full transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={selectedImage}
                  alt={product.name}
                  fill
                  className="object-contain drop-shadow-xl"
                  priority
                />
              </div>

              {product.badge && (
                <span className="absolute top-4 left-4 bg-[#2D1A0E] text-amber-300 text-xs font-black uppercase px-3 py-1 rounded-full shadow-sm">
                  {product.badge}
                </span>
              )}

              <button
                onClick={() => setLabModalOpen(true)}
                className="absolute bottom-4 left-4 bg-white/90 hover:bg-white text-amber-900 text-[11px] font-bold px-3 py-1.5 rounded-full border border-amber-300 shadow-sm flex items-center gap-1.5 transition-all"
              >
                <FileText className="w-3.5 h-3.5 text-amber-700" />
                <span>View Lab Report</span>
              </button>
            </div>

            {/* Thumbnail Strip */}
            <div className="flex items-center gap-3 mt-4 overflow-x-auto pb-2 w-full justify-center">
              {product.galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden bg-[#FAF7F2] border-2 transition-all flex-shrink-0 ${
                    selectedImage === img
                      ? "border-amber-500 scale-105 shadow-sm"
                      : "border-amber-200/60 opacity-70 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${product.name} thumbnail ${idx + 1}`}
                    fill
                    className="object-contain p-1"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Details & Purchase Controls */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              {/* Rating */}
              <div className="flex items-center gap-2 mb-2">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current text-amber-500" />
                  ))}
                </div>
                <span className="text-xs font-bold text-amber-900">
                  {product.rating.toFixed(1)} ({product.reviewCount} verified reviews)
                </span>
                <span className="text-amber-300">•</span>
                <span className="text-xs font-bold text-emerald-700 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> 100% Raw Certified
                </span>
              </div>

              {/* Title & Tagline */}
              <h1 className="font-serif text-3xl sm:text-4xl font-black text-[#2D1A0E] tracking-tight leading-tight">
                {product.name}
              </h1>
              <p className="font-script text-2xl text-amber-700 font-bold mt-1">
                {product.urduName}
              </p>
              <p className="text-xs sm:text-sm text-amber-900/75 mt-3 leading-relaxed">
                {product.description}
              </p>

              {/* Price Banner */}
              <div className="mt-5 p-4 rounded-2xl bg-amber-50/80 border border-amber-200 flex items-baseline justify-between">
                <div>
                  <span className="text-[10px] text-amber-800 font-bold uppercase tracking-wider block">
                    Price in Pakistani Rupees
                  </span>
                  <div className="flex items-baseline gap-2 mt-0.5">
                    <span className="text-3xl font-black text-[#2D1A0E]">
                      Rs. {currentSize.pricePKR.toLocaleString()}
                    </span>
                    {currentSize.originalPricePKR && (
                      <span className="text-sm text-amber-900/40 line-through font-bold">
                        Rs. {currentSize.originalPricePKR.toLocaleString()}
                      </span>
                    )}
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-full">
                    ✓ In Stock ({product.stockCount} left)
                  </span>
                </div>
              </div>

              {/* Weight Selector */}
              <div className="mt-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-900">
                    Select Jar Weight:
                  </span>
                  <span className="text-xs text-amber-800 font-medium">
                    Selected: <strong>{currentSize.label}</strong>
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {product.sizes.map((size, idx) => {
                    const isSelected = selectedSizeIndex === idx;
                    return (
                      <button
                        key={size.label}
                        onClick={() => setSelectedSizeIndex(idx)}
                        className={`p-3 rounded-2xl border-2 text-center transition-all ${
                          isSelected
                            ? "border-amber-500 bg-amber-50/80 shadow-xs"
                            : "border-amber-200 hover:border-amber-300 bg-white"
                        }`}
                      >
                        <span className="block text-xs sm:text-sm font-black text-[#2D1A0E]">
                          {size.label}
                        </span>
                        <span className="block text-xs text-amber-700 font-bold mt-0.5">
                          Rs. {size.pricePKR.toLocaleString()}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="mt-6 flex items-center gap-4">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-900">
                  Quantity:
                </span>
                <div className="flex items-center border border-amber-300 rounded-xl bg-[#FAF7F2] overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-amber-200 text-[#2D1A0E] transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="px-4 text-sm font-black text-[#2D1A0E]">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-amber-200 text-[#2D1A0E] transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
                <span className="text-xs text-amber-800/80 font-medium">
                  Subtotal: <strong>Rs. {totalPrice.toLocaleString()}</strong>
                </span>
              </div>

              {/* Action CTA Buttons */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={() => addToCart(product, currentSize, quantity)}
                  className="py-3.5 px-6 rounded-full bg-[#FAF7F2] hover:bg-amber-100 text-[#2D1A0E] text-xs sm:text-sm font-black border-2 border-amber-400 flex items-center justify-center gap-2 shadow-xs transition-all hover:scale-102"
                >
                  <ShoppingBag className="w-4 h-4 text-amber-800" />
                  <span>Add to Cart</span>
                </button>

                <button
                  onClick={handleBuyNow}
                  className="py-3.5 px-6 rounded-full honey-gold-btn text-xs sm:text-sm font-black flex items-center justify-center gap-2 shadow-md transition-all hover:scale-102"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Buy Now (COD)</span>
                </button>
              </div>

              {/* WhatsApp Quick Order Link */}
              <div className="mt-3">
                <a
                  href={`https://wa.me/${BRAND_INFO.whatsapp}?text=Assalam%20o%20Alaikum%20Pak%20and%20Pakiza%2C%20I%20would%20like%20to%20order%20${encodeURIComponent(product.name)}%20(${currentSize.label})%20x%20${quantity}%20for%20Rs.%20${totalPrice}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors shadow-xs"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Order Directly on WhatsApp (+92 329 1384005)</span>
                </a>
              </div>
            </div>

            {/* Guarantees Box */}
            <div className="mt-8 pt-6 border-t border-amber-200/80 grid grid-cols-3 gap-3 text-center text-xs">
              <div className="p-2 rounded-xl bg-amber-50/60">
                <ShieldCheck className="w-4 h-4 text-emerald-700 mx-auto mb-1" />
                <span className="font-bold text-[#2D1A0E] block">100% Pure Honey</span>
                <span className="text-[10px] text-amber-900/60">Money back guarantee</span>
              </div>
              <div className="p-2 rounded-xl bg-amber-50/60">
                <Truck className="w-4 h-4 text-amber-700 mx-auto mb-1" />
                <span className="font-bold text-[#2D1A0E] block">Safe Packaging</span>
                <span className="text-[10px] text-amber-900/60">Bubble wrap + seal</span>
              </div>
              <div className="p-2 rounded-xl bg-amber-50/60">
                <RotateCcw className="w-4 h-4 text-amber-700 mx-auto mb-1" />
                <span className="font-bold text-[#2D1A0E] block">Cash on Delivery</span>
                <span className="text-[10px] text-amber-900/60">Check then pay</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabbed Product Exploration Section */}
        <div className="mt-12 bg-white rounded-3xl p-6 sm:p-10 border border-amber-200/90 honey-card-shadow">
          {/* Tab Navigation */}
          <div className="flex flex-wrap items-center gap-3 border-b border-amber-200 pb-4">
            {[
              { id: "benefits", label: "Health & Sunnah Benefits" },
              { id: "harvest", label: "Floral Source & Texture" },
              { id: "lab", label: "Purity Lab Test Report" },
              { id: "reviews", label: `Customer Reviews (${product.reviews.length})` }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                  activeTab === tab.id
                    ? "bg-amber-500 text-[#2D1A0E] shadow-xs"
                    : "text-amber-900 hover:bg-amber-100/60"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="pt-6">
            {activeTab === "benefits" && (
              <div className="space-y-4">
                <h3 className="font-serif text-xl font-bold text-[#2D1A0E]">
                  Proven Medicinal &amp; Sunnah Benefits
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.healthBenefits.map((b, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/70 flex items-start gap-3"
                    >
                      <span className="w-6 h-6 rounded-full bg-amber-500 text-[#2D1A0E] text-xs font-black flex items-center justify-center flex-shrink-0 mt-0.5">
                        ✓
                      </span>
                      <p className="text-xs sm:text-sm text-amber-950 font-medium leading-relaxed">
                        {b}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "harvest" && (
              <div className="space-y-4 max-w-2xl">
                <h3 className="font-serif text-xl font-bold text-[#2D1A0E]">
                  Floral Origin &amp; Sensory Profile
                </h3>
                <div className="space-y-3 text-xs sm:text-sm text-amber-950">
                  <p>
                    <strong>Harvest Location:</strong> {product.harvestLocation}
                  </p>
                  <p>
                    <strong>Floral Source:</strong> {product.floralSource}
                  </p>
                  <p>
                    <strong>Viscosity &amp; Tasting Notes:</strong> {product.textureAndAroma}
                  </p>
                  <p className="text-amber-900/80 leading-relaxed pt-2">
                    💡 <em>Note on crystallization:</em> Real raw honey contains active pollens and natural glucose crystals. Depending on ambient room temperature, raw honey can naturally crystallize into a rich creamy butter. This is a scientific hallmark of 100% untampered raw honey!
                  </p>
                </div>
              </div>
            )}

            {activeTab === "lab" && (
              <div className="space-y-6 max-w-xl">
                <h3 className="font-serif text-xl font-bold text-[#2D1A0E]">
                  Codex Alimentarius Lab Purity Report
                </h3>
                <div className="bg-[#FAF7F2] rounded-2xl p-5 border border-amber-200 space-y-3">
                  <div className="flex justify-between text-xs sm:text-sm border-b border-amber-200 pb-2">
                    <span className="font-medium text-amber-900">Total Nectar Purity:</span>
                    <strong className="text-emerald-700">{product.labReport.purityPercentage}</strong>
                  </div>
                  <div className="flex justify-between text-xs sm:text-sm border-b border-amber-200 pb-2">
                    <span className="font-medium text-amber-900">Sucrose Sugar Level:</span>
                    <strong className="text-emerald-700">{product.labReport.sucroseLevel}</strong>
                  </div>
                  <div className="flex justify-between text-xs sm:text-sm border-b border-amber-200 pb-2">
                    <span className="font-medium text-amber-900">Moisture Content:</span>
                    <strong className="text-emerald-700">{product.labReport.moistureContent}</strong>
                  </div>
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="font-medium text-amber-900">Live Diastase / Enzyme Status:</span>
                    <strong className="text-emerald-700">{product.labReport.hda10Status}</strong>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "reviews" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-xl font-bold text-[#2D1A0E]">
                    Customer Reviews
                  </h3>
                  <span className="text-xs font-bold text-amber-800 bg-amber-100 px-3 py-1 rounded-full">
                    {product.rating.toFixed(1)} / 5.0 Average
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.reviews.map((r) => (
                    <div
                      key={r.id}
                      className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200/80 space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-sm text-[#2D1A0E] flex items-center gap-1.5">
                          {r.author}
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        </span>
                        <div className="flex text-amber-500">
                          {[...Array(r.rating)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-current text-amber-500" />
                          ))}
                        </div>
                      </div>
                      <span className="text-[11px] text-amber-800/60 block">
                        {r.city} • {r.date}
                      </span>
                      <p className="text-xs sm:text-sm text-amber-950/80 leading-relaxed italic">
                        &ldquo;{r.comment}&rdquo;
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Honeys */}
        <div className="mt-16">
          <h3 className="font-serif text-2xl font-black text-[#2D1A0E] mb-6 text-center">
            You May Also Love
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {related.map((rel) => (
              <Link
                key={rel.id}
                href={`/product/${rel.slug}`}
                className="bg-white rounded-3xl p-5 border border-amber-200/80 hover:border-amber-400 honey-card-shadow transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-square w-full rounded-2xl bg-[#FAF7F2] p-4 flex items-center justify-center overflow-hidden mb-3">
                    <Image
                      src={rel.image}
                      alt={rel.name}
                      fill
                      className="object-contain p-2 group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <h4 className="font-serif text-base font-bold text-[#2D1A0E] group-hover:text-amber-800 transition-colors">
                    {rel.name}
                  </h4>
                  <p className="text-xs text-amber-800/70 mt-1 line-clamp-1">
                    {rel.tagline}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-amber-100 flex items-center justify-between">
                  <span className="text-sm font-black text-amber-700">
                    Rs. {rel.pricePKR.toLocaleString()}
                  </span>
                  <span className="text-xs font-bold text-[#2D1A0E] group-hover:underline">
                    View Honey →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Lab Report Modal */}
      {labModalOpen && (
        <div
          onClick={() => setLabModalOpen(false)}
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#FAF7F2] rounded-3xl p-6 sm:p-8 max-w-lg w-full border-2 border-amber-400 shadow-2xl relative"
          >
            <div className="flex items-center justify-between border-b border-amber-200 pb-4">
              <div>
                <span className="text-[10px] font-bold text-amber-800 uppercase tracking-widest block">
                  Official Quality Certificate
                </span>
                <h3 className="font-serif text-xl font-black text-[#2D1A0E]">
                  Lab Purity Verification
                </h3>
              </div>
              <button
                onClick={() => setLabModalOpen(false)}
                className="p-1.5 rounded-full hover:bg-amber-200 text-amber-900"
              >
                ✕
              </button>
            </div>

            <div className="my-5 space-y-3 text-xs sm:text-sm text-amber-950">
              <div className="p-3 rounded-xl bg-white border border-amber-200 flex justify-between">
                <span>Sample Name:</span>
                <strong>{product.name}</strong>
              </div>
              <div className="p-3 rounded-xl bg-white border border-amber-200 flex justify-between">
                <span>Origin:</span>
                <strong>{product.harvestLocation}</strong>
              </div>
              <div className="p-3 rounded-xl bg-white border border-amber-200 flex justify-between">
                <span>Floral Nectar:</span>
                <strong>{product.floralSource}</strong>
              </div>
              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 flex justify-between text-emerald-900">
                <span>Purity Status:</span>
                <strong>{product.labReport.purityPercentage} (100% Raw)</strong>
              </div>
              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 flex justify-between text-emerald-900">
                <span>Added Sucrose / Syrups:</span>
                <strong>{product.labReport.sucroseLevel} (Zero Added Sugar)</strong>
              </div>
            </div>

            <p className="text-[11px] text-amber-900/70 text-center leading-relaxed">
              Tested under PCSIR / Codex Alimentarius standards for unheated raw Pakistani bee honey.
            </p>

            <button
              onClick={() => setLabModalOpen(false)}
              className="mt-6 w-full py-2.5 rounded-full honey-gold-btn text-xs font-bold"
            >
              Close Certificate
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
