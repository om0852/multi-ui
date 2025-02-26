import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import Image from 'next/image';

interface RecipeOption {
  id: number;
  label: string;
  value: string;
  description: string;
  image: string;
  cookingTime: {
    prep: number;
    cook: number;
  };
  difficulty: 'easy' | 'medium' | 'hard';
  servings: number;
  ingredients: number;
  cuisine: string;
  dietaryInfo: string[];
}

interface DropdownProps {
  options?: RecipeOption[];
  placeholder?: string;
  value?: string;
  onSelect?: (value: string) => void;
  onChange?: (value: string) => void;
}

const Dropdown_74: React.FC<DropdownProps> = ({
  options = [
    {
      id: 1,
      label: 'Mediterranean Quinoa Bowl',
      value: 'quinoa-bowl',
      description: 'Fresh and healthy bowl with quinoa, vegetables, and feta cheese',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
      cookingTime: {
        prep: 15,
        cook: 20
      },
      difficulty: 'easy',
      servings: 4,
      ingredients: 10,
      cuisine: 'Mediterranean',
      dietaryInfo: ['Vegetarian', 'Gluten-Free']
    },
    {
      id: 2,
      label: 'Spicy Thai Curry',
      value: 'thai-curry',
      description: 'Rich and aromatic curry with coconut milk and fresh herbs',
      image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
      cookingTime: {
        prep: 20,
        cook: 30
      },
      difficulty: 'medium',
      servings: 6,
      ingredients: 15,
      cuisine: 'Thai',
      dietaryInfo: ['Dairy-Free', 'Spicy']
    },
    {
      id: 3,
      label: 'Classic Beef Wellington',
      value: 'beef-wellington',
      description: 'Elegant dish of beef tenderloin wrapped in puff pastry',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
      cookingTime: {
        prep: 45,
        cook: 60
      },
      difficulty: 'hard',
      servings: 8,
      ingredients: 20,
      cuisine: 'British',
      dietaryInfo: ['Contains Gluten', 'Contains Dairy']
    },
    {
      id: 4,
      label: 'Fresh Spring Rolls',
      value: 'spring-rolls',
      description: 'Light and refreshing rolls with rice paper and vegetables',
      image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
      cookingTime: {
        prep: 30,
        cook: 0
      },
      difficulty: 'medium',
      servings: 4,
      ingredients: 12,
      cuisine: 'Vietnamese',
      dietaryInfo: ['Vegan', 'Gluten-Free']
    }
  ],
  placeholder = "Select Recipe",
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

  const getDifficultyColor = (difficulty: RecipeOption['difficulty']) => {
    switch (difficulty) {
      case 'easy':
        return 'text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30';
      case 'medium':
        return 'text-amber-500 bg-amber-100 dark:bg-amber-900/30';
      case 'hard':
        return 'text-red-500 bg-red-100 dark:bg-red-900/30';
    }
  };

  const formatTime = (minutes: number) => {
    if (minutes === 0) return '0 min';
    if (minutes < 60) return `${minutes} min`;
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes > 0 ? `${remainingMinutes}m` : ''}`;
  };

  return (
    <div className="relative w-96">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.98 }}
        className="w-full px-4 py-2.5 flex items-center justify-between rounded-lg bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700 hover:border-teal-500 dark:hover:border-teal-500 transition-colors duration-200"
      >
        <div className="flex items-center gap-3">
          {getSelectedOption() ? (
            <>
              <div className="w-10 h-10 rounded-lg overflow-hidden">
                <Image
                  src={getSelectedOption()?.image || '/placeholder-image.jpg'}
                  alt={getSelectedOption()?.label || 'Selected option'}
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
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
                  {/* Recipe Image */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden">
                    <Image
                      src={option.image}
                      alt={option.label}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Recipe Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className={`font-medium ${
                          selectedValue === option.value
                            ? 'text-teal-600 dark:text-teal-400'
                            : 'text-gray-900 dark:text-white'
                        }`}>
                          {option.label}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                          {option.description}
                        </p>
                      </div>
                    </div>

                    {/* Recipe Details */}
                    <div className="mt-2 flex flex-wrap items-center gap-2">
                      {/* Time */}
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium bg-gray-100 dark:bg-gray-900/50 text-gray-600 dark:text-gray-400">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {formatTime(option.cookingTime.prep + option.cookingTime.cook)}
                      </span>

                      {/* Difficulty */}
                      <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${getDifficultyColor(option.difficulty)}`}>
                        {option.difficulty.charAt(0).toUpperCase() + option.difficulty.slice(1)}
                      </span>

                      {/* Servings */}
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium bg-gray-100 dark:bg-gray-900/50 text-gray-600 dark:text-gray-400">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        {option.servings} servings
                      </span>

                      {/* Cuisine */}
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400">
                        {option.cuisine}
                      </span>
                    </div>

                    {/* Dietary Info */}
                    <div className="mt-2 flex flex-wrap gap-1">
                      {option.dietaryInfo.map((info, index) => (
                        <span
                          key={index}
                          className="px-2 py-0.5 rounded text-xs font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400"
                        >
                          {info}
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

export default Dropdown_74; 