"use client";

import React from "react";
import Image from "next/image";

interface BeeFlightProps {
  className?: string;
  variant?: "hero" | "simple" | "loop";
  flip?: boolean;
}

export function BeeFlight({ className = "", variant = "loop", flip = false }: BeeFlightProps) {
  return (
    <div
      className={`relative inline-flex items-center pointer-events-none select-none ${className} ${
        flip ? "scale-x-[-1]" : ""
      }`}
    >
      <svg
        viewBox="0 0 140 70"
        fill="none"
        stroke="#8C6D46"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="4 4"
        className="w-24 sm:w-32 h-12 sm:h-16 opacity-70"
      >
        {variant === "loop" ? (
          <path d="M 10 50 C 35 15, 65 10, 80 30 C 95 50, 65 60, 65 35 C 65 15, 105 15, 125 35" />
        ) : (
          <path d="M 10 45 C 40 15, 75 55, 105 25 C 115 15, 125 20, 130 28" />
        )}
      </svg>
      <div className="relative w-6 h-6 sm:w-7 sm:h-7 -ml-3 -mt-3 flex-shrink-0 drop-shadow-sm">
        <Image
          src="/assets/mascot_baby_bee.png"
          alt="Cute bee"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}
