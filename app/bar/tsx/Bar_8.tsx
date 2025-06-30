"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

type OverlappingBarChartData = {
  label: string;
  groupA: number;
  groupB: number;
};

type OverlappingBarChartProps = {
  data: OverlappingBarChartData[];
};

export function OverlappingBarChart({ data ,...props}: OverlappingBarChartProps) {
  const [dimensions, setDimensions] = useState({ width: 700, height: 400 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width } = containerRef.current.getBoundingClientRect();
        const height = Math.max(300, width * 0.6); // Maintain aspect ratio with min height
        setDimensions({ width, height });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Calculate responsive margins
  const margin = {
    top: dimensions.height * 0.05,
    right: dimensions.width * 0.05,
    bottom: dimensions.height * 0.15,
    left: dimensions.width * 0.1
  };

  const maxValue = Math.max(
    ...data.flatMap((item) => [item.groupA, item.groupB])
  );

  const yScale = (value: number) =>
    dimensions.height - margin.bottom - (value / maxValue) * (dimensions.height - margin.top - margin.bottom);

  // Calculate responsive bar width and spacing
  const availableWidth = dimensions.width - margin.left - margin.right;
  const barSpacing = Math.min(availableWidth / (data.length * 2), 40);
  const barWidth = Math.min(barSpacing * 0.8, 20);

  // State for hover effect
  const [hoveredBar, setHoveredBar] = useState<{
    type: "groupA" | "groupB";
    value: number;
    x: number;
    y: number;
  } | null>(null);

  // Calculate responsive font size
  const fontSize = Math.min(dimensions.width * 0.02, 12);

  return (
    <div ref={containerRef} className="w-full h-full min-w-[300px]" {...props}>
      <svg
        className="w-full h-full"
        viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Draw Axes */}
        {/* X Axis */}
        <line
          x1={margin.left}
          y1={dimensions.height - margin.bottom}
          x2={dimensions.width - margin.right}
          y2={dimensions.height - margin.bottom}
          stroke="black"
          strokeWidth={1}
        />
        {/* Y Axis */}
        <line
          x1={margin.left}
          y1={margin.top}
          x2={margin.left}
          y2={dimensions.height - margin.bottom}
          stroke="black"
          strokeWidth={1}
        />

        {/* Draw Y-Axis Scale Labels */}
        {Array.from({ length: 6 }).map((_, i) => {
          const value = Math.round((maxValue / 5) * i);
          const yPos = yScale(value);

          return (
            <text
              key={i}
              x={margin.left - 5}
              y={yPos}
              textAnchor="end"
              alignmentBaseline="middle"
              fontSize={fontSize}
              fill="black"
            >
              {value}
            </text>
          );
        })}

        {/* Draw X-Axis Group Labels */}
        {data.map((item, index) => {
          const xPos = margin.left + index * (barSpacing * 2) + barSpacing;
          return (
            <text
              key={index}
              x={xPos}
              y={dimensions.height - margin.bottom + fontSize * 1.5}
              textAnchor="middle"
              fontSize={fontSize}
              fill="black"
              transform={`rotate(-45, ${xPos}, ${dimensions.height - margin.bottom + fontSize * 1.5})`}
            >
              {item.label}
            </text>
          );
        })}

        {/* Draw bars with overlapping effects */}
        {data.map((item, index) => {
          const xPositionBase = margin.left + index * (barSpacing * 2);
          const xPositionGroupA = xPositionBase + barSpacing - barWidth / 2;
          const xPositionGroupB = xPositionBase + barSpacing + barWidth / 2;

          return (
            <g key={index}>
              {/* Group A Bar */}
              <motion.rect
                x={xPositionGroupA}
                y={yScale(item.groupA)}
                width={barWidth}
                height={dimensions.height - margin.bottom - yScale(item.groupA)}
                fill="#2563eb"
                opacity={0.8}
                whileHover={{
                  opacity: 1,
                  scale: 1.1,
                  transition: { duration: 0.2 },
                }}
                onMouseEnter={() =>
                  setHoveredBar({
                    type: "groupA",
                    value: item.groupA,
                    x: xPositionGroupA + barWidth / 2,
                    y: yScale(item.groupA),
                  })
                }
                onMouseLeave={() => setHoveredBar(null)}
              />

              {/* Group B Bar */}
              <motion.rect
                x={xPositionGroupB}
                y={yScale(item.groupB)}
                width={barWidth}
                height={dimensions.height - margin.bottom - yScale(item.groupB)}
                fill="#60a5fa"
                opacity={0.8}
                whileHover={{
                  opacity: 1,
                  scale: 1.1,
                  transition: { duration: 0.2 },
                }}
                onMouseEnter={() =>
                  setHoveredBar({
                    type: "groupB",
                    value: item.groupB,
                    x: xPositionGroupB + barWidth / 2,
                    y: yScale(item.groupB),
                  })
                }
                onMouseLeave={() => setHoveredBar(null)}
              />
            </g>
          );
        })}

        {/* Hover Effect Tooltip */}
        {hoveredBar && (
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <rect
              x={hoveredBar.x - 25}
              y={hoveredBar.y - 25}
              width={50}
              height={20}
              fill="rgba(0, 0, 0, 0.8)"
              rx={4}
            />
            <text
              x={hoveredBar.x}
              y={hoveredBar.y - 12}
              textAnchor="middle"
              fontSize={fontSize}
              fill="white"
            >
              {hoveredBar.value}
            </text>
          </motion.g>
        )}

        {/* Legend */}
        <g transform={`translate(${margin.left}, ${margin.top - 10})`}>
          <rect width={12} height={12} fill="#2563eb" opacity={0.8} />
          <text x={16} y={10} fontSize={fontSize} fill="black">Group A</text>
          <rect x={70} width={12} height={12} fill="#60a5fa" opacity={0.8} />
          <text x={86} y={10} fontSize={fontSize} fill="black">Group B</text>
        </g>
      </svg>
    </div>
  );
}

// Example Usage
const exampleData = [
  { label: "Jan", groupA: 100, groupB: 80 },
  { label: "Feb", groupA: 120, groupB: 100 },
  { label: "Mar", groupA: 140, groupB: 120 },
  { label: "Apr", groupA: 90, groupB: 110 },
  { label: "May", groupA: 160, groupB: 140 },
  { label: "Jun", groupA: 130, groupB: 150 },
];

export function Component() {
  return <OverlappingBarChart data={exampleData} />;
}
