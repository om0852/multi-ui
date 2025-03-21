"use client";
import React, { useState } from 'react';
import RainbowSeparator from '../_components/Separator_42';

const SeparatorExample = () => {
  const [orientation, setOrientation] = useState<"horizontal" | "vertical">("horizontal");
  const [thickness, setThickness] = useState(24);
  const [color, setColor] = useState("#ec4899");
  const [animated, setAnimated] = useState(true);

  return (
    <div className="space-y-8 p-6">
      {/* Control Panel */}
      <div className="space-y-4 rounded-lg bg-white p-6 shadow-lg">
        <h2 className="text-xl font-semibold text-gray-800">Customize Rainbow Separator</h2>
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
            <label className="text-sm font-medium text-gray-700">Base Color</label>
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
              The Rainbow Separator brings vibrant color transitions to your layout, 
              creating a joyful and dynamic division.
            </p>
          </div>
          <RainbowSeparator
            orientation={orientation}
            thickness={thickness}
            color={color}
            animated={animated}
          />
          <div className="flex-1">
            <p className="text-gray-600">
              Perfect for colorful interfaces or any design where you want to 
              add a playful, energetic element.
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
              Against dark backgrounds, the rainbow colors pop with incredible vibrancy, 
              creating a stunning visual spectacle.
            </p>
          </div>
          <RainbowSeparator
            orientation={orientation}
            thickness={thickness}
            color={color}
            animated={animated}
          />
          <div className="flex-1">
            <p className="text-gray-300">
              The animated color transitions create a mesmerizing flow 
              that brings life to your interface.
            </p>
          </div>
        </div>
      </div>

      {/* Example with gradient background */}
      <div className="space-y-4 rounded-lg bg-gradient-to-r from-pink-900 to-purple-900 p-6">
        <h3 className="text-center text-lg font-medium text-white">Gradient Background Example</h3>
        <div className={orientation === "horizontal" ? "space-y-4" : "flex gap-4"}>
          <div className="flex-1">
            <p className="text-white">
              On gradient backgrounds, the Rainbow Separator creates a harmonious blend 
              of colors that complement your design&apos;s palette.
            </p>
          </div>
          <RainbowSeparator
            orientation={orientation}
            thickness={thickness}
            color={color}
            animated={animated}
          />
          <div className="flex-1">
            <p className="text-white">
              The combination of gradient background and rainbow effects produces 
              a rich, multi-layered visual experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeparatorExample; 