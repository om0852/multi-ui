"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

type AnimatedBarChartConfig = {
  [key: string]: {
    label: string;
    color: string;
  };
};

type AnimatedBarChartProps = {
  data: { [key: string]: string | number }[];
  config: AnimatedBarChartConfig;
  className?: string;
};

export function AnimatedHorizontalBarChart({
  data,
  config,
  className,
}: AnimatedBarChartProps) {
  const [hoveredBar, setHoveredBar] = useState<{ key: string; index: number } | null>(null);

  const width = 600;
  const height = 400;
  const margin = { top: 20, right: 50, bottom: 20, left: 100 };

  const keys = Object.keys(config);
  const maxValue = Math.max(
    ...data.flatMap((item) => keys.map((key) => Number(item[key] || 0)))
  );

  const yScale = (index: number) =>
    margin.top + index * ((height - margin.top - margin.bottom) / data.length);
  const xScale = (value: number) =>
    margin.left + (value / maxValue) * (width - margin.left - margin.right);
  const barHeight = (height - margin.top - margin.bottom) / (data.length * keys.length);

  return (
    <svg className={`w-full ${className}`} viewBox={`0 0 ${width} ${height}`}>
      {/* X and Y Axes */}
      <line
        x1={margin.left}
        y1={margin.top}
        x2={margin.left}
        y2={height - margin.bottom}
        stroke="black"
      />
      <line
        x1={margin.left}
        y1={height - margin.bottom}
        x2={width - margin.right}
        y2={height - margin.bottom}
        stroke="black"
      />

      {/* Labels and Grid Lines */}
      {Array.from({ length: 5 }).map((_, i) => {
        const value = (maxValue / 5) * (i + 1);
        const x = xScale(value);
        return (
          <g key={i}>
            <line
              x1={x}
              y1={margin.top}
              x2={x}
              y2={height - margin.bottom}
              stroke="#ccc"
              strokeDasharray="4 2"
            />
            <text x={x} y={height - margin.bottom + 15} fontSize="12" textAnchor="middle">
              {Math.round(value)}
            </text>
          </g>
        );
      })}

      {data.map((item, index) => (
        <text
          key={index}
          x={margin.left - 10}
          y={yScale(index) + (keys.length * barHeight) / 2}
          textAnchor="end"
          fontSize="12"
        >
          {item["month"]}
        </text>
      ))}

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
              <motion.rect
                x={margin.left}
                y={yScale(index) + keyIndex * barHeight}
                width={xScale(value) - margin.left}
                height={barHeight - 4}
                fill={config[key].color}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5 }}
                transform={`translate(${margin.left}, 0) scaleX(1)`}
              />
              {isHovered && (
                <motion.text
                  x={xScale(value) + 10}
                  y={yScale(index) + keyIndex * barHeight + barHeight / 2}
                  textAnchor="start"
                  fontSize="12"
                  fill="#000"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {config[key].label}
                </motion.text>
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
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
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
} satisfies AnimatedBarChartConfig;

export function Component() {
  return (
    <AnimatedHorizontalBarChart data={exampleData} config={exampleConfig} className="" />
  );
}
