"use client";
import React from "react";
import Confetti_14 from "./tsx/Confetti_14";
import Confetti_15 from "./tsx/Confetti_15";
import Confetti_16 from "./tsx/Confetti_16";
import Confetti_17 from "./tsx/Confetti_17";

const ConfettiPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          Interactive Confetti Effects
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Galaxy Confetti */}
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
            <h2 className="text-xl font-semibold text-white mb-4 text-center">
              Galaxy Effect
            </h2>
            <Confetti_14  />
          </div>

          {/* Bubble Confetti */}
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
            <h2 className="text-xl font-semibold text-white mb-4 text-center">
              Bubble Effect
            </h2>
            <Confetti_15 />
          </div>

          {/* Neon Confetti */}
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
            <h2 className="text-xl font-semibold text-white mb-4 text-center">
              Neon Effect
            </h2>
            <Confetti_16 />
          </div>

          {/* Crystal Confetti */}
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
            <h2 className="text-xl font-semibold text-white mb-4 text-center">
              Crystal Effect
            </h2>
            <Confetti_17 />
          </div>
        </div>

        <footer className="mt-12 text-center text-gray-400">
          <p>Click each button to trigger the confetti animation effect</p>
        </footer>
      </div>
    </div>
  );
};

export default ConfettiPage;
