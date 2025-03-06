'use client'

import { useState } from 'react'
import PolarAreaChart from '../_components/Bar_26'

export default function BarExample26() {
  // Sample datasets
  const datasets = {
    marketShare: {
      name: "Market Share Analysis",
      data: [
        { label: "Product A", value: 35 },
        { label: "Product B", value: 25 },
        { label: "Product C", value: 20 },
        { label: "Product D", value: 15 },
        { label: "Product E", value: 5 }
      ]
    },
    teamPerformance: {
      name: "Team Performance Metrics",
      data: [
        { label: "Development", value: 92 },
        { label: "Design", value: 88 },
        { label: "Marketing", value: 76 },
        { label: "Sales", value: 85 },
        { label: "Support", value: 79 }
      ]
    },
    resourceAllocation: {
      name: "Resource Allocation",
      data: [
        { label: "R&D", value: 40 },
        { label: "Operations", value: 30 },
        { label: "Marketing", value: 15 },
        { label: "Admin", value: 10 },
        { label: "Training", value: 5 }
      ]
    }
  }

  // State for current dataset and chart settings
  const [currentDataset, setCurrentDataset] = useState<keyof typeof datasets>("marketShare")
  const [showLabels, setShowLabels] = useState(true)
  const [animationDuration, setAnimationDuration] = useState(0.8)
  const [innerRadius, setInnerRadius] = useState(50)

  return (
    <div className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-6">Polar Area Chart</h2>
      
      {/* Dataset Selector */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Select Dataset</h3>
        <div className="flex flex-wrap gap-4">
          {Object.entries(datasets).map(([key, { name }]) => (
            <button
              key={key}
              onClick={() => setCurrentDataset(key as keyof typeof datasets)}
              className={`px-4 py-2 rounded-md transition-colors ${
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
            min="0.2"
            max="2"
            step="0.1"
            value={animationDuration}
            onChange={(e) => setAnimationDuration(parseFloat(e.target.value))}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">
            Inner Radius: {innerRadius}px
          </label>
          <input
            type="range"
            min="0"
            max="100"
            step="5"
            value={innerRadius}
            onChange={(e) => setInnerRadius(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>
      
      {/* Chart Display */}
      <div className="bg-gray-800 p-6 rounded-lg">
        <div className="bg-white rounded-lg p-4 flex justify-center">
          <PolarAreaChart 
            data={datasets[currentDataset].data}
            width={600}
            height={600}
            startAngle={0}
            endAngle={360}
            innerRadius={innerRadius}
            animationDuration={animationDuration}
            showLabels={showLabels}
          />
        </div>
      </div>
      
      {/* Dataset Information */}
      <div className="mt-6 bg-gray-800 p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">About This Visualization</h3>
        <p className="text-gray-300">
          The Polar Area Chart displays data points as segments in a circular layout, where the radius of each segment
          represents its value. This visualization is particularly effective for comparing multiple categories and
          identifying patterns in the distribution of values.
        </p>
        <div className="mt-4">
          <h4 className="font-medium">Current Dataset: {datasets[currentDataset].name}</h4>
          <p className="text-sm text-gray-400 mt-1">
            {currentDataset === "marketShare" && "Shows the distribution of market share across different products."}
            {currentDataset === "teamPerformance" && "Displays performance metrics for different teams in the organization."}
            {currentDataset === "resourceAllocation" && "Illustrates how resources are allocated across various departments."}
          </p>
        </div>
      </div>
    </div>
  )
} 