"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

type WaterfallBarConfig = {
  [key: string]: {
    label: string;
    color: string;
    type: "increase" | "decrease" | "total";
  };
};

type WaterfallBarProps = {
  data: { [key: string]: string | number }[];
  config: WaterfallBarConfig;
  className?: string;
};

export function WaterfallBarChart({ data, config, className }: WaterfallBarProps) {
  const [hoveredBar, setHoveredBar] = useState<number | null>(null);

  const width = 800;
  const height = 400;
  const margin = { top: 20, right: 60, bottom: 40, left: 60 };

  const values = data.map((item) => Number(item.value || 0));
  const runningTotal = values.reduce((acc, val, i) => {
    const prev = i > 0 ? acc[i - 1] : 0;
    acc.push(prev + val);
    return acc;
  }, [] as number[]);

  const maxValue = Math.max(...runningTotal, 0);
  const minValue = Math.min(...runningTotal, 0);
  const range = maxValue - minValue;

  const xScale = (index: number) =>
    margin.left + index * ((width - margin.left - margin.right) / data.length);
  const yScale = (value: number) =>
    height - margin.bottom - ((value - minValue) / range) * (height - margin.top - margin.bottom);
  const barWidth = ((width - margin.left - margin.right) / data.length) * 0.6;

  return (
    <div className="bg-white p-4 rounded-lg">
      <svg className={`w-full ${className}`} viewBox={`0 0 ${width} ${height}`}>
        {/* Grid Lines */}
        {Array.from({ length: 5 }).map((_, i) => {
          const value = minValue + (range / 5) * (i + 1);
          const y = yScale(value);
          return (
            <g key={i}>
              <line
                x1={margin.left}
                y1={y}
                x2={width - margin.right}
                y2={y}
                stroke="#e2e8f0"
                strokeWidth="1"
                strokeDasharray="4 2"
              />
              <text x={margin.left - 10} y={y} fontSize="12" textAnchor="end" fill="#64748b">
                {Math.round(value)}
              </text>
            </g>
          );
        })}

        {/* Bars */}
        {data.map((item, index) => {
          const value = Number(item.value || 0);
          const start = index > 0 ? runningTotal[index - 1] : 0;
          const end = runningTotal[index];
          const y1 = yScale(Math.max(start, end));
          const y2 = yScale(Math.min(start, end));
          const isHovered = hoveredBar === index;

          return (
            <g key={index}>
              <motion.rect
                x={xScale(index) - barWidth / 2}
                y={y1}
                width={barWidth}
                height={Math.abs(y2 - y1)}
                fill={config[item.type as keyof WaterfallBarConfig].color}
                onMouseEnter={() => setHoveredBar(index)}
                onMouseLeave={() => setHoveredBar(null)}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              />
              {isHovered && (
                <motion.g
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <rect
                    x={xScale(index) - 45}
                    y={y1 - 30}
                    width="90"
                    height="24"
                    fill="white"
                    rx="4"
                    filter="drop-shadow(0 1px 2px rgb(0 0 0 / 0.1))"
                  />
                  <text
                    x={xScale(index)}
                    y={y1 - 14}
                    fontSize="12"
                    textAnchor="middle"
                    fill="#1e293b"
                  >
                    {`${item.label}: ${value}`}
                  </text>
                </motion.g>
              )}
            </g>
          );
        })}

        {/* X-axis labels */}
        {data.map((item, index) => (
          <text
            key={index}
            x={xScale(index)}
            y={height - margin.bottom + 20}
            fontSize="12"
            textAnchor="middle"
            fill="#64748b"
          >
            {item.label}
          </text>
        ))}
      </svg>
    </div>
  );
}

// Example Usage
const exampleData = [
  { label: "Start", value: 1000, type: "total" },
  { label: "Sales", value: 500, type: "increase" },
  { label: "Refunds", value: -200, type: "decrease" },
  { label: "Fees", value: -100, type: "decrease" },
  { label: "End", value: 1200, type: "total" },
];

const exampleConfig = {
  increase: {
    label: "Increase",
    color: "#10b981",
    type: "increase",
  },
  decrease: {
    label: "Decrease",
    color: "#ef4444",
    type: "decrease",
  },
  total: {
    label: "Total",
    color: "#3b82f6",
    type: "total",
  },
} satisfies WaterfallBarConfig;

export function Component() {
  return <WaterfallBarChart data={exampleData} config={exampleConfig} className="" />;
} 