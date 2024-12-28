"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface RangeSliderProps {
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number;
}

const RangeSlider: React.FC<RangeSliderProps> = ({
  min = 0,
  max = 500,
  step = 1,
  defaultValue = 100,
}) => {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value));
  };

  // Calculate thumb position
  const calculatePosition = () =>
    ((value - min) / (max - min)) * 100;

  return (
    <div className="flex flex-col items-center mt-6 w-full max-w-lg">
      {/* Slider Wrapper */}
      <div className="relative w-full h-3">
        {/* Slider Track */}
        <div className="absolute top-1/2 w-full h-1 bg-gray-300 rounded-full transform -translate-y-1/2"></div>
        {/* Slider Progress */}
        <motion.div
          className="absolute top-1/2 h-1 bg-teal-500 rounded-full transform -translate-y-1/2"
          style={{
            width: `${calculatePosition()}%`,
          }}
          transition={{ duration: 0.2 }}
        ></motion.div>
        {/* Slider Thumb */}
        <motion.div
          className="absolute top-[-.5vh] w-5 h-5 bg-teal-500 rounded-full shadow-lg transform -translate-y-1/2 cursor-pointer"
          style={{
            left: `${calculatePosition()}%`,
          }}
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        ></motion.div>
        {/* Hidden Range Input */}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={handleChange}
          className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
        />
      </div>

      {/* Value Display */}
      <motion.span
        className="mt-4 inline-block px-4 py-2 bg-gray-800 text-white text-sm font-medium rounded-lg shadow"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        {value}
      </motion.span>
    </div>
  );
};

export default RangeSlider;
