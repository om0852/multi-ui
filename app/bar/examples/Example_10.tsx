"use client";

import React from 'react';
import { LineChart } from '../_components/Bar_10';

export default function BarExample10() {
  // Sample data for the line chart
  const sampleData = [
    { month: "Jan", sales: 350, growth: 10 },
    { month: "Feb", sales: 420, growth: 15 },
    { month: "Mar", sales: 380, growth: 12 },
    { month: "Apr", sales: 500, growth: 20 },
    { month: "May", sales: 450, growth: 18 },
  ];

  // Configuration for the line chart
  const chartConfig = {
    sales: {
      label: "Sales",
      color: "#3b82f6", // blue-500
    },
    growth: {
      label: "Growth",
      color: "#10b981", // emerald-500
    },
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 min-h-screen bg-white">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">Line Chart</h2>
      
      <div className="flex flex-col space-y-6 sm:space-y-8">
        {/* Basic usage */}
        <div className="flex flex-col space-y-3 sm:space-y-4">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-700">Basic Usage</h3>
          <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-md">
            <div className="w-full h-[300px] sm:h-[400px] md:h-[500px]">
              <LineChart 
                data={sampleData} 
                config={chartConfig} 
                xKey="month"
                yKeys={["sales", "growth"]}
                className="w-full h-full" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 