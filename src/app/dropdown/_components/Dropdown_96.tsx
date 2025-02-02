import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

interface ProgressOption {
  id: number;
  title: string;
  value: string;
  progress: number;
  status: 'not-started' | 'in-progress' | 'completed' | 'blocked';
  dueDate: string;
  milestones: {
    title: string;
    progress: number;
    status: 'not-started' | 'in-progress' | 'completed' | 'blocked';
    dueDate: string;
    tasks: {
      title: string;
      completed: boolean;
      assignee?: {
        name: string;
        avatar: string;
      };
    }[];
  }[];
  team: {
    name: string;
    avatar: string;
    role: string;
    contribution: number;
  }[];
  metrics: {
    label: string;
    value: number;
    target: number;
    unit: string;
    trend: 'up' | 'down' | 'stable';
  }[];
  risks?: {
    level: 'low' | 'medium' | 'high';
    description: string;
    mitigation: string;
  }[];
}

interface DropdownProps {
  options?: ProgressOption[];
  placeholder?: string;
  value?: string;
  onSelect?: (value: string) => void;
  onChange?: (value: string) => void;
}

const Dropdown_96: React.FC<DropdownProps> = ({
  options = [
    {
      id: 1,
      title: 'Website Redesign',
      value: 'website-redesign',
      progress: 75,
      status: 'in-progress',
      dueDate: '2024-04-15T00:00:00Z',
      milestones: [
        {
          title: 'Design Phase',
          progress: 100,
          status: 'completed',
          dueDate: '2024-03-01T00:00:00Z',
          tasks: [
            { title: 'User Research', completed: true },
            { title: 'Wireframes', completed: true },
            { title: 'Visual Design', completed: true }
          ]
        },
        {
          title: 'Development',
          progress: 60,
          status: 'in-progress',
          dueDate: '2024-04-01T00:00:00Z',
          tasks: [
            { title: 'Frontend Implementation', completed: true },
            { title: 'Backend Integration', completed: false },
            { title: 'Responsive Design', completed: true }
          ]
        },
        {
          title: 'Testing',
          progress: 20,
          status: 'in-progress',
          dueDate: '2024-04-15T00:00:00Z',
          tasks: [
            { title: 'Unit Testing', completed: false },
            { title: 'User Testing', completed: false },
            { title: 'Performance Testing', completed: false }
          ]
        }
      ],
      team: [
        {
          name: 'Sarah Chen',
          avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50',
          role: 'Lead Designer',
          contribution: 40
        },
        {
          name: 'Alex Turner',
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50',
          role: 'Developer',
          contribution: 35
        },
        {
          name: 'Emily Johnson',
          avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50',
          role: 'QA Engineer',
          contribution: 25
        }
      ],
      metrics: [
        {
          label: 'Code Coverage',
          value: 85,
          target: 90,
          unit: '%',
          trend: 'up'
        },
        {
          label: 'Performance Score',
          value: 92,
          target: 95,
          unit: '%',
          trend: 'stable'
        }
      ],
      risks: [
        {
          level: 'medium',
          description: 'Integration with legacy systems',
          mitigation: 'Additional testing and fallback plans'
        }
      ]
    },
    {
      id: 2,
      title: 'Mobile App Launch',
      value: 'mobile-app',
      progress: 40,
      status: 'in-progress',
      dueDate: '2024-05-30T00:00:00Z',
      milestones: [
        {
          title: 'MVP Development',
          progress: 80,
          status: 'in-progress',
          dueDate: '2024-04-15T00:00:00Z',
          tasks: [
            { title: 'Core Features', completed: true },
            { title: 'UI Implementation', completed: true },
            { title: 'API Integration', completed: false }
          ]
        },
        {
          title: 'Beta Testing',
          progress: 0,
          status: 'not-started',
          dueDate: '2024-05-15T00:00:00Z',
          tasks: [
            { title: 'Internal Testing', completed: false },
            { title: 'Beta User Selection', completed: false },
            { title: 'Feedback Collection', completed: false }
          ]
        }
      ],
      team: [
        {
          name: 'David Kim',
          avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50',
          role: 'Mobile Developer',
          contribution: 50
        },
        {
          name: 'Lisa Park',
          avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50',
          role: 'UX Designer',
          contribution: 30
        }
      ],
      metrics: [
        {
          label: 'App Performance',
          value: 88,
          target: 95,
          unit: '%',
          trend: 'up'
        }
      ],
      risks: [
        {
          level: 'high',
          description: 'App store approval timeline',
          mitigation: 'Early submission and compliance review'
        }
      ]
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

  const getStatusColor = (status: ProgressOption['status']) => {
    switch (status) {
      case 'not-started':
        return 'text-gray-500 bg-gray-100 dark:bg-gray-900/30';
      case 'in-progress':
        return 'text-amber-500 bg-amber-100 dark:bg-amber-900/30';
      case 'completed':
        return 'text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30';
      case 'blocked':
        return 'text-rose-500 bg-rose-100 dark:bg-rose-900/30';
    }
  };

  const getRiskColor = (level: 'low' | 'medium' | 'high') => {
    switch (level) {
      case 'low':
        return 'text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30';
      case 'medium':
        return 'text-amber-500 bg-amber-100 dark:bg-amber-900/30';
      case 'high':
        return 'text-rose-500 bg-rose-100 dark:bg-rose-900/30';
    }
  };

  const getTrendIcon = (trend: ProgressOption['metrics'][0]['trend']) => {
    switch (trend) {
      case 'up':
        return (
          <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        );
      case 'down':
        return (
          <svg className="w-4 h-4 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0v-8m0 8l-8-8-4 4-6-6" />
          </svg>
        );
      case 'stable':
        return (
          <svg className="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
          </svg>
        );
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const ProgressBar = ({ progress, size = 'default' }: { progress: number, size?: 'small' | 'default' }) => (
    <div className={`w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden ${
      size === 'small' ? 'h-1' : 'h-2'
    }`}>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`h-full ${
          progress === 100
            ? 'bg-emerald-500'
            : progress >= 50
            ? 'bg-amber-500'
            : 'bg-rose-500'
        }`}
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
              <div className={`p-2 rounded-lg ${getStatusColor(getSelectedOption()!.status)}`}>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <span className="font-medium text-gray-900 dark:text-white block">
                  {getSelectedOption()?.title}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {getSelectedOption()?.progress}% Complete
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
                    <div className="flex items-start gap-4">
                      <div className={`p-2 rounded-lg ${getStatusColor(option.status)}`}>
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-medium text-gray-900 dark:text-white">
                              {option.title}
                            </h3>
                            <div className="flex items-center gap-2 mt-1">
                              <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(option.status)}`}>
                                {option.status.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                              </span>
                              <span className="text-sm text-gray-500 dark:text-gray-400">
                                Due {formatDate(option.dueDate)}
                              </span>
                            </div>
                          </div>
                          <span className="text-lg font-medium text-gray-900 dark:text-white">
                            {option.progress}%
                          </span>
                        </div>
                        <div className="mt-2">
                          <ProgressBar progress={option.progress} />
                        </div>
                      </div>
                    </div>

                    {/* Milestones */}
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                        Milestones
                      </h4>
                      <div className="space-y-3">
                        {option.milestones.map((milestone, index) => (
                          <div
                            key={index}
                            className="p-3 rounded-lg bg-gray-50 dark:bg-gray-900/50"
                          >
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <h5 className="font-medium text-gray-900 dark:text-white">
                                  {milestone.title}
                                </h5>
                                <div className="flex items-center gap-2 mt-1">
                                  <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${getStatusColor(milestone.status)}`}>
                                    {milestone.status.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                                  </span>
                                  <span className="text-xs text-gray-500 dark:text-gray-400">
                                    Due {formatDate(milestone.dueDate)}
                                  </span>
                                </div>
                              </div>
                              <span className="text-sm font-medium text-gray-900 dark:text-white">
                                {milestone.progress}%
                              </span>
                            </div>
                            <ProgressBar progress={milestone.progress} size="small" />
                            <div className="mt-3 space-y-1">
                              {milestone.tasks.map((task, taskIndex) => (
                                <div
                                  key={taskIndex}
                                  className="flex items-center justify-between"
                                >
                                  <div className="flex items-center gap-2">
                                    <svg 
                                      className={`w-4 h-4 ${
                                        task.completed
                                          ? 'text-emerald-500'
                                          : 'text-gray-400'
                                      }`}
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      {task.completed ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                      ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                      )}
                                    </svg>
                                    <span className={`text-sm ${
                                      task.completed
                                        ? 'text-gray-500 dark:text-gray-400'
                                        : 'text-gray-900 dark:text-white'
                                    }`}>
                                      {task.title}
                                    </span>
                                  </div>
                                  {task.assignee && (
                                    <div className="flex items-center gap-2">
                                      <img
                                        src={task.assignee.avatar}
                                        alt={task.assignee.name}
                                        className="w-6 h-6 rounded-full"
                                      />
                                      <span className="text-xs text-gray-500 dark:text-gray-400">
                                        {task.assignee.name}
                                      </span>
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Team */}
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                        Team & Contributions
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {option.team.map((member, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-2 p-2 rounded-lg bg-gray-50 dark:bg-gray-900/50"
                          >
                            <div className="w-8 h-8 rounded-full overflow-hidden">
                              <img
                                src={member.avatar}
                                alt={member.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div>
                              <p className="text-sm font-medium text-gray-900 dark:text-white">
                                {member.name}
                              </p>
                              <div className="flex items-center gap-1">
                                <span className="text-xs text-gray-500 dark:text-gray-400">
                                  {member.role}
                                </span>
                                <span className="text-xs font-medium text-indigo-600 dark:text-indigo-400">
                                  {member.contribution}%
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Metrics */}
                    {option.metrics && option.metrics.length > 0 && (
                      <div>
                        <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                          Key Metrics
                        </h4>
                        <div className="grid grid-cols-2 gap-2">
                          {option.metrics.map((metric, index) => (
                            <div
                              key={index}
                              className="p-2 rounded-lg bg-gray-50 dark:bg-gray-900/50"
                            >
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                  {metric.label}
                                </span>
                                {getTrendIcon(metric.trend)}
                              </div>
                              <div className="flex items-baseline gap-2">
                                <span className="text-lg font-medium text-gray-900 dark:text-white">
                                  {metric.value}{metric.unit}
                                </span>
                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                  / {metric.target}{metric.unit}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Risks */}
                    {option.risks && option.risks.length > 0 && (
                      <div>
                        <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                          Risks & Mitigation
                        </h4>
                        <div className="space-y-2">
                          {option.risks.map((risk, index) => (
                            <div
                              key={index}
                              className="p-3 rounded-lg bg-gray-50 dark:bg-gray-900/50"
                            >
                              <div className="flex items-center justify-between mb-2">
                                <h5 className="font-medium text-gray-900 dark:text-white">
                                  Risk Factor
                                </h5>
                                <span className={`px-2 py-1 text-xs font-medium rounded-full ${getRiskColor(risk.level)}`}>
                                  {risk.level.charAt(0).toUpperCase() + risk.level.slice(1)} Risk
                                </span>
                              </div>
                              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                                {risk.description}
                              </p>
                              <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                                <span>Mitigation: {risk.mitigation}</span>
                              </div>
                            </div>
                          ))}
                        </div>
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

export default Dropdown_96;