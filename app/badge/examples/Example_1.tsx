"use client";

import React from 'react';
import BlurBadge from '../_components/Badge_1';

export default function BadgeExample1() {
  return (
    <div className="p-2 sm:p-4 md:p-6 min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6 md:mb-8">Blur Badge</h2>
      
      <div className="flex flex-col space-y-4 sm:space-y-6 md:space-y-8 max-w-sm sm:max-w-xl md:max-w-2xl mx-auto">
        {/* Basic usage */}
        <div className="flex flex-col space-y-2 sm:space-y-3 md:space-y-4">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">Basic Usage</h3>
          <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
            <BlurBadge text="Default Badge" />
          </div>
        </div>

        {/* Color variations */}
        <div className="flex flex-col space-y-2 sm:space-y-3 md:space-y-4">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">Color Variations</h3>
          <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
            <BlurBadge text="Blue" color="bg-blue-500" />
            <BlurBadge text="Green" color="bg-green-500" />
            <BlurBadge text="Purple" color="bg-purple-500" />
          </div>
        </div>

        {/* Hover instructions */}
        <div className="flex flex-col space-y-2 sm:space-y-3 md:space-y-4">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white text-center">Hover Effect Demonstration</h3>
          <div className="flex justify-center">
            <BlurBadge text="Hover over me" color="bg-pink-500" />
          </div>
          <p className="text-sm sm:text-base md:text-lg text-white text-center mt-2 sm:mt-3 md:mt-4">
            The badge applies a blur effect and scales up slightly when hovered
          </p>
        </div>

        {/* Use cases */}
        <div className="flex flex-col space-y-2 sm:space-y-3 md:space-y-4">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">Common Use Cases</h3>
          <div className="bg-gray-800 p-3 sm:p-4 md:p-6 rounded-lg">
            <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 mb-2 sm:mb-3 md:mb-4">
              <BlurBadge text="New" color="bg-green-500" />
              <BlurBadge text="Featured" color="bg-blue-500" />
            </div>
            <p className="text-sm sm:text-base md:text-lg text-gray-300">Product information or content would appear here...</p>
          </div>
        </div>
      </div>
    </div>
  );
} 