"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface RadioOption {
  value: string;
  label: string;
}

interface RadioGroupProps {
  options: RadioOption[];
  name: string;
  selectedValue: string;
  onChange: (value: string) => void;
}

export const HorizontalRadioGroupWithUniqueEffects: React.FC<RadioGroupProps> = ({
  options,
  name,
  selectedValue,
  onChange,
}) => {
  return (
    <div className="flex space-x-6">
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
                ? "border-blue-600"
                : "border-gray-300"
            } flex items-center justify-center`}
            initial={{ scale: 1 }}
            animate={{
              ...(index === 0 && selectedValue === option.value
                ? { x: [0, 10, -10, 0] }
                : {}),
              ...(index === 1 && selectedValue === option.value
                ? { boxShadow: selectedValue ? "0 0 8px #3b82f6" : "none" }
                : {}),
              ...(index === 2 && selectedValue === option.value
                ? { scale: [1, 0.8, 1] }
                : {}),
            }}
            transition={{
              duration: 0.5,
              repeat: selectedValue === option.value ? Infinity : 0,
              repeatType: "loop",
            }}
          >
            {selectedValue === option.value && (
              <motion.div
                className="w-3 h-3 bg-blue-600 rounded-full"
                layoutId="selected"
              />
            )}
          </motion.div>
          <span className="text-gray-800 mt-2">{option.label}</span>
        </label>
      ))}
    </div>
  );
};

const App: React.FC = () => {
  const [selected, setSelected] = useState<string>("option1");

  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold mb-4">Select an Option:</h1>
      <HorizontalRadioGroupWithUniqueEffects
        options={options}
        name="uniqueAnimationsExample"
        selectedValue={selected}
        onChange={setSelected}
      />
    </div>
  );
};

export default App;
