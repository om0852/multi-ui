"use client";

import React, { useState, useRef, useEffect } from "react";
import { AreaChart } from "../tsx/Bar_11";

export default function BarExample11() {
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

  // Sample data for sales and growth metrics
  const performanceData = [
    { month: "Q1", sales: 150, growth: 15 },
    { month: "Q2", sales: 180, growth: 20 },
    { month: "Q3", sales: 210, growth: 18 },
    { month: "Q4", sales: 250, growth: 25 }
  ];

  // Configuration for the area chart
  const chartConfig = {
    sales: {
      label: "Sales ($K)",
      color: "#3b82f6" // blue-500
    },
    growth: {
      label: "Growth (%)",
      color: "#10b981" // emerald-500
    }
  };

  // Determine if we should use compact layout
  const isCompact = containerWidth < 640;

  return (
    <div ref={containerRef} className="p-4 sm:p-6 md:p-8 min-h-screen bg-gray-700 text-white">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Area Chart</h2>
      
      <section>
        <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-3 sm:mb-4 truncate">
          {isCompact ? 'Performance' : 'Sales and Growth Analysis'}
        </h3>
        <div className="bg-white p-3 sm:p-4 md:p-6 rounded-lg">
          <div className="w-full h-[250px] sm:h-[400px] md:h-[500px]">
            <AreaChart 
              data={performanceData}
              config={chartConfig}
              xKey="month"
              yKeys={["sales", "growth"]}
            />
          </div>
       </div>
      </section>
    </div>
  );
} 