"use client";
import React, { useState } from 'react';
import StarfieldSeparator  from '../_components/Separator_41';

const SeparatorExample = () => {
  const [orientation, setOrientation] = useState<"horizontal" | "vertical">("horizontal");
  const [thickness, setThickness] = useState(24);
  const [color, setColor] = useState("#fbbf24");
  const [animated, setAnimated] = useState(true);

  return (
    <div className="space-y-8 p-6">
      {/* Control Panel */}
      <div className="space-y-4 rounded-lg bg-white p-6 shadow-lg">
        <h2 className="text-xl font-semibold text-gray-800">Customize Starfield Separator</h2>
        <div className="grid gap-4">
          <div>
            <label className="text-sm font-medium text-gray-700">Orientation</label>
            <select
              value={orientation}
              onChange={(e) => setOrientation(e.target.value as "horizontal" | "vertical")}
              className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              <option value="horizontal">Horizontal</option>
              <option value="vertical">Vertical</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Thickness</label>
            <input
              type="range"
              min={16}
              max={40}
              value={thickness}
              onChange={(e) => setThickness(Number(e.target.value))}
              className="mt-1 block w-full"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Color</label>
            <input
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="mt-1 block w-full"
            />
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={animated}
              onChange={(e) => setAnimated(e.target.checked)}
              className="h-4 w-4 rounded border-gray-300 text-blue-600"
            />
            <label className="text-sm font-medium text-gray-700">Animate</label>
          </div>
        </div>
      </div>

      {/* Example with light background */}
      <div className="space-y-4 rounded-lg bg-gray-50 p-6">
        <h3 className="text-center text-lg font-medium text-gray-800">Light Background Example</h3>
        <div className={orientation === "horizontal" ? "space-y-4" : "flex gap-4"}>
          <div className="flex-1">
            <p className="text-gray-600">
              The Starfield Separator creates a cosmic division with twinkling stars 
              that add a touch of magic to your layout.
            </p>
          </div>
          <StarfieldSeparator
            orientation={orientation}
            thickness={thickness}
            color={color}
            animated={animated}
          />
          <div className="flex-1">
            <p className="text-gray-600">
              Perfect for space-themed interfaces or any design where you want to 
              incorporate celestial elements and wonder.
            </p>
          </div>
        </div>
      </div>

      {/* Example with dark background */}
      <div className="space-y-4 rounded-lg bg-gray-900 p-6">
        <h3 className="text-center text-lg font-medium text-white">Dark Background Example</h3>
        <div className={orientation === "horizontal" ? "space-y-4" : "flex gap-4"}>
          <div className="flex-1">
            <p className="text-gray-300">
              Against dark backgrounds, the stars shine brilliantly, creating 
              a mesmerizing cosmic display that draws the eye.
            </p>
          </div>
          <StarfieldSeparator
            orientation={orientation}
            thickness={thickness}
            color={color}
            animated={animated}
          />
          <div className="flex-1">
            <p className="text-gray-300">
              The animated stars twinkle and pulse, creating an immersive 
              space-like atmosphere in your design.
            </p>
          </div>
        </div>
      </div>

      {/* Example with gradient background */}
      <div className="space-y-4 rounded-lg bg-gradient-to-r from-blue-900 to-purple-900 p-6">
        <h3 className="text-center text-lg font-medium text-white">Gradient Background Example</h3>
        <div className={orientation === "horizontal" ? "space-y-4" : "flex gap-4"}>
          <div className="flex-1">
            <p className="text-white">
              On cosmic gradients, the Starfield Separator creates a stunning nebula effect, 
              perfect for space and sci-fi themed designs.
            </p>
          </div>
          <StarfieldSeparator
            orientation={orientation}
            thickness={thickness}
            color={color}
            animated={animated}
          />
          <div className="flex-1">
            <p className="text-white">
              The interplay between the gradient and starfield creates a 
              captivating cosmic vista in your interface.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeparatorExample; 