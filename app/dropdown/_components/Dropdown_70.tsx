import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

interface FilterOption {
  id: string;
  label: string;
  type: 'checkbox' | 'radio' | 'range';
  options?: Array<{
    id: string;
    label: string;
    count?: number;
  }>;
  range?: {
    min: number;
    max: number;
    step: number;
    unit: string;
  };
}

interface FilterGroup {
  id: string;
  label: string;
  options: FilterOption[];
}

interface DropdownProps {
  onFilterChange?: (filters: Record<string, any>) => void;
}

const Dropdown_70: React.FC<DropdownProps> = ({
  onFilterChange
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedGroups, setExpandedGroups] = useState<string[]>([]);
  const [selectedFilters, setSelectedFilters] = useState<Record<string, any>>({});
  const [rangeValues, setRangeValues] = useState<Record<string, [number, number]>>({
    price: [0, 1000],
    rating: [0, 5]
  });

  const filterGroups: FilterGroup[] = [
    {
      id: 'category',
      label: 'Category',
      options: [
        {
          id: 'type',
          label: 'Product Type',
          type: 'checkbox',
          options: [
            { id: 'electronics', label: 'Electronics', count: 120 },
            { id: 'clothing', label: 'Clothing', count: 85 },
            { id: 'books', label: 'Books', count: 45 },
            { id: 'home', label: 'Home & Garden', count: 73 }
          ]
        }
      ]
    },
    {
      id: 'price',
      label: 'Price Range',
      options: [
        {
          id: 'price-range',
          label: 'Price',
          type: 'range',
          range: {
            min: 0,
            max: 1000,
            step: 10,
            unit: '$'
          }
        }
      ]
    },
    {
      id: 'rating',
      label: 'Rating',
      options: [
        {
          id: 'rating-range',
          label: 'Rating',
          type: 'range',
          range: {
            min: 0,
            max: 5,
            step: 0.5,
            unit: '★'
          }
        }
      ]
    },
    {
      id: 'availability',
      label: 'Availability',
      options: [
        {
          id: 'stock',
          label: 'Stock Status',
          type: 'radio',
          options: [
            { id: 'in-stock', label: 'In Stock', count: 250 },
            { id: 'out-of-stock', label: 'Out of Stock', count: 73 },
            { id: 'pre-order', label: 'Pre-Order', count: 15 }
          ]
        }
      ]
    }
  ];

  const toggleGroup = (groupId: string) => {
    setExpandedGroups(prev =>
      prev.includes(groupId)
        ? prev.filter(id => id !== groupId)
        : [...prev, groupId]
    );
  };

  const handleCheckboxChange = (optionId: string, value: string) => {
    setSelectedFilters(prev => {
      const current = prev[optionId] || [];
      const updated = current.includes(value)
        ? current.filter((v: string) => v !== value)
        : [...current, value];
      
      const newFilters = {
        ...prev,
        [optionId]: updated
      };

      if (onFilterChange) {
        onFilterChange(newFilters);
      }

      return newFilters;
    });
  };

  const handleRadioChange = (optionId: string, value: string) => {
    setSelectedFilters(prev => {
      const newFilters = {
        ...prev,
        [optionId]: value
      };

      if (onFilterChange) {
        onFilterChange(newFilters);
      }

      return newFilters;
    });
  };

  const handleRangeChange = (optionId: string, values: [number, number]) => {
    setRangeValues(prev => ({
      ...prev,
      [optionId]: values
    }));

    if (onFilterChange) {
      onFilterChange({
        ...selectedFilters,
        [optionId]: values
      });
    }
  };

  const getActiveFilterCount = () => {
    const checkboxCount = Object.values(selectedFilters).reduce(
      (acc, curr) => acc + (Array.isArray(curr) ? curr.length : 1),
      0
    );
    const rangeCount = Object.values(rangeValues).reduce(
      (acc, [min, max], index) => {
        const defaultRange = index === 0 ? [0, 1000] : [0, 5];
        return acc + (min !== defaultRange[0] || max !== defaultRange[1] ? 1 : 0);
      },
      0
    );
    return checkboxCount + rangeCount;
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    // ...
  };

  interface CustomEventData {
    value: string;
    label: string;
    // Add other properties that your custom event might have
  }
  const handleCustomEvent = (data: CustomEventData) => {
    // ...
  };

  return (
    <div className="relative w-[320px]">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.98 }}
        className="w-full px-4 py-3 flex items-center justify-between rounded-lg bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-colors duration-200"
      >
        <div className="flex items-center gap-2">
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
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
            />
          </svg>
          <span className="font-medium text-gray-700 dark:text-gray-200">
            Filters
            {getActiveFilterCount() > 0 && (
              <span className="ml-2 px-2 py-0.5 text-xs font-semibold bg-emerald-500 text-white rounded-full">
                {getActiveFilterCount()}
              </span>
            )}
          </span>
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
            className="absolute w-full mt-2 bg-white dark:bg-gray-800 shadow-xl rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden z-50"
          >
            {filterGroups.map(group => (
              <div key={group.id} className="border-b border-gray-200 dark:border-gray-700 last:border-0">
                <button
                  onClick={() => toggleGroup(group.id)}
                  className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-900/50"
                >
                  <span className="font-medium text-gray-900 dark:text-white">
                    {group.label}
                  </span>
                  <motion.div
                    animate={{ rotate: expandedGroups.includes(group.id) ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
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
                </button>

                <AnimatePresence>
                  {expandedGroups.includes(group.id) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 py-3 space-y-4">
                        {group.options.map(option => (
                          <div key={option.id}>
                            {option.type === 'checkbox' && option.options && (
                              <div className="space-y-2">
                                {option.options.map(item => (
                                  <label
                                    key={item.id}
                                    className="flex items-center justify-between group"
                                  >
                                    <div className="flex items-center">
                                      <input
                                        type="checkbox"
                                        checked={selectedFilters[option.id]?.includes(item.id) || false}
                                        onChange={() => handleCheckboxChange(option.id, item.id)}
                                        className="w-4 h-4 text-emerald-500 border-gray-300 rounded focus:ring-emerald-500 dark:border-gray-600 dark:focus:ring-offset-gray-800"
                                      />
                                      <span className="ml-2 text-sm text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white">
                                        {item.label}
                                      </span>
                                    </div>
                                    {item.count !== undefined && (
                                      <span className="text-xs text-gray-500 dark:text-gray-400">
                                        {item.count}
                                      </span>
                                    )}
                                  </label>
                                ))}
                              </div>
                            )}

                            {option.type === 'radio' && option.options && (
                              <div className="space-y-2">
                                {option.options.map(item => (
                                  <label
                                    key={item.id}
                                    className="flex items-center justify-between group"
                                  >
                                    <div className="flex items-center">
                                      <input
                                        type="radio"
                                        checked={selectedFilters[option.id] === item.id}
                                        onChange={() => handleRadioChange(option.id, item.id)}
                                        className="w-4 h-4 text-emerald-500 border-gray-300 focus:ring-emerald-500 dark:border-gray-600 dark:focus:ring-offset-gray-800"
                                      />
                                      <span className="ml-2 text-sm text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white">
                                        {item.label}
                                      </span>
                                    </div>
                                    {item.count !== undefined && (
                                      <span className="text-xs text-gray-500 dark:text-gray-400">
                                        {item.count}
                                      </span>
                                    )}
                                  </label>
                                ))}
                              </div>
                            )}

                            {option.type === 'range' && option.range && (
                              <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                    {option.range?.unit}{rangeValues[option.id]?.[0]}
                                  </span>
                                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                    {option.range?.unit}{rangeValues[option.id]?.[1]}
                                  </span>
                                </div>
                                <div className="relative">
                                  <div className="absolute inset-y-0 left-0 right-0 flex items-center">
                                    <div className="h-0.5 w-full bg-emerald-500" />
                                  </div>
                                  <input
                                    type="range"
                                    min={option.range?.min}
                                    max={option.range?.max}
                                    step={option.range?.step}
                                    value={rangeValues[option.id]?.[0]}
                                    onChange={(e) => handleRangeChange(option.id, [
                                      parseFloat(e.target.value),
                                      rangeValues[option.id]?.[1] || option.range?.max || 0
                                    ])}
                                    className="absolute left-0 w-full appearance-none bg-transparent pointer-events-none"
                                    style={{
                                      height: '1.5rem',
                                      WebkitAppearance: 'none',
                                      background: 'transparent'
                                    }}
                                  />
                                  <input
                                    type="range"
                                    min={option.range?.min}
                                    max={option.range?.max}
                                    step={option.range?.step}
                                    value={rangeValues[option.id]?.[1]}
                                    onChange={(e) => handleRangeChange(option.id, [
                                      rangeValues[option.id]?.[0] || option.range?.min || 0,
                                      parseFloat(e.target.value)
                                    ])}
                                    className="absolute left-0 w-full appearance-none bg-transparent pointer-events-none"
                                    style={{
                                      height: '1.5rem',
                                      WebkitAppearance: 'none',
                                      background: 'transparent'
                                    }}
                                  />
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            {/* Reset Button */}
            <div className="p-4 bg-gray-50 dark:bg-gray-900/50 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={() => {
                  setSelectedFilters({});
                  setRangeValues({
                    price: [0, 1000],
                    rating: [0, 5]
                  });
                  if (onFilterChange) {
                    onFilterChange({});
                  }
                }}
                className="w-full px-4 py-2 text-sm font-medium text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 focus:outline-none"
              >
                Reset Filters
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown_70; 