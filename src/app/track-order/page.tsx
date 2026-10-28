"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  Package,
  Truck,
  CheckCircle2,
  Clock,
  Phone,
  MapPin,
  ArrowRight
} from "lucide-react";
import { useOrders } from "@/context/OrderContext";
import { Order } from "@/types";
import { BRAND_INFO } from "@/data/products";

export default function TrackOrderPage() {
  const { orders, getOrderByTracking } = useOrders();
  const [query, setQuery] = useState("");
  const [searchedOrder, setSearchedOrder] = useState<Order | null>(orders[0] || null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    setHasSearched(true);
    const found = getOrderByTracking(query);
    setSearchedOrder(found || null);
  };

  const getStatusStepIndex = (status: Order["status"]) => {
    switch (status) {
      case "pending":
        return 0;
      case "confirmed":
        return 1;
      case "packed":
        return 2;
      case "shipped":
        return 3;
      case "delivered":
        return 4;
      default:
        return 0;
    }
  };

  const currentStep = searchedOrder ? getStatusStepIndex(searchedOrder.status) : 0;

  const timelineSteps = [
    { title: "Order Placed", desc: "Order details received in system" },
    { title: "Verified", desc: "Phone verification completed" },
    { title: "Packed & Sealed", desc: "Insulated glass jar bubblewrap" },
    { title: "Dispatched", desc: "Handed over to TCS / Leopards" },
    { title: "Delivered", desc: "Successfully received by customer" }
  ];

  return (
    <div className="bg-[#FAF7F2] min-h-screen py-10 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-800 bg-amber-100 px-3.5 py-1 rounded-full mb-2 inline-block">
            Nationwide Logistics Tracking
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-black text-[#2D1A0E] tracking-tight">
            Track Your Honey Order
          </h1>
          <p className="text-xs sm:text-sm text-amber-900/70 mt-1">
            Enter your Order ID (e.g. PKP-7419), TCS tracking code, or WhatsApp phone number.
          </p>
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-200/90 honey-card-shadow mb-8">
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="w-5 h-5 text-amber-600 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter Order ID (PKP-...), TCS Tracking, or Mobile Number"
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-amber-200 text-xs sm:text-sm text-[#2D1A0E] bg-[#FAF7F2] outline-none focus:border-amber-500 font-medium"
              />
            </div>
            <button
              type="submit"
              className="py-3.5 px-8 rounded-2xl honey-gold-btn text-xs sm:text-sm font-bold shadow-md"
            >
              Track Order
            </button>
          </form>

          {/* Quick Demo links */}
          <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-amber-900/70">
            <span className="font-bold">Try Sample Tracking:</span>
            {orders.slice(0, 2).map((o) => (
              <button
                key={o.id}
                onClick={() => {
                  setQuery(o.id);
                  setSearchedOrder(o);
                  setHasSearched(true);
                }}
                className="px-3 py-1 rounded-full bg-amber-50 hover:bg-amber-100 text-amber-900 font-bold border border-amber-200 transition-colors"
              >
                {o.id} ({o.customer.city})
              </button>
            ))}
          </div>
        </div>

        {/* Tracking Details Display */}
        {searchedOrder ? (
          <div className="space-y-6">
            {/* Status Header Banner */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-200/90 honey-card-shadow flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-bold text-amber-800 uppercase tracking-widest block">
                  Order Status
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-black text-[#2D1A0E] mt-0.5 uppercase">
                  {searchedOrder.status}
                </h2>
                <p className="text-xs text-amber-900/70 mt-1">
                  Estimated Delivery: <strong>{searchedOrder.estimatedDeliveryDate}</strong>
                </p>
              </div>

              <div className="text-right">
                <span className="text-xs bg-amber-100 text-amber-900 font-black px-3.5 py-1.5 rounded-full border border-amber-200 inline-block">
                  Courier: {searchedOrder.courierName || "TCS Express"}
                </span>
                <p className="text-xs text-amber-900/80 mt-1.5 font-bold">
                  Tracking No: {searchedOrder.trackingNumber}
                </p>
              </div>
            </div>

            {/* Visual Timeline */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-200/90 honey-card-shadow">
              <h3 className="font-serif text-lg font-bold text-[#2D1A0E] mb-6">
                Shipment Milestones
              </h3>

              <div className="space-y-6 sm:space-y-0 sm:grid sm:grid-cols-5 gap-4">
                {timelineSteps.map((step, idx) => {
                  const isDone = idx <= currentStep;
                  const isCurrent = idx === currentStep;
                  return (
                    <div
                      key={step.title}
                      className="flex sm:flex-col items-center sm:text-center gap-3 sm:gap-2"
                    >
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-xs flex-shrink-0 transition-all ${
                          isDone
                            ? "bg-emerald-600 text-white shadow-sm"
                            : isCurrent
                            ? "bg-amber-500 text-[#2D1A0E] ring-4 ring-amber-200 animate-pulse font-bold"
                            : "bg-[#FAF7F2] text-amber-900/40 border border-amber-200"
                        }`}
                      >
                        {isDone ? "✓" : `0${idx + 1}`}
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-[#2D1A0E]">
                          {step.title}
                        </h4>
                        <p className="text-[10px] text-amber-900/60 leading-tight">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Order Details & Items */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-200/90 honey-card-shadow space-y-4">
              <h3 className="font-serif text-lg font-bold text-[#2D1A0E] border-b border-amber-200 pb-3">
                Order Contents ({searchedOrder.items.length} items)
              </h3>

              <div className="divide-y divide-amber-100">
                {searchedOrder.items.map((item, idx) => (
                  <div key={idx} className="py-3 flex items-center justify-between text-xs sm:text-sm">
                    <div className="flex items-center gap-3">
                      <div className="relative w-12 h-12 rounded-xl bg-[#FAF7F2] p-1 flex-shrink-0 border border-amber-100">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-contain p-1"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#2D1A0E]">{item.name}</h4>
                        <span className="text-[11px] text-amber-800">
                          {item.sizeLabel} × {item.quantity}
                        </span>
                      </div>
                    </div>
                    <span className="font-black text-amber-700">
                      Rs. {item.subtotal.toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-amber-200 flex justify-between text-sm sm:text-base font-black text-[#2D1A0E]">
                <span>Total Amount:</span>
                <span className="text-amber-700">
                  Rs. {searchedOrder.total.toLocaleString()} ({searchedOrder.paymentMethod.toUpperCase()})
                </span>
              </div>

              <div className="pt-3 border-t border-amber-100 p-4 rounded-2xl bg-amber-50/70 text-xs text-amber-900 space-y-1">
                <span className="font-bold block uppercase tracking-wider text-[10px]">
                  Shipping To:
                </span>
                <p className="font-bold text-[#2D1A0E]">
                  {searchedOrder.customer.fullName} • {searchedOrder.customer.phone}
                </p>
                <p>{searchedOrder.customer.address}, {searchedOrder.customer.city}</p>
              </div>

              <div className="pt-2 flex justify-center">
                <a
                  href={`https://wa.me/${BRAND_INFO.whatsapp}?text=Assalam%20o%20Alaikum%20Pak%20and%20Pakiza%2C%20I%20am%20inquiring%20about%20my%20Order%20ID%20${searchedOrder.id}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>WhatsApp Dispatch Support (+92 329 1384005)</span>
                </a>
              </div>
            </div>
          </div>
        ) : hasSearched ? (
          <div className="bg-white rounded-3xl p-10 border border-amber-200 text-center space-y-3">
            <Package className="w-12 h-12 text-amber-500 mx-auto" />
            <h3 className="font-serif text-xl font-bold text-[#2D1A0E]">
              No Orders Found Matching &ldquo;{query}&rdquo;
            </h3>
            <p className="text-xs text-amber-900/70 max-w-sm mx-auto">
              Please double check the Order ID on your confirmation receipt, or message us directly on WhatsApp with your mobile number.
            </p>
            <a
              href={`https://wa.me/${BRAND_INFO.whatsapp}?text=Assalam%20o%20Alaikum%2C%20can%20you%20help%20track%20my%20order%20for%20${query}%3F`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-emerald-600 text-white text-xs font-bold"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Contact WhatsApp Support</span>
            </a>
          </div>
        ) : null}
      </div>
    </div>
  );
}
