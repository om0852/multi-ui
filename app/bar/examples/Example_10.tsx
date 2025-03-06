"use client";

import React, { useState } from "react";
import { LineChart } from "../_components/Bar_10";

export default function BarExample10() {
  // Sample data for company performance
  const performanceData = [
    { month: "Jan", revenue: 120, profit: 40, expenses: 80 },
    { month: "Feb", revenue: 150, profit: 50, expenses: 100 },
    { month: "Mar", revenue: 200, profit: 70, expenses: 130 },
    { month: "Apr", revenue: 180, profit: 60, expenses: 120 },
    { month: "May", revenue: 250, profit: 90, expenses: 160 },
    { month: "Jun", revenue: 300, profit: 120, expenses: 180 },
  ];

  // Configuration for company performance
  const performanceConfig = {
    revenue: {
      color: "#3b82f6", // blue
      label: "Revenue",
    },
    profit: {
      color: "#10b981", // green
      label: "Profit",
    },
    expenses: {
      color: "#ef4444", // red
      label: "Expenses",
    },
  };

  // Sample data for stock prices
  const stockData = [
    { date: "Jan 1", company1: 150, company2: 120, company3: 180 },
    { date: "Feb 1", company1: 160, company2: 140, company3: 170 },
    { date: "Mar 1", company1: 190, company2: 150, company3: 160 },
    { date: "Apr 1", company1: 220, company2: 180, company3: 150 },
    { date: "May 1", company1: 240, company2: 210, company3: 170 },
    { date: "Jun 1", company1: 280, company2: 230, company3: 190 },
  ];

  // Configuration for stock prices
  const stockConfig = {
    company1: {
      color: "#8b5cf6", // purple
      label: "Tech Co.",
    },
    company2: {
      color: "#f59e0b", // amber
      label: "Finance Inc.",
    },
    company3: {
      color: "#06b6d4", // cyan
      label: "Retail Ltd.",
    },
  };

  // State to toggle between datasets
  const [showStocks, setShowStocks] = useState(false);
  
  // Current data and config based on state
  const currentData = showStocks ? stockData : performanceData;
  const currentConfig = showStocks ? stockConfig : performanceConfig;
  const currentXKey = showStocks ? "date" : "month";
  const currentYKeys = showStocks 
    ? ["company1", "company2", "company3"] 
    : ["revenue", "profit", "expenses"];

  return (
    <div className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-6">Line Chart</h2>
      
      {/* Toggle Button */}
      <div className="mb-6 flex justify-center">
        <button 
          onClick={() => setShowStocks(!showStocks)}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
        >
          Switch to {showStocks ? "Company Performance" : "Stock Prices"}
        </button>
      </div>
      
      {/* Basic Usage */}
      <section className="mb-10">
        <h3 className="text-xl font-semibold mb-4">
          {showStocks ? 'Stock Price Comparison' : 'Company Performance Metrics'}
        </h3>
        <div className="bg-gray-800 p-6 rounded-lg overflow-x-auto">
          <div className="min-w-[700px]">
            <LineChart 
              data={currentData} 
              config={currentConfig} 
              xKey={currentXKey} 
              yKeys={currentYKeys} 
              className="h-80" 
            />
          </div>
        </div>
        <p className="mt-4 text-gray-300">
          {showStocks 
            ? 'This chart compares stock prices of three companies over a six-month period. Hover over lines and points to see details.' 
            : 'This chart displays revenue, profit, and expenses over a six-month period. Hover over lines and points to see details.'}
        </p>
      </section>

      {/* Features */}
      <section className="mb-10">
        <h3 className="text-xl font-semibold mb-4">Features</h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-300">
          <li>Animated line drawing effect on initial render</li>
          <li>Interactive hover effects on both lines and data points</li>
          <li>Tooltips showing exact values when hovering over data points</li>
          <li>Line highlighting when hovering over a specific data series</li>
          <li>Automatic scaling based on the maximum value in the dataset</li>
          <li>Grid lines for better readability of values</li>
          <li>Support for multiple data series with custom colors and labels</li>
        </ul>
      </section>

      {/* When to Use */}
      <section className="mb-10">
        <h3 className="text-xl font-semibold mb-4">When to Use Line Charts</h3>
        <div className="bg-gray-800 p-4 rounded-lg">
          <p className="text-gray-300 mb-3">
            Line charts are particularly effective for:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li>Visualizing trends over time or continuous data</li>
            <li>Comparing multiple related data series</li>
            <li>Showing the rate of change between data points</li>
            <li>Identifying patterns, cycles, or anomalies in data</li>
            <li>Financial data analysis such as stock prices or performance metrics</li>
          </ul>
          <p className="text-gray-300 mt-3">
            Unlike bar charts, line charts excel at showing the continuity and flow between data points, making them ideal for time-series data.
          </p>
        </div>
      </section>

      {/* Usage Instructions */}
      <section>
        <h3 className="text-xl font-semibold mb-4">Usage</h3>
        <div className="bg-gray-800 p-4 rounded-lg">
          <pre className="text-sm text-gray-300 overflow-x-auto">
{`// Required props:
// - data: Array of objects with x-axis values and y-axis values
// - config: Object mapping data keys to display labels and colors
// - xKey: The key in data objects for x-axis values
// - yKeys: Array of keys in data objects for y-axis values
// - className: Optional string for additional styling

<LineChart
  data={[
    { month: "Jan", revenue: 120, profit: 40 },
    { month: "Feb", revenue: 150, profit: 50 },
    // ...more data points
  ]}
  config={{
    revenue: { color: "#3b82f6", label: "Revenue" },
    profit: { color: "#10b981", label: "Profit" },
  }}
  xKey="month"
  yKeys={["revenue", "profit"]}
  className="h-80"
/>`}
          </pre>
        </div>
      </section>
    </div>
  );
} 