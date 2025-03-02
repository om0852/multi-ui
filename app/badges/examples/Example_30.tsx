"use client";

import React from 'react';
import WavePulsingBadge from '../_components/Badge_30';

export default function BadgeExample30() {
  return (
    <div className="p-4 min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <h2 className="text-2xl font-bold text-white mb-6">Wave Pulsing Badge</h2>
      
      <div className="flex flex-col space-y-8 max-w-2xl mx-auto">
        {/* Basic usage */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white">Basic Usage</h3>
          <div className="flex flex-wrap gap-4">
            <WavePulsingBadge text="Default Badge" />
          </div>
        </div>

        {/* Color variations */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white">Color Variations</h3>
          <div className="flex flex-wrap gap-4">
            <WavePulsingBadge text="Teal" color="bg-teal-500" />
            <WavePulsingBadge text="Blue" color="bg-blue-500" />
            <WavePulsingBadge text="Green" color="bg-green-500" />
            <WavePulsingBadge text="Red" color="bg-red-500" />
            <WavePulsingBadge text="Purple" color="bg-purple-500" />
          </div>
        </div>

        {/* Animation demonstration */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white text-center">Continuous Animation</h3>
          <div className="flex justify-center">
            <WavePulsingBadge text="Wave Effect" color="bg-teal-500" />
          </div>
          <p className="text-white text-center mt-4">
            The badge features a continuous wave animation that radiates outward
          </p>
        </div>

        {/* Use cases */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white">Common Use Cases</h3>
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="flex flex-wrap gap-4 mb-4 justify-center">
              <WavePulsingBadge text="Live" color="bg-red-500" />
              <WavePulsingBadge text="Active" color="bg-green-500" />
              <WavePulsingBadge text="Broadcasting" color="bg-blue-500" />
            </div>
            <p className="text-gray-300 text-center">Dynamic badges for indicating live status or active broadcasts</p>
          </div>
        </div>
      </div>
    </div>
  );
} 