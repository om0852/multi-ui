import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

interface DropdownOption {
  id: number;
  label: string;
  value: string;
  date: string;
  status: 'completed' | 'in-progress' | 'pending';
  description: string;
}

interface DropdownProps {
  options?: DropdownOption[];
  placeholder?: string;
  value?: string;
  onSelect?: (value: string) => void;
  onChange?: (value: string) => void;
}

const Dropdown_62: React.FC<DropdownProps> = ({
  options = [
    {
      id: 1,
      label: 'Project Kickoff',
      value: 'kickoff',
      date: '2024-03-01',
      status: 'completed',
      description: 'Initial project planning and team alignment'
    },
    {
      id: 2,
      label: 'Design Phase',
      value: 'design',
      date: '2024-03-15',
      status: 'in-progress',
      description: 'UI/UX design and prototyping'
    },
    {
      id: 3,
      label: 'Development',
      value: 'development',
      date: '2024-04-01',
      status: 'pending',
      description: 'Frontend and backend implementation'
    },
    {
      id: 4,
      label: 'Testing',
      value: 'testing',
      date: '2024-04-15',
      status: 'pending',
      description: 'Quality assurance and bug fixes'
    }
  ],
  placeholder = "Select Milestone",
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

  const getStatusColor = (status: DropdownOption['status']) => {
    switch (status) {
      case 'completed':
        return 'bg-emerald-500';
      case 'in-progress':
        return 'bg-amber-500';
      case 'pending':
        return 'bg-gray-300 dark:bg-gray-600';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="relative w-80">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.98 }}
        className="w-full px-4 py-2.5 flex items-center justify-between rounded-lg bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-colors duration-200"
      >
        <div className="flex items-center gap-3">
          {getSelectedOption() ? (
            <>
              <div className={`w-2.5 h-2.5 rounded-full ${
                getSelectedOption()?.status ? getStatusColor(getSelectedOption().status) : ''
              }`} />
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
            className="absolute w-full mt-2 py-2 bg-white dark:bg-gray-800 shadow-xl rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden z-50"
          >
            <div className="px-2">
              {options.map((option, index) => (
                <motion.button
                  key={option.id}
                  onClick={() => handleSelect(option.value)}
                  onHoverStart={() => setHoveredId(option.id)}
                  onHoverEnd={() => setHoveredId(null)}
                  className={`w-full px-3 py-3 flex items-start gap-3 rounded-lg relative ${
                    hoveredId === option.id
                      ? 'bg-emerald-50 dark:bg-emerald-900/20'
                      : ''
                  }`}
                >
                  {/* Timeline connector */}
                  {index < options.length - 1 && (
                    <div className="absolute left-[1.3rem] top-[2.5rem] w-0.5 h-[calc(100%-0.5rem)] bg-gray-200 dark:bg-gray-700" />
                  )}
                  
                  {/* Status dot */}
                  <div className={`w-2.5 h-2.5 rounded-full mt-1.5 ${getStatusColor(option.status)}`} />
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className={`font-medium ${
                        selectedValue === option.value
                          ? 'text-emerald-600 dark:text-emerald-400'
                          : 'text-gray-900 dark:text-white'
                      }`}>
                        {option.label}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {formatDate(option.date)}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {option.description}
                    </p>
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

export default Dropdown_62; 