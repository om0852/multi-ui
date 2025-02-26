"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface DropdownOption {
  id: number;
  label: string;
  value: string;
  icon?: string;
  disabled?: boolean;
}

interface DropdownProps {
  options: DropdownOption[];
  placeholder?: string;
  value?: string;
  onSelect?: (selectedValue: string) => void;
  onChange?: (selectedValue: string) => void;
  onClick?: (option: DropdownOption) => void;
}

const Dropdown_1: React.FC<DropdownProps> = ({
  options = [
    { id: 1, label: 'Dashboard', value: 'dashboard', icon: '📊' },
    { id: 2, label: 'Projects', value: 'projects', icon: '📁' },
    { id: 3, label: 'Team', value: 'team', icon: '👥' },
    { id: 4, label: 'Calendar', value: 'calendar', icon: '📅' },
    { id: 5, label: 'Reports', value: 'reports', icon: '📈' }
  ],
  placeholder = "Menu",
  value,
  onSelect,
  onChange,
  onClick,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | undefined>(value);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleOptionClick = (option: DropdownOption) => {
    if (option.disabled) return;
    setSelectedOption(option.value);
    setIsOpen(false);

    if (onSelect) onSelect(option.value);
    if (onChange) onChange(option.value);
    if (onClick) onClick(option);
  };

  return (
    <div className="relative w-72" ref={containerRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group w-full px-4 py-3 flex items-center justify-between rounded-2xl bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 hover:from-blue-600 hover:via-indigo-600 hover:to-purple-600 text-white shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/40 transition-all duration-300"
      >
        <div className="flex items-center space-x-3">
          {selectedOption && options.find((opt) => opt.value === selectedOption)?.icon && (
            <span className="text-xl">
              {options.find((opt) => opt.value === selectedOption)?.icon}
            </span>
          )}
          <span className="font-medium">
            {selectedOption
              ? options.find((opt) => opt.value === selectedOption)?.label
              : placeholder}
          </span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ 
            type: "spring",
            stiffness: 300,
            damping: 20
          }}
          className="relative w-5 h-5"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth="2.5" 
            stroke="currentColor" 
            className="w-5 h-5"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="m19.5 8.25-7.5 7.5-7.5-7.5" 
            />
          </svg>
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="absolute w-full mt-2 py-2 rounded-2xl bg-white dark:bg-gray-800 shadow-xl shadow-black/10 border border-gray-100 dark:border-gray-700 overflow-hidden z-50"
          >
            {options.map((option) => (
              <motion.button
                key={option.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: options.indexOf(option) * 0.1 }}
                onClick={() => handleOptionClick(option)}
                  disabled={option.disabled}
                className={`w-full px-4 py-2.5 flex items-center space-x-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-150 ${
                  selectedOption === option.value ? 'bg-gray-50 dark:bg-gray-700/50' : ''
                } ${
                  option.disabled ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {option.icon && (
                  <span className="text-xl">{option.icon}</span>
                )}
                <span className={`font-medium ${
                  selectedOption === option.value 
                    ? 'text-indigo-600 dark:text-indigo-400' 
                    : 'text-gray-700 dark:text-gray-200'
                }`}>
                  {option.label}
                </span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown_1;
