"use client";

import React, { useState, useRef, useEffect } from "react";
import { Histogram } from "../_components/Bar_13";

export default function BarExample13() {
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

  // Sample data for distribution analysis
  const data = [
    25, 28, 32, 35, 38, 40, 42, 45, 48, 50,
    52, 55, 58, 60, 62, 65, 68, 70, 72, 75,
    45, 48, 50, 52, 55, 58, 60, 62, 65, 68,
    35, 38, 40, 42, 45, 48, 50, 52, 55, 58
  ];

  // State for bin count
  const [binCount, setBinCount] = useState(10);

  // Determine if we should use compact layout
  const isCompact = containerWidth < 640;

  return (
    <div ref={containerRef} className="p-4 sm:p-6 md:p-8 min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Distribution Analysis</h2>
      
      <section>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
          <h3 className="text-base sm:text-lg md:text-xl font-semibold">
            {isCompact ? 'Data Bins' : 'Data Distribution'}
          </h3>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <label htmlFor="bin-count" className="text-sm sm:text-base font-medium whitespace-nowrap">
              Bins:
            </label>
            <input
              id="bin-count"
              type="range"
              min="5"
              max="20"
              value={binCount}
              onChange={(e) => setBinCount(parseInt(e.target.value))}
              className="w-full sm:w-32 md:w-40"
            />
            <span className="text-sm sm:text-base min-w-[24px]">{binCount}</span>
          </div>
        </div>
        <div className="bg-gray-800 p-3 sm:p-4 md:p-6 rounded-lg">
          <div className="bg-white rounded-lg p-3 sm:p-4">
            <div className="w-full h-[250px] sm:h-[400px] md:h-[500px]">
              <Histogram 
                data={data}
                bins={binCount}
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