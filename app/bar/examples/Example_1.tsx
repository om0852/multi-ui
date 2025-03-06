"use client";

import React from 'react';
import { CustomBarChart, BarChartConfig } from '../_components/Bar_1';

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
    <div className="p-4 min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Custom Bar Chart</h2>
      
      <div className="flex flex-col space-y-8 max-w-4xl mx-auto">
        {/* Basic usage */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-gray-700">Basic Usage</h3>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <CustomBarChart data={sampleData} config={chartConfig} className="h-80" />
          </div>
        </div>

        {/* Features explanation */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-gray-700">Features</h3>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Interactive bar chart with hover effects</li>
              <li>Customizable colors and labels for each data series</li>
              <li>Automatic scaling based on data values</li>
              <li>Grid lines for better readability</li>
              <li>Responsive design that adapts to container width</li>
            </ul>
          </div>
        </div>

        {/* Usage instructions */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-gray-700">How to Use</h3>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 mb-4">
              The CustomBarChart component requires two main props:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li><code className="bg-gray-100 px-1 rounded">data</code>: An array of objects where each object represents a data point with named properties</li>
              <li><code className="bg-gray-100 px-1 rounded">config</code>: A configuration object that defines the label and color for each data series</li>
              <li><code className="bg-gray-100 px-1 rounded">className</code> (optional): Additional CSS classes to apply to the chart</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 