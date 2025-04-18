"use client";

import React, { useState } from "react";
import { OverlappingBarChart } from "../_components/Bar_8";

export default function BarExample8() {
  // Sample data for sales comparison
  const salesData = [
    { label: "Q1", groupA: 150, groupB: 120 },
    { label: "Q2", groupA: 180, groupB: 140 },
    { label: "Q3", groupA: 210, groupB: 160 },
    { label: "Q4", groupA: 250, groupB: 180 }
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
    <div className="p-4 sm:p-6 md:p-8 min-h-screen bg-white">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">Interactive Bar Chart</h2>
      
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
        <h3 className="text-lg text-black sm:text-xl font-semibold mb-3 sm:mb-4">
          {activeDataset === 'sales' && 'Monthly Sales Comparison'}
          {activeDataset === 'budget' && 'Quarterly Budget vs Actual'}
          {activeDataset === 'platform' && 'Platform Performance Comparison'}
        </h3>
        <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-md">
          <div className="w-full h-[300px] sm:h-[400px] md:h-[500px]">
            <OverlappingBarChart data={getActiveData()} />
            
            {/* Legend */}
           
          </div>
        </div>
      
      </section>
    </div>
  );
} 