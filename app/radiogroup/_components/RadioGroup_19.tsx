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

export const ColorShiftRadioGroup: React.FC<RadioGroupProps> = ({
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
                ? "border-purple-500"
                : "border-gray-400"
            } flex items-center justify-center`}
            initial={{ backgroundColor: "#f3f4f6" }}
            animate={{
              backgroundColor: selectedValue === option.value ? "#7c3aed" : "#f3f4f6",
              borderColor: selectedValue === option.value ? "#7c3aed" : "#d1d5db",
            }}
            transition={{ duration: 0.3 }}
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
      <ColorShiftRadioGroup
        options={options}
        name="colorShiftExample"
        selectedValue={selected}
        onChange={setSelected}
      />
    </div>
  );
};

export default App;
