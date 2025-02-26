'use client'
import { motion, AnimatePresence } from "framer-motion";
import React, { useRef, useState } from "react";

interface DropdownOption {
  id: number;
  label: string;
  value: string;
  emoji?: string;
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

const Dropdown_46: React.FC<DropdownProps> = ({
  options = [
    { id: 1, label: 'Happy', value: 'happy', emoji: '😊' },
    { id: 2, label: 'Love', value: 'love', emoji: '❤️' },
    { id: 3, label: 'Cool', value: 'cool', emoji: '😎' },
    { id: 4, label: 'Party', value: 'party', emoji: '🎉' }
  ],
  placeholder = "Select Mood",
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
        className="group w-full px-6 py-4 flex items-center justify-between rounded-full bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 text-white shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 transition-all duration-300"
      >
        <div className="flex items-center gap-3">
          {selectedOption && options.find((opt) => opt.value === selectedOption)?.emoji && (
            <span className="text-2xl">
              {options.find((opt) => opt.value === selectedOption)?.emoji}
            </span>
          )}
          <span className="font-medium">
            {selectedOption
              ? options.find((opt) => opt.value === selectedOption)?.label
              : placeholder}
          </span>
        </div>
        <motion.div
          animate={{ 
            rotate: isOpen ? 180 : 0,
            scale: isOpen ? 1.2 : 1
          }}
          transition={{ 
            type: "spring",
            stiffness: 400,
            damping: 17
          }}
          className="relative w-5 h-5"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth="3" 
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
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: 0,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 25,
                mass: 0.5
              }
            }}
            exit={{ 
              opacity: 0, 
              scale: 0.8, 
              y: 20,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 25,
                mass: 0.5
              }
            }}
            className="absolute w-full mt-4 py-3 rounded-2xl bg-white dark:bg-gray-800 shadow-xl shadow-pink-500/20 border border-pink-100 dark:border-pink-900/20 overflow-hidden z-50"
          >
            {options.map((option, index) => (
              <motion.button
                key={option.id}
                initial={{ opacity: 0, scale: 0.3 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 400,
                  damping: 20
                }}
                onClick={() => handleOptionClick(option)}
                disabled={option.disabled}
                className={`w-full px-6 py-3 flex items-center gap-3 text-left hover:bg-pink-50 dark:hover:bg-pink-500/10 transition-colors duration-150 ${
                  selectedOption === option.value ? 'bg-pink-50 dark:bg-pink-500/10' : ''
                } ${
                  option.disabled ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {option.emoji && (
                  <span className="text-2xl">
                    {option.emoji}
                  </span>
                )}
                <span className={`font-medium ${
                  selectedOption === option.value 
                    ? 'text-pink-600 dark:text-pink-400' 
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

export default Dropdown_46; 