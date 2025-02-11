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
  max = 500,
  step = 1,
  defaultValue = 100,
}) => {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value));
  };

  return (
    <div className="flex items-center mt-6">
      {/* Slider Input */}
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
        className="w-full h-2 bg-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-teal-500"
      />

      {/* Slider Value Label */}
      <span className="ml-4 inline-block px-3 py-1 bg-gray-800 text-white text-sm rounded">
        {value}
      </span>
    </div>
  );
};

export default RangeSlider;
