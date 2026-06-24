import { Link } from "react-router";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white">
      <div className="max-w-6xl mx-auto px-4 py-14">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* BRAND */}
          <div>
            <h2 className="text-2xl font-bold mb-3">
              AuctionHub
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              A real-time auction marketplace where users can buy, sell, and bid
              on unique items securely.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/auction"
                  className="hover:text-white transition-colors"
                >
                  Browse Auctions
                </Link>
              </li>

              <li>
                <Link
                  to="/create"
                  className="hover:text-white transition-colors"
                >
                  Create Auction
                </Link>
              </li>

              <li>
                <Link
                  to="/mybids"
                  className="hover:text-white transition-colors"
                >
                  My Bids
                </Link>
              </li>
            </ul>
          </div>

          {/* STAY UPDATED */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 mb-4">
              Stay Updated
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Get updates on new auctions and bidding trends.
            </p>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="mt-12 border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">

          <p>© 2026 AuctionHub. All rights reserved.</p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy
            </Link>

            <Link to="/terms" className="hover:text-white transition-colors">
              Terms
            </Link>

            <Link to="/cookies" className="hover:text-white transition-colors">
              Cookies
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
};