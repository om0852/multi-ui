"use client";

import React, { useState } from "react";
import PieChart from "../_components/Bar_16";

export default function BarExample16() {
  // Sample datasets
  const datasets = {
    revenue: {
      name: "Revenue by Product Line",
      data: [
        { id: "product-a", value: 420000, color: "#3b82f6", label: "Product A" },
        { id: "product-b", value: 380000, color: "#10b981", label: "Product B" },
        { id: "product-c", value: 290000, color: "#f59e0b", label: "Product C" },
        { id: "product-d", value: 180000, color: "#8b5cf6", label: "Product D" },
        { id: "product-e", value: 120000, color: "#ec4899", label: "Product E" }
      ],
      description: "Annual revenue distribution across product lines"
    },
    timeSpent: {
      name: "Time Spent on Activities",
      data: [
        { id: "work", value: 40, color: "#3b82f6", label: "Work" },
        { id: "sleep", value: 33, color: "#8b5cf6", label: "Sleep" },
        { id: "leisure", value: 15, color: "#10b981", label: "Leisure" },
        { id: "chores", value: 7, color: "#f59e0b", label: "Chores" },
        { id: "commute", value: 5, color: "#ef4444", label: "Commute" }
      ],
      description: "Average weekly hours spent on different activities"
    },
    socialMedia: {
      name: "Social Media Usage",
      data: [
        { id: "instagram", value: 35, color: "#e1306c", label: "Instagram" },
        { id: "facebook", value: 25, color: "#4267B2", label: "Facebook" },
        { id: "twitter", value: 15, color: "#1DA1F2", label: "Twitter" },
        { id: "tiktok", value: 18, color: "#000000", label: "TikTok" },
        { id: "linkedin", value: 7, color: "#0077B5", label: "LinkedIn" }
      ],
      description: "Percentage of time spent on different social media platforms"
    }
  };

  // State for current dataset
  const [currentDataset, setCurrentDataset] = useState<keyof typeof datasets>("revenue");
  
  // Format value based on dataset
  const formatValue = (value: number, dataset: keyof typeof datasets) => {
    if (dataset === "revenue") {
      return new Intl.NumberFormat('en-US', { 
        style: 'currency', 
        currency: 'USD',
        maximumFractionDigits: 0
      }).format(value);
    } else if (dataset === "timeSpent") {
      return `${value} hours`;
    } else {
      return `${value}%`;
    }
  };
  
  return (
    <div className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-6">Animated Pie Chart</h2>
      
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
            {datasets[currentDataset].description}. Hover over slices to see the animation effect.
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
                    <td className="py-2 px-4">{formatValue(item.value, currentDataset)}</td>
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

      {/* Animation Features */}
      <section className="mb-10">
        <h3 className="text-xl font-semibold mb-4">Animation Features</h3>
        <div className="bg-gray-800 p-4 rounded-lg">
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li>Spring-based entrance animations for each pie slice</li>
            <li>Scale effect on hover with smooth transitions</li>
            <li>Delayed appearance of labels for better visual flow</li>
            <li>Subtle opacity changes to enhance focus on selected slices</li>
            <li>Natural-feeling motion with proper easing and physics</li>
          </ul>
        </div>
      </section>

      {/* Features */}
      <section className="mb-10">
        <h3 className="text-xl font-semibold mb-4">Features</h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-300">
          <li>Interactive pie slices with spring-based hover animations</li>
          <li>Animated entrance with scale and opacity transitions</li>
          <li>Automatic percentage calculation</li>
          <li>Integrated labels showing category and percentage</li>
          <li>Color-coded legend for easy identification</li>
          <li>Responsive design that adapts to container size</li>
          <li>Customizable colors for each data segment</li>
        </ul>
      </section>

      {/* When to Use */}
      <section className="mb-10">
        <h3 className="text-xl font-semibold mb-4">When to Use Animated Pie Charts</h3>
        <div className="bg-gray-800 p-4 rounded-lg">
          <p className="text-gray-300 mb-3">
            Animated pie charts are particularly effective for:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li>Presentations and dashboards where you want to draw attention</li>
            <li>Interactive reports where user engagement is important</li>
            <li>Highlighting proportional relationships between categories</li>
            <li>Making data more engaging and memorable for viewers</li>
            <li>Situations where the animation timing can represent a sequence or process</li>
          </ul>
          <p className="text-gray-300 mt-3">
            The animations add visual interest while helping users understand the relative proportions in the data. They&apos;re especially useful in situations where you want to create a more engaging data experience.
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
    { id: "product-a", value: 420000, color: "#3b82f6", label: "Product A" },
    { id: "product-b", value: 380000, color: "#10b981", label: "Product B" },
    { id: "product-c", value: 290000, color: "#f59e0b", label: "Product C" },
    // Add more data items as needed
  ]}
  width={500}
  height={500}
/>`}
          </pre>
        </div>
      </section>
    </div>
  );
} 