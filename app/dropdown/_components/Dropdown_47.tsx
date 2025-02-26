'use client'
import { motion, AnimatePresence } from "framer-motion";
import React, { useRef, useState } from "react";

interface DropdownOption {
  id: number;
  label: string;
  value: string;
  count?: number;
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

const Dropdown_47: React.FC<DropdownProps> = ({
  options = [
    { id: 1, label: 'All Tasks', value: 'all', count: 36 },
    { id: 2, label: 'Today', value: 'today', count: 8 },
    { id: 3, label: 'Upcoming', value: 'upcoming', count: 12 },
    { id: 4, label: 'Archived', value: 'archived', count: 24, disabled: true }
  ],
  placeholder = "View Tasks",
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
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.98 }}
        className="w-full px-5 py-3 flex items-center justify-between rounded-xl bg-gradient-to-b from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 shadow-lg border border-gray-200 dark:border-gray-700 hover:border-violet-200 dark:hover:border-violet-800 transition-all duration-300"
      >
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-violet-500"></div>
          <span className="font-medium text-gray-700 dark:text-gray-200">
            {selectedOption
              ? options.find((opt) => opt.value === selectedOption)?.label
              : placeholder}
          </span>
        </div>
        <motion.div
          animate={{ rotateX: isOpen ? 180 : 0 }}
          transition={{ 
            type: "spring",
            stiffness: 200,
            damping: 15
          }}
          className="relative w-5 h-5"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth="2.5" 
            stroke="currentColor" 
            className="w-5 h-5 text-violet-500"
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
            initial={{ opacity: 0, rotateX: -15, y: -10 }}
            animate={{ 
              opacity: 1, 
              rotateX: 0, 
              y: 0,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20
              }
            }}
            exit={{ 
              opacity: 0, 
              rotateX: -15, 
              y: -10,
              transition: { duration: 0.2 }
            }}
            style={{ transformOrigin: "top center" }}
            className="absolute w-full mt-2 py-2 rounded-xl bg-white dark:bg-gray-800 shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden z-50"
          >
            {options.map((option, index) => (
              <motion.button
                key={option.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                onClick={() => handleOptionClick(option)}
                disabled={option.disabled}
                className={`w-full px-5 py-2.5 flex items-center justify-between text-left hover:bg-violet-50 dark:hover:bg-violet-900/20 transition-colors duration-150 ${
                  selectedOption === option.value ? 'bg-violet-50 dark:bg-violet-900/20' : ''
                } ${
                  option.disabled ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${
                    selectedOption === option.value 
                      ? 'bg-violet-500' 
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}></div>
                  <span className={`font-medium ${
                    selectedOption === option.value 
                      ? 'text-violet-600 dark:text-violet-400' 
                      : 'text-gray-700 dark:text-gray-300'
                  }`}>
                    {option.label}
                  </span>
                </div>
                {option.count !== undefined && (
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                    selectedOption === option.value
                      ? 'bg-violet-100 text-violet-600 dark:bg-violet-500/20 dark:text-violet-400'
                      : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400'
                  }`}>
                    {option.count}
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

export default Dropdown_47; 