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
  max = 100,
  step = 1,
  defaultValue = 50,
}) => {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value));
  };

  const calculatePosition = () => ((value - min) / (max - min)) * 100;

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

      {/* Value Display with Cone Effect */}
      <div className="relative mt-4">
        <motion.span
          className="inline-block px-4 py-2 bg-gray-800 text-white text-sm font-medium rounded-lg shadow"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          {value}
        </motion.span>
        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-full w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-gray-800"></div> {/* Cone effect */}
      </div>
    </div>
  );
};

export default RangeSlider;
