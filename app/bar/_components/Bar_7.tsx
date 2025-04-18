"use client";

import React, { useState, useRef, useEffect } from "react";
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
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setDimensions({ width, height });
        setIsMobile(window.innerWidth < 640);
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Calculate responsive sizes
  const getResponsiveSizes = () => {
    const baseSize = Math.min(dimensions.width * 0.03, 16);
    return {
      fontSize: Math.max(12, baseSize),
      barHeight: isMobile ? 16 : 24,
      tooltipOffset: isMobile ? 24 : 32,
      marginBottom: isMobile ? 16 : 24
    };
  };

  const { fontSize, barHeight, tooltipOffset, marginBottom } = getResponsiveSizes();

  return (
    <div 
      ref={containerRef} 
      className="w-full max-w-[800px] mx-auto px-3 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8"
    >
      {/* Map through each progress bar */}
      {data.map((item, index) => (
        <div
          key={item.label}
          className="relative"
          style={{ marginBottom: index === data.length - 1 ? 0 : marginBottom }}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          onTouchStart={() => setHoveredIndex(index)}
          onTouchEnd={() => setHoveredIndex(null)}
        >
          {/* Label and value row */}
          <div className="flex justify-between items-center mb-1.5 sm:mb-2">
            <p 
              className="font-medium truncate mr-2"
              style={{ fontSize: `${fontSize}px` }}
            >
              {item.label}
            </p>
            <p 
              className="text-gray-600 whitespace-nowrap"
              style={{ fontSize: `${fontSize}px` }}
            >
              {item.value}%
            </p>
          </div>

          {/* Progress bar container */}
          <div 
            className="bg-gray-200 rounded-full overflow-hidden w-full relative"
            style={{ height: barHeight }}
          >
            {/* Animated progress bar */}
            <motion.div
              className="h-full bg-blue-500"
              initial={{ width: 0 }}
              animate={{ width: `${item.value}%` }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />

            {/* Tooltip */}
            {hoveredIndex === index && (
              <motion.div
                className="absolute top-0 pointer-events-none"
                style={{
                  left: `${item.value}%`,
                  transform: `translateX(-50%) translateY(-${tooltipOffset}px)`,
                }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                <div 
                  className="bg-blue-600 text-white px-2 py-1 rounded shadow-lg whitespace-nowrap"
                  style={{ fontSize: `${fontSize}px` }}
                >
                  {item.value}%
                </div>
                {/* Tooltip arrow */}
                <div 
                  className="w-0 h-0 mx-auto"
                  style={{
                    borderLeft: '6px solid transparent',
                    borderRight: '6px solid transparent',
                    borderTop: '6px solid #2563eb'
                  }}
                />
              </motion.div>
            )}
          </div>
        </div>
      ))}
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
}
