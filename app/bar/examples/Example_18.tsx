"use client";

import React, { useState, useRef, useEffect } from "react";
import LineGraphDesign2 from "../tsx/Bar_18";

export default function BarExample18() {
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
      name: "Monthly Sales",
      data: [
        { x: "Jan", y: 45000 },
        { x: "Feb", y: 52000 },
        { x: "Mar", y: 49000 },
        { x: "Apr", y: 63000 },
        { x: "May", y: 58000 },
        { x: "Jun", y: 71000 }
      ],
      lineColor: "#3B82F6",
      areaColor: "#93C5FD"
    },
    engagement: {
      name: "User Engagement",
      data: [
        { x: "Jan", y: 8500 },
        { x: "Feb", y: 9200 },
        { x: "Mar", y: 8900 },
        { x: "Apr", y: 9500 },
        { x: "May", y: 9800 },
        { x: "Jun", y: 10200 }
      ],
      lineColor: "#10B981",
      areaColor: "#6EE7B7"
    },
    performance: {
      name: "Website Performance",
      data: [
        { x: "Jan", y: 95 },
        { x: "Feb", y: 92 },
        { x: "Mar", y: 96 },
        { x: "Apr", y: 94 },
        { x: "May", y: 97 },
        { x: "Jun", y: 98 }
      ],
      lineColor: "#8B5CF6",
      areaColor: "#C4B5FD"
    }
  };

  // State for current dataset
  const [currentDataset, setCurrentDataset] = useState<keyof typeof datasets>("sales");
  const isCompact = containerWidth < 640;

  // Format Y-axis values based on dataset
  

  return (
    <div ref={containerRef} className="p-4 sm:p-6 md:p-8 min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Area Graph</h2>
      
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
          <div className="w-full h-[200px] sm:h-[400px] md:h-[500px]">
            <LineGraphDesign2 
              data={datasets[currentDataset].data}
              width={Math.min(800, containerWidth - 24)}
              height={Math.min(400, (containerWidth - 24) * 0.6)}
              lineColor={datasets[currentDataset].lineColor}
            />
          </div>
        </div>
      </div>
    </div>
  );
} 