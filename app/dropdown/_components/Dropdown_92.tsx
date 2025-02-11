import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

interface ColorOption {
  id: number;
  label: string;
  value: string;
  hex: string;
  rgb: string;
  hsl: string;
  category: string;
  palette?: {
    name: string;
    colors: {
      hex: string;
      label: string;
    }[];
  };
  recentlyUsed?: boolean;
  isFavorite?: boolean;
}

interface DropdownProps {
  options?: ColorOption[];
  placeholder?: string;
  value?: string;
  onSelect?: (value: string) => void;
  onChange?: (value: string) => void;
}

const Dropdown_92: React.FC<DropdownProps> = ({
  options = [
    {
      id: 1,
      label: 'Ocean Blue',
      value: 'ocean-blue',
      hex: '#0066CC',
      rgb: 'rgb(0, 102, 204)',
      hsl: 'hsl(210, 100%, 40%)',
      category: 'Blue',
      palette: {
        name: 'Ocean Theme',
        colors: [
          { hex: '#003366', label: 'Deep Ocean' },
          { hex: '#0066CC', label: 'Ocean Blue' },
          { hex: '#3399FF', label: 'Sky Blue' },
          { hex: '#66CCFF', label: 'Light Blue' },
          { hex: '#99FFFF', label: 'Pale Blue' }
        ]
      },
      recentlyUsed: true,
      isFavorite: true
    },
    {
      id: 2,
      label: 'Forest Green',
      value: 'forest-green',
      hex: '#228B22',
      rgb: 'rgb(34, 139, 34)',
      hsl: 'hsl(120, 61%, 34%)',
      category: 'Green',
      palette: {
        name: 'Forest Theme',
        colors: [
          { hex: '#006400', label: 'Dark Green' },
          { hex: '#228B22', label: 'Forest Green' },
          { hex: '#32CD32', label: 'Lime Green' },
          { hex: '#90EE90', label: 'Light Green' },
          { hex: '#98FB98', label: 'Pale Green' }
        ]
      },
      recentlyUsed: true,
      isFavorite: false
    },
    {
      id: 3,
      label: 'Sunset Orange',
      value: 'sunset-orange',
      hex: '#FF7F50',
      rgb: 'rgb(255, 127, 80)',
      hsl: 'hsl(16, 100%, 66%)',
      category: 'Orange',
      palette: {
        name: 'Sunset Theme',
        colors: [
          { hex: '#FF4500', label: 'Deep Orange' },
          { hex: '#FF7F50', label: 'Sunset Orange' },
          { hex: '#FFA07A', label: 'Light Orange' },
          { hex: '#FFD700', label: 'Golden' },
          { hex: '#FFDAB9', label: 'Pale Orange' }
        ]
      },
      recentlyUsed: false,
      isFavorite: true
    }
  ],
  placeholder = "Select Color",
  value,
  onSelect,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | undefined>(value);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [colorFormat, setColorFormat] = useState<'hex' | 'rgb' | 'hsl'>('hex');

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    setIsOpen(false);
    if (onSelect) onSelect(value);
    if (onChange) onChange(value);
  };

  const getSelectedOption = () => {
    return options.find(option => option.value === selectedValue);
  };

  const getColorValue = (option: ColorOption) => {
    switch (colorFormat) {
      case 'hex':
        return option.hex;
      case 'rgb':
        return option.rgb;
      case 'hsl':
        return option.hsl;
    }
  };

  return (
    <div className="relative w-[32rem]">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.98 }}
        className="w-full px-4 py-2.5 flex items-center justify-between rounded-lg bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-500 transition-colors duration-200"
      >
        <div className="flex items-center gap-3">
          {getSelectedOption() ? (
            <>
              <div 
                className="w-6 h-6 rounded-full border border-gray-200 dark:border-gray-700"
                style={{ backgroundColor: getSelectedOption()?.hex }}
              />
              <div>
                <span className="font-medium text-gray-900 dark:text-white block">
                  {getSelectedOption()?.label}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {getColorValue(getSelectedOption()!)}
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
            {/* Color Format Selector */}
            <div className="px-4 pb-2 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  Color Format
                </span>
                <div className="flex items-center gap-2">
                  {(['hex', 'rgb', 'hsl'] as const).map((format) => (
                    <button
                      key={format}
                      onClick={() => setColorFormat(format)}
                      className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors duration-200 ${
                        colorFormat === format
                          ? 'bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400'
                          : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900/50'
                      }`}
                    >
                      {format.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="px-2">
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
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex items-start gap-4">
                      <div 
                        className="w-12 h-12 rounded-lg border border-gray-200 dark:border-gray-700"
                        style={{ backgroundColor: option.hex }}
                      />
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-medium text-gray-900 dark:text-white flex items-center gap-2">
                              {option.label}
                              {option.isFavorite && (
                                <svg className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              )}
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              {getColorValue(option)}
                            </p>
                          </div>
                          <span className="px-2.5 py-1 text-xs font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-900/50 rounded-full">
                            {option.category}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Color Palette */}
                    {option.palette && (
                      <div>
                        <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                          {option.palette.name}
                        </h4>
                        <div className="grid grid-cols-5 gap-2">
                          {option.palette.colors.map((color, index) => (
                            <div
                              key={index}
                              className="space-y-1"
                            >
                              <div 
                                className="w-full h-8 rounded-md border border-gray-200 dark:border-gray-700"
                                style={{ backgroundColor: color.hex }}
                              />
                              <p className="text-xs text-center text-gray-500 dark:text-gray-400">
                                {color.label}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Tags */}
                    <div className="flex items-center gap-2">
                      {option.recentlyUsed && (
                        <span className="px-2 py-1 text-xs font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-900/30 rounded-full">
                          Recently Used
                        </span>
                      )}
                      {option.isFavorite && (
                        <span className="px-2 py-1 text-xs font-medium text-amber-600 dark:text-amber-400 bg-amber-100 dark:bg-amber-900/30 rounded-full">
                          Favorite
                        </span>
                      )}
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

export default Dropdown_92; 