import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

interface MetricOption {
  id: number;
  label: string;
  value: string;
  type: 'revenue' | 'users' | 'conversion' | 'engagement';
  current: number;
  previous: number;
  trend: number;
  timeframe: 'daily' | 'weekly' | 'monthly' | 'yearly';
  chart: {
    data: number[];
    labels: string[];
  };
  breakdown: {
    label: string;
    value: number;
    color: string;
  }[];
  insights: {
    type: 'positive' | 'negative' | 'neutral';
    message: string;
  }[];
}

interface DropdownProps {
  options?: MetricOption[];
  placeholder?: string;
  value?: string;
  onSelect?: (value: string) => void;
  onChange?: (value: string) => void;
}

const Dropdown_83: React.FC<DropdownProps> = ({
  options = [
    {
      id: 1,
      label: 'Revenue Growth',
      value: 'revenue',
      type: 'revenue',
      current: 128500,
      previous: 98700,
      trend: 30.19,
      timeframe: 'monthly',
      chart: {
        data: [45, 52, 49, 60, 55, 65, 70, 75, 80, 85, 90, 95],
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      breakdown: [
        { label: 'Subscriptions', value: 65, color: '#8B5CF6' },
        { label: 'One-time', value: 25, color: '#EC4899' },
        { label: 'Services', value: 10, color: '#10B981' }
      ],
      insights: [
        { type: 'positive', message: '30% increase in recurring revenue' },
        { type: 'neutral', message: 'Stable customer retention rate' }
      ]
    },
    {
      id: 2,
      label: 'User Acquisition',
      value: 'users',
      type: 'users',
      current: 25800,
      previous: 21500,
      trend: 20.0,
      timeframe: 'monthly',
      chart: {
        data: [120, 150, 180, 220, 250, 280, 310, 350, 380, 420, 450, 480],
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      breakdown: [
        { label: 'Organic', value: 45, color: '#10B981' },
        { label: 'Referral', value: 30, color: '#8B5CF6' },
        { label: 'Paid', value: 25, color: '#EC4899' }
      ],
      insights: [
        { type: 'positive', message: 'Organic growth exceeds targets' },
        { type: 'positive', message: 'Referral program showing strong results' }
      ]
    },
    {
      id: 3,
      label: 'Conversion Rate',
      value: 'conversion',
      type: 'conversion',
      current: 3.8,
      previous: 3.2,
      trend: 18.75,
      timeframe: 'monthly',
      chart: {
        data: [3.1, 3.2, 3.0, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9, 4.0, 4.1],
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      breakdown: [
        { label: 'Desktop', value: 55, color: '#8B5CF6' },
        { label: 'Mobile', value: 35, color: '#EC4899' },
        { label: 'Tablet', value: 10, color: '#10B981' }
      ],
      insights: [
        { type: 'positive', message: 'New landing page performing well' },
        { type: 'negative', message: 'Mobile conversion needs improvement' }
      ]
    },
    {
      id: 4,
      label: 'User Engagement',
      value: 'engagement',
      type: 'engagement',
      current: 68,
      previous: 62,
      trend: 9.68,
      timeframe: 'monthly',
      chart: {
        data: [58, 60, 62, 63, 65, 64, 66, 67, 68, 70, 71, 72],
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      breakdown: [
        { label: 'Active Users', value: 70, color: '#10B981' },
        { label: 'Occasional', value: 20, color: '#8B5CF6' },
        { label: 'Inactive', value: 10, color: '#EC4899' }
      ],
      insights: [
        { type: 'positive', message: 'Daily active users increasing' },
        { type: 'neutral', message: 'Average session duration stable' }
      ]
    }
  ],
  placeholder = "Select Metric",
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

  const isValidOption = (option: MetricOption | null): option is MetricOption => {
    return option !== null;
  };

  const getTypeInfo = (type: MetricOption['type']) => {
    switch (type) {
      case 'revenue':
        return {
          icon: (
            <motion.svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </motion.svg>
          ),
          color: 'text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30'
        };
      case 'users':
        return {
          icon: (
            <motion.svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </motion.svg>
          ),
          color: 'text-blue-500 bg-blue-100 dark:bg-blue-900/30'
        };
      case 'conversion':
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </motion.svg>
          ),
          color: 'text-purple-500 bg-purple-100 dark:bg-purple-900/30'
        };
      case 'engagement':
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
              transition={{ duration: 2, repeat: Infinity }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
            </motion.svg>
          ),
          color: 'text-pink-500 bg-pink-100 dark:bg-pink-900/30'
        };
    }
  };

  const formatNumber = (num: number, type: MetricOption['type']) => {
    switch (type) {
      case 'revenue':
        return new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        }).format(num);
      case 'users':
        return new Intl.NumberFormat('en-US', {
          notation: 'compact',
          compactDisplay: 'short'
        }).format(num);
      case 'conversion':
        return `${num.toFixed(1)}%`;
      case 'engagement':
        return `${num}%`;
      default:
        return num.toString();
    }
  };

  const MiniChart = ({ data, height = 40 }: { data: number[], height?: number }) => {
    const max = Math.max(...data);
    const min = Math.min(...data);
    const range = max - min;
    
    const points = data.map((value, index) => {
      const x = (index / (data.length - 1)) * 100;
      const y = height - ((value - min) / range) * height;
      return `${x},${y}`;
    }).join(' ');

    return (
      <svg
        className="w-full overflow-visible"
        height={height}
        viewBox={`0 0 100 ${height}`}
      >
        <polyline
          points={points}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-indigo-500"
        />
      </svg>
    );
  };

  const DonutChart = ({ segments }: { segments: MetricOption['breakdown'] }) => {
    let cumulativePercent = 0;

    return (
      <svg className="w-24 h-24" viewBox="0 0 36 36">
        {segments.map((segment, i) => {
          const startPercent = cumulativePercent;
          cumulativePercent += segment.value;
          
          const start = percentToCoordinates(startPercent);
          const end = percentToCoordinates(cumulativePercent);
          
          const largeArcFlag = segment.value > 50 ? 1 : 0;
          
          return (
            <motion.path
              key={i}
              d={`M 18 18 L ${start.x} ${start.y} A 18 18 0 ${largeArcFlag} 1 ${end.x} ${end.y} Z`}
              fill={segment.color}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            />
          );
        })}
        <circle cx="18" cy="18" r="12" fill="white" />
      </svg>
    );
  };

  const percentToCoordinates = (percent: number) => {
    const angle = (percent / 100) * 360;
    const radians = (angle - 90) * (Math.PI / 180);
    return {
      x: 18 + 18 * Math.cos(radians),
      y: 18 + 18 * Math.sin(radians)
    };
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
                  {getSelectedOption()?.current !== undefined && getSelectedOption()?.type 
                    ? formatNumber(getSelectedOption().current, getSelectedOption().type)
                    : '--'
                  }
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
                        <div className={`flex-shrink-0 w-10 h-10 rounded-lg ${getTypeInfo(option.type).color} flex items-center justify-center`}>
                          {getTypeInfo(option.type).icon}
                        </div>
                        <div>
                          <h3 className={`font-medium ${
                            selectedValue === option.value
                              ? 'text-indigo-600 dark:text-indigo-400'
                              : 'text-gray-900 dark:text-white'
                          }`}>
                            {option.label}
                          </h3>
                          <div className="mt-1 flex items-center gap-2">
                            <span className="text-2xl font-semibold text-gray-900 dark:text-white">
                              {formatNumber(option.current, option.type)}
                            </span>
                            <span className={`flex items-center text-sm ${
                              option.trend > 0
                                ? 'text-emerald-500'
                                : 'text-red-500'
                            }`}>
                              <svg
                                className={`w-4 h-4 ${
                                  option.trend > 0
                                    ? 'rotate-0'
                                    : 'rotate-180'
                                }`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                              </svg>
                              {Math.abs(option.trend)}%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Chart */}
                    <div className="h-24">
                      <MiniChart data={option.chart.data} height={80} />
                    </div>

                    {/* Breakdown */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Breakdown</h4>
                        <div className="space-y-2">
                          {option.breakdown.map((item, index) => (
                            <div key={index} className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <div
                                  className="w-3 h-3 rounded-full"
                                  style={{ backgroundColor: item.color }}
                                />
                                <span className="text-sm text-gray-600 dark:text-gray-300">
                                  {item.label}
                                </span>
                              </div>
                              <span className="text-sm font-medium text-gray-900 dark:text-white">
                                {item.value}%
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-center">
                        <DonutChart segments={option.breakdown} />
                      </div>
                    </div>

                    {/* Insights */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white">Key Insights</h4>
                      <div className="space-y-1">
                        {option.insights.map((insight, index) => (
                          <div
                            key={index}
                            className="flex items-start gap-2 text-sm"
                          >
                            <span className={`mt-1 w-2 h-2 rounded-full ${
                              insight.type === 'positive'
                                ? 'bg-emerald-500'
                                : insight.type === 'negative'
                                ? 'bg-red-500'
                                : 'bg-gray-500'
                            }`} />
                            <span className="text-gray-600 dark:text-gray-300">
                              {insight.message}
                            </span>
                          </div>
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

export default Dropdown_83; 