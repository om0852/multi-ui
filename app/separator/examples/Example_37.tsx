"use client";
import React, { useState } from 'react';
import  CircuitSeparator  from '../_components/Separator_37';

const SeparatorExample = () => {
  const [orientation, setOrientation] = useState<"horizontal" | "vertical">("horizontal");
  const [thickness, setThickness] = useState(24);
  const [color, setColor] = useState("#10b981");
  const [animated, setAnimated] = useState(true);

  return (
    <div className="space-y-8 p-6">
      {/* Control Panel */}
      <div className="space-y-4 rounded-lg bg-white p-6 shadow-lg">
        <h2 className="text-xl font-semibold text-gray-800">Customize Circuit Separator</h2>
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
              The Circuit Separator brings a tech-inspired aesthetic with intricate 
              circuit board patterns that flow through your layout.
            </p>
          </div>
          <CircuitSeparator
            orientation={orientation}
            thickness={thickness}
            color={color}
            animated={animated}
          />
          <div className="flex-1">
            <p className="text-gray-600">
              Ideal for tech-focused interfaces or any design that wants to 
              showcase a modern, digital aesthetic.
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
              Against dark backgrounds, the circuit patterns create an illuminated 
              network effect, reminiscent of active electronic pathways.
            </p>
          </div>
          <CircuitSeparator
            orientation={orientation}
            thickness={thickness}
            color={color}
            animated={animated}
          />
          <div className="flex-1">
            <p className="text-gray-300">
              The animated circuits pulse with energy, creating a dynamic 
              separation that brings your interface to life.
            </p>
          </div>
        </div>
      </div>

      {/* Example with gradient background */}
      <div className="space-y-4 rounded-lg bg-gradient-to-r from-emerald-900 to-teal-900 p-6">
        <h3 className="text-center text-lg font-medium text-white">Gradient Background Example</h3>
        <div className={orientation === "horizontal" ? "space-y-4" : "flex gap-4"}>
          <div className="flex-1">
            <p className="text-white">
              On gradient backgrounds, the Circuit Separator creates a futuristic 
              boundary that complements the color transition.
            </p>
          </div>
          <CircuitSeparator
            orientation={orientation}
            thickness={thickness}
            color={color}
            animated={animated}
          />
          <div className="flex-1">
            <p className="text-white">
              The combination of gradient and circuit patterns produces a 
              sophisticated tech-aesthetic perfect for modern applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeparatorExample; 