"use client"

import React, { useState } from 'react';
import Collapsible_23 from '../_components/Collapsible_23';
import { FaUtensils, FaBowlFood, FaWineGlass, FaFire, FaStar, FaLeaf, FaWheatAwn } from 'react-icons/fa6';

const Example_23: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const menuSections = [
    {
      title: "Featured Items",
      icon: <FaStar className="text-yellow-500" />,
      content: (
        <div className="space-y-4">
          {[
            {
              name: "Truffle Pasta",
              description: "Fresh pasta with black truffle and parmesan cream sauce",
              price: "$24.99",
              tags: ["Chef's Special", "Popular"],
              image: "🍝"
            },
            {
              name: "Wagyu Steak",
              description: "Premium Japanese A5 wagyu with seasonal vegetables",
              price: "$89.99",
              tags: ["Premium", "Signature"],
              image: "🥩"
            },
            {
              name: "Lobster Thermidor",
              description: "Baked lobster with herb-cheese sauce and cognac",
              price: "$45.99",
              tags: ["Seafood", "Luxury"],
              image: "🦞"
            }
          ].map((item, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <div className="flex justify-between items-start">
                <div className="flex gap-3">
                  <div className="text-4xl">{item.image}</div>
                  <div>
                    <h4 className="font-medium">{item.name}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {item.description}
                    </p>
                    <div className="flex gap-2 mt-2">
                      {item.tags.map((tag, j) => (
                        <span key={j} className="text-xs px-2 py-1 bg-yellow-100 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="font-medium text-lg">{item.price}</div>
              </div>
            </div>
          ))}
        </div>
      )
    },
    {
      title: "Main Menu",
      icon: <FaBowlFood className="text-orange-500" />,
      content: (
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <FaLeaf className="text-green-500" />
              <h4 className="font-medium">Appetizers</h4>
            </div>
            <div className="space-y-3">
              {[
                { name: "Caesar Salad", price: "$12.99", description: "Romaine lettuce, croutons, parmesan" },
                { name: "Bruschetta", price: "$9.99", description: "Toasted bread with tomatoes and basil" },
                { name: "Soup of the Day", price: "$8.99", description: "Chef's daily creation" }
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-start p-3 bg-white dark:bg-gray-800 rounded-lg">
                  <div>
                    <h5 className="font-medium">{item.name}</h5>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{item.description}</p>
                  </div>
                  <div className="font-medium">{item.price}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-3">
              <FaFire className="text-red-500" />
              <h4 className="font-medium">Main Courses</h4>
            </div>
            <div className="space-y-3">
              {[
                { name: "Grilled Salmon", price: "$28.99", description: "Atlantic salmon with herb butter" },
                { name: "Beef Tenderloin", price: "$34.99", description: "8oz tenderloin with red wine sauce" },
                { name: "Mushroom Risotto", price: "$22.99", description: "Arborio rice with wild mushrooms" }
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-start p-3 bg-white dark:bg-gray-800 rounded-lg">
                  <div>
                    <h5 className="font-medium">{item.name}</h5>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{item.description}</p>
                  </div>
                  <div className="font-medium">{item.price}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-3">
              <FaWineGlass className="text-purple-500" />
              <h4 className="font-medium">Beverages</h4>
            </div>
            <div className="space-y-3">
              {[
                { name: "House Red Wine", price: "$9.99", description: "Glass of Cabernet Sauvignon" },
                { name: "Craft Cocktail", price: "$12.99", description: "Seasonal signature cocktails" },
                { name: "Sparkling Water", price: "$4.99", description: "San Pellegrino" }
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-start p-3 bg-white dark:bg-gray-800 rounded-lg">
                  <div>
                    <h5 className="font-medium">{item.name}</h5>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{item.description}</p>
                  </div>
                  <div className="font-medium">{item.price}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Special Offers",
      icon: <FaWheatAwn className="text-red-500" />,
      content: (
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 p-4 rounded-lg text-white">
            <h4 className="font-medium mb-2">Happy Hour</h4>
            <p className="text-sm opacity-90">Monday - Friday, 4PM - 6PM</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>&bull; 50% off all appetizers</li>
              <li>&bull; $5 house wines</li>
              <li>&bull; $4 draft beers</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-lg text-white">
            <h4 className="font-medium mb-2">Weekend Brunch</h4>
            <p className="text-sm opacity-90">Saturday & Sunday, 10AM - 2PM</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>&bull; Unlimited mimosas</li>
              <li>&bull; Brunch buffet</li>
              <li>&bull; Live music</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Dietary Options</h4>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs px-2 py-1 bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-full">
                Vegetarian Options
              </span>
              <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full">
                Gluten-Free
              </span>
              <span className="text-xs px-2 py-1 bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 rounded-full">
                Dairy-Free
              </span>
              <span className="text-xs px-2 py-1 bg-yellow-100 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400 rounded-full">
                Vegan Options
              </span>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className={`min-h-screen p-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-orange-50 text-gray-800'}`}>
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold flex items-center gap-3">
            <FaUtensils className={darkMode ? 'text-orange-400' : 'text-orange-600'} />
            Restaurant Menu
          </h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`px-4 py-2 rounded-lg ${
              darkMode 
                ? 'bg-gray-800 text-white border border-gray-700' 
                : 'bg-white text-gray-900 border border-gray-200'
            } shadow-sm`}
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>

        <div className="space-y-4">
          {menuSections.map((section, index) => (
            <div key={index} className="flex">
              <div className="mt-4 mr-2">
                {section.icon}
              </div>
              <div className="flex-1">
                <Collapsible_23
                  title={section.title}
                  defaultOpen={index === 0}
                >
                  {section.content}
                </Collapsible_23>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Example_23; 