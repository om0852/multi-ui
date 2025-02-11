'use client'
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useRef, useEffect } from "react";

interface DropdownOption {
  id: number;
  label: string;
  value: string;
  color?: string;
}

interface DropdownProps {
  options: DropdownOption[];
  placeholder?: string;
  values?: string[];
  onSelect?: (selectedValues: string[]) => void;
  onChange?: (selectedValues: string[]) => void;
}

const Dropdown_54: React.FC<DropdownProps> = ({
  options = [
    { id: 1, label: 'Red', value: 'red', color: '#EF4444' },
    { id: 2, label: 'Blue', value: 'blue', color: '#3B82F6' },
    { id: 3, label: 'Green', value: 'green', color: '#10B981' },
    { id: 4, label: 'Yellow', value: 'yellow', color: '#F59E0B' },
    { id: 5, label: 'Purple', value: 'purple', color: '#8B5CF6' },
    { id: 6, label: 'Pink', value: 'pink', color: '#EC4899' },
    { id: 7, label: 'Orange', value: 'orange', color: '#F97316' },
    { id: 8, label: 'Teal', value: 'teal', color: '#14B8A6' }
  ],
  placeholder = "Select Colors",
  values = [],
  onSelect,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValues, setSelectedValues] = useState<string[]>(values);
  const [searchTerm, setSearchTerm] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleOptionClick = (option: DropdownOption) => {
    const newValues = selectedValues.includes(option.value)
      ? selectedValues.filter(v => v !== option.value)
      : [...selectedValues, option.value];
    
    setSelectedValues(newValues);
    if (onSelect) onSelect(newValues);
    if (onChange) onChange(newValues);
  };

  const handleSelectAll = () => {
    const newValues = selectedValues.length === options.length
      ? []
      : options.map(opt => opt.value);
    
    setSelectedValues(newValues);
    if (onSelect) onSelect(newValues);
    if (onChange) onChange(newValues);
  };

  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen]);

  const filteredOptions = options.filter(option =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative w-72">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.98 }}
        className="w-full px-4 py-2.5 flex items-center justify-between rounded-lg bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20 border border-rose-200 dark:border-rose-800 hover:border-rose-400 dark:hover:border-rose-700 transition-all duration-200"
      >
        <div className="flex items-center gap-2 overflow-hidden">
          {selectedValues.length > 0 ? (
            <div className="flex -space-x-1">
              {selectedValues.slice(0, 3).map((value) => {
                const option = options.find(opt => opt.value === value);
                return (
                  <div
                    key={value}
                    className="w-4 h-4 rounded-full border-2 border-white dark:border-gray-800"
                    style={{ backgroundColor: option?.color }}
                  />
                );
              })}
              {selectedValues.length > 3 && (
                <div className="w-4 h-4 rounded-full bg-gray-200 dark:bg-gray-700 border-2 border-white dark:border-gray-800 flex items-center justify-center text-[8px] font-medium text-gray-600 dark:text-gray-300">
                  +{selectedValues.length - 3}
                </div>
              )}
            </div>
          ) : (
            <span className="text-gray-500 dark:text-gray-400">
              {placeholder}
            </span>
          )}
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 20 20" 
            fill="currentColor" 
            className="w-5 h-5 text-rose-500"
          >
            <path 
              fillRule="evenodd" 
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" 
              clipRule="evenodd" 
            />
          </svg>
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
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
              y: -10,
              transition: { duration: 0.2 }
            }}
            className="absolute w-full mt-2 py-2 bg-white dark:bg-gray-800 shadow-xl rounded-lg border border-rose-200 dark:border-rose-800 overflow-hidden z-50"
          >
            <div className="px-3 pb-2">
              <div className="relative">
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search colors..."
                  className="w-full px-3 py-2 pl-9 bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-800 rounded-md text-sm focus:outline-none focus:border-rose-400 dark:focus:border-rose-700 transition-colors duration-200"
                />
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth={2} 
                  stroke="currentColor" 
                  className="w-4 h-4 text-rose-500 absolute left-3 top-2.5"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" 
                  />
                </svg>
              </div>
            </div>

            <div className="px-3 py-1 border-t border-b border-gray-100 dark:border-gray-700">
              <button
                onClick={handleSelectAll}
                className="w-full px-2 py-1.5 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-rose-500 dark:hover:text-rose-400 transition-colors duration-150"
              >
                {selectedValues.length === options.length ? 'Deselect All' : 'Select All'}
              </button>
            </div>

            <div className="max-h-64 overflow-y-auto mt-1">
              {filteredOptions.map((option, index) => (
                <motion.button
                  key={option.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ 
                    opacity: 1,
                    x: 0,
                    transition: { delay: index * 0.05 }
                  }}
                  onClick={() => handleOptionClick(option)}
                  className={`w-full px-3 py-2 flex items-center gap-3 text-left transition-colors duration-150 ${
                    selectedValues.includes(option.value)
                      ? 'bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400'
                      : 'hover:bg-gray-50 dark:hover:bg-gray-700/50 text-gray-700 dark:text-gray-200'
                  }`}
                >
                  <div className="relative flex items-center justify-center">
                    <div 
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: option.color }}
                    />
                    {selectedValues.includes(option.value) && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <svg 
                          className="w-3 h-3 text-white drop-shadow" 
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path 
                            fillRule="evenodd" 
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                            clipRule="evenodd"
                          />
                        </svg>
                      </motion.div>
                    )}
                  </div>
                  <span className="font-medium">
                    {option.label}
                  </span>
                </motion.button>
              ))}

              {filteredOptions.length === 0 && (
                <div className="px-3 py-2 text-sm text-gray-500 dark:text-gray-400">
                  No colors found
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown_54; 