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
      className={`relative ${overflowClasses} rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 shadow-inner`}
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
          box-shadow: inset 0 0 10px rgba(0, 128, 0, 0.05);
        }
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(45deg, ${thumbColor}, ${thumbColor}dd);
          border-radius: 12px;
          border: 3px solid transparent;
          background-clip: padding-box;
          transition: all 0.3s ease;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(45deg, ${thumbColor}dd, ${thumbColor});
          box-shadow: 0 0 15px ${thumbColor}33;
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
  const [thumbColor, setThumbColor] = useState("#059669");
  const [trackColor, setTrackColor] = useState("#d1fae5");

  const plants = Array.from({ length: 20 }).map((_, i) => ({
    name: `Plant ${i + 1}`,
    species: ["Monstera", "Ficus", "Snake Plant", "Pothos"][i % 4],
    waterLevel: Math.floor(Math.random() * 100),
    lastWatered: `${Math.floor(Math.random() * 7) + 1} days ago`,
  }));

  return (
    <div className="p-8 space-y-8 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl">
      {/* Controls Panel */}
      <motion.div 
        className="space-y-6 p-8 bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-green-100"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-emerald-800">
            Plant Care Dashboard
          </h2>
          <motion.div
            className="text-xs font-medium text-emerald-700 px-3 py-1 bg-emerald-50 rounded-full border border-emerald-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Eco-Friendly UI
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Orientation Control */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-emerald-800">View Mode</label>
            <select
              className="w-full px-4 py-2.5 bg-white border border-emerald-200 rounded-xl text-emerald-800 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
              value={orientation}
              onChange={(e) => setOrientation(e.target.value as "vertical" | "horizontal" | "both")}
            >
              <option value="vertical">Vertical Garden</option>
              <option value="horizontal">Horizontal Garden</option>
              <option value="both">Garden Overview</option>
            </select>
          </div>

          {/* Thickness Control */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-emerald-800">
              Scroll Bar Size: {scrollbarThickness}px
            </label>
            <div className="relative">
              <input
                type="range"
                className="w-full h-2 bg-emerald-100 rounded-lg appearance-none cursor-pointer"
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
              <div className="absolute -bottom-6 left-0 right-0 flex justify-between text-xs text-emerald-600">
                <span>10px</span>
                <span>24px</span>
              </div>
            </div>
          </div>

          {/* Color Controls */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-emerald-800">Leaf Color</label>
            <div className="flex items-center space-x-3">
              <input
                type="color"
                className="h-10 w-20 rounded-lg cursor-pointer bg-white border border-emerald-200"
                value={thumbColor}
                onChange={(e) => setThumbColor(e.target.value)}
              />
              <span className="text-sm text-emerald-700 font-mono">{thumbColor}</span>
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-sm font-medium text-emerald-800">Background Shade</label>
            <div className="flex items-center space-x-3">
              <input
                type="color"
                className="h-10 w-20 rounded-lg cursor-pointer bg-white border border-emerald-200"
                value={trackColor}
                onChange={(e) => setTrackColor(e.target.value)}
              />
              <span className="text-sm text-emerald-700 font-mono">{trackColor}</span>
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
            className={`min-w-[800px] grid gap-4 p-6 bg-white/60 backdrop-blur-sm rounded-xl
              ${orientation === "vertical" ? "h-[500px] grid-cols-1" : "grid-cols-2"}
            `}
          >
            {plants.map((plant, index) => (
              <motion.div
                key={index}
                className="p-6 bg-gradient-to-br from-white to-green-50 rounded-xl shadow-sm hover:shadow-md transition-all border border-green-100"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -2,
                  boxShadow: "0 4px 12px rgba(5, 150, 105, 0.1)",
                }}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-emerald-800">
                      {plant.name}
                    </h3>
                    <p className="text-sm text-emerald-600">{plant.species}</p>
                  </div>
                  <span className="text-xs text-emerald-600">
                    {plant.lastWatered}
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-emerald-700">Water Level</span>
                    <span className="text-emerald-600">{plant.waterLevel}%</span>
                  </div>
                  <div className="h-2 bg-emerald-100 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-emerald-500 to-green-500"
                      initial={{ width: 0 }}
                      animate={{ width: `${plant.waterLevel}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </div>
                <motion.div
                  className="mt-4 text-xs font-medium text-emerald-600 inline-flex items-center"
                  whileHover={{ x: 5 }}
                >
                  View Plant Details →
                </motion.div>
              </motion.div>
            ))}
          </div>
        </ScrollArea>
      </motion.div>
    </div>
  );
} 