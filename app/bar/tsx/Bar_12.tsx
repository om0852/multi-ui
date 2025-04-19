"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

type SparklineProps = {
  data: number[];
  color?: string;
  width?: number;
  height?: number;
  strokeWidth?: number;
  className?: string;
};

export function Sparkline({
  data,
  color = "#2563eb",
  width = 100,
  height = 30,
  strokeWidth = 2,
  className = "",
}: SparklineProps) {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const maxValue = Math.max(...data);
  const minValue = Math.min(...data);

  const xScale = (index: number) => (index / (data.length - 1)) * width;
  const yScale = (value: number) => height - ((value - minValue) / (maxValue - minValue)) * height;

  return (
    <svg
      className={`w-full ${className}`}
      viewBox={`0 0 ${width} ${height}`}
      style={{ overflow: "visible" }}
    >
      {/* Line Path */}
      <motion.path
        d={`M${data
          .map((value, index) => `${xScale(index)},${yScale(value)}`)
          .join(" L")}`}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.5 }}
      />

      {/* Points */}
      {data.map((value, index) => (
        <g
          key={index}
          onMouseEnter={() => setHoverIndex(index)}
          onMouseLeave={() => setHoverIndex(null)}
        >
          <motion.circle
            cx={xScale(index)}
            cy={yScale(value)}
            r={hoverIndex === index ? 4 : 2}
            fill={color}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          />
          {hoverIndex === index && (
            <motion.text
              x={xScale(index)}
              y={yScale(value) - 10}
              textAnchor="middle"
              fontSize="10"
              fill="#000"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              {value}
            </motion.text>
          )}
        </g>
      ))}
    </svg>
  );
}

// Example Usage
const exampleData = [10, 15, 8, 12, 20, 18, 25];

export function Component() {
  return <Sparkline data={exampleData} color="#34d399" width={200} height={50} strokeWidth={2} className="" />;
}
