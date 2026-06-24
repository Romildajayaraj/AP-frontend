import { Link } from "react-router";
import {
  FiTrendingUp,
  FiClock,
  FiPlus,
  FiArrowRight,
} from "react-icons/fi";

import {
  MdOutlineGavel,
  MdOutlineLocalOffer,
  MdOutlineAccountBalanceWallet,
} from "react-icons/md";

export default function Dashboard() {
  // SAFE DATA
  const latestAuctions = [];
  const myAuctions = [];
  const auctions = [];
  const bids = [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50 px-4 md:px-8 py-6">

      {/* HERO SECTION */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 p-8 md:p-10 shadow-xl mb-8">

        <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-pink-400/10 rounded-full blur-3xl" />

        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">

          <div>
            <h1 className="text-4xl font-bold text-white mb-3">
              Welcome Back 👋
            </h1>

            <p className="text-indigo-100 text-lg max-w-xl">
              Discover premium auctions, manage your listings,
              and track bidding activity in real time.
            </p>
          </div>

          <Link
            to="/create"
            className="flex items-center gap-2 bg-white text-indigo-700 px-6 py-3 rounded-2xl font-semibold shadow-lg hover:scale-105 transition-all duration-300"
          >
            <FiPlus className="text-lg" />
            Create Auction
          </Link>
        </div>
      </div>

      {/* STATS SECTION */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">

        {/* CARD 1 */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300">

          <div className="flex items-center justify-between mb-5">
            <div className="p-4 rounded-2xl bg-indigo-100 text-indigo-600">
              <MdOutlineGavel className="text-2xl" />
            </div>

            <span className="text-green-500 text-sm font-medium">
              +12%
            </span>
          </div>

         <h3 className="text-3xl font-bold text-gray-900">
  {auctions?.length || 0}
</h3>

          <p className="text-gray-500 mt-1">
            Total Auctions
          </p>
        </div>

        {/* CARD 2 */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300">

          <div className="flex items-center justify-between mb-5">
            <div className="p-4 rounded-2xl bg-emerald-100 text-emerald-600">
              <FiTrendingUp className="text-2xl" />
            </div>

            <span className="text-green-500 text-sm font-medium">
              Live
            </span>
          </div>

          <h3 className="text-3xl font-bold text-gray-900">
  {
    auctions?.filter(
      (item) => item.status === "active"
    )?.length || 0
  }
</h3>

          <p className="text-gray-500 mt-1">
            Active Auctions
          </p>
        </div>

        {/* CARD 3 */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300">

          <div className="flex items-center justify-between mb-5">
            <div className="p-4 rounded-2xl bg-pink-100 text-pink-600">
              <MdOutlineLocalOffer className="text-2xl" />
            </div>

            <span className="text-gray-400 text-sm">
              Updated
            </span>
          </div>

          <h3 className="text-3xl font-bold text-gray-900">
  {myAuctions?.length || 0}
</h3>

          <p className="text-gray-500 mt-1">
            Your Listings
          </p>
        </div>

        {/* CARD 4 */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300">

          <div className="flex items-center justify-between mb-5">
            <div className="p-4 rounded-2xl bg-orange-100 text-orange-600">
              <MdOutlineAccountBalanceWallet className="text-2xl" />
            </div>

            <span className="text-green-500 text-sm font-medium">
              +₹4k
            </span>
          </div>

          <h3 className="text-3xl font-bold text-gray-900">
  ₹
  {bids
    ?.reduce(
      (total, bid) => total + (bid.amount || 0),
      0
    )
    ?.toLocaleString() || 0}
</h3>

          <p className="text-gray-500 mt-1">
            Earnings
          </p>
        </div>
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

        {/* LEFT SIDE */}
        <div className="xl:col-span-2 space-y-8">

          {/* TRENDING AUCTIONS */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">

            <div className="flex justify-between items-center mb-6">

              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Trending Auctions
                </h2>

                <p className="text-gray-500 mt-1">
                  Popular items people are bidding on
                </p>
              </div>

              <Link
                to="/auction"
                className="flex items-center gap-2 text-indigo-600 font-medium hover:gap-3 transition-all"
              >
                View All
                <FiArrowRight />
              </Link>
            </div>

            {/* EMPTY STATE */}
            {latestAuctions?.length === 0 ? (
              <div className="border-2 border-dashed border-gray-200 rounded-3xl py-16 text-center">

                <div className="bg-indigo-100 text-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MdOutlineGavel className="text-3xl" />
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  No Auctions Available
                </h3>

                <p className="text-gray-500 mb-6">
                  Start your first auction and attract bidders.
                </p>

                <Link
                  to="/create"
                  className="inline-flex items-center gap-2 bg-indigo-600 text-white px-5 py-3 rounded-xl hover:bg-indigo-700 transition"
                >
                  <FiPlus />
                  Create Auction
                </Link>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-5">
                {latestAuctions?.map((auction, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-gray-100 p-5 hover:shadow-lg transition"
                  >
                    Auction Card
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* YOUR AUCTIONS */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">

            <div className="flex justify-between items-center mb-6">

              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Your Auctions
                </h2>

                <p className="text-gray-500 mt-1">
                  Manage your latest listings
                </p>
              </div>

              <Link
                to="/myauction"
                className="flex items-center gap-2 text-indigo-600 font-medium hover:gap-3 transition-all"
              >
                View All
                <FiArrowRight />
              </Link>
            </div>

            {myAuctions?.length === 0 ? (
              <div className="border-2 border-dashed border-gray-200 rounded-3xl py-16 text-center">

                <div className="bg-pink-100 text-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MdOutlineLocalOffer className="text-3xl" />
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  No Listings Yet
                </h3>

                <p className="text-gray-500 mb-6">
                  Create auctions to start selling products.
                </p>

                <Link
                  to="/create"
                  className="inline-flex items-center gap-2 bg-pink-600 text-white px-5 py-3 rounded-xl hover:bg-pink-700 transition"
                >
                  <FiPlus />
                  Add Listing
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {myAuctions?.map((item, index) => (
                  <div
                    key={index}
                    className="border border-gray-100 rounded-2xl p-5 hover:shadow-md transition"
                  >
                    Auction Item
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="space-y-8">

          {/* LIVE ACTIVITY */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">

            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">
                Live Activity
              </h2>

              <FiClock className="text-indigo-500 text-xl" />
            </div>

            <div className="space-y-5">

              <div className="flex gap-4">
                <div className="w-3 h-3 rounded-full bg-green-500 mt-2" />

                <div>
                  <p className="font-medium text-gray-800">
                    New bid placed
                  </p>

                  <p className="text-sm text-gray-500">
                    2 minutes ago
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-3 h-3 rounded-full bg-indigo-500 mt-2" />

                <div>
                  <p className="font-medium text-gray-800">
                    Auction created
                  </p>

                  <p className="text-sm text-gray-500">
                    10 minutes ago
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-3 h-3 rounded-full bg-pink-500 mt-2" />

                <div>
                  <p className="font-medium text-gray-800">
                    Listing updated
                  </p>

                  <p className="text-sm text-gray-500">
                    1 hour ago
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* QUICK ACTIONS */}
          <div className="bg-gradient-to-br from-indigo-600 to-violet-600 rounded-3xl p-6 text-white shadow-xl">

            <h2 className="text-2xl font-bold mb-3">
              Quick Actions
            </h2>

            <p className="text-indigo-100 mb-6">
              Manage your marketplace faster with shortcuts.
            </p>

            <div className="space-y-3">

              <Link
                to="/create"
                className="flex items-center justify-between bg-white/10 hover:bg-white/20 px-4 py-4 rounded-2xl transition"
              >
                <span>Create Auction</span>
                <FiArrowRight />
              </Link>

              <Link
                to="/auction"
                className="flex items-center justify-between bg-white/10 hover:bg-white/20 px-4 py-4 rounded-2xl transition"
              >
                <span>Browse Auctions</span>
                <FiArrowRight />
              </Link>

              <Link
                to="/mybids"
                className="flex items-center justify-between bg-white/10 hover:bg-white/20 px-4 py-4 rounded-2xl transition"
              >
                <span>My Bids</span>
                <FiArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}