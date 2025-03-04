"use client";

import React, { useState } from "react";
import { OverlappingBarChart } from "../_components/Bar_8";

export default function BarExample8() {
  // Sample data for sales comparison
  const salesData = [
    { label: "Jan", groupA: 150, groupB: 120 },
    { label: "Feb", groupA: 200, groupB: 180 },
    { label: "Mar", groupA: 180, groupB: 220 },
    { label: "Apr", groupA: 250, groupB: 200 },
    { label: "May", groupA: 300, groupB: 250 },
    { label: "Jun", groupA: 280, groupB: 320 },
  ];

  // Sample data for budget vs actual
  const budgetData = [
    { label: "Q1", groupA: 500, groupB: 450 },
    { label: "Q2", groupA: 550, groupB: 600 },
    { label: "Q3", groupA: 600, groupB: 580 },
    { label: "Q4", groupA: 650, groupB: 700 },
  ];

  // Sample data for platform comparison
  const platformData = [
    { label: "iOS", groupA: 420, groupB: 380 },
    { label: "Android", groupA: 380, groupB: 450 },
    { label: "Web", groupA: 320, groupB: 300 },
    { label: "Desktop", groupA: 250, groupB: 180 },
  ];

  // State to manage which dataset to display
  const [activeDataset, setActiveDataset] = useState<'sales' | 'budget' | 'platform'>('sales');

  // Function to determine which data to display
  const getActiveData = () => {
    switch (activeDataset) {
      case 'sales': return salesData;
      case 'budget': return budgetData;
      case 'platform': return platformData;
      default: return salesData;
    }
  };

  // Function to get the appropriate legend labels
  const getLegendLabels = () => {
    switch (activeDataset) {
      case 'sales': return { groupA: "2023 Sales", groupB: "2022 Sales" };
      case 'budget': return { groupA: "Budget", groupB: "Actual" };
      case 'platform': return { groupA: "Last Year", groupB: "This Year" };
      default: return { groupA: "Group A", groupB: "Group B" };
    }
  };

  const legendLabels = getLegendLabels();

  return (
    <div className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-6">Overlapping Bar Chart</h2>
      
      {/* Dataset Selection */}
      <div className="mb-6 flex flex-wrap gap-2">
        <button 
          onClick={() => setActiveDataset('sales')}
          className={`px-4 py-2 rounded-md transition-colors ${
            activeDataset === 'sales' 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          Sales Comparison
        </button>
        <button 
          onClick={() => setActiveDataset('budget')}
          className={`px-4 py-2 rounded-md transition-colors ${
            activeDataset === 'budget' 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          Budget vs Actual
        </button>
        <button 
          onClick={() => setActiveDataset('platform')}
          className={`px-4 py-2 rounded-md transition-colors ${
            activeDataset === 'platform' 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          Platform Metrics
        </button>
      </div>
      
      {/* Basic Usage */}
      <section className="mb-10">
        <h3 className="text-xl font-semibold mb-4">
          {activeDataset === 'sales' && 'Monthly Sales Comparison'}
          {activeDataset === 'budget' && 'Quarterly Budget vs Actual'}
          {activeDataset === 'platform' && 'Platform Performance Comparison'}
        </h3>
        <div className="bg-gray-800 p-6 rounded-lg overflow-x-auto">
          <div className="min-w-[700px]">
            <OverlappingBarChart data={getActiveData()} />
            
            {/* Legend */}
            <div className="flex justify-center mt-4">
              <div className="flex items-center mr-6">
                <div className="w-4 h-4 bg-blue-600 mr-2"></div>
                <span className="text-gray-300">{legendLabels.groupA}</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-blue-300 mr-2"></div>
                <span className="text-gray-300">{legendLabels.groupB}</span>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-4 text-gray-300">
          {activeDataset === 'sales' && 'This chart compares monthly sales figures between 2022 and 2023. Hover over each bar to see the exact values.'}
          {activeDataset === 'budget' && 'This chart compares quarterly budget projections against actual spending. Hover over each bar to see the exact values.'}
          {activeDataset === 'platform' && 'This chart compares performance metrics across different platforms year over year. Hover over each bar to see the exact values.'}
        </p>
      </section>

      {/* Features */}
      <section className="mb-10">
        <h3 className="text-xl font-semibold mb-4">Features</h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-300">
          <li>Overlapping bar design for direct visual comparison between two data series</li>
          <li>Interactive hover effects with tooltips showing exact values</li>
          <li>Automatic scaling based on the maximum value in the dataset</li>
          <li>Clear labeling of axes and data points</li>
          <li>Smooth animations powered by Framer Motion</li>
          <li>Responsive layout that adapts to container width</li>
        </ul>
      </section>

      {/* When to Use */}
      <section className="mb-10">
        <h3 className="text-xl font-semibold mb-4">When to Use Overlapping Bar Charts</h3>
        <div className="bg-gray-800 p-4 rounded-lg">
          <p className="text-gray-300 mb-3">
            Overlapping bar charts are particularly effective for:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li>Comparing two related data series side by side</li>
            <li>Highlighting differences between actual vs target values</li>
            <li>Showing year-over-year or period-over-period comparisons</li>
            <li>Visualizing performance metrics across different categories</li>
            <li>Presenting budget vs actual spending analysis</li>
          </ul>
          <p className="text-gray-300 mt-3">
            Unlike grouped bar charts, overlapping bars create a more compact visualization that emphasizes direct comparison between two values.
          </p>
        </div>
      </section>

      {/* Usage Instructions */}
      <section>
        <h3 className="text-xl font-semibold mb-4">Usage</h3>
        <div className="bg-gray-800 p-4 rounded-lg">
          <pre className="text-sm text-gray-300 overflow-x-auto">
{`// Required props:
// - data: Array of objects with label, groupA, and groupB properties

<OverlappingBarChart
  data={[
    { label: "Jan", groupA: 150, groupB: 120 },
    { label: "Feb", groupA: 200, groupB: 180 },
    { label: "Mar", groupA: 180, groupB: 220 },
    // ...more data points
  ]}
/>`}
          </pre>
        </div>
      </section>
    </div>
  );
} 