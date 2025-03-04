"use client";

import React, { useState } from "react";
import BubbleChart from "../_components/Bar_25";

export default function BarExample25() {
  // Sample datasets
  const datasets = {
    productPerformance: {
      name: "Product Performance Metrics",
      data: [
        { label: "Product A", value: 85, category: "Category A" },
        { label: "Product B", value: 65, category: "Category A" },
        { label: "Product C", value: 120, category: "Category B" },
        { label: "Product D", value: 45, category: "Category B" },
        { label: "Product E", value: 90, category: "Category C" },
        { label: "Product F", value: 70, category: "Category C" },
        { label: "Product G", value: 110, category: "Category D" },
        { label: "Product H", value: 55, category: "Category D" },
        { label: "Product I", value: 75, category: "Category E" },
        { label: "Product J", value: 100, category: "Category E" },
      ],
      colorMap: {
        'Category A': '#3B82F6',
        'Category B': '#10B981',
        'Category C': '#F59E0B',
        'Category D': '#8B5CF6',
        'Category E': '#EC4899'
      }
    },
    marketSegments: {
      name: "Market Segment Analysis",
      data: [
        { label: "North America", value: 230, category: "Region" },
        { label: "Europe", value: 180, category: "Region" },
        { label: "Asia Pacific", value: 320, category: "Region" },
        { label: "Latin America", value: 90, category: "Region" },
        { label: "Middle East", value: 70, category: "Region" },
        { label: "Enterprise", value: 280, category: "Customer Type" },
        { label: "SMB", value: 190, category: "Customer Type" },
        { label: "Consumer", value: 150, category: "Customer Type" },
        { label: "Government", value: 110, category: "Customer Type" },
        { label: "Education", value: 85, category: "Customer Type" },
      ],
      colorMap: {
        'Region': '#3B82F6',
        'Customer Type': '#10B981'
      }
    },
    researchTopics: {
      name: "Research Topics by Citations",
      data: [
        { label: "Machine Learning", value: 420, category: "AI" },
        { label: "Neural Networks", value: 380, category: "AI" },
        { label: "Computer Vision", value: 310, category: "AI" },
        { label: "NLP", value: 290, category: "AI" },
        { label: "Quantum Computing", value: 180, category: "Computing" },
        { label: "Cloud Architecture", value: 220, category: "Computing" },
        { label: "Edge Computing", value: 150, category: "Computing" },
        { label: "Blockchain", value: 190, category: "Security" },
        { label: "Cryptography", value: 170, category: "Security" },
        { label: "Biometrics", value: 130, category: "Security" },
        { label: "IoT", value: 210, category: "Networks" },
        { label: "5G", value: 240, category: "Networks" },
      ],
      colorMap: {
        'AI': '#3B82F6',
        'Computing': '#10B981',
        'Security': '#F59E0B',
        'Networks': '#8B5CF6'
      }
    }
  };

  // State for current dataset and chart settings
  const [currentDataset, setCurrentDataset] = useState<keyof typeof datasets>("productPerformance");
  const [showLabels, setShowLabels] = useState(true);
  const [animationDuration, setAnimationDuration] = useState(1.2);
  const [minRadius, setMinRadius] = useState(20);
  const [maxRadius, setMaxRadius] = useState(80);
  
  return (
    <div className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-6">Bubble Chart Visualization</h2>
      
      {/* Dataset Selector */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Select Dataset</h3>
        <div className="flex flex-wrap gap-4">
          {Object.keys(datasets).map((key) => (
            <button
              key={key}
              onClick={() => setCurrentDataset(key as keyof typeof datasets)}
              className={`px-4 py-2 rounded-md transition-colors ${
                currentDataset === key 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {datasets[key as keyof typeof datasets].name}
            </button>
          ))}
        </div>
      </div>
      
      {/* Chart Controls */}
      <div className="mb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Show Labels</label>
          <div className="flex items-center">
            <button
              onClick={() => setShowLabels(true)}
              className={`px-3 py-1 rounded-l-md ${
                showLabels ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300'
              }`}
            >
              On
            </button>
            <button
              onClick={() => setShowLabels(false)}
              className={`px-3 py-1 rounded-r-md ${
                !showLabels ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300'
              }`}
            >
              Off
            </button>
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">
            Animation Duration: {animationDuration.toFixed(1)}s
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
        
        <div>
          <label className="block text-sm font-medium mb-1">
            Min Bubble Size: {minRadius}px
          </label>
          <input
            type="range"
            min="10"
            max="40"
            step="5"
            value={minRadius}
            onChange={(e) => setMinRadius(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">
            Max Bubble Size: {maxRadius}px
          </label>
          <input
            type="range"
            min="50"
            max="120"
            step="10"
            value={maxRadius}
            onChange={(e) => setMaxRadius(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>
      
      {/* Chart Display */}
      <div className="bg-gray-800 p-6 rounded-lg">
        <div className="bg-white rounded-lg p-4 flex justify-center">
          <BubbleChart 
            data={datasets[currentDataset].data}
            width={800}
            height={600}
            minRadius={minRadius}
            maxRadius={maxRadius}
            animationDuration={animationDuration}
            showLabels={showLabels}
            colorMap={datasets[currentDataset].colorMap}
          />
        </div>
      </div>
      
      {/* Dataset Information */}
      <div className="mt-6 bg-gray-800 p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">About This Visualization</h3>
        <p className="text-gray-300">
          This bubble chart visualizes data points as circles where the size represents the value magnitude.
          Items are grouped by category and positioned with slight randomization for better visibility.
          Hover over bubbles to see detailed information and interact with the controls above to customize the visualization.
        </p>
        <div className="mt-4">
          <h4 className="font-medium">Current Dataset: {datasets[currentDataset].name}</h4>
          <p className="text-sm text-gray-400 mt-1">
            {currentDataset === "productPerformance" && "Shows performance metrics across different product categories."}
            {currentDataset === "marketSegments" && "Displays market segments by region and customer type with relative market sizes."}
            {currentDataset === "researchTopics" && "Visualizes research topics by number of citations across different domains."}
          </p>
        </div>
      </div>
    </div>
  );
} 