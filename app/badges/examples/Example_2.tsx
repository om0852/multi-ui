"use client";

import React from 'react';
import BounceBadge from '../_components/Badge_2';

export default function BadgeExample2() {
  return (
    <div className="p-4 min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <h2 className="text-2xl font-bold text-white mb-6">Bounce Badge</h2>
      
      <div className="flex flex-col space-y-8 max-w-2xl mx-auto">
        {/* Basic usage */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white">Basic Usage</h3>
          <div className="flex flex-wrap gap-4">
            <BounceBadge text="Default Badge" />
          </div>
        </div>

        {/* Color variations */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white">Color Variations</h3>
          <div className="flex flex-wrap gap-4">
            <BounceBadge text="Yellow" color="bg-yellow-500" />
            <BounceBadge text="Blue" color="bg-blue-500" />
            <BounceBadge text="Green" color="bg-green-500" />
            <BounceBadge text="Red" color="bg-red-500" />
            <BounceBadge text="Purple" color="bg-purple-500" />
          </div>
        </div>

        {/* Hover instructions */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white text-center">Hover Effect Demonstration</h3>
          <div className="flex justify-center">
            <BounceBadge text="Hover over me" color="bg-pink-500" />
          </div>
          <p className="text-white text-center mt-4">
            The badge bounces up and down when hovered
          </p>
        </div>

        {/* Use cases */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white">Common Use Cases</h3>
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="flex flex-wrap gap-2 mb-4">
              <BounceBadge text="New" color="bg-green-500" />
              <BounceBadge text="Hot" color="bg-red-500" />
              <BounceBadge text="Trending" color="bg-blue-500" />
            </div>
            <p className="text-gray-300">Product information or content would appear here...</p>
          </div>
        </div>
      </div>
    </div>
  );
} 