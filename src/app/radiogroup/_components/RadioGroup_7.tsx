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

const RadioGroup: React.FC<RadioGroupProps> = ({
  options,
  name,
  selectedValue,
  onChange,
}) => {
  // Define initial colors and selected colors
  const initialColors = ["bg-purple-300", "bg-teal-300", "bg-yellow-300"];
  const selectedColors = ["bg-purple-500", "bg-teal-500", "bg-yellow-500"];

  return (
    <div className="space-y-4">
      {options.map((option, index) => (
        <label
          key={option.value}
          className="flex items-center space-x-4 cursor-pointer"
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
            className={`w-10 h-10 rounded-full flex items-center justify-center ${
              selectedValue === option.value
                ? selectedColors[index]
                : initialColors[index]
            }`}
            whileHover={{ scale: 1.1 }}
            animate={{
              backgroundColor:
                selectedValue === option.value
                  ? selectedColors[index]
                  : initialColors[index],
            }}
            transition={{ duration: 0.3 }}
          >
            {selectedValue === option.value && (
              <motion.div
                className="w-5 h-5 bg-white rounded-full"
                layoutId="innerCircle"
              />
            )}
          </motion.div>
          <span
            className={`font-medium ${
              selectedValue === option.value
                ? "text-gray-900"
                : "text-gray-600"
            }`}
          >
            {option.label}
          </span>
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
    <div className="p-6 max-w-md mx-auto text-center">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">
        Select an Option:
      </h1>
      <RadioGroup
        options={options}
        name="example"
        selectedValue={selected}
        onChange={setSelected}
      />
    </div>
  );
};

export default App;
