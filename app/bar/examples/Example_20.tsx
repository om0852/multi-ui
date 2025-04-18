"use client";

import React, { useState, useRef, useEffect } from "react";
import LineGraphDesign4 from "../_components/Bar_20";

export default function BarExample20() {
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
    marketShare: {
      name: "Market Share",
      data: [
        { x: "2018", y: 15 },
        { x: "2019", y: 18 },
        { x: "2020", y: 22 },
        { x: "2021", y: 28 },
        { x: "2022", y: 32 }
      ],
      lineColor: "#6366F1",
      dotColor: "#4F46E5",
      backgroundColor: "#EEF2FF"
    },
    satisfaction: {
      name: "Satisfaction",
      data: [
        { x: "Q1", y: 72 },
        { x: "Q2", y: 76 },
        { x: "Q3", y: 82 },
        { x: "Q4", y: 79 },
        { x: "Q5", y: 85 }
      ],
      lineColor: "#F97316",
      dotColor: "#EA580C",
      backgroundColor: "#FFF7ED"
    }
  };

  // State for current dataset
  const [currentDataset, setCurrentDataset] = useState<keyof typeof datasets>("marketShare");
  const isCompact = containerWidth < 640;
  
  return (
    <div ref={containerRef} className="p-4 sm:p-6 md:p-8 min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Advanced Line Graph</h2>
      
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
            <LineGraphDesign4 
              data={datasets[currentDataset].data}
              width={Math.min(800, containerWidth - 24)}
              height={Math.min(400, (containerWidth - 24) * 0.6)}
              lineColor={datasets[currentDataset].lineColor}
              dotColor={datasets[currentDataset].dotColor}
              backgroundColor={datasets[currentDataset].backgroundColor}
            />
          </div>
        </div>
      </div>
    </div>
  );
} 