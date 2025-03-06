"use client";

import React, { useState } from "react";
import CircularProgressChart from "../_components/Bar_24";

export default function BarExample24() {
  // Sample datasets
  const datasets = {
    projectProgress: {
      name: "Project Completion Status",
      data: [
        { label: "Research", value: 85, color: "#3B82F6" },
        { label: "Design", value: 92, color: "#10B981" },
        { label: "Development", value: 65, color: "#F59E0B" },
        { label: "Testing", value: 45, color: "#8B5CF6" },
        { label: "Deployment", value: 30, color: "#EC4899" }
      ],
      maxValue: 100
    },
    resourceUsage: {
      name: "System Resource Usage",
      data: [
        { label: "CPU", value: 72, color: "#EF4444" },
        { label: "Memory", value: 84, color: "#3B82F6" },
        { label: "Disk", value: 56, color: "#10B981" },
        { label: "Network", value: 38, color: "#F59E0B" }
      ],
      maxValue: 100
    }
  };

  // State for current dataset
  const [currentDataset, setCurrentDataset] = useState<keyof typeof datasets>("projectProgress");
  
  return (
    <div className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-6">Circular Progress Chart</h2>
      
      {/* Dataset Selector */}
      <div className="mb-6">
        <div className="flex gap-4">
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
      
      {/* Chart Display */}
      <div className="bg-gray-800 p-6 rounded-lg">
        <div className="bg-white rounded-lg p-4 flex justify-center">
          <CircularProgressChart 
            data={datasets[currentDataset].data} 
            width={600} 
            height={500} 
            thickness={20}
            animationDuration={1.5}
            showLabels={true}
            showValues={true}
            maxValue={datasets[currentDataset].maxValue}
          />
        </div>
      </div>
    </div>
  );
} 