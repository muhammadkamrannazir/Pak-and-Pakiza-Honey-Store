import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Award,
  Heart,
  Truck,
  CheckCircle2,
  Sparkles,
  MapPin,
  Phone
} from "lucide-react";
import { BRAND_INFO } from "@/data/products";

export const metadata = {
  title: "About Our Pure Honey Farm — Pak and Pakiza Burewala",
  description:
    "Learn about Pak and Pakiza's authentic beekeeping tradition in Burewala, Punjab. 100% cold-extracted, unheated raw honey with zero artificial sugars."
};

export default function AboutPage() {
  return (
    <div className="bg-[#FAF7F2] min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-800 bg-amber-100 px-4 py-1.5 rounded-full inline-block mb-3">
            Pure Raw Beekeeping • Burewala, Pakistan
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-black text-[#2D1A0E] tracking-tight leading-tight">
            Our Story — The Purity of Pak and Pakiza
          </h1>
          <p className="font-script text-2xl sm:text-3xl text-amber-700 font-bold mt-2">
            خالص اور پاکیزہ قدرتی شہد — فطرت کا انمول تحفہ
          </p>
          <p className="text-xs sm:text-sm text-amber-900/80 mt-4 leading-relaxed">
            Pak and Pakiza was born in Burewala, District Vehari, with a single steadfast mission: to deliver 100% genuine, unpasteurized, cold-extracted honey straight from organic beehives to Pakistani families without a single drop of adulteration.
          </p>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16 sm:mb-24">
          <div className="lg:col-span-6 relative aspect-4/3 rounded-3xl overflow-hidden border-2 border-amber-300 shadow-xl">
            <Image
              src="/assets/benefits_watercolor_meadow.png"
              alt="Pak and Pakiza Apiary Farm"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-amber-200">
              <span className="text-[11px] font-bold text-amber-800 uppercase tracking-widest block">
                Burewala Apiary Headquarters
              </span>
              <p className="text-xs text-amber-950 font-medium mt-0.5">
                Over 200 thriving colonies managed with natural, ethical beekeeping standards.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold text-amber-800 uppercase tracking-wider block">
              Our Philosophy
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-black text-[#2D1A0E]">
              Why &ldquo;Pak and Pakiza&rdquo;?
            </h2>
            <p className="text-xs sm:text-sm text-amber-900/80 leading-relaxed">
              In Urdu, <em>Pak</em> and <em>Pakiza</em> signify pristine purity, honesty, and sacred cleanliness. For centuries, honey has held an exalted station in Islamic sunnah as both profound nourishment and shifa (healing).
            </p>
            <p className="text-xs sm:text-sm text-amber-900/80 leading-relaxed">
              Tragically, modern commercial stores are flooded with heated, ultra-filtered corn syrups marketed as honey. At Pak and Pakiza, our bees forage exclusively on natural wildflowers and uncultivated blooms. We never heat our honey above hive temperatures, preserving its living enzymes, rich floral aromas, and delicate health benefits.
            </p>

            <div className="pt-2 grid grid-cols-2 gap-3 text-xs font-bold text-amber-950">
              <div className="p-3 bg-white rounded-2xl border border-amber-200 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                <span>Zero Heat Processing</span>
              </div>
              <div className="p-3 bg-white rounded-2xl border border-amber-200 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                <span>Zero Sugar Syrups</span>
              </div>
              <div className="p-3 bg-white rounded-2xl border border-amber-200 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                <span>Retains Live Pollen</span>
              </div>
              <div className="p-3 bg-white rounded-2xl border border-amber-200 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                <span>Rich in Propolis</span>
              </div>
            </div>
          </div>
        </div>

        {/* Seasonal Migration Section */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-amber-200/90 honey-card-shadow mb-16">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-800 bg-amber-100 px-3.5 py-1 rounded-full mb-2 inline-block">
              Following the Floral Seasons
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-black text-[#2D1A0E]">
              Our Migratory Beekeeping Journey
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-amber-200">
              <span className="text-xs font-black text-amber-700 block mb-1">
                SEASON 01 • SPRING
              </span>
              <h3 className="font-serif text-base font-bold text-[#2D1A0E]">
                Orange Blossom Groves
              </h3>
              <p className="text-xs text-amber-900/70 mt-2">
                Sargodha citrus orchards in full bloom, gathering delicate fragrant citrus nectar.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-amber-200">
              <span className="text-xs font-black text-amber-700 block mb-1">
                SEASON 02 • EARLY SUMMER
              </span>
              <h3 className="font-serif text-base font-bold text-[#2D1A0E]">
                Acacia Blossoms
              </h3>
              <p className="text-xs text-amber-900/70 mt-2">
                Himalayan foothills and Swat valleys, gathering crystal-clear mild Acacia honey.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-amber-200">
              <span className="text-xs font-black text-amber-700 block mb-1">
                SEASON 03 • LATE AUTUMN
              </span>
              <h3 className="font-serif text-base font-bold text-[#2D1A0E]">
                Sidr (Beri) Harvest
              </h3>
              <p className="text-xs text-amber-900/70 mt-2">
                Potohar and Karak mountains, harvesting thick, dark amber medicinal Beri honey.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-amber-200">
              <span className="text-xs font-black text-amber-700 block mb-1">
                SEASON 04 • WINTER
              </span>
              <h3 className="font-serif text-base font-bold text-[#2D1A0E]">
                Burewala Home Apiary
              </h3>
              <p className="text-xs text-amber-900/70 mt-2">
                Bees rest on pure honey reserves in Burewala hives, nourished naturally for the next cycle.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-center text-[#2D1A0E] shadow-xl">
          <h2 className="font-serif text-2xl sm:text-4xl font-black">
            Experience Pure Honey As Nature Intended
          </h2>
          <p className="text-xs sm:text-sm text-[#2D1A0E]/80 max-w-xl mx-auto mt-2 font-medium">
            Order online with Cash on Delivery nationwide, or message us directly on WhatsApp.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/shop"
              className="px-8 py-3.5 rounded-full bg-[#2D1A0E] hover:bg-[#451A03] text-amber-300 font-bold text-xs sm:text-sm transition-all shadow-md"
            >
              Shop Honey Collection
            </Link>
            <a
              href={`https://wa.me/${BRAND_INFO.whatsapp}?text=Assalam%20o%20Alaikum%20Pak%20and%20Pakiza%2C%20I%20want%20to%20learn%20more%20about%20your%20farm.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full bg-white hover:bg-amber-50 text-[#2D1A0E] font-bold text-xs sm:text-sm transition-all"
            >
              Chat on WhatsApp: +92 329 1384005
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
