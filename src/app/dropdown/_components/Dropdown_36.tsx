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

const Dropdown_36: React.FC<DropdownProps> = ({
  options = [
    { id: 1, label: 'Profile', value: 'profile' },
    { id: 2, label: 'Settings', value: 'settings' },
    { id: 3, label: 'Messages', value: 'messages' },
    { id: 4, label: 'Analytics', value: 'analytics' },
    { id: 5, label: 'Logout', value: 'logout' }
  ],
  placeholder = "Select Option",
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
        className="w-full px-4 py-3 flex items-center justify-between rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
      >
        <span>
          {selectedOption
            ? options.find((opt) => opt.value === selectedOption)?.label
            : placeholder}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth="1.5" 
            stroke="currentColor" 
            className="size-6"
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
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute w-full mt-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 overflow-hidden z-50"
          >
            {options.map((option) => (
              <motion.button
                key={option.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: options.indexOf(option) * 0.1 }}
                className={`w-full px-4 py-2 text-left text-white hover:bg-white/20 transition-all duration-300 ${
                  option.disabled ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                onClick={() => handleOptionClick(option)}
                disabled={option.disabled}
              >
                {option.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown_36; 