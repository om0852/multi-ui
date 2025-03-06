"use client";

import React, { useState } from "react";
import { Sparkline } from "../_components/Bar_12";

export default function BarExample12() {
  // Sample data for different metrics
  const stockData = [25, 28, 32, 30, 35, 38, 36, 40, 45, 43, 48, 50];
  const temperatureData = [18, 22, 20, 24, 19, 23, 25, 22, 26, 28, 24, 21];
  const salesData = [120, 150, 140, 180, 190, 210, 200, 220, 250, 230, 260, 280];
  const heartRateData = [72, 75, 78, 80, 76, 82, 85, 80, 78, 76, 80, 82];

  // Sample metrics for dashboard cards
  const metrics = [
    {
      title: "Stock Price",
      value: "$50.00",
      change: "+$2.00 (4.2%)",
      data: stockData,
      color: "#3b82f6", // blue
      isPositive: true,
    },
    {
      title: "Temperature",
      value: "21°C",
      change: "-3°C from yesterday",
      data: temperatureData,
      color: "#ef4444", // red
      isPositive: false,
    },
    {
      title: "Monthly Sales",
      value: "$28,000",
      change: "+$2,000 (7.7%)",
      data: salesData,
      color: "#10b981", // green
      isPositive: true,
    },
    {
      title: "Heart Rate",
      value: "82 bpm",
      change: "+2 bpm from resting",
      data: heartRateData,
      color: "#f59e0b", // amber
      isPositive: false,
    },
  ];

  // State for the selected sparkline (for the detailed view)
  const [selectedMetric, setSelectedMetric] = useState(metrics[0]);

  return (
    <div className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-6">Sparkline Charts</h2>
      
      {/* Dashboard Cards */}
      <section className="mb-10">
        <h3 className="text-xl font-semibold mb-4">Dashboard Metrics</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {metrics.map((metric, index) => (
            <div 
              key={index} 
              className={`bg-gray-800 p-4 rounded-lg cursor-pointer transition-all duration-200 ${
                selectedMetric.title === metric.title ? 'ring-2 ring-blue-500' : ''
              }`}
              onClick={() => setSelectedMetric(metric)}
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-lg font-medium">{metric.title}</h4>
                  <p className="text-2xl font-bold">{metric.value}</p>
                  <p className={`text-sm ${metric.isPositive ? 'text-green-400' : 'text-red-400'}`}>
                    {metric.change}
                  </p>
                </div>
                <div className="w-24 h-12">
                  <Sparkline 
                    data={metric.data} 
                    color={metric.color}
                    width={100}
                    height={40}
                    strokeWidth={2}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Detailed View */}
      <section className="mb-10">
        <h3 className="text-xl font-semibold mb-4">Detailed Trend: {selectedMetric.title}</h3>
        <div className="bg-gray-800 p-6 rounded-lg">
          <div className="h-40">
            <Sparkline 
              data={selectedMetric.data} 
              color={selectedMetric.color}
              width={600}
              height={150}
              strokeWidth={3}
              className="w-full"
            />
          </div>
          <div className="mt-4 text-center">
            <p className="text-gray-300">
              Hover over data points to see exact values. This sparkline shows the trend for {selectedMetric.title.toLowerCase()} over the last 12 periods.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mb-10">
        <h3 className="text-xl font-semibold mb-4">Features</h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-300">
          <li>Compact visualization of trends in minimal space</li>
          <li>Animated line drawing effect on initial render</li>
          <li>Interactive hover effects on data points</li>
          <li>Tooltips showing exact values when hovering</li>
          <li>Customizable colors and dimensions</li>
          <li>Automatic scaling based on data range</li>
          <li>Perfect for dashboard cards and small UI elements</li>
        </ul>
      </section>

      {/* When to Use */}
      <section className="mb-10">
        <h3 className="text-xl font-semibold mb-4">When to Use Sparklines</h3>
        <div className="bg-gray-800 p-4 rounded-lg">
          <p className="text-gray-300 mb-3">
            Sparklines are particularly effective for:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li>Showing trends in a very compact space</li>
            <li>Dashboard cards and KPI indicators</li>
            <li>Inline visualization within text or tables</li>
            <li>Quick visual reference without detailed axes</li>
            <li>Comparing multiple metrics side by side</li>
            <li>Providing context to numerical values</li>
          </ul>
          <p className="text-gray-300 mt-3">
            Sparklines are designed to be &ldquo;small, high-resolution graphics embedded in a context of words, numbers, images.&ldquo; They provide a quick visual cue without the overhead of a full chart.
          </p>
        </div>
      </section>

      {/* Usage Instructions */}
      <section>
        <h3 className="text-xl font-semibold mb-4">Usage</h3>
        <div className="bg-gray-800 p-4 rounded-lg">
          <pre className="text-sm text-gray-300 overflow-x-auto">
{`// Required props:
// - data: Array of numbers representing the data points
// - color: (Optional) String representing the color of the line
// - width: (Optional) Number for the SVG width
// - height: (Optional) Number for the SVG height
// - strokeWidth: (Optional) Number for the line thickness
// - className: (Optional) String for additional styling

<Sparkline
  data={[10, 15, 8, 12, 20, 18, 25]}
  color="#3b82f6"
  width={100}
  height={30}
  strokeWidth={2}
  className="w-full"
/>`}
          </pre>
        </div>
      </section>
    </div>
  );
} 