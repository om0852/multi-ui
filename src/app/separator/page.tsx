"use client";
import React, { useState } from "react";
import Separator from "./_components/Separator_3"; // Adjust import path as needed
import { motion } from "framer-motion";
import ZigzagSeparator from "./_components/Separator_5";
import WaveSeparator from "./_components/Separator_3";

export default function SeparatorDemo() {
  const [orientation, setOrientation] = useState<"horizontal" | "vertical">("horizontal");
  const [thickness, setThickness] = useState(4);
  const [color, setColor] = useState("indigo-600"); // Tailwind color class
  const [animated, setAnimated] = useState(true);

  return (
    <div className="p-6 space-y-8">
      {/* Control Panel */}
      <div className="flex flex-col space-y-4 bg-gray-50 p-4 rounded-md border shadow-sm">
        <h4 className="text-lg font-medium">Customize Zigzag Separator</h4>
        <label className="flex items-center space-x-4">
          <span>Orientation:</span>
          <select
            className="p-2 border rounded-md"
            value={orientation}
            onChange={(e) => setOrientation(e.target.value as "horizontal" | "vertical")}
          >
            <option value="horizontal">Horizontal</option>
            <option value="vertical">Vertical</option>
          </select>
        </label>
        <label className="flex items-center space-x-4">
          <span>Thickness:</span>
          <input
            type="number"
            className="p-2 border rounded-md w-20"
            min="1"
            max="20"
            value={thickness}
            onChange={(e) => setThickness(Number(e.target.value))}
          />
        </label>
        <label className="flex items-center space-x-4">
          <span>Color:</span>
          <input
            type="color"
            className="p-1 rounded-md"
            value={`#${parseInt(color, 16).toString(16)}`}
            onChange={(e) => setColor(e.target.value)}
          />
        </label>
        <label className="flex items-center space-x-4">
          <span>Animation:</span>
          <input
            type="checkbox"
            className="p-1 rounded-md"
            checked={animated}
            onChange={(e) => setAnimated(e.target.checked)}
          />
        </label>
      </div>

      {/* Demo Display */}
      <div className="flex flex-col items-center justify-center space-y-6">
        <h4 className="text-lg font-medium">Zigzag Separator Preview</h4>
        <motion.div
          className={`flex items-center justify-center ${
            orientation === "horizontal" ? "w-full" : "h-48"
          } space-y-4`}
        >
              <ZigzagSeparator
        orientation="horizontal"
        thickness={10}
        color="#3490dc"
        length="100%" // Adjust the length if needed
        animated={true}
      />

        </motion.div>
      </div>
    </div>
  );
}

