"use client";

import React from 'react';
import PulseGlowBadge from '../tsx/Badge_14';

export default function BadgeExample14() {
  return (
    <div className="p-4 min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <h2 className="text-2xl font-bold text-white mb-6">Pulse Glow Badge</h2>
      
      <div className="flex flex-col space-y-8 max-w-2xl mx-auto">
        {/* Basic usage */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white">Basic Usage</h3>
          <div className="flex flex-wrap gap-4">
            <PulseGlowBadge text="Default Badge" />
          </div>
        </div>

        {/* Color variations */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white">Color Variations</h3>
          <div className="flex flex-wrap gap-4">
            <PulseGlowBadge text="Blue" color="bg-blue-500" />
            <PulseGlowBadge text="Red" color="bg-red-500" />
            <PulseGlowBadge text="Green" color="bg-green-500" />
          </div>
        </div>

        {/* Animation demonstration */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white text-center">Continuous Glow Animation</h3>
          <div className="flex justify-center">
            <PulseGlowBadge text="Important" color="bg-blue-500" />
          </div>
          <p className="text-white text-center mt-4">
            The badge has a continuous pulsing glow effect with a blurred shadow
          </p>
        </div>

        {/* Use cases */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white">Common Use Cases</h3>
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="flex flex-wrap gap-2 mb-4">
              <PulseGlowBadge text="Alert" color="bg-red-500" />
              <PulseGlowBadge text="Live" color="bg-green-500" />
            </div>
            <p className="text-gray-300">High-visibility badges for critical notifications or live status indicators</p>
          </div>
        </div>
      </div>
    </div>
  );
} 