"use client"
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
  // Determine overflow styles based on orientation
  const overflowClasses =
    orientation === "vertical"
      ? "overflow-y-auto"
      : orientation === "horizontal"
      ? "overflow-x-auto"
      : "overflow-auto";

  return (
    <div
      className={`relative ${overflowClasses} rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg`}
      style={{
        scrollbarWidth: "thin",
        scrollbarColor: `${thumbColor} ${trackColor}`,
      }}
    >
      {/* Custom Scrollbar Styles */}
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
          border-radius: 12px;
          margin: 4px;
          border: 3px solid transparent;
          background-clip: padding-box;
          box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.05);
        }
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom right, ${thumbColor}, ${thumbColor}dd);
          border-radius: 12px;
          border: 3px solid transparent;
          background-clip: padding-box;
          transition: all 0.3s ease;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom right, ${thumbColor}dd, ${thumbColor});
          box-shadow: 0 0 10px ${thumbColor}66;
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
  const [orientation, setOrientation] = useState<"vertical" | "horizontal" | "both">("both");
  const [scrollbarThickness, setScrollbarThickness] = useState(14);
  const [thumbColor, setThumbColor] = useState("#6366f1");
  const [trackColor, setTrackColor] = useState("#e0e7ff");

  const cards = Array.from({ length: 20 }).map((_, i) => ({
    title: `Card ${i + 1}`,
    description: `This is a sample description for card ${i + 1}. It contains some text to demonstrate scrolling.`,
  }));

  return (
    <div className="p-8 space-y-8 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl">
      {/* Controls Panel */}
      <motion.div 
        className="space-y-6 p-8 bg-white rounded-2xl shadow-xl border border-indigo-50"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            Scroll Area Settings
          </h2>
          <motion.div
            className="text-xs font-medium text-indigo-600 px-3 py-1 bg-indigo-50 rounded-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Customizable
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Orientation Control */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-gray-700">Scroll Direction</label>
            <select
              className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
              value={orientation}
              onChange={(e) => setOrientation(e.target.value as "vertical" | "horizontal" | "both")}
            >
              <option value="vertical">Vertical Only</option>
              <option value="horizontal">Horizontal Only</option>
              <option value="both">Both Directions</option>
            </select>
          </div>

          {/* Thickness Control */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-gray-700">
              Scrollbar Size: {scrollbarThickness}px
            </label>
            <div className="relative">
              <input
                type="range"
                className="w-full h-2 bg-indigo-100 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                min="10"
                max="24"
                value={scrollbarThickness}
                onChange={(e) => setScrollbarThickness(Number(e.target.value))}
              />
              <div className="absolute -bottom-6 left-0 right-0 flex justify-between text-xs text-gray-500">
                <span>10px</span>
                <span>24px</span>
              </div>
            </div>
          </div>

          {/* Color Controls */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-gray-700">Scrollbar Color</label>
            <div className="flex items-center space-x-3">
              <input
                type="color"
                className="h-10 w-20 rounded-lg cursor-pointer border border-gray-200"
                value={thumbColor}
                onChange={(e) => setThumbColor(e.target.value)}
              />
              <span className="text-sm text-gray-600 font-mono">{thumbColor}</span>
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-sm font-medium text-gray-700">Track Color</label>
            <div className="flex items-center space-x-3">
              <input
                type="color"
                className="h-10 w-20 rounded-lg cursor-pointer border border-gray-200"
                value={trackColor}
                onChange={(e) => setTrackColor(e.target.value)}
              />
              <span className="text-sm text-gray-600 font-mono">{trackColor}</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Scrollable Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <ScrollArea
          orientation={orientation}
          scrollbarThickness={scrollbarThickness}
          thumbColor={thumbColor}
          trackColor={trackColor}
        >
          <div 
            className={`min-w-[800px] grid gap-4 p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-inner
              ${orientation === "vertical" ? "h-[500px] grid-cols-1" : "grid-cols-2"}
            `}
          >
            {cards.map((card, index) => (
              <motion.div
                key={index}
                className="p-6 bg-gradient-to-br from-white to-indigo-50/50 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -2,
                  transition: { duration: 0.2 },
                }}
              >
                <h3 className="text-lg font-semibold text-indigo-900 mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {card.description}
                </p>
                <motion.div
                  className="mt-4 text-xs font-medium text-indigo-600 inline-flex items-center"
                  whileHover={{ x: 5 }}
                >
                  Learn more →
                </motion.div>
              </motion.div>
            ))}
          </div>
        </ScrollArea>
      </motion.div>
    </div>
  );
}
