"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface ColorPickerButtonProps {
  initialColor?: string;
  className?: string;
}

const ColorPickerButton: React.FC<ColorPickerButtonProps> = ({
  initialColor = "#ffffff",
  className = "",
}) => {
  const [color, setColor] = useState(initialColor);
  const [isPickerOpen, setIsPickerOpen] = useState(false);

  // Toggle the color picker
  const toggleColorPicker = () => {
    setIsPickerOpen((prev) => !prev);
  };

  // Handle color change
  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColor(event.target.value);
  };

  return (
    <div className={`relative ${className}`}>
      {/* Button with Animated Background Color */}
      <motion.button
        className="w-32 h-12 rounded-md text-white font-semibold focus:outline-none"
        style={{
          backgroundColor: color,
        }}
        onClick={toggleColorPicker}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        Choose Color
      </motion.button>

      {/* Color Picker that appears when the button is clicked */}
      {isPickerOpen && (
        <motion.div
          className="absolute top-14 left-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <input
            type="color"
            value={color}
            onChange={handleColorChange}
            className="w-16 h-16 cursor-pointer rounded-full border-2 border-transparent focus:outline-none"
          />
        </motion.div>
      )}
    </div>
  );
};

export default ColorPickerButton;
