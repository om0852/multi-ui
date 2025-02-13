"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

type BubbleBarConfig = {
  [key: string]: {
    label: string;
    color: string;
  };
};

type BubbleBarProps = {
  data: { [key: string]: string | number }[];
  config: BubbleBarConfig;
  className?: string;
};

export function BubbleBarChart({ data, config, className }: BubbleBarProps) {
  const [hoveredBubble, setHoveredBubble] = useState<{ key: string; index: number } | null>(null);

  const width = 800;
  const height = 400;
  const margin = { top: 20, right: 120, bottom: 40, left: 60 };

  const keys = Object.keys(config);
  const maxValue = Math.max(
    ...data.flatMap((item) => keys.map((key) => Number(item[key] || 0)))
  );

  const xScale = (index: number) =>
    margin.left + index * ((width - margin.left - margin.right) / data.length);
  const yScale = (value: number) =>
    height - margin.bottom - (value / maxValue) * (height - margin.top - margin.bottom);
  const bubbleSize = (value: number) => Math.max(20, (value / maxValue) * 60);

  return (
    <div className="bg-white p-4 rounded-lg">
      <svg className={`w-full ${className}`} viewBox={`0 0 ${width} ${height}`}>
        {/* Grid Lines */}
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

        {/* Bubbles */}
        {data.map((item, index) =>
          keys.map((key, keyIndex) => {
            const value = Number(item[key] || 0);
            const x = xScale(index) + keyIndex * 60;
            const y = yScale(value);
            const size = bubbleSize(value);
            const isHovered = hoveredBubble?.key === key && hoveredBubble?.index === index;

            return (
              <g key={`${index}-${key}`}>
                <motion.circle
                  cx={x}
                  cy={y}
                  r={size / 2}
                  fill={config[key].color}
                  fillOpacity={0.6}
                  stroke={config[key].color}
                  strokeWidth="2"
                  onMouseEnter={() => setHoveredBubble({ key, index })}
                  onMouseLeave={() => setHoveredBubble(null)}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                    delay: index * 0.1,
                  }}
                />
                {isHovered && (
                  <motion.g
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <rect
                      x={x - 45}
                      y={y - size - 30}
                      width="90"
                      height="24"
                      fill="white"
                      rx="4"
                      filter="drop-shadow(0 1px 2px rgb(0 0 0 / 0.1))"
                    />
                    <text
                      x={x}
                      y={y - size - 14}
                      fontSize="12"
                      textAnchor="middle"
                      fill="#1e293b"
                    >
                      {`${config[key].label}: ${value}`}
                    </text>
                  </motion.g>
                )}
              </g>
            );
          })
        )}

        {/* X-axis labels */}
        {data.map((item, index) => (
          <text
            key={index}
            x={xScale(index) + 30}
            y={height - margin.bottom + 20}
            fontSize="12"
            textAnchor="middle"
            fill="#64748b"
          >
            {item.month}
          </text>
        ))}

        {/* Legend */}
        <g transform={`translate(${width - 100}, 20)`}>
          {keys.map((key, index) => (
            <g key={key} transform={`translate(0, ${index * 25})`}>
              <circle r="6" fill={config[key].color} />
              <text x="15" y="4" fontSize="12" fill="#64748b">
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
  { month: "Jan", active: 800, new: 200 },
  { month: "Feb", active: 1000, new: 300 },
  { month: "Mar", active: 1200, new: 400 },
  { month: "Apr", active: 1100, new: 350 },
  { month: "May", active: 1300, new: 450 },
  { month: "Jun", active: 1500, new: 500 },
];

const exampleConfig = {
  active: {
    label: "Active Users",
    color: "#3b82f6",
  },
  new: {
    label: "New Users",
    color: "#10b981",
  },
} satisfies BubbleBarConfig;

export function Component() {
  return <BubbleBarChart data={exampleData} config={exampleConfig} className="" />;
} 