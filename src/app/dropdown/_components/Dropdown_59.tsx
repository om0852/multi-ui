'use client'
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

interface DropdownOption {
  id: number;
  label: string;
  value: string;
  description: string;
  color: string;
}

interface DropdownProps {
  options?: DropdownOption[];
  placeholder?: string;
  value?: string;
  onSelect?: (value: string) => void;
  onChange?: (value: string) => void;
}

const Dropdown_59: React.FC<DropdownProps> = ({
  options = [
    {
      id: 1,
      label: 'Beginner',
      value: 'beginner',
      description: 'Just starting out',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 2,
      label: 'Intermediate',
      value: 'intermediate',
      description: 'Comfortable with basics',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      id: 3,
      label: 'Advanced',
      value: 'advanced',
      description: 'Highly skilled',
      color: 'from-purple-500 to-violet-500'
    },
    {
      id: 4,
      label: 'Expert',
      value: 'expert',
      description: 'Master level',
      color: 'from-rose-500 to-pink-500'
    }
  ],
  placeholder = "Select Level",
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
        className="w-full px-4 py-3 flex items-center justify-between rounded-xl bg-white dark:bg-gray-800 shadow-lg shadow-gray-200/20 dark:shadow-none border border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600 transition-all duration-200"
      >
        <div className="flex items-center gap-3">
          {getSelectedOption() ? (
            <>
              <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${getSelectedOption()?.color}`} />
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
            className="w-5 h-5 text-gray-500 dark:text-gray-400" 
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
            className="absolute w-full mt-2 py-2 bg-white dark:bg-gray-800 shadow-xl shadow-gray-200/20 dark:shadow-none rounded-xl border border-gray-100 dark:border-gray-700 overflow-hidden z-50"
          >
            {options.map((option) => (
              <motion.button
                key={option.id}
                onClick={() => handleSelect(option.value)}
                onHoverStart={() => setHoveredId(option.id)}
                onHoverEnd={() => setHoveredId(null)}
                className="w-full px-4 py-2.5 flex items-start gap-3 text-left transition-colors duration-150 relative group"
              >
                <motion.div
                  initial={false}
                  animate={{
                    backgroundColor: hoveredId === option.id
                      ? "rgba(0, 0, 0, 0.03)"
                      : "rgba(0, 0, 0, 0)",
                  }}
                  className="absolute inset-0 dark:group-hover:bg-white/[0.03] z-0"
                />
                <div className={`w-3 h-3 mt-1 rounded-full bg-gradient-to-r ${option.color} relative z-10`} />
                <div className="flex-1 relative z-10">
                  <p className={`font-medium mb-0.5 ${
                    selectedValue === option.value
                      ? 'text-gray-900 dark:text-white'
                      : 'text-gray-700 dark:text-gray-200'
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
                      className="w-5 h-5 text-gray-500 dark:text-gray-400" 
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

export default Dropdown_59; 