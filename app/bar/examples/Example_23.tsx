"use client";

import React, { useState, useRef, useEffect } from "react";
import StackedHorizontalBarChart from "../tsx/Bar_23";

export default function BarExample23() {
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

  // Sample datasets
  const datasets = {
    sales: {
      name: "Sales Breakdown",
      data: [
        {
          label: "Q1",
          segments: [
            { value: 150, color: "#3b82f6", label: "Online" },
            { value: 220, color: "#10b981", label: "Store" },
            { value: 180, color: "#f59e0b", label: "Mobile" }
          ]
        },
        {
          label: "Q2",
          segments: [
            { value: 180, color: "#3b82f6", label: "Online" },
            { value: 190, color: "#10b981", label: "Store" },
            { value: 210, color: "#f59e0b", label: "Mobile" }
          ]
        },
        {
          label: "Q3",
          segments: [
            { value: 220, color: "#3b82f6", label: "Online" },
            { value: 170, color: "#10b981", label: "Store" },
            { value: 240, color: "#f59e0b", label: "Mobile" }
          ]
        }
      ]
    },
    expenses: {
      name: "Expense Types",
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
            { value: 60, color: "#8b5cf6", label: "Space" },
            { value: 40, color: "#ec4899", label: "Tools" },
            { value: 35, color: "#f43f5e", label: "Power" }
          ]
        },
        {
          label: "HR",
          segments: [
            { value: 50, color: "#8b5cf6", label: "Pay" },
            { value: 20, color: "#ec4899", label: "Benefits" },
            { value: 15, color: "#f43f5e", label: "Training" }
          ]
        }
      ]
    }
  };

  // State for current dataset
  const [currentDataset, setCurrentDataset] = useState<keyof typeof datasets>("sales");
  const isCompact = containerWidth < 640;
  
  return (
    <div ref={containerRef} className="p-4 sm:p-6 md:p-8 min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Stacked Horizontal Bar Chart</h2>
      
      <div className={`mb-6 ${isCompact ? 'grid grid-cols-2' : 'flex flex-wrap'} gap-2`}>
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
            {isCompact ? name.split(' ')[0] : name}
          </button>
        ))}
      </div>
      
      <div className="bg-gray-800 p-3 sm:p-4 md:p-6 rounded-lg">
        <div className="bg-white rounded-lg p-2 sm:p-3 md:p-4">
          <StackedHorizontalBarChart 
            data={datasets[currentDataset].data} 
            width={Math.min(700, containerWidth - 24)}
            height={Math.min(400, (containerWidth - 24) * 0.6)}
            barHeight={isCompact ? 30 : 40}
            animationDuration={0.8}
            showLegend={!isCompact}
            showValues={!isCompact}
          />
        </div>
      </div>
    </div>
  );
} 