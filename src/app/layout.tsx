import type { Metadata } from "next";
import { Suspense } from "react";
import { Playfair_Display, Plus_Jakarta_Sans, Caveat } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { BRAND_INFO } from "@/data/products";

const serifFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap"
});

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

const scriptFont = Caveat({
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pakandpakiza.com"),
  title: {
    default: "Pak and Pakiza | Pure Honey Pakistan",
    template: "%s | Pak and Pakiza Honey"
  },
  description:
    "Buy Pak and Pakiza Honey from Burewala, Pakistan. Available in 1 kg, 500 g, and 250 g sizes with cash on delivery nationwide. WhatsApp: +92 329 1384005",
  keywords: [
    "Pak and Pakiza",
    "pure honey Pakistan",
    "Burewala honey",
    "honey online",
    "pure honey Pakistan",
    "Pakistani honey store"
  ],
  authors: [{ name: "Pak and Pakiza Pure Honey" }],
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: "https://pakandpakiza.com",
    title: "Pak and Pakiza — Pure Honey",
    description:
      "Pak and Pakiza Honey from Burewala, Pakistan. Choose 1 kg, 500 g, or 250 g jars.",
    siteName: "Pak and Pakiza Pure Honey",
    images: [
      {
        url: "/assets/hero_jar_pedestal.png",
        width: 1200,
        height: 630,
        alt: "Pak and Pakiza Pure Honey"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Pak and Pakiza | Pure Honey Pakistan",
    description: "Pak and Pakiza Honey from Burewala in 1 kg, 500 g, and 250 g sizes. Cash on delivery nationwide.",
    images: ["/assets/hero_jar_pedestal.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Store",
    name: BRAND_INFO.name,
    image: "https://pakandpakiza.com/logo.png",
    "@id": "https://pakandpakiza.com",
    url: "https://pakandpakiza.com",
    telephone: BRAND_INFO.phone,
    email: BRAND_INFO.email,
    priceRange: "PKR 750 - PKR 3000",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Main Apiary & Store",
      addressLocality: "Burewala",
      addressRegion: "Punjab",
      addressCountry: "PK"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "30.1565",
      longitude: "72.6826"
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      opens: "08:00",
      closes: "22:00"
    }
  };

  return (
    <html
      lang="en"
      className={`${serifFont.variable} ${sansFont.variable} ${scriptFont.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#2D1A0E] selection:bg-amber-200 selection:text-amber-900">
        <Providers>
          <Suspense fallback={null}>
            <Header />
          </Suspense>
          <main className="flex-1">{children}</main>
          <Footer />
          <CartDrawer />
        </Providers>
      </body>
    </html>
  );
}
