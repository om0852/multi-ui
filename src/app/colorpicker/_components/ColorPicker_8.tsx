"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface ColorPickerIconProps {
  initialColor?: string;
  className?: string;
}

const ColorPickerIcon: React.FC<ColorPickerIconProps> = ({
  initialColor = "#ffffff",
  className = "",
}) => {
  const [color, setColor] = useState(initialColor);
  const [isPickerOpen, setIsPickerOpen] = useState(false);

  // Toggle the color picker visibility
  const toggleColorPicker = () => {
    setIsPickerOpen((prev) => !prev);
  };

  // Handle color change from the picker
  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColor(event.target.value);
  };

  return (
    <div className={`relative ${className}`}>
      {/* Icon Button with Animated Background Color */}
      <motion.button
        className="w-16 h-16 rounded-full p-2 flex justify-center items-center"
        style={{
          backgroundColor: color,
        }}
        onClick={toggleColorPicker}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Icon (Image) */}
        <img
          src="https://img.icons8.com/?size=100&id=11888&format=png&color=000000"
          alt="color picker icon"
          className="w-10 h-10 object-contain"
        />
      </motion.button>

      {/* Color Picker that appears when the button is clicked */}
      {isPickerOpen && (
        <motion.div
          className="absolute top-20 left-0"
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

export default ColorPickerIcon;
