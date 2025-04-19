"use client";

import React from 'react';
import { AnimatedBarChart } from '../tsx/Bar_2';

export default function BarExample2() {
  // Sample data for the animated bar chart
  const sampleData = [
    { month: "January", product1: 150, product2: 120, product3: 90 },
    { month: "February", product1: 220, product2: 180, product3: 140 },
    { month: "March", product1: 180, product2: 200, product3: 160 },
    { month: "April", product1: 250, product2: 230, product3: 180 },
    { month: "May", product1: 300, product2: 250, product3: 210 },
    { month: "June", product1: 350, product2: 280, product3: 240 },
  ];

  // Configuration for the animated bar chart
  const chartConfig = {
    product1: {
      label: "Product A",
      color: "#8b5cf6", // violet-500
    },
    product2: {
      label: "Product B",
      color: "#ec4899", // pink-500
    },
    product3: {
      label: "Product C",
      color: "#f59e0b", // amber-500
    },
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 min-h-screen bg-white">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">Animated Bar Chart</h2>
      
      <div className="flex flex-col space-y-6 sm:space-y-8">
        {/* Basic usage */}
        <div className="flex flex-col space-y-3 sm:space-y-4">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-700">Basic Usage</h3>
          <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-md">
            <div className="w-full h-[300px] sm:h-[400px] md:h-[500px]">
              <AnimatedBarChart data={sampleData} config={chartConfig} className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 