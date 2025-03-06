"use client";

import React from 'react';
import TypingBadge from '../_components/Badge_29';

export default function BadgeExample29() {
  return (
    <div className="p-4 min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <h2 className="text-2xl font-bold text-white mb-6">Typing Badge</h2>
      
      <div className="flex flex-col space-y-8 max-w-2xl mx-auto">
        {/* Basic usage */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white">Basic Usage</h3>
          <div className="flex flex-wrap gap-4">
            <TypingBadge text="Default Badge" />
          </div>
        </div>

        {/* Color variations */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white">Color Variations</h3>
          <div className="flex flex-wrap gap-4">
            <TypingBadge text="Teal" color="bg-teal-500" />
            <TypingBadge text="Blue" color="bg-blue-500" />
            <TypingBadge text="Green" color="bg-green-500" />
            <TypingBadge text="Red" color="bg-red-500" />
            <TypingBadge text="Purple" color="bg-purple-500" />
          </div>
        </div>

        {/* Hover instructions */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white text-center">Hover Effect Demonstration</h3>
          <div className="flex justify-center">
            <TypingBadge text="Hover over me" color="bg-teal-500" />
          </div>
          <p className="text-white text-center mt-4">
            The badge displays a typing animation with a blinking cursor when hovered
          </p>
        </div>

        {/* Use cases */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white">Common Use Cases</h3>
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="flex flex-wrap gap-4 mb-4 justify-center">
              <TypingBadge text="Status: Online" color="bg-green-500" />
              <TypingBadge text="Typing..." color="bg-teal-500" />
              <TypingBadge text="Processing" color="bg-blue-500" />
            </div>
            <p className="text-gray-300 text-center">Interactive badges for indicating status or ongoing processes</p>
          </div>
        </div>
      </div>
    </div>
  );
} 