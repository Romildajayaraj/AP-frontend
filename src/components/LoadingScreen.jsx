import { RiAuctionLine } from "react-icons/ri";

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white">
      
      {/* Logo Animation */}
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-indigo-200 animate-ping opacity-40"></div>

        <div className="relative w-20 h-20 rounded-full bg-indigo-600 flex items-center justify-center shadow-lg">
          <RiAuctionLine className="text-white text-4xl" />
        </div>
      </div>

      {/* Loading Text */}
      <h2 className="mt-6 text-xl font-bold text-gray-800">
        Online Auction
      </h2>

      <p className="mt-2 text-sm text-gray-500">
        Loading auctions...
      </p>

      {/* Progress Bar */}
      <div className="w-56 h-2 bg-gray-200 rounded-full overflow-hidden mt-5">
        <div className="h-full bg-indigo-600 rounded-full animate-[loading_1.5s_ease-in-out_infinite]"></div>
      </div>

      <style>
        {`
          @keyframes loading {
            0% {
              width: 0%;
            }
            50% {
              width: 70%;
            }
            100% {
              width: 100%;
            }
          }
        `}
      </style>
    </div>
  );
};

export default LoadingScreen;