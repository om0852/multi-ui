"use client";

import React from "react";
import { GroupedBarChart } from "../_components/Bar_4";

export default function BarExample4() {
  // Sample data for the grouped bar chart
  const sampleData = [
    { month: "Jan", revenue: 350, expenses: 230, profit: 120 },
    { month: "Feb", revenue: 420, expenses: 270, profit: 150 },
    { month: "Mar", revenue: 380, expenses: 240, profit: 140 },
    { month: "Apr", revenue: 500, expenses: 300, profit: 200 },
    { month: "May", revenue: 450, expenses: 270, profit: 180 },
  ];

  // Configuration for the grouped bar chart
  const chartConfig = {
    revenue: {
      label: "Revenue",
      color: "#3b82f6", // blue-500
    },
    expenses: {
      label: "Expenses",
      color: "#ef4444", // red-500
    },
    profit: {
      label: "Profit",
      color: "#10b981", // emerald-500
    },
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 min-h-screen bg-white">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">Grouped Bar Chart</h2>
      
      <div className="flex flex-col space-y-6 sm:space-y-8">
        {/* Basic usage */}
        <div className="flex flex-col space-y-3 sm:space-y-4">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-700">Basic Usage</h3>
          <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-md">
            <div className="w-full h-[300px] sm:h-[400px] md:h-[500px]">
              <GroupedBarChart data={sampleData} config={chartConfig} className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 