"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

export default function ProgressBarChart({ data }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const barContainerRef = useRef(null);

  return (
    <div className="w-full max-w-[700px] mx-auto pt-10">
      {data.map((item, index) => (
        <div
          key={item.label}
          className="relative mb-4 cursor-pointer"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <p className="text-sm font-semibold mb-2">{item.label}</p>
          <div
            ref={barContainerRef}
            className="h-6 bg-gray-200 rounded-full overflow-hidden w-full relative"
          >
            <motion.div
              className="h-full bg-blue-500"
              initial={{ width: 0 }}
              animate={{ width: `${item.value}%` }}
              transition={{ duration: 0.8 }}
            />
            {hoveredIndex === index && (
              <motion.div
                className="absolute"
                style={{
                  right: `${100 - item.value}%`,
                  transform: "translateX(0)",
                  top: "-0px",
                  zIndex: 2000
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                <div className="bg-transparent text-white px-2 rounded-md shadow-lg">
                  {item.value}%
                </div>
              </motion.div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

const exampleData = [
  { label: "Task 1", value: 75 },
  { label: "Task 2", value: 50 },
  { label: "Task 3", value: 90 },
  { label: "Task 4", value: 30 },
  { label: "Task 5", value: 60 },
];

export function Component() {
  return <ProgressBarChart data={exampleData} />;
}
