"use client";

import React from 'react';
import BounceOnClickBadge from '../_components/Badge_3';

export default function BadgeExample3() {
  return (
    <div className="p-4 min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <h2 className="text-2xl font-bold text-white mb-6">Bounce On Click Badge</h2>
      
      <div className="flex flex-col space-y-8 max-w-2xl mx-auto">
        {/* Basic usage */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white">Basic Usage</h3>
          <div className="flex flex-wrap gap-4">
            <BounceOnClickBadge text="Default Badge" />
          </div>
        </div>

        {/* Color variations */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white">Color Variations</h3>
          <div className="flex flex-wrap gap-4">
            <BounceOnClickBadge text="Red" color="bg-red-500" />
            <BounceOnClickBadge text="Blue" color="bg-blue-500" />
            <BounceOnClickBadge text="Green" color="bg-green-500" />
            <BounceOnClickBadge text="Yellow" color="bg-yellow-500" />
            <BounceOnClickBadge text="Purple" color="bg-purple-500" />
          </div>
        </div>

        {/* Click instructions */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white text-center">Click Interaction Demonstration</h3>
          <div className="flex justify-center">
            <BounceOnClickBadge text="Click me" color="bg-pink-500" />
          </div>
          <p className="text-white text-center mt-4">
            The badge bounces briefly when clicked
          </p>
        </div>

        {/* Use cases */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white">Common Use Cases</h3>
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="flex flex-wrap gap-2 mb-4">
              <BounceOnClickBadge text="Notifications" color="bg-blue-500" />
              <BounceOnClickBadge text="Messages" color="bg-green-500" />
              <BounceOnClickBadge text="Alerts" color="bg-red-500" />
            </div>
            <p className="text-gray-300">Interactive elements that provide visual feedback when clicked</p>
          </div>
        </div>
      </div>
    </div>
  );
} 