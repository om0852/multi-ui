"use client";

import React from 'react';
import RotatingBadge from '../_components/Badge_19';

export default function BadgeExample19() {
  return (
    <div className="p-4 min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <h2 className="text-2xl font-bold text-white mb-6">Rotating Badge</h2>
      
      <div className="flex flex-col space-y-8 max-w-2xl mx-auto">
        {/* Basic usage */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white">Basic Usage</h3>
          <div className="flex flex-wrap gap-4">
            <RotatingBadge text="Default Badge" />
          </div>
        </div>

        {/* Color variations */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white">Color Variations</h3>
          <div className="flex flex-wrap gap-4">
            <RotatingBadge text="Green" color="bg-green-500" />
            <RotatingBadge text="Blue" color="bg-blue-500" />
            <RotatingBadge text="Red" color="bg-red-500" />
            <RotatingBadge text="Purple" color="bg-purple-500" />
            <RotatingBadge text="Yellow" color="bg-yellow-500" />
          </div>
        </div>

        {/* Hover instructions */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white text-center">Hover Effect Demonstration</h3>
          <div className="flex justify-center">
            <RotatingBadge text="Hover over me" color="bg-indigo-500" />
          </div>
          <p className="text-white text-center mt-4">
            The badge rotates 360 degrees continuously when hovered
          </p>
        </div>

        {/* Use cases */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white">Common Use Cases</h3>
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="flex flex-wrap gap-4 mb-4 justify-center">
              <RotatingBadge text="Loading" color="bg-blue-500" />
              <RotatingBadge text="Processing" color="bg-green-500" />
              <RotatingBadge text="Syncing" color="bg-purple-500" />
            </div>
            <p className="text-gray-300 text-center">Playful badges for indicating processes or drawing attention to interactive elements</p>
          </div>
        </div>
      </div>
    </div>
  );
} 