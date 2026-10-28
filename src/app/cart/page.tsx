"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Trash2,
  Plus,
  Minus,
  ShoppingBag,
  ArrowRight,
  Truck,
  Sparkles,
  Phone,
  ShieldCheck,
  RotateCcw
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import { BRAND_INFO } from "@/data/products";

export default function CartPage() {
  const {
    items,
    removeFromCart,
    updateQuantity,
    subtotal,
    deliveryFee,
    discountAmount,
    total,
    couponCode,
    applyCoupon,
    removeCoupon,
    freeShippingProgress
  } = useCart();

  const [inputCoupon, setInputCoupon] = useState("");
  const [couponMessage, setCouponMessage] = useState<{ text: string; error?: boolean } | null>(null);

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputCoupon.trim()) return;
    const res = applyCoupon(inputCoupon);
    setCouponMessage({ text: res.message, error: !res.success });
    if (res.success) setInputCoupon("");
  };

  const generateWhatsAppOrderText = () => {
    let text = `*Assalam o Alaikum Pak and Pakiza Honey!*%0A%0A`;
    text += `I would like to place an order:%0A`;
    items.forEach((item, idx) => {
      text += `${idx + 1}. *${item.product.name}* (${item.selectedSize.label}) x ${item.quantity} = Rs. ${(item.selectedSize.pricePKR * item.quantity).toLocaleString()}%0A`;
    });
    text += `%0A*Subtotal:* Rs. ${subtotal.toLocaleString()}%0A`;
    if (discountAmount > 0) {
      text += `*Discount:* -Rs. ${discountAmount.toLocaleString()}%0A`;
    }
    text += `*Delivery:* ${deliveryFee === 0 ? "FREE" : `Rs. ${deliveryFee}`}%0A`;
    text += `*Total:* Rs. ${total.toLocaleString()}%0A`;
    return text;
  };

  return (
    <div className="bg-[#FAF7F2] min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-12">
          <h1 className="font-serif text-3xl sm:text-4xl font-black text-[#2D1A0E] tracking-tight">
            Shopping Cart
          </h1>
          <p className="text-xs sm:text-sm text-amber-900/70 mt-1">
            Review your pure raw honey selection before checkout.
          </p>
        </div>

        {items.length === 0 ? (
          <div className="max-w-md mx-auto bg-white rounded-3xl p-10 border border-amber-200 text-center space-y-4 shadow-sm">
            <div className="w-20 h-20 rounded-full bg-amber-100 flex items-center justify-center mx-auto text-amber-600">
              <ShoppingBag className="w-10 h-10" />
            </div>
            <h2 className="font-serif text-2xl font-bold text-[#2D1A0E]">
              Your Cart is Empty
            </h2>
            <p className="text-xs text-amber-900/70">
              Discover our cold-extracted Sidr, Choti Makhi, and Honeycomb straight from Burewala.
            </p>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full honey-gold-btn text-xs font-bold shadow-md"
            >
              <span>Explore Honey Shop</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Items Column */}
            <div className="lg:col-span-8 space-y-4">
              {/* Free Shipping Bar */}
              <div className="bg-amber-50 rounded-2xl p-4 border border-amber-200">
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="flex items-center gap-1.5 font-bold text-amber-950">
                    <Truck className="w-4 h-4 text-amber-700" />
                    {freeShippingProgress.isEligible ? (
                      <span className="text-emerald-800">
                        🎉 Congratulations! You have unlocked FREE Shipping across Pakistan.
                      </span>
                    ) : (
                      <span>
                        Add <strong>Rs. {freeShippingProgress.needed.toLocaleString()}</strong> more to get FREE Delivery!
                      </span>
                    )}
                  </span>
                  <span className="font-black text-amber-800">
                    {freeShippingProgress.percentage}%
                  </span>
                </div>
                <div className="w-full bg-amber-200/60 rounded-full h-2.5 overflow-hidden">
                  <div
                    className={`h-full transition-all duration-500 rounded-full ${
                      freeShippingProgress.isEligible
                        ? "bg-emerald-600"
                        : "bg-gradient-to-r from-amber-400 to-amber-600"
                    }`}
                    style={{ width: `${freeShippingProgress.percentage}%` }}
                  />
                </div>
              </div>

              {/* Items Card List */}
              <div className="bg-white rounded-3xl p-6 border border-amber-200/90 honey-card-shadow divide-y divide-amber-100">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="py-4 first:pt-0 last:pb-0 flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4"
                  >
                    <div className="flex items-center gap-4 w-full sm:w-auto">
                      <div className="relative w-20 h-20 rounded-2xl bg-[#FAF7F2] p-2 flex-shrink-0 border border-amber-100">
                        <Image
                          src={item.product.image}
                          alt={item.product.name}
                          fill
                          className="object-contain p-1"
                        />
                      </div>
                      <div>
                        <Link
                          href={`/product/${item.product.slug}`}
                          className="font-serif text-base sm:text-lg font-bold text-[#2D1A0E] hover:text-amber-800 transition-colors"
                        >
                          {item.product.name}
                        </Link>
                        <span className="inline-block mt-1 text-xs font-semibold text-amber-900 bg-amber-100 px-2.5 py-0.5 rounded-full">
                          {item.selectedSize.label}
                        </span>
                        <span className="block text-xs text-amber-900/60 mt-1">
                          Rs. {item.selectedSize.pricePKR.toLocaleString()} each
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto">
                      <div className="flex items-center border border-amber-200 rounded-xl bg-[#FAF7F2] overflow-hidden">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1.5 hover:bg-amber-200 text-[#2D1A0E] transition-colors"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-3 text-xs font-black text-[#2D1A0E]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1.5 hover:bg-amber-200 text-[#2D1A0E] transition-colors"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <span className="text-base font-black text-amber-700 min-w-24 text-right">
                        Rs. {(item.selectedSize.pricePKR * item.quantity).toLocaleString()}
                      </span>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-amber-800/40 hover:text-red-600 transition-colors p-1"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Guarantees */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center text-xs">
                <div className="p-3 bg-white rounded-2xl border border-amber-200/80">
                  <ShieldCheck className="w-4 h-4 text-emerald-700 mx-auto mb-1" />
                  <span className="font-bold text-[#2D1A0E]">100% Raw Guaranteed</span>
                </div>
                <div className="p-3 bg-white rounded-2xl border border-amber-200/80">
                  <Truck className="w-4 h-4 text-amber-700 mx-auto mb-1" />
                  <span className="font-bold text-[#2D1A0E]">Nationwide Delivery</span>
                </div>
                <div className="p-3 bg-white rounded-2xl border border-amber-200/80">
                  <RotateCcw className="w-4 h-4 text-amber-700 mx-auto mb-1" />
                  <span className="font-bold text-[#2D1A0E]">Cash on Delivery</span>
                </div>
              </div>
            </div>

            {/* Order Summary Column */}
            <div className="lg:col-span-4">
              <div className="bg-white rounded-3xl p-6 border border-amber-200/90 honey-card-shadow space-y-4 sticky top-24">
                <h3 className="font-serif text-lg font-bold text-[#2D1A0E] border-b border-amber-200 pb-3">
                  Order Summary
                </h3>

                {/* Promo Code Input */}
                {couponCode ? (
                  <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-between text-xs">
                    <span className="font-bold text-emerald-800 flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                      Coupon: {couponCode}
                    </span>
                    <button
                      onClick={removeCoupon}
                      className="text-red-600 underline font-bold"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleApply} className="flex gap-2">
                    <input
                      type="text"
                      value={inputCoupon}
                      onChange={(e) => setInputCoupon(e.target.value)}
                      placeholder="Promo Code (e.g. PAKIZA10)"
                      className="flex-1 px-3 py-2 rounded-xl border border-amber-200 text-xs outline-none bg-[#FAF7F2] text-[#2D1A0E]"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 rounded-xl bg-[#2D1A0E] text-white text-xs font-bold hover:bg-[#451A03] transition-colors"
                    >
                      Apply
                    </button>
                  </form>
                )}

                {couponMessage && (
                  <p
                    className={`text-[11px] font-semibold ${
                      couponMessage.error ? "text-red-600" : "text-emerald-700"
                    }`}
                  >
                    {couponMessage.text}
                  </p>
                )}

                {/* Pricing Breakdown */}
                <div className="space-y-2 text-xs sm:text-sm text-amber-950/80 pt-2 border-t border-amber-100">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-bold text-[#2D1A0E]">
                      Rs. {subtotal.toLocaleString()}
                    </span>
                  </div>
                  {discountAmount > 0 && (
                    <div className="flex justify-between text-emerald-700 font-bold">
                      <span>Discount</span>
                      <span>-Rs. {discountAmount.toLocaleString()}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span>Delivery (TCS Nationwide)</span>
                    <span className="font-bold">
                      {deliveryFee === 0 ? (
                        <span className="text-emerald-700 font-bold">FREE</span>
                      ) : (
                        `Rs. ${deliveryFee}`
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between text-base font-black text-[#2D1A0E] pt-3 border-t border-amber-200">
                    <span>Total Amount</span>
                    <span className="text-amber-700">Rs. {total.toLocaleString()}</span>
                  </div>
                </div>

                {/* Checkout Actions */}
                <div className="pt-2 space-y-2.5">
                  <Link
                    href="/checkout"
                    className="w-full py-3.5 rounded-full honey-gold-btn text-xs sm:text-sm font-black flex items-center justify-center gap-2 shadow-md text-center"
                  >
                    <span>Proceed to Checkout</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <a
                    href={`https://wa.me/${BRAND_INFO.whatsapp}?text=${generateWhatsAppOrderText()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors shadow-sm"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Confirm via WhatsApp (+92 329 1384005)</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
