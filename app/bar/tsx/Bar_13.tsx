"use client";

import React from "react";

type HistogramProps = {
  data: number[]; // The dataset to visualize
  bins: number; // The number of bins to group the data into
  width?: number;
  height?: number;
  className?: string;
};

export function Histogram({
  data,
  bins,
  width = 400,
  height = 300,
  className = "",
  ...props
}: HistogramProps) {
  // Sort the data to create bins
  const min = Math.min(...data);
  const max = Math.max(...data);
  const binWidth = (max - min) / bins;

  // Create the bins
  const binCounts = Array(bins).fill(0);
  data.forEach((value) => {
    const binIndex = Math.min(Math.floor((value - min) / binWidth), bins - 1);
    binCounts[binIndex]++;
  });

  // Set up the SVG chart properties
  const barWidth = width / bins;
  const maxBinCount = Math.max(...binCounts);
  
  return (
    <svg
      className={`w-full ${className}`}
      viewBox={`0 0 ${width} ${height}`}
      style={{ overflow: "visible" }}
      {...props}
    >
      {binCounts.map((count, index) => {
        const barHeight = (count / maxBinCount) * height;
        const x = index * barWidth;
        const y = height - barHeight;

        return (
          <g key={index}>
            <rect
              x={x}
              y={y}
              width={barWidth - 1} // To avoid gaps between bars
              height={barHeight}
              fill="#76c7c0"
              stroke="#4f7c7a"
              strokeWidth="1"
            />
            <text
              x={x + barWidth / 2}
              y={height - 5}
              textAnchor="middle"
              fontSize="12"
              fill="#000"
            >
              {Math.round(min + index * binWidth)}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

// Example Usage
const exampleData = [
  12, 14, 15, 18, 19, 20, 21, 22, 23, 24,
  30, 33, 34, 35, 37, 38, 39, 40, 42, 45,
  48, 50, 55, 57, 59, 60, 62, 63, 65, 68,
];

export function Component() {
  return <Histogram data={exampleData} bins={5} width={500} height={300} className="w-[60vh]"/>;
}
