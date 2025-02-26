'use client'
import { motion, AnimatePresence } from "framer-motion";
import React, {  useRef, useState } from "react";

interface DropdownOption {
  id: number;
  label: string;
  value: string;
  description?: string;
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

const Dropdown_43: React.FC<DropdownProps> = ({
  options = [
    { id: 1, label: 'Beginner', value: 'beginner', description: 'Perfect for getting started' },
    { id: 2, label: 'Intermediate', value: 'intermediate', description: 'For those with some experience' },
    { id: 3, label: 'Advanced', value: 'advanced', description: 'For experienced users' },
    { id: 4, label: 'Expert', value: 'expert', description: 'Master level difficulty' }
  ],
  placeholder = "Select Difficulty",
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
        className="group w-full px-5 py-3 flex items-center justify-between rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
      >
        <span className="font-medium">
          {selectedOption
            ? options.find((opt) => opt.value === selectedOption)?.label
            : placeholder}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ 
            type: "tween",
            duration: 0.15
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
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute w-full mt-2 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 overflow-hidden z-50"
          >
            <div className="py-2">
              {options.map((option) => (
                <motion.button
                  key={option.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: options.indexOf(option) * 0.1 }}
                  onClick={() => handleOptionClick(option)}
                  disabled={option.disabled}
                  className={`w-full px-5 py-3 flex flex-col items-start text-left hover:bg-white/10 transition-colors duration-150 ${
                    selectedOption === option.value ? 'bg-white/10' : ''
                  } ${
                    option.disabled ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  <span className="font-medium text-white">
                    {option.label}
                  </span>
                  {option.description && (
                    <span className="text-sm text-white/60 mt-0.5">
                      {option.description}
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

export default Dropdown_43; 