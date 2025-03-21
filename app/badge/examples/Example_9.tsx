"use client";

import React from 'react';
import GradientBorderBadge from '../_components/Badge_9';

export default function BadgeExample9() {
  return (
    <div className="p-4 min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <h2 className="text-2xl font-bold text-white mb-6">Gradient Border Badge</h2>
      
      <div className="flex flex-col space-y-8 max-w-2xl mx-auto">
        {/* Basic usage */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white">Basic Usage</h3>
          <div className="flex flex-wrap gap-4">
            <GradientBorderBadge text="Default Badge" />
          </div>
        </div>

        {/* Color variations */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white">Background Color Variations</h3>
          <div className="flex flex-wrap gap-4">
            <GradientBorderBadge text="Slate" color="bg-slate-800" />
            <GradientBorderBadge text="Blue" color="bg-blue-800" />
            <GradientBorderBadge text="Green" color="bg-green-800" />
            <GradientBorderBadge text="Red" color="bg-red-800" />
            <GradientBorderBadge text="Purple" color="bg-purple-800" />
          </div>
        </div>

        {/* Hover instructions */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white text-center">Hover Effect Demonstration</h3>
          <div className="flex justify-center">
            <GradientBorderBadge text="Hover over me" color="bg-gray-800" />
          </div>
          <p className="text-white text-center mt-4">
            The gradient border animates and changes direction when hovered
          </p>
        </div>

        {/* Use cases */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white">Common Use Cases</h3>
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="flex flex-wrap gap-2 mb-4">
              <GradientBorderBadge text="Premium" color="bg-slate-800" />
              <GradientBorderBadge text="Featured" color="bg-blue-800" />
              <GradientBorderBadge text="Special" color="bg-purple-800" />
            </div>
            <p className="text-gray-300">Eye-catching badges for premium or featured content with colorful borders</p>
          </div>
        </div>
      </div>
    </div>
  );
} 