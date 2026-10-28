import React from "react";
import { Star } from "lucide-react";

export function TestimonialsSection() {
  const reviews = [
    {
      name: "LOIS LANE",
      role: "Verified Buyer",
      text: "Mashallah, the pure honey quality is unmatched! The Sidr honey has that authentic thick consistency and rich butterscotch aroma you cannot find anywhere else in the market."
    },
    {
      name: "CLARK KENT",
      role: "Verified Buyer",
      text: "Ordered the Wild Forest Choti Makhi honey and received it within 2 days in Lahore. Extremely well-packaged with bubble wrap and tastes 100% natural and unheated."
    },
    {
      name: "HOLLY GOLIGHTLY",
      role: "Verified Buyer",
      text: "The pure honeycomb tray is an absolute delight for breakfast. You can feel the real natural beeswax and fresh raw honey oozing out. Highly recommended brand!"
    }
  ];

  return (
    <section id="testimonials" className="relative py-12 sm:py-16 bg-[#FAF7F2] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-12">
          <h2 className="font-serif text-2xl sm:text-3xl font-black text-[#2B1506] tracking-wider uppercase">
            OUR TESTIMONIALS
          </h2>
          <div className="w-10 h-1 bg-[#8D4B0A]/40 rounded-full mx-auto mt-1" />
        </div>

        {/* 3 Clean Testimonial Cards (Exact Dribbble Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-amber-200/90 shadow-sm flex flex-col items-center text-center hover:border-amber-400 transition-all duration-300"
            >
              {/* 5 Golden Stars */}
              <div className="flex items-center gap-1 text-[#F59E0B] mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current text-[#F59E0B]" />
                ))}
              </div>

              {/* Name */}
              <h3 className="font-serif text-sm font-black text-[#2B1506] uppercase tracking-wider">
                {rev.name}
              </h3>

              {/* Role */}
              <span className="text-[11px] text-[#381F0E]/60 font-medium block mt-0.5">
                {rev.role}
              </span>

              {/* Review Text */}
              <p className="text-xs text-[#381F0E]/75 leading-relaxed font-normal mt-3">
                {rev.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
