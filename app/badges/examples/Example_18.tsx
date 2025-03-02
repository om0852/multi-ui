"use client";

import React from 'react';
import RippleHoverBadge from '../_components/Badge_18';

export default function BadgeExample18() {
  return (
    <div className="p-4 min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <h2 className="text-2xl font-bold text-white mb-6">Ripple Hover Badge</h2>
      
      <div className="flex flex-col space-y-8 max-w-2xl mx-auto">
        {/* Basic usage */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white">Basic Usage</h3>
          <div className="flex flex-wrap gap-4">
            <RippleHoverBadge text="Default Badge" />
          </div>
        </div>

        {/* Color variations */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white">Color Variations</h3>
          <div className="flex flex-wrap gap-4">
            <RippleHoverBadge text="Red" color="bg-red-500" />
            <RippleHoverBadge text="Blue" color="bg-blue-500" />
            <RippleHoverBadge text="Green" color="bg-green-500" />
            <RippleHoverBadge text="Purple" color="bg-purple-500" />
            <RippleHoverBadge text="Amber" color="bg-amber-500" />
          </div>
        </div>

        {/* Hover instructions */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white text-center">Hover Effect Demonstration</h3>
          <div className="flex justify-center">
            <RippleHoverBadge text="Hover over me" color="bg-indigo-500" />
          </div>
          <p className="text-white text-center mt-4">
            The badge displays an expanding ripple effect when hovered
          </p>
        </div>

        {/* Use cases */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white">Common Use Cases</h3>
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="flex flex-wrap gap-4 mb-4 justify-center">
              <RippleHoverBadge text="New" color="bg-green-500" />
              <RippleHoverBadge text="Featured" color="bg-blue-500" />
              <RippleHoverBadge text="Popular" color="bg-red-500" />
            </div>
            <p className="text-gray-300 text-center">Interactive badges with elegant hover effects for enhanced user experience</p>
          </div>
        </div>
      </div>
    </div>
  );
} 