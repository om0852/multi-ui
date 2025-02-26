import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

interface WeatherOption {
  id: number;
  label: string;
  value: string;
  type: 'sunny' | 'cloudy' | 'rainy' | 'stormy' | 'snowy';
  current: {
    temp: number;
    feels_like: number;
    humidity: number;
    wind: number;
    precipitation: number;
  };
  forecast: {
    time: string;
    temp: number;
    type: WeatherOption['type'];
  }[];
  details: {
    uv_index: number;
    visibility: string;
    pressure: number;
    air_quality: {
      level: 'good' | 'moderate' | 'poor';
      index: number;
    };
  };
  alerts?: {
    type: string;
    severity: 'low' | 'medium' | 'high';
    message: string;
  }[];
}

interface DropdownProps {
  options?: WeatherOption[];
  placeholder?: string;
  value?: string;
  onSelect?: (value: string) => void;
  onChange?: (value: string) => void;
}

const Dropdown_85: React.FC<DropdownProps> = ({
  options = [
    {
      id: 1,
      label: 'New York',
      value: 'nyc',
      type: 'sunny',
      current: {
        temp: 28,
        feels_like: 30,
        humidity: 65,
        wind: 12,
        precipitation: 0
      },
      forecast: [
        { time: '12 PM', temp: 28, type: 'sunny' },
        { time: '3 PM', temp: 30, type: 'cloudy' },
        { time: '6 PM', temp: 27, type: 'rainy' },
        { time: '9 PM', temp: 24, type: 'cloudy' }
      ],
      details: {
        uv_index: 7,
        visibility: '10 km',
        pressure: 1015,
        air_quality: {
          level: 'moderate',
          index: 75
        }
      }
    },
    {
      id: 2,
      label: 'London',
      value: 'ldn',
      type: 'rainy',
      current: {
        temp: 18,
        feels_like: 17,
        humidity: 80,
        wind: 20,
        precipitation: 70
      },
      forecast: [
        { time: '12 PM', temp: 18, type: 'rainy' },
        { time: '3 PM', temp: 19, type: 'cloudy' },
        { time: '6 PM', temp: 17, type: 'rainy' },
        { time: '9 PM', temp: 16, type: 'cloudy' }
      ],
      details: {
        uv_index: 3,
        visibility: '5 km',
        pressure: 1008,
        air_quality: {
          level: 'good',
          index: 85
        }
      },
      alerts: [
        {
          type: 'Rain',
          severity: 'medium',
          message: 'Heavy rain expected throughout the day'
        }
      ]
    },
    {
      id: 3,
      label: 'Tokyo',
      value: 'tyo',
      type: 'stormy',
      current: {
        temp: 32,
        feels_like: 36,
        humidity: 75,
        wind: 35,
        precipitation: 85
      },
      forecast: [
        { time: '12 PM', temp: 32, type: 'stormy' },
        { time: '3 PM', temp: 30, type: 'rainy' },
        { time: '6 PM', temp: 28, type: 'cloudy' },
        { time: '9 PM', temp: 27, type: 'cloudy' }
      ],
      details: {
        uv_index: 4,
        visibility: '3 km',
        pressure: 998,
        air_quality: {
          level: 'poor',
          index: 55
        }
      },
      alerts: [
        {
          type: 'Typhoon',
          severity: 'high',
          message: 'Typhoon approaching, expect strong winds and heavy rain'
        }
      ]
    },
    {
      id: 4,
      label: 'Moscow',
      value: 'mow',
      type: 'snowy',
      current: {
        temp: -5,
        feels_like: -10,
        humidity: 85,
        wind: 15,
        precipitation: 90
      },
      forecast: [
        { time: '12 PM', temp: -5, type: 'snowy' },
        { time: '3 PM', temp: -3, type: 'snowy' },
        { time: '6 PM', temp: -6, type: 'cloudy' },
        { time: '9 PM', temp: -8, type: 'cloudy' }
      ],
      details: {
        uv_index: 1,
        visibility: '2 km',
        pressure: 1025,
        air_quality: {
          level: 'good',
          index: 90
        }
      },
      alerts: [
        {
          type: 'Snow',
          severity: 'medium',
          message: 'Heavy snowfall expected, possible traffic disruptions'
        }
      ]
    }
  ],
  placeholder = "Select Location",
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

  const getWeatherIcon = (type: WeatherOption['type']) => {
    switch (type) {
      case 'sunny':
        return (
          <motion.svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </motion.svg>
        );
      case 'cloudy':
        return (
          <motion.svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            animate={{ x: [-2, 2, -2] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
          </motion.svg>
        );
      case 'rainy':
        return (
          <motion.svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            animate={{ y: [-1, 1, -1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </motion.svg>
        );
      case 'stormy':
        return (
          <motion.svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            animate={{ 
              rotate: [-10, 10, -10],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </motion.svg>
        );
      case 'snowy':
        return (
          <motion.svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            animate={{ rotate: [0, 180, 360] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </motion.svg>
        );
    }
  };

  const getWeatherColor = (type: WeatherOption['type']) => {
    switch (type) {
      case 'sunny':
        return 'text-amber-500 bg-amber-100 dark:bg-amber-900/30';
      case 'cloudy':
        return 'text-gray-500 bg-gray-100 dark:bg-gray-900/30';
      case 'rainy':
        return 'text-blue-500 bg-blue-100 dark:bg-blue-900/30';
      case 'stormy':
        return 'text-purple-500 bg-purple-100 dark:bg-purple-900/30';
      case 'snowy':
        return 'text-indigo-500 bg-indigo-100 dark:bg-indigo-900/30';
    }
  };

  const getAirQualityColor = (level: WeatherOption['details']['air_quality']['level']) => {
    switch (level) {
      case 'good':
        return 'text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30';
      case 'moderate':
        return 'text-amber-500 bg-amber-100 dark:bg-amber-900/30';
      case 'poor':
        return 'text-red-500 bg-red-100 dark:bg-red-900/30';
    }
  };

  const formatTemp = (temp: number) => {
    return `${temp > 0 ? '+' : ''}${temp}°C`;
  };

  const TempChart = ({ data }: { data: WeatherOption['forecast'] }) => {
    const temps = data.map(d => d.temp);
    const max = Math.max(...temps);
    const min = Math.min(...temps);
    const range = max - min;
    
    return (
      <div className="relative h-24">
        <div className="absolute inset-0 flex items-end justify-between">
          {data.map((point, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: `${((point.temp - min) / range) * 100}%` }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`w-1.5 rounded-full ${
                  point.temp > 0 ? 'bg-red-500' : 'bg-blue-500'
                }`}
              />
              <div className={`w-8 h-8 rounded-lg ${getWeatherColor(point.type)} flex items-center justify-center`}>
                {getWeatherIcon(point.type)}
              </div>
              <span className="text-xs font-medium text-gray-600 dark:text-gray-300">
                {point.time}
              </span>
              <span className="text-xs font-medium text-gray-900 dark:text-white">
                {formatTemp(point.temp)}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
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
                getSelectedOption()?.type ? getWeatherColor(getSelectedOption()?.type) : ''
              } flex items-center justify-center`}>
                {getWeatherIcon(getSelectedOption()?.type!)}
              </div>
              <div>
                <span className="font-medium text-gray-900 dark:text-white block">
                  {getSelectedOption()?.label || 'Unknown'}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {getSelectedOption()?.current !== undefined && getSelectedOption()?.type
                    ? formatTemp(getSelectedOption().current.temp)
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
                        <div className={`w-10 h-10 rounded-lg ${getWeatherColor(option.type)} flex items-center justify-center`}>
                          {getWeatherIcon(option.type)}
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
                              {formatTemp(option.current.temp)}
                            </span>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                              Feels like {formatTemp(option.current.feels_like)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Current Conditions */}
                    <div className="grid grid-cols-3 gap-4">
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                        <div>
                          <span className="text-sm text-gray-500 dark:text-gray-400">Humidity</span>
                          <p className="font-medium text-gray-900 dark:text-white">{option.current.humidity}%</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <div>
                          <span className="text-sm text-gray-500 dark:text-gray-400">Wind</span>
                          <p className="font-medium text-gray-900 dark:text-white">{option.current.wind} km/h</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                        </svg>
                        <div>
                          <span className="text-sm text-gray-500 dark:text-gray-400">Precip.</span>
                          <p className="font-medium text-gray-900 dark:text-white">{option.current.precipitation}%</p>
                        </div>
                      </div>
                    </div>

                    {/* Forecast */}
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-3">Hourly Forecast</h4>
                      <TempChart data={option.forecast} />
                    </div>

                    {/* Details */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500 dark:text-gray-400">UV Index</span>
                          <span className="font-medium text-gray-900 dark:text-white">{option.details.uv_index}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500 dark:text-gray-400">Visibility</span>
                          <span className="font-medium text-gray-900 dark:text-white">{option.details.visibility}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500 dark:text-gray-400">Pressure</span>
                          <span className="font-medium text-gray-900 dark:text-white">{option.details.pressure} hPa</span>
                        </div>
                      </div>

                      <div>
                        <div className={`p-3 rounded-lg ${getAirQualityColor(option.details.air_quality.level)}`}>
                          <h5 className="text-sm font-medium mb-1">Air Quality</h5>
                          <div className="flex items-end justify-between">
                            <span className="text-2xl font-semibold">
                              {option.details.air_quality.index}
                            </span>
                            <span className="capitalize">
                              {option.details.air_quality.level}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Alerts */}
                    {option.alerts && option.alerts.length > 0 && (
                      <div className="space-y-2">
                        {option.alerts.map((alert, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className={`p-3 rounded-lg ${
                              alert.severity === 'high'
                                ? 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200'
                                : alert.severity === 'medium'
                                ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200'
                                : 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200'
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                              </svg>
                              <div>
                                <h6 className="font-medium">{alert.type} Alert</h6>
                                <p className="text-sm mt-0.5">{alert.message}</p>
                              </div>
                            </div>
                          </motion.div>
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

export default Dropdown_85; 