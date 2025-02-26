'use client'
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

interface DropdownOption {
  id: number;
  label: string;
  value: string;
  description: string;
  icon: React.ReactNode;
}

interface DropdownProps {
  options?: DropdownOption[];
  placeholder?: string;
  value?: string;
  onSelect?: (value: string) => void;
  onChange?: (value: string) => void;
}

const Dropdown_57: React.FC<DropdownProps> = ({
  options = [
    {
      id: 1,
      label: 'Light Mode',
      value: 'light',
      description: 'Clean and bright interface',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      id: 2,
      label: 'Dark Mode',
      value: 'dark',
      description: 'Easy on the eyes',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      )
    },
    {
      id: 3,
      label: 'System',
      value: 'system',
      description: 'Match system preferences',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 4,
      label: 'High Contrast',
      value: 'contrast',
      description: 'Maximum readability',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      )
    }
  ],
  placeholder = "Select Theme",
  value,
  onSelect,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | undefined>(value);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    setIsOpen(false);
    if (onSelect) onSelect(value);
    if (onChange) onChange(value);
  };

  const getSelectedOption = () => {
    return options.find(option => option.value === selectedValue);
  };

  return (
    <div className="relative w-72">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.98 }}
        className="w-full px-4 py-3 flex items-center justify-between rounded-xl bg-white dark:bg-gray-800 shadow-lg shadow-purple-500/5 hover:shadow-purple-500/10 border border-purple-100 dark:border-purple-900 hover:border-purple-200 dark:hover:border-purple-800 transition-all duration-200"
      >
        <div className="flex items-center gap-3">
          {getSelectedOption() ? (
            <>
              <span className="text-purple-500 dark:text-purple-400">
                {getSelectedOption()?.icon}
              </span>
              <span className="font-medium text-gray-900 dark:text-white">
                {getSelectedOption()?.label}
              </span>
            </>
          ) : (
            <span className="font-medium text-gray-500 dark:text-gray-400">
              {placeholder}
            </span>
          )}
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        >
          <svg 
            className="w-5 h-5 text-purple-500 dark:text-purple-400" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 9l-7 7-7-7" 
            />
          </svg>
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ 
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 500,
                damping: 30
              }
            }}
            exit={{ 
              opacity: 0,
              y: 8,
              scale: 0.96,
              transition: { duration: 0.15 }
            }}
            className="absolute w-full mt-2 py-2 bg-white dark:bg-gray-800 shadow-xl shadow-purple-500/10 rounded-xl border border-purple-100 dark:border-purple-900 overflow-hidden z-50"
          >
            {options.map((option) => (
              <motion.button
                key={option.id}
                onClick={() => handleSelect(option.value)}
                onHoverStart={() => setHoveredId(option.id)}
                onHoverEnd={() => setHoveredId(null)}
                className="w-full px-4 py-2.5 flex items-start gap-3 text-left transition-colors duration-150 relative"
              >
                <motion.div
                  initial={false}
                  animate={{
                    backgroundColor: hoveredId === option.id || selectedValue === option.value
                      ? "rgba(147, 51, 234, 0.05)"
                      : "rgba(147, 51, 234, 0)",
                  }}
                  className="absolute inset-0 z-0"
                />
                <span className={`relative z-10 ${
                  selectedValue === option.value
                    ? 'text-purple-500 dark:text-purple-400'
                    : 'text-gray-600 dark:text-gray-300'
                }`}>
                  {option.icon}
                </span>
                <div className="relative z-10 flex-1">
                  <p className={`font-medium mb-0.5 ${
                    selectedValue === option.value
                      ? 'text-purple-600 dark:text-purple-400'
                      : 'text-gray-900 dark:text-white'
                  }`}>
                    {option.label}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {option.description}
                  </p>
                </div>
                {selectedValue === option.value && (
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.5, opacity: 0 }}
                    className="relative z-10 flex items-center self-center"
                  >
                    <svg 
                      className="w-5 h-5 text-purple-500 dark:text-purple-400" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M5 13l4 4L19 7" 
                      />
                    </svg>
                  </motion.div>
                )}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown_57; 