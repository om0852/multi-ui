"use client"

import React from 'react';
import FlipClock from '../_components/Clock_13';
import { FaClock } from 'react-icons/fa6';

const Example_13: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-3 py-4 sm:px-4 sm:py-6">
        <div className="mb-4 sm:mb-6">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 flex items-center">
            <FaClock className="mr-2 text-pink-500" />
            Flip Clock Collection
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
          {/* Pink Theme */}
          <div className="p-3 sm:p-4 md:p-6 rounded-lg bg-gray-900 shadow-lg">
            <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-4 text-white">Pink Theme</h2>
            <div className="h-36 sm:h-48 md:h-64 flex items-center justify-center transform scale-90 sm:scale-100">
              <FlipClock 
                size="medium"
                containerClassName="flex justify-center items-center"
                digitContainerClassName="bg-pink-900"
                digitClassName="text-pink-100 text-2xl sm:text-3xl md:text-4xl"
                labelClassName="text-pink-400 text-xs sm:text-sm"
              />
            </div>
          </div>

          {/* Blue Theme */}
          <div className="p-3 sm:p-4 md:p-6 rounded-lg bg-gray-900 shadow-lg">
            <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-4 text-white">Blue Theme</h2>
            <div className="h-36 sm:h-48 md:h-64 flex items-center justify-center transform scale-90 sm:scale-100">
              <FlipClock 
                size="medium"
                containerClassName="flex justify-center items-center"
                digitContainerClassName="bg-blue-900"
                digitClassName="text-blue-100 text-2xl sm:text-3xl md:text-4xl"
                labelClassName="text-blue-400 text-xs sm:text-sm"
              />
            </div>
          </div>

          {/* Green Theme */}
          <div className="p-3 sm:p-4 md:p-6 rounded-lg bg-gray-900 shadow-lg">
            <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-4 text-white">Green Theme</h2>
            <div className="h-36 sm:h-48 md:h-64 flex items-center justify-center transform scale-90 sm:scale-100">
              <FlipClock 
                size="medium"
                containerClassName="flex justify-center items-center"
                digitContainerClassName="bg-green-900"
                digitClassName="text-green-100 text-2xl sm:text-3xl md:text-4xl"
                labelClassName="text-green-400 text-xs sm:text-sm"
              />
            </div>
          </div>

          {/* Purple Theme */}
          <div className="p-3 sm:p-4 md:p-6 rounded-lg bg-gray-900 shadow-lg">
            <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-4 text-white">Purple Theme</h2>
            <div className="h-36 sm:h-48 md:h-64 flex items-center justify-center transform scale-90 sm:scale-100">
              <FlipClock 
                size="medium"
                containerClassName="flex justify-center items-center"
                digitContainerClassName="bg-purple-900"
                digitClassName="text-purple-100 text-2xl sm:text-3xl md:text-4xl"
                labelClassName="text-purple-400 text-xs sm:text-sm"
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .glow-pink {
          filter: drop-shadow(0 0 5px #ec4899) drop-shadow(0 0 10px #ec4899);
        }
        .glow-blue {
          filter: drop-shadow(0 0 5px #60a5fa) drop-shadow(0 0 10px #60a5fa);
        }
        .glow-green {
          filter: drop-shadow(0 0 5px #4ade80) drop-shadow(0 0 10px #4ade80);
        }
        .glow-purple {
          filter: drop-shadow(0 0 5px #c084fc) drop-shadow(0 0 10px #c084fc);
        }
      `}</style>
    </div>
  );
};

export default Example_13; 