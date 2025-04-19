"use client";

import React from 'react';
import { AnimatedHorizontalBarChart } from '../tsx/Bar_3';

export default function BarExample3() {
  // Sample data for the horizontal bar chart
  const sampleData = [
    { month: "Q1 2023", revenue: 350, profit: 120, expenses: 230 },
    { month: "Q2 2023", revenue: 420, profit: 150, expenses: 270 },
    { month: "Q3 2023", revenue: 380, profit: 140, expenses: 240 },
    { month: "Q4 2023", revenue: 500, profit: 200, expenses: 300 },
    { month: "Q1 2024", revenue: 450, profit: 180, expenses: 270 },
  ];

  // Configuration for the horizontal bar chart
  const chartConfig = {
    revenue: {
      label: "Revenue",
      color: "#3b82f6", // blue-500
    },
    profit: {
      label: "Profit",
      color: "#10b981", // emerald-500
    },
    expenses: {
      label: "Expenses",
      color: "#ef4444", // red-500
    },
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 min-h-screen bg-white">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">Animated Horizontal Bar Chart</h2>
      
      <div className="flex flex-col space-y-6 sm:space-y-8">
        {/* Basic usage */}
        <div className="flex flex-col space-y-3 sm:space-y-4">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-700">Basic Usage</h3>
          <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-md">
            <div className="w-full h-[300px] sm:h-[400px] md:h-[500px]">
              <AnimatedHorizontalBarChart data={sampleData} config={chartConfig} className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 