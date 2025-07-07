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
      className={`relative ${overflowClasses} rounded-2xl bg-gradient-to-br from-slate-900 to-indigo-950 shadow-inner`}
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
          box-shadow: inset 0 0 10px rgba(99, 102, 241, 0.1);
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
  const [thumbColor, setThumbColor] = useState("#6366f1");
  const [trackColor, setTrackColor] = useState("#1e1b4b");

  const planets = Array.from({ length: 20 }).map((_, i) => ({
    name: `Planet ${String.fromCharCode(65 + i)}`,
    type: ["Gas Giant", "Rocky Planet", "Ice World", "Super Earth"][i % 4],
    distance: Math.floor(Math.random() * 1000),
    habitability: Math.floor(Math.random() * 100),
    satellites: Math.floor(Math.random() * 15),
  }));

  return (
    <div className="p-8 space-y-8 bg-gradient-to-br from-slate-950 to-indigo-950 rounded-2xl">
      {/* Controls Panel */}
      <motion.div 
        className="space-y-6 p-8 bg-slate-900/80 backdrop-blur-xl rounded-2xl shadow-lg border border-indigo-900"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-indigo-200">
            Space Explorer Console
          </h2>
          <motion.div
            className="text-xs font-medium text-indigo-300 px-3 py-1 bg-indigo-950 rounded-full border border-indigo-800"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Deep Space Navigation
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Orientation Control */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-indigo-200">Navigation Mode</label>
            <select
              className="w-full px-4 py-2.5 bg-slate-800 border border-indigo-800 rounded-xl text-indigo-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
              value={orientation}
              onChange={(e) => setOrientation(e.target.value as "vertical" | "horizontal" | "both")}
            >
              <option value="vertical">Vertical Scan</option>
              <option value="horizontal">Horizontal Scan</option>
              <option value="both">Full Space Scan</option>
            </select>
          </div>

          {/* Thickness Control */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-indigo-200">
              Scanner Width: {scrollbarThickness}px
            </label>
            <div className="relative">
              <input
                type="range"
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer"
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
              <div className="absolute -bottom-6 left-0 right-0 flex justify-between text-xs text-indigo-400">
                <span>10px</span>
                <span>24px</span>
              </div>
            </div>
          </div>

          {/* Color Controls */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-indigo-200">Scanner Color</label>
            <div className="flex items-center space-x-3">
              <input
                type="color"
                className="h-10 w-20 rounded-lg cursor-pointer bg-slate-800 border border-indigo-800"
                value={thumbColor}
                onChange={(e) => setThumbColor(e.target.value)}
              />
              <span className="text-sm text-indigo-300 font-mono">{thumbColor}</span>
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-sm font-medium text-indigo-200">Space Background</label>
            <div className="flex items-center space-x-3">
              <input
                type="color"
                className="h-10 w-20 rounded-lg cursor-pointer bg-slate-800 border border-indigo-800"
                value={trackColor}
                onChange={(e) => setTrackColor(e.target.value)}
              />
              <span className="text-sm text-indigo-300 font-mono">{trackColor}</span>
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
            className={`min-w-[800px] grid gap-4 p-6 bg-slate-900/60 backdrop-blur-sm rounded-xl
              ${orientation === "vertical" ? "h-[500px] grid-cols-1" : "grid-cols-2"}
            `}
          >
            {planets.map((planet, index) => (
              <motion.div
                key={index}
                className="p-6 bg-gradient-to-br from-slate-900 to-indigo-950 rounded-xl shadow-sm hover:shadow-md transition-all border border-indigo-900"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -2,
                  boxShadow: "0 4px 12px rgba(99, 102, 241, 0.2)",
                }}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-indigo-200">
                      {planet.name}
                    </h3>
                    <p className="text-sm text-indigo-400">{planet.type}</p>
                  </div>
                  <span className="text-xs text-indigo-400">
                    {planet.distance} light years
                  </span>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-indigo-300">Habitability Index</span>
                      <span className="text-indigo-400">{planet.habitability}%</span>
                    </div>
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-indigo-500 to-violet-500"
                        initial={{ width: 0 }}
                        animate={{ width: `${planet.habitability}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-indigo-300">Natural Satellites</span>
                    <div className="flex -space-x-1">
                      {Array.from({ length: Math.min(5, planet.satellites) }).map((_, i) => (
                        <motion.div
                          key={i}
                          className="w-2 h-2 rounded-full bg-indigo-400"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{
                            duration: 0.3,
                            delay: (index * 0.05) + (i * 0.1),
                          }}
                        />
                      ))}
                      {planet.satellites > 5 && (
                        <span className="ml-2 text-xs text-indigo-400">
                          +{planet.satellites - 5}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <motion.div
                  className="mt-4 text-xs font-medium text-indigo-400 inline-flex items-center"
                  whileHover={{ x: 5 }}
                >
                  Explore Planet →
                </motion.div>
              </motion.div>
            ))}
          </div>
        </ScrollArea>
      </motion.div>
    </div>
  );
} 