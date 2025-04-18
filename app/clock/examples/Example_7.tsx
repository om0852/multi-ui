"use client"

import React from 'react';
import NumericClock from '../_components/Clock_7';
import { FaClock } from 'react-icons/fa6';

const Example_7: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-3 py-4 sm:px-4 sm:py-6">
        <div className="mb-4 sm:mb-6">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 flex items-center">
            <FaClock className="mr-2 text-blue-500" />
            Animated LED Clock
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
          {/* Neon Blue */}
          <div className="p-3 sm:p-4 md:p-6 rounded-lg bg-white shadow-lg">
            <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-4">Neon Blue</h2>
            <div className="h-24 sm:h-32 md:h-40 overflow-hidden rounded-lg">
              <NumericClock 
                containerClassName="flex justify-center items-center h-full bg-black" 
                digitClassName="text-xl sm:text-2xl md:text-4xl font-bold text-blue-400 mx-0.5 sm:mx-1 glow-blue"
              />
            </div>
          </div>

          {/* Neon Pink */}
          <div className="p-3 sm:p-4 md:p-6 rounded-lg bg-white shadow-lg">
            <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-4">Neon Pink</h2>
            <div className="h-24 sm:h-32 md:h-40 overflow-hidden rounded-lg">
              <NumericClock 
                containerClassName="flex justify-center items-center h-full bg-black" 
                digitClassName="text-xl sm:text-2xl md:text-4xl font-bold text-pink-400 mx-0.5 sm:mx-1 glow-pink"
                is12HourFormat={true}
              />
            </div>
          </div>

          {/* Neon Green */}
          <div className="p-3 sm:p-4 md:p-6 rounded-lg bg-white shadow-lg">
            <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-4">Neon Green</h2>
            <div className="h-24 sm:h-32 md:h-40 overflow-hidden rounded-lg">
              <NumericClock 
                containerClassName="flex justify-center items-center h-full bg-black" 
                digitClassName="text-xl sm:text-2xl md:text-4xl font-bold text-green-400 mx-0.5 sm:mx-1 glow-green"
                formatter={(value) => value.toString().padStart(2, '0')}
              />
            </div>
          </div>

          {/* Neon Purple */}
          <div className="p-3 sm:p-4 md:p-6 rounded-lg bg-white shadow-lg">
            <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-4">Neon Purple</h2>
            <div className="h-24 sm:h-32 md:h-40 overflow-hidden rounded-lg">
              <NumericClock 
                containerClassName="flex justify-center items-center h-full bg-black" 
                digitClassName="text-xl sm:text-2xl md:text-4xl font-bold text-purple-400 mx-0.5 sm:mx-1 glow-purple"
                interval={500}
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 640px) {
          .glow-blue {
            text-shadow: 0 0 3px #60a5fa, 0 0 6px #60a5fa, 0 0 9px #60a5fa;
          }
          .glow-pink {
            text-shadow: 0 0 3px #f472b6, 0 0 6px #f472b6, 0 0 9px #f472b6;
          }
          .glow-green {
            text-shadow: 0 0 3px #4ade80, 0 0 6px #4ade80, 0 0 9px #4ade80;
          }
          .glow-purple {
            text-shadow: 0 0 3px #c084fc, 0 0 6px #c084fc, 0 0 9px #c084fc;
          }
        }
        @media (min-width: 641px) {
          .glow-blue {
            text-shadow: 0 0 5px #60a5fa, 0 0 10px #60a5fa, 0 0 15px #60a5fa;
          }
          .glow-pink {
            text-shadow: 0 0 5px #f472b6, 0 0 10px #f472b6, 0 0 15px #f472b6;
          }
          .glow-green {
            text-shadow: 0 0 5px #4ade80, 0 0 10px #4ade80, 0 0 15px #4ade80;
          }
          .glow-purple {
            text-shadow: 0 0 5px #c084fc, 0 0 10px #c084fc, 0 0 15px #c084fc;
          }
        }
      `}</style>
    </div>
  );
};

export default Example_7; 