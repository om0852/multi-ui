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

export const RadioGroup: React.FC<RadioGroupProps> = ({
  options,
  name,
  selectedValue,
  onChange,
}) => {
  return (
    <div className="relative flex items-center w-full p-1 bg-gray-200 rounded-full">
      {options.map((option) => (
        <label
          key={option.value}
          className="flex-1 cursor-pointer relative z-10 text-center py-4"
        >
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={() => onChange(option.value)}
            className="hidden"
          />
          <span className="text-lg font-medium text-gray-800">
            {option.label}
          </span>
        </label>
      ))}
      <motion.div
        className="absolute top-0 left-0 h-full bg-blue-500 rounded-full"
        initial={false}
        animate={{
          width: `${100 / options.length}%`,
          x: `${options.findIndex((opt) => opt.value === selectedValue) * 100}%`,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
      />
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
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-xl font-semibold mb-6">Choose an Option:</h1>
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
