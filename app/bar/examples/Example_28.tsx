'use client'

import { useState, useRef, useEffect } from 'react'
import FunnelChart from '../_components/Bar_28'

export default function BarExample28() {
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
    salesFunnel: {
      name: "Sales",
      data: [
        { 
          label: "Visitors",
          value: 10000,
          description: "Total unique visitors"
        },
        { 
          label: "Views",
          value: 5000,
          description: "Product page views"
        },
        { 
          label: "Cart",
          value: 2000,
          description: "Added to cart"
        },
        { 
          label: "Checkout",
          value: 1000,
          description: "Started checkout"
        },
        { 
          label: "Purchase",
          value: 500,
          description: "Completed orders"
        }
      ]
    },
    recruitmentFunnel: {
      name: "Hiring",
      data: [
        { 
          label: "Applied",
          value: 1500,
          description: "Total applications"
        },
        { 
          label: "Screened",
          value: 800,
          description: "Passed screening"
        },
        { 
          label: "Phone",
          value: 300,
          description: "Phone interviews"
        },
        { 
          label: "Tech",
          value: 150,
          description: "Tech interviews"
        },
        { 
          label: "Final",
          value: 50,
          description: "Final interviews"
        },
        { 
          label: "Offers",
          value: 30,
          description: "Offers made"
        }
      ]
    },
    marketingFunnel: {
      name: "Marketing",
      data: [
        { 
          label: "Reach",
          value: 20000,
          description: "Campaign reach"
        },
        { 
          label: "Engage",
          value: 8000,
          description: "Content engagement"
        },
        { 
          label: "Interest",
          value: 3000,
          description: "Info requests"
        },
        { 
          label: "Intent",
          value: 1500,
          description: "Demo requests"
        },
        { 
          label: "Evaluate",
          value: 800,
          description: "Product evaluation"
        },
        { 
          label: "Convert",
          value: 400,
          description: "Conversions"
        }
      ]
    }
  }

  // State for current dataset and chart settings
  const [currentDataset, setCurrentDataset] = useState<keyof typeof datasets>("salesFunnel")
  const [showPercentages, setShowPercentages] = useState(true)
  const [animationDuration, setAnimationDuration] = useState(0.8)
  const [gapBetweenLevels, setGapBetweenLevels] = useState(4)

  // Determine if we should use compact layout
  const isCompact = containerWidth < 640;
  
  // Calculate chart dimensions based on container width
  const chartWidth = Math.min(800, containerWidth - 40);
  const chartHeight = Math.min(600, containerWidth * 0.8);

  // Format number for display
  const formatNumber = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      notation: isCompact ? 'compact' : 'standard'
    }).format(value);
  };

  return (
    <div ref={containerRef} className="p-4 sm:p-6 md:p-8 min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Funnel Chart</h2>
      
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
      <div className="mb-4 sm:mb-6 grid grid-cols-2 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs sm:text-sm font-medium mb-1">Percentages</label>
          <div className="flex items-center">
            <button
              onClick={() => setShowPercentages(true)}
              className={`px-2 py-1 text-xs sm:text-sm rounded-l-md ${
                showPercentages ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300'
              }`}
            >
              On
            </button>
            <button
              onClick={() => setShowPercentages(false)}
              className={`px-2 py-1 text-xs sm:text-sm rounded-r-md ${
                !showPercentages ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300'
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
            Gap: {gapBetweenLevels}px
          </label>
          <input
            type="range"
            min="0"
            max={isCompact ? 10 : 20}
            step="1"
            value={gapBetweenLevels}
            onChange={(e) => setGapBetweenLevels(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>
      
      {/* Chart Display */}
      <div className="bg-gray-800 p-3 sm:p-4 md:p-6 rounded-lg">
        <div className="bg-white rounded-lg p-2 sm:p-3 md:p-4 flex justify-center">
          <FunnelChart 
            data={datasets[currentDataset].data}
            width={chartWidth}
            height={chartHeight}
            showPercentages={showPercentages}
            animationDuration={animationDuration}
            gapBetweenLevels={isCompact ? Math.min(6, gapBetweenLevels) : gapBetweenLevels}
          />
        </div>
      </div>
      
      {/* Dataset Information */}
      <div className="mt-4 sm:mt-6 bg-gray-800 p-3 sm:p-4 rounded-lg">
        <h3 className="text-base sm:text-lg font-semibold mb-2">About</h3>
        <p className="text-xs sm:text-sm text-gray-300">
          The Funnel Chart shows conversion rates through various stages.
          {!isCompact && ' Each level represents a step in the process, with width indicating the relative value.'}
        </p>
        <div className="mt-3 sm:mt-4">
          <h4 className="text-sm sm:text-base font-medium">Current: {datasets[currentDataset].name}</h4>
          <div className="mt-2 grid grid-cols-2 gap-2 sm:gap-4 text-xs sm:text-sm">
            <div className="text-gray-400">Top Value:</div>
            <div className="text-gray-300">{formatNumber(datasets[currentDataset].data[0].value)}</div>
            <div className="text-gray-400">Bottom Value:</div>
            <div className="text-gray-300">{formatNumber(datasets[currentDataset].data[datasets[currentDataset].data.length - 1].value)}</div>
            <div className="text-gray-400">Conversion:</div>
            <div className="text-blue-400">
              {((datasets[currentDataset].data[datasets[currentDataset].data.length - 1].value / datasets[currentDataset].data[0].value) * 100).toFixed(1)}%
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 