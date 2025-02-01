import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

interface ResourceOption {
  id: number;
  name: string;
  value: string;
  type: 'human' | 'equipment' | 'software' | 'facility';
  status: 'available' | 'allocated' | 'maintenance' | 'unavailable';
  capacity: {
    total: number;
    used: number;
    unit: string;
  };
  schedule: {
    startDate: string;
    endDate: string;
    project: string;
    priority: 'high' | 'medium' | 'low';
  }[];
  utilization: {
    current: number;
    average: number;
    peak: number;
  };
  cost: {
    hourly: number;
    currency: string;
  };
  skills?: string[];
  certifications?: string[];
  location?: {
    name: string;
    timezone: string;
  };
  dependencies?: {
    resource: string;
    type: 'requires' | 'conflicts';
  }[];
}

interface DropdownProps {
  options?: ResourceOption[];
  placeholder?: string;
  value?: string;
  onSelect?: (value: string) => void;
  onChange?: (value: string) => void;
}

const Dropdown_97: React.FC<DropdownProps> = ({
  options = [
    {
      id: 1,
      name: 'Development Team A',
      value: 'dev-team-a',
      type: 'human',
      status: 'allocated',
      capacity: {
        total: 160,
        used: 120,
        unit: 'hours/month'
      },
      schedule: [
        {
          startDate: '2024-03-15T09:00:00Z',
          endDate: '2024-04-30T17:00:00Z',
          project: 'E-commerce Platform',
          priority: 'high'
        },
        {
          startDate: '2024-05-01T09:00:00Z',
          endDate: '2024-05-31T17:00:00Z',
          project: 'Mobile App Development',
          priority: 'medium'
        }
      ],
      utilization: {
        current: 75,
        average: 70,
        peak: 85
      },
      cost: {
        hourly: 150,
        currency: 'USD'
      },
      skills: ['React', 'Node.js', 'TypeScript', 'AWS'],
      location: {
        name: 'San Francisco',
        timezone: 'America/Los_Angeles'
      }
    },
    {
      id: 2,
      name: 'Cloud Server Cluster',
      value: 'cloud-servers',
      type: 'equipment',
      status: 'available',
      capacity: {
        total: 32,
        used: 18,
        unit: 'instances'
      },
      schedule: [
        {
          startDate: '2024-03-15T00:00:00Z',
          endDate: '2024-12-31T23:59:59Z',
          project: 'Infrastructure Support',
          priority: 'high'
        }
      ],
      utilization: {
        current: 56,
        average: 60,
        peak: 90
      },
      cost: {
        hourly: 25,
        currency: 'USD'
      },
      certifications: ['AWS Certified', 'ISO 27001'],
      dependencies: [
        {
          resource: 'Backup System',
          type: 'requires'
        }
      ]
    },
    {
      id: 3,
      name: 'Design Studio',
      value: 'design-studio',
      type: 'facility',
      status: 'maintenance',
      capacity: {
        total: 20,
        used: 0,
        unit: 'workstations'
      },
      schedule: [
        {
          startDate: '2024-03-18T09:00:00Z',
          endDate: '2024-03-22T17:00:00Z',
          project: 'Facility Upgrade',
          priority: 'high'
        }
      ],
      utilization: {
        current: 0,
        average: 75,
        peak: 95
      },
      cost: {
        hourly: 200,
        currency: 'USD'
      },
      location: {
        name: 'New York',
        timezone: 'America/New_York'
      }
    }
  ],
  placeholder = "Select Resource",
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

  const getTypeIcon = (type: ResourceOption['type']) => {
    switch (type) {
      case 'human':
        return (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        );
      case 'equipment':
        return (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
          </svg>
        );
      case 'software':
        return (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        );
      case 'facility':
        return (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        );
    }
  };

  const getStatusColor = (status: ResourceOption['status']) => {
    switch (status) {
      case 'available':
        return 'text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30';
      case 'allocated':
        return 'text-amber-500 bg-amber-100 dark:bg-amber-900/30';
      case 'maintenance':
        return 'text-indigo-500 bg-indigo-100 dark:bg-indigo-900/30';
      case 'unavailable':
        return 'text-rose-500 bg-rose-100 dark:bg-rose-900/30';
    }
  };

  const getPriorityColor = (priority: ResourceOption['schedule'][0]['priority']) => {
    switch (priority) {
      case 'high':
        return 'text-rose-500 bg-rose-100 dark:bg-rose-900/30';
      case 'medium':
        return 'text-amber-500 bg-amber-100 dark:bg-amber-900/30';
      case 'low':
        return 'text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  const formatCurrency = (amount: number, currency: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency
    }).format(amount);
  };

  const UtilizationBar = ({ current, average, peak }: { current: number, average: number, peak: number }) => (
    <div className="relative w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${current}%` }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`absolute h-full ${
          current > 90
            ? 'bg-rose-500'
            : current > 70
            ? 'bg-amber-500'
            : 'bg-emerald-500'
        }`}
      />
      <div
        className="absolute h-full w-0.5 bg-gray-400 dark:bg-gray-500"
        style={{ left: `${average}%` }}
      />
      <div
        className="absolute h-full w-0.5 bg-rose-400 dark:bg-rose-500"
        style={{ left: `${peak}%` }}
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
                {getTypeIcon(getSelectedOption()!.type)}
              </div>
              <div>
                <span className="font-medium text-gray-900 dark:text-white block">
                  {getSelectedOption()?.name}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {getSelectedOption()?.type && (
                    `${getSelectedOption()?.type.charAt(0).toUpperCase()}${getSelectedOption()?.type.slice(1)} Resource`
                  )}
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
                        {getTypeIcon(option.type)}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-medium text-gray-900 dark:text-white">
                              {option.name}
                            </h3>
                            <div className="flex items-center gap-2 mt-1">
                              <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(option.status)}`}>
                                {option.status.charAt(0).toUpperCase() + option.status.slice(1)}
                              </span>
                              {option.location && (
                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                  {option.location.name}
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="text-right">
                            <span className="text-sm font-medium text-gray-900 dark:text-white">
                              {formatCurrency(option.cost.hourly, option.cost.currency)}
                            </span>
                            <span className="text-xs text-gray-500 dark:text-gray-400 block">
                              per hour
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Capacity & Utilization */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                          Capacity
                        </h4>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {option.capacity.used} / {option.capacity.total} {option.capacity.unit}
                        </span>
                      </div>
                      <div className="space-y-3">
                        <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${(option.capacity.used / option.capacity.total) * 100}%` }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className={`h-full ${
                              (option.capacity.used / option.capacity.total) > 0.9
                                ? 'bg-rose-500'
                                : (option.capacity.used / option.capacity.total) > 0.7
                                ? 'bg-amber-500'
                                : 'bg-emerald-500'
                            }`}
                          />
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-500 dark:text-gray-400">Utilization</span>
                          <span className="font-medium text-gray-900 dark:text-white">
                            {option.utilization.current}%
                          </span>
                        </div>
                        <UtilizationBar
                          current={option.utilization.current}
                          average={option.utilization.average}
                          peak={option.utilization.peak}
                        />
                        <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                          <span>Average: {option.utilization.average}%</span>
                          <span>Peak: {option.utilization.peak}%</span>
                        </div>
                      </div>
                    </div>

                    {/* Schedule */}
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                        Schedule
                      </h4>
                      <div className="space-y-2">
                        {option.schedule.map((slot, index) => (
                          <div
                            key={index}
                            className="p-2 rounded-lg bg-gray-50 dark:bg-gray-900/50"
                          >
                            <div className="flex items-center justify-between mb-1">
                              <span className="font-medium text-gray-900 dark:text-white">
                                {slot.project}
                              </span>
                              <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPriorityColor(slot.priority)}`}>
                                {slot.priority.charAt(0).toUpperCase() + slot.priority.slice(1)}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                              <span>{formatDate(slot.startDate)} - {formatDate(slot.endDate)}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Skills & Certifications */}
                    {(option.skills || option.certifications) && (
                      <div className="flex flex-wrap gap-2">
                        {option.skills?.map((skill, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 text-xs font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-900/30 rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                        {option.certifications?.map((cert, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/30 rounded-full"
                          >
                            {cert}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Dependencies */}
                    {option.dependencies && option.dependencies.length > 0 && (
                      <div>
                        <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                          Dependencies
                        </h4>
                        <div className="space-y-2">
                          {option.dependencies.map((dep, index) => (
                            <div
                              key={index}
                              className="flex items-center justify-between p-2 rounded-lg bg-gray-50 dark:bg-gray-900/50"
                            >
                              <span className="text-sm text-gray-900 dark:text-white">
                                {dep.resource}
                              </span>
                              <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                                dep.type === 'requires'
                                  ? 'text-amber-500 bg-amber-100 dark:bg-amber-900/30'
                                  : 'text-rose-500 bg-rose-100 dark:bg-rose-900/30'
                              }`}>
                                {dep.type.charAt(0).toUpperCase() + dep.type.slice(1)}
                              </span>
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

export default Dropdown_97; 