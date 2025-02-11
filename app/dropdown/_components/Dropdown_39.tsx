'use client'
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface DropdownOption {
  id: number;
  label: string;
  value: string;
  price?: string;
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

const Dropdown_39: React.FC<DropdownProps> = ({
  options = [
    { id: 1, label: 'Basic', value: 'basic', price: '$9/mo' },
    { id: 2, label: 'Pro', value: 'pro', price: '$19/mo' },
    { id: 3, label: 'Enterprise', value: 'enterprise', price: '$49/mo' }
  ],
  placeholder = "Select Plan",
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
        className="w-full px-5 py-3 flex items-center justify-between rounded-lg bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/40 transition-all duration-300"
      >
        <span className="font-medium">
          {selectedOption
            ? options.find((opt) => opt.value === selectedOption)?.label
            : placeholder}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth="1.5" 
            stroke="currentColor" 
            className="size-5 opacity-80"
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="absolute w-full mt-2 rounded-lg bg-white dark:bg-gray-800 shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden z-50"
          >
            {options.map((option) => (
              <motion.button
                key={option.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: options.indexOf(option) * 0.1 }}
                onClick={() => handleOptionClick(option)}
                disabled={option.disabled}
                className={`w-full px-5 py-3 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-150 ${
                  option.disabled ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                <span className="text-gray-800 dark:text-gray-200 font-medium">
                  {option.label}
                </span>
                {option.price && (
                  <span className="text-gray-500 dark:text-gray-400 text-sm">
                    {option.price}
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

export default Dropdown_39; 