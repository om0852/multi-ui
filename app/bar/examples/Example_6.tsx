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

  // Sample data for Japan population pyramid
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
    <div className="p-4 sm:p-6 md:p-8 min-h-screen bg-white">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">Population Pyramid</h2>
      
      <section>
        <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-3 sm:mb-4">Demographic Visualization</h3>
        <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
          <div className="min-w-[300px] sm:min-w-[500px] md:min-w-[700px] mx-auto bg-white rounded-lg p-4">
            <div className="w-full h-[300px] sm:h-[400px] md:h-[500px]">
              <PopulationPyramid data={currentData} />
            </div>
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
          <div className="mt-4 flex justify-center">
            <button 
              onClick={() => setShowJapan(!showJapan)}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
            >
              Switch to {showJapan ? "US Population" : "Japan Population"}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
} 