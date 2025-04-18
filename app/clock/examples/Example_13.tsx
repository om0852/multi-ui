"use client"

import React from 'react';
import FlipClock from '../_components/Clock_13';
import { FaClock } from 'react-icons/fa6';

const Example_13: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-6 sm:py-8">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2 flex items-center">
            <FaClock className="mr-2 text-pink-500" />
            Flip Clock Collection
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {/* Pink Theme */}
          <div className="p-4 sm:p-6 rounded-lg bg-gray-900 shadow-lg">
            <h2 className="text-lg sm:text-xl font-semibold mb-4 text-white">Pink Theme</h2>
            <div className="h-48 sm:h-64 flex items-center justify-center">
              <FlipClock 
                size="large"
                containerClassName="flex justify-center items-center"
                digitContainerClassName="bg-pink-900"
                digitClassName="text-pink-100"
                labelClassName="text-pink-400"
              />
            </div>
          </div>

          {/* Blue Theme */}
          <div className="p-4 sm:p-6 rounded-lg bg-gray-900 shadow-lg">
            <h2 className="text-lg sm:text-xl font-semibold mb-4 text-white">Blue Theme</h2>
            <div className="h-48 sm:h-64 flex items-center justify-center">
              <FlipClock 
                size="large"
                containerClassName="flex justify-center items-center"
                digitContainerClassName="bg-blue-900"
                digitClassName="text-blue-100"
                labelClassName="text-blue-400"
              />
            </div>
          </div>

          {/* Green Theme */}
          <div className="p-4 sm:p-6 rounded-lg bg-gray-900 shadow-lg">
            <h2 className="text-lg sm:text-xl font-semibold mb-4 text-white">Green Theme</h2>
            <div className="h-48 sm:h-64 flex items-center justify-center">
              <FlipClock 
                size="large"
                containerClassName="flex justify-center items-center"
                digitContainerClassName="bg-green-900"
                digitClassName="text-green-100"
                labelClassName="text-green-400"
              />
            </div>
          </div>

          {/* Purple Theme */}
          <div className="p-4 sm:p-6 rounded-lg bg-gray-900 shadow-lg">
            <h2 className="text-lg sm:text-xl font-semibold mb-4 text-white">Purple Theme</h2>
            <div className="h-48 sm:h-64 flex items-center justify-center">
              <FlipClock 
                size="large"
                containerClassName="flex justify-center items-center"
                digitContainerClassName="bg-purple-900"
                digitClassName="text-purple-100"
                labelClassName="text-purple-400"
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