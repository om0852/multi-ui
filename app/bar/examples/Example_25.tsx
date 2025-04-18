"use client";

import React, { useState, useRef, useEffect } from "react";
import BubbleChart from "../_components/Bar_25";

export default function BarExample25() {
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  // Sample datasets
  const datasets = {
    productPerformance: {
      name: "Products",
      data: [
        { label: "Product A", value: 85, category: "Cat A" },
        { label: "Product B", value: 65, category: "Cat A" },
        { label: "Product C", value: 120, category: "Cat B" },
        { label: "Product D", value: 45, category: "Cat B" },
        { label: "Product E", value: 90, category: "Cat C" },
        { label: "Product F", value: 70, category: "Cat C" }
      ],
      colorMap: {
        'Cat A': '#3B82F6',
        'Cat B': '#10B981',
        'Cat C': '#F59E0B'
      }
    },
    marketSegments: {
      name: "Markets",
      data: [
        { label: "N. America", value: 230, category: "Region" },
        { label: "Europe", value: 180, category: "Region" },
        { label: "Asia", value: 320, category: "Region" },
        { label: "Enterprise", value: 280, category: "Type" },
        { label: "SMB", value: 190, category: "Type" },
        { label: "Consumer", value: 150, category: "Type" }
      ],
      colorMap: {
        'Region': '#3B82F6',
        'Type': '#10B981'
      }
    },
    researchTopics: {
      name: "Research",
      data: [
        { label: "ML", value: 420, category: "AI" },
        { label: "Neural Nets", value: 380, category: "AI" },
        { label: "Vision", value: 310, category: "AI" },
        { label: "Cloud", value: 220, category: "Computing" },
        { label: "Edge", value: 150, category: "Computing" },
        { label: "Security", value: 190, category: "Security" }
      ],
      colorMap: {
        'AI': '#3B82F6',
        'Computing': '#10B981',
        'Security': '#F59E0B'
      }
    }
  };

  // State for current dataset and chart settings
  const [currentDataset, setCurrentDataset] = useState<keyof typeof datasets>("productPerformance");
  const [showLabels, setShowLabels] = useState(true);
  const [animationDuration, setAnimationDuration] = useState(1.2);
  const isCompact = containerWidth < 640;
  
  // Responsive settings
  const minRadius = isCompact ? 15 : 20;
  const maxRadius = isCompact ? 40 : 80;
  const chartWidth = Math.min(800, containerWidth - 40);
  const chartHeight = Math.min(600, containerWidth - 40);
  
  return (
    <div ref={containerRef} className="p-4 sm:p-6 md:p-8 min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Bubble Chart</h2>
      
      <div className="mb-4 sm:mb-6">
        <h3 className="text-base sm:text-lg font-semibold mb-2">Select Dataset</h3>
        <div className={`${isCompact ? 'grid grid-cols-3' : 'flex flex-wrap'} gap-2`}>
          {Object.entries(datasets).map(([key, { name }]) => (
            <button
              key={key}
              onClick={() => setCurrentDataset(key as keyof typeof datasets)}
              className={`px-2 py-1.5 text-xs sm:text-sm rounded-md transition-colors ${
                currentDataset === key 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {name}
            </button>
          ))}
        </div>
      </div>
      
      <div className="mb-4 sm:mb-6 grid grid-cols-2 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs sm:text-sm font-medium mb-1">Labels</label>
          <div className="flex items-center">
            <button
              onClick={() => setShowLabels(true)}
              className={`px-2 py-1 text-xs sm:text-sm rounded-l-md ${
                showLabels ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300'
              }`}
            >
              On
            </button>
            <button
              onClick={() => setShowLabels(false)}
              className={`px-2 py-1 text-xs sm:text-sm rounded-r-md ${
                !showLabels ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300'
              }`}
            >
              Off
            </button>
          </div>
        </div>
        
        <div>
          <label className="block text-xs sm:text-sm font-medium mb-1">
            Animation: {animationDuration.toFixed(1)}s
          </label>
          <input
            type="range"
            min="0.5"
            max="3"
            step="0.1"
            value={animationDuration}
            onChange={(e) => setAnimationDuration(parseFloat(e.target.value))}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>
      
      <div className="bg-gray-800 p-3 sm:p-4 md:p-6 rounded-lg">
        <div className="bg-white rounded-lg p-2 sm:p-3 md:p-4 flex justify-center">
          <BubbleChart 
            data={datasets[currentDataset].data}
            width={chartWidth}
            height={chartHeight}
            minRadius={minRadius}
            maxRadius={maxRadius}
            animationDuration={animationDuration}
            showLabels={showLabels}
            colorMap={datasets[currentDataset].colorMap}
          />
        </div>
      </div>
      
      <div className="mt-4 sm:mt-6 bg-gray-800 p-3 sm:p-4 rounded-lg">
        <h3 className="text-base sm:text-lg font-semibold mb-2">About</h3>
        <p className="text-xs sm:text-sm text-gray-300">
          This bubble chart shows data points as circles where size represents value magnitude.
          Items are grouped by category and positioned for optimal visibility.
          {!isCompact && ' Hover over bubbles to see detailed information.'}
        </p>
      </div>
    </div>
  );
} 