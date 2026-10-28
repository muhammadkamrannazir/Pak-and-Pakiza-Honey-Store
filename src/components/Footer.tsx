"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, MapPin, Mail, Phone } from "lucide-react";
import { BRAND_INFO } from "@/data/products";

export function Footer() {
  return (
    <footer className="relative bg-[#FAF7F2] pt-6 pb-12 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* Main Footer Box with Dashed Border (Exact Dribbble Match) */}
        <div className="rounded-[36px] border-2 border-dashed border-[#D2BA93] bg-[#FAF6EE]/80 px-6 sm:px-12 pt-10 pb-6 relative shadow-xs">
          {/* Centered Brand Logo */}
          <div className="flex flex-col items-center text-center">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 mb-2">
              <Image
                src="/logo.png"
                alt="Pak and Pakiza Logo"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-black text-[#2B1506] tracking-tight uppercase">
              Pak and Pakiza
            </h3>
            <span className="text-[10px] font-bold text-amber-800 tracking-widest uppercase mt-0.5">
              Pure Natural Honey
            </span>

            {/* Navigation Links */}
            <nav className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 my-7 text-xs sm:text-sm font-semibold text-[#2B1506]">
              <Link href="/" className="hover:text-amber-700 transition-colors">
                Home
              </Link>
              <Link href="/about" className="hover:text-amber-700 transition-colors">
                About Us
              </Link>
              <Link href="/shop" className="hover:text-amber-700 transition-colors inline-flex items-center gap-1">
                <span>Products</span>
                <ChevronDown className="w-3.5 h-3.5 text-amber-800" />
              </Link>
              <Link href="/#benefits" className="hover:text-amber-700 transition-colors">
                Blog
              </Link>
              <Link href="/contact" className="hover:text-amber-700 transition-colors">
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Suspended Wooden Swing Shelves on Golden Wire (Exact Dribbble Match) */}
          <div className="relative my-6 max-w-4xl mx-auto">
            {/* Horizontal Golden Rod */}
            <div className="relative w-full h-1 bg-[#D98E16] rounded-full flex items-center">
              {/* Left End Stop Ball */}
              <div className="absolute -left-1.5 w-3.5 h-3.5 rounded-full bg-[#D98E16] shadow-xs" />

              {/* Right End Stop Ball + Cute Bee sitting on line */}
              <div className="absolute -right-2 flex items-center">
                <div className="w-3.5 h-3.5 rounded-full bg-[#D98E16] shadow-xs" />
                <div className="relative w-8 h-8 -mt-5 -ml-1 pointer-events-none">
                  <Image
                    src="/assets/mascot_baby_bee.png"
                    alt="Bee on wire"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* 3 Hanging Wooden Platforms */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-3 relative">
              {/* Shelf 1: Our Address */}
              <div className="flex flex-col items-center text-center relative group">
                {/* Thin vertical hanging ropes */}
                <div className="w-px h-6 bg-[#C68010]" />

                {/* Dark Brown Tab */}
                <div className="px-5 py-1 rounded-t-xl bg-[#5C2B0B] text-white text-[11px] font-bold uppercase tracking-wider shadow-xs">
                  Our Address
                </div>

                {/* Wooden Platform Box */}
                <div className="w-full bg-[#F5ECE0] rounded-2xl p-4 border border-[#D9C4A5] shadow-sm flex items-center justify-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-amber-700 shadow-xs flex-shrink-0 border border-amber-200">
                    <MapPin className="w-4 h-4 text-amber-700" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-[#2B1506]">
                    Burewala, Punjab
                  </span>
                </div>

                {/* Wooden plank bottom ledge */}
                <div className="w-11/12 h-2.5 bg-gradient-to-r from-[#946132] via-[#B27C44] to-[#8C5A2C] rounded-b-lg shadow-md -mt-1" />
              </div>

              {/* Shelf 2: Email Us */}
              <div className="flex flex-col items-center text-center relative group">
                <div className="w-px h-6 bg-[#C68010]" />

                <div className="px-5 py-1 rounded-t-xl bg-[#5C2B0B] text-white text-[11px] font-bold uppercase tracking-wider shadow-xs">
                  Email Us
                </div>

                <div className="w-full bg-[#F5ECE0] rounded-2xl p-4 border border-[#D9C4A5] shadow-sm flex items-center justify-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-amber-700 shadow-xs flex-shrink-0 border border-amber-200">
                    <Mail className="w-4 h-4 text-amber-700" />
                  </div>
                  <a
                    href={`mailto:${BRAND_INFO.email}`}
                    className="text-xs sm:text-sm font-bold text-[#2B1506] hover:text-amber-800 truncate"
                  >
                    {BRAND_INFO.email}
                  </a>
                </div>

                <div className="w-11/12 h-2.5 bg-gradient-to-r from-[#946132] via-[#B27C44] to-[#8C5A2C] rounded-b-lg shadow-md -mt-1" />
              </div>

              {/* Shelf 3: Call Us */}
              <div className="flex flex-col items-center text-center relative group">
                <div className="w-px h-6 bg-[#C68010]" />

                <div className="px-5 py-1 rounded-t-xl bg-[#5C2B0B] text-white text-[11px] font-bold uppercase tracking-wider shadow-xs">
                  Call Us
                </div>

                <div className="w-full bg-[#F5ECE0] rounded-2xl p-4 border border-[#D9C4A5] shadow-sm flex items-center justify-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-amber-700 shadow-xs flex-shrink-0 border border-amber-200">
                    <Phone className="w-4 h-4 text-amber-700" />
                  </div>
                  <a
                    href={`https://wa.me/${BRAND_INFO.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm font-bold text-[#2B1506] hover:text-emerald-700"
                  >
                    {BRAND_INFO.whatsappFormatted}
                  </a>
                </div>

                <div className="w-11/12 h-2.5 bg-gradient-to-r from-[#946132] via-[#B27C44] to-[#8C5A2C] rounded-b-lg shadow-md -mt-1" />
              </div>
            </div>
          </div>

          {/* Golden Bottom Banner Strip (Exact Dribbble Match) */}
          <div className="mt-8 rounded-full bg-gradient-to-r from-[#EFA526] via-[#EA9A1B] to-[#E38B0F] px-6 py-3 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-bold text-[#2B1506]">
            <span>
              ©2026 Pak and Pakiza. All Rights Reserved.
            </span>

            <div className="flex items-center gap-2.5">
              <a
                href={BRAND_INFO.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 rounded-full bg-white text-[#2B1506] flex items-center justify-center hover:scale-110 transition-transform shadow-xs"
                aria-label="Instagram"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href={BRAND_INFO.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 rounded-full bg-white text-[#2B1506] flex items-center justify-center hover:scale-110 transition-transform shadow-xs"
                aria-label="Facebook"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.595 0 9 1.583 9 4.615V8z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
