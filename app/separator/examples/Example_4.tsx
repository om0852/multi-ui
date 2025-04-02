"use client";
import React, { useState } from 'react';
import Separator from '../tsx/Separator_4';

export default function SeparatorExample() {
  const [orientation, setOrientation] = useState<"horizontal" | "vertical">("horizontal");
  const [thickness, setThickness] = useState(6);
  const [animated, setAnimated] = useState(true);
  
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Gradient Pulse Separator</h1>
      
      <div className="mb-8 p-4 bg-gray-50 rounded-lg">
        <h2 className="text-lg font-semibold mb-4">Customize Separator</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
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
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Thickness: {thickness}px
            </label>
            <input
              type="range"
              className="w-full"
              min="2"
              max="12"
              value={thickness}
              onChange={(e) => setThickness(Number(e.target.value))}
            />
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
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <p className="text-gray-700 mb-4">
            This is some content above the separator. The gradient pulse separator creates a vibrant, animated division between content sections.
          </p>
          
          {orientation === "horizontal" ? (
            <div className="py-4">
              <Separator 
                orientation={orientation}
                thickness={thickness}
                animated={animated}
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
                  animated={animated}
                  length="100%"
                />
              </div>
              <div className="flex-1">
                <p className="text-gray-700">Content on the right side of the vertical separator.</p>
              </div>
            </div>
          )}
          
          <p className="text-gray-700 mt-4">
            This is some content below the separator. The pulsing gradient effect creates a dynamic and eye-catching division between sections.
          </p>
        </div>
      </div>
      
      <div className="bg-gray-800 p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold text-white mb-4">Dark Mode Example</h3>
        <p className="text-gray-300 mb-4">
          The gradient pulse separator also looks great on dark backgrounds.
        </p>
        
        <div className="py-4">
          <Separator 
            orientation="horizontal"
            thickness={thickness}
            animated={animated}
          />
        </div>
        
        <p className="text-gray-300 mt-4">
          The vibrant colors stand out even more against dark backgrounds, creating a striking visual element.
        </p>
      </div>
    </div>
  );
} 