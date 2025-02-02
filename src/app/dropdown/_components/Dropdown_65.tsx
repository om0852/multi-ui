import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

interface DropdownOption {
  id: number;
  label: string;
  value: string;
  progress: number;
  badge?: string;
  dueDate?: string;
  priority: 'low' | 'medium' | 'high';
}

interface DropdownProps {
  options?: DropdownOption[];
  placeholder?: string;
  value?: string;
  onSelect?: (value: string) => void;
  onChange?: (value: string) => void;
}

const Dropdown_65: React.FC<DropdownProps> = ({
  options = [
    {
      id: 1,
      label: 'Website Redesign',
      value: 'website',
      progress: 75,
      badge: '3 days left',
      dueDate: '2024-03-15',
      priority: 'high'
    },
    {
      id: 2,
      label: 'Mobile App Development',
      value: 'mobile',
      progress: 45,
      badge: 'In Progress',
      dueDate: '2024-04-01',
      priority: 'medium'
    },
    {
      id: 3,
      label: 'Content Strategy',
      value: 'content',
      progress: 20,
      badge: 'Just Started',
      dueDate: '2024-03-30',
      priority: 'low'
    },
    {
      id: 4,
      label: 'User Testing',
      value: 'testing',
      progress: 90,
      badge: 'Almost Done',
      dueDate: '2024-03-10',
      priority: 'high'
    }
  ],
  placeholder = "Select Project",
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

  const getPriorityColor = (priority: DropdownOption['priority']) => {
    switch (priority) {
      case 'low':
        return 'bg-blue-500';
      case 'medium':
        return 'bg-amber-500';
      case 'high':
        return 'bg-rose-500';
    }
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="relative w-96">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.98 }}
        className="w-full px-4 py-2.5 flex items-center justify-between rounded-lg bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700 hover:border-rose-500 dark:hover:border-rose-500 transition-colors duration-200"
      >
        <div className="flex items-center gap-3 min-w-0">
          {getSelectedOption() ? (
            <>
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-900 flex items-center justify-center relative">
                  <div 
                    className="w-8 h-8 rounded-md overflow-hidden"
                    style={{
                      background: `conic-gradient(${getPriorityColor(getSelectedOption()?.priority!)} ${getSelectedOption()?.progress}%, transparent 0)`
                    }}
                  >
                    <div className="w-6 h-6 m-1 rounded-sm bg-white dark:bg-gray-800 flex items-center justify-center text-xs font-medium">
                      {getSelectedOption()?.progress}%
                    </div>
                  </div>
                </div>
              </div>
              <div className="min-w-0">
                <span className="font-medium text-gray-900 dark:text-white block truncate">
                  {getSelectedOption()?.label}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Due {formatDate(getSelectedOption()?.dueDate)}
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
                  className={`w-full p-2 flex items-center gap-3 rounded-lg ${
                    hoveredId === option.id
                      ? 'bg-gray-50 dark:bg-gray-900/50'
                      : ''
                  }`}
                >
                  {/* Progress circle */}
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-900 flex items-center justify-center relative">
                      <div 
                        className="w-8 h-8 rounded-md overflow-hidden"
                        style={{
                          background: `conic-gradient(${getPriorityColor(option.priority)} ${option.progress}%, transparent 0)`
                        }}
                      >
                        <div className="w-6 h-6 m-1 rounded-sm bg-white dark:bg-gray-800 flex items-center justify-center text-xs font-medium">
                          {option.progress}%
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className={`font-medium truncate ${
                        selectedValue === option.value
                          ? 'text-rose-600 dark:text-rose-400'
                          : 'text-gray-900 dark:text-white'
                      }`}>
                        {option.label}
                      </h3>
                      {option.badge && (
                        <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${
                          option.progress >= 90
                            ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400'
                            : option.progress >= 40
                            ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400'
                            : 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                        }`}>
                          {option.badge}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        Due {formatDate(option.dueDate)}
                      </span>
                      <span className={`text-xs font-medium capitalize ${
                        option.priority === 'high'
                          ? 'text-rose-500'
                          : option.priority === 'medium'
                          ? 'text-amber-500'
                          : 'text-blue-500'
                      }`}>
                        {option.priority} priority
                      </span>
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

export default Dropdown_65; 