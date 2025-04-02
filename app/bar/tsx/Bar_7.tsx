"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

// Type for Progress Data
type ProgressData = {
  label: string;
  value: number; // Value of the progress in percentage (0 - 100)
};

type ProgressBarChartProps = {
  data: ProgressData[];
};

export function ProgressBarChart({ data }: ProgressBarChartProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const barContainerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="w-full max-w-[700px] mx-auto pt-10">
      {/* Map through each progress bar */}
      {data.map((item, index) => {
        return (
          <div
            key={item.label}
            className="relative mb-4 cursor-pointer"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Label for each progress bar */}
            <p className="text-sm font-semibold mb-2">{item.label}</p>

            {/* Progress bar container */}
            <div
              ref={barContainerRef}
              className="h-6 bg-gray-200 rounded-full overflow-hidden w-full relative"
            >
              {/* Animated progress bar */}
              <motion.div
                className="h-full bg-blue-500"
                initial={{ width: 0 }}
                animate={{ width: `${item.value}%` }}
                transition={{ duration: 0.8 }}
              />

              {/* Tooltip on hover */}
              {hoveredIndex === index && (
                <motion.div
                  className="absolute"
                  style={{
                    right: `${100 - item.value}%`, // Dynamically position tooltip
                    transform: "translateX(0)",
                    top: "-0px",
                    zIndex:2000
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="bg-transparent text-white px-2  rounded-md shadow-lg">
                    {item.value}%
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// Example usage data
const exampleData: ProgressData[] = [
  { label: "Task 1", value: 75 },
  { label: "Task 2", value: 50 },
  { label: "Task 3", value: 90 },
  { label: "Task 4", value: 30 },
  { label: "Task 5", value: 60 },
];

export function Component() {
  return <ProgressBarChart data={exampleData} />;
};
