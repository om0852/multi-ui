"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export const HorizontalRadioGroupWithAnimations = ({
  options,
  name,
  selectedValue,
  onChange,
}) => {
  return (
    <div className="flex space-x-8">
      {options.map((option, index) => (
        <label
          key={option.value}
          className="flex flex-col items-center cursor-pointer"
        >
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={() => onChange(option.value)}
            className="hidden"
          />
          <motion.div
            className={`w-8 h-8 rounded-full border-2 ${
              selectedValue === option.value
                ? "border-blue-500"
                : "border-gray-400"
            } flex items-center justify-center`}
            initial={{ scale: 1 }}
            animate={{
              scale: selectedValue === option.value ? 1.2 : 1,
              ...(index === 0 && selectedValue === option.value
                ? { rotate: [0, 15, -15, 0] }
                : {}),
              ...(index === 1 && selectedValue === option.value
                ? { y: [0, -5, 0] }
                : {}),
              ...(index === 2 && selectedValue === option.value
                ? { x: [0, -5, 5, 0] }
                : {}),
            }}
            transition={{
              duration: 0.3,
              repeat: selectedValue === option.value ? Infinity : 0,
              repeatType: "loop",
            }}
          >
            {selectedValue === option.value && (
              <motion.div
                className="w-4 h-4 bg-blue-500 rounded-full"
                layoutId="selectedIndicator"
              />
            )}
          </motion.div>
          <span className="text-gray-800 mt-2">{option.label}</span>
        </label>
      ))}
    </div>
  );
};

const App = () => {
  const [selected, setSelected] = useState("option1");

  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold mb-4">Select an Option:</h1>
      <HorizontalRadioGroupWithAnimations
        options={options}
        name="normalAnimationsExample"
        selectedValue={selected}
        onChange={setSelected}
      />
    </div>
  );
};

export default App; 