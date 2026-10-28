"use client";

import React, { useState } from "react";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Send,
  CheckCircle2,
  HelpCircle,
  ChevronDown
} from "lucide-react";
import { BRAND_INFO } from "@/data/products";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const faqs = [
    {
      q: "How can I verify that Pak and Pakiza honey is 100% pure?",
      a: "Our honey is lab-tested in accordance with Codex Alimentarius and PCSIR standards. Sucrose levels are certified below 2% (far below the maximum 5% threshold), moisture is below 18%, and natural diastase enzyme activity is fully active. Every customer is welcome to test our honey in any independent certified food lab."
    },
    {
      q: "Why does raw pure honey sometimes crystallize or freeze?",
      a: "Crystallization is the most definitive natural proof of 100% unheated raw honey! Real raw honey contains active natural glucose and microscopic pollen grains. Depending on room temperature, these crystals slowly precipitate, creating a delicious creamy texture. Heated supermarket syrups never crystallize because their natural enzymes have been destroyed."
    },
    {
      q: "How long does delivery take to Lahore, Karachi, or Islamabad?",
      a: "We ship all orders via express courier (TCS / Leopards) with thermal protective bubble packaging. Orders to major cities typically arrive within 2 to 3 business days. Remote areas take 3 to 4 business days."
    },
    {
      q: "Can I pay using Cash on Delivery (COD)?",
      a: "Yes! Cash on Delivery is our most popular option. You only pay the courier rider in cash once the parcel reaches your doorstep. We also accept JazzCash, EasyPaisa, and direct bank transfers."
    }
  ];

  return (
    <div className="bg-[#FAF7F2] min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-800 bg-amber-100 px-4 py-1.5 rounded-full inline-block mb-3">
            Get in Touch • 24/7 WhatsApp Support
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-black text-[#2D1A0E] tracking-tight">
            Contact Pak and Pakiza
          </h1>
          <p className="text-xs sm:text-sm text-amber-900/80 mt-2">
            Have questions about pure raw honey or need bulk/custom orders? Our Burewala team is ready to assist you.
          </p>
        </div>

        {/* 3 Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Card 1 */}
          <div className="p-6 rounded-3xl bg-white border border-amber-200/90 honey-card-shadow flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500 text-[#2D1A0E] flex items-center justify-center flex-shrink-0 shadow-sm">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-amber-800 uppercase tracking-widest block">
                Direct WhatsApp &amp; Call
              </span>
              <a
                href={`https://wa.me/${BRAND_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-black text-[#2D1A0E] hover:text-emerald-700 transition-colors mt-0.5 block"
              >
                {BRAND_INFO.whatsappFormatted}
              </a>
              <p className="text-xs text-amber-900/70 mt-0.5">
                Instant reply within minutes
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-6 rounded-3xl bg-white border border-amber-200/90 honey-card-shadow flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500 text-[#2D1A0E] flex items-center justify-center flex-shrink-0 shadow-sm">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-amber-800 uppercase tracking-widest block">
                Email Correspondence
              </span>
              <a
                href={`mailto:${BRAND_INFO.email}`}
                className="text-sm font-black text-[#2D1A0E] hover:text-amber-800 transition-colors mt-0.5 block truncate"
              >
                {BRAND_INFO.email}
              </a>
              <p className="text-xs text-amber-900/70 mt-0.5">
                Bulk inquiries &amp; corporate gifting
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-6 rounded-3xl bg-white border border-amber-200/90 honey-card-shadow flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500 text-[#2D1A0E] flex items-center justify-center flex-shrink-0 shadow-sm">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-amber-800 uppercase tracking-widest block">
                Apiary &amp; Headquarters
              </span>
              <p className="text-sm font-black text-[#2D1A0E] mt-0.5">
                Burewala, Punjab
              </p>
              <p className="text-xs text-amber-900/70 mt-0.5">
                District Vehari, Punjab, Pakistan
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form & WhatsApp Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-amber-200/90 honey-card-shadow">
            <h3 className="font-serif text-2xl font-bold text-[#2D1A0E] mb-2">
              Send Us a Message
            </h3>
            <p className="text-xs text-amber-900/70 mb-6">
              Fill out the form below and we will contact you via WhatsApp or phone.
            </p>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="font-bold text-base text-emerald-900">
                  Message Sent Successfully!
                </h4>
                <p className="text-xs text-emerald-800">
                  Thank you, {name}. Our team will reach back out on {phone} shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-amber-950 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Tariq Khan"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-amber-200 text-xs sm:text-sm bg-[#FAF7F2] outline-none focus:border-amber-500 text-[#2D1A0E]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-amber-950 mb-1">
                    WhatsApp Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 0329 1384005"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-amber-200 text-xs sm:text-sm bg-[#FAF7F2] outline-none focus:border-amber-500 text-[#2D1A0E]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-amber-950 mb-1">
                    Your Message / Inquiry *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us which honey you are interested in or any questions you have..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-amber-200 text-xs sm:text-sm bg-[#FAF7F2] outline-none focus:border-amber-500 text-[#2D1A0E]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full honey-gold-btn text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-md transition-all hover:scale-102"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Inquiry</span>
                </button>
              </form>
            )}
          </div>

          {/* Quick WhatsApp Box & Location */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#2D1A0E] text-white rounded-3xl p-6 sm:p-8 space-y-4 border border-amber-900 shadow-xl">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block">
                Fastest Response
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#FEF3C7]">
                Chat on WhatsApp Now
              </h3>
              <p className="text-xs text-amber-200/80 leading-relaxed">
                Skip forms and order directly via WhatsApp. Our Burewala customer representative is available 7 days a week to answer your questions and take orders.
              </p>
              <a
                href={`https://wa.me/${BRAND_INFO.whatsapp}?text=Assalam%20o%20Alaikum%20Pak%20and%20Pakiza%20Honey%2C%20I%20would%20like%20to%20place%20an%20order.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Open WhatsApp (+92 329 1384005)</span>
              </a>
            </div>

            <div className="bg-amber-50 rounded-3xl p-6 border border-amber-200 text-xs text-amber-950 space-y-2">
              <h4 className="font-bold text-sm text-[#2D1A0E]">
                Business Hours:
              </h4>
              <p>Monday – Saturday: 8:00 AM – 10:00 PM</p>
              <p>Sunday: 10:00 AM – 8:00 PM</p>
              <p className="text-amber-800/80 pt-1">
                📍 Packages dispatched daily via TCS &amp; Leopards from Burewala hub.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-amber-200/90 honey-card-shadow">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-800 bg-amber-100 px-3 py-1 rounded-full inline-block mb-2">
              Frequently Asked Questions
            </span>
            <h3 className="font-serif text-2xl font-black text-[#2D1A0E]">
              Everything You Need to Know About Pure Honey
            </h3>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-amber-200/80 overflow-hidden bg-[#FAF7F2]/50 transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 text-left flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-[#2D1A0E] hover:text-amber-800"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-amber-700 flex-shrink-0 transition-transform ${
                        isOpen ? "transform rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="p-4 pt-0 text-xs text-amber-900/80 leading-relaxed border-t border-amber-100/60 bg-white">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
