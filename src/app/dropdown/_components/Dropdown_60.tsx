'use client'
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

interface DropdownOption {
  id: number;
  label: string;
  value: string;
  shortcut?: string;
  icon: React.ReactNode;
}

interface DropdownProps {
  options?: DropdownOption[];
  placeholder?: string;
  value?: string;
  onSelect?: (value: string) => void;
  onChange?: (value: string) => void;
}

const Dropdown_60: React.FC<DropdownProps> = ({
  options = [
    {
      id: 1,
      label: 'Save',
      value: 'save',
      shortcut: '⌘S',
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
        </svg>
      )
    },
    {
      id: 2,
      label: 'Save As',
      value: 'save-as',
      shortcut: '⌘⇧S',
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-7a2 2 0 012-2h2m3-4H9a2 2 0 00-2 2v7a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-1m-1 4l-3 3m0 0l-3-3m3 3V3" />
        </svg>
      )
    },
    {
      id: 3,
      label: 'Export',
      value: 'export',
      shortcut: '⌘E',
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      id: 4,
      label: 'Print',
      value: 'print',
      shortcut: '⌘P',
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
        </svg>
      )
    }
  ],
  placeholder = "Save Options",
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
    return options.find(option => option.value === selectedValue) || options[0];
  };

  return (
    <div className="relative w-64">
      <div className="flex gap-px">
        <motion.button
          onClick={() => handleSelect(getSelectedOption().value)}
          whileTap={{ scale: 0.98 }}
          className="flex-1 px-3 py-2 flex items-center gap-2 rounded-l-lg bg-indigo-500 hover:bg-indigo-600 text-white transition-colors duration-200"
        >
          <span className="text-indigo-100">
            {getSelectedOption().icon}
          </span>
          <span className="font-medium">
            {getSelectedOption().label}
          </span>
        </motion.button>
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.98 }}
          className="px-2 py-2 flex items-center justify-center rounded-r-lg bg-indigo-500 hover:bg-indigo-600 text-white border-l border-indigo-400 transition-colors duration-200"
        >
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <svg 
              className="w-4 h-4 text-indigo-100" 
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
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ 
              opacity: 1,
              y: 0,
              transition: {
                type: "spring",
                stiffness: 500,
                damping: 30
              }
            }}
            exit={{ 
              opacity: 0,
              y: 4,
              transition: { duration: 0.15 }
            }}
            className="absolute w-full mt-1 py-1 bg-white dark:bg-gray-800 shadow-lg rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden z-50"
          >
            {options.map((option) => (
              <motion.button
                key={option.id}
                onClick={() => handleSelect(option.value)}
                onHoverStart={() => setHoveredId(option.id)}
                onHoverEnd={() => setHoveredId(null)}
                className={`w-full px-3 py-1.5 flex items-center justify-between text-left transition-colors duration-150 ${
                  hoveredId === option.id
                    ? 'bg-indigo-50 dark:bg-indigo-900/20'
                    : ''
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className={`${
                    selectedValue === option.value
                      ? 'text-indigo-500 dark:text-indigo-400'
                      : 'text-gray-600 dark:text-gray-300'
                  }`}>
                    {option.icon}
                  </span>
                  <span className={`font-medium ${
                    selectedValue === option.value
                      ? 'text-indigo-600 dark:text-indigo-400'
                      : 'text-gray-900 dark:text-white'
                  }`}>
                    {option.label}
                  </span>
                </div>
                {option.shortcut && (
                  <span className={`text-sm ${
                    selectedValue === option.value
                      ? 'text-indigo-500 dark:text-indigo-400'
                      : 'text-gray-500 dark:text-gray-400'
                  }`}>
                    {option.shortcut}
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

export default Dropdown_60; 