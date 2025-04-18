"use client";

import React, { useState, useRef, useEffect } from "react";
import LineGraphDesign3 from "../_components/Bar_19";

export default function BarExample19() {
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
    performance: {
      name: "Website Performance",
      data: [
        { x: "Jan", y: 85 },
        { x: "Feb", y: 88 },
        { x: "Mar", y: 92 },
        { x: "Apr", y: 89 },
        { x: "May", y: 94 },
        { x: "Jun", y: 97 }
      ],
      lineColor: "#8B5CF6",
      gradientStart: "#C4B5FD",
      gradientEnd: "#8B5CF6",
      dotColor: "#6D28D9"
    },
    revenue: {
      name: "Monthly Revenue",
      data: [
        { x: "Jan", y: 45 },
        { x: "Feb", y: 52 },
        { x: "Mar", y: 49 },
        { x: "Apr", y: 63 },
        { x: "May", y: 58 },
        { x: "Jun", y: 71 }
      ],
      lineColor: "#10B981",
      gradientStart: "#A7F3D0",
      gradientEnd: "#10B981",
      dotColor: "#059669"
    }
  };

  // State for current dataset
  const [currentDataset, setCurrentDataset] = useState<keyof typeof datasets>("performance");
  const isCompact = containerWidth < 640;
  
  return (
    <div ref={containerRef} className="p-4 sm:p-6 md:p-8 min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Gradient Line Graph</h2>
      
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
            <LineGraphDesign3 
              data={datasets[currentDataset].data}
              width={Math.min(800, containerWidth - 24)}
              height={Math.min(400, (containerWidth - 24) * 0.6)}
              lineColor={datasets[currentDataset].lineColor}
              gradientStart={datasets[currentDataset].gradientStart}
              gradientEnd={datasets[currentDataset].gradientEnd}
              dotColor={datasets[currentDataset].dotColor}
            />
          </div>
        </div>
      </div>
    </div>
  );
} 