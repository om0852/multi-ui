"use client";

import React from 'react';
import { AnimatedHorizontalBarChart } from '../_components/Bar_3';

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
    <div className="p-4 min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Animated Horizontal Bar Chart</h2>
      
      <div className="flex flex-col space-y-8 max-w-4xl mx-auto">
        {/* Basic usage */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-gray-700">Basic Usage</h3>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <AnimatedHorizontalBarChart data={sampleData} config={chartConfig} className="h-80" />
          </div>
        </div>

        {/* Features explanation */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-gray-700">Features</h3>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Horizontal bar chart with smooth entrance animations</li>
              <li>Interactive hover effects with animated tooltips</li>
              <li>Support for multiple data series with custom colors</li>
              <li>Automatic scaling and grid lines</li>
              <li>Ideal for comparing values across categories</li>
            </ul>
          </div>
        </div>

        {/* Use case examples */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-gray-700">Common Use Cases</h3>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 mb-4">
              Horizontal bar charts are particularly useful for:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Comparing values across different categories</li>
              <li>Displaying data with long category names</li>
              <li>Showing ranking or survey results</li>
              <li>Financial reporting and analysis</li>
              <li>Performance comparisons over time periods</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 