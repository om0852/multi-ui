"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

// Type Definitions for Interactive Bar Chart Props
type InteractiveBarChartData = {
  label: string;
  value: number;
};

type InteractiveBarChartProps = {
  data: InteractiveBarChartData[];
};

// InteractiveBarChart Component
export function InteractiveBarChart({ data }: InteractiveBarChartProps) {
  const width = 700;
  const height = 400;
  const margin = { top: 20, right: 20, bottom: 100, left: 80 };

  const maxValue = Math.max(...data.map((item) => item.value));

  const yScale = (value: number) =>
    height - margin.bottom - (value / maxValue) * (height - margin.top - margin.bottom);

  const barWidth = (width - margin.left - margin.right) / (data.length * 2);

  // Hover State to show tooltip
  const [hoveredBar, setHoveredBar] = useState<{
    x: number;
    y: number;
    value: number;
  } | null>(null);

  return (
    <div className="w-full max-w-[700px] mx-auto pt-10">
      <svg className="w-full" viewBox={`0 0 ${width} ${height}`}>
        {/* Draw Axes */}
        {/* X Axis */}
        <line
          x1={margin.left}
          y1={height - margin.bottom}
          x2={width - margin.right}
          y2={height - margin.bottom}
          stroke="black"
        />
        {/* Y Axis */}
        <line
          x1={margin.left}
          y1={margin.top}
          x2={margin.left}
          y2={height - margin.bottom}
          stroke="black"
        />

        {/* Add Y-axis labels */}
        {Array.from({ length: 5 }).map((_, i) => {
          const value = Math.round((maxValue / 5) * (i + 1));
          const y = yScale(value);
          return (
            <text
              key={i}
              x={margin.left - 10}
              y={y}
              fontSize="12"
              textAnchor="end"
              fill="black"
            >
              {value}
            </text>
          );
        })}

        {/* Draw Bars with animation */}
        {data.map((item, index) => {
          const xPosition = margin.left + index * (barWidth * 2);

          return (
            <motion.g
              key={item.label}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.rect
                x={xPosition}
                y={yScale(item.value)}
                width={barWidth}
                height={height - margin.bottom - yScale(item.value)}
                fill="#2563eb"
                onMouseEnter={() =>
                  setHoveredBar({
                    x: xPosition + barWidth / 2,
                    y: yScale(item.value),
                    value: item.value,
                  })
                }
                onMouseLeave={() => setHoveredBar(null)}
              />
            </motion.g>
          );
        })}

        {/* Add X-axis labels */}
        {data.map((item, index) => {
          const xPosition = margin.left + index * (barWidth * 2) + barWidth / 2;
          return (
            <text
              key={item.label}
              x={xPosition}
              y={height - margin.bottom + 15}
              textAnchor="middle"
              fontSize="12"
              fill="black"
            >
              {item.label}
            </text>
          );
        })}

        {/* Tooltip on Hover */}
        {hoveredBar && (
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <rect
              x={hoveredBar.x - 20}
              y={hoveredBar.y - 30}
              width={40}
              height={20}
              fill="rgba(0, 0, 0, 0.7)"
              rx={5}
            />
            <text
              x={hoveredBar.x}
              y={hoveredBar.y - 15}
              textAnchor="middle"
              fontSize="12"
              fill="white"
            >
              {hoveredBar.value}
            </text>
          </motion.g>
        )}
      </svg>
    </div>
  );
}

// Example Usage with Mock Data
const exampleData: InteractiveBarChartData[] = [
  { label: "Jan", value: 120 },
  { label: "Feb", value: 200 },
  { label: "Mar", value: 150 },
  { label: "Apr", value: 250 },
  { label: "May", value: 180 },
  { label: "Jun", value: 300 },
  { label: "Jul", value: 220 },
];

export function Component() {
  return <InteractiveBarChart data={exampleData} />;
}
