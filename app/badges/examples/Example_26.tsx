"use client";

import React from 'react';
import SpinningRibbonBadge from '../_components/Badge_26';

export default function BadgeExample26() {
  return (
    <div className="p-4 min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <h2 className="text-2xl font-bold text-white mb-6">Spinning Ribbon Badge</h2>
      
      <div className="flex flex-col space-y-8 max-w-2xl mx-auto">
        {/* Basic usage */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white">Basic Usage</h3>
          <div className="flex flex-wrap gap-8 justify-center">
            <SpinningRibbonBadge text="Default Badge" />
          </div>
        </div>

        {/* Color variations */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white">Color Variations</h3>
          <div className="flex flex-wrap gap-8 justify-center">
            <SpinningRibbonBadge text="Purple" color="bg-purple-500" />
            <SpinningRibbonBadge text="Blue" color="bg-blue-500" />
            <SpinningRibbonBadge text="Green" color="bg-green-500" />
            <SpinningRibbonBadge text="Red" color="bg-red-500" />
          </div>
        </div>

        {/* Size variations */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white">Size Variations</h3>
          <div className="flex flex-wrap gap-8 justify-center">
            <SpinningRibbonBadge text="Small" color="bg-indigo-500" size="w-24 h-24" />
            <SpinningRibbonBadge text="Medium" color="bg-indigo-500" size="w-32 h-32" />
            <SpinningRibbonBadge text="Large" color="bg-indigo-500" size="w-40 h-40" />
          </div>
        </div>

        {/* Animation demonstration */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white text-center">Continuous Animation</h3>
          <div className="flex justify-center">
            <SpinningRibbonBadge text="Spinning" color="bg-pink-500" />
          </div>
          <p className="text-white text-center mt-4">
            The badge features a continuously spinning dashed border around it
          </p>
        </div>

        {/* Use cases */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white">Common Use Cases</h3>
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="flex flex-wrap gap-8 mb-4 justify-center">
              <SpinningRibbonBadge text="Featured" color="bg-purple-500" />
              <SpinningRibbonBadge text="New" color="bg-blue-500" />
            </div>
            <p className="text-gray-300 text-center">Eye-catching badges for highlighting special content or features</p>
          </div>
        </div>
      </div>
    </div>
  );
} 