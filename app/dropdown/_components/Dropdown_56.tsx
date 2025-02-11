'use client'
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

interface NestedOption {
  id: number;
  label: string;
  value: string;
  icon?: React.ReactNode;
  items?: NestedOption[];
}

interface DropdownProps {
  options?: NestedOption[];
  placeholder?: string;
  value?: string;
  onSelect?: (value: string) => void;
  onChange?: (value: string) => void;
}

const Dropdown_56: React.FC<DropdownProps> = ({
  options = [
    {
      id: 1,
      label: 'Social Media',
      value: 'social',
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      ),
      items: [
        { id: 11, label: 'Instagram', value: 'instagram' },
        { id: 12, label: 'Twitter', value: 'twitter' },
        { id: 13, label: 'Facebook', value: 'facebook' }
      ]
    },
    {
      id: 2,
      label: 'Productivity',
      value: 'productivity',
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      items: [
        { id: 21, label: 'Calendar', value: 'calendar' },
        { id: 22, label: 'Tasks', value: 'tasks' },
        { id: 23, label: 'Notes', value: 'notes' }
      ]
    },
    {
      id: 3,
      label: 'Development',
      value: 'development',
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      items: [
        { id: 31, label: 'Code Editor', value: 'editor' },
        { id: 32, label: 'Terminal', value: 'terminal' },
        { id: 33, label: 'Git', value: 'git' }
      ]
    }
  ],
  placeholder = "Select Category",
  value,
  onSelect,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | undefined>(value);
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    setIsOpen(false);
    setActiveCategory(null);
    if (onSelect) onSelect(value);
    if (onChange) onChange(value);
  };

  const getSelectedLabel = () => {
    for (const option of options) {
      if (option.value === selectedValue) return option.label;
      if (option.items) {
        const item = option.items.find(item => item.value === selectedValue);
        if (item) return item.label;
      }
    }
    return placeholder;
  };

  return (
    <div className="relative w-72">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.98 }}
        className="w-full px-4 py-2.5 flex items-center justify-between rounded-lg bg-gradient-to-br from-cyan-50 to-sky-50 dark:from-cyan-900/20 dark:to-sky-900/20 border border-cyan-200 dark:border-cyan-800 hover:border-cyan-400 dark:hover:border-cyan-700 transition-all duration-200"
      >
        <span className={`font-medium ${
          selectedValue 
            ? 'text-gray-900 dark:text-white' 
            : 'text-gray-500 dark:text-gray-400'
        }`}>
          {getSelectedLabel()}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 20 20" 
            fill="currentColor" 
            className="w-5 h-5 text-cyan-500"
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
            initial={{ opacity: 0, rotateX: -15, y: -10 }}
            animate={{ 
              opacity: 1,
              rotateX: 0,
              y: 0,
              transition: {
                type: "spring",
                stiffness: 500,
                damping: 30
              }
            }}
            exit={{ 
              opacity: 0,
              rotateX: -15,
              y: -10,
              transition: { duration: 0.2 }
            }}
            style={{ transformOrigin: "top center", perspective: "1000px" }}
            className="absolute w-full mt-2 py-2 bg-white dark:bg-gray-800 shadow-xl rounded-lg border border-cyan-200 dark:border-cyan-800 overflow-hidden z-50"
          >
            {options.map((category) => (
              <div key={category.id}>
                <motion.button
                  onClick={() => setActiveCategory(
                    activeCategory === category.id ? null : category.id
                  )}
                  className={`w-full px-3 py-2 flex items-center justify-between text-left transition-colors duration-150 ${
                    activeCategory === category.id
                      ? 'bg-cyan-50 dark:bg-cyan-900/20 text-cyan-600 dark:text-cyan-400'
                      : 'hover:bg-gray-50 dark:hover:bg-gray-700/50 text-gray-700 dark:text-gray-200'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-cyan-500">
                      {category.icon}
                    </span>
                    <span className="font-medium">
                      {category.label}
                    </span>
                  </div>
                  {category.items && (
                    <motion.div
                      animate={{ rotate: activeCategory === category.id ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <svg 
                        className="w-4 h-4" 
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
                  )}
                </motion.button>

                <AnimatePresence>
                  {activeCategory === category.id && category.items && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ 
                        height: "auto", 
                        opacity: 1,
                        transition: {
                          height: { type: "spring", stiffness: 500, damping: 30 },
                          opacity: { duration: 0.2 }
                        }
                      }}
                      exit={{ 
                        height: 0, 
                        opacity: 0,
                        transition: {
                          height: { duration: 0.2 },
                          opacity: { duration: 0.1 }
                        }
                      }}
                      className="overflow-hidden bg-gray-50 dark:bg-gray-900/50"
                    >
                      {category.items.map((item, index) => (
                        <motion.button
                          key={item.id}
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ 
                            x: 0, 
                            opacity: 1,
                            transition: { delay: index * 0.1 }
                          }}
                          onClick={() => handleSelect(item.value)}
                          className={`w-full px-4 py-2 pl-9 flex items-center text-left transition-colors duration-150 ${
                            selectedValue === item.value
                              ? 'text-cyan-600 dark:text-cyan-400'
                              : 'text-gray-600 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400'
                          }`}
                        >
                          <span className="font-medium">
                            {item.label}
                          </span>
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown_56; 