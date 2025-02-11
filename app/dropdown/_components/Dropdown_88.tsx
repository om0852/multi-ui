import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

interface DestinationOption {
  id: number;
  label: string;
  value: string;
  country: string;
  image: string;
  rating: number;
  reviews: number;
  description: string;
  attractions: {
    name: string;
    type: string;
    rating: number;
  }[];
  weather: {
    season: string;
    temp: string;
    conditions: string;
  }[];
  tips: string[];
}

interface DropdownProps {
  options?: DestinationOption[];
  placeholder?: string;
  value?: string;
  onSelect?: (value: string) => void;
  onChange?: (value: string) => void;
}

const Dropdown_88: React.FC<DropdownProps> = ({
  options = [
    {
      id: 1,
      label: 'Paris',
      value: 'paris',
      country: 'France',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=200',
      rating: 4.8,
      reviews: 25000,
      description: 'The City of Light, famous for the Eiffel Tower, Louvre, and charming cafes',
      attractions: [
        { name: 'Eiffel Tower', type: 'Landmark', rating: 4.7 },
        { name: 'Louvre Museum', type: 'Museum', rating: 4.8 },
        { name: 'Notre-Dame', type: 'Cathedral', rating: 4.6 }
      ],
      weather: [
        { season: 'Spring', temp: '8-19°C', conditions: 'Mild, occasional rain' },
        { season: 'Summer', temp: '15-25°C', conditions: 'Warm, sunny' },
        { season: 'Fall', temp: '11-21°C', conditions: 'Cool, cloudy' },
        { season: 'Winter', temp: '3-8°C', conditions: 'Cold, rainy' }
      ],
      tips: [
        'Visit during shoulder season (Spring/Fall) for fewer crowds',
        'Book museum tickets online in advance',
        'Learn basic French phrases'
      ]
    },
    {
      id: 2,
      label: 'Tokyo',
      value: 'tokyo',
      country: 'Japan',
      image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=200',
      rating: 4.9,
      reviews: 30000,
      description: 'Ultra-modern city blending tradition with cutting-edge technology',
      attractions: [
        { name: 'Shibuya Crossing', type: 'Landmark', rating: 4.5 },
        { name: 'Senso-ji Temple', type: 'Temple', rating: 4.7 },
        { name: 'Tokyo Skytree', type: 'Tower', rating: 4.6 }
      ],
      weather: [
        { season: 'Spring', temp: '10-21°C', conditions: 'Cherry blossoms, mild' },
        { season: 'Summer', temp: '21-31°C', conditions: 'Hot, humid' },
        { season: 'Fall', temp: '12-23°C', conditions: 'Cool, clear' },
        { season: 'Winter', temp: '2-12°C', conditions: 'Cold, dry' }
      ],
      tips: [
        'Get a JR Pass for train travel',
        'Visit during cherry blossom season',
        'Try local street food in Asakusa'
      ]
    },
    {
      id: 3,
      label: 'New York',
      value: 'nyc',
      country: 'United States',
      image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=200',
      rating: 4.7,
      reviews: 35000,
      description: 'The Big Apple, a global hub of culture, arts, and entertainment',
      attractions: [
        { name: 'Times Square', type: 'Plaza', rating: 4.5 },
        { name: 'Central Park', type: 'Park', rating: 4.8 },
        { name: 'Empire State', type: 'Building', rating: 4.7 }
      ],
      weather: [
        { season: 'Spring', temp: '11-22°C', conditions: 'Mild, variable' },
        { season: 'Summer', temp: '20-30°C', conditions: 'Hot, humid' },
        { season: 'Fall', temp: '13-23°C', conditions: 'Cool, colorful' },
        { season: 'Winter', temp: '0-8°C', conditions: 'Cold, snowy' }
      ],
      tips: [
        'Get a MetroCard for subway travel',
        'Visit museums on free admission days',
        'Book Broadway shows in advance'
      ]
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
                      <div className="w-32 h-32 rounded-lg overflow-hidden">
                        <img
                          src={option.image}
                          alt={option.label}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className={`font-medium ${
                              selectedValue === option.value
                                ? 'text-indigo-600 dark:text-indigo-400'
                                : 'text-gray-900 dark:text-white'
                            }`}>
                              {option.label}
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              {option.country}
                            </p>
                          </div>
                          <div className="flex items-center gap-1">
                            <svg className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <span className="font-medium text-gray-900 dark:text-white">
                              {option.rating}
                            </span>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                              ({option.reviews.toLocaleString()})
                            </span>
                          </div>
                        </div>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                          {option.description}
                        </p>
                      </div>
                    </div>

                    {/* Attractions */}
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Top Attractions</h4>
                      <div className="grid grid-cols-3 gap-3">
                        {option.attractions.map((attraction, index) => (
                          <div
                            key={index}
                            className="p-3 rounded-lg bg-gray-50 dark:bg-gray-900/50"
                          >
                            <h5 className="font-medium text-gray-900 dark:text-white">
                              {attraction.name}
                            </h5>
                            <div className="mt-1 flex items-center justify-between">
                              <span className="text-sm text-gray-500 dark:text-gray-400">
                                {attraction.type}
                              </span>
                              <div className="flex items-center gap-1">
                                <svg className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <span className="text-sm font-medium text-gray-900 dark:text-white">
                                  {attraction.rating}
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Weather */}
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Weather by Season</h4>
                      <div className="grid grid-cols-4 gap-2">
                        {option.weather.map((season, index) => (
                          <div
                            key={index}
                            className="p-2 rounded-lg bg-gray-50 dark:bg-gray-900/50"
                          >
                            <h5 className="font-medium text-gray-900 dark:text-white">
                              {season.season}
                            </h5>
                            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                              {season.temp}
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              {season.conditions}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tips */}
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Travel Tips</h4>
                      <div className="space-y-2">
                        {option.tips.map((tip, index) => (
                          <div
                            key={index}
                            className="flex items-start gap-2"
                          >
                            <svg className="w-4 h-4 mt-0.5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-sm text-gray-600 dark:text-gray-300">
                              {tip}
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

export default Dropdown_88; 