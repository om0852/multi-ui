"use client";

import React, { useState } from "react";
import LineGraph from "../_components/Bar_17";

export default function BarExample17() {
  // Sample datasets
  const datasets = {
    stockPrice: {
      name: "Stock Price Trends",
      data: [
        { x: "Jan", y: 150 },
        { x: "Feb", y: 165 },
        { x: "Mar", y: 180 },
        { x: "Apr", y: 170 },
        { x: "May", y: 195 },
        { x: "Jun", y: 210 },
        { x: "Jul", y: 230 },
        { x: "Aug", y: 245 },
        { x: "Sep", y: 235 },
        { x: "Oct", y: 250 },
        { x: "Nov", y: 270 },
        { x: "Dec", y: 290 }
      ],
      lineColor: "#3b82f6",
      dotColor: "#2563eb",
      description: "Monthly stock price trends over the past year",
      yAxisLabel: "Price ($)"
    },
    temperature: {
      name: "Average Temperatures",
      data: [
        { x: "Jan", y: 5 },
        { x: "Feb", y: 7 },
        { x: "Mar", y: 12 },
        { x: "Apr", y: 18 },
        { x: "May", y: 23 },
        { x: "Jun", y: 28 },
        { x: "Jul", y: 30 },
        { x: "Aug", y: 29 },
        { x: "Sep", y: 25 },
        { x: "Oct", y: 18 },
        { x: "Nov", y: 12 },
        { x: "Dec", y: 7 }
      ],
      lineColor: "#ef4444",
      dotColor: "#b91c1c",
      description: "Average monthly temperatures throughout the year",
      yAxisLabel: "Temperature (°C)"
    },
    userGrowth: {
      name: "User Growth",
      data: [
        { x: "Week 1", y: 100 },
        { x: "Week 2", y: 250 },
        { x: "Week 3", y: 450 },
        { x: "Week 4", y: 800 },
        { x: "Week 5", y: 1200 },
        { x: "Week 6", y: 1800 },
        { x: "Week 7", y: 2500 },
        { x: "Week 8", y: 3200 }
      ],
      lineColor: "#10b981",
      dotColor: "#047857",
      description: "Weekly user growth for a new product launch",
      yAxisLabel: "Users"
    },
    revenue: {
      name: "Quarterly Revenue",
      data: [
        { x: "Q1 2021", y: 120000 },
        { x: "Q2 2021", y: 150000 },
        { x: "Q3 2021", y: 170000 },
        { x: "Q4 2021", y: 210000 },
        { x: "Q1 2022", y: 190000 },
        { x: "Q2 2022", y: 220000 },
        { x: "Q3 2022", y: 240000 },
        { x: "Q4 2022", y: 280000 },
        { x: "Q1 2023", y: 260000 },
        { x: "Q2 2023", y: 290000 }
      ],
      lineColor: "#8b5cf6",
      dotColor: "#6d28d9",
      description: "Quarterly revenue over the past few years",
      yAxisLabel: "Revenue ($)"
    }
  };

  // State for current dataset
  const [currentDataset, setCurrentDataset] = useState<keyof typeof datasets>("stockPrice");
  
  // Format Y-axis value based on dataset
  const formatYValue = (value: number, dataset: keyof typeof datasets) => {
    if (dataset === "revenue") {
      return new Intl.NumberFormat('en-US', { 
        style: 'currency', 
        currency: 'USD',
        maximumFractionDigits: 0
      }).format(value);
    } else if (dataset === "temperature") {
      return `${value}°C`;
    } else if (dataset === "stockPrice") {
      return `$${value}`;
    } else {
      return value.toString();
    }
  };
  
  return (
    <div className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-6">Line Graph</h2>
      
      {/* Dataset Selector */}
      <section className="mb-6">
        <div className="flex flex-wrap gap-4">
          {Object.keys(datasets).map((key) => (
            <button
              key={key}
              onClick={() => setCurrentDataset(key as keyof typeof datasets)}
              className={`px-4 py-2 rounded-md transition-colors ${
                currentDataset === key 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {datasets[key as keyof typeof datasets].name}
            </button>
          ))}
        </div>
      </section>
      
      {/* Line Graph Display */}
      <section className="mb-10">
        <h3 className="text-xl font-semibold mb-4">{datasets[currentDataset].name}</h3>
        <div className="bg-gray-800 p-6 rounded-lg">
          <div className="bg-white rounded-lg p-4">
            <LineGraph 
              data={datasets[currentDataset].data} 
              width={700} 
              height={400} 
              lineColor={datasets[currentDataset].lineColor}
              dotColor={datasets[currentDataset].dotColor}
            />
          </div>
          <div className="mt-4">
            <p className="text-gray-300">
              {datasets[currentDataset].description}
            </p>
            <div className="flex items-center mt-2">
              <span className="text-gray-400 mr-2">Y-axis:</span>
              <span className="text-gray-300">{datasets[currentDataset].yAxisLabel}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Data Table */}
      <section className="mb-10">
        <h3 className="text-xl font-semibold mb-4">Data Points</h3>
        <div className="bg-gray-800 p-4 rounded-lg overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="py-2 px-4">Time Period</th>
                <th className="py-2 px-4">Value</th>
              </tr>
            </thead>
            <tbody>
              {datasets[currentDataset].data.map((point, index) => (
                <tr key={index} className="border-b border-gray-700">
                  <td className="py-2 px-4">{point.x}</td>
                  <td className="py-2 px-4">{formatYValue(point.y, currentDataset)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Animation Features */}
      <section className="mb-10">
        <h3 className="text-xl font-semibold mb-4">Animation Features</h3>
        <div className="bg-gray-800 p-4 rounded-lg">
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li>Path drawing animation that traces the line from start to finish</li>
            <li>Sequential appearance of data points for visual storytelling</li>
            <li>Smooth easing functions for natural-feeling motion</li>
            <li>Visual emphasis on the relationship between consecutive data points</li>
            <li>Animated transitions when switching between datasets</li>
          </ul>
        </div>
      </section>

      {/* Features */}
      <section className="mb-10">
        <h3 className="text-xl font-semibold mb-4">Features</h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-300">
          <li>Animated line drawing effect that follows the data trend</li>
          <li>Clear data point visualization with customizable colors</li>
          <li>Automatic scaling based on data range</li>
          <li>X and Y axis with labels for better readability</li>
          <li>Support for both numeric and string x-values</li>
          <li>Responsive design that adapts to container size</li>
          <li>Customizable line and dot colors</li>
        </ul>
      </section>

      {/* When to Use */}
      <section className="mb-10">
        <h3 className="text-xl font-semibold mb-4">When to Use Line Graphs</h3>
        <div className="bg-gray-800 p-4 rounded-lg">
          <p className="text-gray-300 mb-3">
            Line graphs are particularly effective for:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li>Showing trends over time or sequential categories</li>
            <li>Visualizing continuous data where the connection between points matters</li>
            <li>Comparing rates of change (slope of the line)</li>
            <li>Identifying patterns, cycles, or anomalies in sequential data</li>
            <li>Forecasting future values based on historical trends</li>
            <li>Comparing multiple series of data on the same scale</li>
          </ul>
          <p className="text-gray-300 mt-3">
            The animated drawing effect makes line graphs especially engaging for presentations and dashboards, helping viewers follow the data narrative.
          </p>
        </div>
      </section>

      {/* Usage Instructions */}
      <section>
        <h3 className="text-xl font-semibold mb-4">Usage</h3>
        <div className="bg-gray-800 p-4 rounded-lg">
          <pre className="text-sm text-gray-300 overflow-x-auto">
{`// Required props:
// - data: Array of objects with x (string or number) and y (number) properties
// - width: (Optional) Width of the chart in pixels
// - height: (Optional) Height of the chart in pixels
// - lineColor: (Optional) Color of the line
// - dotColor: (Optional) Color of the data points

<LineGraph
  data={[
    { x: "Jan", y: 150 },
    { x: "Feb", y: 165 },
    { x: "Mar", y: 180 },
    // Add more data points as needed
  ]}
  width={700}
  height={400}
  lineColor="#3b82f6"
  dotColor="#2563eb"
/>`}
          </pre>
        </div>
      </section>
    </div>
  );
} 