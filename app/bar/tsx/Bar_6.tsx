"use client";

import React, { useState, useEffect, useRef } from "react";
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
  const [dimensions, setDimensions] = useState({ width: 700, height: 400 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width } = containerRef.current.getBoundingClientRect();
        const height = Math.max(400, width * 0.6); // Maintain aspect ratio with min height
        setDimensions({ width, height });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const maxValue = Math.max(
    ...data.map((item) => Math.max(item.male, item.female))
  );

  // Calculate responsive dimensions
  const margin = {
    top: dimensions.height * 0.1,
    bottom: dimensions.height * 0.1,
  };
  const chartHeight = dimensions.height - margin.top - margin.bottom;
  const barHeight = Math.min((chartHeight / data.length) * 0.7, 30);
  const spacing = (chartHeight / data.length);
  const centerX = dimensions.width / 2;
  const maxBarWidth = Math.min(dimensions.width * 0.4, 150); // Max bar width relative to container

  return (
    <div ref={containerRef} className="w-full h-full min-w-[300px]">
      <svg
        className="w-full h-full"
        viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Y-Axis */}
        <line
          x1={centerX}
          y1={margin.top}
          x2={centerX}
          y2={dimensions.height - margin.bottom}
          stroke="black"
          strokeWidth={2}
        />

        {/* Bars */}
        {data.map((item, index) => {
          const barWidthMale = (item.male / maxValue) * maxBarWidth;
          const barWidthFemale = (item.female / maxValue) * maxBarWidth;
          const yPosition = margin.top + index * spacing;
          const fontSize = Math.min(dimensions.width * 0.02, 12);

          return (
            <motion.g
              key={item.ageGroup}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Male side bar */}
              <motion.rect
                x={centerX - barWidthMale}
                y={yPosition}
                width={barWidthMale}
                height={barHeight}
                fill="#2563eb"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
              {hoveredIndex === index && (
                <motion.text
                  x={centerX - barWidthMale - 5}
                  y={yPosition + barHeight / 2}
                  textAnchor="end"
                  fontSize={fontSize}
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
                x={centerX}
                y={yPosition}
                width={barWidthFemale}
                height={barHeight}
                fill="#60a5fa"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
              {hoveredIndex === index && (
                <motion.text
                  x={centerX + barWidthFemale + 5}
                  y={yPosition + barHeight / 2}
                  fontSize={fontSize}
                  fill="black"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.female}
                </motion.text>
              )}

              {/* Age Group Labels */}
              <text
                x={centerX}
                y={yPosition + barHeight / 2}
                textAnchor="middle"
                fontSize={fontSize}
                fill="black"
                dy="0.3em"
              >
                {item.ageGroup}
              </text>
            </motion.g>
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
