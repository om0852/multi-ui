"use client";

import React, { useState, useRef, useEffect } from "react";
import CircularProgressChart from "../tsx/Bar_24";

export default function BarExample24() {
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
    projectProgress: {
      name: "Project Status",
      data: [
        { label: "Research", value: 85, color: "#3B82F6" },
        { label: "Design", value: 92, color: "#10B981" },
        { label: "Dev", value: 65, color: "#F59E0B" },
        { label: "Test", value: 45, color: "#8B5CF6" }
      ],
      maxValue: 100
    },
    resourceUsage: {
      name: "Resource Usage",
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
  const isCompact = containerWidth < 640;
  
  // Calculate chart dimensions based on container width
  const chartWidth = Math.min(600, containerWidth - 40);
  const chartHeight = Math.min(500, containerWidth - 40);
  const thickness = isCompact ? 15 : 20;
  
  return (
    <div ref={containerRef} className="p-4 sm:p-6 md:p-8 min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Circular Progress Chart</h2>
      
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
            {name}
          </button>
        ))}
      </div>
      
      <div className="bg-gray-800 p-3 sm:p-4 md:p-6 rounded-lg">
        <div className="bg-white rounded-lg p-2 sm:p-3 md:p-4 flex justify-center">
          <CircularProgressChart 
            data={datasets[currentDataset].data} 
            width={chartWidth} 
            height={chartHeight} 
            thickness={thickness}
            animationDuration={1.5}
            showLabels={true}
            showValues={!isCompact}
            maxValue={datasets[currentDataset].maxValue}
          />
        </div>
      </div>
    </div>
  );
} 