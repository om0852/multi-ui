"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface ColorPickerProps {
  initialColor?: string;
  className?: string;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ initialColor = "#ffffff", className = "" }) => {
  const [color, setColor] = useState(initialColor);

  // Handle color change
  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColor(event.target.value);
  };

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <motion.div
        className="relative mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Display Color Circle */}
        <div
          className="w-32 h-32 rounded-full"
          style={{ backgroundColor: color }}
        />
        {/* Glow effect around the color circle */}
        <motion.div
          className="absolute inset-0 rounded-full border-4 border-gradient-to-r from-blue-400 to-green-500 opacity-30"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      </motion.div>

      <motion.input
        type="color"
        value={color}
        onChange={handleColorChange}
        className="w-16 h-16 cursor-pointer rounded-full border-2 border-transparent"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
};

export default ColorPicker;
