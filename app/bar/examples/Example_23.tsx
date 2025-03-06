"use client";

import React, { useState } from "react";
import StackedHorizontalBarChart from "../_components/Bar_23";

export default function BarExample23() {
  // Sample datasets
  const datasets = {
    sales: {
      name: "Sales Breakdown by Channel",
      data: [
        {
          label: "Q1 2023",
          segments: [
            { value: 150, color: "#3b82f6", label: "Online" },
            { value: 220, color: "#10b981", label: "In-store" },
            { value: 180, color: "#f59e0b", label: "Mobile" }
          ]
        },
        {
          label: "Q2 2023",
          segments: [
            { value: 180, color: "#3b82f6", label: "Online" },
            { value: 190, color: "#10b981", label: "In-store" },
            { value: 210, color: "#f59e0b", label: "Mobile" }
          ]
        },
        {
          label: "Q3 2023",
          segments: [
            { value: 220, color: "#3b82f6", label: "Online" },
            { value: 170, color: "#10b981", label: "In-store" },
            { value: 240, color: "#f59e0b", label: "Mobile" }
          ]
        },
        {
          label: "Q4 2023",
          segments: [
            { value: 250, color: "#3b82f6", label: "Online" },
            { value: 230, color: "#10b981", label: "In-store" },
            { value: 260, color: "#f59e0b", label: "Mobile" }
          ]
        }
      ]
    },
    expenses: {
      name: "Expense Categories",
      data: [
        {
          label: "Marketing",
          segments: [
            { value: 45, color: "#8b5cf6", label: "Digital" },
            { value: 30, color: "#ec4899", label: "Print" },
            { value: 25, color: "#f43f5e", label: "Events" }
          ]
        },
        {
          label: "Operations",
          segments: [
            { value: 60, color: "#8b5cf6", label: "Facilities" },
            { value: 40, color: "#ec4899", label: "Equipment" },
            { value: 35, color: "#f43f5e", label: "Utilities" }
          ]
        },
        {
          label: "HR",
          segments: [
            { value: 50, color: "#8b5cf6", label: "Salaries" },
            { value: 20, color: "#ec4899", label: "Benefits" },
            { value: 15, color: "#f43f5e", label: "Training" }
          ]
        },
        {
          label: "R&D",
          segments: [
            { value: 70, color: "#8b5cf6", label: "Research" },
            { value: 55, color: "#ec4899", label: "Development" },
            { value: 40, color: "#f43f5e", label: "Testing" }
          ]
        }
      ]
    }
  };

  // State for current dataset
  const [currentDataset, setCurrentDataset] = useState<keyof typeof datasets>("sales");
  
  return (
    <div className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-6">Stacked Horizontal Bar Chart</h2>
      
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
        <div className="bg-white rounded-lg p-4">
          <StackedHorizontalBarChart 
            data={datasets[currentDataset].data} 
            width={700} 
            height={400} 
            barHeight={40}
            animationDuration={0.8}
            showLegend={true}
            showValues={true}
          />
        </div>
      </div>
    </div>
  );
} 