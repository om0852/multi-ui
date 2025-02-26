'use client'
import { motion, AnimatePresence } from "framer-motion";
import React, {  useRef, useState } from "react";

interface DropdownOption {
  id: number;
  label: string;
  value: string;
  country?: string;
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

const Dropdown_40: React.FC<DropdownProps> = ({
  options = [
    { id: 1, label: 'New York', value: 'ny', country: 'USA' },
    { id: 2, label: 'London', value: 'ldn', country: 'UK' },
    { id: 3, label: 'Paris', value: 'par', country: 'France' },
    { id: 4, label: 'Tokyo', value: 'tky', country: 'Japan' }
  ],
  placeholder = "Select Location",
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
        className="w-full px-5 py-3.5 flex items-center justify-between rounded-2xl bg-white dark:bg-gray-900 shadow-lg shadow-black/5 ring-1 ring-black/5 dark:ring-white/10 hover:shadow-xl hover:shadow-black/10 transition-all duration-300"
      >
        <span className="text-gray-700 dark:text-gray-200 font-medium">
          {selectedOption
            ? options.find((opt) => opt.value === selectedOption)?.label
            : placeholder}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ 
            type: "spring",
            stiffness: 400,
            damping: 25
          }}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth="1.5" 
            stroke="currentColor" 
            className="size-5 text-gray-400"
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
            initial={{ opacity: 0, scale: 0.9, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="absolute w-full mt-3 rounded-2xl bg-white dark:bg-gray-900 shadow-xl shadow-black/10 ring-1 ring-black/5 dark:ring-white/10 overflow-hidden z-50"
          >
            <div className="p-2">
              {options.map((option) => (
                <motion.button
                  key={option.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: options.indexOf(option) * 0.1 }}
                  onClick={() => handleOptionClick(option)}
                  disabled={option.disabled}
                  className={`w-full px-3 py-2.5 flex flex-col items-start rounded-xl text-left hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-150 ${
                    option.disabled ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  <span className="text-gray-800 dark:text-gray-200 font-medium">
                    {option.label}
                  </span>
                  {option.country && (
                    <span className="text-gray-500 dark:text-gray-400 text-sm">
                      {option.country}
                    </span>
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown_40; 