"use client";

import React from "react";

type BoxPlotProps = {
  data: number[]; // The dataset to visualize
  width?: number;
  height?: number;
  className?: string;
  
};

function calculateBoxPlotStats(data: number[]) {
  const sortedData = [...data].sort((a, b) => a - b);

  const q1 = sortedData[Math.floor((sortedData.length / 4))]; // First Quartile (25%)
  const median = sortedData[Math.floor(sortedData.length / 2)]; // Median (50%)
  const q3 = sortedData[Math.floor(3 * sortedData.length / 4)]; // Third Quartile (75%)
  
  const iqr = q3 - q1; // Interquartile Range
  
  // Whiskers are typically defined as 1.5 * IQR above Q3 and below Q1
  const lowerWhisker = Math.max(Math.min(...sortedData), q1 - 1.5 * iqr);
  const upperWhisker = Math.min(Math.max(...sortedData), q3 + 1.5 * iqr);
  
  const outliers = sortedData.filter((value) => value < lowerWhisker || value > upperWhisker);

  return { q1, median, q3, lowerWhisker, upperWhisker, outliers };
}

export function BoxPlot({
  data,
  width = 400,
  height = 200,
  className = "",
  ...props
}: BoxPlotProps) {
  const { q1, median, q3, lowerWhisker, upperWhisker, outliers } = calculateBoxPlotStats(data);

  const padding = 20; // Padding for the plot
  const chartWidth = width - 2 * padding;
  const chartHeight = height - 2 * padding;

  // Scales to fit the data within the chart width and height
  const minValue = Math.min(...data);
  const maxValue = Math.max(...data);

  // Scale function for the X position
  const scaleX = (value: number) => padding + (value - minValue) * chartWidth / (maxValue - minValue);

  const boxHeight = chartHeight / 3;

  return (
    <svg
      className={`w-full ${className}`}
      viewBox={`0 0 ${width} ${height}`}
      style={{ overflow: "visible" }}
      {...props}
    >
      {/* Box Plot */}
      <g>
        {/* Box representing the IQR (Q1 to Q3) */}
        <rect
          x={scaleX(q1)}
          y={padding + boxHeight}
          width={scaleX(q3) - scaleX(q1)}
          height={boxHeight}
          fill="skyblue"
          stroke="black"
          strokeWidth="1"
        />
        
        {/* Median line inside the box */}
        <line
          x1={scaleX(median)}
          y1={padding + boxHeight}
          x2={scaleX(median)}
          y2={padding + boxHeight + boxHeight}
          stroke="black"
          strokeWidth="2"
        />
        
        {/* Lower whisker */}
        <line
          x1={scaleX(lowerWhisker)}
          y1={padding + boxHeight + boxHeight / 2}
          x2={scaleX(q1)}
          y2={padding + boxHeight + boxHeight / 2}
          stroke="black"
          strokeWidth="2"
        />
        
        {/* Upper whisker */}
        <line
          x1={scaleX(upperWhisker)}
          y1={padding + boxHeight + boxHeight / 2}
          x2={scaleX(q3)}
          y2={padding + boxHeight + boxHeight / 2}
          stroke="black"
          strokeWidth="2"
        />
      </g>

      {/* Outliers */}
      {outliers.map((outlier, index) => (
        <circle
          key={index}
          cx={scaleX(outlier)}
          cy={padding + boxHeight + boxHeight / 2}
          r="4"
          fill="red"
          stroke="black"
          strokeWidth="1"
        />
      ))}

      {/* Labels for the whiskers */}
      <text
        x={scaleX(lowerWhisker)}
        y={padding + boxHeight + boxHeight / 2 - 10}
        textAnchor="middle"
        fontSize="10"
        fill="black"
      >
        {lowerWhisker.toFixed(2)}
      </text>
      <text
        x={scaleX(upperWhisker)}
        y={padding + boxHeight + boxHeight / 2 - 10}
        textAnchor="middle"
        fontSize="10"
        fill="black"
      >
        {upperWhisker.toFixed(2)}
      </text>

      {/* Label for the median */}
      <text
        x={scaleX(median)}
        y={padding + boxHeight + boxHeight + 15}
        textAnchor="middle"
        fontSize="10"
        fill="black"
      >
        {median.toFixed(2)}
      </text>

      {/* Label for the Q1 and Q3 */}
      <text
        x={scaleX(q1)}
        y={padding + boxHeight - 10}
        textAnchor="middle"
        fontSize="10"
        fill="black"
      >
        {q1.toFixed(2)}
      </text>
      <text
        x={scaleX(q3)}
        y={padding + boxHeight - 10}
        textAnchor="middle"
        fontSize="10"
        fill="black"
      >
        {q3.toFixed(2)}
      </text>
    </svg>
  );
}

// Example Usage
const exampleData = [12, 15, 14, 10, 13, 18, 25, 23, 22, 30, 35, 28, 27, 31, 32, 40, 42,20,10];

export function Component() {
  return <BoxPlot data={exampleData} width={500} height={300}/>;
}
