"use client";

import React from 'react';
import OutlineBadge from '../tsx/Badge_12';

export default function BadgeExample12() {
  return (
    <div className="p-4 min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <h2 className="text-2xl font-bold text-white mb-6">Outline Badge</h2>
      
      <div className="flex flex-col space-y-8 max-w-2xl mx-auto">
        {/* Basic usage */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white">Basic Usage</h3>
          <div className="flex flex-wrap gap-4">
            <OutlineBadge text="Default Badge" />
          </div>
        </div>

        {/* Color variations */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white">Color Variations</h3>
          <div className="flex flex-wrap gap-4">
            <OutlineBadge text="Emerald" color="bg-emerald-500" />
            <OutlineBadge text="Blue" color="bg-blue-500" />
            <OutlineBadge text="Purple" color="bg-purple-500" />
          </div>
        </div>

        {/* Hover instructions */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white text-center">Hover Effect Demonstration</h3>
          <div className="flex justify-center">
            <OutlineBadge text="Hover over me" color="bg-emerald-500" />
          </div>
          <p className="text-white text-center mt-4">
            The badge displays a glowing ring outline when hovered
          </p>
        </div>

        {/* Use cases */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white">Common Use Cases</h3>
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="flex flex-wrap gap-2 mb-4">
              <OutlineBadge text="New" color="bg-emerald-500" />
              <OutlineBadge text="Featured" color="bg-blue-500" />
            </div>
            <p className="text-gray-300">Interactive badges with subtle hover effects for status indicators</p>
          </div>
        </div>
      </div>
    </div>
  );
} 