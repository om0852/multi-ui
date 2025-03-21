"use client";
import React, { useState } from 'react';
import GlitchSeparator from '../_components/Separator_44';

const SeparatorExample = () => {
  const [orientation, setOrientation] = useState<"horizontal" | "vertical">("horizontal");
  const [thickness, setThickness] = useState(24);
  const [color, setColor] = useState("#f43f5e");
  const [animated, setAnimated] = useState(true);

  return (
    <div className="space-y-8 p-6">
      {/* Control Panel */}
      <div className="space-y-4 rounded-lg bg-white p-6 shadow-lg">
        <h2 className="text-xl font-semibold text-gray-800">Customize Glitch Separator</h2>
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
              The Glitch Separator introduces a digital distortion effect to your layout, 
              creating an edgy, tech-inspired division.
            </p>
          </div>
          <GlitchSeparator
            orientation={orientation}
            thickness={thickness}
            color={color}
            animated={animated}
          />
          <div className="flex-1">
            <p className="text-gray-600">
              Perfect for cyberpunk-themed designs or any interface where you want 
              to add a touch of digital chaos.
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
              Against dark backgrounds, the glitch effect creates a striking visual distortion, 
              simulating digital interference and data corruption.
            </p>
          </div>
          <GlitchSeparator
            orientation={orientation}
            thickness={thickness}
            color={color}
            animated={animated}
          />
          <div className="flex-1">
            <p className="text-gray-300">
              The animated glitch effect creates unpredictable patterns that bring 
              an element of controlled chaos to your design.
            </p>
          </div>
        </div>
      </div>

      {/* Example with gradient background */}
      <div className="space-y-4 rounded-lg bg-gradient-to-r from-rose-900 to-red-900 p-6">
        <h3 className="text-center text-lg font-medium text-white">Gradient Background Example</h3>
        <div className={orientation === "horizontal" ? "space-y-4" : "flex gap-4"}>
          <div className="flex-1">
            <p className="text-white">
              On gradient backgrounds, the Glitch Separator creates a dynamic interplay 
              between smooth color transitions and digital distortion.
            </p>
          </div>
          <GlitchSeparator
            orientation={orientation}
            thickness={thickness}
            color={color}
            animated={animated}
          />
          <div className="flex-1">
            <p className="text-white">
              The combination of gradient background and glitch effects produces 
              a high-tech aesthetic perfect for modern web applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeparatorExample; 