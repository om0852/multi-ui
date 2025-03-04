"use client";

import React from "react";
import { GroupedBarChart } from "../_components/Bar_4";

export default function BarExample4() {
  // Sample data for the grouped bar chart
  const salesData = [
    { month: "Jan", product1: 120, product2: 80, product3: 50 },
    { month: "Feb", product1: 150, product2: 100, product3: 70 },
    { month: "Mar", product1: 200, product2: 130, product3: 90 },
    { month: "Apr", product1: 180, product2: 150, product3: 100 },
    { month: "May", product1: 250, product2: 170, product3: 120 },
    { month: "Jun", product1: 300, product2: 200, product3: 150 },
  ];

  // Configuration for the grouped bar chart
  const salesConfig = {
    product1: {
      label: "Premium Plan",
      color: "#3b82f6", // blue
    },
    product2: {
      label: "Standard Plan",
      color: "#10b981", // green
    },
    product3: {
      label: "Basic Plan",
      color: "#f59e0b", // amber
    },
  };

  // Sample data for regional comparison
  const regionData = [
    { region: "North", revenue: 450, profit: 200, customers: 120 },
    { region: "South", revenue: 380, profit: 180, customers: 100 },
    { region: "East", revenue: 520, profit: 250, customers: 150 },
    { region: "West", revenue: 490, profit: 220, customers: 130 },
  ];

  // Configuration for regional comparison
  const regionConfig = {
    revenue: {
      label: "Revenue ($K)",
      color: "#8b5cf6", // purple
    },
    profit: {
      label: "Profit ($K)",
      color: "#ec4899", // pink
    },
    customers: {
      label: "Customers (x10)",
      color: "#06b6d4", // cyan
    },
  };

  return (
    <div className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-6">Grouped Bar Chart</h2>
      
      {/* Basic Usage */}
      <section className="mb-10">
        <h3 className="text-xl font-semibold mb-4">Basic Usage</h3>
        <div className="bg-gray-800 p-4 rounded-lg">
          <GroupedBarChart 
            data={salesData} 
            config={salesConfig} 
            className="h-80"
          />
        </div>
        <p className="mt-4 text-gray-300">
          This grouped bar chart displays monthly sales data for three different subscription plans.
        </p>
      </section>

      {/* Features */}
      <section className="mb-10">
        <h3 className="text-xl font-semibold mb-4">Features</h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-300">
          <li>Groups related data categories side by side for easy comparison</li>
          <li>Animated entrance with bars growing from the bottom</li>
          <li>Interactive hover effects that highlight bars and display labels</li>
          <li>Automatic scaling based on the maximum value in the dataset</li>
          <li>Grid lines for better readability of values</li>
          <li>Customizable colors for each data category</li>
        </ul>
      </section>

      {/* Alternative Example */}
      <section className="mb-10">
        <h3 className="text-xl font-semibold mb-4">Regional Comparison</h3>
        <div className="bg-gray-800 p-4 rounded-lg">
          <GroupedBarChart 
            data={regionData} 
            config={regionConfig} 
            className="h-80"
          />
        </div>
        <p className="mt-4 text-gray-300">
          This example shows how the grouped bar chart can be used to compare multiple metrics across different regions.
        </p>
      </section>

      {/* Usage Instructions */}
      <section>
        <h3 className="text-xl font-semibold mb-4">Usage</h3>
        <div className="bg-gray-800 p-4 rounded-lg">
          <pre className="text-sm text-gray-300 overflow-x-auto">
{`// Required props:
// - data: Array of objects with a category key and numeric values
// - config: Object mapping data keys to display labels and colors
// - className: Optional string for additional styling

<GroupedBarChart
  data={[
    { month: "Jan", product1: 120, product2: 80 },
    { month: "Feb", product1: 150, product2: 100 },
    // ...more data
  ]}
  config={{
    product1: { label: "Premium", color: "#3b82f6" },
    product2: { label: "Standard", color: "#10b981" },
  }}
  className="h-80"
/>`}
          </pre>
        </div>
      </section>
    </div>
  );
} 