"use client";

import React, { useState } from "react";

export type BarChartConfig = {
  [key: string]: {
    label: string;
    color: string;
  };
};

type BarChartProps = {
  data: { [key: string]: string | number }[];
  config: BarChartConfig;
  className?: string;
};

export function CustomBarChart({ data, config, className }: BarChartProps) {
  const [hoveredBar, setHoveredBar] = useState<{ key: string; index: number } | null>(null);

  // Calculate chart dimensions
  const width = 600;
  const height = 400;
  const margin = { top: 20, right: 20, bottom: 50, left: 50 };

  // Extract keys and find max value for scaling
  const keys = Object.keys(config);
  const maxValue = Math.max(
    ...data.flatMap((item) => keys.map((key) => Number(item[key] || 0)))
  );

  const xScale = (index: number) =>
    margin.left + index * ((width - margin.left - margin.right) / data.length);
  const yScale = (value: number) =>
    height - margin.bottom - (value / maxValue) * (height - margin.top - margin.bottom);
  const barWidth = (width - margin.left - margin.right) / (data.length * keys.length);

  return (
    <svg className={`w-full ${className}`} viewBox={`0 0 ${width} ${height}`}>
      {/* X and Y Axes */}
      <line
        x1={margin.left}
        y1={height - margin.bottom}
        x2={width - margin.right}
        y2={height - margin.bottom}
        stroke="black"
      />
      <line
        x1={margin.left}
        y1={margin.top}
        x2={margin.left}
        y2={height - margin.bottom}
        stroke="black"
      />

      {/* Labels and Grid Lines */}
      {data.map((item, index) => (
        <text
          key={index}
          x={xScale(index) + (keys.length * barWidth) / 2}
          y={height - margin.bottom + 20}
          textAnchor="middle"
          fontSize="12"
          color="white"
        >
          {item["month"]}
        </text>
      ))}

      {Array.from({ length: 5 }).map((_, i) => {
        const value = (maxValue / 5) * (i + 1);
        const y = yScale(value);
        return (
          <g key={i}>
            <line
              x1={margin.left}
              y1={y}
              x2={width - margin.right}
              y2={y}
              stroke="#ccc"
              strokeDasharray="4 2"
            />
            <text x={margin.left - 10} y={y + 5} fontSize="12" textAnchor="end">
              {Math.round(value)}
            </text>
          </g>
        );
      })}

      {/* Bars */}
      {data.map((item, index) =>
        keys.map((key, keyIndex) => {
          const value = Number(item[key] || 0);
          const isHovered =
            hoveredBar?.key === key && hoveredBar?.index === index;

          return (
            <g
              key={`${index}-${key}`}
              onMouseEnter={() => setHoveredBar({ key, index })}
              onMouseLeave={() => setHoveredBar(null)}
            >
              <rect
                x={xScale(index) + keyIndex * barWidth}
                y={yScale(value)}
                width={barWidth - 4}
                height={height - margin.bottom - yScale(value)}
                fill={config[key].color}
              />
              {isHovered && (
                <text
                  x={xScale(index) + keyIndex * barWidth + (barWidth - 4) / 2}
                  y={yScale(value) - 10}
                  textAnchor="middle"
                  fontSize="12"
                  fill="#000"
                >
                  {config[key].label}
                </text>
              )}
            </g>
          );
        })
      )}
    </svg>
  );
}

// Example Usage
const exampleData = [
  { month: "January", desktop: 100, mobile: 80 },
  { month: "February", desktop: 100, mobile: 200 },
  { month: "March", desktop: 200, mobile: 120 },
  { month: "April", desktop: 300, mobile: 190 },
  { month: "May", desktop: 300, mobile: 130 },
  { month: "June", desktop: 400, mobile: 140 },
];

const exampleConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies BarChartConfig;

export function Component() {
  return <CustomBarChart data={exampleData} config={exampleConfig} className="" />;
}
