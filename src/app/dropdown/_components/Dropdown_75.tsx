import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

interface DestinationOption {
  id: number;
  label: string;
  value: string;
  country: string;
  image: string;
  mapImage: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  weather: {
    temperature: number;
    condition: 'sunny' | 'cloudy' | 'rainy' | 'snowy';
    humidity: number;
  };
  timeZone: string;
  bestTimeToVisit: string[];
  attractions: string[];
  rating: number;
}

interface DropdownProps {
  options?: DestinationOption[];
  placeholder?: string;
  value?: string;
  onSelect?: (value: string) => void;
  onChange?: (value: string) => void;
}

const Dropdown_75: React.FC<DropdownProps> = ({
  options = [
    {
      id: 1,
      label: 'Kyoto',
      value: 'kyoto',
      country: 'Japan',
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
      mapImage: 'https://images.unsplash.com/photo-1583089892943-e02e5b017b6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
      coordinates: {
        lat: 35.0116,
        lng: 135.7681
      },
      weather: {
        temperature: 22,
        condition: 'sunny',
        humidity: 65
      },
      timeZone: 'UTC+9',
      bestTimeToVisit: ['March', 'April', 'October', 'November'],
      attractions: ['Fushimi Inari Shrine', 'Kinkaku-ji', 'Arashiyama Bamboo Grove'],
      rating: 4.8
    },
    {
      id: 2,
      label: 'Santorini',
      value: 'santorini',
      country: 'Greece',
      image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
      mapImage: 'https://images.unsplash.com/photo-1583089892943-e02e5b017b6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
      coordinates: {
        lat: 36.3932,
        lng: 25.4615
      },
      weather: {
        temperature: 25,
        condition: 'sunny',
        humidity: 55
      },
      timeZone: 'UTC+3',
      bestTimeToVisit: ['April', 'May', 'September', 'October'],
      attractions: ['Oia Sunset', 'Red Beach', 'Ancient Thera'],
      rating: 4.9
    },
    {
      id: 3,
      label: 'Banff',
      value: 'banff',
      country: 'Canada',
      image: 'https://images.unsplash.com/photo-1561134643-568a208e73ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
      mapImage: 'https://images.unsplash.com/photo-1583089892943-e02e5b017b6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
      coordinates: {
        lat: 51.1784,
        lng: -115.5708
      },
      weather: {
        temperature: -5,
        condition: 'snowy',
        humidity: 75
      },
      timeZone: 'UTC-7',
      bestTimeToVisit: ['June', 'July', 'August', 'December'],
      attractions: ['Lake Louise', 'Moraine Lake', 'Banff Gondola'],
      rating: 4.7
    },
    {
      id: 4,
      label: 'Machu Picchu',
      value: 'machu-picchu',
      country: 'Peru',
      image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
      mapImage: 'https://images.unsplash.com/photo-1583089892943-e02e5b017b6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
      coordinates: {
        lat: -13.1631,
        lng: -72.5450
      },
      weather: {
        temperature: 18,
        condition: 'cloudy',
        humidity: 85
      },
      timeZone: 'UTC-5',
      bestTimeToVisit: ['April', 'May', 'September', 'October'],
      attractions: ['Inca Trail', 'Sun Gate', 'Temple of the Sun'],
      rating: 4.9
    }
  ],
  placeholder = "Select Destination",
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

  const getWeatherIcon = (condition: DestinationOption['weather']['condition']) => {
    switch (condition) {
      case 'sunny':
        return (
          <motion.svg
            className="w-5 h-5 text-amber-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </motion.svg>
        );
      case 'cloudy':
        return (
          <motion.svg
            className="w-5 h-5 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            animate={{ x: [-2, 2, -2] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
          </motion.svg>
        );
      case 'rainy':
        return (
          <motion.svg
            className="w-5 h-5 text-blue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            animate={{ y: [-1, 1, -1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 16.9A5 5 0 0018 7h-1.26a8 8 0 10-11.62 9" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 11l-4 4m0 0l-4 4m4-4l-4-4m4 4l4 4" />
          </motion.svg>
        );
      case 'snowy':
        return (
          <motion.svg
            className="w-5 h-5 text-sky-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
          </motion.svg>
        );
    }
  };

  const getWeatherColor = (condition: DestinationOption['weather']['condition']) => {
    switch (condition) {
      case 'sunny':
        return 'text-amber-500 bg-amber-100 dark:bg-amber-900/30';
      case 'cloudy':
        return 'text-gray-500 bg-gray-100 dark:bg-gray-900/30';
      case 'rainy':
        return 'text-blue-500 bg-blue-100 dark:bg-blue-900/30';
      case 'snowy':
        return 'text-sky-500 bg-sky-100 dark:bg-sky-900/30';
    }
  };

  const formatCoordinates = (lat: number, lng: number) => {
    const latDir = lat >= 0 ? 'N' : 'S';
    const lngDir = lng >= 0 ? 'E' : 'W';
    return `${Math.abs(lat).toFixed(2)}°${latDir}, ${Math.abs(lng).toFixed(2)}°${lngDir}`;
  };

  return (
    <div className="relative w-96">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.98 }}
        className="w-full px-4 py-2.5 flex items-center justify-between rounded-lg bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700 hover:border-cyan-500 dark:hover:border-cyan-500 transition-colors duration-200"
      >
        <div className="flex items-center gap-3">
          {getSelectedOption() ? (
            <>
              <div className="w-10 h-10 rounded-lg overflow-hidden">
                <img
                  src={getSelectedOption()?.image}
                  alt={getSelectedOption()?.label}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="font-medium text-gray-900 dark:text-white block">
                  {getSelectedOption()?.label}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {getSelectedOption()?.country}
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
                  className={`w-full p-3 flex flex-col gap-3 rounded-lg ${
                    hoveredId === option.id
                      ? 'bg-gray-50 dark:bg-gray-900/50'
                      : ''
                  }`}
                >
                  {/* Destination Header */}
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden">
                      <img
                        src={option.image}
                        alt={option.label}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className={`font-medium ${
                        selectedValue === option.value
                          ? 'text-cyan-600 dark:text-cyan-400'
                          : 'text-gray-900 dark:text-white'
                      }`}>
                        {option.label}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {option.country}
                      </p>
                      <div className="mt-1 flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg
                            key={star}
                            className={`w-4 h-4 ${
                              star <= option.rating
                                ? 'text-yellow-400'
                                : 'text-gray-300 dark:text-gray-600'
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {option.rating.toFixed(1)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Map and Weather */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="relative rounded-lg overflow-hidden">
                      <img
                        src={option.mapImage}
                        alt={`Map of ${option.label}`}
                        className="w-full h-24 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-2">
                        <span className="text-xs text-white font-medium">
                          {formatCoordinates(option.coordinates.lat, option.coordinates.lng)}
                        </span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        {getWeatherIcon(option.weather.condition)}
                        <span className="text-lg font-medium text-gray-900 dark:text-white">
                          {option.weather.temperature}°C
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${getWeatherColor(option.weather.condition)}`}>
                          {option.weather.condition.charAt(0).toUpperCase() + option.weather.condition.slice(1)}
                        </span>
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 dark:bg-gray-900/30 text-gray-600 dark:text-gray-400">
                          {option.weather.humidity}% Humidity
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div className="space-y-2">
                    <div className="flex flex-wrap gap-1">
                      {option.bestTimeToVisit.map((month, index) => (
                        <span
                          key={index}
                          className="px-2 py-0.5 rounded text-xs font-medium bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400"
                        >
                          {month}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {option.attractions.map((attraction, index) => (
                        <span
                          key={index}
                          className="px-2 py-0.5 rounded text-xs font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400"
                        >
                          {attraction}
                        </span>
                      ))}
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

export default Dropdown_75; 