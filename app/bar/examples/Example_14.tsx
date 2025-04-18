"use client";

import React, { useState, useRef, useEffect } from "react";
import { BoxPlot } from "../_components/Bar_14";

export default function BarExample14() {
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
    scores: {
      name: "Test Scores",
      data: [65, 70, 75, 78, 80, 82, 85, 88, 90, 92, 95, 98, 60, 62, 65, 68, 70, 72, 75, 78]
    },
    ages: {
      name: "Age Distribution",
      data: [25, 28, 30, 32, 35, 38, 40, 42, 45, 48, 50, 52, 55, 58, 60, 62, 65, 68, 70, 72]
    }
  };

  // State for current dataset
  const [currentDataset, setCurrentDataset] = useState<keyof typeof datasets>("scores");

  // Determine if we should use compact layout
  const isCompact = containerWidth < 640;

  return (
    <div ref={containerRef} className="p-4 sm:p-6 md:p-8 min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Box Plot Analysis</h2>
      
      <section>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
          <h3 className="text-base sm:text-lg md:text-xl font-semibold">
            {isCompact ? 'Distribution' : 'Data Distribution'}
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
            <div className="w-full h-[250px] sm:h-[400px] md:h-[500px]">
              <BoxPlot 
                data={datasets[currentDataset].data}
                width={Math.min(600, containerWidth - 40)}
                height={Math.min(400, containerWidth * 0.6)}
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 