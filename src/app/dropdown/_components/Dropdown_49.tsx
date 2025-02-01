'use client'
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

interface DropdownOption {
  id: number;
  label: string;
  value: string;
  description?: string;
}

interface DropdownProps {
  options: DropdownOption[];
  placeholder?: string;
  value?: string;
  onSelect?: (selectedValue: string) => void;
  onChange?: (selectedValue: string) => void;
}

const Dropdown_49: React.FC<DropdownProps> = ({
  options = [
    { 
      id: 1, 
      label: 'Light Theme', 
      value: 'light',
      description: 'Clean and bright interface'
    },
    { 
      id: 2, 
      label: 'Dark Theme', 
      value: 'dark',
      description: 'Easy on the eyes'
    },
    { 
      id: 3, 
      label: 'System Theme', 
      value: 'system',
      description: 'Follows your system preferences'
    },
    { 
      id: 4, 
      label: 'High Contrast', 
      value: 'contrast',
      description: 'Enhanced visibility'
    }
  ],
  placeholder = "Select Theme",
  value,
  onSelect,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | undefined>(value);

  const handleOptionClick = (option: DropdownOption) => {
    setSelectedOption(option.value);
    setIsOpen(false);
    if (onSelect) onSelect(option.value);
    if (onChange) onChange(option.value);
  };

  return (
    <div className="relative w-72">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.98 }}
        className={`w-full px-4 py-2.5 flex items-center justify-between border-b-2 transition-colors duration-200 ${
          isOpen 
            ? 'border-violet-500 dark:border-violet-400' 
            : 'border-gray-200 dark:border-gray-700'
        }`}
      >
        <span className={`font-medium ${
          selectedOption 
            ? 'text-gray-900 dark:text-white' 
            : 'text-gray-500 dark:text-gray-400'
        }`}>
          {selectedOption
            ? options.find((opt) => opt.value === selectedOption)?.label
            : placeholder}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 20 20" 
            fill="currentColor" 
            className="w-5 h-5 text-gray-400"
          >
            <path 
              fillRule="evenodd" 
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" 
              clipRule="evenodd" 
            />
          </svg>
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ 
              opacity: 1,
              height: 'auto',
              transition: {
                height: {
                  type: "spring",
                  stiffness: 500,
                  damping: 30
                },
                opacity: { duration: 0.2 }
              }
            }}
            exit={{ 
              opacity: 0,
              height: 0,
              transition: {
                height: { duration: 0.2 },
                opacity: { duration: 0.2 }
              }
            }}
            className="absolute w-full mt-1 py-2 bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden z-50"
          >
            {options.map((option, index) => (
              <motion.button
                key={option.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: 1,
                  x: 0,
                  transition: { delay: index * 0.1 }
                }}
                onClick={() => handleOptionClick(option)}
                className={`w-full px-4 py-2 text-left transition-colors duration-150 ${
                  selectedOption === option.value
                    ? 'bg-violet-50 dark:bg-violet-900/20'
                    : 'hover:bg-gray-50 dark:hover:bg-gray-700/50'
                }`}
              >
                <div className="flex flex-col">
                  <span className={`font-medium ${
                    selectedOption === option.value
                      ? 'text-violet-600 dark:text-violet-400'
                      : 'text-gray-900 dark:text-white'
                  }`}>
                    {option.label}
                  </span>
                  {option.description && (
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {option.description}
                    </span>
                  )}
                </div>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown_49; 