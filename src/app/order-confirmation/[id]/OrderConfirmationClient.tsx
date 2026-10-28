"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle2,
  Package,
  Truck,
  Phone,
  Printer,
  ArrowRight,
  MapPin,
  Clock,
  ShieldCheck
} from "lucide-react";
import { useOrders } from "@/context/OrderContext";
import { BRAND_INFO } from "@/data/products";

export function OrderConfirmationClient({ id }: { id: string }) {
  const { getOrderById } = useOrders();
  const order = getOrderById(id);

  if (!order) {
    return (
      <div className="min-h-screen bg-[#FAF7F2] py-20 flex items-center justify-center px-4">
        <div className="bg-white rounded-3xl p-8 max-w-md w-full border border-amber-200 text-center space-y-4 shadow-sm">
          <h2 className="font-serif text-2xl font-bold text-[#2D1A0E]">
            Order Not Found
          </h2>
          <p className="text-xs text-amber-900/70">
            We couldn&apos;t find an order with ID &ldquo;{id}&rdquo;. Please verify your tracking number.
          </p>
          <Link
            href="/track-order"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full honey-gold-btn text-xs font-bold"
          >
            <span>Go to Order Tracking</span>
          </Link>
        </div>
      </div>
    );
  }

  const steps = [
    { title: "Order Placed", date: "Just now", done: true, current: false },
    { title: "Verified", date: "Within 30 mins", done: order.status !== "pending", current: order.status === "pending" },
    { title: "Packed & Sealed", date: "Today", done: ["packed", "shipped", "delivered"].includes(order.status), current: order.status === "confirmed" },
    { title: "Dispatched (TCS)", date: order.estimatedDeliveryDate || "In 1-2 days", done: ["shipped", "delivered"].includes(order.status), current: order.status === "packed" },
    { title: "Delivered", date: "2-3 business days", done: order.status === "delivered", current: order.status === "shipped" }
  ];

  const handlePrint = () => {
    window.print();
  };

  const whatsappMessage = `*Assalam o Alaikum Pak and Pakiza Honey!*%0A%0AOrder Confirmed: *${order.id}*%0AName: ${order.customer.fullName}%0ACity: ${order.customer.city}%0ATotal: Rs. ${order.total.toLocaleString()}%0APayment: ${order.paymentMethod.toUpperCase()}%0A%0APlease process my dispatch from Burewala. Thank you!`;

  return (
    <div className="bg-[#FAF7F2] min-h-screen py-10 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Success Card Header */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-amber-200/90 honey-card-shadow text-center space-y-3">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-xs">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-50 px-3.5 py-1 rounded-full inline-block">
            Order Placed Successfully!
          </span>

          <h1 className="font-serif text-2xl sm:text-4xl font-black text-[#2D1A0E] tracking-tight">
            Thank You, {order.customer.fullName}!
          </h1>

          <p className="text-xs sm:text-sm text-amber-900/70 max-w-lg mx-auto leading-relaxed">
            Your pure honey order has been received at our Burewala headquarters. We are preparing your fresh parcel with insulated bubble packaging.
          </p>

          <div className="inline-flex flex-wrap items-center justify-center gap-4 pt-3 text-xs sm:text-sm font-bold text-amber-950">
            <span className="bg-amber-100/70 px-4 py-1.5 rounded-full border border-amber-200">
              Order ID: <strong>{order.id}</strong>
            </span>
            <span className="bg-amber-100/70 px-4 py-1.5 rounded-full border border-amber-200">
              Tracking: <strong>{order.trackingNumber}</strong> ({order.courierName || "TCS Express"})
            </span>
          </div>
        </div>

        {/* Visual Progress Timeline */}
        <div className="mt-8 bg-white rounded-3xl p-6 sm:p-8 border border-amber-200/90 honey-card-shadow">
          <h3 className="font-serif text-lg font-bold text-[#2D1A0E] mb-6 flex items-center gap-2">
            <Clock className="w-5 h-5 text-amber-700" /> Live Delivery Timeline
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 relative">
            {steps.map((s, idx) => (
              <div key={s.title} className="flex flex-col items-center text-center relative z-10">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-xs transition-all ${
                    s.done
                      ? "bg-emerald-600 text-white shadow-sm"
                      : s.current
                      ? "bg-amber-500 text-[#2D1A0E] ring-4 ring-amber-200 animate-pulse font-bold"
                      : "bg-[#FAF7F2] text-amber-900/40 border border-amber-200"
                  }`}
                >
                  {s.done ? "✓" : `0${idx + 1}`}
                </div>
                <h4 className="text-xs font-bold text-[#2D1A0E] mt-2">
                  {s.title}
                </h4>
                <span className="text-[10px] text-amber-900/60 mt-0.5">
                  {s.date}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Invoice & Order Details */}
        <div className="mt-8 bg-white rounded-3xl p-6 sm:p-8 border border-amber-200/90 honey-card-shadow space-y-6">
          <div className="flex items-center justify-between border-b border-amber-200 pb-4">
            <div>
              <h3 className="font-serif text-lg font-bold text-[#2D1A0E]">
                Itemized Invoice
              </h3>
              <p className="text-xs text-amber-900/60">
                Placed on {new Date(order.createdAt).toLocaleDateString()}
              </p>
            </div>
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-xl bg-[#FAF7F2] hover:bg-amber-100 text-amber-900 text-xs font-bold border border-amber-200 flex items-center gap-1.5 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Invoice</span>
            </button>
          </div>

          {/* Items */}
          <div className="divide-y divide-amber-100">
            {order.items.map((item, idx) => (
              <div key={idx} className="py-3 flex items-center justify-between gap-4 text-xs sm:text-sm">
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

          {/* Pricing summary */}
          <div className="pt-4 border-t border-amber-200 space-y-2 text-xs sm:text-sm text-amber-950/80">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span className="font-bold">Rs. {order.subtotal.toLocaleString()}</span>
            </div>
            {order.discount > 0 && (
              <div className="flex justify-between text-emerald-700 font-bold">
                <span>Discount Applied:</span>
                <span>-Rs. {order.discount.toLocaleString()}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span>Delivery Charges ({order.courierName}):</span>
              <span className="font-bold">
                {order.deliveryFee === 0 ? "FREE" : `Rs. ${order.deliveryFee}`}
              </span>
            </div>
            <div className="flex justify-between text-base font-black text-[#2D1A0E] pt-2 border-t border-amber-100">
              <span>Total Payable Amount:</span>
              <span className="text-amber-700">Rs. {order.total.toLocaleString()}</span>
            </div>
          </div>

          {/* Delivery & Payment Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-amber-200 text-xs">
            <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200">
              <span className="font-bold text-amber-900 uppercase tracking-wider block mb-1">
                📍 Delivery Destination:
              </span>
              <p className="font-bold text-[#2D1A0E]">{order.customer.fullName}</p>
              <p className="text-amber-900/80 mt-0.5">{order.customer.address}</p>
              <p className="text-amber-900/80">
                {order.customer.city}, {order.customer.province}
              </p>
              <p className="text-amber-900 font-bold mt-1">
                WhatsApp: {order.customer.phone}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200">
              <span className="font-bold text-amber-900 uppercase tracking-wider block mb-1">
                💳 Payment Method:
              </span>
              <p className="font-bold text-[#2D1A0E] uppercase">
                {order.paymentMethod === "cod"
                  ? "Cash on Delivery (Pay upon arrival)"
                  : order.paymentMethod.toUpperCase()}
              </p>
              <p className="text-amber-900/80 mt-1">
                Status:{" "}
                <span className="font-bold text-amber-700">
                  {order.paymentStatus.toUpperCase()}
                </span>
              </p>
              <p className="text-[11px] text-amber-800/70 mt-1">
                Estimated Delivery: {order.estimatedDeliveryDate}
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
            <a
              href={`https://wa.me/${BRAND_INFO.whatsapp}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:flex-1 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-colors shadow-sm text-center"
            >
              <Phone className="w-4 h-4" />
              <span>Confirm via WhatsApp (+92 329 1384005)</span>
            </a>

            <Link
              href="/track-order"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full honey-gold-btn text-xs sm:text-sm font-bold flex items-center justify-center gap-2 text-center"
            >
              <span>Track Live Status</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
