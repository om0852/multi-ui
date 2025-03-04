"use client";

import React from 'react';
import { AnimatedBarChart } from '../_components/Bar_2';

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
    <div className="p-4 min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Animated Bar Chart</h2>
      
      <div className="flex flex-col space-y-8 max-w-4xl mx-auto">
        {/* Basic usage */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-gray-700">Basic Usage</h3>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <AnimatedBarChart data={sampleData} config={chartConfig} className="h-80" />
          </div>
        </div>

        {/* Features explanation */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-gray-700">Features</h3>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Animated bar chart with smooth entrance animations</li>
              <li>Interactive hover effects with animated tooltips</li>
              <li>Support for multiple data series with custom colors</li>
              <li>Automatic scaling and grid lines</li>
              <li>Built with Framer Motion for fluid animations</li>
            </ul>
          </div>
        </div>

        {/* Animation details */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-gray-700">Animation Details</h3>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 mb-4">
              This chart features several animations:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Bars grow from the bottom with a smooth scaling effect</li>
              <li>Tooltips fade in when hovering over bars</li>
              <li>Customizable animation durations and easing functions</li>
              <li>Refresh the page to see the entrance animations again</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 