"use client";

import React, { useState } from "react";
import { AreaChart } from "../_components/Bar_11";

export default function BarExample11() {
  // Sample data for website analytics
  const analyticsData = [
    { month: "Jan", visitors: 1200, pageviews: 4800, conversions: 120 },
    { month: "Feb", visitors: 1400, pageviews: 5600, conversions: 140 },
    { month: "Mar", visitors: 1800, pageviews: 7200, conversions: 180 },
    { month: "Apr", visitors: 1600, pageviews: 6400, conversions: 160 },
    { month: "May", visitors: 2200, pageviews: 8800, conversions: 220 },
    { month: "Jun", visitors: 2600, pageviews: 10400, conversions: 260 },
  ];

  // Configuration for website analytics
  const analyticsConfig = {
    visitors: {
      color: "#3b82f6", // blue
      label: "Visitors",
    },
    pageviews: {
      color: "#10b981", // green
      label: "Page Views",
    },
    conversions: {
      color: "#f59e0b", // amber
      label: "Conversions",
    },
  };

  // Sample data for temperature trends
  const temperatureData = [
    { year: "2018", tokyo: 14.2, newyork: 12.8, london: 11.7 },
    { year: "2019", tokyo: 15.1, newyork: 13.2, london: 12.3 },
    { year: "2020", tokyo: 14.9, newyork: 12.9, london: 11.9 },
    { year: "2021", tokyo: 15.3, newyork: 13.5, london: 12.5 },
    { year: "2022", tokyo: 15.8, newyork: 13.9, london: 12.8 },
    { year: "2023", tokyo: 16.2, newyork: 14.3, london: 13.1 },
  ];

  // Configuration for temperature trends
  const temperatureConfig = {
    tokyo: {
      color: "#ef4444", // red
      label: "Tokyo",
    },
    newyork: {
      color: "#8b5cf6", // purple
      label: "New York",
    },
    london: {
      color: "#06b6d4", // cyan
      label: "London",
    },
  };

  // State to toggle between datasets
  const [showTemperature, setShowTemperature] = useState(false);
  
  // Current data and config based on state
  const currentData = showTemperature ? temperatureData : analyticsData;
  const currentConfig = showTemperature ? temperatureConfig : analyticsConfig;
  const currentXKey = showTemperature ? "year" : "month";
  const currentYKeys = showTemperature 
    ? ["tokyo", "newyork", "london"] 
    : ["visitors", "pageviews", "conversions"];

  return (
    <div className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-6">Area Chart</h2>
      
      {/* Toggle Button */}
      <div className="mb-6 flex justify-center">
        <button 
          onClick={() => setShowTemperature(!showTemperature)}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
        >
          Switch to {showTemperature ? "Website Analytics" : "Temperature Trends"}
        </button>
      </div>
      
      {/* Basic Usage */}
      <section className="mb-10">
        <h3 className="text-xl font-semibold mb-4">
          {showTemperature ? 'Global Temperature Trends (°C)' : 'Website Analytics Overview'}
        </h3>
        <div className="bg-gray-800 p-6 rounded-lg overflow-x-auto">
          <div className="min-w-[700px]">
            <AreaChart 
              data={currentData} 
              config={currentConfig} 
              xKey={currentXKey} 
              yKeys={currentYKeys} 
              className="h-80" 
            />
          </div>
        </div>
        <p className="mt-4 text-gray-300">
          {showTemperature 
            ? 'This chart displays average annual temperatures for three major cities over the past six years. Hover over data points to see exact values.' 
            : 'This chart shows website traffic metrics over a six-month period. Hover over data points to see exact values.'}
        </p>
      </section>

      {/* Features */}
      <section className="mb-10">
        <h3 className="text-xl font-semibold mb-4">Features</h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-300">
          <li>Filled area visualization with semi-transparent colors</li>
          <li>Animated drawing effect on initial render</li>
          <li>Interactive hover effects on data points</li>
          <li>Tooltips showing exact values when hovering</li>
          <li>Support for multiple data series with custom colors</li>
          <li>Automatic scaling based on the maximum value</li>
          <li>Grid lines for better readability of values</li>
        </ul>
      </section>

      {/* When to Use */}
      <section className="mb-10">
        <h3 className="text-xl font-semibold mb-4">When to Use Area Charts</h3>
        <div className="bg-gray-800 p-4 rounded-lg">
          <p className="text-gray-300 mb-3">
            Area charts are particularly effective for:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li>Showing trends over time with an emphasis on volume</li>
            <li>Visualizing part-to-whole relationships in data</li>
            <li>Highlighting the magnitude of changes between data points</li>
            <li>Comparing multiple data series where the area represents significance</li>
            <li>Displaying cumulative data or running totals</li>
          </ul>
          <p className="text-gray-300 mt-3">
            Unlike line charts, area charts emphasize the volume beneath the line, making them ideal for showing the magnitude of trends rather than just the direction.
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

<AreaChart
  data={[
    { month: "Jan", visitors: 1200, pageviews: 4800 },
    { month: "Feb", visitors: 1400, pageviews: 5600 },
    // ...more data points
  ]}
  config={{
    visitors: { color: "#3b82f6", label: "Visitors" },
    pageviews: { color: "#10b981", label: "Page Views" },
  }}
  xKey="month"
  yKeys={["visitors", "pageviews"]}
  className="h-80"
/>`}
          </pre>
        </div>
      </section>
    </div>
  );
} 