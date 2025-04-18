"use client"

import React, { useState } from 'react';
import Collapsible_17 from '../_components/Collapsible_17';
import { FaUtensils, FaFire, FaBowlFood, FaCakeCandles, FaClock, FaBowlRice, FaDrumstickBite, FaFishFins } from 'react-icons/fa6';

const Example_17: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const menuSections = [
    {
      title: "Featured Items",
      icon: <FaFire className="text-orange-500" />,
      content: (
        <div className="space-y-4">
          {[
            {
              name: "Truffle Risotto",
              description: "Creamy Arborio rice with black truffle and parmesan",
              price: 28,
              tags: ["Chef's Special", "Vegetarian"],
              icon: <FaBowlRice className="text-gray-600 dark:text-gray-400" />
            },
            {
              name: "Wagyu Steak",
              description: "Grade A5 Japanese Wagyu with seasonal vegetables",
              price: 85,
              tags: ["Premium", "Signature"],
              icon: <FaDrumstickBite className="text-gray-600 dark:text-gray-400" />
            },
            {
              name: "Lobster Thermidor",
              description: "Fresh lobster in rich brandy cream sauce",
              price: 65,
              tags: ["Seafood", "Classic"],
              icon: <FaFishFins className="text-gray-600 dark:text-gray-400" />
            }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg">
              <div className="text-2xl">
                {item.icon}
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium">{item.name}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{item.description}</p>
                  </div>
                  <div className="font-bold">${item.price}</div>
                </div>
                <div className="flex gap-2 mt-2">
                  {item.tags.map((tag, j) => (
                    <span key={j} className="px-2 py-1 text-xs rounded-full bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )
    },
    {
      title: "Main Courses",
      icon: <FaBowlFood className="text-green-500" />,
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                name: "Grilled Salmon",
                description: "Atlantic salmon with lemon butter sauce",
                price: 32,
                dietary: "Gluten-Free",
                image: <FaFishFins />
              },
              {
                name: "Mushroom Pasta",
                description: "Fresh pappardelle with wild mushrooms",
                price: 24,
                dietary: "Vegetarian",
                image: <FaBowlFood />
              },
              {
                name: "Roasted Chicken",
                description: "Free-range chicken with herbs",
                price: 28,
                dietary: "Classic",
                image: <FaDrumstickBite />
              },
              {
                name: "Quinoa Bowl",
                description: "Mixed grains with roasted vegetables",
                price: 22,
                dietary: "Vegan",
                image: <FaBowlFood />
              }
            ].map((dish, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-2xl">{dish.image}</div>
                  <div>
                    <h4 className="font-medium">{dish.name}</h4>
                    <span className="text-xs px-2 py-1 bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-full">
                      {dish.dietary}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  {dish.description}
                </p>
                <div className="font-bold">${dish.price}</div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      title: "Desserts",
      icon: <FaCakeCandles className="text-pink-500" />,
      content: (
        <div className="space-y-4">
          {[
            {
              name: "Chocolate Soufflé",
              description: "Warm chocolate soufflé with vanilla ice cream",
              price: 14,
              prepTime: "15 min",
              image: <FaCakeCandles />
            },
            {
              name: "Crème Brûlée",
              description: "Classic French vanilla custard with caramelized sugar",
              price: 12,
              prepTime: "5 min",
              image: <FaCakeCandles />
            },
            {
              name: "Berry Pavlova",
              description: "Light meringue with fresh berries and cream",
              price: 13,
              prepTime: "10 min",
              image: <FaCakeCandles />
            }
          ].map((dessert, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <div className="flex justify-between items-start">
                <div className="flex gap-4">
                  <div className="text-3xl">{dessert.image}</div>
                  <div>
                    <h4 className="font-medium">{dessert.name}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {dessert.description}
                    </p>
                    <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
                      <FaClock className="text-pink-500" />
                      <span>{dessert.prepTime}</span>
                    </div>
                  </div>
                </div>
                <div className="text-lg font-bold">${dessert.price}</div>
              </div>
            </div>
          ))}
          <div className="text-center text-sm text-gray-500 dark:text-gray-400">
            All desserts are made fresh daily
          </div>
        </div>
      )
    }
  ];

  return (
    <div className={`min-h-screen p-4 sm:p-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'}`}>
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 sm:mb-8">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 flex items-center gap-3">
            <FaUtensils className={darkMode ? 'text-orange-400' : 'text-orange-600'} />
            Restaurant Menu
          </h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`px-3 py-2 sm:px-4 sm:py-2 text-sm sm:text-base rounded-lg ${
              darkMode 
                ? 'bg-gray-800 text-white border border-gray-700 hover:bg-gray-700' 
                : 'bg-white text-gray-900 border border-gray-200 hover:bg-gray-50'
            } shadow-sm transition-colors`}
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {menuSections.map((section, index) => (
            <div key={index} className="flex">
              <div className="mt-4 mr-2 text-lg sm:text-xl">
                {section.icon}
              </div>
              <div className="flex-1">
                <Collapsible_17
                  title={section.title}
                  defaultOpen={index === 0}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {React.Children.map(section.content.props.children, (child) => 
                      React.cloneElement(child, {
                        className: `${child.props.className} transition-colors hover:shadow-md`
                      })
                    )}
                  </div>
                </Collapsible_17>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Example_17; 