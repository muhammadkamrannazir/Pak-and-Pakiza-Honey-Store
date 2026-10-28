"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Package,
  Truck,
  TrendingUp,
  Users,
  CheckCircle2,
  Clock,
  AlertCircle,
  Download,
  Filter,
  RefreshCw,
  Search,
  ExternalLink,
  ShieldCheck,
  ShoppingBag
} from "lucide-react";
import { useOrders } from "@/context/OrderContext";
import { PRODUCTS, BRAND_INFO } from "@/data/products";
import { Order } from "@/types";

export default function AdminPage() {
  const { orders, updateOrderStatus } = useOrders();
  const [activeTab, setActiveTab] = useState<"orders" | "inventory" | "settings">("orders");
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [productStocks, setProductStocks] = useState<Record<string, number>>(
    PRODUCTS.reduce((acc, p) => ({ ...acc, [p.id]: p.stockCount }), {})
  );

  // Compute metrics
  const totalRevenue = orders.reduce((sum, o) => sum + o.total, 0);
  const pendingOrders = orders.filter((o) => o.status === "pending" || o.status === "confirmed").length;
  const completedOrders = orders.filter((o) => o.status === "delivered").length;

  const filteredOrders = orders.filter((o) => {
    if (filterStatus !== "all" && o.status !== filterStatus) return false;
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      return (
        o.id.toLowerCase().includes(term) ||
        o.customer.fullName.toLowerCase().includes(term) ||
        o.customer.city.toLowerCase().includes(term) ||
        o.customer.phone.includes(term)
      );
    }
    return true;
  });

  const handleExportCSV = () => {
    const headers = ["Order ID", "Date", "Customer", "Phone", "City", "Total PKR", "Payment", "Status"];
    const rows = orders.map((o) => [
      o.id,
      new Date(o.createdAt).toLocaleDateString(),
      `"${o.customer.fullName}"`,
      o.customer.phone,
      o.customer.city,
      o.total,
      o.paymentMethod,
      o.status
    ]);
    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `pak_pakiza_orders_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-[#FAF7F2] min-h-screen py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Admin Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 mb-1">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold text-amber-900 tracking-wider uppercase">
                Burewala Operations Portal
              </span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl font-black text-[#2D1A0E] tracking-tight">
              Pak and Pakiza Admin
            </h1>
            <p className="text-xs text-amber-900/70 mt-0.5">
              Manage pure honey orders, inventory levels, and logistics dispatch.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleExportCSV}
              className="px-4 py-2.5 rounded-full bg-white hover:bg-amber-100 text-amber-950 text-xs font-bold border border-amber-300 flex items-center gap-2 shadow-xs transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-amber-700" />
              <span>Export Orders (CSV)</span>
            </button>
            <Link
              href="/"
              className="px-4 py-2.5 rounded-full honey-gold-btn text-xs font-bold shadow-sm"
            >
              View Live Store
            </Link>
          </div>
        </div>

        {/* Analytics Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
          <div className="bg-white rounded-3xl p-6 border border-amber-200/90 honey-card-shadow">
            <div className="flex items-center justify-between text-xs text-amber-800 font-bold mb-2">
              <span>Total Gross Sales</span>
              <span className="p-2 rounded-xl bg-amber-50 text-amber-700">₨</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-[#2D1A0E]">
              Rs. {totalRevenue.toLocaleString()}
            </h3>
            <span className="text-[11px] text-emerald-700 font-bold block mt-1">
              ✓ Across {orders.length} orders
            </span>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-amber-200/90 honey-card-shadow">
            <div className="flex items-center justify-between text-xs text-amber-800 font-bold mb-2">
              <span>Pending Dispatch</span>
              <Clock className="w-4 h-4 text-amber-600" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-amber-700">
              {pendingOrders}
            </h3>
            <span className="text-[11px] text-amber-800/80 font-medium block mt-1">
              Requires verification or packing
            </span>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-amber-200/90 honey-card-shadow">
            <div className="flex items-center justify-between text-xs text-amber-800 font-bold mb-2">
              <span>Delivered Parcels</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-emerald-800">
              {completedOrders}
            </h3>
            <span className="text-[11px] text-emerald-700 font-bold block mt-1">
              Successfully received
            </span>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-amber-200/90 honey-card-shadow">
            <div className="flex items-center justify-between text-xs text-amber-800 font-bold mb-2">
              <span>Active Honey SKUs</span>
              <ShoppingBag className="w-4 h-4 text-amber-600" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-[#2D1A0E]">
              {PRODUCTS.length} Varieties
            </h3>
            <span className="text-[11px] text-amber-800/80 font-medium block mt-1">
              All in stock at Burewala
            </span>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-2 border-b border-amber-200 pb-4 mb-6">
          <button
            onClick={() => setActiveTab("orders")}
            className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
              activeTab === "orders"
                ? "bg-amber-500 text-[#2D1A0E] shadow-xs"
                : "text-amber-900 hover:bg-amber-100"
            }`}
          >
            Orders Management ({orders.length})
          </button>
          <button
            onClick={() => setActiveTab("inventory")}
            className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
              activeTab === "inventory"
                ? "bg-amber-500 text-[#2D1A0E] shadow-xs"
                : "text-amber-900 hover:bg-amber-100"
            }`}
          >
            Honey Inventory &amp; Prices
          </button>
        </div>

        {/* Orders Tab */}
        {activeTab === "orders" && (
          <div className="space-y-4">
            {/* Filter and Search Bar */}
            <div className="bg-white rounded-2xl p-4 border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="relative w-full sm:w-72">
                <Search className="w-4 h-4 text-amber-700 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search order ID, name, city..."
                  className="w-full pl-9 pr-3 py-1.5 text-xs rounded-xl border border-amber-200 bg-[#FAF7F2] outline-none"
                />
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <span className="text-xs font-bold text-amber-900">Status:</span>
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="px-3 py-1.5 rounded-xl border border-amber-200 text-xs font-bold bg-[#FAF7F2] text-[#2D1A0E] outline-none cursor-pointer"
                >
                  <option value="all">All Orders</option>
                  <option value="pending">Pending</option>
                  <option value="confirmed">Confirmed</option>
                  <option value="packed">Packed</option>
                  <option value="shipped">Shipped</option>
                  <option value="delivered">Delivered</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>
            </div>

            {/* Orders Table */}
            <div className="bg-white rounded-3xl border border-amber-200/90 honey-card-shadow overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-amber-50/80 border-b border-amber-200 text-amber-950 uppercase font-black tracking-wider text-[11px]">
                    <tr>
                      <th className="py-4 px-6">Order ID &amp; Date</th>
                      <th className="py-4 px-6">Customer &amp; City</th>
                      <th className="py-4 px-6">Honey Items</th>
                      <th className="py-4 px-6">Total Amount</th>
                      <th className="py-4 px-6">Payment</th>
                      <th className="py-4 px-6">Status Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-amber-100 font-medium">
                    {filteredOrders.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="text-center py-8 text-amber-900/60">
                          No orders found matching the filter.
                        </td>
                      </tr>
                    ) : (
                      filteredOrders.map((order) => (
                        <tr key={order.id} className="hover:bg-amber-50/40 transition-colors">
                          <td className="py-4 px-6">
                            <Link
                              href={`/order-confirmation/${order.id}`}
                              className="font-bold text-amber-800 hover:underline flex items-center gap-1"
                            >
                              <span>{order.id}</span>
                              <ExternalLink className="w-3 h-3" />
                            </Link>
                            <span className="text-[10px] text-amber-900/60 block mt-0.5">
                              {new Date(order.createdAt).toLocaleDateString()}
                            </span>
                            <span className="text-[10px] text-amber-900/50 block">
                              Track: {order.trackingNumber}
                            </span>
                          </td>

                          <td className="py-4 px-6">
                            <span className="font-bold text-[#2D1A0E] block">
                              {order.customer.fullName}
                            </span>
                            <span className="text-[11px] text-amber-900/80 block">
                              {order.customer.city} • {order.customer.phone}
                            </span>
                            <span className="text-[10px] text-amber-900/60 truncate block max-w-xs">
                              {order.customer.address}
                            </span>
                          </td>

                          <td className="py-4 px-6">
                            <div className="space-y-1">
                              {order.items.map((i, idx) => (
                                <span key={idx} className="block text-[11px] text-[#2D1A0E]">
                                  • {i.name} ({i.sizeLabel}) × {i.quantity}
                                </span>
                              ))}
                            </div>
                          </td>

                          <td className="py-4 px-6">
                            <span className="font-black text-amber-800 text-sm">
                              Rs. {order.total.toLocaleString()}
                            </span>
                          </td>

                          <td className="py-4 px-6">
                            <span className="px-2 py-0.5 rounded uppercase font-bold text-[10px] bg-amber-100 text-amber-900 block w-fit">
                              {order.paymentMethod}
                            </span>
                          </td>

                          <td className="py-4 px-6">
                            <select
                              value={order.status}
                              onChange={(e) =>
                                updateOrderStatus(order.id, e.target.value as Order["status"])
                              }
                              className={`px-3 py-1.5 rounded-xl text-xs font-bold border outline-none cursor-pointer ${
                                order.status === "delivered"
                                  ? "bg-emerald-50 text-emerald-800 border-emerald-300"
                                  : order.status === "shipped"
                                  ? "bg-blue-50 text-blue-800 border-blue-300"
                                  : order.status === "packed"
                                  ? "bg-amber-100 text-amber-900 border-amber-300"
                                  : "bg-orange-50 text-orange-800 border-orange-300"
                              }`}
                            >
                              <option value="pending">Pending</option>
                              <option value="confirmed">Confirmed</option>
                              <option value="packed">Packed</option>
                              <option value="shipped">Shipped</option>
                              <option value="delivered">Delivered</option>
                              <option value="cancelled">Cancelled</option>
                            </select>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Inventory Tab */}
        {activeTab === "inventory" && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-200/90 honey-card-shadow">
            <h3 className="font-serif text-lg font-bold text-[#2D1A0E] mb-6">
              Pure Honey Stock Inventory
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PRODUCTS.map((prod) => (
                <div
                  key={prod.id}
                  className="p-5 rounded-2xl bg-[#FAF7F2] border border-amber-200 flex flex-col justify-between"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="relative w-14 h-14 rounded-xl bg-white p-1 border border-amber-200">
                      <Image
                        src={prod.image}
                        alt={prod.name}
                        fill
                        className="object-contain p-1"
                      />
                    </div>
                    <div>
                      <h4 className="font-serif text-base font-bold text-[#2D1A0E]">
                        {prod.name}
                      </h4>
                      <span className="text-xs text-amber-800/80">{prod.category}</span>
                    </div>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between border-b border-amber-200/60 pb-1.5">
                      <span>Base 500g Price:</span>
                      <strong className="text-amber-800">
                        Rs. {prod.pricePKR.toLocaleString()}
                      </strong>
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <span>Units in Stock:</span>
                      <input
                        type="number"
                        min={0}
                        value={productStocks[prod.id] || 0}
                        onChange={(e) =>
                          setProductStocks({
                            ...productStocks,
                            [prod.id]: parseInt(e.target.value) || 0
                          })
                        }
                        className="w-20 px-2.5 py-1 text-center font-bold text-[#2D1A0E] bg-white rounded-lg border border-amber-300 outline-none"
                      />
                    </div>

                    <div className="pt-2 flex justify-between items-center text-[11px]">
                      <span>Availability:</span>
                      <span className="text-emerald-700 font-bold">● Active on Store</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
