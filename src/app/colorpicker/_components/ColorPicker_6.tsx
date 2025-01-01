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
      {/* Animated Color Box with Smooth Slide In */}
      <motion.div
        className="w-36 h-36 rounded-md"
        style={{
          backgroundColor: color,
        }}
        initial={{ x: -200 }}
        animate={{ x: 0 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
      />

      {/* Slider Input with Custom Styling */}
      <div className="relative mt-4 w-full max-w-xs">
        <motion.input
          type="color"
          value={color}
          onChange={handleColorChange}
          className="w-full h-2 rounded-md cursor-pointer bg-transparent"
          style={{
            background: `linear-gradient(to right, ${color} 0%, #ffffff 100%)`,
          }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 15px rgba(0, 0, 0, 0.3)",
            transition: { duration: 0.3 },
          }}
          whileTap={{
            scale: 0.95,
            transition: { duration: 0.2 },
          }}
        />
      </div>
    </div>
  );
};

export default ColorPicker;
