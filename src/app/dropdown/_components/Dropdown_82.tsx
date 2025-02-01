import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

interface MilestoneOption {
  id: number;
  label: string;
  value: string;
  status: 'completed' | 'in-progress' | 'upcoming' | 'delayed';
  progress: number;
  startDate: string;
  endDate: string;
  description: string;
  assignees: {
    name: string;
    avatar: string;
    role: string;
  }[];
  tasks: {
    label: string;
    completed: boolean;
  }[];
  dependencies?: string[];
}

interface DropdownProps {
  options?: MilestoneOption[];
  placeholder?: string;
  value?: string;
  onSelect?: (value: string) => void;
  onChange?: (value: string) => void;
}

const Dropdown_82: React.FC<DropdownProps> = ({
  options = [
    {
      id: 1,
      label: 'Project Planning',
      value: 'planning',
      status: 'completed',
      progress: 100,
      startDate: '2024-03-01',
      endDate: '2024-03-10',
      description: 'Initial project planning and resource allocation',
      assignees: [
        {
          name: 'Alex Chen',
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
          role: 'Project Manager'
        },
        {
          name: 'Sarah Wilson',
          avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
          role: 'Tech Lead'
        }
      ],
      tasks: [
        { label: 'Define project scope', completed: true },
        { label: 'Create timeline', completed: true },
        { label: 'Assign resources', completed: true }
      ]
    },
    {
      id: 2,
      label: 'Design Phase',
      value: 'design',
      status: 'in-progress',
      progress: 65,
      startDate: '2024-03-11',
      endDate: '2024-03-25',
      description: 'UI/UX design and prototyping',
      assignees: [
        {
          name: 'Emily Davis',
          avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
          role: 'UI Designer'
        }
      ],
      tasks: [
        { label: 'Create wireframes', completed: true },
        { label: 'Design system', completed: true },
        { label: 'Interactive prototype', completed: false }
      ],
      dependencies: ['planning']
    },
    {
      id: 3,
      label: 'Development',
      value: 'development',
      status: 'upcoming',
      progress: 0,
      startDate: '2024-03-26',
      endDate: '2024-04-15',
      description: 'Frontend and backend implementation',
      assignees: [
        {
          name: 'Mike Johnson',
          avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
          role: 'Frontend Dev'
        },
        {
          name: 'Chris Lee',
          avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
          role: 'Backend Dev'
        }
      ],
      tasks: [
        { label: 'Setup infrastructure', completed: false },
        { label: 'Implement core features', completed: false },
        { label: 'Integration testing', completed: false }
      ],
      dependencies: ['design']
    },
    {
      id: 4,
      label: 'QA Testing',
      value: 'testing',
      status: 'delayed',
      progress: 0,
      startDate: '2024-04-16',
      endDate: '2024-04-25',
      description: 'Quality assurance and bug fixing',
      assignees: [
        {
          name: 'Lisa Wang',
          avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
          role: 'QA Lead'
        }
      ],
      tasks: [
        { label: 'Create test cases', completed: false },
        { label: 'Perform testing', completed: false },
        { label: 'Bug reporting', completed: false }
      ],
      dependencies: ['development']
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

  const getStatusInfo = (status: MilestoneOption['status']) => {
    switch (status) {
      case 'completed':
        return {
          icon: (
            <motion.svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </motion.svg>
          ),
          color: 'text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30'
        };
      case 'in-progress':
        return {
          icon: (
            <motion.svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </motion.svg>
          ),
          color: 'text-blue-500 bg-blue-100 dark:bg-blue-900/30'
        };
      case 'upcoming':
        return {
          icon: (
            <motion.svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              animate={{ y: [-1, 1, -1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </motion.svg>
          ),
          color: 'text-purple-500 bg-purple-100 dark:bg-purple-900/30'
        };
      case 'delayed':
        return {
          icon: (
            <motion.svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              animate={{ 
                rotate: [-10, 10, -10],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </motion.svg>
          ),
          color: 'text-red-500 bg-red-100 dark:bg-red-900/30'
        };
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  };

  const ProgressBar = ({ progress }: { progress: number }) => (
    <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
      <motion.div
        className="h-full bg-indigo-500"
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
        className="w-full px-4 py-2.5 flex items-center justify-between rounded-lg bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-500 transition-colors duration-200"
      >
        <div className="flex items-center gap-3">
          {getSelectedOption() ? (
            <>
              <div className={`w-10 h-10 rounded-lg ${getStatusInfo(getSelectedOption()?.status!).color} flex items-center justify-center`}>
                {getStatusInfo(getSelectedOption()?.status!).icon}
              </div>
              <div>
                <span className="font-medium text-gray-900 dark:text-white block">
                  {getSelectedOption()?.label}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {formatDate(getSelectedOption()?.startDate!)} - {formatDate(getSelectedOption()?.endDate!)}
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
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        <div className={`flex-shrink-0 w-10 h-10 rounded-lg ${getStatusInfo(option.status).color} flex items-center justify-center`}>
                          {getStatusInfo(option.status).icon}
                        </div>
                        <div>
                          <h3 className={`font-medium ${
                            selectedValue === option.value
                              ? 'text-indigo-600 dark:text-indigo-400'
                              : 'text-gray-900 dark:text-white'
                          }`}>
                            {option.label}
                          </h3>
                          <p className="mt-0.5 text-sm text-gray-500 dark:text-gray-400">
                            {option.description}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                          {option.progress}%
                        </span>
                      </div>
                    </div>

                    {/* Progress */}
                    <ProgressBar progress={option.progress} />

                    {/* Timeline */}
                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center gap-1.5">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {formatDate(option.startDate)}
                      </div>
                      <div className="h-0.5 flex-1 mx-4 bg-gray-200 dark:bg-gray-700" />
                      <div className="flex items-center gap-1.5">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {formatDate(option.endDate)}
                      </div>
                    </div>

                    {/* Tasks */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Tasks</h4>
                        <div className="space-y-2">
                          {option.tasks.map((task, index) => (
                            <div key={index} className="flex items-center gap-2">
                              <div className={`w-4 h-4 rounded-full flex items-center justify-center ${
                                task.completed
                                  ? 'bg-indigo-500'
                                  : 'border-2 border-gray-300 dark:border-gray-600'
                              }`}>
                                {task.completed && (
                                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                  </svg>
                                )}
                              </div>
                              <span className={`text-sm ${
                                task.completed
                                  ? 'text-gray-500 dark:text-gray-400 line-through'
                                  : 'text-gray-900 dark:text-white'
                              }`}>
                                {task.label}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Assignees */}
                      <div>
                        <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Team</h4>
                        <div className="space-y-2">
                          {option.assignees.map((assignee, index) => (
                            <div key={index} className="flex items-center gap-2">
                              <div className="w-6 h-6 rounded-full overflow-hidden">
                                <img
                                  src={assignee.avatar}
                                  alt={assignee.name}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div>
                                <span className="text-sm text-gray-900 dark:text-white">
                                  {assignee.name}
                                </span>
                                <span className="text-xs text-gray-500 dark:text-gray-400 block">
                                  {assignee.role}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Dependencies */}
                    {option.dependencies && option.dependencies.length > 0 && (
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                        </svg>
                        <span>Depends on:</span>
                        {option.dependencies.map((dep, index) => (
                          <span
                            key={index}
                            className="px-2 py-0.5 rounded text-xs font-medium bg-gray-100 dark:bg-gray-900/50 text-gray-600 dark:text-gray-400"
                          >
                            {options.find(opt => opt.value === dep)?.label}
                          </span>
                        ))}
                      </div>
                    )}
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

export default Dropdown_82; 