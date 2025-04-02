"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export function ThreeDBarChart({ data }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const maxValue = Math.max(...data.map((item) => item.value));

  return (
    <div className="relative w-[700px] h-[400px] mx-auto pt-10">
      <svg
        className="w-full h-full"
        viewBox="0 0 700 400"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1={100} y1={50} x2={100} y2={350} stroke="black" strokeWidth={2} />
        <line x1={100} y1={350} x2={650} y2={350} stroke="black" strokeWidth={2} />

        {data.map((item, index) => {
          const barHeight = (item.value / maxValue) * 200;
          const barWidth = 50;
          const xPosition = 100 + index * 80;

          const isHovered = hoveredIndex === index;

          return (
            <motion.g
              key={item.month}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <motion.rect
                x={xPosition}
                y={350 - barHeight}
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
                  y={350 - barHeight - 10}
                  textAnchor="middle"
                  fontSize={12}
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

        {Array.from({ length: 5 }).map((_, idx) => {
          const yValue = Math.round((maxValue / 5) * (idx + 1));
          const yPosition = 350 - (yValue / maxValue) * 200;

          return (
            <text key={idx} x={90} y={yPosition} textAnchor="middle" fontSize={12} fill="black">
              {yValue}
            </text>
          );
        })}

        {data.map((item, index) => {
          const xPosition = 100 + index * 80;
          return (
            <text key={item.month} x={xPosition + 25} y={365} textAnchor="middle" fontSize={12} fill="black">
              {item.month}
            </text>
          );
        })}
      </svg>
    </div>
  );
}

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
