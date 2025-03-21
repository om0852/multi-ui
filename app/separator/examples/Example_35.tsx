"use client";

import React, { useState } from "react";
import FireSeparator from "../_components/Separator_35";

const SeparatorExample = () => {
  const [orientation, setOrientation] = useState<"horizontal" | "vertical">("horizontal");
  const [thickness, setThickness] = useState(24);
  const [color, setColor] = useState("#f97316");
  const [animated, setAnimated] = useState(true);

  return (
    <div className="w-full space-y-8 p-4">
      {/* Controls */}
      <div className="space-y-4 rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
        <h2 className="text-lg font-semibold">Customize Fire Separator</h2>
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
        <h3 className="text-center text-lg font-medium">Fire Separator Example</h3>
        <div className={orientation === "horizontal" ? "space-y-4" : "flex gap-4"}>
          <div className="flex-1">
            <p className="text-gray-600 dark:text-gray-300">
              The Fire Separator creates an intense division with dancing flames.
              Perfect for energetic and dynamic interface designs.
            </p>
          </div>
          <FireSeparator
            orientation={orientation}
            thickness={thickness}
            color={color}
            animated={animated}
          />
          <div className="flex-1">
            <p className="text-gray-600 dark:text-gray-300">
              The animated fire effect creates a powerful atmosphere,
              ideal for gaming websites and action-packed platforms.
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
              Against dark backgrounds, the Fire Separator creates an intense
              display of flickering flames and glowing embers.
            </p>
          </div>
          <FireSeparator
            orientation={orientation}
            thickness={thickness}
            color={color}
            animated={animated}
          />
          <div className="flex-1">
            <p className="text-gray-300">
              The fire effect becomes more dramatic in dark mode,
              creating a blazing visual element that commands attention.
            </p>
          </div>
        </div>
      </div>

      {/* Example with gradient background */}
      <div className="space-y-4 rounded-lg bg-gradient-to-r from-orange-900 to-red-900 p-6">
        <h3 className="text-center text-lg font-medium text-white">Gradient Background Example</h3>
        <div className={orientation === "horizontal" ? "space-y-4" : "flex gap-4"}>
          <div className="flex-1">
            <p className="text-white">
              The Fire Separator adds an intense element to gradient backgrounds,
              perfect for creating energetic and powerful interfaces.
            </p>
          </div>
          <FireSeparator
            orientation={orientation}
            thickness={thickness}
            color={color}
            animated={animated}
          />
          <div className="flex-1">
            <p className="text-white">
              The combination of gradient backgrounds and fire effects creates
              a dynamic and impactful design element.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeparatorExample; 