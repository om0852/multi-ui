"use client";

import React, { useState } from "react";
import LineGraphDesign4 from "../_components/Bar_20";

export default function BarExample20() {
  // Sample datasets
  const datasets = {
    marketShare: {
      name: "Market Share Trends",
      data: [
        { x: "2018", y: 15 },
        { x: "2019", y: 18 },
        { x: "2020", y: 22 },
        { x: "2021", y: 28 },
        { x: "2022", y: 32 },
        { x: "2023", y: 38 }
      ],
      lineColor: "#6366F1",
      dotColor: "#4F46E5",
      backgroundColor: "#EEF2FF"
    },
    customerSatisfaction: {
      name: "Customer Satisfaction",
      data: [
        { x: "Q1", y: 72 },
        { x: "Q2", y: 76 },
        { x: "Q3", y: 82 },
        { x: "Q4", y: 79 },
        { x: "Q5", y: 85 },
        { x: "Q6", y: 88 },
        { x: "Q7", y: 91 },
        { x: "Q8", y: 90 }
      ],
      lineColor: "#F97316",
      dotColor: "#EA580C",
      backgroundColor: "#FFF7ED"
    }
  };

  // State for current dataset
  const [currentDataset, setCurrentDataset] = useState<keyof typeof datasets>("marketShare");
  
  return (
    <div className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-6">Line Graph Design 4</h2>
      
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
          <LineGraphDesign4 
            data={datasets[currentDataset].data} 
            width={700} 
            height={400} 
            lineColor={datasets[currentDataset].lineColor}
            dotColor={datasets[currentDataset].dotColor}
            backgroundColor={datasets[currentDataset].backgroundColor}
          />
        </div>
      </div>
    </div>
  );
} 