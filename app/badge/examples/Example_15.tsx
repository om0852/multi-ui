"use client";

import React from 'react';
import PulseHoverBadge from '../tsx/Badge_15';

export default function BadgeExample15() {
  return (
    <div className="p-4 min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <h2 className="text-2xl font-bold text-white mb-6">Pulse Hover Badge</h2>
      
      <div className="flex flex-col space-y-8 max-w-2xl mx-auto">
        {/* Basic usage */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white">Basic Usage</h3>
          <div className="flex flex-wrap gap-4">
            <PulseHoverBadge text="Default Badge" />
          </div>
        </div>

        {/* Color variations */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white">Color Variations</h3>
          <div className="flex flex-wrap gap-4">
            <PulseHoverBadge text="Green" color="bg-green-500" />
            <PulseHoverBadge text="Blue" color="bg-blue-500" />
            <PulseHoverBadge text="Purple" color="bg-purple-500" />
          </div>
        </div>

        {/* Hover instructions */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white text-center">Hover Effect Demonstration</h3>
          <div className="flex justify-center">
            <PulseHoverBadge text="Hover over me" color="bg-pink-500" />
          </div>
          <p className="text-white text-center mt-4">
            The badge pulses with a fading in and out effect when hovered
          </p>
        </div>

        {/* Use cases */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white">Common Use Cases</h3>
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="flex flex-wrap gap-2 mb-4">
              <PulseHoverBadge text="New" color="bg-green-500" />
              <PulseHoverBadge text="Featured" color="bg-blue-500" />
            </div>
            <p className="text-gray-300">Interactive badges that provide subtle feedback when users hover over them</p>
          </div>
        </div>
      </div>
    </div>
  );
} 