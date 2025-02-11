 'use client'
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useRef, useEffect } from "react";

interface DropdownOption {
  id: number;
  label: string;
  value: string;
  description?: string;
  icon?: React.ReactNode;
}

interface DropdownProps {
  options: DropdownOption[];
  placeholder?: string;
  value?: string;
  onSelect?: (selectedValue: string) => void;
  onChange?: (selectedValue: string) => void;
}

const Dropdown_55: React.FC<DropdownProps> = ({
  options = [
    { 
      id: 1, 
      label: 'Visual Studio Code', 
      value: 'vscode',
      description: 'Popular code editor by Microsoft',
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"/>
        </svg>
      )
    },
    { 
      id: 2, 
      label: 'Sublime Text', 
      value: 'sublime',
      description: 'Fast and lightweight editor',
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21.953 8.608c-.019-.07-.082-.118-.154-.118h-.916c-.072 0-.135.048-.154.118l-.476 1.834c-.019.07.022.142.094.142h.916c.072 0 .135-.048.154-.118l.476-1.834c.019-.07-.022-.142-.094-.142zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"/>
        </svg>
      )
    },
    { 
      id: 3, 
      label: 'Atom', 
      value: 'atom',
      description: 'Hackable text editor',
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 1.5a.75.75 0 0 1 .75.75v2.25h1.5a.75.75 0 0 1 0 1.5h-1.5v2.25a.75.75 0 0 1-1.5 0V6h-1.5a.75.75 0 0 1 0-1.5h1.5V2.25A.75.75 0 0 1 12 1.5z"/>
        </svg>
      )
    },
    { 
      id: 4, 
      label: 'Vim', 
      value: 'vim',
      description: 'Modal text editor',
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12l-5.657-5.657-2.828 2.828L18.172 12l-2.657 2.657 2.828 2.828L24 12zM12 24l5.657-5.657-2.828-2.828L12 18.172l-2.657-2.657-2.828 2.828L12 24zM0 12l5.657 5.657 2.828-2.828L5.828 12l2.657-2.657-2.828-2.828L0 12zm12-12L6.343 5.657l2.828 2.828L12 5.828l2.657 2.657 2.828-2.828L12 0z"/>
        </svg>
      )
    }
  ],
  placeholder = "Select Editor",
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

  const fuzzySearch = (text: string, search: string) => {
    const searchLower = search.toLowerCase();
    const textLower = text.toLowerCase();
    const searchLength = searchLower.length;
    const textLength = textLower.length;
    
    if (searchLength > textLength) {
      return false;
    }
    if (searchLength === 0) {
      return true;
    }
    
    let searchIdx = 0;
    let textIdx = 0;
    
    while (searchIdx !== searchLength) {
      if (textIdx === textLength) {
        return false;
      }
      if (searchLower[searchIdx] === textLower[textIdx]) {
        searchIdx++;
      }
      textIdx++;
    }
    
    return true;
  };

  const getHighlightedText = (text: string, search: string) => {
    if (!search) return text;

    const textLower = text.toLowerCase();
    const searchLower = search.toLowerCase();
    const parts: { text: string; highlight: boolean }[] = [];
    let currentIndex = 0;

    for (let i = 0; i < text.length; i++) {
      if (textLower[i] === searchLower[currentIndex]) {
        parts.push({ text: text[i], highlight: true });
        currentIndex++;
      } else {
        parts.push({ text: text[i], highlight: false });
      }
    }

    return parts.map((part, index) => 
      part.highlight ? (
        <span key={index} className="bg-amber-200 dark:bg-amber-500/30 rounded-sm">
          {part.text}
        </span>
      ) : part.text
    );
  };

  const filteredOptions = options.filter(option =>
    fuzzySearch(option.label, searchTerm) ||
    fuzzySearch(option.description || '', searchTerm)
  );

  return (
    <div className="relative w-72">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.98 }}
        className="w-full px-4 py-2.5 flex items-center justify-between rounded-lg bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border border-amber-200 dark:border-amber-800 hover:border-amber-400 dark:hover:border-amber-700 transition-all duration-200"
      >
        <div className="flex items-center gap-2">
          {selectedOption && (
            <span className="text-amber-600 dark:text-amber-400">
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
            className="w-5 h-5 text-amber-500"
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
            className="absolute w-full mt-2 py-2 bg-white dark:bg-gray-800 shadow-xl rounded-lg border border-amber-200 dark:border-amber-800 overflow-hidden z-50"
          >
            <div className="px-3 pb-2">
              <div className="relative">
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Type to search..."
                  className="w-full px-3 py-2 pl-9 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-md text-sm focus:outline-none focus:border-amber-400 dark:focus:border-amber-700 transition-colors duration-200"
                />
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth={2} 
                  stroke="currentColor" 
                  className="w-4 h-4 text-amber-500 absolute left-3 top-2.5"
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
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ 
                    opacity: 1,
                    x: 0,
                    transition: { delay: index * 0.05 }
                  }}
                  onClick={() => handleOptionClick(option)}
                  className={`w-full px-3 py-2 flex items-center gap-3 text-left transition-colors duration-150 ${
                    selectedOption === option.value
                      ? 'bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400'
                      : 'hover:bg-gray-50 dark:hover:bg-gray-700/50 text-gray-700 dark:text-gray-200'
                  }`}
                >
                  <span className="text-amber-600 dark:text-amber-400 flex-shrink-0">
                    {option.icon}
                  </span>
                  <div className="flex flex-col min-w-0">
                    <span className="font-medium truncate">
                      {getHighlightedText(option.label, searchTerm)}
                    </span>
                    {option.description && (
                      <span className="text-sm text-gray-500 dark:text-gray-400 truncate">
                        {getHighlightedText(option.description, searchTerm)}
                      </span>
                    )}
                  </div>
                </motion.button>
              ))}

              {filteredOptions.length === 0 && (
                <div className="px-3 py-2 text-sm text-gray-500 dark:text-gray-400">
                  No editors found
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown_55;