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
        className="mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Display Color Box */}
        <div
          className="w-32 h-32 rounded-lg"
          style={{ backgroundColor: color }}
        />
      </motion.div>

      <motion.input
        type="color"
        value={color}
        onChange={handleColorChange}
        className="w-12 h-12 cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      />
    </div>
  );
};

export default ColorPicker;
