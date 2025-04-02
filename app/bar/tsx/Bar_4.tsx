"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

type GroupedBarChartConfig = {
  [key: string]: {
    label: string;
    color: string;
  };
};

type GroupedBarChartProps = {
  data: { [key: string]: string | number }[];
  config: GroupedBarChartConfig;
  className?: string;
};

export function GroupedBarChart({
  data,
  config,
  className,
}: GroupedBarChartProps) {
  const [hoveredBar, setHoveredBar] = useState<{ key: string; index: number } | null>(null);

  const width = 600;
  const height = 400;
  const margin = { top: 20, right: 20, bottom: 50, left: 50 };

  const keys = Object.keys(config);
  const groupWidth = 50; // Width of each bar group
  const barSpacing = 8; // Space between bars in a group
  const totalBarWidth = groupWidth / keys.length - barSpacing; // Adjust the individual bar width within the group

  const maxValue = Math.max(
    ...data.map((item) =>
      keys.reduce((sum, key) => sum + Number(item[key] || 0), 0)
    )
  );

  const xScale = (index: number) =>
    margin.left + index * ((width - margin.left - margin.right) / data.length);
  const yScale = (value: number) =>
    height - margin.bottom - (value / maxValue) * (height - margin.top - margin.bottom);

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
          x={xScale(index) + groupWidth / 2}
          y={height - margin.bottom + 20}
          textAnchor="middle"
          fontSize="12"
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

      {/* Grouped Bars */}
      {data.map((item, index) => {
        return keys.map((key, keyIndex) => {
          const barHeight = (Number(item[key] || 0) / maxValue) * (height - margin.top - margin.bottom);
          const xPosition = xScale(index) + keyIndex * (totalBarWidth + barSpacing);
          const yPosition = height - margin.bottom - barHeight;

          const isHovered =
            hoveredBar?.key === key && hoveredBar?.index === index;

          return (
            <g
              key={`${index}-${key}`}
              onMouseEnter={() => setHoveredBar({ key, index })}
              onMouseLeave={() => setHoveredBar(null)}
            >
              <motion.rect
                x={xPosition}
                y={yPosition}
                width={totalBarWidth}
                height={barHeight}
                fill={isHovered ? "#ff0000" : config[key].color}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.3 }}
              />
              {isHovered && (
                <motion.text
                  x={xPosition + totalBarWidth / 2}
                  y={yPosition - 10}
                  textAnchor="middle"
                  fontSize="12"
                  fill="#000"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {config[key].label}
                </motion.text>
              )}
            </g>
          );
        });
      })}
    </svg>
  );
}

// Example Usage
const exampleData = [
  { month: "January", desktop: 186, mobile: 80, tablet: 50 },
  { month: "February", desktop: 305, mobile: 200, tablet: 100 },
  { month: "March", desktop: 237, mobile: 120, tablet: 90 },
  { month: "April", desktop: 73, mobile: 190, tablet: 50 },
  { month: "May", desktop: 209, mobile: 130, tablet: 80 },
  { month: "June", desktop: 214, mobile: 140, tablet: 110 },
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
  tablet: {
    label: "Tablet",
    color: "#34d399",
  },
} satisfies GroupedBarChartConfig;

export function Component() {
  return <GroupedBarChart data={exampleData} config={exampleConfig} className="" />;
};
