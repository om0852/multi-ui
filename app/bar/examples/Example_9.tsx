"use client";

import React, { useState, useRef, useEffect } from "react";
import { InteractiveBarChart } from "../_components/Bar_9";

export default function BarExample9() {
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

  // Determine if we should use compact layout
  const isCompact = containerWidth < 640;

  // Get the appropriate label for the current dataset
  const getDatasetLabel = () => {
    switch (activeDataset) {
      case 'revenue': return isCompact ? 'Revenue' : 'Monthly Revenue ($K)';
      case 'traffic': return isCompact ? 'Traffic' : 'Daily Website Visitors';
      case 'product': return isCompact ? 'Products' : 'Sales by Product Category ($K)';
    }
  };

  return (
    <div ref={containerRef} className="p-4 sm:p-6 md:p-8 min-h-screen bg-white">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">Interactive Bar Chart</h2>
      
      {/* Dataset Selection */}
      <div className={`mb-4 sm:mb-6 ${isCompact ? 'flex flex-col' : 'flex flex-wrap'} gap-2`}>
        <button 
          onClick={() => setActiveDataset('revenue')}
          className={`px-4 py-2 rounded-md transition-colors text-sm sm:text-base ${
            activeDataset === 'revenue' 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          {isCompact ? 'Revenue' : 'Monthly Revenue'}
        </button>
        <button 
          onClick={() => setActiveDataset('traffic')}
          className={`px-4 py-2 rounded-md transition-colors text-sm sm:text-base ${
            activeDataset === 'traffic' 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          {isCompact ? 'Traffic' : 'Website Traffic'}
        </button>
        <button 
          onClick={() => setActiveDataset('product')}
          className={`px-4 py-2 rounded-md transition-colors text-sm sm:text-base ${
            activeDataset === 'product' 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          {isCompact ? 'Products' : 'Product Categories'}
        </button>
      </div>
      
      {/* Chart Display */}
      <section>
        <h3 className="text-base text-black sm:text-lg md:text-xl font-semibold mb-3 sm:mb-4 truncate">
          {getDatasetLabel()}
        </h3>
        <div className="bg-white p-3 sm:p-4 md:p-6 rounded-lg">
          <div className="w-full h-[250px] sm:h-[400px] md:h-[500px]">
            <InteractiveBarChart data={getActiveData()} />
          </div>
        </div>
      </section>
    </div>
  );
} 