'use client'
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

interface DropdownOption {
  id: number;
  label: string;
  value: string;
  color: string;
}

interface DropdownProps {
  options: DropdownOption[];
  placeholder?: string;
  value?: string;
  onSelect?: (selectedValue: string) => void;
  onChange?: (selectedValue: string) => void;
}

const Dropdown_48: React.FC<DropdownProps> = ({
  options = [
    { id: 1, label: 'Low Priority', value: 'low', color: '#22C55E' },
    { id: 2, label: 'Medium Priority', value: 'medium', color: '#EAB308' },
    { id: 3, label: 'High Priority', value: 'high', color: '#EF4444' },
    { id: 4, label: 'Critical', value: 'critical', color: '#7C3AED' }
  ],
  placeholder = "Set Priority",
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

  const getSelectedColor = () => {
    const option = options.find(opt => opt.value === selectedOption);
    return option ? option.color : '#6B7280';
  };

  return (
    <div className="relative w-72">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full px-4 py-3 flex items-center justify-between rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <div className="flex items-center gap-3">
          <motion.div 
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: getSelectedColor() }}
            animate={{
              scale: [1, 1.2, 1],
              transition: { duration: 0.5, repeat: Infinity, repeatDelay: 2 }
            }}
          />
          <span className="font-medium text-gray-700 dark:text-gray-200">
            {selectedOption
              ? options.find((opt) => opt.value === selectedOption)?.label
              : placeholder}
          </span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth="2" 
            stroke="currentColor" 
            className="w-5 h-5 text-gray-500"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="m19.5 8.25-7.5 7.5-7.5-7.5" 
            />
          </svg>
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: 0,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20
              }
            }}
            exit={{ 
              opacity: 0, 
              scale: 0.9, 
              y: 20,
              transition: { duration: 0.2 }
            }}
            className="absolute w-full mt-2 py-2 rounded-2xl bg-white dark:bg-gray-800 shadow-xl backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90 overflow-hidden z-50"
          >
            <div className="space-y-1">
              {options.map((option) => (
                <motion.button
                  key={option.id}
                  onClick={() => handleOptionClick(option)}
                  whileHover={{ x: 8 }}
                  className="w-full px-4 py-2.5 flex items-center gap-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-150"
                >
                  <motion.div 
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: option.color }}
                    whileHover={{ 
                      scale: [1, 1.3, 1.1],
                      transition: { duration: 0.3 }
                    }}
                  />
                  <span className={`font-medium ${
                    selectedOption === option.value 
                      ? 'text-gray-900 dark:text-white' 
                      : 'text-gray-600 dark:text-gray-300'
                  }`}>
                    {option.label}
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown_48; 