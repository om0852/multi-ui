"use client"

import React from 'react';
import RetroLEDClock from '../_components/Clock_16';
import { FaClock } from 'react-icons/fa6';

const Example_16: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-3 py-4 sm:px-4 sm:py-6">
        <div className="mb-4 sm:mb-6">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 flex items-center">
            <FaClock className="mr-2 text-red-500" />
            Retro LED Clock
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
          {/* Red LED */}
          <div className="p-3 sm:p-4 md:p-6 rounded-lg bg-black shadow-lg">
            <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-4 text-white">Red LED</h2>
            <div className="h-36 sm:h-48 md:h-64 flex items-center justify-center transform scale-90 sm:scale-100">
              <RetroLEDClock 
                className="text-red-500 text-3xl sm:text-4xl md:text-5xl font-digital"
              />
            </div>
          </div>

          {/* Green LED */}
          <div className="p-3 sm:p-4 md:p-6 rounded-lg bg-black shadow-lg">
            <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-4 text-white">Green LED</h2>
            <div className="h-36 sm:h-48 md:h-64 flex items-center justify-center transform scale-90 sm:scale-100">
              <RetroLEDClock 
                className="text-green-500 text-3xl sm:text-4xl md:text-5xl font-digital"
              />
            </div>
          </div>

          {/* Blue LED */}
          <div className="p-3 sm:p-4 md:p-6 rounded-lg bg-black shadow-lg">
            <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-4 text-white">Blue LED</h2>
            <div className="h-36 sm:h-48 md:h-64 flex items-center justify-center transform scale-90 sm:scale-100">
              <RetroLEDClock 
                className="text-blue-500 text-3xl sm:text-4xl md:text-5xl font-digital"
              />
            </div>
          </div>

          {/* Amber LED */}
          <div className="p-3 sm:p-4 md:p-6 rounded-lg bg-black shadow-lg">
            <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-4 text-white">Amber LED</h2>
            <div className="h-36 sm:h-48 md:h-64 flex items-center justify-center transform scale-90 sm:scale-100">
              <RetroLEDClock 
                className="text-amber-500 text-3xl sm:text-4xl md:text-5xl font-digital"
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @font-face {
          font-family: 'Digital';
          src: url('/fonts/digital-7.ttf') format('truetype');
        }
        .font-digital {
          font-family: 'Digital', monospace;
        }
      `}</style>
    </div>
  );
};

export default Example_16; 