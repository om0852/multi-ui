'use client'

import { useState, useRef, useEffect } from 'react'
import PolarAreaChart from '../tsx/Bar_26'

export default function BarExample26() {
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
    marketShare: {
      name: "Market Share",
      data: [
        { label: "Product A", value: 35 },
        { label: "Product B", value: 25 },
        { label: "Product C", value: 20 },
        { label: "Product D", value: 15 },
        { label: "Product E", value: 5 }
      ]
    },
    teamPerformance: {
      name: "Team Stats",
      data: [
        { label: "Dev", value: 92 },
        { label: "Design", value: 88 },
        { label: "Marketing", value: 76 },
        { label: "Sales", value: 85 },
        { label: "Support", value: 79 }
      ]
    },
    resourceAllocation: {
      name: "Resources",
      data: [
        { label: "R&D", value: 40 },
        { label: "Ops", value: 30 },
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

  // Determine if we should use compact layout
  const isCompact = containerWidth < 640;
  
  // Calculate chart dimensions based on container width
  const chartSize = Math.min(600, containerWidth - 40);

  return (
    <div ref={containerRef} className="p-4 sm:p-6 md:p-8 min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Polar Area Chart</h2>
      
      {/* Dataset Selector */}
      <div className="mb-4 sm:mb-6">
        <h3 className="text-base sm:text-lg font-semibold mb-2">Select Dataset</h3>
        <div className={`${isCompact ? 'grid grid-cols-2' : 'flex flex-wrap'} gap-2`}>
          {Object.entries(datasets).map(([key, { name }]) => (
            <button
              key={key}
              onClick={() => setCurrentDataset(key as keyof typeof datasets)}
              className={`px-3 py-1.5 text-xs sm:text-sm md:text-base rounded-md transition-colors ${
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
            min="0.2"
            max="2"
            step="0.1"
            value={animationDuration}
            onChange={(e) => setAnimationDuration(parseFloat(e.target.value))}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
          />
        </div>

        <div>
          <label className="block text-xs sm:text-sm font-medium mb-1">
            Inner Radius: {innerRadius}
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
      <div className="bg-gray-800 p-3 sm:p-4 md:p-6 rounded-lg">
        <div className="bg-white rounded-lg p-2 sm:p-3 md:p-4 flex justify-center">
          <PolarAreaChart 
            data={datasets[currentDataset].data}
            width={chartSize}
            height={chartSize}
            startAngle={0}
            endAngle={360}
            innerRadius={isCompact ? 30 : innerRadius}
            animationDuration={animationDuration}
            showLabels={showLabels}
          />
        </div>
      </div>
      
      {/* Dataset Information */}
      <div className="mt-4 sm:mt-6 bg-gray-800 p-3 sm:p-4 rounded-lg">
        <h3 className="text-base sm:text-lg font-semibold mb-2">About</h3>
        <p className="text-xs sm:text-sm text-gray-300">
          The Polar Area Chart displays data points as segments in a circular layout, where the radius represents value.
          {!isCompact && ' This visualization is effective for comparing multiple categories and identifying patterns.'}
        </p>
        <div className="mt-3 sm:mt-4">
          <h4 className="text-sm sm:text-base font-medium">Current: {datasets[currentDataset].name}</h4>
          {!isCompact && (
            <p className="text-xs sm:text-sm text-gray-400 mt-1">
              {currentDataset === "marketShare" && "Shows the distribution of market share across different products."}
              {currentDataset === "teamPerformance" && "Displays performance metrics for different teams."}
              {currentDataset === "resourceAllocation" && "Illustrates resource allocation across departments."}
            </p>
          )}
        </div>
      </div>
    </div>
  )
} 