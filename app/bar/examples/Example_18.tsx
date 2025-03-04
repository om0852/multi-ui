"use client";

import React, { useState } from "react";
import LineGraphAlt from "../_components/Bar_18";

export default function BarExample18() {
  // Sample datasets with different color themes
  const datasets = {
    sales: {
      name: "Monthly Sales Performance",
      data: [
        { x: "Jan", y: 42 },
        { x: "Feb", y: 55 },
        { x: "Mar", y: 70 },
        { x: "Apr", y: 65 },
        { x: "May", y: 85 },
        { x: "Jun", y: 95 },
        { x: "Jul", y: 110 },
        { x: "Aug", y: 120 },
        { x: "Sep", y: 105 },
        { x: "Oct", y: 95 },
        { x: "Nov", y: 115 },
        { x: "Dec", y: 130 }
      ],
      lineColor: "#10B981", // green
      dotColor: "#059669",
      backgroundColor: "#F0FDF4",
      description: "Monthly sales figures in thousands of dollars",
      yAxisLabel: "Sales ($K)"
    },
    engagement: {
      name: "User Engagement Metrics",
      data: [
        { x: "Week 1", y: 1250 },
        { x: "Week 2", y: 1800 },
        { x: "Week 3", y: 2200 },
        { x: "Week 4", y: 2600 },
        { x: "Week 5", y: 3100 },
        { x: "Week 6", y: 3500 },
        { x: "Week 7", y: 4200 },
        { x: "Week 8", y: 4800 }
      ],
      lineColor: "#3B82F6", // blue
      dotColor: "#2563EB",
      backgroundColor: "#EFF6FF",
      description: "Weekly active users on the platform",
      yAxisLabel: "Active Users"
    },
    performance: {
      name: "Website Performance",
      data: [
        { x: "Day 1", y: 95 },
        { x: "Day 2", y: 92 },
        { x: "Day 3", y: 98 },
        { x: "Day 4", y: 97 },
        { x: "Day 5", y: 99 },
        { x: "Day 6", y: 94 },
        { x: "Day 7", y: 96 }
      ],
      lineColor: "#8B5CF6", // purple
      dotColor: "#6D28D9",
      backgroundColor: "#F5F3FF",
      description: "Daily website performance score (higher is better)",
      yAxisLabel: "Performance Score"
    },
    conversion: {
      name: "Conversion Rate Trends",
      data: [
        { x: "Q1 2022", y: 2.4 },
        { x: "Q2 2022", y: 2.8 },
        { x: "Q3 2022", y: 3.2 },
        { x: "Q4 2022", y: 3.6 },
        { x: "Q1 2023", y: 3.9 },
        { x: "Q2 2023", y: 4.5 },
        { x: "Q3 2023", y: 5.1 },
        { x: "Q4 2023", y: 5.8 }
      ],
      lineColor: "#EC4899", // pink
      dotColor: "#BE185D",
      backgroundColor: "#FCE7F3",
      description: "Quarterly conversion rate percentage",
      yAxisLabel: "Conversion Rate (%)"
    }
  };

  // State for current dataset
  const [currentDataset, setCurrentDataset] = useState<keyof typeof datasets>("sales");
  
  // Format Y-axis value based on dataset
  const formatYValue = (value: number, dataset: keyof typeof datasets) => {
    if (dataset === "sales") {
      return `$${value}K`;
    } else if (dataset === "conversion") {
      return `${value}%`;
    } else {
      return value.toString();
    }
  };
  
  return (
    <div className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-6">Animated Line Graph (Alternative Style)</h2>
      
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
          <div className="rounded-lg overflow-hidden">
            <LineGraphAlt 
              data={datasets[currentDataset].data} 
              width={700} 
              height={400} 
              lineColor={datasets[currentDataset].lineColor}
              dotColor={datasets[currentDataset].dotColor}
              backgroundColor={datasets[currentDataset].backgroundColor}
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

      {/* Enhanced Animation Features */}
      <section className="mb-10">
        <h3 className="text-xl font-semibold mb-4">Enhanced Animation Features</h3>
        <div className="bg-gray-800 p-4 rounded-lg">
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li>Pulsing data points that create a rhythmic visual effect</li>
            <li>Smooth line drawing animation with optimized easing</li>
            <li>Sequential fade-in of axis labels for improved readability</li>
            <li>Coordinated animation timing between elements</li>
            <li>Continuous animation on data points to maintain visual interest</li>
            <li>Themed background colors that complement the data visualization</li>
          </ul>
        </div>
      </section>

      {/* Styling Differences */}
      <section className="mb-10">
        <h3 className="text-xl font-semibold mb-4">Styling Differences from Standard Line Graph</h3>
        <div className="bg-gray-800 p-4 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-2 text-gray-200">Visual Enhancements:</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li>Colored background that complements the line color</li>
                <li>Larger, continuously animated data points</li>
                <li>Thicker line stroke for better visibility</li>
                <li>Softer grid lines that blend with the background</li>
                <li>More padding around the chart for better spacing</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2 text-gray-200">Animation Differences:</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li>Continuous pulsing effect on data points</li>
                <li>Slide-in animation for x-axis labels</li>
                <li>Slower, more pronounced line drawing animation</li>
                <li>Different easing function for smoother motion</li>
                <li>Staggered animation timing for visual storytelling</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* When to Use */}
      <section className="mb-10">
        <h3 className="text-xl font-semibold mb-4">When to Use This Alternative Style</h3>
        <div className="bg-gray-800 p-4 rounded-lg">
          <p className="text-gray-300 mb-3">
            This alternative line graph style is particularly effective for:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li>Presentations where you want to create visual impact</li>
            <li>Dashboard displays that benefit from continuous animation</li>
            <li>Situations where you want to emphasize the data points themselves</li>
            <li>When you want to create a themed, cohesive visual experience</li>
            <li>Reports where you want to draw attention to specific metrics</li>
            <li>When you want to create a more engaging, modern visualization</li>
          </ul>
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
// - backgroundColor: (Optional) Background color of the chart

<LineGraphAlt
  data={[
    { x: "Jan", y: 42 },
    { x: "Feb", y: 55 },
    { x: "Mar", y: 70 },
    // Add more data points as needed
  ]}
  width={700}
  height={400}
  lineColor="#10B981"
  dotColor="#059669"
  backgroundColor="#F0FDF4"
/>`}
          </pre>
        </div>
      </section>
    </div>
  );
} 