"use client"
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

export const FillRadioGroup: React.FC<RadioGroupProps> = ({
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
                ? "border-teal-500"
                : "border-gray-400"
            } flex items-center justify-center relative`}
            initial={{ scale: 0.9 }}
            animate={{
              scale: selectedValue === option.value ? 1.2 : 1,
              borderColor:
                selectedValue === option.value ? "#14b8a6" : "#d1d5db",
            }}
            transition={{ duration: 0.3 }}
          >
            {selectedValue === option.value && (
              <motion.div
                className="w-5 h-5 bg-teal-500 rounded-full absolute top-0 left-0"
                initial={{ width: 0, height: 0 }}
                animate={{ width: "100%", height: "100%" }}
                transition={{
                  duration: 0.4,
                  type: "spring",
                  stiffness: 400,
                  damping: 30,
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
      <FillRadioGroup
        options={options}
        name="fillEffectExample"
        selectedValue={selected}
        onChange={setSelected}
      />
    </div>
  );
};

export default App;
