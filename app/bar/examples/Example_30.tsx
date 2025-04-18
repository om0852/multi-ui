'use client'

import { useState, useRef, useEffect } from 'react'
import RadialProgressChart from '../_components/Bar_30'

export default function BarExample30() {
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

  // Sample datasets with shorter labels for mobile
  const datasets = {
    projectProgress: {
      name: "Projects",
      data: [
        { 
          label: "Dev",
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
          label: "Test",
          value: 60,
          maxValue: 100,
          color: '#F59E0B'
        },
        { 
          label: "Docs",
          value: 45,
          maxValue: 100,
          color: '#EF4444'
        }
      ]
    },
    teamPerformance: {
      name: "Team",
      data: [
        { 
          label: "Output",
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
          label: "Comms",
          value: 78,
          maxValue: 100,
          color: '#F59E0B'
        },
        { 
          label: "Ideas",
          value: 70,
          maxValue: 100,
          color: '#EF4444'
        },
        { 
          label: "Team",
          value: 88,
          maxValue: 100,
          color: '#8B5CF6'
        }
      ]
    },
    systemMetrics: {
      name: "System",
      data: [
        { 
          label: "CPU",
          value: 65,
          maxValue: 100,
          color: '#3B82F6'
        },
        { 
          label: "RAM",
          value: 82,
          maxValue: 100,
          color: '#10B981'
        },
        { 
          label: "Disk",
          value: 45,
          maxValue: 100,
          color: '#F59E0B'
        },
        { 
          label: "Net",
          value: 93,
          maxValue: 100,
          color: '#EF4444'
        },
        { 
          label: "Latency",
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

  // Determine if we should use compact layout
  const isCompact = containerWidth < 640;
  
  // Calculate chart dimensions based on container width
  const chartSize = Math.min(600, containerWidth - 40);

  return (
    <div ref={containerRef} className="p-4 sm:p-6 md:p-8 min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Radial Progress</h2>
      
      {/* Dataset Selector */}
      <div className="mb-4 sm:mb-6">
        <h3 className="text-base sm:text-lg font-semibold mb-2">Select Dataset</h3>
        <div className={`${isCompact ? 'grid grid-cols-3' : 'flex flex-wrap'} gap-2`}>
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
      <div className="mb-4 sm:mb-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
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
        
        <div>
          <label className="block text-xs sm:text-sm font-medium mb-1">
            Inner: {innerRadius}px
          </label>
          <input
            type="range"
            min={isCompact ? 20 : 30}
            max={isCompact ? 60 : 100}
            step="5"
            value={innerRadius}
            onChange={(e) => setInnerRadius(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
          />
        </div>
        
        <div>
          <label className="block text-xs sm:text-sm font-medium mb-1">
            Gap: {gap}px
          </label>
          <input
            type="range"
            min="0"
            max={isCompact ? 6 : 10}
            step="1"
            value={gap}
            onChange={(e) => setGap(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>
      
      {/* Chart Display */}
      <div className="bg-gray-800 p-3 sm:p-4 md:p-6 rounded-lg">
        <div className="bg-white rounded-lg p-2 sm:p-3 md:p-4 flex justify-center">
          <RadialProgressChart 
            data={datasets[currentDataset].data}
            width={chartSize}
            height={chartSize}
            innerRadius={isCompact ? Math.min(40, innerRadius) : innerRadius}
            gap={isCompact ? Math.min(4, gap) : gap}
            animationDuration={animationDuration}
            showLabels={showLabels}
          />
        </div>
      </div>
      
      {/* Dataset Information */}
      <div className="mt-4 sm:mt-6 bg-gray-800 p-3 sm:p-4 rounded-lg">
        <h3 className="text-base sm:text-lg font-semibold mb-2">About</h3>
        <p className="text-xs sm:text-sm text-gray-300">
          The Radial Progress Chart shows multiple progress indicators in a circular layout.
          {!isCompact && ' Each arc represents a metric, with the filled portion indicating progress towards the maximum value.'}
        </p>
        <div className="mt-3 sm:mt-4">
          <h4 className="text-sm sm:text-base font-medium">Current: {datasets[currentDataset].name}</h4>
          <div className="mt-2 grid grid-cols-2 gap-2 sm:gap-4 text-xs sm:text-sm">
            <div className="text-gray-400">Metrics:</div>
            <div className="text-gray-300">{datasets[currentDataset].data.length}</div>
            <div className="text-gray-400">Avg Progress:</div>
            <div className="text-blue-400">
              {(datasets[currentDataset].data.reduce((acc, curr) => acc + (curr.value / curr.maxValue), 0) / datasets[currentDataset].data.length * 100).toFixed(1)}%
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 