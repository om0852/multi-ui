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

export const HorizontalRadioGroupRippleGlowFade: React.FC<RadioGroupProps> = ({
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
            className={`w-10 h-10 rounded-full border-2 ${
              selectedValue === option.value
                ? "border-blue-500"
                : "border-gray-300"
            } flex items-center justify-center`}
            initial={{ scale: 1 }}
            animate={{
              ...(index === 0 && selectedValue === option.value
                ? { scale: [1, 1.3, 1], boxShadow: "0px 0px 10px #60a5fa" }
                : {}),
              ...(index === 1 && selectedValue === option.value
                ? { backgroundColor: "#dbeafe", opacity: [1, 0.6, 1] }
                : {}),
              ...(index === 2 && selectedValue === option.value
                ? { y: [-2, 2, -2], scale: [1, 1.1, 1] }
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
      <HorizontalRadioGroupRippleGlowFade
        options={options}
        name="rippleGlowFadeExample"
        selectedValue={selected}
        onChange={setSelected}
      />
    </div>
  );
};

export default App;
