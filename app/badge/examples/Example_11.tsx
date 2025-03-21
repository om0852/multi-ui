"use client";

import React from 'react';
import OrbitingDotsBadge from '../_components/Badge_11';

export default function BadgeExample11() {
  return (
    <div className="p-4 min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <h2 className="text-2xl font-bold text-white mb-6">Orbiting Dots Badge</h2>
      
      <div className="flex flex-col space-y-8 max-w-2xl mx-auto">
        {/* Basic usage */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white">Basic Usage</h3>
          <div className="flex flex-wrap gap-4">
            <OrbitingDotsBadge text="Default Badge" />
          </div>
        </div>

        {/* Color variations */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white">Color Variations</h3>
          <div className="flex flex-wrap gap-8">
            <OrbitingDotsBadge text="Purple" color="bg-purple-600" dotColor="bg-pink-400" />
            <OrbitingDotsBadge text="Blue" color="bg-blue-600" dotColor="bg-cyan-400" />
            <OrbitingDotsBadge text="Green" color="bg-green-600" dotColor="bg-lime-400" />
            <OrbitingDotsBadge text="Red" color="bg-red-600" dotColor="bg-orange-400" />
          </div>
        </div>

        {/* Dot color variations */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white">Dot Color Combinations</h3>
          <div className="flex flex-wrap gap-8">
            <OrbitingDotsBadge text="Pink Dots" color="bg-indigo-600" dotColor="bg-pink-400" />
            <OrbitingDotsBadge text="Yellow Dots" color="bg-purple-600" dotColor="bg-yellow-400" />
            <OrbitingDotsBadge text="White Dots" color="bg-blue-600" dotColor="bg-white" />
          </div>
        </div>

        {/* Animation demonstration */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white text-center">Continuous Orbiting Animation</h3>
          <div className="flex justify-center">
            <OrbitingDotsBadge text="Cosmic Badge" color="bg-violet-600" dotColor="bg-fuchsia-400" />
          </div>
          <p className="text-white text-center mt-4">
            The badge features small dots that continuously orbit around it
          </p>
        </div>

        {/* Use cases */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white">Common Use Cases</h3>
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="flex flex-wrap gap-8 mb-4 justify-center">
              <OrbitingDotsBadge text="Featured" color="bg-purple-600" dotColor="bg-pink-400" />
              <OrbitingDotsBadge text="New" color="bg-blue-600" dotColor="bg-cyan-400" />
            </div>
            <p className="text-gray-300 text-center">Eye-catching badges for highlighting special content or features</p>
          </div>
        </div>
      </div>
    </div>
  );
} 