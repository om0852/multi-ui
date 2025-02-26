"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

type WaveBarChartConfig = {
  [key: string]: {
    label: string;
    color: string;
  };
};

type WaveBarChartProps = {
  data: { [key: string]: string | number }[];
  config: WaveBarChartConfig;
  className?: string;
};

export function WaveBarChart({ data, config, className }: WaveBarChartProps) {
  const [hoveredBar, setHoveredBar] = useState<{ key: string; index: number } | null>(null);

  const width = 600;
  const height = 400;
  const margin = { top: 20, right: 20, bottom: 50, left: 50 };

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
      <defs>
        {keys.map((key) => (
          <pattern
            key={key}
            id={`wave-${key}`}
            patternUnits="userSpaceOnUse"
            width="10"
            height="10"
            patternTransform="rotate(45)"
          >
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="10"
              stroke={config[key].color}
              strokeWidth="4"
            />
          </pattern>
        ))}
      </defs>

      {/* X and Y Axes */}
      <line
        x1={margin.left}
        y1={height - margin.bottom}
        x2={width - margin.right}
        y2={height - margin.bottom}
        stroke="black"
        strokeWidth="2"
      />
      <line
        x1={margin.left}
        y1={margin.top}
        x2={margin.left}
        y2={height - margin.bottom}
        stroke="black"
        strokeWidth="2"
      />

      {/* Labels and Grid Lines */}
      {data.map((item, index) => (
        <text
          key={index}
          x={xScale(index) + (keys.length * barWidth) / 2}
          y={height - margin.bottom + 20}
          textAnchor="middle"
          fontSize="12"
          fontWeight="bold"
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
              stroke="#e5e7eb"
              strokeWidth="1"
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
          const isHovered = hoveredBar?.key === key && hoveredBar?.index === index;

          return (
            <g
              key={`${index}-${key}`}
              onMouseEnter={() => setHoveredBar({ key, index })}
              onMouseLeave={() => setHoveredBar(null)}
            >
              <motion.rect
                x={xScale(index) + keyIndex * barWidth}
                y={yScale(value)}
                width={barWidth - 4}
                height={height - margin.bottom - yScale(value)}
                fill={`url(#wave-${key})`}
                stroke={config[key].color}
                strokeWidth="1"
                initial={{ opacity: 0, y: height }}
                animate={{ opacity: 1, y: yScale(value) }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                rx={4}
                ry={4}
              />
              {isHovered && (
                <motion.g
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <rect
                    x={xScale(index) + keyIndex * barWidth + (barWidth - 4) / 2 - 40}
                    y={yScale(value) - 35}
                    width="80"
                    height="25"
                    fill="white"
                    stroke={config[key].color}
                    strokeWidth="1"
                    rx="4"
                  />
                  <text
                    x={xScale(index) + keyIndex * barWidth + (barWidth - 4) / 2}
                    y={yScale(value) - 18}
                    textAnchor="middle"
                    fontSize="12"
                    fill={config[key].color}
                    fontWeight="bold"
                  >
                    {`${config[key].label}: ${value}`}
                  </text>
                </motion.g>
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
  { month: "Jan", sales: 150, profit: 50 },
  { month: "Feb", sales: 220, profit: 70 },
  { month: "Mar", sales: 180, profit: 55 },
  { month: "Apr", sales: 280, profit: 90 },
  { month: "May", sales: 260, profit: 85 },
  { month: "Jun", sales: 300, profit: 100 },
];

const exampleConfig = {
  sales: {
    label: "Sales",
    color: "#3b82f6",
  },
  profit: {
    label: "Profit",
    color: "#10b981",
  },
} satisfies WaveBarChartConfig;

export function Component() {
  return <WaveBarChart data={exampleData} config={exampleConfig} className="" />;
} 