"use client";

import React from 'react';
import SlidingGlowBadge from '../_components/Badge_24';

export default function BadgeExample24() {
  return (
    <div className="p-4 min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <h2 className="text-2xl font-bold text-white mb-6">Sliding Glow Badge</h2>
      
      <div className="flex flex-col space-y-8 max-w-2xl mx-auto">
        {/* Basic usage */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white">Basic Usage</h3>
          <div className="flex flex-wrap gap-4">
            <SlidingGlowBadge text="Default Badge" />
          </div>
        </div>

        {/* Color variations */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white">Color Variations</h3>
          <div className="flex flex-wrap gap-4">
            <SlidingGlowBadge text="Indigo" color="bg-indigo-500" />
            <SlidingGlowBadge text="Blue" color="bg-blue-500" />
            <SlidingGlowBadge text="Green" color="bg-green-500" />
            <SlidingGlowBadge text="Red" color="bg-red-500" />
            <SlidingGlowBadge text="Purple" color="bg-purple-500" />
          </div>
        </div>

        {/* Animation demonstration */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white text-center">Continuous Animation Demonstration</h3>
          <div className="flex justify-center">
            <SlidingGlowBadge text="Watch the glow" color="bg-indigo-500" />
          </div>
          <p className="text-white text-center mt-4">
            The badge features a rotating glow effect that continuously circles around it
          </p>
        </div>

        {/* Use cases */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white">Common Use Cases</h3>
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="flex flex-wrap gap-4 mb-4 justify-center">
              <SlidingGlowBadge text="Premium" color="bg-indigo-500" />
              <SlidingGlowBadge text="Featured" color="bg-blue-500" />
              <SlidingGlowBadge text="Special" color="bg-purple-500" />
            </div>
            <p className="text-gray-300 text-center">Eye-catching badges with dynamic glow effects for highlighting important content</p>
          </div>
        </div>
      </div>
    </div>
  );
} 