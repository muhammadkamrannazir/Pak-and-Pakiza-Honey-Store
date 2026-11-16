import { HoneyProduct } from "@/types";

export const PRODUCTS: HoneyProduct[] = [
  {
    id: "prod-honey",
    slug: "pak-and-pakiza-honey",
    name: "Honey",
    urduName: "خالص اور پاکیزہ شہد",
    tagline: "Pure honey, available in three sizes.",
    category: "Honey",
    categoryTab: "All Honey",
    isBestSeller: true,
    isFeatured: true,
    rating: 5,
    reviewCount: 148,
    pricePKR: 750,
    sizes: [
      { label: "1 kg", weightGrams: 1000, pricePKR: 3000, isPopular: true },
      { label: "500 g", weightGrams: 500, pricePKR: 1500 },
      { label: "250 g", weightGrams: 250, pricePKR: 750 }
    ],
    inStock: true,
    stockCount: 42,
    image: "/assets/hero_jar_pedestal.png",
    secondaryImage: "/assets/product_center_jar.png",
    galleryImages: [
      "/assets/hero_jar_pedestal.png",
      "/assets/product_center_jar.png",
      "/assets/gallery_dipper_drip.png"
    ],
    description:
      "Pak and Pakiza Honey is carefully packed in Burewala, Pakistan. Choose the size that suits you: 1 kg, 500 g, or 250 g.",
    harvestLocation: "Pakistan",
    floralSource: "Natural floral nectar",
    textureAndAroma: "Golden in color with a naturally sweet taste.",
    healthBenefits: [
      "A naturally sweet addition to everyday meals and drinks",
      "Available in three convenient jar sizes",
      "Carefully packed to help keep every jar fresh",
      "Delivered nationwide across Pakistan"
    ],
    reviews: [
      {
        id: "rev-1",
        author: "Ayesha Farooq",
        city: "Islamabad",
        rating: 5,
        date: "October 12, 2026",
        comment: "The honey arrived well packaged and tastes delicious. I will order again!",
        verifiedPurchase: true
      }
    ]
  }
];

export function getProductBySlug(slug: string): HoneyProduct | undefined {
  return PRODUCTS.find((product) => product.slug === slug);
}

export function getProductById(id: string): HoneyProduct | undefined {
  return PRODUCTS.find((product) => product.id === id);
}

export const BRAND_INFO = {
  name: "Pak and Pakiza",
  tagline: "Pure Honey, Straight from Nature's Pristine Hives",
  urduTagline: "خالص اور پاکیزہ قدرتی شہد — 100 فیصد خالص",
  address: "Burewala, District Vehari, Punjab, Pakistan",
  phone: "+92 329 1384005",
  whatsapp: "+923291384005",
  whatsappFormatted: "+92 329 1384005",
  email: "pakandpakiza@gmail.com",
  freeShippingThreshold: 3500,
  defaultShippingFee: 250,
  socialLinks: {
    whatsapp: "https://wa.me/923291384005",
    facebook: "https://facebook.com/pakandpakiza",
    instagram: "https://instagram.com/pakandpakiza"
  }
};
