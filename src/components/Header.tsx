"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Search, ChevronDown, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { BRAND_INFO, PRODUCTS } from "@/data/products";

export function Header() {
  const pathname = usePathname();
  const { totalItemCount, openCart } = useCart();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const filteredProducts = searchQuery.trim()
    ? PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <header className="relative w-full z-40 bg-transparent pt-4 sm:pt-6 pb-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Logo (Matches Dribbble: Logo + Brand Name) */}
          <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0">
              <Image
                src="/logo.png"
                alt="Pak and Pakiza Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-black tracking-tight text-[#2B1506] uppercase leading-none">
                Pak and Pakiza
              </span>
              <span className="text-[10px] sm:text-[11px] font-bold text-amber-800/80 tracking-widest uppercase mt-0.5">
                Pure Honey • Burewala
              </span>
            </div>
          </Link>

          {/* Center Navigation Links (Matches Dribbble: Home, About Us, Products ▾, Blog, Contact Us) */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className={`text-sm font-semibold transition-colors ${
                pathname === "/" ? "text-[#2B1506] font-bold" : "text-[#4A2610] hover:text-amber-700"
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`text-sm font-semibold transition-colors ${
                pathname === "/about" ? "text-[#2B1506] font-bold" : "text-[#4A2610] hover:text-amber-700"
              }`}
            >
              About Us
            </Link>
            <div className="relative group">
              <Link
                href="/shop"
                className="text-sm font-semibold text-[#4A2610] hover:text-amber-700 transition-colors inline-flex items-center gap-1"
              >
                <span>Products</span>
                <ChevronDown className="w-3.5 h-3.5 text-amber-800" />
              </Link>
              <div className="absolute top-full left-0 mt-2 w-52 bg-white rounded-2xl shadow-xl border border-amber-200 py-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 z-50">
                {PRODUCTS.map((p) => (
                  <Link
                    key={p.id}
                    href={`/product/${p.slug}`}
                    className="block px-4 py-2 text-xs font-semibold text-[#2B1506] hover:bg-amber-50"
                  >
                    {p.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link
              href="/#benefits"
              className="text-sm font-semibold text-[#4A2610] hover:text-amber-700 transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className={`text-sm font-semibold transition-colors ${
                pathname === "/contact" ? "text-[#2B1506] font-bold" : "text-[#4A2610] hover:text-amber-700"
              }`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Right: Golden Search Pill + Cart Trigger (Matches Dribbble Search Pill) */}
          <div className="flex items-center gap-3">
            {/* Search Pill */}
            <div className="relative hidden sm:flex items-center">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (searchQuery.trim()) setSearchOpen(true);
                }}
                className="relative flex items-center"
              >
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setSearchOpen(true)}
                  placeholder="Search"
                  className="w-40 md:w-56 py-1.5 pl-4 pr-9 rounded-full bg-gradient-to-r from-[#EFA526] via-[#EA9A1B] to-[#E38B0F] text-[#2B1506] placeholder-[#5C320A] text-xs font-bold outline-none shadow-sm hover:shadow-md transition-all cursor-pointer"
                />
                <button
                  type="submit"
                  className="absolute right-3 text-[#2B1506] hover:scale-110 transition-transform"
                  aria-label="Search"
                >
                  <Search className="w-3.5 h-3.5 stroke-[2.5]" />
                </button>
              </form>
            </div>

            {/* Shopping Cart Pill Button */}
            <button
              onClick={openCart}
              className="relative p-2 sm:px-3 sm:py-1.5 rounded-full bg-white/90 hover:bg-amber-100/80 border border-amber-300 text-[#2B1506] flex items-center gap-1.5 shadow-sm transition-all hover:scale-105"
              aria-label="Shopping Cart"
            >
              <ShoppingBag className="w-4 h-4 text-[#2B1506]" />
              <span className="hidden md:inline text-xs font-bold text-[#2B1506]">
                Cart
              </span>
              {totalItemCount > 0 && (
                <span className="w-4 h-4 rounded-full bg-[#2B1506] text-amber-300 text-[10px] font-extrabold flex items-center justify-center">
                  {totalItemCount}
                </span>
              )}
            </button>

            {/* Mobile Hamburger Menu */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#2B1506] hover:bg-amber-100 rounded-xl"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF7F2] border-t border-amber-200 px-6 py-4 space-y-3 shadow-lg">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-bold text-[#2B1506] py-1"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-bold text-[#2B1506] py-1"
          >
            About Us
          </Link>
          <Link
            href="/shop"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-bold text-[#2B1506] py-1"
          >
            Products
          </Link>
          <Link
            href="/#benefits"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-bold text-[#2B1506] py-1"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-bold text-[#2B1506] py-1"
          >
            Contact Us
          </Link>
          <Link
            href="/track-order"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-bold text-amber-800 py-1"
          >
            Track Order
          </Link>
          <Link
            href="/admin"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-bold text-amber-800/80 py-1"
          >
            Admin Portal
          </Link>
        </div>
      )}

      {/* Search Popup Dropdown */}
      {searchOpen && searchQuery.trim() && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-start justify-center pt-24 px-4">
          <div className="bg-[#FAF7F2] w-full max-w-lg rounded-3xl p-5 shadow-2xl border-2 border-amber-300">
            <div className="flex items-center justify-between border-b border-amber-200 pb-3">
              <span className="text-xs font-bold text-amber-900 uppercase">
                Search Results for &ldquo;{searchQuery}&rdquo;
              </span>
              <button
                onClick={() => setSearchOpen(false)}
                className="p-1 rounded-full hover:bg-amber-100 text-amber-900"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="mt-3 space-y-2 max-h-80 overflow-y-auto">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((p) => (
                  <Link
                    key={p.id}
                    href={`/product/${p.slug}`}
                    onClick={() => setSearchOpen(false)}
                    className="flex items-center gap-3 p-2 rounded-2xl hover:bg-white transition-colors"
                  >
                    <div className="relative w-12 h-12 rounded-xl bg-white p-1 border border-amber-200 flex-shrink-0">
                      <Image
                        src={p.image}
                        alt={p.name}
                        fill
                        className="object-contain p-1"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-bold text-[#2B1506] truncate">
                        {p.name}
                      </h4>
                      <p className="text-[11px] text-amber-800/70 truncate">{p.tagline}</p>
                    </div>
                    <span className="text-xs font-black text-amber-700">
                      Rs. {p.pricePKR.toLocaleString()}
                    </span>
                  </Link>
                ))
              ) : (
                <p className="text-center text-xs text-amber-900/60 py-6">
                  No honey varieties found matching your search.
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
