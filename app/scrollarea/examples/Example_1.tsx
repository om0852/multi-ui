"use client";
import React, { useState } from 'react';
import ScrollArea from '../_components/ScrollArea_1';

export default function ScrollAreaExample() {
  const [orientation, setOrientation] = useState<"vertical" | "horizontal" | "both">("vertical");
  const [scrollbarThickness, setScrollbarThickness] = useState(14);
  const [thumbColor, setThumbColor] = useState("#6366f1");
  const [trackColor, setTrackColor] = useState("#e0e7ff");

  // Sample content for the scroll area
  const items = Array.from({ length: 20 }).map((_, i) => ({
    title: `Item ${i + 1}`,
    description: `This is a description for item ${i + 1}. It contains some text to demonstrate scrolling functionality.`,
  }));

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Basic Scroll Area</h1>
      
      <div className="mb-6 p-4 bg-gray-50 rounded-lg">
        <h2 className="text-lg font-semibold mb-4">Customize Scrollbar</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Orientation</label>
            <select
              className="w-full p-2 border border-gray-300 rounded-md"
              value={orientation}
              onChange={(e) => setOrientation(e.target.value as "vertical" | "horizontal" | "both")}
            >
              <option value="vertical">Vertical</option>
              <option value="horizontal">Horizontal</option>
              <option value="both">Both</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Scrollbar Thickness: {scrollbarThickness}px
            </label>
            <input
              type="range"
              className="w-full"
              min="8"
              max="20"
              value={scrollbarThickness}
              onChange={(e) => setScrollbarThickness(Number(e.target.value))}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Thumb Color</label>
            <div className="flex items-center space-x-2">
              <input
                type="color"
                value={thumbColor}
                onChange={(e) => setThumbColor(e.target.value)}
                className="p-1 border border-gray-300 rounded"
              />
              <span className="text-sm font-mono">{thumbColor}</span>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Track Color</label>
            <div className="flex items-center space-x-2">
              <input
                type="color"
                value={trackColor}
                onChange={(e) => setTrackColor(e.target.value)}
                className="p-1 border border-gray-300 rounded"
              />
              <span className="text-sm font-mono">{trackColor}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="h-[400px] border border-gray-200 rounded-lg">
        <ScrollArea
          orientation={orientation}
          scrollbarThickness={scrollbarThickness}
          thumbColor={thumbColor}
          trackColor={trackColor}
        >
          <div className={`p-4 ${orientation === "horizontal" || orientation === "both" ? "min-w-[1000px]" : ""}`}>
            {items.map((item, index) => (
              <div 
                key={index}
                className="mb-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
} 