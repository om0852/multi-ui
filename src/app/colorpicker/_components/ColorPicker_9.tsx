"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface ColorPickerIconProps {
  initialColor?: string;
  onChange?: (color: string) => void;
  className?: string;
}

const ColorPickerIcon: React.FC<ColorPickerIconProps> = ({
  initialColor = "#ffffff",
  onChange,
  className = "",
}) => {
  const [color, setColor] = useState(initialColor);
  const [showPicker, setShowPicker] = useState(false);
  const pickerRef = useRef<HTMLDivElement>(null);

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = event.target.value;
    setColor(newColor);
    if (onChange) {
      onChange(newColor);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (pickerRef.current && !pickerRef.current.contains(event.target as Node)) {
      setShowPicker(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={`relative ${className}`}>
      {/* Color Picker Icon Button with Flip Animation */}
      <motion.button
        className="w-16 h-16 rounded-lg p-3 flex justify-center items-center shadow-lg bg-gradient-to-br from-pink-500 to-yellow-500"
        style={{
          backgroundColor: color,
        }}
        whileHover={{ rotateY: 180 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        onClick={() => setShowPicker(!showPicker)}
      >
        <img
          src="https://img.icons8.com/?size=100&id=11888&format=png&color=000000"
          alt="color picker icon"
          className="w-8 h-8 object-contain"
        />
      </motion.button>

      {/* Color Picker Dialog with Slide-In Animation */}
      {showPicker && (
        <motion.div
          ref={pickerRef}
          className="absolute top-20 left-0 z-50"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <input
            type="color"
            value={color}
            onChange={handleColorChange}
            className="w-16 h-16 cursor-pointer rounded-full border-2 border-transparent focus:outline-none transition-all"
          />
        </motion.div>
      )}
    </div>
  );
};

export default ColorPickerIcon;
