"use client";

import React from 'react';
import ScaleBadge from '../_components/Badge_20';

export default function BadgeExample20() {
  return (
    <div className="p-4 min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <h2 className="text-2xl font-bold text-white mb-6">Scale Badge</h2>
      
      <div className="flex flex-col space-y-8 max-w-2xl mx-auto">
        {/* Basic usage */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white">Basic Usage</h3>
          <div className="flex flex-wrap gap-4">
            <ScaleBadge text="Default Badge" />
          </div>
        </div>

        {/* Color variations */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white">Color Variations</h3>
          <div className="flex flex-wrap gap-4">
            <ScaleBadge text="Green" color="bg-green-500" />
            <ScaleBadge text="Blue" color="bg-blue-500" />
            <ScaleBadge text="Red" color="bg-red-500" />
            <ScaleBadge text="Purple" color="bg-purple-500" />
            <ScaleBadge text="Amber" color="bg-amber-500" />
          </div>
        </div>

        {/* Interaction instructions */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white text-center">Interactive Effect Demonstration</h3>
          <div className="flex justify-center">
            <ScaleBadge text="Hover & Click me" color="bg-indigo-500" />
          </div>
          <p className="text-white text-center mt-4">
            The badge scales up when hovered and scales down when clicked
          </p>
        </div>

        {/* Use cases */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white">Common Use Cases</h3>
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="flex flex-wrap gap-4 mb-4 justify-center">
              <ScaleBadge text="Click" color="bg-blue-500" />
              <ScaleBadge text="Select" color="bg-green-500" />
              <ScaleBadge text="Action" color="bg-purple-500" />
            </div>
            <p className="text-gray-300 text-center">Interactive badges that provide visual feedback for both hover and click interactions</p>
          </div>
        </div>
      </div>
    </div>
  );
} 