export interface SizeOption {
  label: string; // e.g., "250 g", "500 g", "1 kg"
  weightGrams: number;
  pricePKR: number;
  originalPricePKR?: number;
  isPopular?: boolean;
}

export interface Review {
  id: string;
  author: string;
  city: string;
  rating: number;
  date: string;
  comment: string;
  verifiedPurchase: boolean;
}

export interface HoneyProduct {
  id: string;
  slug: string;
  name: string;
  urduName: string;
  tagline: string;
  category: "Honey";
  categoryTab: "All Honey";
  isBestSeller?: boolean;
  isFeatured?: boolean;
  badge?: string;
  rating: number;
  reviewCount: number;
  pricePKR: number;
  originalPricePKR?: number;
  sizes: SizeOption[];
  inStock: boolean;
  stockCount: number;
  image: string;
  secondaryImage?: string;
  galleryImages: string[];
  description: string;
  harvestLocation: string;
  floralSource: string;
  textureAndAroma: string;
  healthBenefits: string[];
  reviews: Review[];
}

export interface CartItem {
  id: string; // unique item id (slug + sizeLabel)
  product: HoneyProduct;
  selectedSize: SizeOption;
  quantity: number;
}

export interface OrderItem {
  productId: string;
  name: string;
  sizeLabel: string;
  unitPrice: number;
  quantity: number;
  subtotal: number;
  image: string;
}

export interface Order {
  id: string;
  trackingNumber: string;
  createdAt: string;
  customer: {
    fullName: string;
    phone: string;
    email?: string;
    address: string;
    city: string;
    province: string;
    postalCode?: string;
    deliveryNotes?: string;
  };
  items: OrderItem[];
  subtotal: number;
  deliveryFee: number;
  discount: number;
  total: number;
  paymentMethod: "cod" | "jazzcash" | "easypaisa" | "bank_transfer";
  paymentStatus: "pending" | "paid" | "cash_on_delivery";
  status: "pending" | "confirmed" | "packed" | "shipped" | "delivered" | "cancelled";
  courierName?: string;
  estimatedDeliveryDate?: string;
}
