import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

interface LanguageOption {
  id: number;
  label: string;
  value: string;
  nativeName: string;
  flag: string;
  proficiency: {
    speaking: number;
    writing: number;
    reading: number;
  };
}

interface DropdownProps {
  options?: LanguageOption[];
  placeholder?: string;
  value?: string;
  onSelect?: (value: string) => void;
  onChange?: (value: string) => void;
}

const Dropdown_71: React.FC<DropdownProps> = ({
  options = [
    {
      id: 1,
      label: 'English',
      value: 'en',
      nativeName: 'English',
      flag: '🇬🇧',
      proficiency: {
        speaking: 5,
        writing: 4,
        reading: 5
      }
    },
    {
      id: 2,
      label: 'Spanish',
      value: 'es',
      nativeName: 'Español',
      flag: '🇪🇸',
      proficiency: {
        speaking: 4,
        writing: 3,
        reading: 4
      }
    },
    {
      id: 3,
      label: 'French',
      value: 'fr',
      nativeName: 'Français',
      flag: '🇫🇷',
      proficiency: {
        speaking: 3,
        writing: 3,
        reading: 4
      }
    },
    {
      id: 4,
      label: 'Japanese',
      value: 'ja',
      nativeName: '日本語',
      flag: '🇯🇵',
      proficiency: {
        speaking: 2,
        writing: 2,
        reading: 3
      }
    }
  ],
  placeholder = "Select Language",
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

  const renderProficiencyBar = (level: number) => {
    return (
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((n) => (
          <div
            key={n}
            className={`w-2 h-2 rounded-full ${
              n <= level
                ? 'bg-violet-500'
                : 'bg-gray-200 dark:bg-gray-700'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="relative w-96">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.98 }}
        className="w-full px-4 py-2.5 flex items-center justify-between rounded-lg bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700 hover:border-violet-500 dark:hover:border-violet-500 transition-colors duration-200"
      >
        <div className="flex items-center gap-3">
          {getSelectedOption() ? (
            <>
              <span className="text-2xl">
                {getSelectedOption()?.flag}
              </span>
              <div>
                <span className="font-medium text-gray-900 dark:text-white block">
                  {getSelectedOption()?.label}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {getSelectedOption()?.nativeName}
                </span>
              </div>
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
            className="absolute w-full mt-2 py-2 bg-white dark:bg-gray-800 shadow-xl rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden z-50"
          >
            <div className="px-2">
              {options.map((option) => (
                <motion.button
                  key={option.id}
                  onClick={() => handleSelect(option.value)}
                  onHoverStart={() => setHoveredId(option.id)}
                  onHoverEnd={() => setHoveredId(null)}
                  className={`w-full p-3 flex items-start gap-3 rounded-lg ${
                    hoveredId === option.id
                      ? 'bg-gray-50 dark:bg-gray-900/50'
                      : ''
                  }`}
                >
                  {/* Flag */}
                  <span className="text-2xl flex-shrink-0">
                    {option.flag}
                  </span>

                  {/* Language Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className={`font-medium ${
                          selectedValue === option.value
                            ? 'text-violet-600 dark:text-violet-400'
                            : 'text-gray-900 dark:text-white'
                        }`}>
                          {option.label}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {option.nativeName}
                        </p>
                      </div>
                    </div>

                    {/* Proficiency Levels */}
                    <div className="mt-2 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          Speaking
                        </span>
                        {renderProficiencyBar(option.proficiency.speaking)}
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          Writing
                        </span>
                        {renderProficiencyBar(option.proficiency.writing)}
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          Reading
                        </span>
                        {renderProficiencyBar(option.proficiency.reading)}
                      </div>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown_71; 