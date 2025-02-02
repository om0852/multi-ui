'use client'
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface DropdownOption {
  id: number;
  label: string;
  value: string;
  badge?: string;
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

const Dropdown_41: React.FC<DropdownProps> = ({
  options = [
    { id: 1, label: 'Active', value: 'active', badge: '12' },
    { id: 2, label: 'In Progress', value: 'progress', badge: '5' },
    { id: 3, label: 'Completed', value: 'completed', badge: '28' },
    { id: 4, label: 'Archived', value: 'archived', badge: '9' }
  ],
  placeholder = "Filter Status",
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
        className="group w-full px-5 py-3 flex items-center justify-between rounded-xl bg-white dark:bg-gray-800 shadow-[0_4px_0_rgb(0,0,0,0.1)] dark:shadow-[0_4px_0_rgb(255,255,255,0.1)] border border-black/10 dark:border-white/10 active:translate-y-[2px] active:shadow-[0_2px_0_rgb(0,0,0,0.1)] dark:active:shadow-[0_2px_0_rgb(255,255,255,0.1)] transition-all duration-150"
      >
        <span className="font-semibold text-gray-800 dark:text-gray-200">
          {selectedOption
            ? options.find((opt) => opt.value === selectedOption)?.label
            : placeholder}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ 
            type: "spring",
            stiffness: 500,
            damping: 30,
            mass: 1
          }}
          className="relative w-5 h-5"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth="2.5" 
            stroke="currentColor" 
            className="w-5 h-5 text-gray-600 dark:text-gray-400"
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
            initial={{ opacity: 0, scale: 0.9, y: 0 }}
            animate={{ opacity: 1, scale: 1, y: 8 }}
            exit={{ opacity: 0, scale: 0.9, y: 0 }}
            transition={{ 
              type: "spring",
              bounce: 0.35,
              duration: 0.4
            }}
            className="absolute w-full mt-2 py-2 rounded-xl bg-white dark:bg-gray-800 shadow-lg shadow-black/10 dark:shadow-white/10 border border-black/10 dark:border-white/10 overflow-hidden z-50"
          >
            {options.map((option) => (
              <motion.button
                key={option.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  delay: options.indexOf(option) * 0.1,
                  type: "spring",
                  bounce: 0.3
                }}
                onClick={() => handleOptionClick(option)}
                disabled={option.disabled}
                className={`w-full px-5 py-2.5 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-150 ${
                  selectedOption === option.value ? 'bg-gray-50 dark:bg-gray-700/50' : ''
                } ${
                  option.disabled ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                <span className={`font-medium ${
                  selectedOption === option.value 
                    ? 'text-blue-600 dark:text-blue-400' 
                    : 'text-gray-700 dark:text-gray-200'
                }`}>
                  {option.label}
                </span>
                {option.badge && (
                  <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${
                    selectedOption === option.value
                      ? 'bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400'
                      : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400'
                  }`}>
                    {option.badge}
                  </span>
                )}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown_41; 