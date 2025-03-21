"use client";
import React, { useState } from 'react';
import Separator from '../_components/Separator_2';

export default function SeparatorExample() {
  const [orientation, setOrientation] = useState<"horizontal" | "vertical">("horizontal");
  const [thickness, setThickness] = useState(2);
  const [color, setColor] = useState("#e5e7eb");
  const [animated, setAnimated] = useState(false);
  const [type, setType] = useState<"solid" | "dashed" | "dotted" | "gradient" | "glowing">("solid");
  
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Customizable Separator</h1>
      
      <div className="mb-8 p-4 bg-gray-50 rounded-lg">
        <h2 className="text-lg font-semibold mb-4">Customize Separator</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Orientation</label>
            <select
              className="w-full p-2 border border-gray-300 rounded-md"
              value={orientation}
              onChange={(e) => setOrientation(e.target.value as "horizontal" | "vertical")}
            >
              <option value="horizontal">Horizontal</option>
              <option value="vertical">Vertical</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
            <select
              className="w-full p-2 border border-gray-300 rounded-md"
              value={type}
              onChange={(e) => setType(e.target.value as "solid" | "dashed" | "dotted" | "gradient" | "glowing")}
            >
              <option value="solid">Solid</option>
              <option value="dashed">Dashed</option>
              <option value="dotted">Dotted</option>
              <option value="gradient">Gradient</option>
              <option value="glowing">Glowing</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Thickness: {thickness}px
            </label>
            <input
              type="range"
              className="w-full"
              min="1"
              max="8"
              value={thickness}
              onChange={(e) => setThickness(Number(e.target.value))}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Color</label>
            <div className="flex items-center space-x-2">
              <input
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="p-1 border border-gray-300 rounded"
              />
              <span className="text-sm font-mono">{color}</span>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Animation</label>
            <div className="flex items-center mt-2">
              <input
                type="checkbox"
                checked={animated}
                onChange={() => setAnimated(!animated)}
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
              />
              <span className="ml-2 text-sm text-gray-700">Enable animation</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4">Example Content</h2>
        
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <p className="text-gray-700 mb-4">
            This is some content above the separator. The separator helps to visually divide different sections of content on the page.
          </p>
          
          {orientation === "horizontal" ? (
            <div className="py-4">
              <Separator 
                orientation={orientation}
                thickness={thickness}
                color={color}
                animated={animated}
                type={type}
              />
            </div>
          ) : (
            <div className="flex h-40">
              <div className="flex-1">
                <p className="text-gray-700">Content on the left side of the vertical separator.</p>
              </div>
              <div className="px-4">
                <Separator 
                  orientation={orientation}
                  thickness={thickness}
                  color={color}
                  animated={animated}
                  type={type}
                  length="100%"
                />
              </div>
              <div className="flex-1">
                <p className="text-gray-700">Content on the right side of the vertical separator.</p>
              </div>
            </div>
          )}
          
          <p className="text-gray-700 mt-4">
            This is some content below the separator. You can customize the separator&apos;s appearance using the controls above.
          </p>
        </div>
      </div>
    </div>
  );
} 