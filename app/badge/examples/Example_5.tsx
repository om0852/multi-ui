"use client";

import React from 'react';
import FallingConfettiBadge from '../tsx/Badge_5';

export default function BadgeExample5() {
  return (
    <div className="p-2 sm:p-4 md:p-6 min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6 md:mb-8">Falling Confetti Badge</h2>
      
      <div className="flex flex-col space-y-4 sm:space-y-6 md:space-y-8 max-w-sm sm:max-w-xl md:max-w-2xl mx-auto">
        {/* Basic usage */}
        <div className="flex flex-col space-y-2 sm:space-y-3 md:space-y-4">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">Basic Usage</h3>
          <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
            <FallingConfettiBadge text="Default Badge" />
          </div>
        </div>

        {/* Color variations */}
        <div className="flex flex-col space-y-2 sm:space-y-3 md:space-y-4">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">Color Variations</h3>
          <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
            <FallingConfettiBadge text="Blue" color="bg-blue-500" />
            <FallingConfettiBadge text="Green" color="bg-green-500" />
            <FallingConfettiBadge text="Purple" color="bg-purple-500" />
          </div>
        </div>

        {/* Animation demonstration */}
        <div className="flex flex-col space-y-2 sm:space-y-3 md:space-y-4">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white text-center">Confetti Animation Demonstration</h3>
          <div className="flex justify-center">
            <FallingConfettiBadge text="Celebration" color="bg-pink-500" />
          </div>
          <p className="text-sm sm:text-base md:text-lg text-white text-center mt-2 sm:mt-3 md:mt-4">
            The badge has confetti particles continuously falling from above
          </p>
        </div>

        {/* Use cases */}
        <div className="flex flex-col space-y-2 sm:space-y-3 md:space-y-4">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">Common Use Cases</h3>
          <div className="bg-gray-800 p-3 sm:p-4 md:p-6 rounded-lg">
            <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 mb-2 sm:mb-3 md:mb-4">
              <FallingConfettiBadge text="New Release" color="bg-blue-500" />
              <FallingConfettiBadge text="Achievement" color="bg-purple-500" />
            </div>
            <p className="text-sm sm:text-base md:text-lg text-gray-300">Celebratory badges for achievements, milestones, or special announcements</p>
          </div>
        </div>
      </div>
    </div>
  );
} 