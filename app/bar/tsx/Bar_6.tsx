"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

// Types for Population Pyramid
type PopulationData = {
  ageGroup: string;
  male: number;
  female: number;
};

type PopulationPyramidProps = {
  data: PopulationData[];
};

export function PopulationPyramid({ data }: PopulationPyramidProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const maxValue = Math.max(
    ...data.map((item) => Math.max(item.male, item.female))
  );

  return (
    <div className="relative w-[700px] h-[400px] mx-auto pt-10">
      {/* Main SVG for Population Pyramid */}
      <svg
        className="w-full h-full"
        viewBox="0 0 700 400"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Y-Axis */}
        <line
          x1={350}
          y1={50}
          x2={350}
          y2={350}
          stroke="black"
          strokeWidth={2}
        />

        {/* Bars */}
        {data.map((item, index) => {
          const barWidthMale = (item.male / maxValue) * 150; // Scale the bar width for males
          const barWidthFemale = (item.female / maxValue) * 150; // Scale the bar width for females
          const yPosition = 50 + index * 50; // Vertical space between age groups

          return (
            <motion.g
              key={item.ageGroup}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Male side bar */}
              <motion.rect
                x={350 - barWidthMale}
                y={yPosition}
                width={barWidthMale}
                height={30}
                fill="#2563eb"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
              {hoveredIndex === index && (
                <motion.text
                  x={350 - barWidthMale - 5}
                  y={yPosition + 15}
                  textAnchor="end"
                  fontSize={12}
                  fill="black"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.male}
                </motion.text>
              )}

              {/* Female side bar */}
              <motion.rect
                x={350}
                y={yPosition}
                width={barWidthFemale}
                height={30}
                fill="#60a5fa"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
              {hoveredIndex === index && (
                <motion.text
                  x={350 + barWidthFemale + 5}
                  y={yPosition + 15}
                  textAnchor="start"
                  fontSize={12}
                  fill="black"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.female}
                </motion.text>
              )}
            </motion.g>
          );
        })}

        {/* Age Group Labels */}
        {data.map((item, index) => {
          const yPosition = 50 + index * 50;

          return (
            <text
              key={item.ageGroup}
              x={350}
              y={yPosition + 20}
              textAnchor="middle"
              fontSize={12}
              fill="black"
            >
              {item.ageGroup}
            </text>
          );
        })}
      </svg>
    </div>
  );
}

// Example Usage
const exampleData = [
  { ageGroup: "0-4", male: 500, female: 480 },
  { ageGroup: "5-9", male: 520, female: 500 },
  { ageGroup: "10-14", male: 540, female: 510 },
  { ageGroup: "15-19", male: 480, female: 460 },
  { ageGroup: "20-24", male: 450, female: 470 },
  { ageGroup: "25-29", male: 400, female: 420 },
  { ageGroup: "30-34", male: 420, female: 440 },
  { ageGroup: "35-39", male: 410, female: 400 },
  { ageGroup: "40-44", male: 390, female: 400 },
  { ageGroup: "45-49", male: 380, female: 370 },
  { ageGroup: "50-54", male: 360, female: 370 },
  { ageGroup: "55-59", male: 340, female: 350 },
  { ageGroup: "60-64", male: 320, female: 330 },
  { ageGroup: "65+", male: 300, female: 310 },
];

export function Component() {
  return <PopulationPyramid data={exampleData} />;
}
