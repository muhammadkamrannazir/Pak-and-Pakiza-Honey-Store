import { HoneyProduct } from "@/types";

export const PRODUCTS: HoneyProduct[] = [
  {
    id: "prod-sidr-gold",
    slug: "pak-pakiza-pure-sidr-honey",
    name: "Pure Sidr (Beri) Honey",
    urduName: "سدر کا خالص بیر کا شہد",
    tagline: "The King of Honeys — Harvested from wild Sidr (Jujube) trees in Potohar & Karak",
    category: "Sidr Raw Honey",
    categoryTab: "Raw Honey",
    isBestSeller: true,
    isFeatured: true,
    badge: "100% Pure Sidr",
    rating: 5.0,
    reviewCount: 148,
    pricePKR: 2450,
    originalPricePKR: 2850,
    sizes: [
      { label: "250g", weightGrams: 250, pricePKR: 1350, originalPricePKR: 1550 },
      { label: "500g", weightGrams: 500, pricePKR: 2450, originalPricePKR: 2850, isPopular: true },
      { label: "1000g (1kg)", weightGrams: 1000, pricePKR: 4600, originalPricePKR: 5400 }
    ],
    inStock: true,
    stockCount: 42,
    image: "/assets/hero_jar_pedestal.png",
    secondaryImage: "/assets/product_center_jar.png",
    galleryImages: [
      "/assets/hero_jar_pedestal.png",
      "/assets/product_center_jar.png",
      "/assets/gallery_honey_comb_jar.png",
      "/assets/gallery_dipper_drip.png"
    ],
    description:
      "Pak and Pakiza Pure Sidr (Beri) Honey is our flagship, internationally acclaimed monofloral honey. Cold-extracted from ancient Sidr (Ziziphus spina-christi) forests in the rugged Potohar and Karak mountains, it possesses an exquisite dark golden amber hue, a dense velvety viscosity, and a profound butterscotch caramel finish. Unheated, raw, and unpasteurized to preserve all living enzymes and natural propolis.",
    harvestLocation: "Karak & Potohar Ranges, Pakistan",
    floralSource: "Wild Sidr (Beri / Jujube) Blossoms",
    textureAndAroma: "Deep dark amber, thick viscous drape, rich warm butterscotch and caramel notes with a lingering floral finish.",
    healthBenefits: [
      "Natural antibiotic & antibacterial potency comparable to premium Manuka",
      "Soothes persistent dry coughs and sore throat infections",
      "Supports liver detox, cardiovascular health, and natural vitality",
      "Accelerates stomach ulcer and gastric reflux relief",
      "Rich in natural flavonoids, polyphenols, and essential minerals"
    ],
    labReport: {
      purityPercentage: "99.8% Pure Nectar",
      sucroseLevel: "1.4% (Far below max 5% limit)",
      moistureContent: "17.1% (Ideal low moisture)",
      hda10Status: "Certified Active Enzyme Potency"
    },
    reviews: [
      {
        id: "rev-1",
        author: "Dr. Tariq Mahmood",
        city: "Lahore",
        rating: 5,
        date: "October 18, 2026",
        comment: "Mashallah, the purity is unquestionable. As a physician I regularly test honeys for my family. This Sidr honey from Pak and Pakiza has the authentic thick consistency, aroma, and enzyme richness. Highly recommended!",
        verifiedPurchase: true
      },
      {
        id: "rev-2",
        author: "Ayesha Farooq",
        city: "Islamabad",
        rating: 5,
        date: "October 12, 2026",
        comment: "Best Sidr honey in Pakistan! My children love it with their morning warm milk. Packaging was impeccable with bubble wrap and the wooden honey spoon was a delightful gift.",
        verifiedPurchase: true
      },
      {
        id: "rev-3",
        author: "Usman Ghani",
        city: "Burewala",
        rating: 5,
        date: "October 04, 2026",
        comment: "Proud to support local Burewala beekeeping! Purity is 100% verified. You can taste the authenticity from the first spoonful.",
        verifiedPurchase: true
      }
    ]
  },
  {
    id: "prod-wild-forest",
    slug: "pak-pakiza-wild-forest-choti-makhi-honey",
    name: "Wild Forest (Choti Makhi) Honey",
    urduName: "چھوٹی مکھی کا خالص جنگلی شہد",
    tagline: "Extremely rare nectar harvested by small bees (Apis florea) from deep forest flora",
    category: "Wild Forest Honey",
    categoryTab: "Raw Honey",
    isBestSeller: true,
    isFeatured: true,
    badge: "Rare Wild Harvest",
    rating: 4.9,
    reviewCount: 112,
    pricePKR: 3200,
    originalPricePKR: 3700,
    sizes: [
      { label: "250g", weightGrams: 250, pricePKR: 1750, originalPricePKR: 2000 },
      { label: "500g", weightGrams: 500, pricePKR: 3200, originalPricePKR: 3700, isPopular: true },
      { label: "1000g (1kg)", weightGrams: 1000, pricePKR: 5950, originalPricePKR: 7000 }
    ],
    inStock: true,
    stockCount: 28,
    image: "/assets/bestseller_forest.png",
    secondaryImage: "/assets/gallery_wooden_bowl_honey.png",
    galleryImages: [
      "/assets/bestseller_forest.png",
      "/assets/gallery_wooden_bowl_honey.png",
      "/assets/gallery_dark_honey_comb.png",
      "/assets/gallery_fresh_comb_jar.png"
    ],
    description:
      "Harvested from wild hives crafted by Pakistan's indigenous dwarf honeybee (Apis florea, known locally as Choti Makhi). These miniature bees visit millions of microscopic medicinal wildflowers in uncultivated virgin forests. Renowned across Unani and herbal traditions for its profound medicinal efficacy, high pollen density, and unique multidimensional flavor profile.",
    harvestLocation: "Margalla Hills & Salt Range Valleys, Pakistan",
    floralSource: "Wild Multiflora (Thyme, Acacia modesta, Mountain Borage & Wild Herbs)",
    textureAndAroma: "Radiant golden amber, medium viscosity, complex floral aroma with subtle herbal and tangy citrus undertones.",
    healthBenefits: [
      "Maximum natural pollen and royal jelly residue for immunity",
      "Renowned respiratory support for bronchitis, asthma, and chronic allergies",
      "Instant restorative stamina booster for athletes and seniors",
      "Promotes deep restorative sleep when taken with warm milk",
      "Supercharged with raw bio-active antioxidants"
    ],
    labReport: {
      purityPercentage: "99.9% Raw Natural",
      sucroseLevel: "1.1%",
      moistureContent: "18.2%",
      hda10Status: "Very High Enzyme Activity"
    },
    reviews: [
      {
        id: "rev-4",
        author: "Haji Muhammad Aslam",
        city: "Karachi",
        rating: 5,
        date: "October 15, 2026",
        comment: "Real Choti Makhi honey is almost impossible to find genuine in the market. Pak & Pakiza delivered genuine unadulterated honey. SubhanAllah, my chronic cough subsided within three days.",
        verifiedPurchase: true
      },
      {
        id: "rev-5",
        author: "Fatima Noor",
        city: "Rawalpindi",
        rating: 5,
        date: "October 08, 2026",
        comment: "Rich flavor that you can feel in your throat. You can instantly distinguish this from heated supermarket syrups. Will buy the 1kg next time!",
        verifiedPurchase: true
      }
    ]
  },
  {
    id: "prod-raw-acacia",
    slug: "pak-pakiza-raw-acacia-honey",
    name: "Raw Acacia (Robinia) Honey",
    urduName: "خالص سفید کیکر کا شہد",
    tagline: "Crystal clear, delicately sweet, harvested from pristine Himalayan foothills",
    category: "Raw Honey",
    categoryTab: "Raw Honey",
    isBestSeller: true,
    isFeatured: false,
    badge: "Delicate & Mild",
    rating: 4.9,
    reviewCount: 86,
    pricePKR: 1850,
    originalPricePKR: 2200,
    sizes: [
      { label: "250g", weightGrams: 250, pricePKR: 1050, originalPricePKR: 1250 },
      { label: "500g", weightGrams: 500, pricePKR: 1850, originalPricePKR: 2200, isPopular: true },
      { label: "1000g (1kg)", weightGrams: 1000, pricePKR: 3450, originalPricePKR: 4100 }
    ],
    inStock: true,
    stockCount: 55,
    image: "/assets/bestseller_acacia.png",
    secondaryImage: "/assets/gallery_golden_jar_spoon.png",
    galleryImages: [
      "/assets/bestseller_acacia.png",
      "/assets/gallery_golden_jar_spoon.png",
      "/assets/gallery_rustic_jar_flowers.png"
    ],
    description:
      "A light, luminous honey collected from the fragrant white blossoms of Acacia trees nestled along the Himalayan valleys. Loved worldwide for its transparent golden clarity, silky liquid flow, and gentle vanilla-floral sweetness that never overpowers. Because of its naturally high fructose ratio, it remains liquid much longer without crystallizing.",
    harvestLocation: "Swat & Hazara Foothills, Pakistan",
    floralSource: "White Acacia (Robinia pseudoacacia) Flowers",
    textureAndAroma: "Luminous pale straw gold, silk-smooth fluid drape, whisper of floral vanilla and pear with a mellow finish.",
    healthBenefits: [
      "Low glycemic index — the preferred natural sweetener for health-conscious diets",
      "Gentle on sensitive digestive tracts and stomach lining",
      "Excellent clean sweetener for specialty green teas, artisan coffees, and dressings",
      "Calming evening nourishment that supports balanced cortisol levels"
    ],
    labReport: {
      purityPercentage: "99.7% Pure",
      sucroseLevel: "1.6%",
      moistureContent: "17.4%",
      hda10Status: "Active Natural Diastase"
    },
    reviews: [
      {
        id: "rev-6",
        author: "Zainab Shah",
        city: "Lahore",
        rating: 5,
        date: "October 19, 2026",
        comment: "This acacia honey is sublime. It doesn't mask the taste of my green tea, just adds a heavenly sweetness. Fast delivery to Gulberg Lahore in 2 days.",
        verifiedPurchase: true
      }
    ]
  },
  {
    id: "prod-orange-blossom",
    slug: "pak-pakiza-orange-blossom-honey",
    name: "Orange Blossom (Citrus) Honey",
    urduName: "مالٹے کے پھولوں کا خالص شہد",
    tagline: "Fragrant spring honey collected during citrus flower blooms in Sargodha orchards",
    category: "Raw Honey",
    categoryTab: "Raw Honey",
    isBestSeller: false,
    isFeatured: false,
    badge: "Citrus Orchard Harvest",
    rating: 4.8,
    reviewCount: 64,
    pricePKR: 1650,
    originalPricePKR: 1950,
    sizes: [
      { label: "250g", weightGrams: 250, pricePKR: 950, originalPricePKR: 1100 },
      { label: "500g", weightGrams: 500, pricePKR: 1650, originalPricePKR: 1950, isPopular: true },
      { label: "1000g (1kg)", weightGrams: 1000, pricePKR: 3100, originalPricePKR: 3600 }
    ],
    inStock: true,
    stockCount: 35,
    image: "/assets/bestseller_sidr.png",
    secondaryImage: "/assets/gallery_chamomile_honey.png",
    galleryImages: [
      "/assets/bestseller_sidr.png",
      "/assets/gallery_chamomile_honey.png",
      "/assets/gallery_dipper_drip.png"
    ],
    description:
      "When the sprawling Kinnow and Mandarin groves of Sargodha burst into fragrant white blossom every March, our hives are positioned right amidst the orchards. Bees gather nectar that carries unmistakable hints of fresh citrus, bright orange zest, and sweet jasmine.",
    harvestLocation: "Sargodha Citrus Groves, Punjab, Pakistan",
    floralSource: "Kinnow & Sweet Orange (Citrus sinensis) Blossoms",
    textureAndAroma: "Warm sunny gold, medium thickness, citrus floral notes with a bright, uplifting finish.",
    healthBenefits: [
      "Naturally enriched with citrus bioflavonoids and trace Vitamin C",
      "Uplifting morning energy booster",
      "Perfect partner for lukewarm lemon water morning rituals",
      "Natural antibacterial mouthwash and oral hygiene rinse"
    ],
    labReport: {
      purityPercentage: "99.6% Pure",
      sucroseLevel: "1.8%",
      moistureContent: "17.8%",
      hda10Status: "Standard Fresh Floral Diastase"
    },
    reviews: [
      {
        id: "rev-7",
        author: "Bilal Siddiqui",
        city: "Faisalabad",
        rating: 5,
        date: "October 02, 2026",
        comment: "You can smell the citrus orchards the second you unseal the jar! Incredible flavor on sourdough toast.",
        verifiedPurchase: true
      }
    ]
  },
  {
    id: "prod-pure-honeycomb",
    slug: "pak-pakiza-pure-comb-honey",
    name: "Pure Natural Honeycomb (Comb Honey)",
    urduName: "خالص قدرتی چھتے والا شہد",
    tagline: "100% Raw honey sealed in virgin beeswax comb cut straight from the frame",
    category: "Comb Honey",
    categoryTab: "Comb Honey",
    isBestSeller: true,
    isFeatured: true,
    badge: "100% Raw Comb",
    rating: 5.0,
    reviewCount: 92,
    pricePKR: 2800,
    originalPricePKR: 3300,
    sizes: [
      { label: "450g Wooden Tray", weightGrams: 450, pricePKR: 2800, originalPricePKR: 3300, isPopular: true },
      { label: "900g Family Pack", weightGrams: 900, pricePKR: 4950, originalPricePKR: 5800 }
    ],
    inStock: true,
    stockCount: 20,
    image: "/assets/gallery_fresh_comb_jar.png",
    secondaryImage: "/assets/gallery_comb_frame_spread.png",
    galleryImages: [
      "/assets/gallery_fresh_comb_jar.png",
      "/assets/gallery_comb_frame_spread.png",
      "/assets/circle_honeycomb_bees.png",
      "/assets/gallery_dark_honey_comb.png"
    ],
    description:
      "Honey in its purest, most untouched state: intact hexagonal beeswax cells filled with liquid gold honey. Packed directly from the beehive frames into food-grade, airtight wooden presentation trays. Chew the soft, edible beeswax to release bursts of liquid honey, trace propolis, and live pollen grains.",
    harvestLocation: "Burewala Apiary & Salt Range Outposts, Pakistan",
    floralSource: "Wild Beri & Clover Meadow Blossoms",
    textureAndAroma: "Crisp natural beeswax comb overflowing with warm amber liquid honey; chewable and 100% edible.",
    healthBenefits: [
      "Untouched by heat, centrifugal extractors, or filters",
      "Beeswax delivers natural long-chain fatty acids beneficial for gut lining",
      "Contains live pollen grains and propolis resin",
      "Spectacular centerpiece for gourmet breakfast trays, charcuterie boards, and Eid gifting"
    ],
    labReport: {
      purityPercentage: "100% Untouched Comb",
      sucroseLevel: "1.2%",
      moistureContent: "16.8%",
      hda10Status: "Virgin Hive Enzyme Integrity"
    },
    reviews: [
      {
        id: "rev-8",
        author: "Kamran Sheikh",
        city: "Karachi",
        rating: 5,
        date: "October 16, 2026",
        comment: "Eating honey directly from the comb takes you back to pure village memories! The beeswax is soft, smells divine, and the honey inside is pure perfection. Will definitely reorder.",
        verifiedPurchase: true
      }
    ]
  },
  {
    id: "prod-royal-vitality",
    slug: "pak-pakiza-royal-propolis-vitality-elixir",
    name: "Royal Propolis Vitality Elixir",
    urduName: "شاہی شہد مع پروپولس و رائل جیلی",
    tagline: "Potent superfood fusion of raw Sidr honey, fresh Royal Jelly, and Bee Propolis",
    category: "Infusions",
    categoryTab: "Specialty",
    isBestSeller: false,
    isFeatured: false,
    badge: "Superfood Vitality",
    rating: 4.9,
    reviewCount: 53,
    pricePKR: 3800,
    originalPricePKR: 4400,
    sizes: [
      { label: "500g Jar", weightGrams: 500, pricePKR: 3800, originalPricePKR: 4400, isPopular: true }
    ],
    inStock: true,
    stockCount: 16,
    image: "/assets/about_jar_bees.png",
    secondaryImage: "/assets/circle_dripping_spoon.png",
    galleryImages: [
      "/assets/about_jar_bees.png",
      "/assets/circle_dripping_spoon.png",
      "/assets/gallery_rustic_jar_flowers.png"
    ],
    description:
      "A therapeutic elixir uniting three treasures of the beehive: cold-harvested wild Sidr honey infused with 10,000mg of fresh Royal Jelly and purified Green Bee Propolis. Designed as a daily morning revitalizer for stamina, cellular resilience, cognitive focus, and peak physical vitality.",
    harvestLocation: "Burewala Certified Hives & Karak Outposts",
    floralSource: "Wild Sidr Honey with Bee Propolis & Royal Jelly",
    textureAndAroma: "Rich, creamy opaque gold, velvety texture, deep herbal and royal jelly undertone.",
    healthBenefits: [
      "Royal jelly provides 10-HDA for cognitive performance and hormonal balance",
      "Propolis acts as nature's most potent antimicrobial shield",
      "Accelerates recovery from physical fatigue and illness",
      "Supports collagen preservation and radiant skin hydration"
    ],
    labReport: {
      purityPercentage: "100% Natural Hive Ingredients",
      sucroseLevel: "1.3%",
      moistureContent: "17.0%",
      hda10Status: "10-HDA Confirmed > 2.0%"
    },
    reviews: [
      {
        id: "rev-9",
        author: "Shahid Malik",
        city: "Multan",
        rating: 5,
        date: "October 11, 2026",
        comment: "Took this every morning during my gym training. Noticeable stamina boost and mental sharpness. Premium quality packaging.",
        verifiedPurchase: true
      }
    ]
  }
];

export function getProductBySlug(slug: string): HoneyProduct | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getProductById(id: string): HoneyProduct | undefined {
  return PRODUCTS.find((p) => p.id === id);
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
