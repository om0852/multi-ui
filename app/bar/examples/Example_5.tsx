"use client";

import React, { useState } from "react";
import { ThreeDBarChart } from "../_components/Bar_5";

export default function BarExample5() {
  // Sample data for quarterly revenue
  const quarterlyRevenue = [
    { month: "Q1", value: 250 },
    { month: "Q2", value: 420 },
    { month: "Q3", value: 380 },
    { month: "Q4", value: 520 },
  ];

  // Sample data for monthly website traffic
  const websiteTraffic = [
    { month: "Jan", value: 1200 },
    { month: "Feb", value: 1800 },
    { month: "Mar", value: 2200 },
    { month: "Apr", value: 1900 },
    { month: "May", value: 2500 },
    { month: "Jun", value: 3000 },
  ];

  // State to toggle between datasets
  const [showTraffic, setShowTraffic] = useState(false);
  
  return (
    <div className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-6">3D Bar Chart</h2>
      
      {/* Basic Usage */}
      <section className="mb-10">
        <h3 className="text-xl font-semibold mb-4">Interactive 3D Visualization</h3>
        <div className="bg-gray-800 p-4 rounded-lg overflow-x-auto">
          <div className="min-w-[700px]">
            <ThreeDBarChart 
              data={showTraffic ? websiteTraffic : quarterlyRevenue} 
            />
          </div>
        </div>
        <div className="mt-4 flex justify-center">
          <button 
            onClick={() => setShowTraffic(!showTraffic)}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
          >
            Switch to {showTraffic ? "Quarterly Revenue" : "Website Traffic"}
          </button>
        </div>
        <p className="mt-4 text-gray-300">
          This 3D bar chart displays {showTraffic ? "monthly website traffic" : "quarterly revenue"} with an interactive 3D effect on hover.
        </p>
      </section>

      {/* Features */}
      <section className="mb-10">
        <h3 className="text-xl font-semibold mb-4">Features</h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-300">
          <li>Visually striking 3D perspective effect on hover</li>
          <li>Interactive elements that respond to user interaction</li>
          <li>Value tooltips that appear when hovering over bars</li>
          <li>Automatic scaling based on the maximum value in the dataset</li>
          <li>Clean axis labels for both X and Y axes</li>
          <li>Smooth animations powered by Framer Motion</li>
        </ul>
      </section>

      {/* When to Use */}
      <section className="mb-10">
        <h3 className="text-xl font-semibold mb-4">When to Use 3D Bar Charts</h3>
        <div className="bg-gray-800 p-4 rounded-lg">
          <p className="text-gray-300 mb-3">
            3D bar charts are particularly effective for:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li>Creating visually engaging presentations</li>
            <li>Highlighting key metrics in dashboards</li>
            <li>Making data more memorable in reports</li>
            <li>Adding visual interest to simple datasets</li>
          </ul>
          <p className="text-gray-300 mt-3">
            While traditional 2D charts may be better for precise data analysis, 3D charts excel at capturing attention and making data more engaging.
          </p>
        </div>
      </section>

      {/* Usage Instructions */}
      <section>
        <h3 className="text-xl font-semibold mb-4">Usage</h3>
        <div className="bg-gray-800 p-4 rounded-lg">
          <pre className="text-sm text-gray-300 overflow-x-auto">
{`// Required props:
// - data: Array of objects with month and value properties

<ThreeDBarChart
  data={[
    { month: "Jan", value: 1200 },
    { month: "Feb", value: 1800 },
    { month: "Mar", value: 2200 },
    // ...more data
  ]}
/>`}
          </pre>
        </div>
      </section>
    </div>
  );
} 