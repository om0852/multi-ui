'use client'
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useRef, useEffect } from "react";

interface DropdownOption {
  id: number;
  label: string;
  value: string;
  tags?: string[];
}

interface DropdownProps {
  options: DropdownOption[];
  placeholder?: string;
  value?: string;
  onSelect?: (selectedValue: string) => void;
  onChange?: (selectedValue: string) => void;
}

const Dropdown_53: React.FC<DropdownProps> = ({
  options = [
    { id: 1, label: 'React Developer', value: 'react', tags: ['Frontend', 'JavaScript', 'Web'] },
    { id: 2, label: 'UI/UX Designer', value: 'design', tags: ['Design', 'Creative', 'Web'] },
    { id: 3, label: 'Node.js Developer', value: 'node', tags: ['Backend', 'JavaScript', 'Server'] },
    { id: 4, label: 'Python Engineer', value: 'python', tags: ['Backend', 'Data', 'AI'] },
    { id: 5, label: 'DevOps Engineer', value: 'devops', tags: ['Infrastructure', 'Cloud', 'CI/CD'] },
    { id: 6, label: 'Product Manager', value: 'product', tags: ['Management', 'Strategy', 'Leadership'] },
    { id: 7, label: 'Data Scientist', value: 'data', tags: ['Analytics', 'AI', 'Statistics'] },
    { id: 8, label: 'Mobile Developer', value: 'mobile', tags: ['iOS', 'Android', 'Apps'] }
  ],
  placeholder = "Select Role",
  value,
  onSelect,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | undefined>(value);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleOptionClick = (option: DropdownOption) => {
    setSelectedOption(option.value);
    setIsOpen(false);
    setSearchTerm("");
    setSelectedTags([]);
    if (onSelect) onSelect(option.value);
    if (onChange) onChange(option.value);
  };

  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen]);

  const allTags = Array.from(
    new Set(
      options.flatMap(option => option.tags || [])
    )
  ).sort();

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const filteredOptions = options.filter(option => {
    const matchesSearch = option.label.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTags = selectedTags.length === 0 || 
      selectedTags.every(tag => option.tags?.includes(tag));
    return matchesSearch && matchesTags;
  });

  return (
    <div className="relative w-72">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.98 }}
        className="w-full px-4 py-2.5 flex items-center justify-between rounded-lg bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 border border-indigo-200 dark:border-indigo-800 hover:border-indigo-400 dark:hover:border-indigo-700 transition-all duration-200"
      >
        <span className={`font-medium ${
          selectedOption 
            ? 'text-gray-900 dark:text-white' 
            : 'text-gray-500 dark:text-gray-400'
        }`}>
          {selectedOption
            ? options.find((opt) => opt.value === selectedOption)?.label
            : placeholder}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 20 20" 
            fill="currentColor" 
            className="w-5 h-5 text-indigo-500"
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
            className="absolute w-full mt-2 py-2 bg-white dark:bg-gray-800 shadow-xl rounded-lg border border-indigo-200 dark:border-indigo-800 overflow-hidden z-50"
          >
            <div className="px-3 pb-2 space-y-2">
              <div className="relative">
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search roles..."
                  className="w-full px-3 py-2 pl-9 bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-md text-sm focus:outline-none focus:border-indigo-400 dark:focus:border-indigo-700 transition-colors duration-200"
                />
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth={2} 
                  stroke="currentColor" 
                  className="w-4 h-4 text-indigo-500 absolute left-3 top-2.5"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" 
                  />
                </svg>
              </div>

              <div className="flex flex-wrap gap-1">
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    className={`px-2 py-1 text-xs font-medium rounded-full transition-colors duration-200 ${
                      selectedTags.includes(tag)
                        ? 'bg-indigo-500 text-white'
                        : 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-900/40'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            <div className="max-h-64 overflow-y-auto mt-2">
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
                  className={`w-full px-3 py-2 flex flex-col text-left transition-colors duration-150 ${
                    selectedOption === option.value
                      ? 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400'
                      : 'hover:bg-gray-50 dark:hover:bg-gray-700/50 text-gray-700 dark:text-gray-200'
                  }`}
                >
                  <span className="font-medium">
                    {option.label}
                  </span>
                  {option.tags && (
                    <div className="flex flex-wrap gap-1 mt-1">
                      {option.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-1.5 py-0.5 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.button>
              ))}

              {filteredOptions.length === 0 && (
                <div className="px-3 py-2 text-sm text-gray-500 dark:text-gray-400">
                  No roles found
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown_53; 