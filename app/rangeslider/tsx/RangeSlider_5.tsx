"use client"
import React, { useState } from "react";

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

  return (
    <div className="flex flex-col items-center mt-6 w-full max-w-lg">
      {/* Slider Wrapper */}
      <div className="relative w-full h-3">
        {/* Slider Track */}
        <div className="absolute top-1/2 w-full h-1 bg-gray-300 rounded-full transform -translate-y-1/2"></div>
        {/* Slider Progress */}
        <div
          className="absolute top-1/2 h-1 bg-blue-500 rounded-full transform -translate-y-1/2"
          style={{
            width: `${((value - min) / (max - min)) * 100}%`,
          }}
        ></div>
        {/* Slider Thumb */}
        <div
          className="absolute top-1.5 w-5 h-5 bg-blue-500 rounded-full shadow-lg transform -translate-y-1/2 cursor-pointer"
          style={{
            left: `${((value - min) / (max - min)) * 100}%`,
          }}
        ></div>
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
      <span className="mt-2 inline-block px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg shadow-lg">
        {value}
      </span>
    </div>
  );
};

export default RangeSlider;
