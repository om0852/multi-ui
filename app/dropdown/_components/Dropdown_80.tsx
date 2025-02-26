import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

interface ColorTheme {
  id: number;
  label: string;
  value: string;
  description: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
  };
  preview: {
    light: string;
    dark: string;
  };
  tags: string[];
  popularity: number;
  isNew?: boolean;
}

interface DropdownProps {
  options?: ColorTheme[];
  placeholder?: string;
  value?: string;
  onSelect?: (value: string) => void;
  onChange?: (value: string) => void;
}

const Dropdown_80: React.FC<DropdownProps> = ({
  options = [
    {
      id: 1,
      label: 'Ocean Breeze',
      value: 'ocean',
      description: 'Calming blues and teals inspired by the sea',
      colors: {
        primary: '#0891b2',
        secondary: '#0e7490',
        accent: '#06b6d4',
        background: '#ecfeff',
        text: '#164e63'
      },
      preview: {
        light: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
        dark: 'https://images.unsplash.com/photo-1551405780-03882d5a2ba7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80'
      },
      tags: ['Calm', 'Professional', 'Modern'],
      popularity: 85
    },
    {
      id: 2,
      label: 'Sunset Glow',
      value: 'sunset',
      description: 'Warm oranges and pinks for a vibrant look',
      colors: {
        primary: '#ea580c',
        secondary: '#c2410c',
        accent: '#fb923c',
        background: '#fff7ed',
        text: '#7c2d12'
      },
      preview: {
        light: 'https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
        dark: 'https://images.unsplash.com/photo-1472120435266-53107fd0c44a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80'
      },
      tags: ['Energetic', 'Creative', 'Bold'],
      popularity: 92,
      isNew: true
    },
    {
      id: 3,
      label: 'Forest Depths',
      value: 'forest',
      description: 'Rich greens and earth tones from nature',
      colors: {
        primary: '#15803d',
        secondary: '#166534',
        accent: '#22c55e',
        background: '#f0fdf4',
        text: '#14532d'
      },
      preview: {
        light: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
        dark: 'https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80'
      },
      tags: ['Natural', 'Organic', 'Peaceful'],
      popularity: 78
    },
    {
      id: 4,
      label: 'Cosmic Night',
      value: 'cosmic',
      description: 'Deep purples and blues with stellar accents',
      colors: {
        primary: '#6d28d9',
        secondary: '#5b21b6',
        accent: '#8b5cf6',
        background: '#f5f3ff',
        text: '#4c1d95'
      },
      preview: {
        light: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
        dark: 'https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80'
      },
      tags: ['Mysterious', 'Elegant', 'Futuristic'],
      popularity: 88,
      isNew: true
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
  const [isDarkPreview, setIsDarkPreview] = useState(false);

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    setIsOpen(false);
    if (onSelect) onSelect(value);
    if (onChange) onChange(value);
  };

  const getSelectedOption = () => {
    return options.find(option => option.value === selectedValue) || null;
  };

  const ColorPreview = ({ colors }: { colors: ColorTheme['colors'] }) => {
    return (
      <div className="flex gap-1">
        {Object.values(colors).map((color, index) => (
          <motion.div
            key={index}
            className="w-4 h-4 rounded-full"
            style={{ backgroundColor: color }}
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.2 }}
          />
        ))}
      </div>
    );
  };

  const PopularityBar = ({ popularity }: { popularity: number }) => {
    return (
      <div className="w-24 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-pink-500"
          initial={{ width: 0 }}
          animate={{ width: `${popularity}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>
    );
  };

  const PreviewCard = ({ theme }: { theme: ColorTheme }) => {
    return (
      <div 
        className="relative w-full h-32 rounded-lg overflow-hidden"
        style={{ backgroundColor: theme.colors.background }}
      >
        <img
          src={isDarkPreview ? theme.preview.dark : theme.preview.light}
          alt={`${theme.label} preview`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-3">
          <div className="space-y-1.5">
            <div className="w-24 h-2 rounded-full" style={{ backgroundColor: theme.colors.primary }} />
            <div className="w-16 h-2 rounded-full" style={{ backgroundColor: theme.colors.secondary }} />
            <div className="w-20 h-2 rounded-full" style={{ backgroundColor: theme.colors.accent }} />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="relative w-[32rem]">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.98 }}
        className="w-full px-4 py-2.5 flex items-center justify-between rounded-lg bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700 hover:border-pink-500 dark:hover:border-pink-500 transition-colors duration-200"
      >
        <div className="flex items-center gap-3">
          {getSelectedOption() ? (
            <>
              <div className={`w-10 h-10 rounded-lg ${
                getSelectedOption()?.type ? getTypeInfo(getSelectedOption()?.type).color : ''
              } flex items-center justify-center`}>
                {getSelectedOption()?.type && getTypeInfo(getSelectedOption()?.type).icon}
              </div>
              <div>
                <span className="font-medium text-gray-900 dark:text-white block">
                  {getSelectedOption()?.label || 'Unknown'}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {getSelectedOption()?.value || '--'}
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
            <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Color Themes
                </h3>
                <button
                  onClick={() => setIsDarkPreview(!isDarkPreview)}
                  className="text-sm text-pink-500 hover:text-pink-600 dark:hover:text-pink-400"
                >
                  {isDarkPreview ? 'Light Preview' : 'Dark Preview'}
                </button>
              </div>
            </div>
            <div className="px-2 py-2">
              {options.map((option) => (
                <motion.div
                  key={option.id}
                  onClick={() => handleSelect(option.value)}
                  onHoverStart={() => setHoveredId(option.id)}
                  onHoverEnd={() => setHoveredId(null)}
                  className={`w-full p-4 rounded-lg cursor-pointer ${
                    hoveredId === option.id
                      ? 'bg-gray-50 dark:bg-gray-900/50'
                      : ''
                  }`}
                >
                  {/* Preview */}
                  <PreviewCard theme={option} />

                  {/* Info */}
                  <div className="mt-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className={`font-medium ${
                            selectedValue === option.value
                              ? 'text-pink-600 dark:text-pink-400'
                              : 'text-gray-900 dark:text-white'
                          }`}>
                            {option.label}
                          </h3>
                          {option.isNew && (
                            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400">
                              New
                            </span>
                          )}
                        </div>
                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                          {option.description}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {option.popularity}%
                        </span>
                        <PopularityBar popularity={option.popularity} />
                      </div>
                    </div>

                    {/* Colors */}
                    <div className="mt-3 flex items-center justify-between">
                      <ColorPreview colors={option.colors} />
                      <div className="flex flex-wrap gap-1">
                        {option.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-2 py-0.5 rounded text-xs font-medium bg-gray-100 dark:bg-gray-900/50 text-gray-600 dark:text-gray-400"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown_80; 