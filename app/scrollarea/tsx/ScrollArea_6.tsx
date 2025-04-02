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
      className={`relative ${overflowClasses} rounded-2xl bg-gradient-to-br from-zinc-950 to-cyan-950 shadow-inner`}
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
          box-shadow: inset 0 0 10px rgba(6, 182, 212, 0.1);
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
  const [thumbColor, setThumbColor] = useState("#06b6d4");
  const [trackColor, setTrackColor] = useState("#164e63");

  const circuits = Array.from({ length: 20 }).map((_, i) => ({
    id: `CPU_${i + 1}`,
    type: ["Processing Unit", "Memory Controller", "I/O Interface", "Data Bus"][i % 4],
    clockSpeed: Math.floor(Math.random() * 5000) + 1000,
    powerDraw: Math.floor(Math.random() * 100),
    temperature: Math.floor(Math.random() * 40) + 40,
    status: ["Active", "Standby", "Optimizing"][Math.floor(Math.random() * 3)],
  }));

  return (
    <div className="p-8 space-y-8 bg-gradient-to-br from-zinc-950 to-cyan-950 rounded-2xl">
      {/* Controls Panel */}
      <motion.div 
        className="space-y-6 p-8 bg-zinc-900/80 backdrop-blur-xl rounded-2xl shadow-lg border border-cyan-900"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-cyan-200">
            Circuit Control Matrix
          </h2>
          <motion.div
            className="text-xs font-medium text-cyan-300 px-3 py-1 bg-cyan-950 rounded-full border border-cyan-800"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            System Monitor v2.0
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Orientation Control */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-cyan-200">Scan Pattern</label>
            <select
              className="w-full px-4 py-2.5 bg-zinc-800 border border-cyan-800 rounded-xl text-cyan-200 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all"
              value={orientation}
              onChange={(e) => setOrientation(e.target.value as "vertical" | "horizontal" | "both")}
            >
              <option value="vertical">Vertical Scan</option>
              <option value="horizontal">Horizontal Scan</option>
              <option value="both">Matrix Scan</option>
            </select>
          </div>

          {/* Thickness Control */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-cyan-200">
              Data Bus Width: {scrollbarThickness}px
            </label>
            <div className="relative">
              <input
                type="range"
                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer"
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
              <div className="absolute -bottom-6 left-0 right-0 flex justify-between text-xs text-cyan-400">
                <span>10px</span>
                <span>24px</span>
              </div>
            </div>
          </div>

          {/* Color Controls */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-cyan-200">Signal Color</label>
            <div className="flex items-center space-x-3">
              <input
                type="color"
                className="h-10 w-20 rounded-lg cursor-pointer bg-zinc-800 border border-cyan-800"
                value={thumbColor}
                onChange={(e) => setThumbColor(e.target.value)}
              />
              <span className="text-sm text-cyan-300 font-mono">{thumbColor}</span>
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-sm font-medium text-cyan-200">Circuit Base</label>
            <div className="flex items-center space-x-3">
              <input
                type="color"
                className="h-10 w-20 rounded-lg cursor-pointer bg-zinc-800 border border-cyan-800"
                value={trackColor}
                onChange={(e) => setTrackColor(e.target.value)}
              />
              <span className="text-sm text-cyan-300 font-mono">{trackColor}</span>
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
            className={`min-w-[800px] grid gap-4 p-6 bg-zinc-900/60 backdrop-blur-sm rounded-xl
              ${orientation === "vertical" ? "h-[500px] grid-cols-1" : "grid-cols-2"}
            `}
          >
            {circuits.map((circuit, index) => (
              <motion.div
                key={index}
                className="p-6 bg-gradient-to-br from-zinc-900 to-cyan-950 rounded-xl shadow-sm hover:shadow-md transition-all border border-cyan-900"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -2,
                  boxShadow: "0 4px 12px rgba(6, 182, 212, 0.2)",
                }}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-cyan-200">
                      {circuit.id}
                    </h3>
                    <p className="text-sm text-cyan-400">{circuit.type}</p>
                  </div>
                  <motion.div
                    className={`px-2 py-1 text-xs rounded-full ${
                      circuit.status === "Active"
                        ? "bg-green-950 text-green-400 border border-green-800"
                        : circuit.status === "Standby"
                        ? "bg-yellow-950 text-yellow-400 border border-yellow-800"
                        : "bg-blue-950 text-blue-400 border border-blue-800"
                    }`}
                    animate={{
                      opacity: circuit.status === "Active" ? [1, 0.5, 1] : 1,
                    }}
                    transition={{
                      duration: 1,
                      repeat: circuit.status === "Active" ? Infinity : 0,
                      ease: "easeInOut",
                    }}
                  >
                    {circuit.status}
                  </motion.div>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-cyan-300">Power Draw</span>
                      <span className="text-cyan-400">{circuit.powerDraw}W</span>
                    </div>
                    <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
                        initial={{ width: 0 }}
                        animate={{ width: `${circuit.powerDraw}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <span className="text-xs text-cyan-400">Clock Speed</span>
                      <div className="text-sm font-mono text-cyan-200">
                        {circuit.clockSpeed} MHz
                      </div>
                    </div>
                    <div className="space-y-1">
                      <span className="text-xs text-cyan-400">Temperature</span>
                      <div className="text-sm font-mono text-cyan-200">
                        {circuit.temperature}°C
                      </div>
                    </div>
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