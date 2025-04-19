"use client";

import React from 'react';
import { CustomBarChart, BarChartConfig } from '../tsx/Bar_1';

export default function BarExample1() {
  // Sample data for the bar chart
  const sampleData = [
    { month: "January", sales: 120, revenue: 150 },
    { month: "February", sales: 200, revenue: 220 },
    { month: "March", sales: 150, revenue: 180 },
    { month: "April", sales: 300, revenue: 350 },
    { month: "May", sales: 250, revenue: 280 },
    { month: "June", sales: 400, revenue: 450 },
  ];

  // Configuration for the bar chart
  const chartConfig: BarChartConfig = {
    sales: {
      label: "Sales",
      color: "#3b82f6", // blue-500
    },
    revenue: {
      label: "Revenue",
      color: "#10b981", // emerald-500
    },
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 min-h-screen bg-white">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">Custom Bar Chart</h2>
      
      <div className="flex flex-col space-y-6 sm:space-y-8">
        {/* Basic usage */}
        <div className="flex flex-col space-y-3 sm:space-y-4">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-700">Basic Usage</h3>
          <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-md">
            <div className="w-full h-[300px] sm:h-[400px] md:h-[500px]">
              <CustomBarChart data={sampleData} config={chartConfig} className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 