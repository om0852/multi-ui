"use client";

import React from 'react';
import BouncingGlowBadge from '../_components/Badge_4';

export default function BadgeExample4() {
  return (
    <div className="p-4 min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <h2 className="text-2xl font-bold text-white mb-6">Bouncing Glow Badge</h2>
      
      <div className="flex flex-col space-y-8 max-w-2xl mx-auto">
        {/* Basic usage */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white">Basic Usage</h3>
          <div className="flex flex-wrap gap-4">
            <BouncingGlowBadge text="Default Badge" />
          </div>
        </div>

        {/* Color variations */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white">Color Variations</h3>
          <div className="flex flex-wrap gap-4">
            <BouncingGlowBadge text="Amber" color="bg-amber-500" />
            <BouncingGlowBadge text="Blue" color="bg-blue-500" />
            <BouncingGlowBadge text="Green" color="bg-green-500" />
            <BouncingGlowBadge text="Red" color="bg-red-500" />
            <BouncingGlowBadge text="Purple" color="bg-purple-500" />
          </div>
        </div>

        {/* Hover instructions */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white text-center">Hover Effect Demonstration</h3>
          <div className="flex justify-center">
            <BouncingGlowBadge text="Hover over me" color="bg-pink-500" />
          </div>
          <p className="text-white text-center mt-4">
            The badge glows, scales up, and bounces continuously when hovered
          </p>
        </div>

        {/* Use cases */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white">Common Use Cases</h3>
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="flex flex-wrap gap-2 mb-4">
              <BouncingGlowBadge text="Sale" color="bg-red-500" />
              <BouncingGlowBadge text="Limited" color="bg-amber-500" />
              <BouncingGlowBadge text="Premium" color="bg-purple-500" />
            </div>
            <p className="text-gray-300">Attention-grabbing badges for important or time-sensitive information</p>
          </div>
        </div>
      </div>
    </div>
  );
} 