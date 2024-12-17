"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface ScrollAreaProps {
  orientation: "vertical" | "horizontal" | "both";
  scrollbarThickness: number;
  thumbColor: string;
  trackColor: string;
  children: React.ReactNode;
}

const ScrollArea: React.FC<ScrollAreaProps> = ({
  orientation,
  scrollbarThickness,
  thumbColor,
  trackColor,
  children,
}) => {
  const overflowClasses =
    orientation === "vertical"
      ? "overflow-y-auto"
      : orientation === "horizontal"
      ? "overflow-x-auto"
      : "overflow-auto";

  return (
    <div
      className={`relative ${overflowClasses} rounded-lg border shadow-md`}
      style={{
        scrollbarWidth: "thin", // For Firefox
        scrollbarColor: `${thumbColor} ${trackColor}`,
      }}
    >
      <style jsx>{`
        ::-webkit-scrollbar {
          width: ${orientation === "vertical" || orientation === "both"
            ? `${scrollbarThickness}px`
            : "0"};
          height: ${orientation === "horizontal" || orientation === "both"
            ? `${scrollbarThickness}px`
            : "0"};
        }
        ::-webkit-scrollbar-track {
          background: ${trackColor};
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb {
          background: ${thumbColor};
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: ${thumbColor};
          opacity: 0.8;
        }
      `}</style>
      {children}
    </div>
  );
};

export function ScrollAreaDemo() {
  const [orientation, setOrientation] = useState<"vertical" | "horizontal" | "both">("horizontal");
  const [scrollbarThickness, setScrollbarThickness] = useState(8);
  const [thumbColor, setThumbColor] = useState("#4b5563"); // Tailwind: text-gray-600
  const [trackColor, setTrackColor] = useState("#f1f5f9"); // Tailwind: bg-gray-100

  const tags = Array.from({ length: 50 }).map(
    (_, i, a) => `Tag ${a.length - i}`
  );

  return (
    <div className="p-6 space-y-8">
      {/* Adjustment Controls */}
      <div className="flex flex-col space-y-4 p-4 bg-gray-100 rounded-lg border">
        <label className="flex items-center space-x-4">
          <span>Orientation:</span>
          <select
            className="p-2 border rounded-md"
            value={orientation}
            onChange={(e) =>
              setOrientation(e.target.value as "vertical" | "horizontal" | "both")
            }
          >
            <option value="vertical">Vertical</option>
            <option value="horizontal">Horizontal</option>
            <option value="both">Both</option>
          </select>
        </label>
        <label className="flex items-center space-x-4">
          <span>Scrollbar Thickness:</span>
          <input
            type="number"
            className="p-2 border rounded-md w-20"
            min="4"
            max="20"
            value={scrollbarThickness}
            onChange={(e) => setScrollbarThickness(Number(e.target.value))}
          />
        </label>
        <label className="flex items-center space-x-4">
          <span>Thumb Color:</span>
          <input
            type="color"
            className="p-1 rounded-md"
            value={thumbColor}
            onChange={(e) => setThumbColor(e.target.value)}
          />
        </label>
        <label className="flex items-center space-x-4">
          <span>Track Color:</span>
          <input
            type="color"
            className="p-1 rounded-md"
            value={trackColor}
            onChange={(e) => setTrackColor(e.target.value)}
          />
        </label>
      </div>

      {/* Scrollable Area with Animation */}
      <ScrollArea
        orientation={orientation}
        scrollbarThickness={scrollbarThickness}
        thumbColor={thumbColor}
        trackColor={trackColor}
      >
        <motion.div
          className="min-w-[800px] flex flex-row space-x-4 p-4"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {tags.map((tag, index) => (
            <motion.div
              key={index}
              className="bg-blue-100 text-blue-900 rounded-md px-3 py-1 shadow-md text-sm"
              whileHover={{
                scale: 1.1,
                backgroundColor: "#4b5563", // Tailwind: text-gray-600
                color: "#ffffff",
              }}
              transition={{ duration: 0.3 }}
            >
              {tag}
            </motion.div>
          ))}
        </motion.div>
      </ScrollArea>
    </div>
  );
}
