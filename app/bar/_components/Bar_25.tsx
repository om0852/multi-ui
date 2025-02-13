"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

type IsometricBarChartConfig = {
  [key: string]: {
    label: string;
    color: string;
    sideColor: string;
    topColor: string;
  };
};

type IsometricBarChartProps = {
  data: { [key: string]: string | number }[];
  config: IsometricBarChartConfig;
  className?: string;
};

export function IsometricBarChart({ data, config, className }: IsometricBarChartProps) {
  const [hoveredBar, setHoveredBar] = useState<{ key: string; index: number } | null>(null);

  const width = 800;
  const height = 500;
  const margin = { top: 40, right: 40, bottom: 60, left: 60 };

  const keys = Object.keys(config);
  const maxValue = Math.max(
    ...data.flatMap((item) => keys.map((key) => Number(item[key] || 0)))
  );

  const xScale = (index: number) =>
    margin.left + index * ((width - margin.left - margin.right) / data.length);
  const yScale = (value: number) =>
    height - margin.bottom - (value / maxValue) * (height - margin.top - margin.bottom);
  const barWidth = ((width - margin.left - margin.right) / (data.length * keys.length)) * 0.8;

  const createIsometricPath = (x: number, y: number, w: number, h: number, depth: number) => {
    const isoX = (x: number, y: number) => x - y * 0.5;
    const isoY = (x: number, y: number) => y * 0.866 + x * 0.289;

    // Front face
    const front = `M ${isoX(x, 0)} ${isoY(x, 0)}
                   L ${isoX(x + w, 0)} ${isoY(x + w, 0)}
                   L ${isoX(x + w, h)} ${isoY(x + w, h)}
                   L ${isoX(x, h)} ${isoY(x, h)} Z`;

    // Right side
    const right = `M ${isoX(x + w, 0)} ${isoY(x + w, 0)}
                   L ${isoX(x + w, h)} ${isoY(x + w, h)}
                   L ${isoX(x + w, h)} ${isoY(x + w, h) - depth}
                   L ${isoX(x + w, 0)} ${isoY(x + w, 0) - depth} Z`;

    // Top face
    const top = `M ${isoX(x, 0)} ${isoY(x, 0)}
                 L ${isoX(x + w, 0)} ${isoY(x + w, 0)}
                 L ${isoX(x + w, 0)} ${isoY(x + w, 0) - depth}
                 L ${isoX(x, 0)} ${isoY(x, 0) - depth} Z`;

    return { front, right, top };
  };

  return (
    <div className="bg-white p-4 rounded-lg">
      <svg className={`w-full ${className}`} viewBox={`0 0 ${width} ${height}`}>
        {/* Grid and Labels */}
        {Array.from({ length: 5 }).map((_, i) => {
          const value = (maxValue / 5) * (i + 1);
          const y = yScale(value);
          return (
            <g key={i} opacity={0.3}>
              <line
                x1={margin.left}
                y1={y}
                x2={width - margin.right}
                y2={y}
                stroke="#94a3b8"
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
            const barHeight = height - margin.bottom - yScale(value);
            const x = xScale(index) + keyIndex * barWidth;
            const y = yScale(value);
            const isHovered = hoveredBar?.key === key && hoveredBar?.index === index;
            const depth = 20;

            const paths = createIsometricPath(x, y, barWidth - 4, barHeight, depth);

            return (
              <g
                key={`${index}-${key}`}
                onMouseEnter={() => setHoveredBar({ key, index })}
                onMouseLeave={() => setHoveredBar(null)}
              >
                <motion.g
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <path d={paths.front} fill={config[key].color} />
                  <path d={paths.right} fill={config[key].sideColor} />
                  <path d={paths.top} fill={config[key].topColor} />
                </motion.g>

                {isHovered && (
                  <motion.g
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <rect
                      x={x - 20}
                      y={y - 30}
                      width="80"
                      height="20"
                      fill="white"
                      rx="4"
                      filter="drop-shadow(0 1px 2px rgb(0 0 0 / 0.1))"
                    />
                    <text
                      x={x + 20}
                      y={y - 16}
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
            x={xScale(index) + (keys.length * barWidth) / 2}
            y={height - margin.bottom + 20}
            textAnchor="middle"
            fontSize="12"
            fill="#475569"
          >
            {item["month"]}
          </text>
        ))}
      </svg>
    </div>
  );
}

// Example Usage
const exampleData = [
  { month: "Jan", revenue: 2500, profit: 1200 },
  { month: "Feb", revenue: 3200, profit: 1800 },
  { month: "Mar", revenue: 2800, profit: 1400 },
  { month: "Apr", revenue: 3800, profit: 2200 },
  { month: "May", revenue: 4200, profit: 2600 },
  { month: "Jun", revenue: 3600, profit: 2000 },
];

const exampleConfig = {
  revenue: {
    label: "Revenue",
    color: "#3b82f6",
    sideColor: "#2563eb",
    topColor: "#60a5fa",
  },
  profit: {
    label: "Profit",
    color: "#10b981",
    sideColor: "#059669",
    topColor: "#34d399",
  },
} satisfies IsometricBarChartConfig;

export function Component() {
  return <IsometricBarChart data={exampleData} config={exampleConfig} className="" />;
} 