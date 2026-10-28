"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ShieldCheck,
  Truck,
  CheckCircle2,
  Lock,
  ArrowRight,
  Phone,
  Banknote,
  Smartphone,
  Building2
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useOrders } from "@/context/OrderContext";
import { BRAND_INFO } from "@/data/products";
import { OrderItem } from "@/types";

const PAKISTAN_CITIES = [
  "Burewala",
  "Lahore",
  "Karachi",
  "Islamabad",
  "Rawalpindi",
  "Faisalabad",
  "Multan",
  "Vehari",
  "Sahiwal",
  "Mian Channu",
  "Chichawatni",
  "Peshawar",
  "Quetta",
  "Gujranwala",
  "Sialkot",
  "Sargodha",
  "Bahawalpur",
  "Sheikhupura",
  "Jhang",
  "Rahim Yar Khan",
  "Gujrat",
  "Kasur",
  "Dera Ghazi Khan",
  "Muzaffargarh",
  "Okara",
  "Abbottabad",
  "Mardan",
  "Swat",
  "Other City"
];

const PROVINCES = [
  "Punjab",
  "Sindh",
  "Khyber Pakhtunkhwa",
  "Balochistan",
  "Islamabad Capital Territory",
  "Azad Jammu & Kashmir",
  "Gilgit-Baltistan"
];

