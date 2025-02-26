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
    <div className="flex space-x-4 justify-center">
      {options.map((option) => (
        <label
          key={option.value}
          className="relative cursor-pointer group"
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
            className={`flex items-center justify-center w-24 h-12 rounded-lg text-white font-semibold transition-all duration-300 ${
              selectedValue === option.value
                ? "bg-gradient-to-r from-purple-500 to-blue-500"
                : "bg-gray-800"
            }`}
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.5)",
            }}
            transition={{ duration: 0.3 }}
          >
            {option.label}
          </motion.div>
          {selectedValue === option.value && (
            <motion.div
              className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 opacity-50"
              initial={{ scale: 1 }}
              animate={{
                scale: 1.2,
                opacity: [0.5, 0.2, 0.5],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 1.5,
              }}
            />
          )}
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
      <h1 className="text-2xl font-bold mb-6 text-gray-200">
        Choose an Option:
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
