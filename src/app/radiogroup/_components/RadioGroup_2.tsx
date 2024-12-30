"use client"
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
    <div className="relative flex space-x-4">
      {options.map((option, index) => (
        <div key={option.value} className="relative">
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={() => onChange(option.value)}
            className="hidden"
          />
          <motion.div
            className={`flex items-center justify-center rounded-full w-12 h-12 cursor-pointer ${
              selectedValue === option.value
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.3,
              delay: index * 0.1,
            }}
            onClick={() => onChange(option.value)}
          >
            <motion.div
              className="absolute top-0 left-0 w-full h-full rounded-full bg-blue-200"
              style={{
                scale: selectedValue === option.value ? 1 : 0,
              }}
              animate={{
                opacity: selectedValue === option.value ? 0.2 : 0,
              }}
              transition={{ duration: 0.3 }}
            />
            {option.label}
          </motion.div>
        </div>
      ))}
    </div>
  );
};

const App: React.FC = () => {
  const [selected, setSelected] = useState<string>("option1");

  const options = [
    { value: "option1", label: "1" },
    { value: "option2", label: "2" },
    { value: "option3", label: "3" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold mb-4">Select an Option:</h1>
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
