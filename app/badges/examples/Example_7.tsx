"use client";

import React from 'react';
import FloatingBadge from '../_components/Badge_7';

export default function BadgeExample7() {
  return (
    <div className="p-4 min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <h2 className="text-2xl font-bold text-white mb-6">Floating Badge</h2>
      
      <div className="flex flex-col space-y-8 max-w-2xl mx-auto">
        {/* Basic usage */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white">Basic Usage</h3>
          <div className="flex flex-wrap gap-4">
            <FloatingBadge text="Default Badge" />
          </div>
        </div>

        {/* Color variations */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white">Color Variations</h3>
          <div className="flex flex-wrap gap-4">
            <FloatingBadge text="Amber" color="bg-amber-500" />
            <FloatingBadge text="Blue" color="bg-blue-500" />
            <FloatingBadge text="Green" color="bg-green-500" />
            <FloatingBadge text="Red" color="bg-red-500" />
            <FloatingBadge text="Purple" color="bg-purple-500" />
          </div>
        </div>

        {/* Hover instructions */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white text-center">Hover Effect Demonstration</h3>
          <div className="flex justify-center">
            <FloatingBadge text="Hover over me" color="bg-pink-500" />
          </div>
          <p className="text-white text-center mt-4">
            The badge floats upward and adds a shadow when hovered
          </p>
        </div>

        {/* Use cases */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white">Common Use Cases</h3>
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="flex flex-wrap gap-2 mb-4">
              <FloatingBadge text="New" color="bg-green-500" />
              <FloatingBadge text="Popular" color="bg-amber-500" />
              <FloatingBadge text="Trending" color="bg-blue-500" />
            </div>
            <p className="text-gray-300">Subtle interactive badges that provide gentle hover feedback</p>
          </div>
        </div>
      </div>
    </div>
  );
} 