"use client"

import React, { useState } from 'react';
import Collapsible_6 from '../_components/Collapsible_6';
import { FaUtensils, FaBookOpen, FaClock, FaFire, FaLeaf, FaCakeCandles, FaBowlFood } from 'react-icons/fa6';

const Example_6: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const recipeSections = [
    {
      title: "Featured Recipes",
      icon: <FaUtensils className="text-orange-500" />,
      content: (
        <div className="space-y-4">
          {[
            {
              name: "Creamy Pasta Alfredo",
              time: "30 mins",
              difficulty: "Medium",
              rating: 4.8
            },
            {
              name: "Grilled Salmon",
              time: "25 mins",
              difficulty: "Easy",
              rating: 4.5
            },
            {
              name: "Chocolate Lava Cake",
              time: "45 mins",
              difficulty: "Hard",
              rating: 4.9
            }
          ].map((recipe, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium">{recipe.name}</h4>
                  <div className="flex items-center gap-4 mt-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="flex items-center gap-1">
                      <FaClock className="text-orange-500" />
                      {recipe.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaFire className="text-orange-500" />
                      {recipe.difficulty}
                    </span>
                  </div>
                </div>
                <div className="text-yellow-500">&star; {recipe.rating}</div>
              </div>
            </div>
          ))}
        </div>
      )
    },
    {
      title: "Recipe Categories",
      icon: <FaBookOpen className="text-green-500" />,
      content: (
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <FaLeaf className="text-green-500" />
              <h4 className="font-medium">Vegetarian</h4>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">42 recipes</p>
          </div>
          
          <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <FaBowlFood className="text-orange-500" />
              <h4 className="font-medium">Main Course</h4>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">56 recipes</p>
          </div>
          
          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <FaCakeCandles className="text-purple-500" />
              <h4 className="font-medium">Desserts</h4>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">35 recipes</p>
          </div>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <FaUtensils className="text-blue-500" />
              <h4 className="font-medium">Quick & Easy</h4>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">28 recipes</p>
          </div>
        </div>
      )
    },
    {
      title: "Cooking Tips",
      icon: <FaFire className="text-red-500" />,
      content: (
        <div className="space-y-4">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Knife Skills</h4>
            <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-2">
              <li>&bull; Keep your knife sharp for precise cuts</li>
              <li>&bull; Use the claw grip to protect your fingers</li>
              <li>&bull; Let the weight of the knife do the work</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Temperature Control</h4>
            <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-2">
              <li>&bull; Preheat your pan before adding ingredients</li>
              <li>&bull; Use medium heat for most cooking</li>
              <li>&bull; Let meat rest after cooking</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Seasoning</h4>
            <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-2">
              <li>&bull; Season in layers while cooking</li>
              <li>&bull; Taste and adjust before serving</li>
              <li>&bull; Use fresh herbs for better flavor</li>
            </ul>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className={`min-h-screen p-4 sm:p-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-orange-50 text-gray-800'}`}>
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 mb-6 sm:mb-8">
          <h1 className="text-xl sm:text-2xl font-bold flex items-center gap-3">
            <FaUtensils className={darkMode ? 'text-orange-400' : 'text-orange-600'} />
            Recipe Book
          </h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`px-4 py-2 rounded-lg text-sm sm:text-base min-w-[120px] ${
              darkMode 
                ? 'bg-gray-800 text-white border border-gray-700 hover:bg-gray-700' 
                : 'bg-white text-gray-900 border border-gray-200 hover:bg-gray-50'
            } shadow-sm transition-colors`}
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {recipeSections.map((section, index) => (
            <div key={index} className="flex">
              <div className="mt-4 mr-2 text-lg sm:text-xl">
                {section.icon}
              </div>
              <div className="flex-1">
                <Collapsible_6
                  title={section.title}
                  defaultOpen={index === 0}
                >
                  {index === 1 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      {React.Children.map(section.content.props.children, (child) => 
                        React.cloneElement(child, {
                          className: `${child.props.className} transition-colors hover:shadow-md`
                        })
                      )}
                    </div>
                  ) : (
                    <div className={`space-y-3 sm:space-y-4 ${
                      index === 0 ? 'sm:grid sm:grid-cols-2 sm:gap-4 sm:space-y-0' : ''
                    }`}>
                      {React.Children.map(section.content.props.children, (child) =>
                        React.cloneElement(child, {
                          className: `${child.props.className} transition-colors hover:shadow-md`
                        })
                      )}
                    </div>
                  )}
                </Collapsible_6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Example_6; 