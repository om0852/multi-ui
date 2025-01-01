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
        {/* Swinging Color Box */}
        <motion.div
          className="w-32 h-32 rounded-full"
          style={{
            backgroundColor: color,
          }}
          animate={{
            rotate: [0, 10, -10, 0],
            transition: {
              repeat: Infinity,
              repeatType: "mirror",
              duration: 1.5,
            },
          }}
        />
      </motion.div>

      {/* Color Input with Pulse Hover Effect */}
      <motion.input
        type="color"
        value={color}
        onChange={handleColorChange}
        className="w-16 h-16 cursor-pointer rounded-full border-4 border-transparent"
        whileHover={{
          scale: 1.3,
          boxShadow: "0 0 15px rgba(0, 0, 0, 0.4)",
          transition: { duration: 0.3 },
        }}
        whileTap={{
          scale: 0.9,
          transition: { duration: 0.2 },
        }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
};

export default ColorPicker;
