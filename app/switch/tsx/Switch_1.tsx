"use client";

import React  from "react";
import { motion } from "framer-motion";

interface SwitchProps {
  isOn: boolean; // Current state of the switch
  onToggle: () => void; // Function to handle toggle
}

export const Switch: React.FC<SwitchProps> = ({ isOn, onToggle }) => {
  return (
    <div
      className={`relative w-16 h-8 flex items-center rounded-full cursor-pointer transition ${
        isOn ? "bg-green-500" : "bg-gray-300"
      }`}
      onClick={onToggle}
    >
      <motion.div
        className="w-6 h-6 bg-white rounded-full shadow-lg"
        layout
        transition={{
          type: "spring",
          stiffness: 700,
          damping: 30,
        }}
        style={{
          x: isOn ? 32 : 0, // 32px to move to the right, 0px to reset to the left
        }}
      />
    </div>
  );
};

