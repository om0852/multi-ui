"use client";

import React from 'react';
import SwingingBadge from '../_components/Badge_27';

export default function BadgeExample27() {
  return (
    <div className="p-4 min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <h2 className="text-2xl font-bold text-white mb-6">Swinging Badge</h2>
      
      <div className="flex flex-col space-y-8 max-w-2xl mx-auto">
        {/* Basic usage */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white">Basic Usage</h3>
          <div className="flex flex-wrap gap-8 justify-center">
            <SwingingBadge text="Default Badge" />
          </div>
        </div>

        {/* Color variations */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white">Color Variations</h3>
          <div className="flex flex-wrap gap-8 justify-center">
            <SwingingBadge text="Purple" color="bg-purple-600" />
            <SwingingBadge text="Blue" color="bg-blue-600" />
            <SwingingBadge text="Green" color="bg-green-600" />
            <SwingingBadge text="Red" color="bg-red-600" />
          </div>
        </div>

        {/* Animation demonstration */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white text-center">Continuous Animation</h3>
          <div className="flex justify-center">
            <SwingingBadge text="Swinging" color="bg-pink-600" />
          </div>
          <p className="text-white text-center mt-4">
            The badge continuously swings back and forth in a pendulum motion
          </p>
        </div>

        {/* Use cases */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white">Common Use Cases</h3>
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="flex flex-wrap gap-8 mb-4 justify-center">
              <SwingingBadge text="Hot Deal" color="bg-red-600" />
              <SwingingBadge text="Limited Time" color="bg-amber-600" />
              <SwingingBadge text="New" color="bg-blue-600" />
            </div>
            <p className="text-gray-300 text-center">Attention-grabbing badges for promotions or time-sensitive content</p>
          </div>
        </div>
      </div>
    </div>
  );
} 