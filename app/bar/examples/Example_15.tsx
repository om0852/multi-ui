"use client";

import React, { useState, useRef, useEffect } from "react";
import PieChart from "../_components/Bar_15";

export default function BarExample15() {
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
      name: "Revenue Sources",
      data: [
        { id: "1", label: "Product Sales", value: 45, color: "#3b82f6" },
        { id: "2", label: "Services", value: 30, color: "#10b981" },
        { id: "3", label: "Subscriptions", value: 25, color: "#f59e0b" }
      ]
    },
    expenses: {
      name: "Expense Categories",
      data: [
        { id: "1", label: "Marketing", value: 35, color: "#8b5cf6" },
        { id: "2", label: "Operations", value: 40, color: "#ec4899" },
        { id: "3", label: "Development", value: 25, color: "#f43f5e" }
      ]
    }
  };

  // State for current dataset
  const [currentDataset, setCurrentDataset] = useState<keyof typeof datasets>("revenue");

  // Determine if we should use compact layout
  const isCompact = containerWidth < 640;

  return (
    <div ref={containerRef} className="p-4 sm:p-6 md:p-8 min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Pie Chart Analysis</h2>
      
      <section>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
          <h3 className="text-base sm:text-lg md:text-xl font-semibold">
            {isCompact ? 'Data View' : 'Revenue & Expenses'}
          </h3>
          <div className={`flex gap-2 ${isCompact ? 'flex-col w-full' : 'flex-row'}`}>
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
          <div className="mt-4">
            <div className={`${isCompact ? 'text-sm' : 'text-base'} grid grid-cols-1 sm:grid-cols-3 gap-4`}>
              {datasets[currentDataset].data.map((item) => {
                const total = datasets[currentDataset].data.reduce((sum, i) => sum + i.value, 0);
                const percentage = (item.value / total * 100).toFixed(1);
                
                return (
                  <div key={item.id} className="flex items-center gap-2 bg-gray-700/50 p-2 rounded">
                    <div className="w-3 h-3 rounded shrink-0" style={{ backgroundColor: item.color }}></div>
                    <div className="flex-grow min-w-0">
                      <div className="truncate">{item.label}</div>
                      <div className="text-gray-300 text-xs sm:text-sm">
                        {item.value}% ({percentage}% of total)
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