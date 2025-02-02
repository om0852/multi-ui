import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

interface RecipeOption {
  id: number;
  label: string;
  value: string;
  image: string;
  description: string;
  prepTime: string;
  cookTime: string;
  servings: number;
  difficulty: 'easy' | 'medium' | 'hard';
  cuisine: string;
  calories: number;
  rating: number;
  reviews: number;
  ingredients: {
    item: string;
    amount: string;
    category: string;
  }[];
  instructions: {
    step: number;
    text: string;
    time?: string;
  }[];
  nutrition: {
    label: string;
    amount: string;
    percent: number;
  }[];
  tips: string[];
  tags: string[];
}

interface DropdownProps {
  options?: RecipeOption[];
  placeholder?: string;
  value?: string;
  onSelect?: (value: string) => void;
  onChange?: (value: string) => void;
}

const Dropdown_87: React.FC<DropdownProps> = ({
  options = [
    {
      id: 1,
      label: 'Classic Margherita Pizza',
      value: 'margherita-pizza',
      image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
      description: 'Traditional Neapolitan pizza with fresh mozzarella, tomatoes, and basil',
      prepTime: '20 mins',
      cookTime: '15 mins',
      servings: 4,
      difficulty: 'medium',
      cuisine: 'Italian',
      calories: 250,
      rating: 4.8,
      reviews: 1250,
      ingredients: [
        { item: 'Pizza Dough', amount: '500g', category: 'Base' },
        { item: 'San Marzano Tomatoes', amount: '400g', category: 'Sauce' },
        { item: 'Fresh Mozzarella', amount: '200g', category: 'Cheese' },
        { item: 'Fresh Basil', amount: '10 leaves', category: 'Herbs' },
        { item: 'Extra Virgin Olive Oil', amount: '2 tbsp', category: 'Oil' },
        { item: 'Sea Salt', amount: 'to taste', category: 'Seasoning' }
      ],
      instructions: [
        { step: 1, text: 'Preheat oven to 250°C with pizza stone', time: '30 mins' },
        { step: 2, text: 'Roll out pizza dough on floured surface', time: '5 mins' },
        { step: 3, text: 'Spread tomato sauce evenly', time: '2 mins' },
        { step: 4, text: 'Add torn mozzarella pieces', time: '2 mins' },
        { step: 5, text: 'Bake until crust is golden', time: '12-15 mins' },
        { step: 6, text: 'Add fresh basil and drizzle olive oil', time: '1 min' }
      ],
      nutrition: [
        { label: 'Calories', amount: '250kcal', percent: 13 },
        { label: 'Protein', amount: '12g', percent: 24 },
        { label: 'Carbs', amount: '30g', percent: 10 },
        { label: 'Fat', amount: '8g', percent: 12 }
      ],
      tips: [
        'Use room temperature dough for better stretching',
        'Don\'t overload with toppings for authentic style',
        'Fresh ingredients make a big difference'
      ],
      tags: ['Italian', 'Vegetarian', 'Pizza', 'Baking']
    },
    {
      id: 2,
      label: 'Spicy Pad Thai',
      value: 'pad-thai',
      image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
      description: 'Classic Thai stir-fried rice noodles with shrimp, tofu, and peanuts',
      prepTime: '25 mins',
      cookTime: '15 mins',
      servings: 4,
      difficulty: 'hard',
      cuisine: 'Thai',
      calories: 380,
      rating: 4.6,
      reviews: 850,
      ingredients: [
        { item: 'Rice Noodles', amount: '400g', category: 'Noodles' },
        { item: 'Shrimp', amount: '200g', category: 'Protein' },
        { item: 'Tofu', amount: '200g', category: 'Protein' },
        { item: 'Bean Sprouts', amount: '200g', category: 'Vegetables' },
        { item: 'Tamarind Paste', amount: '3 tbsp', category: 'Sauce' },
        { item: 'Fish Sauce', amount: '2 tbsp', category: 'Sauce' }
      ],
      instructions: [
        { step: 1, text: 'Soak rice noodles in warm water', time: '30 mins' },
        { step: 2, text: 'Prepare sauce mixture', time: '5 mins' },
        { step: 3, text: 'Stir-fry shrimp and tofu', time: '5 mins' },
        { step: 4, text: 'Add noodles and sauce', time: '5 mins' },
        { step: 5, text: 'Toss with bean sprouts', time: '2 mins' },
        { step: 6, text: 'Garnish with peanuts and lime', time: '1 min' }
      ],
      nutrition: [
        { label: 'Calories', amount: '380kcal', percent: 19 },
        { label: 'Protein', amount: '18g', percent: 36 },
        { label: 'Carbs', amount: '45g', percent: 15 },
        { label: 'Fat', amount: '12g', percent: 18 }
      ],
      tips: [
        'Don\'t overcook the noodles',
        'Have all ingredients ready before cooking',
        'Adjust spiciness to taste'
      ],
      tags: ['Thai', 'Seafood', 'Spicy', 'Stir-fry']
    },
    {
      id: 3,
      label: 'Classic Tiramisu',
      value: 'tiramisu',
      image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
      description: 'Traditional Italian coffee-flavored dessert with mascarpone cheese',
      prepTime: '30 mins',
      cookTime: '0 mins',
      servings: 8,
      difficulty: 'medium',
      cuisine: 'Italian',
      calories: 420,
      rating: 4.9,
      reviews: 1500,
      ingredients: [
        { item: 'Ladyfingers', amount: '24 pieces', category: 'Base' },
        { item: 'Mascarpone', amount: '500g', category: 'Dairy' },
        { item: 'Strong Coffee', amount: '300ml', category: 'Liquid' },
        { item: 'Eggs', amount: '4 large', category: 'Dairy' },
        { item: 'Sugar', amount: '100g', category: 'Sweetener' },
        { item: 'Cocoa Powder', amount: '30g', category: 'Garnish' }
      ],
      instructions: [
        { step: 1, text: 'Prepare strong coffee and let cool', time: '10 mins' },
        { step: 2, text: 'Separate eggs and whip yolks with sugar', time: '5 mins' },
        { step: 3, text: 'Fold mascarpone into yolk mixture', time: '5 mins' },
        { step: 4, text: 'Whip egg whites to stiff peaks', time: '5 mins' },
        { step: 5, text: 'Layer dipped ladyfingers and cream', time: '10 mins' },
        { step: 6, text: 'Refrigerate and dust with cocoa', time: '4 hours' }
      ],
      nutrition: [
        { label: 'Calories', amount: '420kcal', percent: 21 },
        { label: 'Protein', amount: '8g', percent: 16 },
        { label: 'Carbs', amount: '35g', percent: 12 },
        { label: 'Fat', amount: '28g', percent: 43 }
      ],
      tips: [
        'Use room temperature mascarpone',
        'Don\'t oversoak the ladyfingers',
        'Let it set overnight for best results'
      ],
      tags: ['Italian', 'Dessert', 'Coffee', 'No-bake']
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
    return options.find(option => option.value === selectedValue);
  };

  const getDifficultyInfo = (difficulty: RecipeOption['difficulty']) => {
    switch (difficulty) {
      case 'easy':
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </motion.svg>
          ),
          color: 'text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30',
          label: 'Easy'
        };
      case 'medium':
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </motion.svg>
          ),
          color: 'text-amber-500 bg-amber-100 dark:bg-amber-900/30',
          label: 'Medium'
        };
      case 'hard':
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
            </motion.svg>
          ),
          color: 'text-red-500 bg-red-100 dark:bg-red-900/30',
          label: 'Hard'
        };
    }
  };

  const NutritionBar = ({ percent }: { percent: number }) => (
    <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
      <motion.div
        className={`h-full ${
          percent >= 67 ? 'bg-red-500' :
          percent >= 33 ? 'bg-amber-500' :
          'bg-emerald-500'
        }`}
        initial={{ width: 0 }}
        animate={{ width: `${percent}%` }}
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
                  {getSelectedOption()?.cuisine} • {getSelectedOption()?.prepTime} prep
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
                      <div className="w-24 h-24 rounded-lg overflow-hidden">
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
                            <p className="mt-0.5 text-sm text-gray-500 dark:text-gray-400">
                              {option.description}
                            </p>
                          </div>
                          <div className={`px-2.5 py-1 rounded-full text-xs font-medium ${getDifficultyInfo(option.difficulty).color}`}>
                            {getDifficultyInfo(option.difficulty).label}
                          </div>
                        </div>
                        <div className="mt-2 flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <svg className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <span className="font-medium text-gray-900 dark:text-white">
                              {option.rating}
                            </span>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                              ({option.reviews})
                            </span>
                          </div>
                          <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {option.prepTime} prep • {option.cookTime} cook
                          </div>
                          <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            {option.servings} servings
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Ingredients */}
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Ingredients</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {option.ingredients.map((ingredient, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between p-2 rounded-lg bg-gray-50 dark:bg-gray-900/50"
                          >
                            <span className="text-sm text-gray-900 dark:text-white">
                              {ingredient.item}
                            </span>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                              {ingredient.amount}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Instructions */}
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Instructions</h4>
                      <div className="space-y-2">
                        {option.instructions.map((instruction) => (
                          <div
                            key={instruction.step}
                            className="flex items-start gap-3"
                          >
                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-sm font-medium">
                              {instruction.step}
                            </div>
                            <div>
                              <p className="text-sm text-gray-900 dark:text-white">
                                {instruction.text}
                              </p>
                              {instruction.time && (
                                <span className="text-xs text-gray-500 dark:text-gray-400">
                                  {instruction.time}
                                </span>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Nutrition */}
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Nutrition Facts</h4>
                      <div className="space-y-2">
                        {option.nutrition.map((item, index) => (
                          <div key={index} className="space-y-1">
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-gray-500 dark:text-gray-400">
                                {item.label}
                              </span>
                              <span className="font-medium text-gray-900 dark:text-white">
                                {item.amount}
                              </span>
                            </div>
                            <NutritionBar percent={item.percent} />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tips */}
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Cooking Tips</h4>
                      <div className="space-y-1">
                        {option.tips.map((tip, index) => (
                          <div
                            key={index}
                            className="flex items-start gap-2 text-sm"
                          >
                            <svg className="w-4 h-4 mt-0.5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-gray-600 dark:text-gray-300">
                              {tip}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {option.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-900/50 text-gray-600 dark:text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
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

export default Dropdown_87; 