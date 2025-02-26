'use client'
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useRef, useEffect } from "react";

interface DropdownOption {
  id: number;
  label: string;
  value: string;
  icon?: string;
}

interface DropdownProps {
  options: DropdownOption[];
  placeholder?: string;
  value?: string;
  onSelect?: (selectedValue: string) => void;
  onChange?: (selectedValue: string) => void;
}

const Dropdown_52: React.FC<DropdownProps> = ({
  options = [
    { id: 1, label: 'United States', value: 'us', icon: '🇺🇸' },
    { id: 2, label: 'United Kingdom', value: 'uk', icon: '🇬🇧' },
    { id: 3, label: 'Canada', value: 'ca', icon: '🇨🇦' },
    { id: 4, label: 'Australia', value: 'au', icon: '🇦🇺' },
    { id: 5, label: 'Germany', value: 'de', icon: '🇩🇪' },
    { id: 6, label: 'France', value: 'fr', icon: '🇫🇷' },
    { id: 7, label: 'Japan', value: 'jp', icon: '🇯🇵' },
    { id: 8, label: 'Brazil', value: 'br', icon: '🇧🇷' },
    { id: 9, label: 'India', value: 'in', icon: '🇮🇳' },
    { id: 10, label: 'China', value: 'cn', icon: '🇨🇳' }
  ],
  placeholder = "Select Country",
  value,
  onSelect,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | undefined>(value);
  const [searchTerm, setSearchTerm] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleOptionClick = (option: DropdownOption) => {
    setSelectedOption(option.value);
    setIsOpen(false);
    setSearchTerm("");
    if (onSelect) onSelect(option.value);
    if (onChange) onChange(option.value);
  };

  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen]);

  const filteredOptions = options.filter(option =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const highlightMatch = (text: string) => {
    if (!searchTerm) return text;
    const parts = text.split(new RegExp(`(${searchTerm})`, 'gi'));
    return parts.map((part, index) => 
      part.toLowerCase() === searchTerm.toLowerCase() ? (
        <span key={index} className="bg-yellow-200 dark:bg-yellow-500/30 rounded px-0.5">
          {part}
        </span>
      ) : part
    );
  };

  return (
    <div className="relative w-72">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.98 }}
        className="w-full px-4 py-2.5 flex items-center justify-between rounded-lg bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border border-emerald-200 dark:border-emerald-800 hover:border-emerald-400 dark:hover:border-emerald-700 transition-all duration-200"
      >
        <div className="flex items-center gap-2">
          {selectedOption && (
            <span className="text-xl">
              {options.find(opt => opt.value === selectedOption)?.icon}
            </span>
          )}
          <span className={`font-medium ${
            selectedOption 
              ? 'text-gray-900 dark:text-white' 
              : 'text-gray-500 dark:text-gray-400'
          }`}>
            {selectedOption
              ? options.find((opt) => opt.value === selectedOption)?.label
              : placeholder}
          </span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 20 20" 
            fill="currentColor" 
            className="w-5 h-5 text-emerald-500"
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
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ 
              opacity: 1,
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 500,
                damping: 30
              }
            }}
            exit={{ 
              opacity: 0,
              scale: 0.95,
              transition: { duration: 0.2 }
            }}
            className="absolute w-full mt-2 py-2 bg-white dark:bg-gray-800 shadow-xl rounded-lg border border-emerald-200 dark:border-emerald-800 overflow-hidden z-50"
          >
            <div className="px-3 pb-2">
              <div className="relative">
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Type to search..."
                  className="w-full px-3 py-2 pl-9 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-md text-sm focus:outline-none focus:border-emerald-400 dark:focus:border-emerald-700 transition-colors duration-200"
                />
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth={2} 
                  stroke="currentColor" 
                  className="w-4 h-4 text-emerald-500 absolute left-3 top-2.5"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" 
                  />
                </svg>
              </div>
            </div>

            <div className="max-h-64 overflow-y-auto">
              {filteredOptions.map((option, index) => (
                <motion.button
                  key={option.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ 
                    opacity: 1,
                    y: 0,
                    transition: { delay: index * 0.05 }
                  }}
                  onClick={() => handleOptionClick(option)}
                  className={`w-full px-3 py-2 flex items-center gap-2 text-left transition-colors duration-150 ${
                    selectedOption === option.value
                      ? 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400'
                      : 'hover:bg-gray-50 dark:hover:bg-gray-700/50 text-gray-700 dark:text-gray-200'
                  }`}
                >
                  <span className="text-xl">
                    {option.icon}
                  </span>
                  <span className="font-medium">
                    {highlightMatch(option.label)}
                  </span>
                </motion.button>
              ))}

              {filteredOptions.length === 0 && (
                <div className="px-3 py-2 text-sm text-gray-500 dark:text-gray-400">
                  No countries found
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown_52; 