'use client'

import { useState } from 'react'
import RadialProgressChart from '../_components/Bar_30'

export default function BarExample30() {
  // Sample datasets
  const datasets = {
    projectProgress: {
      name: "Project Progress",
      data: [
        { 
          label: "Development",
          value: 75,
          maxValue: 100,
          color: '#3B82F6'
        },
        { 
          label: "Design",
          value: 90,
          maxValue: 100,
          color: '#10B981'
        },
        { 
          label: "Testing",
          value: 60,
          maxValue: 100,
          color: '#F59E0B'
        },
        { 
          label: "Documentation",
          value: 45,
          maxValue: 100,
          color: '#EF4444'
        }
      ]
    },
    teamPerformance: {
      name: "Team Performance",
      data: [
        { 
          label: "Productivity",
          value: 85,
          maxValue: 100,
          color: '#3B82F6'
        },
        { 
          label: "Quality",
          value: 92,
          maxValue: 100,
          color: '#10B981'
        },
        { 
          label: "Communication",
          value: 78,
          maxValue: 100,
          color: '#F59E0B'
        },
        { 
          label: "Innovation",
          value: 70,
          maxValue: 100,
          color: '#EF4444'
        },
        { 
          label: "Collaboration",
          value: 88,
          maxValue: 100,
          color: '#8B5CF6'
        }
      ]
    },
    systemMetrics: {
      name: "System Metrics",
      data: [
        { 
          label: "CPU Usage",
          value: 65,
          maxValue: 100,
          color: '#3B82F6'
        },
        { 
          label: "Memory",
          value: 82,
          maxValue: 100,
          color: '#10B981'
        },
        { 
          label: "Storage",
          value: 45,
          maxValue: 100,
          color: '#F59E0B'
        },
        { 
          label: "Network",
          value: 93,
          maxValue: 100,
          color: '#EF4444'
        },
        { 
          label: "Response Time",
          value: 75,
          maxValue: 100,
          color: '#8B5CF6'
        },
        { 
          label: "Uptime",
          value: 99,
          maxValue: 100,
          color: '#EC4899'
        }
      ]
    }
  }

  // State for current dataset and chart settings
  const [currentDataset, setCurrentDataset] = useState<keyof typeof datasets>("projectProgress")
  const [showLabels, setShowLabels] = useState(true)
  const [animationDuration, setAnimationDuration] = useState(1.2)
  const [innerRadius, setInnerRadius] = useState(60)
  const [gap, setGap] = useState(4)

  return (
    <div className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-6">Radial Progress Chart</h2>
      
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
            Inner Radius: {innerRadius}px
          </label>
          <input
            type="range"
            min="30"
            max="100"
            step="5"
            value={innerRadius}
            onChange={(e) => setInnerRadius(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">
            Ring Gap: {gap}px
          </label>
          <input
            type="range"
            min="0"
            max="10"
            step="1"
            value={gap}
            onChange={(e) => setGap(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>
      
      {/* Chart Display */}
      <div className="bg-gray-800 p-6 rounded-lg">
        <div className="bg-white rounded-lg p-4 flex justify-center">
          <RadialProgressChart 
            data={datasets[currentDataset].data}
            width={600}
            height={600}
            innerRadius={innerRadius}
            gap={gap}
            animationDuration={animationDuration}
            showLabels={showLabels}
          />
        </div>
      </div>
      
      {/* Dataset Information */}
      <div className="mt-6 bg-gray-800 p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">About This Visualization</h3>
        <p className="text-gray-300">
          The Radial Progress Chart displays multiple progress indicators in a circular layout. Each ring
          represents a different metric, with the filled portion showing the progress towards the target value.
          The chart uses gradients and animations to create an engaging visualization of progress data.
        </p>
        <div className="mt-4">
          <h4 className="font-medium">Current Dataset: {datasets[currentDataset].name}</h4>
          <div className="mt-2 space-y-1">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="text-gray-400">Metrics:</div>
              <div className="text-gray-300">{datasets[currentDataset].data.length}</div>
              <div className="text-gray-400">Average Progress:</div>
              <div className="text-gray-300">
                {(datasets[currentDataset].data.reduce((sum, item) => 
                  sum + (item.value / item.maxValue) * 100, 0) / datasets[currentDataset].data.length).toFixed(1)}%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 