"use client";

import React from 'react';
import RippleBadge from '../_components/Badge_17';

export default function BadgeExample17() {
  return (
    <div className="p-4 min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <h2 className="text-2xl font-bold text-white mb-6">Ripple Badge</h2>
      
      <div className="flex flex-col space-y-8 max-w-2xl mx-auto">
        {/* Basic usage */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white">Basic Usage</h3>
          <div className="flex flex-wrap gap-4">
            <RippleBadge text="Default Badge" />
          </div>
        </div>

        {/* Color variations */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white">Color Variations</h3>
          <div className="flex flex-wrap gap-4">
            <RippleBadge text="Violet" color="bg-violet-500" />
            <RippleBadge text="Blue" color="bg-blue-500" />
            <RippleBadge text="Green" color="bg-green-500" />
            <RippleBadge text="Red" color="bg-red-500" />
            <RippleBadge text="Amber" color="bg-amber-500" />
          </div>
        </div>

        {/* Click instructions */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white text-center">Click Effect Demonstration</h3>
          <div className="flex justify-center">
            <RippleBadge text="Click me" color="bg-indigo-500" />
          </div>
          <p className="text-white text-center mt-4">
            The badge displays a ripple effect when clicked
          </p>
        </div>

        {/* Use cases */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white">Common Use Cases</h3>
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="flex flex-wrap gap-4 mb-4 justify-center">
              <RippleBadge text="Submit" color="bg-green-500" />
              <RippleBadge text="Delete" color="bg-red-500" />
              <RippleBadge text="Info" color="bg-blue-500" />
            </div>
            <p className="text-gray-300 text-center">Interactive badges that provide visual feedback when clicked</p>
          </div>
        </div>
      </div>
    </div>
  );
} 