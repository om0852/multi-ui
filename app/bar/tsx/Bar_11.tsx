"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

type AreaChartConfig = {
  [key: string]: {
    color: string;
    label: string;
  };
};

type AreaChartProps = {
  data: { [key: string]: string | number }[];
  config: AreaChartConfig;
  xKey: string;
  yKeys: string[];
  className?: string;
};

export function AreaChart({ data, config, xKey, yKeys, className ,...props}: AreaChartProps) {
  const [hoveredPoint, setHoveredPoint] = useState<{ key: string; index: number } | null>(null);

  const width = 600;
  const height = 400;
  const margin = { top: 20, right: 20, bottom: 50, left: 50 };

  const maxValue = Math.max(
    ...data.flatMap((item) => yKeys.map((key) => Number(item[key] || 0)))
  );

  const xScale = (index: number) =>
    margin.left + index * ((width - margin.left - margin.right) / (data.length - 1));
  const yScale = (value: number) =>
    height - margin.bottom - (value / maxValue) * (height - margin.top - margin.bottom);

  return (
    <svg className={`w-full ${className}`} viewBox={`0 0 ${width} ${height}`} {...props}>
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

      {/* X Axis Labels */}
      {data.map((item, index) => (
        <text
          key={index}
          x={xScale(index)}
          y={height - margin.bottom + 20}
          textAnchor="middle"
          fontSize="12"
        >
          {item[xKey]}
        </text>
      ))}

      {/* Grid Lines and Y Axis Labels */}
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

      {/* Area and Line Paths */}
      {yKeys.map((key) => (
        <g key={key}>
          <motion.path
            d={`M${data
              .map((item, index) => `${xScale(index)},${yScale(Number(item[key] || 0))}`)
              .join(" L")} L${xScale(data.length - 1)},${height - margin.bottom} L${xScale(0)},${height - margin.bottom} Z`}
            fill={config[key]?.color || "#000"}
            fillOpacity={0.3}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.path
            d={`M${data
              .map((item, index) => `${xScale(index)},${yScale(Number(item[key] || 0))}`)
              .join(" L")}`}
            fill="none"
            stroke={config[key]?.color || "#000"}
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5 }}
          />
        </g>
      ))}

      {/* Points */}
      {yKeys.map((key) =>
        data.map((item, index) => {
          const cx = xScale(index);
          const cy = yScale(Number(item[key] || 0));
          const isHovered = hoveredPoint?.key === key && hoveredPoint?.index === index;

          return (
            <g
              key={`${key}-${index}`}
              onMouseEnter={() => setHoveredPoint({ key, index })}
              onMouseLeave={() => setHoveredPoint(null)}
            >
              <motion.circle
                cx={cx}
                cy={cy}
                r={isHovered ? 6 : 4}
                fill={isHovered ? "#ff0000" : config[key]?.color || "#000"}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
              {isHovered && (
                <motion.text
                  x={cx}
                  y={cy - 20}
                  textAnchor="middle"
                  fontSize="12"
                  fill="#000"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {`${config[key]?.label}: ${item[key]}`}
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
  { month: "January", sales: 100, car: 200 },
  { month: "February", sales: 200, car: 300 },
  { month: "March", sales: 150, car: 400 },
  { month: "April", sales: 300, car: 300 },
  { month: "May", sales: 250, car: 500 },
];

const exampleConfig = {
  sales: {
    color: "#2563eb",
    label: "Sales",
  },
  car: {
    color: "#34d399",
    label: "Car",
  },
} satisfies AreaChartConfig;

export function Component() {
  return <AreaChart data={exampleData} config={exampleConfig} xKey="month" yKeys={["sales", "car"]} className="" />;
}
