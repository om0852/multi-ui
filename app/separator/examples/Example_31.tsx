"use client";

import React, { useState } from "react";
import CrystalSeparator from "../_components/Separator_31";

const SeparatorExample = () => {
  const [orientation, setOrientation] = useState<"horizontal" | "vertical">("horizontal");
  const [thickness, setThickness] = useState(24);
  const [color, setColor] = useState("#14b8a6");
  const [animated, setAnimated] = useState(true);

  return (
    <div className="w-full space-y-8 p-4">
      {/* Controls */}
      <div className="space-y-4 rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
        <h2 className="text-lg font-semibold">Customize Crystal Separator</h2>
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
        <h3 className="text-center text-lg font-medium">Crystal Separator Example</h3>
        <div className={orientation === "horizontal" ? "space-y-4" : "flex gap-4"}>
          <div className="flex-1">
            <p className="text-gray-600 dark:text-gray-300">
              The Crystal Separator creates an elegant division with crystalline patterns.
              Perfect for luxury and premium interface designs.
            </p>
          </div>
          <CrystalSeparator
            orientation={orientation}
            thickness={thickness}
            color={color}
            animated={animated}
          />
          <div className="flex-1">
            <p className="text-gray-600 dark:text-gray-300">
              The animated crystal effect creates a sophisticated atmosphere,
              ideal for high-end websites and premium brand experiences.
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
              Against dark backgrounds, the Crystal Separator creates a luxurious
              display of light refractions and geometric patterns.
            </p>
          </div>
          <CrystalSeparator
            orientation={orientation}
            thickness={thickness}
            color={color}
            animated={animated}
          />
          <div className="flex-1">
            <p className="text-gray-300">
              The crystal patterns become more dramatic in dark mode,
              creating an elegant visual element that enhances the design.
            </p>
          </div>
        </div>
      </div>

      {/* Example with gradient background */}
      <div className="space-y-4 rounded-lg bg-gradient-to-r from-teal-900 to-emerald-900 p-6">
        <h3 className="text-center text-lg font-medium text-white">Gradient Background Example</h3>
        <div className={orientation === "horizontal" ? "space-y-4" : "flex gap-4"}>
          <div className="flex-1">
            <p className="text-white">
              The Crystal Separator adds a premium touch to gradient backgrounds,
              perfect for creating sophisticated and luxurious interfaces.
            </p>
          </div>
          <CrystalSeparator
            orientation={orientation}
            thickness={thickness}
            color={color}
            animated={animated}
          />
          <div className="flex-1">
            <p className="text-white">
              The combination of gradient backgrounds and crystal patterns creates
              a high-end and refined design element.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeparatorExample; 