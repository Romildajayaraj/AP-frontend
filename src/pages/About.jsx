import { Link } from "react-router";
import { useSelector } from "react-redux";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import {
  FiTrendingUp,
  FiUsers,
  FiAward,
  FiArrowRight,
} from "react-icons/fi";
import { MdOutlineGavel } from "react-icons/md";
import { MdSecurity } from "react-icons/md";
import { MdDevices } from "react-icons/md";

export default function About() {
    const isLoggedIn = localStorage.getItem("token");

  const handlePlaceBid = () => {
    window.location.href = isLoggedIn
      ? "/create-auction"
      : "/login";
  };

  const handleExploreAuctions = () => {
    window.location.href = "/auctions";
  };

  const handleLearnMore = () => {
    window.location.href = "/legal";
  };

  const handleGetStarted = () => {
    window.location.href = isLoggedIn
      ? "/dashboard"
      : "/signup";
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden">

        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-200/30 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 py-24">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* LEFT CONTENT */}
            <div>

              <span className="bg-indigo-100 text-indigo-700 px-5 py-2 rounded-full text-sm font-semibold">
                Modern Auction Marketplace
              </span>

              <h1 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight mt-6">
                Experience
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
                  {" "}Smart{" "}
                </span>
                Online Bidding
              </h1>

              <p className="text-gray-600 text-lg leading-8 mt-8">
                BidVerse is a next-generation auction platform
                where users can explore premium listings,
                place competitive bids, and manage auctions
                through an elegant and interactive experience.
              </p>

              <div className="flex flex-wrap gap-4 mt-10">

                <button
  onClick={handleExploreAuctions}
  className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:scale-105"
>
  Explore Auctions
</button>

                <button
  onClick={handleLearnMore}
  className="border border-gray-300 hover:border-indigo-400 hover:text-indigo-600 px-8 py-4 rounded-2xl font-semibold transition-all duration-300"
>
  Learn More
</button>
              </div>

              {/* STATS */}
              <div className="grid grid-cols-3 gap-6 mt-14">

                <div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    10K+
                  </h2>

                  <p className="text-gray-500 mt-1">
                    Active Users
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    25K+
                  </h2>

                  <p className="text-gray-500 mt-1">
                    Auctions
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    ₹2M+
                  </h2>

                  <p className="text-gray-500 mt-1">
                    Transactions
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="relative">

              <div className="bg-white/80 backdrop-blur-xl border border-white/50 rounded-[40px] shadow-2xl p-8">

                <div className="bg-gradient-to-br from-indigo-600 to-violet-600 rounded-3xl p-8 text-white">

                  <div className="flex items-center justify-between mb-10">

                    <div>
                      <p className="text-indigo-200">
                        Live Auction
                      </p>

                      <h2 className="text-3xl font-bold mt-2">
                        Premium Watch
                      </h2>
                    </div>

                    <div className="bg-white/20 px-4 py-2 rounded-full text-sm">
                      Live Bid
                    </div>
                  </div>

                  <div className="bg-white/10 rounded-2xl p-6">

                    <div className="flex justify-between mb-5">
                      <span>Current Bid</span>
                      <span className="font-bold">
                        ₹1,25,000
                      </span>
                    </div>

                    <div className="flex justify-between mb-5">
                      <span>Total Bidders</span>
                      <span className="font-bold">
                        48
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span>Time Remaining</span>
                      <span className="font-bold">
                        02h : 18m
                      </span>
                    </div>
                  </div>

                  <button
  onClick={handlePlaceBid}
  className="w-full mt-8 bg-white text-indigo-700 py-4 rounded-2xl font-bold hover:scale-105 transition-all duration-300"
>
  Place Bid
</button>
                </div>

                {/* FLOATING CARD */}
                <div className="absolute -bottom-10 -left-10 bg-white rounded-3xl shadow-2xl p-6 border border-gray-100">

                  <div className="flex items-center gap-4">

                    <div className="bg-green-100 text-green-600 p-4 rounded-2xl">
                      <FiTrendingUp className="text-2xl" />
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        +38%
                      </h3>

                      <p className="text-gray-500">
                        Growth Rate
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="text-center mb-20">

          <span className="text-indigo-600 font-semibold tracking-wider uppercase">
            Why Choose Us
          </span>

          <h2 className="text-5xl font-black text-gray-900 mt-4">
            Powerful Marketplace Features
          </h2>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto mt-6 leading-8">
            BidVerse combines modern technology with
            user-friendly design to deliver a premium
            online auction experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {/* FEATURE 1 */}
          <div className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

            <div className="bg-indigo-100 text-indigo-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <MdOutlineGavel className="text-3xl" />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Live Bidding
            </h3>

            <p className="text-gray-600 leading-7">
              Participate in real-time auctions with
              dynamic bidding updates and instant results.
            </p>
          </div>

          {/* FEATURE 2 */}
          <div className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

            <div className="bg-pink-100 text-pink-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <MdSecurity className="text-3xl" />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Secure Platform
            </h3>

            <p className="text-gray-600 leading-7">
              Advanced authentication and protected
              transactions ensure a trusted experience.
            </p>
          </div>

          {/* FEATURE 3 */}
          <div className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

            <div className="bg-green-100 text-green-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <FiUsers className="text-3xl" />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Community Driven
            </h3>

            <p className="text-gray-600 leading-7">
              Connect buyers and sellers through
              transparent and competitive auctions.
            </p>
          </div>

          {/* FEATURE 4 */}
          <div className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

            <div className="bg-orange-100 text-orange-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <MdDevices className="text-3xl" />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Responsive Design
            </h3>

            <p className="text-gray-600 leading-7">
              Optimized perfectly for desktop,
              tablet, and mobile devices.
            </p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 rounded-[40px] p-10 md:p-16 text-center text-white relative overflow-hidden">

          <div className="absolute top-0 left-0 w-full h-full bg-white/5 backdrop-blur-sm" />

          <div className="relative z-10">

            <h2 className="text-5xl font-black mb-6">
              Ready to Start Bidding?
            </h2>

            <p className="text-indigo-100 text-xl max-w-3xl mx-auto leading-8">
              Join thousands of users exploring exciting
              auctions and premium marketplace experiences.
            </p>

            <button
  onClick={handleGetStarted}
  className="mt-10 bg-white text-indigo-700 px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-all duration-300 inline-flex items-center gap-3"
>
  Get Started
  <FiArrowRight />
</button>
          </div>
        </div>
      </section>
    </div>
  );
}