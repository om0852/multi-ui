"use client";

import React, { useState, useRef, useEffect } from "react";
import RadialBarChart from "../_components/Bar_22";

export default function BarExample22() {
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
  const isCompact = containerWidth < 640;
  
  return (
    <div ref={containerRef} className="p-4 sm:p-6 md:p-8 min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Radial Bar Chart</h2>
      
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
        <div className="bg-white rounded-lg p-2 sm:p-3 md:p-4 flex justify-center">
          <RadialBarChart 
            data={datasets[currentDataset].data} 
            width={Math.min(500, containerWidth - 40)} 
            height={Math.min(500, containerWidth - 40)} 
            innerRadius={Math.min(80, (containerWidth - 40) * 0.15)}
            animationDuration={0.8}
            showLabels={!isCompact}
            showValues={true}
          />
        </div>
      </div>
    </div>
  );
} 