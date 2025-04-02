"use client";

import React, { useState } from "react";
import PulseNetworkSeparator from "../tsx/Separator_16";

const SeparatorExample = () => {
  const [orientation, setOrientation] = useState<"horizontal" | "vertical">("horizontal");
  const [thickness, setThickness] = useState(24);
  const [color, setColor] = useState("#3b82f6");
  const [animated, setAnimated] = useState(true);

  return (
    <div className="w-full space-y-8 p-4">
      {/* Controls */}
      <div className="space-y-4 rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
        <h2 className="text-lg font-semibold">Customize Network Pulse Separator</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="block text-sm font-medium">Orientation</label>
            <select
              className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 dark:border-gray-600 dark:bg-gray-700"
              value={orientation}
              onChange={(e) => setOrientation(e.target.value as "horizontal" | "vertical")}
            >
              <option value="horizontal">Horizontal</option>
              <option value="vertical">Vertical</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium">Thickness</label>
            <input
              type="range"
              min="16"
              max="40"
              value={thickness}
              onChange={(e) => setThickness(Number(e.target.value))}
              className="mt-1 block w-full"
            />
            <span className="text-sm text-gray-500">{thickness}px</span>
          </div>
          <div>
            <label className="block text-sm font-medium">Color</label>
            <input
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="mt-1 h-10 w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Animated</label>
            <input
              type="checkbox"
              checked={animated}
              onChange={(e) => setAnimated(e.target.checked)}
              className="mt-2 h-5 w-5"
            />
          </div>
        </div>
      </div>

      {/* Example with light background */}
      <div className="space-y-4 rounded-lg bg-white p-6 dark:bg-gray-900">
        <h3 className="text-center text-lg font-medium">Network Pulse Separator Example</h3>
        <div className={orientation === "horizontal" ? "space-y-4" : "flex gap-4"}>
          <div className="flex-1">
            <p className="text-gray-600 dark:text-gray-300">
              The Network Pulse Separator creates a dynamic visualization of network activity.
              Perfect for tech interfaces or data-driven applications.
            </p>
          </div>
          <PulseNetworkSeparator
            orientation={orientation}
            thickness={thickness}
            color={color}
            animated={animated}
          />
          <div className="flex-1">
            <p className="text-gray-600 dark:text-gray-300">
              The separator features pulsing nodes connected by animated lines,
              creating a network-like effect that suggests data flow and connectivity.
            </p>
          </div>
        </div>
      </div>

      {/* Example with dark background */}
      <div className="space-y-4 rounded-lg bg-gray-900 p-6">
        <h3 className="text-center text-lg font-medium text-white">Dark Mode Example</h3>
        <div className={orientation === "horizontal" ? "space-y-4" : "flex gap-4"}>
          <div className="flex-1">
            <p className="text-gray-300">
              The Network Pulse Separator stands out beautifully on dark backgrounds,
              creating a futuristic tech aesthetic.
            </p>
          </div>
          <PulseNetworkSeparator
            orientation={orientation}
            thickness={thickness}
            color={color}
            animated={animated}
          />
          <div className="flex-1">
            <p className="text-gray-300">
              The glowing effect and pulsing animations are particularly striking against
              dark backgrounds, perfect for modern dashboard interfaces.
            </p>
          </div>
        </div>
      </div>

      {/* Example with gradient background */}
      <div className="space-y-4 rounded-lg bg-gradient-to-r from-blue-900 to-indigo-900 p-6">
        <h3 className="text-center text-lg font-medium text-white">Gradient Background Example</h3>
        <div className={orientation === "horizontal" ? "space-y-4" : "flex gap-4"}>
          <div className="flex-1">
            <p className="text-white">
              When placed on gradient backgrounds, the Network Pulse Separator adds depth
              and dimension to your interface design.
            </p>
          </div>
          <PulseNetworkSeparator
            orientation={orientation}
            thickness={thickness}
            color={color}
            animated={animated}
          />
          <div className="flex-1">
            <p className="text-white">
              The network effect creates interesting visual interactions with gradient backgrounds,
              enhancing the overall tech-focused aesthetic.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeparatorExample; 