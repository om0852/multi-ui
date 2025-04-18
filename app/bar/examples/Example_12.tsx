"use client";

import React, { useState, useRef, useEffect } from "react";
import { Sparkline } from "../_components/Bar_12";

export default function BarExample12() {
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

  // Sample data for different metrics
  const salesData = [150, 180, 210, 250, 230, 260, 280, 300, 320, 290, 340, 360];
  const growthData = [15, 20, 18, 25, 22, 28, 30, 27, 32, 29, 35, 38];

  // Determine if we should use compact layout
  const isCompact = containerWidth < 640;

  return (
    <div ref={containerRef} className="p-4 sm:p-6 md:p-8 min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Sparkline Charts</h2>
      
      <section>
        <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-3 sm:mb-4 truncate">
          {isCompact ? 'Trends' : 'Performance Trends'}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-800 p-3 sm:p-4 md:p-6 rounded-lg">
            <h4 className="text-sm sm:text-base md:text-lg font-medium mb-2">Monthly Sales ($K)</h4>
            <div className="h-[80px] sm:h-[120px] md:h-[150px]">
              <Sparkline 
                data={salesData}
                color="#3b82f6"
                width={containerWidth < 768 ? 300 : 400}
                height={containerWidth < 768 ? 80 : 100}
                strokeWidth={2}
                className="w-full h-full"
              />
            </div>
          </div>
          
          <div className="bg-gray-800 p-3 sm:p-4 md:p-6 rounded-lg">
            <h4 className="text-sm sm:text-base md:text-lg font-medium mb-2">Growth Rate (%)</h4>
            <div className="h-[80px] sm:h-[120px] md:h-[150px]">
              <Sparkline 
                data={growthData}
                color="#10b981"
                width={containerWidth < 768 ? 300 : 400}
                height={containerWidth < 768 ? 80 : 100}
                strokeWidth={2}
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 