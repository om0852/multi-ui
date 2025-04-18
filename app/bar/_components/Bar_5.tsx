"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

// Types for 3D Bar Chart
type ThreeDBarChartData = {
  month: string;
  value: number;
};

type ThreeDBarChartProps = {
  data: ThreeDBarChartData[];
};

export function ThreeDBarChart({ data }: ThreeDBarChartProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setDimensions({ width, height });
      }
    };

    // Initial measurement
    updateDimensions();

    // Add resize listener
    window.addEventListener('resize', updateDimensions);

    // Cleanup
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const maxValue = Math.max(...data.map((item) => item.value));

  // Calculate responsive dimensions
  const margin = {
    top: dimensions.height * 0.1,
    right: dimensions.width * 0.1,
    bottom: dimensions.height * 0.15,
    left: dimensions.width * 0.15
  };

  const chartWidth = dimensions.width - margin.left - margin.right;
  const chartHeight = dimensions.height - margin.top - margin.bottom;
  const barWidth = Math.min(chartWidth / (data.length * 2), 50); // Responsive bar width
  const barSpacing = barWidth * 1.6; // Space between bars

  return (
    <div ref={containerRef} className="w-full h-full">
      <svg
        className="w-full h-full"
        viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Y-Axis */}
        <line
          x1={margin.left}
          y1={margin.top}
          x2={margin.left}
          y2={dimensions.height - margin.bottom}
          stroke="black"
          strokeWidth={2}
        />
        {/* X-Axis */}
        <line
          x1={margin.left}
          y1={dimensions.height - margin.bottom}
          x2={dimensions.width - margin.right}
          y2={dimensions.height - margin.bottom}
          stroke="black"
          strokeWidth={2}
        />

        {/* Bars with 3D Effect */}
        {dimensions.width > 0 && data.map((item, index) => {
          const barHeight = (item.value / maxValue) * chartHeight;
          const xPosition = margin.left + index * barSpacing;
          const isHovered = hoveredIndex === index;

          return (
            <motion.g
              key={item.month}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* 3D Bar Effect Animation */}
              <motion.rect
                x={xPosition}
                y={dimensions.height - margin.bottom - barHeight}
                width={barWidth}
                height={barHeight}
                fill="#2563eb"
                style={{
                  transform: isHovered
                    ? "perspective(300px) rotateX(-30deg) rotateY(30deg)"
                    : "perspective(300px)",
                }}
                transition={{ duration: 0.3 }}
              />
              {isHovered && (
                <motion.text
                  x={xPosition + barWidth / 2}
                  y={dimensions.height - margin.bottom - barHeight - 10}
                  textAnchor="middle"
                  fontSize={Math.min(dimensions.width * 0.02, 12)}
                  fill="black"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.value}
                </motion.text>
              )}
            </motion.g>
          );
        })}

        {/* Y-Axis Labels */}
        {Array.from({ length: 5 }).map((_, idx) => {
          const yValue = Math.round((maxValue / 5) * (idx + 1));
          const yPosition = dimensions.height - margin.bottom - (yValue / maxValue) * chartHeight;

          return (
            <text
              key={idx}
              x={margin.left - 10}
              y={yPosition}
              textAnchor="end"
              fontSize={Math.min(dimensions.width * 0.02, 12)}
              fill="black"
            >
              {yValue}
            </text>
          );
        })}

        {/* X-Axis Labels */}
        {data.map((item, index) => {
          const xPosition = margin.left + index * barSpacing;
          return (
            <text
              key={item.month}
              x={xPosition + barWidth / 2}
              y={dimensions.height - margin.bottom + 20}
              textAnchor="middle"
              fontSize={Math.min(dimensions.width * 0.02, 12)}
              fill="black"
            >
              {item.month}
            </text>
          );
        })}
      </svg>
    </div>
  );
}

// Example Usage
const exampleData = [
  { month: "January", value: 200 },
  { month: "February", value: 300 },
  { month: "March", value: 250 },
  { month: "April", value: 100 },
  { month: "May", value: 400 },
  { month: "June", value: 300 },
];

export function Component() {
  return <ThreeDBarChart data={exampleData} />;
}
