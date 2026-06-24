import React from "react";
import { Link } from "react-router";

export default function Hero() {
  return (
 <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-indigo-50 to-violet-50" />
      <div className="absolute top-24 left-12 w-80 h-80 bg-violet-100/40 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-[28rem] h-[28rem] bg-indigo-100/30 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 pt-24 pb-28 text-center">
        
        {/* Tag */}
        <div className="inline-flex items-center gap-2 bg-white border border-gray-200 shadow-sm text-indigo-600 text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
          🔥 Real-Time Auction Marketplace
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
          Discover Rare Deals &  
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
            Win Every Bid
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-10">
          Join a fast-growing auction platform where buyers and sellers connect in real-time.
          Bid smarter, sell faster, and explore exclusive listings daily.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          
          <Link
            to="/auction"
            className="px-8 py-3.5 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition shadow-md"
          >
            Browse Auctions
          </Link>

          <Link
            to="/create"
            className="px-8 py-3.5 rounded-xl bg-white border border-gray-200 text-gray-700 font-semibold hover:bg-gray-50 transition"
          >
            Start Selling
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          
          <div className="bg-white/70 backdrop-blur border border-gray-100 rounded-2xl p-5 shadow-sm">
            <p className="text-3xl font-bold text-indigo-600">10K+</p>
            <p className="text-gray-500 text-sm mt-1">Active Users</p>
          </div>

          <div className="bg-white/70 backdrop-blur border border-gray-100 rounded-2xl p-5 shadow-sm">
            <p className="text-3xl font-bold text-violet-600">5K+</p>
            <p className="text-gray-500 text-sm mt-1">Live Auctions</p>
          </div>

          <div className="bg-white/70 backdrop-blur border border-gray-100 rounded-2xl p-5 shadow-sm">
            <p className="text-3xl font-bold text-emerald-600">₹2Cr+</p>
            <p className="text-gray-500 text-sm mt-1">Total Bids Placed</p>
          </div>

        </div>
      </div>
    </section>
  );
}