export default function CheckoutPage() {
  const router = useRouter();
  const { items, subtotal, deliveryFee, discountAmount, total, clearCart } = useCart();
  const { createOrder } = useOrders();

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("Burewala");
  const [province, setProvince] = useState("Punjab");
  const [postalCode, setPostalCode] = useState("");
  const [deliveryNotes, setDeliveryNotes] = useState("");

  const [paymentMethod, setPaymentMethod] = useState<"cod" | "jazzcash" | "easypaisa" | "bank_transfer">("cod");
  const [transactionId, setTransactionId] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-[#FAF7F2] py-16 flex items-center justify-center px-4">
        <div className="bg-white rounded-3xl p-8 max-w-md w-full border border-amber-200 text-center space-y-4 shadow-sm">
          <h2 className="font-serif text-2xl font-bold text-[#2D1A0E]">
            Your Cart is Empty
          </h2>
          <p className="text-xs text-amber-900/70">
            Please add honey items to your cart before proceeding to checkout.
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full honey-gold-btn text-xs font-bold"
          >
            <span>Browse Honeys</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    );
  }

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!fullName.trim()) {
      setErrorMessage("Please enter your full name.");
      return;
    }
    if (!phone.trim() || phone.trim().length < 10) {
      setErrorMessage("Please enter a valid WhatsApp / contact phone number.");
      return;
    }
    if (!address.trim()) {
      setErrorMessage("Please enter your complete delivery address.");
      return;
    }

    setIsSubmitting(true);

    const orderItems: OrderItem[] = items.map((i) => ({
      productId: i.product.id,
      name: i.product.name,
      sizeLabel: i.selectedSize.label,
      unitPrice: i.selectedSize.pricePKR,
      quantity: i.quantity,
      subtotal: i.selectedSize.pricePKR * i.quantity,
      image: i.product.image
    }));

    const newOrder = createOrder({
      customer: {
        fullName: fullName.trim(),
        phone: phone.trim(),
        email: email.trim() || undefined,
        address: address.trim(),
        city,
        province,
        postalCode: postalCode.trim() || undefined,
        deliveryNotes: deliveryNotes.trim() || undefined
      },
      items: orderItems,
      subtotal,
      deliveryFee,
      discount: discountAmount,
      total,
      paymentMethod,
      paymentStatus: paymentMethod === "cod" ? "cash_on_delivery" : "pending"
    });

    clearCart();
    router.push(`/order-confirmation/${newOrder.id}`);
  };

  return (
    <div className="bg-[#FAF7F2] min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-800 bg-amber-100 px-3.5 py-1 rounded-full mb-2 inline-block">
            Fast &amp; Secure Checkout
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-black text-[#2D1A0E] tracking-tight">
            Checkout — Delivery Details
          </h1>
          <p className="text-xs sm:text-sm text-amber-900/70 mt-1">
            Cash on Delivery nationwide with safe thermal insulated packaging.
          </p>
        </div>

        <form onSubmit={handleSubmitOrder}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column: Delivery Form & Payment Method */}
            <div className="lg:col-span-7 space-y-6">
              {/* Shipping Address Card */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-200/90 honey-card-shadow space-y-4">
                <div className="flex items-center gap-2 border-b border-amber-200 pb-3">
                  <Truck className="w-5 h-5 text-amber-700" />
                  <h2 className="font-serif text-lg font-bold text-[#2D1A0E]">
                    1. Shipping Information
                  </h2>
                </div>

                {errorMessage && (
                  <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold">
                    {errorMessage}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-amber-950 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Muhammad Usman"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-amber-200 text-xs sm:text-sm bg-[#FAF7F2] text-[#2D1A0E] outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-amber-950 mb-1">
                      WhatsApp / Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. 0329 1384005"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-amber-200 text-xs sm:text-sm bg-[#FAF7F2] text-[#2D1A0E] outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-amber-950 mb-1">
                    Email Address (Optional, for tracking receipt)
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. name@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-amber-200 text-xs sm:text-sm bg-[#FAF7F2] text-[#2D1A0E] outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-amber-950 mb-1">
                    Complete Street Address *
                  </label>
                  <textarea
                    rows={2}
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="House / Flat No., Street, Mohalla / Sector / Block, Landmark"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-amber-200 text-xs sm:text-sm bg-[#FAF7F2] text-[#2D1A0E] outline-none focus:border-amber-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-amber-950 mb-1">
                      City *
                    </label>
                    <select
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-amber-200 text-xs sm:text-sm bg-[#FAF7F2] text-[#2D1A0E] outline-none focus:border-amber-500 cursor-pointer font-medium"
                    >
                      {PAKISTAN_CITIES.map((c) => (
                        <option key={c} value={c}>
                          {c} {c === "Burewala" ? "(Our Home Apiary)" : ""}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-amber-950 mb-1">
                      Province / Region *
                    </label>
                    <select
                      value={province}
                      onChange={(e) => setProvince(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-amber-200 text-xs sm:text-sm bg-[#FAF7F2] text-[#2D1A0E] outline-none focus:border-amber-500 cursor-pointer font-medium"
                    >
                      {PROVINCES.map((p) => (
                        <option key={p} value={p}>
                          {p}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-amber-950 mb-1">
                    Delivery Instructions / Notes (Optional)
                  </label>
                  <input
                    type="text"
                    value={deliveryNotes}
                    onChange={(e) => setDeliveryNotes(e.target.value)}
                    placeholder="e.g. Please call before arriving or deliver after 2 PM"
                    className="w-full px-3.5 py-2 rounded-xl border border-amber-200 text-xs bg-[#FAF7F2] text-[#2D1A0E] outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              {/* Payment Method Card */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-200/90 honey-card-shadow space-y-4">
                <div className="flex items-center gap-2 border-b border-amber-200 pb-3">
                  <Banknote className="w-5 h-5 text-amber-700" />
                  <h2 className="font-serif text-lg font-bold text-[#2D1A0E]">
                    2. Payment Method
                  </h2>
                </div>

                <div className="space-y-3">
                  {/* COD */}
                  <label
                    className={`flex items-start gap-3 p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                      paymentMethod === "cod"
                        ? "border-amber-500 bg-amber-50/70 shadow-xs"
                        : "border-amber-200 hover:border-amber-300 bg-white"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === "cod"}
                      onChange={() => setPaymentMethod("cod")}
                      className="mt-1 text-amber-600 focus:ring-amber-500"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-[#2D1A0E]">
                          Cash on Delivery (COD)
                        </span>
                        <span className="text-[10px] font-black uppercase bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">
                          Recommended
                        </span>
                      </div>
                      <p className="text-xs text-amber-900/70 mt-0.5">
                        Pay in cash directly to the courier rider upon receiving and inspecting your honey jar at your doorstep.
                      </p>
                    </div>
                  </label>

                  {/* JazzCash / EasyPaisa */}
                  <label
                    className={`flex items-start gap-3 p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                      paymentMethod === "jazzcash"
                        ? "border-amber-500 bg-amber-50/70 shadow-xs"
                        : "border-amber-200 hover:border-amber-300 bg-white"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === "jazzcash"}
                      onChange={() => setPaymentMethod("jazzcash")}
                      className="mt-1 text-amber-600 focus:ring-amber-500"
                    />
                    <div>
                      <span className="font-bold text-sm text-[#2D1A0E]">
                        JazzCash / EasyPaisa (Mobile Wallet)
                      </span>
                      <p className="text-xs text-amber-900/70 mt-0.5">
                        Transfer to <strong>0329 1384005</strong> (Title: Pak and Pakiza). Fast confirmation via WhatsApp.
                      </p>
                    </div>
                  </label>

                  {/* Bank Transfer */}
                  <label
                    className={`flex items-start gap-3 p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                      paymentMethod === "bank_transfer"
                        ? "border-amber-500 bg-amber-50/70 shadow-xs"
                        : "border-amber-200 hover:border-amber-300 bg-white"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === "bank_transfer"}
                      onChange={() => setPaymentMethod("bank_transfer")}
                      className="mt-1 text-amber-600 focus:ring-amber-500"
                    />
                    <div>
                      <span className="font-bold text-sm text-[#2D1A0E]">
                        Direct Bank Transfer / Raast ID
                      </span>
                      <p className="text-xs text-amber-900/70 mt-0.5">
                        Transfer directly to our Meezan Bank account or Raast ID: 03291384005.
                      </p>
                    </div>
                  </label>
                </div>

                {paymentMethod !== "cod" && (
                  <div className="p-3.5 rounded-xl bg-amber-100/70 border border-amber-300/80 text-xs text-amber-950 space-y-1">
                    <p className="font-bold">
                      Payment Account Details:
                    </p>
                    <p>Meezan Bank Ltd | Account: 0284-0104829104 | Title: Pak and Pakiza</p>
                    <p>Raast / JazzCash: 0329 1384005</p>
                    <p className="text-[11px] text-amber-800/80">
                      You can also share your payment screenshot on WhatsApp after placing the order.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: Order Review & Confirmation */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-200/90 honey-card-shadow space-y-4 sticky top-24">
                <h3 className="font-serif text-lg font-bold text-[#2D1A0E] border-b border-amber-200 pb-3">
                  Order Review ({items.length} {items.length === 1 ? "item" : "items"})
                </h3>

                {/* Items preview */}
                <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center gap-3 text-xs">
                      <div className="relative w-12 h-12 rounded-xl bg-[#FAF7F2] p-1 flex-shrink-0 border border-amber-100">
                        <Image
                          src={item.product.image}
                          alt={item.product.name}
                          fill
                          className="object-contain p-1"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-[#2D1A0E] truncate">
                          {item.product.name}
                        </h4>
                        <span className="text-[11px] text-amber-800">
                          {item.selectedSize.label} × {item.quantity}
                        </span>
                      </div>
                      <span className="font-black text-amber-700">
                        Rs. {(item.selectedSize.pricePKR * item.quantity).toLocaleString()}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Pricing Summary */}
                <div className="pt-3 border-t border-amber-100 space-y-2 text-xs sm:text-sm text-amber-950/80">
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
                    <span>Courier Delivery (TCS)</span>
                    <span className="font-bold">
                      {deliveryFee === 0 ? (
                        <span className="text-emerald-700 font-bold">FREE</span>
                      ) : (
                        `Rs. ${deliveryFee}`
                      )}
                    </span>
                  </div>

                  <div className="flex justify-between text-base sm:text-lg font-black text-[#2D1A0E] pt-3 border-t border-amber-200">
                    <span>Total Payable</span>
                    <span className="text-amber-700">Rs. {total.toLocaleString()}</span>
                  </div>
                </div>

                {/* Submit Order Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-full honey-gold-btn text-xs sm:text-sm font-black flex items-center justify-center gap-2 shadow-lg transition-all hover:scale-102 mt-4"
                >
                  <Lock className="w-4 h-4" />
                  <span>
                    {isSubmitting
                      ? "Placing Order..."
                      : `Place Order — Rs. ${total.toLocaleString()}`}
                  </span>
                </button>

                <div className="pt-3 border-t border-amber-100 space-y-2 text-[11px] text-amber-900/70 text-center">
                  <p className="flex items-center justify-center gap-1.5 font-semibold text-emerald-800">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    100% Pure Honey Guarantee • Inspect Parcel on Delivery
                  </p>
                  <p>
                    Questions? Call or WhatsApp Burewala Office: <strong>+92 329 1384005</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
