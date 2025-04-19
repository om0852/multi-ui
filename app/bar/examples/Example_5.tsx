"use client";

import React, { useState } from "react";
import { ThreeDBarChart } from "../tsx/Bar_5";

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
    <div className="p-4 sm:p-6 md:p-8 min-h-screen bg-white">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">Simple Bar Chart</h2>
      
      <div className="flex flex-col space-y-6 sm:space-y-8">
        {/* Basic usage */}
        <div className="flex flex-col space-y-3 sm:space-y-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-700">Basic Usage</h3>
            <button 
              onClick={() => setShowTraffic(!showTraffic)}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors text-sm sm:text-base"
            >
              Switch to {showTraffic ? "Quarterly Revenue" : "Website Traffic"}
            </button>
          </div>
          <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-md">
            <div className="w-full h-[300px] sm:h-[400px] md:h-[500px]">
              <ThreeDBarChart 
                data={showTraffic ? websiteTraffic : quarterlyRevenue} 
              />
            </div>
          </div>
          <div className="text-sm sm:text-base text-gray-600">
            <p className="mb-2">Currently showing: <span className="font-semibold">{showTraffic ? "Monthly Website Traffic" : "Quarterly Revenue"}</span></p>
            <p>{showTraffic 
              ? "Displays monthly website visitor counts for the first half of the year." 
              : "Shows quarterly revenue figures for the current fiscal year."}</p>
          </div>
        </div>
      </div>
    </div>
  );
} 