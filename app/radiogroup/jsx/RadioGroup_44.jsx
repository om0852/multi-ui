"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export const GlowingRotateRadioGroup = ({
  options,
  name,
  selectedValue,
  onChange,
}) => {
  return (
    <div className="space-y-2">
      {options.map((option) => (
        <label
          key={option.value}
          className="flex items-center space-x-3 cursor-pointer"
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
            className={`w-5 h-5 rounded-full border-2 ${
              selectedValue === option.value
                ? "border-violet-500 glow"
                : "border-gray-400"
            } flex items-center justify-center`}
            initial={{ rotate: 0 }}
            animate={{
              rotate: selectedValue === option.value ? 360 : 0,
              scale: selectedValue === option.value ? 1.3 : 1,
              borderColor: selectedValue === option.value ? "#8b5cf6" : "#d1d5db",
              boxShadow: selectedValue === option.value
                ? "0 0 15px 4px rgba(139, 92, 246, 0.7)"
                : "none",
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          >
            {selectedValue === option.value && (
              <motion.div
                className="w-2.5 h-2.5 bg-white rounded-full"
                layoutId="radioSelected"
              />
            )}
          </motion.div>
          <span className="text-gray-800">{option.label}</span>
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
      <GlowingRotateRadioGroup
        options={options}
        name="glowingRotateExample"
        selectedValue={selected}
        onChange={setSelected}
      />
    </div>
  );
};

export default App; 