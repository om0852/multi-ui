"use client";

import React from 'react';
import PulsingGlowBadge from '../_components/Badge_16';

export default function BadgeExample16() {
  return (
    <div className="p-4 min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <h2 className="text-2xl font-bold text-white mb-6">Pulsing Glow Badge</h2>
      
      <div className="flex flex-col space-y-8 max-w-2xl mx-auto">
        {/* Basic usage */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white">Basic Usage</h3>
          <div className="flex flex-wrap gap-4">
            <PulsingGlowBadge text="Default Badge" />
          </div>
        </div>

        {/* Color variations */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white">Color Variations</h3>
          <div className="flex flex-wrap gap-4">
            <PulsingGlowBadge text="Purple" color="bg-purple-500" glowColor="purple" />
            <PulsingGlowBadge text="Blue" color="bg-blue-500" glowColor="blue" />
            <PulsingGlowBadge text="Green" color="bg-green-500" glowColor="green" />
            <PulsingGlowBadge text="Red" color="bg-red-500" glowColor="red" />
          </div>
        </div>

        {/* Glow color variations */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white">Glow Color Combinations</h3>
          <div className="flex flex-wrap gap-4">
            <PulsingGlowBadge text="Pink Glow" color="bg-purple-500" glowColor="pink" />
            <PulsingGlowBadge text="Yellow Glow" color="bg-blue-500" glowColor="yellow" />
            <PulsingGlowBadge text="Cyan Glow" color="bg-indigo-500" glowColor="cyan" />
          </div>
        </div>

        {/* Animation demonstration */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white text-center">Continuous Pulsing Animation</h3>
          <div className="flex justify-center">
            <PulsingGlowBadge text="Attention" color="bg-red-500" glowColor="red" />
          </div>
          <p className="text-white text-center mt-4">
            The badge continuously pulses with a glowing shadow effect
          </p>
        </div>

        {/* Use cases */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white">Common Use Cases</h3>
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="flex flex-wrap gap-4 mb-4 justify-center">
              <PulsingGlowBadge text="New" color="bg-blue-500" glowColor="blue" />
              <PulsingGlowBadge text="Hot" color="bg-red-500" glowColor="orange" />
              <PulsingGlowBadge text="Sale" color="bg-green-500" glowColor="lime" />
            </div>
            <p className="text-gray-300 text-center">Eye-catching badges for important notifications or promotions</p>
          </div>
        </div>
      </div>
    </div>
  );
} 