"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { HoneyProduct, SizeOption, CartItem } from "@/types";
import { BRAND_INFO } from "@/data/products";

interface CouponResult {
  success: boolean;
  message: string;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (product: HoneyProduct, selectedSize?: SizeOption, quantity?: number) => void;
  removeFromCart: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, quantity: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  couponCode: string;
  discountAmount: number;
  applyCoupon: (code: string) => CouponResult;
  removeCoupon: () => void;
  subtotal: number;
  deliveryFee: number;
  total: number;
  totalItemCount: number;
  freeShippingProgress: {
    needed: number;
    percentage: number;
    isEligible: boolean;
  };
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const VALID_COUPONS: Record<string, { percent?: number; fixed?: number; label: string }> = {
  PAKIZA10: { percent: 0.10, label: "10% Welcome Discount" },
  PUREHONEY: { percent: 0.15, label: "15% Pure Honey Special" },
  SWEET500: { fixed: 500, label: "Rs. 500 Flat Savings" }
};

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [discountAmount, setDiscountAmount] = useState(0);
  const [isInitialized, setIsInitialized] = useState(false);

  // Load cart from LocalStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("pak_pakiza_cart");
      if (saved) {
        setItems(JSON.parse(saved));
      }
      const savedCoupon = localStorage.getItem("pak_pakiza_coupon");
      if (savedCoupon) {
        setCouponCode(savedCoupon);
      }
    } catch {
      // ignore storage errors
    } finally {
      setIsInitialized(true);
    }
  }, []);

  // Save cart to LocalStorage
  useEffect(() => {
    if (!isInitialized) return;
    try {
      localStorage.setItem("pak_pakiza_cart", JSON.stringify(items));
      if (couponCode) {
        localStorage.setItem("pak_pakiza_coupon", couponCode);
      } else {
        localStorage.removeItem("pak_pakiza_coupon");
      }
    } catch {
      // ignore
    }
  }, [items, couponCode, isInitialized]);

  const subtotal = items.reduce(
    (sum, item) => sum + item.selectedSize.pricePKR * item.quantity,
    0
  );

  const deliveryFee =
    subtotal === 0 || subtotal >= BRAND_INFO.freeShippingThreshold
      ? 0
      : BRAND_INFO.defaultShippingFee;

  // Recalculate discount
  useEffect(() => {
    if (!couponCode || !VALID_COUPONS[couponCode.toUpperCase()]) {
      setDiscountAmount(0);
      return;
    }
    const promo = VALID_COUPONS[couponCode.toUpperCase()];
    if (promo.percent) {
      setDiscountAmount(Math.round(subtotal * promo.percent));
    } else if (promo.fixed) {
      setDiscountAmount(Math.min(promo.fixed, subtotal));
    }
  }, [subtotal, couponCode]);

  const total = Math.max(0, subtotal - discountAmount + deliveryFee);
  const totalItemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const freeShippingProgress = {
    needed: Math.max(0, BRAND_INFO.freeShippingThreshold - subtotal),
    percentage: Math.min(100, Math.round((subtotal / BRAND_INFO.freeShippingThreshold) * 100)),
    isEligible: subtotal >= BRAND_INFO.freeShippingThreshold
  };

  const addToCart = (
    product: HoneyProduct,
    selectedSize?: SizeOption,
    quantity = 1
  ) => {
    const size = selectedSize || product.sizes[0];
    const itemId = `${product.id}-${size.label}`;

    setItems((prev) => {
      const existing = prev.find((item) => item.id === itemId);
      if (existing) {
        return prev.map((item) =>
          item.id === itemId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { id: itemId, product, selectedSize: size, quantity }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (cartItemId: string) => {
    setItems((prev) => prev.filter((item) => item.id !== cartItemId));
  };

  const updateQuantity = (cartItemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    setItems((prev) =>
      prev.map((item) =>
        item.id === cartItemId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
    setCouponCode("");
    setDiscountAmount(0);
    try {
      localStorage.removeItem("pak_pakiza_cart");
      localStorage.removeItem("pak_pakiza_coupon");
    } catch {
      // ignore
    }
  };

  const applyCoupon = (code: string): CouponResult => {
    const clean = code.trim().toUpperCase();
    if (VALID_COUPONS[clean]) {
      setCouponCode(clean);
      return {
        success: true,
        message: `Coupon "${clean}" applied! (${VALID_COUPONS[clean].label})`
      };
    }
    return {
      success: false,
      message: 'Invalid promo code. Try "PAKIZA10" for 10% off.'
    };
  };

  const removeCoupon = () => {
    setCouponCode("");
    setDiscountAmount(0);
  };

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);
  const toggleCart = () => setIsCartOpen((prev) => !prev);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        openCart,
        closeCart,
        toggleCart,
        couponCode,
        discountAmount,
        applyCoupon,
        removeCoupon,
        subtotal,
        deliveryFee,
        total,
        totalItemCount,
        freeShippingProgress
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
