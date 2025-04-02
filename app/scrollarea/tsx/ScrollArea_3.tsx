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
      className={`relative ${overflowClasses} rounded-xl bg-gray-900/90 backdrop-blur-xl border border-gray-800`}
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
          border-radius: 12px;
          margin: 4px;
          border: 3px solid transparent;
          background-clip: padding-box;
          box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.3);
        }
        ::-webkit-scrollbar-thumb {
          background: ${thumbColor};
          border-radius: 12px;
          border: 3px solid transparent;
          background-clip: padding-box;
          box-shadow: 0 0 15px ${thumbColor}66;
          transition: all 0.3s ease;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: ${thumbColor}ee;
          box-shadow: 0 0 20px ${thumbColor}aa;
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
  const [thumbColor, setThumbColor] = useState("#22d3ee");
  const [trackColor, setTrackColor] = useState("#1e293b");

  const items = Array.from({ length: 20 }).map((_, i) => ({
    title: `Project ${i + 1}`,
    status: ["Active", "Completed", "In Progress", "On Hold"][i % 4],
    progress: Math.floor(Math.random() * 100),
  }));

  return (
    <div className="p-8 space-y-8 bg-gray-900 rounded-2xl">
      {/* Controls Panel */}
      <motion.div 
        className="space-y-6 p-8 bg-gray-800/50 backdrop-blur-xl rounded-2xl border border-gray-700"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
            Cyberpunk Scroller
          </h2>
          <motion.div
            className="text-xs font-medium text-cyan-400 px-3 py-1 bg-cyan-950 rounded-full border border-cyan-800"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(34, 211, 238, 0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            Neo-Tokyo Style
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Orientation Control */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-gray-300">Scroll Mode</label>
            <select
              className="w-full px-4 py-2.5 bg-gray-900 border border-gray-700 rounded-xl text-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all"
              value={orientation}
              onChange={(e) => setOrientation(e.target.value as "vertical" | "horizontal" | "both")}
            >
              <option value="vertical">Vertical Scan</option>
              <option value="horizontal">Horizontal Scan</option>
              <option value="both">Omni-Directional</option>
            </select>
          </div>

          {/* Thickness Control */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-gray-300">
              Scanner Width: {scrollbarThickness}px
            </label>
            <div className="relative">
              <input
                type="range"
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                min="10"
                max="24"
                value={scrollbarThickness}
                onChange={(e) => setScrollbarThickness(Number(e.target.value))}
                style={{
                  background: `linear-gradient(to right, ${thumbColor}, ${thumbColor})`,
                  backgroundSize: `${((scrollbarThickness - 10) / 14) * 100}% 100%`,
                  backgroundRepeat: "no-repeat",
                }}
              />
              <div className="absolute -bottom-6 left-0 right-0 flex justify-between text-xs text-gray-500">
                <span>10px</span>
                <span>24px</span>
              </div>
            </div>
          </div>

          {/* Color Controls */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-gray-300">Neon Glow</label>
            <div className="flex items-center space-x-3">
              <input
                type="color"
                className="h-10 w-20 rounded-lg cursor-pointer bg-gray-900 border border-gray-700"
                value={thumbColor}
                onChange={(e) => setThumbColor(e.target.value)}
              />
              <span className="text-sm text-gray-400 font-mono">{thumbColor}</span>
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-sm font-medium text-gray-300">Base Layer</label>
            <div className="flex items-center space-x-3">
              <input
                type="color"
                className="h-10 w-20 rounded-lg cursor-pointer bg-gray-900 border border-gray-700"
                value={trackColor}
                onChange={(e) => setTrackColor(e.target.value)}
              />
              <span className="text-sm text-gray-400 font-mono">{trackColor}</span>
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
            className={`min-w-[800px] grid gap-4 p-6 bg-gray-800/50 backdrop-blur-xl rounded-xl border border-gray-700
              ${orientation === "vertical" ? "h-[500px] grid-cols-1" : "grid-cols-2"}
            `}
          >
            {items.map((item, index) => (
              <motion.div
                key={index}
                className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl border border-gray-700 hover:border-cyan-800 transition-all"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -2,
                  boxShadow: "0 0 20px rgba(34, 211, 238, 0.1)",
                }}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold text-gray-100">
                    {item.title}
                  </h3>
                  <span 
                    className={`px-2 py-1 text-xs rounded-full ${
                      item.status === "Active" ? "bg-green-900 text-green-400" :
                      item.status === "Completed" ? "bg-blue-900 text-blue-400" :
                      item.status === "In Progress" ? "bg-yellow-900 text-yellow-400" :
                      "bg-red-900 text-red-400"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Progress</span>
                    <span className="text-cyan-400">{item.progress}%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
                      initial={{ width: 0 }}
                      animate={{ width: `${item.progress}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </div>
                <motion.div
                  className="mt-4 text-xs font-medium text-cyan-400 inline-flex items-center"
                  whileHover={{ x: 5 }}
                >
                  View Details →
                </motion.div>
              </motion.div>
            ))}
          </div>
        </ScrollArea>
      </motion.div>
    </div>
  );
} 