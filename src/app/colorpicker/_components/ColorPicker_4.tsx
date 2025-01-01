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
        {/* Floating Color Box */}
        <motion.div
          className="w-32 h-32 rounded-xl"
          style={{
            backgroundColor: color,
          }}
          animate={{
            y: [0, -10, 0],
            boxShadow: [
              "0px 4px 20px rgba(0,0,0,0.1)",
              "0px 8px 25px rgba(0,0,0,0.2)",
              "0px 4px 20px rgba(0,0,0,0.1)",
            ],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 2,
          }}
        />
      </motion.div>

      {/* Color Input with Gradient Animation */}
      <motion.input
        type="color"
        value={color}
        onChange={handleColorChange}
        className="w-16 h-16 cursor-pointer rounded-full border-4 border-transparent"
        whileHover={{
          scale: 1.2,
          rotate: 360,
          transition: { duration: 0.5 },
        }}
        whileTap={{
          scale: 0.9,
          rotate: -180,
          transition: { duration: 0.2 },
        }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
};

export default ColorPicker;
