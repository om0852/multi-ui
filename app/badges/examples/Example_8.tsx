"use client";

import React from 'react';
import GlowBadge from '../_components/Badge_8';

export default function BadgeExample8() {
  return (
    <div className="p-4 min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <h2 className="text-2xl font-bold text-white mb-6">Glow Badge</h2>
      
      <div className="flex flex-col space-y-8 max-w-2xl mx-auto">
        {/* Basic usage */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white">Basic Usage</h3>
          <div className="flex flex-wrap gap-4">
            <GlowBadge text="Default Badge" />
          </div>
        </div>

        {/* Color variations */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white">Color Variations</h3>
          <div className="flex flex-wrap gap-4">
            <GlowBadge text="Indigo" color="bg-indigo-500" />
            <GlowBadge text="Blue" color="bg-blue-500" />
            <GlowBadge text="Green" color="bg-green-500" />
            <GlowBadge text="Red" color="bg-red-500" />
            <GlowBadge text="Purple" color="bg-purple-500" />
          </div>
        </div>

        {/* Animation demonstration */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white text-center">Continuous Glow Animation</h3>
          <div className="flex justify-center">
            <GlowBadge text="Watch me glow" color="bg-pink-500" />
          </div>
          <p className="text-white text-center mt-4">
            The badge continuously pulses with a glowing shadow effect
          </p>
        </div>

        {/* Use cases */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white">Common Use Cases</h3>
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="flex flex-wrap gap-2 mb-4">
              <GlowBadge text="New" color="bg-green-500" />
              <GlowBadge text="Featured" color="bg-indigo-500" />
              <GlowBadge text="Alert" color="bg-red-500" />
            </div>
            <p className="text-gray-300">Attention-grabbing badges that continuously animate to draw focus</p>
          </div>
        </div>
      </div>
    </div>
  );
} 