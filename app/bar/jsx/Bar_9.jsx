"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function OverlappingBarChart({ data }) {
  const width = 700;
  const height = 400;
  const margin = { top: 20, right: 30, bottom: 70, left: 60 };

  const maxValue = Math.max(...data.flatMap((item) => [item.groupA, item.groupB]));

  const yScale = (value) => height - margin.bottom - (value / maxValue) * (height - margin.top - margin.bottom);

  const barWidth = 20;
  const [hoveredBar, setHoveredBar] = useState(null);

  return (
    <div className="w-full max-w-[700px] mx-auto pt-10">
      <svg className="w-full" viewBox={`0 0 ${width} ${height}`}>
        <line x1={margin.left} y1={height - margin.bottom} x2={width - margin.right} y2={height - margin.bottom} stroke="black" />
        <line x1={margin.left} y1={margin.top} x2={margin.left} y2={height - margin.bottom} stroke="black" />

        {Array.from({ length: 6 }).map((_, i) => {
          const value = Math.round((maxValue / 5) * i);
          const yPos = yScale(value);

          return (
            <text key={i} x={margin.left - 10} y={yPos} textAnchor="end" fontSize="12">
              {value}
            </text>
          );
        })}

        {data.map((item, index) => (
          <text key={index} x={margin.left + index * 40 + 10} y={height - margin.bottom + 20} textAnchor="middle" fontSize="12">
            {item.label}
          </text>
        ))}

        {data.map((item, index) => {
          const xPositionGroupA = margin.left + index * 40;
          const xPositionGroupB = xPositionGroupA + 10;

          return (
            <g key={index}>
              <motion.rect
                x={xPositionGroupA}
                y={yScale(item.groupA)}
                width={barWidth}
                height={height - margin.bottom - yScale(item.groupA)}
                fill="#2563eb"
                whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                onMouseEnter={() => setHoveredBar({ type: "groupA", value: item.groupA, x: xPositionGroupA + barWidth / 2, y: yScale(item.groupA) })}
                onMouseLeave={() => setHoveredBar(null)}
              />

              <motion.rect
                x={xPositionGroupB}
                y={yScale(item.groupB)}
                width={barWidth}
                height={height - margin.bottom - yScale(item.groupB)}
                fill="#60a5fa"
                whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                onMouseEnter={() => setHoveredBar({ type: "groupB", value: item.groupB, x: xPositionGroupB + barWidth / 2, y: yScale(item.groupB) })}
                onMouseLeave={() => setHoveredBar(null)}
              />

              <text x={xPositionGroupA + barWidth / 2} y={yScale(item.groupA) - 5} textAnchor="middle" fontSize="12" fill="#000">
                {item.groupA}
              </text>
              <text x={xPositionGroupB + barWidth / 2} y={yScale(item.groupB) - 5} textAnchor="middle" fontSize="12" fill="#000">
                {item.groupB}
              </text>
            </g>
          );
        })}

        {hoveredBar && (
          <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
            <rect x={hoveredBar.x - 20} y={hoveredBar.y - 25} width={40} height={20} fill="rgba(0, 0, 0, 0.7)" rx={5} />
            <text x={hoveredBar.x} y={hoveredBar.y - 10} textAnchor="middle" fontSize="12" fill="white">
              {hoveredBar.value}
            </text>
          </motion.g>
        )}
      </svg>
    </div>
  );
}

const exampleData = [
  { label: "Jan", groupA: 150, groupB: 100 },
  { label: "Feb", groupA: 200, groupB: 180 },
  { label: "Mar", groupA: 130, groupB: 120 },
  { label: "Apr", groupA: 180, groupB: 140 },
  { label: "May", groupA: 220, groupB: 160 },
];

export function Component() {
  return <OverlappingBarChart data={exampleData} />;
}
