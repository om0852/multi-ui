"use client";

import React, { useState } from "react";
import LineGraphDesign3 from "../_components/Bar_19";

export default function BarExample19() {
  // Sample datasets
  const datasets = {
    performance: {
      name: "Website Performance",
      data: [
        { x: "Jan", y: 85 },
        { x: "Feb", y: 88 },
        { x: "Mar", y: 92 },
        { x: "Apr", y: 89 },
        { x: "May", y: 94 },
        { x: "Jun", y: 97 },
        { x: "Jul", y: 93 },
        { x: "Aug", y: 96 }
      ],
      lineColor: "#8B5CF6",
      gradientStart: "#C4B5FD",
      gradientEnd: "#8B5CF6",
      dotColor: "#6D28D9"
    },
    revenue: {
      name: "Monthly Revenue",
      data: [
        { x: "Jan", y: 45000 },
        { x: "Feb", y: 52000 },
        { x: "Mar", y: 49000 },
        { x: "Apr", y: 63000 },
        { x: "May", y: 58000 },
        { x: "Jun", y: 71000 },
        { x: "Jul", y: 75000 },
        { x: "Aug", y: 82000 }
      ],
      lineColor: "#10B981",
      gradientStart: "#A7F3D0",
      gradientEnd: "#10B981",
      dotColor: "#059669"
    }
  };

  // State for current dataset
  const [currentDataset, setCurrentDataset] = useState<keyof typeof datasets>("performance");
  
  return (
    <div className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-6">Line Graph Design 3</h2>
      
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
      
      {/* Line Graph Display */}
      <div className="bg-gray-800 p-6 rounded-lg">
        <div className="rounded-lg overflow-hidden">
          <LineGraphDesign3 
            data={datasets[currentDataset].data} 
            width={700} 
            height={400} 
            lineColor={datasets[currentDataset].lineColor}
            gradientStart={datasets[currentDataset].gradientStart}
            gradientEnd={datasets[currentDataset].gradientEnd}
            dotColor={datasets[currentDataset].dotColor}
          />
        </div>
      </div>
    </div>
  );
} 