"use client";

import React, { useState } from "react";
import PieChart from "../_components/Bar_15";

export default function BarExample15() {
  // Sample datasets
  const datasets = {
    budget: {
      name: "Monthly Budget Allocation",
      data: [
        { id: "housing", value: 1200, color: "#3b82f6", label: "Housing" },
        { id: "food", value: 500, color: "#10b981", label: "Food" },
        { id: "transportation", value: 300, color: "#f59e0b", label: "Transportation" },
        { id: "utilities", value: 200, color: "#8b5cf6", label: "Utilities" },
        { id: "entertainment", value: 150, color: "#ec4899", label: "Entertainment" },
        { id: "savings", value: 400, color: "#06b6d4", label: "Savings" },
        { id: "other", value: 250, color: "#6b7280", label: "Other" }
      ],
      description: "Breakdown of monthly expenses by category"
    },
    marketShare: {
      name: "Market Share by Company",
      data: [
        { id: "company-a", value: 35, color: "#3b82f6", label: "Company A" },
        { id: "company-b", value: 25, color: "#10b981", label: "Company B" },
        { id: "company-c", value: 20, color: "#f59e0b", label: "Company C" },
        { id: "company-d", value: 10, color: "#8b5cf6", label: "Company D" },
        { id: "others", value: 10, color: "#6b7280", label: "Others" }
      ],
      description: "Market share percentage by company in the industry"
    },
    deviceUsage: {
      name: "Website Traffic by Device",
      data: [
        { id: "mobile", value: 55, color: "#3b82f6", label: "Mobile" },
        { id: "desktop", value: 30, color: "#10b981", label: "Desktop" },
        { id: "tablet", value: 12, color: "#f59e0b", label: "Tablet" },
        { id: "other", value: 3, color: "#6b7280", label: "Other" }
      ],
      description: "Distribution of website visitors by device type"
    },
    energySources: {
      name: "Energy Sources",
      data: [
        { id: "fossil", value: 60, color: "#6b7280", label: "Fossil Fuels" },
        { id: "solar", value: 15, color: "#f59e0b", label: "Solar" },
        { id: "wind", value: 12, color: "#60a5fa", label: "Wind" },
        { id: "hydro", value: 8, color: "#3b82f6", label: "Hydro" },
        { id: "nuclear", value: 10, color: "#10b981", label: "Nuclear" },
        { id: "other", value: 5, color: "#8b5cf6", label: "Other Renewables" }
      ],
      description: "Global energy production by source type"
    }
  };

  // State for current dataset
  const [currentDataset, setCurrentDataset] = useState<keyof typeof datasets>("budget");
  
  return (
    <div className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-6">Pie Chart</h2>
      
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
      
      {/* Pie Chart Display */}
      <section className="mb-10">
        <h3 className="text-xl font-semibold mb-4">{datasets[currentDataset].name}</h3>
        <div className="bg-gray-800 p-6 rounded-lg">
          <div className="bg-white rounded-lg p-4 flex justify-center">
            <div className="relative h-[500px] w-[500px]">
              <PieChart 
                data={datasets[currentDataset].data} 
                width={500} 
                height={500} 
              />
            </div>
          </div>
          <p className="mt-4 text-gray-300">
            {datasets[currentDataset].description}. Hover over slices to highlight them.
          </p>
        </div>
      </section>

      {/* Data Table */}
      <section className="mb-10">
        <h3 className="text-xl font-semibold mb-4">Data Breakdown</h3>
        <div className="bg-gray-800 p-4 rounded-lg overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="py-2 px-4">Category</th>
                <th className="py-2 px-4">Value</th>
                <th className="py-2 px-4">Percentage</th>
                <th className="py-2 px-4">Color</th>
              </tr>
            </thead>
            <tbody>
              {datasets[currentDataset].data.map((item) => {
                const total = datasets[currentDataset].data.reduce((sum, i) => sum + i.value, 0);
                const percentage = (item.value / total * 100).toFixed(1);
                
                return (
                  <tr key={item.id} className="border-b border-gray-700">
                    <td className="py-2 px-4">{item.label}</td>
                    <td className="py-2 px-4">{item.value}</td>
                    <td className="py-2 px-4">{percentage}%</td>
                    <td className="py-2 px-4">
                      <div className="w-6 h-6 rounded" style={{ backgroundColor: item.color }}></div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* Features */}
      <section className="mb-10">
        <h3 className="text-xl font-semibold mb-4">Features</h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-300">
          <li>Interactive pie slices with hover effects</li>
          <li>Animated entrance and hover transitions</li>
          <li>Automatic percentage calculation</li>
          <li>Integrated labels showing category and percentage</li>
          <li>Color-coded legend for easy identification</li>
          <li>Responsive design that adapts to container size</li>
          <li>Customizable colors for each data segment</li>
        </ul>
      </section>

      {/* When to Use */}
      <section className="mb-10">
        <h3 className="text-xl font-semibold mb-4">When to Use Pie Charts</h3>
        <div className="bg-gray-800 p-4 rounded-lg">
          <p className="text-gray-300 mb-3">
            Pie charts are particularly effective for:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li>Showing proportions and percentages of a whole</li>
            <li>Comparing parts of a total where there are relatively few categories (ideally 5-7 or fewer)</li>
            <li>Illustrating simple part-to-whole relationships</li>
            <li>Highlighting a significant segment compared to others</li>
            <li>Presenting data to non-technical audiences who find pie charts intuitive</li>
          </ul>
          <p className="text-gray-300 mt-3">
            For best results, limit pie charts to situations where the sum of all values represents a meaningful whole, and where you have a small number of categories with significant differences between them.
          </p>
        </div>
      </section>

      {/* Usage Instructions */}
      <section>
        <h3 className="text-xl font-semibold mb-4">Usage</h3>
        <div className="bg-gray-800 p-4 rounded-lg">
          <pre className="text-sm text-gray-300 overflow-x-auto">
{`// Required props:
// - data: Array of objects with id, value, color, and label properties
// - width: (Optional) Width of the chart in pixels
// - height: (Optional) Height of the chart in pixels

<PieChart
  data={[
    { id: "housing", value: 1200, color: "#3b82f6", label: "Housing" },
    { id: "food", value: 500, color: "#10b981", label: "Food" },
    { id: "transportation", value: 300, color: "#f59e0b", label: "Transportation" },
    // Add more data items as needed
  ]}
  width={400}
  height={400}
/>`}
          </pre>
        </div>
      </section>
    </div>
  );
} 