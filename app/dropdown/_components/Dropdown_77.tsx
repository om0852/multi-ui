import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

interface TaskOption {
  id: number;
  label: string;
  value: string;
  description: string;
  quadrant: 'urgent-important' | 'not-urgent-important' | 'urgent-not-important' | 'not-urgent-not-important';
  dueDate?: string;
  assignee?: {
    name: string;
    avatar: string;
  };
  tags: string[];
  progress: number;
}

interface DropdownProps {
  options?: TaskOption[];
  placeholder?: string;
  value?: string;
  onSelect?: (value: string) => void;
  onChange?: (value: string) => void;
}

const Dropdown_77: React.FC<DropdownProps> = ({
  options = [
    {
      id: 1,
      label: 'Update Security Protocols',
      value: 'security-update',
      description: 'Implement new security measures for the main server',
      quadrant: 'urgent-important',
      dueDate: '2024-03-25',
      assignee: {
        name: 'Alex Chen',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80'
      },
      tags: ['Security', 'Infrastructure'],
      progress: 65
    },
    {
      id: 2,
      label: 'Strategic Planning Session',
      value: 'strategy-planning',
      description: 'Quarterly planning meeting with stakeholders',
      quadrant: 'not-urgent-important',
      dueDate: '2024-04-01',
      assignee: {
        name: 'Sarah Wilson',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80'
      },
      tags: ['Planning', 'Strategy'],
      progress: 30
    },
    {
      id: 3,
      label: 'Client Support Tickets',
      value: 'support-tickets',
      description: 'Address pending customer support requests',
      quadrant: 'urgent-not-important',
      dueDate: '2024-03-23',
      assignee: {
        name: 'Mike Johnson',
        avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80'
      },
      tags: ['Support', 'Customer Service'],
      progress: 80
    },
    {
      id: 4,
      label: 'Team Building Event',
      value: 'team-building',
      description: 'Organize virtual team bonding activities',
      quadrant: 'not-urgent-not-important',
      dueDate: '2024-04-15',
      assignee: {
        name: 'Emily Davis',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80'
      },
      tags: ['HR', 'Team Culture'],
      progress: 15
    }
  ],
  placeholder = "Select Task",
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
    return options.find(option => option.value === selectedValue) || null;
  };

  const getQuadrantInfo = (quadrant: TaskOption['quadrant']) => {
    switch (quadrant) {
      case 'urgent-important':
        return {
          label: 'Do First',
          color: 'text-red-500 bg-red-100 dark:bg-red-900/30',
          icon: (
            <motion.svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </motion.svg>
          )
        };
      case 'not-urgent-important':
        return {
          label: 'Schedule',
          color: 'text-amber-500 bg-amber-100 dark:bg-amber-900/30',
          icon: (
            <motion.svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </motion.svg>
          )
        };
      case 'urgent-not-important':
        return {
          label: 'Delegate',
          color: 'text-blue-500 bg-blue-100 dark:bg-blue-900/30',
          icon: (
            <motion.svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              animate={{ y: [-1, 1, -1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </motion.svg>
          )
        };
      case 'not-urgent-not-important':
        return {
          label: 'Eliminate',
          color: 'text-gray-500 bg-gray-100 dark:bg-gray-900/30',
          icon: (
            <motion.svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              animate={{ rotate: [-10, 10, -10] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </motion.svg>
          )
        };
    }
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  };

  const ProgressBar = ({ progress }: { progress: number }) => (
    <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
      <motion.div
        className="h-full bg-fuchsia-500"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
    </div>
  );

  return (
    <div className="relative w-[32rem]">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.98 }}
        className="w-full px-4 py-2.5 flex items-center justify-between rounded-lg bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700 hover:border-fuchsia-500 dark:hover:border-fuchsia-500 transition-colors duration-200"
      >
        <div className="flex items-center gap-3">
          {getSelectedOption() ? (
            <>
              <div className={`w-10 h-10 rounded-lg ${
                getSelectedOption()?.quadrant ? getQuadrantInfo(getSelectedOption()?.quadrant).color : ''
              } flex items-center justify-center`}>
                {getSelectedOption()?.quadrant && getQuadrantInfo(getSelectedOption()?.quadrant).icon}
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
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className={`font-medium ${
                          selectedValue === option.value
                            ? 'text-fuchsia-600 dark:text-fuchsia-400'
                            : 'text-gray-900 dark:text-white'
                        }`}>
                          {option.label}
                        </h3>
                        <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${getQuadrantInfo(option.quadrant).color}`}>
                          {getQuadrantInfo(option.quadrant).icon}
                          {getQuadrantInfo(option.quadrant).label}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                        {option.description}
                      </p>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {option.assignee && (
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full overflow-hidden">
                            <img
                              src={option.assignee.avatar}
                              alt={option.assignee.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {option.assignee.name}
                          </span>
                        </div>
                      )}
                      {option.dueDate && (
                        <div className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {formatDate(option.dueDate)}
                        </div>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-gray-900 dark:text-white">
                        {option.progress}%
                      </span>
                      <div className="w-24">
                        <ProgressBar progress={option.progress} />
                      </div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="mt-3 flex flex-wrap gap-1">
                    {option.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-0.5 rounded text-xs font-medium bg-fuchsia-100 dark:bg-fuchsia-900/30 text-fuchsia-600 dark:text-fuchsia-400"
                      >
                        {tag}
                      </span>
                    ))}
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

export default Dropdown_77; 