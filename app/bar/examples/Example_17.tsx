"use client";

import React, { useState, useRef, useEffect } from "react";
import LineGraph from "../tsx/Bar_17";

export default function BarExample17() {
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

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
      yAxisLabel: "Revenue ($)"
    }
  };

  const [currentDataset, setCurrentDataset] = useState<keyof typeof datasets>("stockPrice");
  const isCompact = containerWidth < 640;
  
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
    <div ref={containerRef} className="p-4 sm:p-6 md:p-8 min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6">Line Graph Analysis</h2>
      
      <div className={`mb-6 ${isCompact ? 'flex flex-col' : 'flex flex-wrap'} gap-2`}>
        {Object.entries(datasets).map(([key, { name }]) => (
          <button
            key={key}
            onClick={() => setCurrentDataset(key as keyof typeof datasets)}
            className={`px-4 py-2 rounded-md transition-colors ${
              currentDataset === key 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            } ${isCompact ? 'w-full' : ''}`}
          >
            {name}
          </button>
        ))}
      </div>

      <div className="bg-gray-800 p-3 sm:p-4 md:p-6 rounded-lg">
        <div className="bg-white rounded-lg p-3 sm:p-4">
          <div className="w-full h-[250px] sm:h-[400px] md:h-[500px]">
            <LineGraph 
              data={datasets[currentDataset].data}
              width={Math.min(800, containerWidth - 40)}
              height={Math.min(500, containerWidth * 0.6)}
              lineColor={datasets[currentDataset].lineColor}
              dotColor={datasets[currentDataset].dotColor}
            />
          </div>
        </div>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="py-2 px-4">Time Period</th>
                <th className="py-2 px-4">Value ({datasets[currentDataset].yAxisLabel})</th>
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
      </div>
    </div>
  );
} 