'use client'
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface DropdownOption {
  id: number;
  label: string;
  value: string;
  color?: string;
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

const Dropdown_42: React.FC<DropdownProps> = ({
  options = [
    { id: 1, label: 'Purple', value: 'purple', color: 'purple' },
    { id: 2, label: 'Teal', value: 'teal', color: 'teal' },
    { id: 3, label: 'Orange', value: 'orange', color: 'orange' },
    { id: 4, label: 'Pink', value: 'pink', color: 'pink' }
  ],
  placeholder = "Select Color",
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

  const getGlowColor = (color?: string) => {
    switch (color) {
      case 'purple': return 'hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]';
      case 'teal': return 'hover:shadow-[0_0_20px_rgba(45,212,191,0.5)]';
      case 'orange': return 'hover:shadow-[0_0_20px_rgba(251,146,60,0.5)]';
      case 'pink': return 'hover:shadow-[0_0_20px_rgba(236,72,153,0.5)]';
      default: return 'hover:shadow-[0_0_20px_rgba(99,102,241,0.5)]';
    }
  };

  const getTextColor = (color?: string) => {
    switch (color) {
      case 'purple': return 'text-purple-500';
      case 'teal': return 'text-teal-500';
      case 'orange': return 'text-orange-500';
      case 'pink': return 'text-pink-500';
      default: return 'text-indigo-500';
    }
  };

  return (
    <div className="relative w-72" ref={containerRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`group w-full px-5 py-3 flex items-center justify-between rounded-2xl bg-black text-white border border-white/10 shadow-[0_0_10px_rgba(99,102,241,0.2)] ${
          selectedOption 
            ? getGlowColor(options.find(opt => opt.value === selectedOption)?.color)
            : 'hover:shadow-[0_0_20px_rgba(99,102,241,0.5)]'
        } transition-all duration-300`}
      >
        <span className={`font-medium ${
          selectedOption && options.find(opt => opt.value === selectedOption)?.color
            ? getTextColor(options.find(opt => opt.value === selectedOption)?.color)
            : 'text-white'
        }`}>
          {selectedOption
            ? options.find((opt) => opt.value === selectedOption)?.label
            : placeholder}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
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
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute w-full mt-2 py-2 rounded-2xl bg-black shadow-lg shadow-white/10 border border-white/10 overflow-hidden z-50"
          >
            {options.map((option, index) => (
              <motion.button
                key={option.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 150,
                  damping: 15
                }}
                onClick={() => handleOptionClick(option)}
                disabled={option.disabled}
                className={`w-full px-5 py-2.5 flex items-center justify-between text-left hover:bg-white/5 transition-colors duration-150 ${
                  selectedOption === option.value ? 'bg-white/5' : ''
                } ${
                  option.disabled ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                <span className={`font-medium ${getTextColor(option.color)}`}>
                  {option.label}
                </span>
                {option.color && (
                  <span className={`w-3 h-3 rounded-full ${
                    option.color === 'purple' ? 'bg-purple-500' :
                    option.color === 'teal' ? 'bg-teal-500' :
                    option.color === 'orange' ? 'bg-orange-500' :
                    option.color === 'pink' ? 'bg-pink-500' :
                    'bg-indigo-500'
                  }`} />
                )}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown_42; 