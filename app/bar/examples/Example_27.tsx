'use client'

import { useState, useRef, useEffect } from 'react'
import WaterfallChart from '../_components/Bar_27'

export default function BarExample27() {
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
    profitAnalysis: {
      name: "Profit",
      data: [
        { label: "Revenue", value: 1000000, isTotal: true },
        { label: "Sales", value: 500000 },
        { label: "Services", value: 300000 },
        { label: "Costs", value: -400000 },
        { label: "Marketing", value: -200000 },
        { label: "Tax", value: -150000 },
        { label: "Net", value: 1050000, isTotal: true }
      ]
    },
    budgetFlow: {
      name: "Budget",
      data: [
        { label: "Start", value: 500000, isTotal: true },
        { label: "Funding", value: 200000 },
        { label: "Project A", value: -150000 },
        { label: "Project B", value: -180000 },
        { label: "Overhead", value: -120000 },
        { label: "Reserve", value: -50000 },
        { label: "End", value: 200000, isTotal: true }
      ]
    },
    salesPerformance: {
      name: "Sales",
      data: [
        { label: "Last Qtr", value: 800000, isTotal: true },
        { label: "New", value: 300000 },
        { label: "Upsells", value: 200000 },
        { label: "Churn", value: -150000 },
        { label: "Discount", value: -100000 },
        { label: "Refunds", value: -50000 },
        { label: "Current", value: 1000000, isTotal: true }
      ]
    }
  }

  // State for current dataset and chart settings
  const [currentDataset, setCurrentDataset] = useState<keyof typeof datasets>("profitAnalysis")
  const [showConnectors, setShowConnectors] = useState(true)
  const [animationDuration, setAnimationDuration] = useState(0.8)
  const [barWidth, setBarWidth] = useState(40)

  // Determine if we should use compact layout
  const isCompact = containerWidth < 640;
  
  // Calculate chart dimensions based on container width
  const chartWidth = Math.min(800, containerWidth - 40);
  const chartHeight = Math.min(500, containerWidth * 0.6);

  // Format currency values
  const formatCurrency = (value: number) => {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
      notation: isCompact ? 'compact' : 'standard'
    });
    return formatter.format(value);
  }

  return (
    <div ref={containerRef} className="p-4 sm:p-6 md:p-8 min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Waterfall Chart</h2>
      
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
          <label className="block text-xs sm:text-sm font-medium mb-1">Connectors</label>
          <div className="flex items-center">
            <button
              onClick={() => setShowConnectors(true)}
              className={`px-2 py-1 text-xs sm:text-sm rounded-l-md ${
                showConnectors ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300'
              }`}
            >
              On
            </button>
            <button
              onClick={() => setShowConnectors(false)}
              className={`px-2 py-1 text-xs sm:text-sm rounded-r-md ${
                !showConnectors ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300'
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
            Bar: {barWidth}px
          </label>
          <input
            type="range"
            min={isCompact ? 20 : 30}
            max={isCompact ? 40 : 60}
            step="5"
            value={barWidth}
            onChange={(e) => setBarWidth(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>
      
      {/* Chart Display */}
      <div className="bg-gray-800 p-3 sm:p-4 md:p-6 rounded-lg">
        <div className="bg-white rounded-lg p-2 sm:p-3 md:p-4 flex justify-center">
          <WaterfallChart 
            data={datasets[currentDataset].data}
            width={chartWidth}
            height={chartHeight}
            barWidth={isCompact ? Math.min(30, barWidth) : barWidth}
            animationDuration={animationDuration}
            showConnectors={showConnectors}
          />
        </div>
      </div>
      
      {/* Dataset Information */}
      <div className="mt-4 sm:mt-6 bg-gray-800 p-3 sm:p-4 rounded-lg">
        <h3 className="text-base sm:text-lg font-semibold mb-2">About</h3>
        <p className="text-xs sm:text-sm text-gray-300">
          The Waterfall Chart shows how an initial value changes through positive and negative values.
          {!isCompact && ' This visualization is commonly used in financial analysis to track value changes over time.'}
        </p>
        <div className="mt-3 sm:mt-4">
          <h4 className="text-sm sm:text-base font-medium">Current: {datasets[currentDataset].name}</h4>
          <div className="mt-2 grid grid-cols-2 gap-2 sm:gap-4 text-xs sm:text-sm">
            <div className="text-gray-400">Start:</div>
            <div className="text-gray-300">{formatCurrency(datasets[currentDataset].data[0].value)}</div>
            <div className="text-gray-400">End:</div>
            <div className="text-gray-300">{formatCurrency(datasets[currentDataset].data[datasets[currentDataset].data.length - 1].value)}</div>
            <div className="text-gray-400">Change:</div>
            <div className={`${
              datasets[currentDataset].data[datasets[currentDataset].data.length - 1].value - datasets[currentDataset].data[0].value >= 0
                ? 'text-green-400'
                : 'text-red-400'
            }`}>
              {formatCurrency(datasets[currentDataset].data[datasets[currentDataset].data.length - 1].value - datasets[currentDataset].data[0].value)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 