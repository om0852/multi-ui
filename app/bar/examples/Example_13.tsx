"use client";

import React, { useState } from "react";
import { Histogram } from "../_components/Bar_13";

export default function BarExample13() {
  // Sample datasets
  const datasets = {
    ages: {
      name: "Age Distribution",
      data: [
        22, 25, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
        41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56,
        28, 32, 35, 38, 42, 45, 48, 52, 55, 58, 62, 65, 68, 72, 75, 78,
        30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60, 63, 66, 69, 72, 75
      ],
      description: "Age distribution of survey respondents (in years)"
    },
    scores: {
      name: "Test Scores",
      data: [
        65, 68, 70, 72, 75, 78, 80, 82, 85, 87, 88, 90, 92, 95, 97, 98,
        60, 62, 65, 68, 70, 72, 75, 78, 80, 82, 85, 88, 90, 92, 95, 98,
        55, 58, 60, 62, 65, 68, 70, 72, 75, 78, 80, 82, 85, 88, 90, 92,
        75, 78, 80, 82, 85, 88, 90, 92, 95, 97, 98, 99, 100, 100, 100, 100
      ],
      description: "Distribution of student test scores (out of 100)"
    },
    heights: {
      name: "Height Distribution",
      data: [
        160, 162, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175,
        176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189,
        165, 168, 170, 172, 175, 178, 180, 182, 185, 188, 190, 192, 195, 198,
        155, 158, 160, 162, 165, 168, 170, 172, 175, 178, 180, 182, 185, 188
      ],
      description: "Height distribution of individuals (in cm)"
    }
  };

  // State for current dataset and bin count
  const [currentDataset, setCurrentDataset] = useState<keyof typeof datasets>("ages");
  const [binCount, setBinCount] = useState(10);

  return (
    <div className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-6">Histogram</h2>
      
      {/* Controls */}
      <section className="mb-6">
        <div className="flex flex-wrap gap-4 items-center">
          <div>
            <label htmlFor="dataset-select" className="block text-sm font-medium mb-1">
              Dataset:
            </label>
            <select
              id="dataset-select"
              value={currentDataset}
              onChange={(e) => setCurrentDataset(e.target.value as keyof typeof datasets)}
              className="bg-gray-700 text-white rounded px-3 py-1 border border-gray-600"
            >
              {Object.keys(datasets).map((key) => (
                <option key={key} value={key}>
                  {datasets[key as keyof typeof datasets].name}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label htmlFor="bin-count" className="block text-sm font-medium mb-1">
              Number of Bins:
            </label>
            <input
              id="bin-count"
              type="range"
              min="5"
              max="20"
              value={binCount}
              onChange={(e) => setBinCount(parseInt(e.target.value))}
              className="w-32"
            />
            <span className="ml-2">{binCount}</span>
          </div>
        </div>
      </section>
      
      {/* Histogram Display */}
      <section className="mb-10">
        <h3 className="text-xl font-semibold mb-4">{datasets[currentDataset].name}</h3>
        <div className="bg-gray-800 p-6 rounded-lg">
          <div className="bg-white rounded-lg p-4">
            <Histogram 
              data={datasets[currentDataset].data} 
              bins={binCount} 
              width={600} 
              height={300} 
              className="w-full" 
            />
          </div>
          <p className="mt-4 text-gray-300">
            {datasets[currentDataset].description}. Showing distribution across {binCount} bins.
          </p>
        </div>
      </section>

      {/* Data Statistics */}
      <section className="mb-10">
        <h3 className="text-xl font-semibold mb-4">Dataset Statistics</h3>
        <div className="bg-gray-800 p-4 rounded-lg grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-700 p-3 rounded">
            <h4 className="text-sm text-gray-400">Sample Size</h4>
            <p className="text-xl font-bold">{datasets[currentDataset].data.length}</p>
          </div>
          <div className="bg-gray-700 p-3 rounded">
            <h4 className="text-sm text-gray-400">Minimum</h4>
            <p className="text-xl font-bold">{Math.min(...datasets[currentDataset].data)}</p>
          </div>
          <div className="bg-gray-700 p-3 rounded">
            <h4 className="text-sm text-gray-400">Maximum</h4>
            <p className="text-xl font-bold">{Math.max(...datasets[currentDataset].data)}</p>
          </div>
          <div className="bg-gray-700 p-3 rounded">
            <h4 className="text-sm text-gray-400">Average</h4>
            <p className="text-xl font-bold">
              {(datasets[currentDataset].data.reduce((a, b) => a + b, 0) / datasets[currentDataset].data.length).toFixed(1)}
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mb-10">
        <h3 className="text-xl font-semibold mb-4">Features</h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-300">
          <li>Visualize frequency distribution of numerical data</li>
          <li>Adjustable bin count to control granularity</li>
          <li>Automatic scaling based on data range</li>
          <li>Bin labels showing the starting value of each bin</li>
          <li>Responsive design that adapts to container width</li>
          <li>Customizable width and height</li>
        </ul>
      </section>

      {/* When to Use */}
      <section className="mb-10">
        <h3 className="text-xl font-semibold mb-4">When to Use Histograms</h3>
        <div className="bg-gray-800 p-4 rounded-lg">
          <p className="text-gray-300 mb-3">
            Histograms are particularly effective for:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li>Visualizing the distribution of a continuous variable</li>
            <li>Identifying the shape of data distribution (normal, skewed, bimodal, etc.)</li>
            <li>Detecting outliers in a dataset</li>
            <li>Comparing the distribution of a variable across different groups</li>
            <li>Understanding the central tendency and spread of data</li>
            <li>Analyzing large datasets where individual data points would be overwhelming</li>
          </ul>
          <p className="text-gray-300 mt-3">
            Unlike bar charts that show counts of categorical data, histograms group continuous data into bins and show the frequency within each bin.
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
// - bins: Number of bins to group the data into
// - width: (Optional) Width of the SVG in pixels
// - height: (Optional) Height of the SVG in pixels
// - className: (Optional) Additional CSS classes

<Histogram
  data={[22, 25, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40]}
  bins={10}
  width={500}
  height={300}
  className="w-full"
/>`}
          </pre>
        </div>
      </section>
    </div>
  );
} 