"use client";

import React, { useState } from "react";
import MatrixRainSeparator from "../tsx/Separator_15";

const SeparatorExample = () => {
  const [orientation, setOrientation] = useState<"horizontal" | "vertical">("horizontal");
  const [thickness, setThickness] = useState(30);
  const [color, setColor] = useState("#22c55e");
  const [animated, setAnimated] = useState(true);

  return (
    <div className="w-full space-y-8 p-4">
      {/* Controls */}
      <div className="space-y-4 rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
        <h2 className="text-lg font-semibold">Customize Matrix Rain Separator</h2>
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
              min="20"
              max="60"
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
        <h3 className="text-center text-lg font-medium">Matrix Rain Separator Example</h3>
        <div className={orientation === "horizontal" ? "space-y-4" : "flex gap-4"}>
          <div className="flex-1">
            <p className="text-gray-600 dark:text-gray-300">
              The Matrix Rain Separator creates a unique visual division inspired by the iconic digital rain effect.
              Perfect for tech-themed interfaces or cyberpunk-style designs.
            </p>
          </div>
          <MatrixRainSeparator
            orientation={orientation}
            thickness={thickness}
            color={color}
            animated={animated}
          />
          <div className="flex-1">
            <p className="text-gray-600 dark:text-gray-300">
              The separator features falling binary digits that create a mesmerizing matrix-like effect.
              Customize the thickness and color to match your cyberpunk theme.
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
              The Matrix Rain Separator truly comes alive on dark backgrounds, recreating the
              classic digital rain effect from The Matrix.
            </p>
          </div>
          <MatrixRainSeparator
            orientation={orientation}
            thickness={thickness}
            color={color}
            animated={animated}
          />
          <div className="flex-1">
            <p className="text-gray-300">
              The separator&apos;s glowing characters and falling animation create a striking effect
              against dark backgrounds, perfect for cyberpunk and sci-fi themed interfaces.
            </p>
          </div>
        </div>
      </div>

      {/* Example with gradient background */}
      <div className="space-y-4 rounded-lg bg-gradient-to-r from-green-900 to-emerald-700 p-6">
        <h3 className="text-center text-lg font-medium text-white">Gradient Background Example</h3>
        <div className={orientation === "horizontal" ? "space-y-4" : "flex gap-4"}>
          <div className="flex-1">
            <p className="text-white">
              When placed on gradient backgrounds, the Matrix Rain Separator adds an extra layer of depth,
              with its digital rain effect creating interesting visual interactions.
            </p>
          </div>
          <MatrixRainSeparator
            orientation={orientation}
            thickness={thickness}
            color={color}
            animated={animated}
          />
          <div className="flex-1">
            <p className="text-white">
              The separator&apos;s falling characters and glow effects complement gradient backgrounds beautifully,
              enhancing the futuristic and technological feel of your interface.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeparatorExample; 