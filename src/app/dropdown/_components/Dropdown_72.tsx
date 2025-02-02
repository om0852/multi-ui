import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

interface WeatherOption {
  id: number;
  label: string;
  value: string;
  date: string;
  weather: 'sunny' | 'cloudy' | 'rainy' | 'stormy';
  temperature: {
    current: number;
    high: number;
    low: number;
  };
  precipitation: number;
  humidity: number;
  windSpeed: number;
}

interface DropdownProps {
  options?: WeatherOption[];
  placeholder?: string;
  value?: string;
  onSelect?: (value: string) => void;
  onChange?: (value: string) => void;
}

const Dropdown_72: React.FC<DropdownProps> = ({
  options = [
    {
      id: 1,
      label: 'Today',
      value: 'today',
      date: '2024-03-20',
      weather: 'sunny',
      temperature: {
        current: 72,
        high: 75,
        low: 65
      },
      precipitation: 10,
      humidity: 45,
      windSpeed: 8
    },
    {
      id: 2,
      label: 'Tomorrow',
      value: 'tomorrow',
      date: '2024-03-21',
      weather: 'cloudy',
      temperature: {
        current: 68,
        high: 70,
        low: 62
      },
      precipitation: 30,
      humidity: 65,
      windSpeed: 12
    },
    {
      id: 3,
      label: 'Wednesday',
      value: 'wednesday',
      date: '2024-03-22',
      weather: 'rainy',
      temperature: {
        current: 65,
        high: 67,
        low: 60
      },
      precipitation: 80,
      humidity: 85,
      windSpeed: 15
    },
    {
      id: 4,
      label: 'Thursday',
      value: 'thursday',
      date: '2024-03-23',
      weather: 'stormy',
      temperature: {
        current: 62,
        high: 65,
        low: 58
      },
      precipitation: 90,
      humidity: 90,
      windSpeed: 25
    }
  ],
  placeholder = "Select Day",
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

  const getWeatherIcon = (weather: WeatherOption['weather']) => {
    switch (weather) {
      case 'sunny':
        return (
          <motion.svg
            className="w-8 h-8 text-amber-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </motion.svg>
        );
      case 'cloudy':
        return (
          <motion.svg
            className="w-8 h-8 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            animate={{ x: [-2, 2, -2] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
            />
          </motion.svg>
        );
      case 'rainy':
        return (
          <motion.svg
            className="w-8 h-8 text-blue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            animate={{ y: [-1, 1, -1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 16.9A5 5 0 0018 7h-1.26a8 8 0 10-11.62 9"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 11l-4 4m0 0l-4 4m4-4l-4-4m4 4l4 4"
            />
          </motion.svg>
        );
      case 'stormy':
        return (
          <motion.svg
            className="w-8 h-8 text-purple-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            animate={{ 
              rotate: [-2, 2, -2],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 0.5, repeat: Infinity }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </motion.svg>
        );
    }
  };

  const getWeatherColor = (weather: WeatherOption['weather']) => {
    switch (weather) {
      case 'sunny':
        return 'text-amber-500';
      case 'cloudy':
        return 'text-gray-500';
      case 'rainy':
        return 'text-blue-500';
      case 'stormy':
        return 'text-purple-500';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="relative w-96">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.98 }}
        className="w-full px-4 py-2.5 flex items-center justify-between rounded-lg bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors duration-200"
      >
        <div className="flex items-center gap-3">
          {getSelectedOption() ? (
            <>
              {getWeatherIcon(getSelectedOption()?.weather!)}
              <div>
                <span className="font-medium text-gray-900 dark:text-white block">
                  {getSelectedOption()?.label}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {getSelectedOption()?.temperature.current}°F
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
                  className={`w-full p-3 flex items-start gap-3 rounded-lg ${
                    hoveredId === option.id
                      ? 'bg-gray-50 dark:bg-gray-900/50'
                      : ''
                  }`}
                >
                  {/* Weather Icon */}
                  <div className="flex-shrink-0">
                    {getWeatherIcon(option.weather)}
                  </div>

                  {/* Weather Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className={`font-medium ${
                          selectedValue === option.value
                            ? getWeatherColor(option.weather)
                            : 'text-gray-900 dark:text-white'
                        }`}>
                          {option.label}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {formatDate(option.date)}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="text-lg font-medium text-gray-900 dark:text-white">
                          {option.temperature.current}°F
                        </span>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          H: {option.temperature.high}° L: {option.temperature.low}°
                        </div>
                      </div>
                    </div>

                    {/* Weather Details */}
                    <div className="mt-2 grid grid-cols-3 gap-2">
                      <div className="text-center p-2 rounded-lg bg-gray-50 dark:bg-gray-900/50">
                        <div className="text-sm font-medium text-gray-900 dark:text-white">
                          {option.precipitation}%
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          Precip
                        </div>
                      </div>
                      <div className="text-center p-2 rounded-lg bg-gray-50 dark:bg-gray-900/50">
                        <div className="text-sm font-medium text-gray-900 dark:text-white">
                          {option.humidity}%
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          Humidity
                        </div>
                      </div>
                      <div className="text-center p-2 rounded-lg bg-gray-50 dark:bg-gray-900/50">
                        <div className="text-sm font-medium text-gray-900 dark:text-white">
                          {option.windSpeed} mph
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          Wind
                        </div>
                      </div>
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

export default Dropdown_72; 