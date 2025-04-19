"use client";

import React from 'react';
import PulseBadge from '../tsx/Badge_13';

export default function BadgeExample13() {
  return (
    <div className="p-4 min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <h2 className="text-2xl font-bold text-white mb-6">Pulse Badge</h2>
      
      <div className="flex flex-col space-y-8 max-w-2xl mx-auto">
        {/* Basic usage */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white">Basic Usage</h3>
          <div className="flex flex-wrap gap-4">
            <PulseBadge text="Default Badge" />
          </div>
        </div>

        {/* Color variations */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white">Color Variations</h3>
          <div className="flex flex-wrap gap-4">
            <PulseBadge text="Red" color="bg-red-500" />
            <PulseBadge text="Blue" color="bg-blue-500" />
            <PulseBadge text="Green" color="bg-green-500" />
          </div>
        </div>

        {/* Animation demonstration */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white text-center">Continuous Pulse Animation</h3>
          <div className="flex justify-center">
            <PulseBadge text="Notification" color="bg-red-500" />
          </div>
          <p className="text-white text-center mt-4">
            The badge has a continuous pulsing border animation to draw attention
          </p>
        </div>

        {/* Use cases */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white">Common Use Cases</h3>
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="flex flex-wrap gap-2 mb-4">
              <PulseBadge text="3" color="bg-red-500" />
              <PulseBadge text="New" color="bg-blue-500" />
            </div>
            <p className="text-gray-300">Attention-grabbing badges for notifications, alerts, or important updates</p>
          </div>
        </div>
      </div>
    </div>
  );
} 