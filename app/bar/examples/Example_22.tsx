"use client";

import React, { useState } from "react";
import RadialBarChart from "../_components/Bar_22";

export default function BarExample22() {
  // Sample datasets
  const datasets = {
    performance: {
      name: "Performance Metrics",
      data: [
        { label: "Speed", value: 85, color: "#3B82F6" },
        { label: "Reliability", value: 92, color: "#10B981" },
        { label: "Efficiency", value: 78, color: "#F59E0B" },
        { label: "Quality", value: 88, color: "#8B5CF6" },
        { label: "Usability", value: 95, color: "#EC4899" },
        { label: "Security", value: 82, color: "#6366F1" }
      ]
    },
    skills: {
      name: "Team Skills",
      data: [
        { label: "JavaScript", value: 90, color: "#F59E0B" },
        { label: "React", value: 85, color: "#3B82F6" },
        { label: "Node.js", value: 75, color: "#10B981" },
        { label: "UI/UX", value: 80, color: "#EC4899" },
        { label: "DevOps", value: 65, color: "#8B5CF6" },
        { label: "Testing", value: 70, color: "#EF4444" }
      ]
    }
  };

  // State for current dataset
  const [currentDataset, setCurrentDataset] = useState<keyof typeof datasets>("performance");
  
  return (
    <div className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-6">Radial Bar Chart</h2>
      
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
          <RadialBarChart 
            data={datasets[currentDataset].data} 
            width={500} 
            height={500} 
            innerRadius={80}
            animationDuration={0.8}
            showLabels={true}
            showValues={true}
          />
        </div>
      </div>
    </div>
  );
} 