"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  X,
  Trash2,
  Plus,
  Minus,
  ShoppingBag,
  ArrowRight,
  Truck,
  Sparkles,
  Phone
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import { BRAND_INFO } from "@/data/products";

export function CartDrawer() {
  const {
    items,
    isCartOpen,
    closeCart,
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

  if (!isCartOpen) return null;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputCoupon.trim()) return;
    const res = applyCoupon(inputCoupon);
    setCouponMessage({ text: res.message, error: !res.success });
    if (res.success) {
      setInputCoupon("");
    }
  };

  const generateWhatsAppOrderText = () => {
    let text = `*Assalam o Alaikum Pak and Pakiza Honey!*%0A%0A`;
    text += `I would like to place an order for pure honey:%0A`;
    items.forEach((item, idx) => {
      text += `${idx + 1}. *${item.product.name}* (${item.selectedSize.label}) x ${item.quantity} = Rs. ${(item.selectedSize.pricePKR * item.quantity).toLocaleString()}%0A`;
    });
    text += `%0A*Subtotal:* Rs. ${subtotal.toLocaleString()}%0A`;
    if (discountAmount > 0) {
      text += `*Discount:* -Rs. ${discountAmount.toLocaleString()}%0A`;
    }
    text += `*Delivery Fee:* ${deliveryFee === 0 ? "FREE" : `Rs. ${deliveryFee}`}%0A`;
    text += `*Total Amount:* Rs. ${total.toLocaleString()}%0A%0A`;
    text += `*Delivery Address:* [Please write your Name, Phone and City]%0A`;
    text += `Payment: Cash on Delivery (COD)`;
    return text;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={closeCart}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF7F2] shadow-2xl flex flex-col border-l border-amber-200 animate-in slide-in-from-right duration-300">
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-amber-200 flex items-center justify-between bg-white/70">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-amber-700" />
              <h2 className="font-serif text-lg sm:text-xl font-bold text-[#2D1A0E]">
                Your Honey Cart
              </h2>
              <span className="text-xs px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 font-bold">
                {items.length} {items.length === 1 ? "item" : "items"}
              </span>
            </div>
            <button
              onClick={closeCart}
              className="p-1.5 rounded-full hover:bg-amber-100 text-amber-900 transition-colors"
              aria-label="Close cart drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress */}
          <div className="bg-amber-50/90 border-b border-amber-200/80 px-4 py-3">
            <div className="flex items-center justify-between text-xs mb-1.5">
              <span className="flex items-center gap-1.5 font-medium text-amber-900">
                <Truck className="w-4 h-4 text-amber-600" />
                {freeShippingProgress.isEligible ? (
                  <span className="font-bold text-emerald-800">
                    🎉 You unlocked FREE Delivery across Pakistan!
                  </span>
                ) : (
                  <span>
                    Add <strong className="text-amber-800">Rs. {freeShippingProgress.needed.toLocaleString()}</strong> more for FREE Shipping!
                  </span>
                )}
              </span>
              <span className="font-bold text-amber-800">
                {freeShippingProgress.percentage}%
              </span>
            </div>
            <div className="w-full bg-amber-200/60 rounded-full h-2 overflow-hidden">
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

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                <div className="relative w-28 h-28 rounded-full bg-amber-100/60 flex items-center justify-center border border-amber-200">
                  <ShoppingBag className="w-12 h-12 text-amber-500" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#2D1A0E]">
                    Your cart is sweet & empty
                  </h3>
                  <p className="text-xs text-amber-800/70 mt-1 max-w-xs">
                    Treat yourself or your loved ones to Pak and Pakiza Honey.
                  </p>
                </div>
                <Link
                  href="/shop"
                  onClick={closeCart}
                  className="px-6 py-2.5 rounded-full honey-gold-btn text-xs font-bold inline-flex items-center gap-2"
                >
                  <span>Explore Pure Honey</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl p-3 border border-amber-200/80 shadow-sm flex gap-3 relative group"
                >
                  {/* Thumbnail */}
                  <div className="relative w-18 h-18 sm:w-20 sm:h-20 rounded-xl bg-[#FAF7F2] overflow-hidden border border-amber-100 flex-shrink-0">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      className="object-contain p-1.5"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-1">
                        <h4 className="text-sm font-bold text-[#2D1A0E] truncate">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-amber-800/40 hover:text-red-500 transition-colors p-1"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <span className="inline-block mt-0.5 text-[11px] font-semibold text-amber-800 bg-amber-100/80 px-2 py-0.5 rounded-md">
                        {item.selectedSize.label}
                      </span>
                    </div>

                    <div className="flex items-center justify-between mt-2 pt-1">
                      <div className="flex items-center border border-amber-200 rounded-lg bg-[#FAF7F2] overflow-hidden">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:bg-amber-200/60 text-[#2D1A0E] transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2.5 text-xs font-bold text-[#2D1A0E]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:bg-amber-200/60 text-[#2D1A0E] transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <div className="text-right">
                        <span className="text-sm font-black text-amber-700">
                          Rs. {(item.selectedSize.pricePKR * item.quantity).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Checkout Summary */}
          {items.length > 0 && (
            <div className="p-4 sm:p-5 border-t border-amber-200 bg-white/90 space-y-3">
              {/* Promo Coupon Box */}
              {couponCode ? (
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs">
                  <span className="flex items-center gap-1.5 text-emerald-800 font-bold">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                    Coupon &quot;{couponCode}&quot; active (-Rs. {discountAmount.toLocaleString()})
                  </span>
                  <button
                    onClick={removeCoupon}
                    className="text-red-600 hover:text-red-800 font-bold ml-2 underline text-[11px]"
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApplyCoupon} className="flex gap-2">
                  <input
                    type="text"
                    value={inputCoupon}
                    onChange={(e) => setInputCoupon(e.target.value)}
                    placeholder="Discount code (e.g. PAKIZA10)"
                    className="flex-1 px-3 py-1.5 rounded-xl border border-amber-200 text-xs text-[#2D1A0E] outline-none focus:border-amber-500 bg-[#FAF7F2]"
                  />
                  <button
                    type="submit"
                    className="px-3.5 py-1.5 rounded-xl bg-amber-800 hover:bg-amber-900 text-white text-xs font-bold transition-colors"
                  >
                    Apply
                  </button>
                </form>
              )}

              {couponMessage && (
                <p
                  className={`text-[11px] font-medium ${
                    couponMessage.error ? "text-red-600" : "text-emerald-700"
                  }`}
                >
                  {couponMessage.text}
                </p>
              )}

              {/* Price Breakdown */}
              <div className="space-y-1.5 text-xs text-amber-900/80 pt-1">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-bold text-[#2D1A0E]">
                    Rs. {subtotal.toLocaleString()}
                  </span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-700 font-medium">
                    <span>Discount</span>
                    <span>-Rs. {discountAmount.toLocaleString()}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Delivery (TCS Nationwide)</span>
                  <span className="font-bold">
                    {deliveryFee === 0 ? (
                      <span className="text-emerald-700">FREE</span>
                    ) : (
                      `Rs. ${deliveryFee}`
                    )}
                  </span>
                </div>
                <div className="flex justify-between text-sm sm:text-base font-black text-[#2D1A0E] pt-2 border-t border-amber-200">
                  <span>Total Amount</span>
                  <span className="text-amber-700">Rs. {total.toLocaleString()}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 space-y-2">
                <Link
                  href="/checkout"
                  onClick={closeCart}
                  className="w-full py-3 rounded-xl honey-gold-btn text-xs sm:text-sm font-bold flex items-center justify-center gap-2 text-center"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={`https://wa.me/${BRAND_INFO.whatsapp}?text=${generateWhatsAppOrderText()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Instant WhatsApp Order</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
