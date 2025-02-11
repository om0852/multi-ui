'use client'
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface DropdownOption {
  id: number;
  label: string;
  value: string;
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

const Dropdown_38: React.FC<DropdownProps> = ({
  options = [
    { id: 1, label: 'Light', value: 'light' },
    { id: 2, label: 'Dark', value: 'dark' },
    { id: 3, label: 'System', value: 'system' }
  ],
  placeholder = "Select Theme",
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
        className="w-full px-4 py-2.5 flex items-center justify-between rounded-md bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800/80 transition-colors duration-200"
      >
        <span className="text-zinc-800 dark:text-zinc-200">
          {selectedOption
            ? options.find((opt) => opt.value === selectedOption)?.label
            : placeholder}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ type: "tween", duration: 0.15 }}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth="1.5" 
            stroke="currentColor" 
            className="size-4 text-zinc-500"
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
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute w-full mt-1 overflow-hidden rounded-md bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-lg"
          >
            <div className="py-1">
              {options.map((option) => (
                <motion.button
                  key={option.id}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: options.indexOf(option) * 0.1 }}
                  onClick={() => handleOptionClick(option)}
                  disabled={option.disabled}
                  className={`w-full px-4 py-2 text-left text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors duration-150 ${
                    option.disabled ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {option.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown_38; 