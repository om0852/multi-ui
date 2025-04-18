"use client"

import React from 'react';
import RetroLEDClock from '../_components/Clock_16';
import { FaClock } from 'react-icons/fa6';

const Example_16: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-6 sm:py-8">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2 flex items-center">
            <FaClock className="mr-2 text-red-500" />
            Retro LED Clock
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {/* Red LED */}
          <div className="p-4 sm:p-6 rounded-lg bg-black shadow-lg">
            <h2 className="text-lg sm:text-xl font-semibold mb-4 text-white">Red LED</h2>
            <div className="h-48 sm:h-64 flex items-center justify-center">
              <RetroLEDClock 
                className="text-red-500 text-4xl sm:text-6xl font-digital"
              />
            </div>
          </div>

          {/* Green LED */}
          <div className="p-4 sm:p-6 rounded-lg bg-black shadow-lg">
            <h2 className="text-lg sm:text-xl font-semibold mb-4 text-white">Green LED</h2>
            <div className="h-48 sm:h-64 flex items-center justify-center">
              <RetroLEDClock 
                className="text-green-500 text-4xl sm:text-6xl font-digital"
              />
            </div>
          </div>

          {/* Blue LED */}
          <div className="p-4 sm:p-6 rounded-lg bg-black shadow-lg">
            <h2 className="text-lg sm:text-xl font-semibold mb-4 text-white">Blue LED</h2>
            <div className="h-48 sm:h-64 flex items-center justify-center">
              <RetroLEDClock 
                className="text-blue-500 text-4xl sm:text-6xl font-digital"
              />
            </div>
          </div>

          {/* Amber LED */}
          <div className="p-4 sm:p-6 rounded-lg bg-black shadow-lg">
            <h2 className="text-lg sm:text-xl font-semibold mb-4 text-white">Amber LED</h2>
            <div className="h-48 sm:h-64 flex items-center justify-center">
              <RetroLEDClock 
                className="text-amber-500 text-4xl sm:text-6xl font-digital"
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