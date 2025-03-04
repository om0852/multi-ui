"use client";

import React, { useState } from "react";
import { BoxPlot } from "../_components/Bar_14";

export default function BarExample14() {
  // Sample datasets
  const datasets = {
    salaries: {
      name: "Software Engineer Salaries",
      data: [
        75000, 78000, 80000, 82000, 85000, 87000, 88000, 90000, 92000, 95000, 
        98000, 100000, 105000, 110000, 115000, 120000, 125000, 130000, 140000, 
        145000, 150000, 155000, 160000, 165000, 170000, 180000, 190000, 200000, 
        210000, 220000, 230000, 240000, 250000
      ],
      description: "Annual salaries of software engineers in USD",
      unit: "$"
    },
    temperatures: {
      name: "Monthly Temperatures",
      data: [
        -5, -3, 0, 5, 10, 15, 18, 20, 22, 25, 28, 30, 32, 35, 38, 40, 42, 
        -2, 0, 3, 7, 12, 17, 20, 23, 25, 27, 30, 33, 36, 39, 41, 43,
        -8, -5, -2, 2, 8, 13, 16, 19, 21, 24, 26, 29, 31, 34, 37, 40
      ],
      description: "Monthly temperatures in degrees Celsius",
      unit: "°C"
    },
    scores: {
      name: "Student Test Scores",
      data: [
        45, 50, 55, 60, 65, 70, 72, 75, 78, 80, 82, 85, 87, 88, 90, 92, 95, 97, 98, 
        40, 48, 52, 58, 63, 68, 72, 75, 78, 80, 83, 85, 88, 90, 93, 95, 98, 100,
        35, 42, 48, 55, 60, 65, 70, 73, 76, 79, 82, 84, 87, 89, 92, 94, 97, 99
      ],
      description: "Test scores of students out of 100",
      unit: ""
    },
    heights: {
      name: "Adult Heights",
      data: [
        155, 158, 160, 162, 165, 168, 170, 172, 175, 178, 180, 182, 185, 188, 190, 192, 195,
        150, 153, 155, 158, 160, 163, 165, 168, 170, 173, 175, 178, 180, 183, 185, 188,
        160, 163, 165, 168, 170, 173, 175, 178, 180, 183, 185, 188, 190, 193, 195, 198, 200, 205
      ],
      description: "Heights of adults in centimeters",
      unit: "cm"
    }
  };

  // State for current dataset
  const [currentDataset, setCurrentDataset] = useState<keyof typeof datasets>("salaries");
  
  // Calculate statistics for the current dataset
  const currentData = datasets[currentDataset].data;
  const sortedData = [...currentData].sort((a, b) => a - b);
  const min = Math.min(...currentData);
  const max = Math.max(...currentData);
  const mean = currentData.reduce((sum, val) => sum + val, 0) / currentData.length;
  const median = sortedData[Math.floor(sortedData.length / 2)];
  
  return (
    <div className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-6">Box Plot</h2>
      
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
      
      {/* Box Plot Display */}
      <section className="mb-10">
        <h3 className="text-xl font-semibold mb-4">{datasets[currentDataset].name}</h3>
        <div className="bg-gray-800 p-6 rounded-lg">
          <div className="bg-white rounded-lg p-4">
            <BoxPlot 
              data={datasets[currentDataset].data} 
              width={700} 
              height={200} 
              className="w-full" 
            />
          </div>
          <p className="mt-4 text-gray-300">
            {datasets[currentDataset].description}
          </p>
        </div>
      </section>

      {/* Data Statistics */}
      <section className="mb-10">
        <h3 className="text-xl font-semibold mb-4">Dataset Statistics</h3>
        <div className="bg-gray-800 p-4 rounded-lg grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className="bg-gray-700 p-3 rounded">
            <h4 className="text-sm text-gray-400">Sample Size</h4>
            <p className="text-xl font-bold">{currentData.length}</p>
          </div>
          <div className="bg-gray-700 p-3 rounded">
            <h4 className="text-sm text-gray-400">Minimum</h4>
            <p className="text-xl font-bold">{min}{datasets[currentDataset].unit}</p>
          </div>
          <div className="bg-gray-700 p-3 rounded">
            <h4 className="text-sm text-gray-400">Maximum</h4>
            <p className="text-xl font-bold">{max}{datasets[currentDataset].unit}</p>
          </div>
          <div className="bg-gray-700 p-3 rounded">
            <h4 className="text-sm text-gray-400">Mean</h4>
            <p className="text-xl font-bold">{mean.toFixed(1)}{datasets[currentDataset].unit}</p>
          </div>
          <div className="bg-gray-700 p-3 rounded">
            <h4 className="text-sm text-gray-400">Median</h4>
            <p className="text-xl font-bold">{median}{datasets[currentDataset].unit}</p>
          </div>
        </div>
      </section>

      {/* Explanation */}
      <section className="mb-10">
        <h3 className="text-xl font-semibold mb-4">Understanding Box Plots</h3>
        <div className="bg-gray-800 p-4 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-2">Box Plot Components:</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li><span className="text-skyblue font-medium">Box:</span> Represents the interquartile range (IQR) from Q1 (25th percentile) to Q3 (75th percentile)</li>
                <li><span className="font-medium">Line in Box:</span> Represents the median (50th percentile)</li>
                <li><span className="font-medium">Whiskers:</span> Extend to the minimum and maximum values within 1.5 × IQR from the box</li>
                <li><span className="text-red-500 font-medium">Dots:</span> Represent outliers (values beyond the whiskers)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">What Box Plots Tell You:</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li>Central tendency (median)</li>
                <li>Spread of data (IQR)</li>
                <li>Skewness (asymmetry of the box and whiskers)</li>
                <li>Presence of outliers</li>
                <li>Range of the data</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mb-10">
        <h3 className="text-xl font-semibold mb-4">Features</h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-300">
          <li>Visualize data distribution with quartiles, median, and outliers</li>
          <li>Automatic calculation of box plot statistics</li>
          <li>Clear labeling of key statistical values</li>
          <li>Outlier detection and visualization</li>
          <li>Responsive design that adapts to container width</li>
          <li>Customizable width and height</li>
        </ul>
      </section>

      {/* When to Use */}
      <section className="mb-10">
        <h3 className="text-xl font-semibold mb-4">When to Use Box Plots</h3>
        <div className="bg-gray-800 p-4 rounded-lg">
          <p className="text-gray-300 mb-3">
            Box plots are particularly effective for:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li>Comparing distributions between multiple groups or categories</li>
            <li>Identifying outliers in a dataset</li>
            <li>Visualizing the spread and skewness of data</li>
            <li>Comparing the central tendency and variability across datasets</li>
            <li>Summarizing large datasets in a compact form</li>
            <li>Identifying potential data quality issues</li>
          </ul>
          <p className="text-gray-300 mt-3">
            Box plots are especially useful when you need to compare distributions side by side or when you want to quickly identify outliers in your data.
          </p>
        </div>
      </section>

      {/* Usage Instructions */}
      <section>
        <h3 className="text-xl font-semibold mb-4">Usage</h3>
        <div className="bg-gray-800 p-4 rounded-lg">
          <pre className="text-sm text-gray-300 overflow-x-auto">
{`// Required props:
// - data: Array of numbers representing the dataset
// - width: (Optional) Width of the SVG in pixels
// - height: (Optional) Height of the SVG in pixels
// - className: (Optional) Additional CSS classes

<BoxPlot
  data={[75000, 80000, 85000, 90000, 95000, 100000, 110000, 120000, 150000, 200000]}
  width={600}
  height={200}
  className="w-full"
/>`}
          </pre>
        </div>
      </section>
    </div>
  );
} 