"use client";

import React, { useState } from "react";
import { PopulationPyramid } from "../_components/Bar_6";

export default function BarExample6() {
  // Sample data for US population pyramid
  const usPopulationData = [
    { ageGroup: "0-4", male: 10.2, female: 9.8 },
    { ageGroup: "5-9", male: 10.5, female: 10.1 },
    { ageGroup: "10-14", male: 10.7, female: 10.3 },
    { ageGroup: "15-19", male: 10.9, female: 10.5 },
    { ageGroup: "20-24", male: 11.2, female: 10.8 },
    { ageGroup: "25-29", male: 11.5, female: 11.2 },
    { ageGroup: "30-34", male: 11.0, female: 10.9 },
    { ageGroup: "35-39", male: 10.8, female: 10.7 },
    { ageGroup: "40-44", male: 10.5, female: 10.4 },
    { ageGroup: "45-49", male: 10.2, female: 10.3 },
    { ageGroup: "50-54", male: 9.8, female: 10.0 },
    { ageGroup: "55-59", male: 9.5, female: 9.8 },
    { ageGroup: "60-64", male: 9.0, female: 9.5 },
    { ageGroup: "65+", male: 8.5, female: 9.2 },
  ];

  // Sample data for Japan population pyramid (aging population)
  const japanPopulationData = [
    { ageGroup: "0-4", male: 5.2, female: 4.9 },
    { ageGroup: "5-9", male: 5.5, female: 5.2 },
    { ageGroup: "10-14", male: 5.7, female: 5.4 },
    { ageGroup: "15-19", male: 6.0, female: 5.7 },
    { ageGroup: "20-24", male: 6.3, female: 6.0 },
    { ageGroup: "25-29", male: 6.8, female: 6.5 },
    { ageGroup: "30-34", male: 7.5, female: 7.2 },
    { ageGroup: "35-39", male: 8.2, female: 8.0 },
    { ageGroup: "40-44", male: 9.0, female: 8.8 },
    { ageGroup: "45-49", male: 9.8, female: 9.6 },
    { ageGroup: "50-54", male: 10.5, female: 10.3 },
    { ageGroup: "55-59", male: 11.2, female: 11.0 },
    { ageGroup: "60-64", male: 11.8, female: 11.7 },
    { ageGroup: "65+", male: 12.5, female: 13.2 },
  ];

  // State to toggle between datasets
  const [showJapan, setShowJapan] = useState(false);
  const currentData = showJapan ? japanPopulationData : usPopulationData;
  
  return (
    <div className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-6">Population Pyramid</h2>
      
      {/* Basic Usage */}
      <section className="mb-10">
        <h3 className="text-xl font-semibold mb-4">Demographic Visualization</h3>
        <div className="bg-gray-800 p-4 rounded-lg overflow-x-auto">
          <div className="min-w-[700px] bg-white rounded-lg p-4">
            <PopulationPyramid data={currentData} />
            <div className="flex justify-center mt-4">
              <div className="flex items-center mr-6">
                <div className="w-4 h-4 bg-blue-600 mr-2"></div>
                <span className="text-gray-800">Male</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-blue-300 mr-2"></div>
                <span className="text-gray-800">Female</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 flex justify-center">
          <button 
            onClick={() => setShowJapan(!showJapan)}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
          >
            Switch to {showJapan ? "US Population" : "Japan Population"}
          </button>
        </div>
        <p className="mt-4 text-gray-300">
          This population pyramid displays the age and gender distribution for {showJapan ? "Japan (aging population)" : "the United States"}. Hover over bars to see exact values.
        </p>
      </section>

      {/* Features */}
      <section className="mb-10">
        <h3 className="text-xl font-semibold mb-4">Features</h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-300">
          <li>Symmetrical visualization of demographic data by age and gender</li>
          <li>Interactive hover effects that reveal exact population values</li>
          <li>Animated entrance with bars growing from the center</li>
          <li>Clear age group labeling in the center axis</li>
          <li>Automatic scaling based on the maximum population value</li>
          <li>Color differentiation between male and female populations</li>
        </ul>
      </section>

      {/* When to Use */}
      <section className="mb-10">
        <h3 className="text-xl font-semibold mb-4">When to Use Population Pyramids</h3>
        <div className="bg-gray-800 p-4 rounded-lg">
          <p className="text-gray-300 mb-3">
            Population pyramids are particularly effective for:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li>Visualizing demographic structures of countries or regions</li>
            <li>Comparing age and gender distributions</li>
            <li>Identifying population trends such as aging, youth bulges, or gender imbalances</li>
            <li>Forecasting future population changes and needs</li>
            <li>Analyzing historical demographic shifts over time</li>
          </ul>
          <p className="text-gray-300 mt-3">
            The example shows two contrasting population structures: a relatively balanced distribution (US) and an aging population (Japan).
          </p>
        </div>
      </section>

      {/* Usage Instructions */}
      <section>
        <h3 className="text-xl font-semibold mb-4">Usage</h3>
        <div className="bg-gray-800 p-4 rounded-lg">
          <pre className="text-sm text-gray-300 overflow-x-auto">
{`// Required props:
// - data: Array of objects with ageGroup, male, and female properties

<PopulationPyramid
  data={[
    { ageGroup: "0-4", male: 10.2, female: 9.8 },
    { ageGroup: "5-9", male: 10.5, female: 10.1 },
    // ...more age groups
  ]}
/>`}
          </pre>
        </div>
      </section>
    </div>
  );
} 