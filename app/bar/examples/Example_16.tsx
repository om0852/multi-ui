"use client";

import React, { useState, useRef, useEffect } from "react";
import PieChart from "../tsx/Bar_16";

export default function BarExample16() {
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
    revenue: {
      name: "Revenue by Product Line",
      data: [
        { id: "product-a", value: 420000, color: "#3b82f6", label: "Product A" },
        { id: "product-b", value: 380000, color: "#10b981", label: "Product B" },
        { id: "product-c", value: 290000, color: "#f59e0b", label: "Product C" },
        { id: "product-d", value: 180000, color: "#8b5cf6", label: "Product D" },
        { id: "product-e", value: 120000, color: "#ec4899", label: "Product E" }
      ]
    },
    timeSpent: {
      name: "Time Spent on Activities",
      data: [
        { id: "work", value: 40, color: "#3b82f6", label: "Work" },
        { id: "sleep", value: 33, color: "#8b5cf6", label: "Sleep" },
        { id: "leisure", value: 15, color: "#10b981", label: "Leisure" },
        { id: "chores", value: 7, color: "#f59e0b", label: "Chores" },
        { id: "commute", value: 5, color: "#ef4444", label: "Commute" }
      ]
    },
    socialMedia: {
      name: "Social Media Usage",
      data: [
        { id: "instagram", value: 35, color: "#e1306c", label: "Instagram" },
        { id: "facebook", value: 25, color: "#4267B2", label: "Facebook" },
        { id: "twitter", value: 15, color: "#1DA1F2", label: "Twitter" },
        { id: "tiktok", value: 18, color: "#000000", label: "TikTok" },
        { id: "linkedin", value: 7, color: "#0077B5", label: "LinkedIn" }
      ]
    }
  };

  // State for current dataset
  const [currentDataset, setCurrentDataset] = useState<keyof typeof datasets>("revenue");
  
  // Format value based on dataset
  const formatValue = (value: number, dataset: keyof typeof datasets) => {
    if (dataset === "revenue") {
      return new Intl.NumberFormat('en-US', { 
        style: 'currency', 
        currency: 'USD',
        maximumFractionDigits: 0
      }).format(value);
    } else if (dataset === "timeSpent") {
      return `${value} hours`;
    } else {
      return `${value}%`;
    }
  };

  // Determine if we should use compact layout
  const isCompact = containerWidth < 640;
  
  return (
    <div ref={containerRef} className="p-4 sm:p-6 md:p-8 min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Animated Pie Chart</h2>
      
      <section>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
          <h3 className="text-base sm:text-lg md:text-xl font-semibold">
            {isCompact ? 'Data View' : 'Data Distribution'}
          </h3>
          <div className={`flex gap-2 ${isCompact ? 'flex-col w-full' : 'flex-wrap'}`}>
            {Object.entries(datasets).map(([key, { name }]) => (
              <button
                key={key}
                onClick={() => setCurrentDataset(key as keyof typeof datasets)}
                className={`px-4 py-2 rounded-md transition-colors text-sm sm:text-base ${
                  currentDataset === key 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                } ${isCompact ? 'w-full' : ''}`}
              >
                {name}
              </button>
            ))}
          </div>
        </div>
        <div className="bg-gray-800 p-3 sm:p-4 md:p-6 rounded-lg">
          <div className="bg-white rounded-lg p-3 sm:p-4">
            <div className="w-full h-[250px] sm:h-[400px] md:h-[500px] flex justify-center items-center">
              <PieChart 
                data={datasets[currentDataset].data}
                width={Math.min(500, containerWidth - 40)}
                height={Math.min(500, containerWidth - 40)}
              />
            </div>
          </div>
          <div className="mt-4 overflow-x-auto">
            <div className={`${isCompact ? 'text-sm' : 'text-base'} grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4`}>
              {datasets[currentDataset].data.map((item) => {
                const total = datasets[currentDataset].data.reduce((sum, i) => sum + i.value, 0);
                const percentage = (item.value / total * 100).toFixed(1);
                
                return (
                  <div key={item.id} className="flex items-center gap-2 bg-gray-700/50 p-2 rounded">
                    <div className="w-3 h-3 rounded shrink-0" style={{ backgroundColor: item.color }}></div>
                    <div className="flex-grow min-w-0">
                      <div className="truncate">{item.label}</div>
                      <div className="text-gray-300 text-xs sm:text-sm">
                        {formatValue(item.value, currentDataset)} ({percentage}%)
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 