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
      className={`relative ${overflowClasses} rounded-lg border shadow-lg bg-white/5 backdrop-blur-sm`}
      style={{
        scrollbarWidth: "thin",
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
          border-radius: 8px;
          margin: 4px;
          border: 2px solid transparent;
          background-clip: padding-box;
        }
        ::-webkit-scrollbar-thumb {
          background: ${thumbColor};
          border-radius: 8px;
          border: 2px solid transparent;
          background-clip: padding-box;
          transition: background-color 0.3s ease;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: ${thumbColor}dd;
        }
        ::-webkit-scrollbar-corner {
          background: transparent;
        }
      `}</style>
      {children}
    </div>
  );
};

export function ScrollAreaDemo() {
  const [orientation, setOrientation] = useState<"vertical" | "horizontal" | "both">("horizontal");
  const [scrollbarThickness, setScrollbarThickness] = useState(12);
  const [thumbColor, setThumbColor] = useState("#4b5563");
  const [trackColor, setTrackColor] = useState("#f1f5f9");

  const tags = Array.from({ length: 50 }).map(
    (_, i, a) => `Tag ${a.length - i}`
  );

  return (
    <div className="p-8 space-y-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl">
      {/* Controls Section */}
      <motion.div 
        className="flex flex-col space-y-6 p-6 bg-white rounded-xl shadow-lg border border-gray-100"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-xl font-semibold text-gray-800">Scrollbar Customization</h2>
        
        {/* Orientation Control */}
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-gray-600">Orientation:</label>
          <select
            className="p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            value={orientation}
            onChange={(e) =>
              setOrientation(e.target.value as "vertical" | "horizontal" | "both")
            }
          >
            <option value="vertical">Vertical</option>
            <option value="horizontal">Horizontal</option>
            <option value="both">Both</option>
          </select>
        </div>

        {/* Thickness Control */}
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-gray-600">
            Scrollbar Thickness: {scrollbarThickness}px
          </label>
          <input
            type="range"
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            min="8"
            max="20"
            value={scrollbarThickness}
            onChange={(e) => setScrollbarThickness(Number(e.target.value))}
          />
        </div>

        {/* Color Controls */}
        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-medium text-gray-600">Thumb Color:</label>
            <div className="flex items-center space-x-2">
              <input
                type="color"
                className="h-10 w-20 rounded cursor-pointer border border-gray-200"
                value={thumbColor}
                onChange={(e) => setThumbColor(e.target.value)}
              />
              <span className="text-sm text-gray-500">{thumbColor}</span>
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-medium text-gray-600">Track Color:</label>
            <div className="flex items-center space-x-2">
              <input
                type="color"
                className="h-10 w-20 rounded cursor-pointer border border-gray-200"
                value={trackColor}
                onChange={(e) => setTrackColor(e.target.value)}
              />
              <span className="text-sm text-gray-500">{trackColor}</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Scrollable Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <ScrollArea
          orientation={orientation}
          scrollbarThickness={scrollbarThickness}
          thumbColor={thumbColor}
          trackColor={trackColor}
        >
          <div 
            className={`min-w-[800px] flex flex-wrap gap-3 p-6 bg-white rounded-lg shadow-inner
              ${orientation === "vertical" ? "h-[400px] flex-col" : ""}
            `}
          >
            {tags.map((tag, index) => (
              <motion.div
                key={index}
                className="bg-blue-50 text-blue-600 rounded-lg px-4 py-2 shadow-sm hover:shadow-md transition-shadow"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#3b82f6",
                  color: "#ffffff",
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.2,
                  delay: index * 0.02,
                }}
              >
                {tag}
              </motion.div>
            ))}
          </div>
        </ScrollArea>
      </motion.div>
    </div>
  );
}
