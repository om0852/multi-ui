'use client'
import { motion, AnimatePresence } from "framer-motion";
import React, { useRef, useState } from "react";

interface DropdownOption {
  id: number;
  label: string;
  value: string;
  shortcut?: string;
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

const Dropdown_45: React.FC<DropdownProps> = ({
  options = [
    { id: 1, label: 'Save', value: 'save', shortcut: '⌘S' },
    { id: 2, label: 'Save As', value: 'save-as', shortcut: '⌘⇧S' },
    { id: 3, label: 'Export', value: 'export', shortcut: '⌘E' },
    { id: 4, label: 'Print', value: 'print', shortcut: '⌘P', disabled: true }
  ],
  placeholder = "File",
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
      <div className="flex">
        <button
          onClick={() => handleOptionClick(options[0])}
          className="flex-1 px-4 py-2 flex items-center justify-center rounded-l-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors duration-200"
        >
          {options[0].label}
        </button>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="px-2 py-2 flex items-center justify-center rounded-r-lg bg-blue-600 hover:bg-blue-700 text-white border-l border-blue-500 transition-colors duration-200"
        >
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
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
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className="absolute w-full mt-1 py-1 rounded-lg bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black/5 dark:ring-white/10 overflow-hidden z-50"
          >
            {options.slice(1).map((option) => (
              <motion.button
                key={option.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: options.indexOf(option) * 0.05 }}
                onClick={() => handleOptionClick(option)}
                disabled={option.disabled}
                className={`w-full px-4 py-2 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-150 ${
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
                {option.shortcut && (
                  <span className="text-xs font-medium text-gray-400 dark:text-gray-500">
                    {option.shortcut}
                  </span>
                )}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-center gap-3">
        {selectedOption ? (
          <span className="font-medium">
            {selectedOption}
          </span>
        ) : (
          <span className="font-medium text-gray-500 dark:text-gray-400">
            {placeholder}
          </span>
        )}
      </div>
    </div>
  );
};

export default Dropdown_45; 