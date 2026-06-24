import React from "react";
import { FaClock, FaGavel, FaShieldAlt, FaBolt, FaTrophy, FaUsers } from "react-icons/fa";

const features = [
  {
    icon: <FaBolt />,
    title: "Real-Time Bidding",
    description:
      "Experience instant bid updates with live auction tracking and notifications.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Secure Transactions",
    description:
      "Advanced security measures ensure safe payments and trusted user interactions.",
  },
  {
    icon: <FaTrophy />,
    title: "Exclusive Products",
    description:
      "Discover unique collectibles, gadgets, luxury items, and rare auction listings.",
  },
  {
    icon: <FaUsers />,
    title: "Growing Community",
    description:
      "Join thousands of active buyers and sellers participating every day.",
  },
];

export const Features = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-5">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-indigo-600 font-semibold uppercase tracking-widest text-sm">
            Platform Benefits
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
            Why Choose AuctionHub?
          </h2>

          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Everything you need to buy, sell, and win auctions
            through a modern and secure marketplace.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-8 border border-gray-200 hover:border-indigo-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition">
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="mt-20 bg-white rounded-3xl border border-gray-200 p-10 shadow-sm">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">

            <div>
              <h3 className="text-4xl font-bold text-indigo-600">
                50K+
              </h3>
              <p className="text-gray-500 mt-2">
                Registered Users
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-indigo-600">
                120K+
              </h3>
              <p className="text-gray-500 mt-2">
                Auctions Completed
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-indigo-600">
                ₹15Cr+
              </h3>
              <p className="text-gray-500 mt-2">
                Total Sales
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-indigo-600">
                99.9%
              </h3>
              <p className="text-gray-500 mt-2">
                Secure Transactions
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};