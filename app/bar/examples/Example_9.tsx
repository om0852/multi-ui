"use client";

import React, { useState } from "react";
import { InteractiveBarChart } from "../_components/Bar_9";

export default function BarExample9() {
  // Sample data for monthly revenue
  const revenueData = [
    { label: "Jan", value: 120 },
    { label: "Feb", value: 200 },
    { label: "Mar", value: 150 },
    { label: "Apr", value: 250 },
    { label: "May", value: 180 },
    { label: "Jun", value: 300 },
    { label: "Jul", value: 220 },
  ];

  // Sample data for website traffic
  const trafficData = [
    { label: "Mon", value: 1500 },
    { label: "Tue", value: 1800 },
    { label: "Wed", value: 2200 },
    { label: "Thu", value: 1900 },
    { label: "Fri", value: 2100 },
    { label: "Sat", value: 1200 },
    { label: "Sun", value: 900 },
  ];

  // Sample data for product categories
  const productData = [
    { label: "Electronics", value: 450 },
    { label: "Clothing", value: 320 },
    { label: "Home", value: 280 },
    { label: "Sports", value: 190 },
    { label: "Books", value: 150 },
  ];

  // State to manage which dataset to display
  const [activeDataset, setActiveDataset] = useState<'revenue' | 'traffic' | 'product'>('revenue');

  // Function to determine which data to display
  const getActiveData = () => {
    switch (activeDataset) {
      case 'revenue': return revenueData;
      case 'traffic': return trafficData;
      case 'product': return productData;
      default: return revenueData;
    }
  };

  return (
    <div className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-6">Interactive Bar Chart</h2>
      
      {/* Dataset Selection */}
      <div className="mb-6 flex flex-wrap gap-2">
        <button 
          onClick={() => setActiveDataset('revenue')}
          className={`px-4 py-2 rounded-md transition-colors ${
            activeDataset === 'revenue' 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          Monthly Revenue
        </button>
        <button 
          onClick={() => setActiveDataset('traffic')}
          className={`px-4 py-2 rounded-md transition-colors ${
            activeDataset === 'traffic' 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          Weekly Traffic
        </button>
        <button 
          onClick={() => setActiveDataset('product')}
          className={`px-4 py-2 rounded-md transition-colors ${
            activeDataset === 'product' 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          Product Categories
        </button>
      </div>
      
      {/* Basic Usage */}
      <section className="mb-10">
        <h3 className="text-xl font-semibold mb-4">
          {activeDataset === 'revenue' && 'Monthly Revenue ($K)'}
          {activeDataset === 'traffic' && 'Daily Website Visitors'}
          {activeDataset === 'product' && 'Sales by Product Category ($K)'}
        </h3>
        <div className="bg-gray-800 p-6 rounded-lg overflow-x-auto">
          <div className="min-w-[700px]">
            <InteractiveBarChart data={getActiveData()} />
          </div>
        </div>
        <p className="mt-4 text-gray-300">
          {activeDataset === 'revenue' && 'This chart displays monthly revenue figures in thousands of dollars. Hover over each bar to see the exact value.'}
          {activeDataset === 'traffic' && 'This chart shows the number of daily website visitors throughout the week. Hover over each bar to see the exact count.'}
          {activeDataset === 'product' && 'This chart breaks down sales by product category in thousands of dollars. Hover over each bar to see the exact value.'}
        </p>
      </section>

      {/* Features */}
      <section className="mb-10">
        <h3 className="text-xl font-semibold mb-4">Features</h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-300">
          <li>Animated entrance with bars growing from the bottom</li>
          <li>Sequential animation that introduces each bar one after another</li>
          <li>Interactive hover effects with tooltips showing exact values</li>
          <li>Clean axis labels for better readability</li>
          <li>Automatic scaling based on the maximum value in the dataset</li>
          <li>Responsive layout that adapts to container width</li>
        </ul>
      </section>

      {/* Animation Details */}
      <section className="mb-10">
        <h3 className="text-xl font-semibold mb-4">Animation Details</h3>
        <div className="bg-gray-800 p-4 rounded-lg">
          <p className="text-gray-300 mb-3">
            This chart features several carefully designed animations:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li>Bars grow from the bottom with a smooth scaling effect</li>
            <li>Each bar animates with a slight delay after the previous one</li>
            <li>Tooltips fade in smoothly when hovering over bars</li>
            <li>Switching between datasets triggers a fresh animation sequence</li>
            <li>All animations are powered by Framer Motion for fluid transitions</li>
          </ul>
          <p className="text-gray-300 mt-3">
            Try switching between datasets to see the entrance animations play again!
          </p>
        </div>
      </section>

      {/* Usage Instructions */}
      <section>
        <h3 className="text-xl font-semibold mb-4">Usage</h3>
        <div className="bg-gray-800 p-4 rounded-lg">
          <pre className="text-sm text-gray-300 overflow-x-auto">
{`// Required props:
// - data: Array of objects with label and value properties

<InteractiveBarChart
  data={[
    { label: "Jan", value: 120 },
    { label: "Feb", value: 200 },
    { label: "Mar", value: 150 },
    // ...more data points
  ]}
/>`}
          </pre>
        </div>
      </section>
    </div>
  );
} 