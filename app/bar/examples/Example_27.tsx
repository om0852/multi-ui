'use client'

import { useState } from 'react'
import WaterfallChart from '../_components/Bar_27'

export default function BarExample27() {
  // Sample datasets
  const datasets = {
    profitAnalysis: {
      name: "Profit Analysis",
      data: [
        { label: "Initial Revenue", value: 1000000, isTotal: true },
        { label: "Product Sales", value: 500000 },
        { label: "Service Income", value: 300000 },
        { label: "Operating Costs", value: -400000 },
        { label: "Marketing Expenses", value: -200000 },
        { label: "Tax", value: -150000 },
        { label: "Net Profit", value: 1050000, isTotal: true }
      ]
    },
    budgetFlow: {
      name: "Budget Flow Analysis",
      data: [
        { label: "Starting Budget", value: 500000, isTotal: true },
        { label: "Additional Funding", value: 200000 },
        { label: "Project A Costs", value: -150000 },
        { label: "Project B Costs", value: -180000 },
        { label: "Overhead", value: -120000 },
        { label: "Contingency Fund", value: -50000 },
        { label: "Remaining Budget", value: 200000, isTotal: true }
      ]
    },
    salesPerformance: {
      name: "Sales Performance",
      data: [
        { label: "Last Quarter", value: 800000, isTotal: true },
        { label: "New Accounts", value: 300000 },
        { label: "Upsells", value: 200000 },
        { label: "Churned Accounts", value: -150000 },
        { label: "Discounts", value: -100000 },
        { label: "Refunds", value: -50000 },
        { label: "Current Quarter", value: 1000000, isTotal: true }
      ]
    }
  }

  // State for current dataset and chart settings
  const [currentDataset, setCurrentDataset] = useState<keyof typeof datasets>("profitAnalysis")
  const [showConnectors, setShowConnectors] = useState(true)
  const [animationDuration, setAnimationDuration] = useState(0.8)
  const [barWidth, setBarWidth] = useState(40)

  // Format currency values
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value)
  }

  return (
    <div className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-6">Waterfall Chart</h2>
      
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
      <div className="mb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Show Connectors</label>
          <div className="flex items-center">
            <button
              onClick={() => setShowConnectors(true)}
              className={`px-3 py-1 rounded-l-md ${
                showConnectors ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300'
              }`}
            >
              On
            </button>
            <button
              onClick={() => setShowConnectors(false)}
              className={`px-3 py-1 rounded-r-md ${
                !showConnectors ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300'
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
            Bar Width: {barWidth}px
          </label>
          <input
            type="range"
            min="20"
            max="60"
            step="5"
            value={barWidth}
            onChange={(e) => setBarWidth(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>
      
      {/* Chart Display */}
      <div className="bg-gray-800 p-6 rounded-lg">
        <div className="bg-white rounded-lg p-4 flex justify-center">
          <WaterfallChart 
            data={datasets[currentDataset].data}
            width={800}
            height={500}
            barWidth={barWidth}
            animationDuration={animationDuration}
            showConnectors={showConnectors}
          />
        </div>
      </div>
      
      {/* Dataset Information */}
      <div className="mt-6 bg-gray-800 p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">About This Visualization</h3>
        <p className="text-gray-300">
          The Waterfall Chart shows how an initial value is affected by a series of positive and negative values,
          typically used in financial analysis to understand how various factors contribute to the total value change.
        </p>
        <div className="mt-4">
          <h4 className="font-medium">Current Dataset: {datasets[currentDataset].name}</h4>
          <div className="mt-2 space-y-1">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="text-gray-400">Starting Value:</div>
              <div className="text-gray-300">{formatCurrency(datasets[currentDataset].data[0].value)}</div>
              <div className="text-gray-400">Ending Value:</div>
              <div className="text-gray-300">{formatCurrency(datasets[currentDataset].data[datasets[currentDataset].data.length - 1].value)}</div>
              <div className="text-gray-400">Net Change:</div>
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
    </div>
  )
} 