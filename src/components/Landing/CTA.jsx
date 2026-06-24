import React from "react";
import { Link } from "react-router";

export const CTA = () => {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-5">
        <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900">
          
          {/* Background Glow */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-indigo-600/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl" />

          <div className="relative px-8 py-16 md:px-16 md:py-20 text-center">
            
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6">
              🚀 Start Your Auction Journey
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Turn Your Products Into
              <span className="block text-indigo-500">
                Winning Auctions
              </span>
            </h2>

            <p className="max-w-2xl mx-auto text-slate-400 text-lg mb-10">
              Join thousands of buyers and sellers. Create auctions,
              discover rare products, and bid in real time from anywhere.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/signup"
                className="inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-semibold transition"
              >
                Get Started Free
                <FaArrowRight />
              </Link>

              <Link
                to="/login"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl border border-slate-700 text-slate-300 hover:bg-slate-800 transition"
              >
                Sign In
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-14">
              <div>
                <h3 className="text-3xl font-bold text-white">10K+</h3>
                <p className="text-slate-400 mt-1">Active Users</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white">25K+</h3>
                <p className="text-slate-400 mt-1">Auctions Created</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white">₹5Cr+</h3>
                <p className="text-slate-400 mt-1">Products Sold</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};