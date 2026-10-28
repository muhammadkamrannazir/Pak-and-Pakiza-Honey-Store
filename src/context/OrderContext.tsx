"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Order } from "@/types";

interface OrderContextType {
  orders: Order[];
  createOrder: (orderData: Omit<Order, "id" | "trackingNumber" | "createdAt" | "status">) => Order;
  getOrderById: (id: string) => Order | undefined;
  getOrderByTracking: (query: string) => Order | undefined;
  updateOrderStatus: (orderId: string, status: Order["status"], courierName?: string) => void;
}

const INITIAL_ORDERS: Order[] = [
  {
    id: "PKP-7419",
    trackingNumber: "TCS-9842104",
    createdAt: "2026-10-25T14:30:00Z",
    customer: {
      fullName: "Hamza Tariq",
      phone: "+92 300 8472910",
      email: "hamza.tariq@gmail.com",
      address: "House 42, Street 7, Sector F-8/2",
      city: "Islamabad",
      province: "Federal",
      postalCode: "44000",
      deliveryNotes: "Please deliver before 5 PM, ring door bell."
    },
    items: [
      {
        productId: "prod-sidr-gold",
        name: "Pure Sidr (Beri) Honey",
        sizeLabel: "1000g (1kg)",
        unitPrice: 4600,
        quantity: 1,
        subtotal: 4600,
        image: "/assets/hero_jar_pedestal.png"
      },
      {
        productId: "prod-pure-honeycomb",
        name: "Pure Natural Honeycomb (Comb Honey)",
        sizeLabel: "450g Wooden Tray",
        unitPrice: 2800,
        quantity: 1,
        subtotal: 2800,
        image: "/assets/gallery_fresh_comb_jar.png"
      }
    ],
    subtotal: 7400,
    deliveryFee: 0,
    discount: 740,
    total: 6660,
    paymentMethod: "cod",
    paymentStatus: "cash_on_delivery",
    status: "shipped",
    courierName: "TCS Express",
    estimatedDeliveryDate: "Tomorrow, 3:00 PM"
  },
  {
    id: "PKP-6892",
    trackingNumber: "LEO-7429184",
    createdAt: "2026-10-22T10:15:00Z",
    customer: {
      fullName: "Sana Mir",
      phone: "+92 321 4458921",
      email: "sana.mir@outlook.com",
      address: "Plaza 18-B, Block C, Phase 5, DHA",
      city: "Lahore",
      province: "Punjab",
      postalCode: "54000"
    },
    items: [
      {
        productId: "prod-wild-forest",
        name: "Wild Forest (Choti Makhi) Honey",
        sizeLabel: "500g",
        unitPrice: 3200,
        quantity: 2,
        subtotal: 6400,
        image: "/assets/bestseller_forest.png"
      }
    ],
    subtotal: 6400,
    deliveryFee: 0,
    discount: 0,
    total: 6400,
    paymentMethod: "jazzcash",
    paymentStatus: "paid",
    status: "delivered",
    courierName: "Leopards Courier",
    estimatedDeliveryDate: "Delivered on Oct 24, 2026"
  }
];

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export function OrderProvider({ children }: { children: React.ReactNode }) {
  const [orders, setOrders] = useState<Order[]>(INITIAL_ORDERS);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("pak_pakiza_orders");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setOrders(parsed);
        }
      }
    } catch {
      // ignore
    } finally {
      setIsInitialized(true);
    }
  }, []);

  useEffect(() => {
    if (!isInitialized) return;
    try {
      localStorage.setItem("pak_pakiza_orders", JSON.stringify(orders));
    } catch {
      // ignore
    }
  }, [orders, isInitialized]);

  const createOrder = (
    orderData: Omit<Order, "id" | "trackingNumber" | "createdAt" | "status">
  ): Order => {
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const trackingNum = `TCS-${Math.floor(1000000 + Math.random() * 9000000)}`;
    const newOrder: Order = {
      ...orderData,
      id: `PKP-${randomNum}`,
      trackingNumber: trackingNum,
      createdAt: new Date().toISOString(),
      status: "pending",
      courierName: "TCS Express",
      estimatedDeliveryDate: "In 2 - 3 business days"
    };

    setOrders((prev) => [newOrder, ...prev]);
    return newOrder;
  };

  const getOrderById = (id: string): Order | undefined => {
    return orders.find(
      (o) => o.id.toLowerCase() === id.trim().toLowerCase()
    );
  };

  const getOrderByTracking = (query: string): Order | undefined => {
    const clean = query.trim().toLowerCase();
    return orders.find(
      (o) =>
        o.id.toLowerCase() === clean ||
        o.trackingNumber.toLowerCase() === clean ||
        o.customer.phone.replace(/[\s-]/g, "").includes(clean.replace(/[\s-]/g, ""))
    );
  };

  const updateOrderStatus = (
    orderId: string,
    status: Order["status"],
    courierName?: string
  ) => {
    setOrders((prev) =>
      prev.map((o) =>
        o.id === orderId
          ? {
              ...o,
              status,
              ...(courierName ? { courierName } : {})
            }
          : o
      )
    );
  };

  return (
    <OrderContext.Provider
      value={{
        orders,
        createOrder,
        getOrderById,
        getOrderByTracking,
        updateOrderStatus
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}

export function useOrders() {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error("useOrders must be used within an OrderProvider");
  }
  return context;
}
