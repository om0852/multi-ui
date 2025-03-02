"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

type StackedPercentBarConfig = {
  [key: string]: {
    label: string;
    color: string;
  };
};

type StackedPercentBarProps = {
  data: { [key: string]: string | number }[];
  config: StackedPercentBarConfig;
  className?: string;
};

export function StackedPercentBar({ data, config, className }: StackedPercentBarProps) {
  const [hoveredSegment, setHoveredSegment] = useState<{ key: string; index: number } | null>(null);

  const width = 800;
  const height = 400;
  const margin = { top: 30, right: 120, bottom: 40, left: 60 };

  const keys = Object.keys(config);

  // Calculate percentages for each stack
  const percentages = data.map(item => {
    const total = keys.reduce((sum, key) => sum + Number(item[key] || 0), 0);
    return keys.reduce((acc, key) => {
      acc[key] = (Number(item[key] || 0) / total) * 100;
      return acc;
    }, {} as { [key: string]: number });
  });

  const xScale = (index: number) =>
    margin.left + index * ((width - margin.left - margin.right) / data.length);
  const barWidth = ((width - margin.left - margin.right) / data.length) * 0.8;

  return (
    <div className="bg-white p-4 rounded-lg">
      <svg className={`w-full ${className}`} viewBox={`0 0 ${width} ${height}`}>
        {/* Y-axis labels */}
        {[0, 25, 50, 75, 100].map((value) => {
          const y = margin.top + ((height - margin.top - margin.bottom) * (100 - value)) / 100;
          return (
            <g key={value}>
              <line
                x1={margin.left}
                y1={y}
                x2={width - margin.right}
                y2={y}
                stroke="#e2e8f0"
                strokeWidth="1"
              />
              <text
                x={margin.left - 10}
                y={y + 5}
                fontSize="12"
                textAnchor="end"
                fill="#64748b"
              >
                {`${value}%`}
              </text>
            </g>
          );
        })}

        {/* Stacked Bars */}
        {data.map((item, index) => {
          let cumulative = 0;
          return (
            <g key={index}>
              {keys.map((key) => {
                const percentage = percentages[index][key];
                const height = ((400 - margin.top - margin.bottom) * percentage) / 100;
                const y = margin.top + ((400 - margin.top - margin.bottom) * (100 - cumulative - percentage)) / 100;
                const isHovered = hoveredSegment?.key === key && hoveredSegment?.index === index;
                
                const segment = (
                  <g
                    key={key}
                    onMouseEnter={() => setHoveredSegment({ key, index })}
                    onMouseLeave={() => setHoveredSegment(null)}
                  >
                    <motion.rect
                      x={xScale(index)}
                      y={y}
                      width={barWidth}
                      height={height}
                      fill={config[key].color}
                      initial={{ opacity: 0, scaleY: 0 }}
                      animate={{ opacity: 1, scaleY: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      rx={4}
                    />
                    {isHovered && (
                      <motion.g
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        <rect
                          x={xScale(index) + barWidth + 10}
                          y={y - 10}
                          width={90}
                          height={24}
                          fill="white"
                          rx={4}
                          filter="drop-shadow(0 1px 2px rgb(0 0 0 / 0.1))"
                        />
                        <text
                          x={xScale(index) + barWidth + 55}
                          y={y + 6}
                          fontSize="12"
                          textAnchor="middle"
                          fill="#1e293b"
                        >
                          {`${config[key].label}: ${percentage.toFixed(1)}%`}
                        </text>
                      </motion.g>
                    )}
                  </g>
                );
                cumulative += percentage;
                return segment;
              })}
              <text
                x={xScale(index) + barWidth / 2}
                y={height - margin.bottom + 20}
                fontSize="12"
                textAnchor="middle"
                fill="#64748b"
              >
                {item.month}
              </text>
            </g>
          );
        })}

        {/* Legend */}
        <g transform={`translate(${width - margin.right + 20}, ${margin.top})`}>
          {keys.map((key, index) => (
            <g key={key} transform={`translate(0, ${index * 25})`}>
              <rect width="12" height="12" fill={config[key].color} rx="2" />
              <text x="20" y="10" fontSize="12" fill="#64748b">
                {config[key].label}
              </text>
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}

// Example Usage
const exampleData = [
  { month: "Jan", marketing: 30, sales: 45, development: 25 },
  { month: "Feb", marketing: 35, sales: 40, development: 25 },
  { month: "Mar", marketing: 25, sales: 45, development: 30 },
  { month: "Apr", marketing: 30, sales: 35, development: 35 },
  { month: "May", marketing: 20, sales: 45, development: 35 },
  { month: "Jun", marketing: 35, sales: 40, development: 25 },
];

const exampleConfig = {
  marketing: {
    label: "Marketing",
    color: "#3b82f6",
  },
  sales: {
    label: "Sales",
    color: "#10b981",
  },
  development: {
    label: "Development",
    color: "#f59e0b",
  },
} satisfies StackedPercentBarConfig;

export function Component() {
  return <StackedPercentBar data={exampleData} config={exampleConfig} className="" />;
} 