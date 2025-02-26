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

export const HorizontalRadioGroup: React.FC<RadioGroupProps> = ({
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
            className={`w-10 h-10 rounded-full border-2 ${
              selectedValue === option.value
                ? "border-neon-blue glow-neon"
                : "border-gray-400"
            } flex items-center justify-center`}
            initial={{ scale: 1 }}
            animate={{
              scale: selectedValue === option.value ? 1.4 : 1,
              borderColor: selectedValue === option.value ? "#00aaff" : "#d1d5db",
              boxShadow: selectedValue === option.value
                ? "0 0 20px 8px rgba(0, 170, 255, 0.7)"
                : "none",
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
              repeat: selectedValue === option.value ? Infinity : 0,
              repeatType: "loop",
            }}
          >
            {/* Custom animation for each radio button */}
            {index === 0 && selectedValue === option.value && (
              <motion.div
                className="w-3 h-3 bg-white rounded-full"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 0.5,
                }}
              />
            )}

            {index === 1 && selectedValue === option.value && (
              <motion.div
                className="w-3 h-3 bg-white rounded-full"
                animate={{
                  opacity: [1, 0.5, 1],
                }}
                transition={{
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 1.2,
                }}
              />
            )}

            {index === 2 && selectedValue === option.value && (
              <motion.div
                className="w-3 h-3 bg-white rounded-full"
                animate={{
                  scale: [1, 1.4, 1],
                }}
                transition={{
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 0.8,
                }}
              />
            )}
          </motion.div>
          <span className="text-gray-800">{option.label}</span>
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
      <HorizontalRadioGroup
        options={options}
        name="horizontalExample"
        selectedValue={selected}
        onChange={setSelected}
      />
    </div>
  );
};

export default App;
