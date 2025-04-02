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
      className={`relative ${overflowClasses} rounded-2xl bg-gradient-to-br from-sky-950 to-blue-950 shadow-inner`}
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
          box-shadow: inset 0 0 10px rgba(14, 165, 233, 0.1);
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
  const [thumbColor, setThumbColor] = useState("#0ea5e9");
  const [trackColor, setTrackColor] = useState("#0c4a6e");

  const weatherStations = Array.from({ length: 20 }).map((_, i) => ({
    id: `Station_${i + 1}`,
    location: ["Mountain Peak", "Coastal Bay", "Desert Plains", "Forest Valley"][i % 4],
    temperature: Math.floor(Math.random() * 40) - 10,
    humidity: Math.floor(Math.random() * 100),
    windSpeed: Math.floor(Math.random() * 50),
    precipitation: Math.floor(Math.random() * 100),
    condition: ["Sunny", "Cloudy", "Rainy", "Stormy"][Math.floor(Math.random() * 4)],
  }));

  return (
    <div className="p-8 space-y-8 bg-gradient-to-br from-sky-950 to-blue-950 rounded-2xl">
      {/* Controls Panel */}
      <motion.div 
        className="space-y-6 p-8 bg-sky-900/20 backdrop-blur-xl rounded-2xl shadow-lg border border-sky-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-sky-200">
            Weather Monitoring System
          </h2>
          <motion.div
            className="text-xs font-medium text-sky-300 px-3 py-1 bg-sky-950 rounded-full border border-sky-800"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Live Weather Data
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Orientation Control */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-sky-200">View Mode</label>
            <select
              className="w-full px-4 py-2.5 bg-sky-950 border border-sky-800 rounded-xl text-sky-200 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all"
              value={orientation}
              onChange={(e) => setOrientation(e.target.value as "vertical" | "horizontal" | "both")}
            >
              <option value="vertical">Regional View</option>
              <option value="horizontal">Timeline View</option>
              <option value="both">Global View</option>
            </select>
          </div>

          {/* Thickness Control */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-sky-200">
              Data Stream Width: {scrollbarThickness}px
            </label>
            <div className="relative">
              <input
                type="range"
                className="w-full h-2 bg-sky-950 rounded-lg appearance-none cursor-pointer"
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
              <div className="absolute -bottom-6 left-0 right-0 flex justify-between text-xs text-sky-400">
                <span>10px</span>
                <span>24px</span>
              </div>
            </div>
          </div>

          {/* Color Controls */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-sky-200">Stream Color</label>
            <div className="flex items-center space-x-3">
              <input
                type="color"
                className="h-10 w-20 rounded-lg cursor-pointer bg-sky-950 border border-sky-800"
                value={thumbColor}
                onChange={(e) => setThumbColor(e.target.value)}
              />
              <span className="text-sm text-sky-300 font-mono">{thumbColor}</span>
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-sm font-medium text-sky-200">Background Tone</label>
            <div className="flex items-center space-x-3">
              <input
                type="color"
                className="h-10 w-20 rounded-lg cursor-pointer bg-sky-950 border border-sky-800"
                value={trackColor}
                onChange={(e) => setTrackColor(e.target.value)}
              />
              <span className="text-sm text-sky-300 font-mono">{trackColor}</span>
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
            className={`min-w-[800px] grid gap-4 p-6 bg-sky-900/20 backdrop-blur-sm rounded-xl
              ${orientation === "vertical" ? "h-[500px] grid-cols-1" : "grid-cols-2"}
            `}
          >
            {weatherStations.map((station, index) => (
              <motion.div
                key={index}
                className="p-6 bg-gradient-to-br from-sky-900/40 to-blue-900/40 rounded-xl shadow-sm hover:shadow-md transition-all border border-sky-800"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -2,
                  boxShadow: "0 4px 12px rgba(14, 165, 233, 0.2)",
                }}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-sky-200">
                      {station.id}
                    </h3>
                    <p className="text-sm text-sky-400">{station.location}</p>
                  </div>
                  <motion.div
                    className={`px-2 py-1 text-xs rounded-full ${
                      station.condition === "Sunny"
                        ? "bg-yellow-950 text-yellow-400 border border-yellow-800"
                        : station.condition === "Cloudy"
                        ? "bg-gray-800 text-gray-400 border border-gray-700"
                        : station.condition === "Rainy"
                        ? "bg-blue-950 text-blue-400 border border-blue-800"
                        : "bg-purple-950 text-purple-400 border border-purple-800"
                    }`}
                    animate={{
                      scale: [1, 1.05, 1],
                      opacity: [1, 0.8, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    {station.condition}
                  </motion.div>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-sky-300">Humidity</span>
                      <span className="text-sky-400">{station.humidity}%</span>
                    </div>
                    <div className="h-2 bg-sky-950 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-sky-500 to-blue-500"
                        initial={{ width: 0 }}
                        animate={{ width: `${station.humidity}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <span className="text-xs text-sky-400">Temperature</span>
                      <div className="text-sm font-mono text-sky-200">
                        {station.temperature}°C
                      </div>
                    </div>
                    <div className="space-y-1">
                      <span className="text-xs text-sky-400">Wind Speed</span>
                      <div className="text-sm font-mono text-sky-200">
                        {station.windSpeed} km/h
                      </div>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs text-sky-400">Precipitation Chance</span>
                    <div className="text-sm font-mono text-sky-200">
                      {station.precipitation}%
                    </div>
                  </div>
                </div>
                <motion.div
                  className="mt-4 text-xs font-medium text-sky-400 inline-flex items-center"
                  whileHover={{ x: 5 }}
                >
                  View Forecast →
                </motion.div>
              </motion.div>
            ))}
          </div>
        </ScrollArea>
      </motion.div>
    </div>
  );
} 