"use client";

import React from 'react';
import FallingConfettiBadge from '../_components/Badge_5';

export default function BadgeExample5() {
  return (
    <div className="p-4 min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <h2 className="text-2xl font-bold text-white mb-6">Falling Confetti Badge</h2>
      
      <div className="flex flex-col space-y-8 max-w-2xl mx-auto">
        {/* Basic usage */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white">Basic Usage</h3>
          <div className="flex flex-wrap gap-4">
            <FallingConfettiBadge text="Default Badge" />
          </div>
        </div>

        {/* Color variations */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white">Color Variations</h3>
          <div className="flex flex-wrap gap-4">
            <FallingConfettiBadge text="Purple" color="bg-purple-500" />
            <FallingConfettiBadge text="Blue" color="bg-blue-500" />
            <FallingConfettiBadge text="Green" color="bg-green-500" />
            <FallingConfettiBadge text="Red" color="bg-red-500" />
            <FallingConfettiBadge text="Yellow" color="bg-yellow-500" />
          </div>
        </div>

        {/* Animation demonstration */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white text-center">Confetti Animation Demonstration</h3>
          <div className="flex justify-center">
            <FallingConfettiBadge text="Celebration" color="bg-pink-500" />
          </div>
          <p className="text-white text-center mt-4">
            The badge has confetti particles continuously falling from above
          </p>
        </div>

        {/* Use cases */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white">Common Use Cases</h3>
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="flex flex-wrap gap-2 mb-4">
              <FallingConfettiBadge text="New Release" color="bg-blue-500" />
              <FallingConfettiBadge text="Achievement" color="bg-purple-500" />
              <FallingConfettiBadge text="Celebration" color="bg-pink-500" />
            </div>
            <p className="text-gray-300">Celebratory badges for achievements, milestones, or special announcements</p>
          </div>
        </div>
      </div>
    </div>
  );
} 