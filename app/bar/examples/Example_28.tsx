'use client'

import { useState } from 'react'
import FunnelChart from '../_components/Bar_28'

export default function BarExample28() {
  // Sample datasets
  const datasets = {
    salesFunnel: {
      name: "Sales Funnel",
      data: [
        { 
          label: "Website Visitors",
          value: 10000,
          description: "Total unique visitors to the website"
        },
        { 
          label: "Product Views",
          value: 5000,
          description: "Visitors who viewed product pages"
        },
        { 
          label: "Add to Cart",
          value: 2000,
          description: "Products added to shopping cart"
        },
        { 
          label: "Checkout Started",
          value: 1000,
          description: "Users who initiated checkout"
        },
        { 
          label: "Purchases",
          value: 500,
          description: "Completed purchases"
        }
      ]
    },
    recruitmentFunnel: {
      name: "Recruitment Pipeline",
      data: [
        { 
          label: "Applications",
          value: 1500,
          description: "Total job applications received"
        },
        { 
          label: "Resume Screened",
          value: 800,
          description: "Candidates who passed initial screening"
        },
        { 
          label: "Phone Interview",
          value: 300,
          description: "Candidates who completed phone screening"
        },
        { 
          label: "Technical Interview",
          value: 150,
          description: "Candidates who passed technical assessment"
        },
        { 
          label: "Final Interview",
          value: 50,
          description: "Candidates who reached final interview"
        },
        { 
          label: "Offers Made",
          value: 30,
          description: "Job offers extended"
        }
      ]
    },
    marketingFunnel: {
      name: "Marketing Funnel",
      data: [
        { 
          label: "Awareness",
          value: 20000,
          description: "People reached through marketing campaigns"
        },
        { 
          label: "Interest",
          value: 8000,
          description: "Engaged with marketing content"
        },
        { 
          label: "Consideration",
          value: 3000,
          description: "Requested more information"
        },
        { 
          label: "Intent",
          value: 1500,
          description: "Scheduled demos or consultations"
        },
        { 
          label: "Evaluation",
          value: 800,
          description: "Actively evaluating the product"
        },
        { 
          label: "Purchase",
          value: 400,
          description: "Completed purchase"
        }
      ]
    }
  }

  // State for current dataset and chart settings
  const [currentDataset, setCurrentDataset] = useState<keyof typeof datasets>("salesFunnel")
  const [showPercentages, setShowPercentages] = useState(true)
  const [animationDuration, setAnimationDuration] = useState(0.8)
  const [gapBetweenLevels, setGapBetweenLevels] = useState(4)

  return (
    <div className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-6">Funnel Chart</h2>
      
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
          <label className="block text-sm font-medium mb-1">Show Percentages</label>
          <div className="flex items-center">
            <button
              onClick={() => setShowPercentages(true)}
              className={`px-3 py-1 rounded-l-md ${
                showPercentages ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300'
              }`}
            >
              On
            </button>
            <button
              onClick={() => setShowPercentages(false)}
              className={`px-3 py-1 rounded-r-md ${
                !showPercentages ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300'
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
            Gap Between Levels: {gapBetweenLevels}px
          </label>
          <input
            type="range"
            min="0"
            max="20"
            step="1"
            value={gapBetweenLevels}
            onChange={(e) => setGapBetweenLevels(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>
      
      {/* Chart Display */}
      <div className="bg-gray-800 p-6 rounded-lg">
        <div className="bg-white rounded-lg p-4 flex justify-center">
          <FunnelChart 
            data={datasets[currentDataset].data}
            width={800}
            height={500}
            gapBetweenLevels={gapBetweenLevels}
            animationDuration={animationDuration}
            showPercentages={showPercentages}
          />
        </div>
      </div>
      
      {/* Dataset Information */}
      <div className="mt-6 bg-gray-800 p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">About This Visualization</h3>
        <p className="text-gray-300">
          The Funnel Chart visualizes a process that starts with a large number at the top and progressively
          reduces to a smaller number at the bottom, showing conversion rates between stages. This is particularly
          useful for analyzing sales processes, user journeys, or recruitment pipelines.
        </p>
        <div className="mt-4">
          <h4 className="font-medium">Current Dataset: {datasets[currentDataset].name}</h4>
          <div className="mt-2 space-y-1">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="text-gray-400">Total Entries:</div>
              <div className="text-gray-300">{datasets[currentDataset].data[0].value.toLocaleString()}</div>
              <div className="text-gray-400">Final Conversion:</div>
              <div className="text-gray-300">
                {((datasets[currentDataset].data[datasets[currentDataset].data.length - 1].value / 
                   datasets[currentDataset].data[0].value) * 100).toFixed(1)}%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 