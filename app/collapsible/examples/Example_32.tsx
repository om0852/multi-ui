"use client"

import React, { useState } from 'react';
import Collapsible_32 from '../_components/Collapsible_32';
import { FaCandyCane, FaIceCream, FaCookie, FaCakeCandles } from 'react-icons/fa6';

const Example_32: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const candyCategories = [
    {
      title: "Chocolate Delights",
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-pink-50 p-4 rounded-xl border-2 border-pink-200 shadow-md">
              <h4 className="font-bold text-pink-700 mb-2">Chocolate Truffles</h4>
              <p className="text-pink-600 mb-2">Rich ganache center coated in cocoa powder</p>
              <div className="flex justify-between items-center">
                <span className="text-pink-800 font-medium">$8.99 / dozen</span>
                <span className="bg-pink-200 text-pink-800 px-2 py-1 rounded-full text-xs">Popular!</span>
              </div>
            </div>
            
            <div className="bg-pink-50 p-4 rounded-xl border-2 border-pink-200 shadow-md">
              <h4 className="font-bold text-pink-700 mb-2">Chocolate Covered Strawberries</h4>
              <p className="text-pink-600 mb-2">Fresh strawberries dipped in premium chocolate</p>
              <div className="flex justify-between items-center">
                <span className="text-pink-800 font-medium">$12.99 / dozen</span>
                <span className="bg-pink-200 text-pink-800 px-2 py-1 rounded-full text-xs">Seasonal</span>
              </div>
            </div>
            
            <div className="bg-pink-50 p-4 rounded-xl border-2 border-pink-200 shadow-md">
              <h4 className="font-bold text-pink-700 mb-2">Chocolate Fudge</h4>
              <p className="text-pink-600 mb-2">Creamy homemade fudge with walnuts</p>
              <div className="flex justify-between items-center">
                <span className="text-pink-800 font-medium">$7.99 / half pound</span>
                <span className="bg-pink-200 text-pink-800 px-2 py-1 rounded-full text-xs">Homemade</span>
              </div>
            </div>
            
            <div className="bg-pink-50 p-4 rounded-xl border-2 border-pink-200 shadow-md">
              <h4 className="font-bold text-pink-700 mb-2">Chocolate Bark</h4>
              <p className="text-pink-600 mb-2">Dark chocolate with dried fruits and nuts</p>
              <div className="flex justify-between items-center">
                <span className="text-pink-800 font-medium">$9.99 / half pound</span>
                <span className="bg-pink-200 text-pink-800 px-2 py-1 rounded-full text-xs">Gluten-Free</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Colorful Candies",
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-xl border-2 border-blue-200 shadow-md">
              <h4 className="font-bold text-blue-700 mb-2">Rainbow Lollipops</h4>
              <p className="text-blue-600 mb-2">Swirled fruit flavors in vibrant colors</p>
              <div className="flex justify-between items-center">
                <span className="text-blue-800 font-medium">$1.99 each</span>
                <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded-full text-xs">Kids' Favorite</span>
              </div>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-xl border-2 border-blue-200 shadow-md">
              <h4 className="font-bold text-blue-700 mb-2">Jelly Beans</h4>
              <p className="text-blue-600 mb-2">Assorted flavors in a rainbow of colors</p>
              <div className="flex justify-between items-center">
                <span className="text-blue-800 font-medium">$4.99 / quarter pound</span>
                <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded-full text-xs">20+ Flavors</span>
              </div>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-xl border-2 border-blue-200 shadow-md">
              <h4 className="font-bold text-blue-700 mb-2">Sour Gummy Worms</h4>
              <p className="text-blue-600 mb-2">Sweet and sour sugar-coated gummy candy</p>
              <div className="flex justify-between items-center">
                <span className="text-blue-800 font-medium">$3.99 / quarter pound</span>
                <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded-full text-xs">Bestseller</span>
              </div>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-xl border-2 border-blue-200 shadow-md">
              <h4 className="font-bold text-blue-700 mb-2">Rock Candy Sticks</h4>
              <p className="text-blue-600 mb-2">Crystallized sugar on a stick in various colors</p>
              <div className="flex justify-between items-center">
                <span className="text-blue-800 font-medium">$2.49 each</span>
                <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded-full text-xs">Handcrafted</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Nostalgic Treats",
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-purple-50 p-4 rounded-xl border-2 border-purple-200 shadow-md">
              <h4 className="font-bold text-purple-700 mb-2">Saltwater Taffy</h4>
              <p className="text-purple-600 mb-2">Soft, chewy candy in assorted flavors</p>
              <div className="flex justify-between items-center">
                <span className="text-purple-800 font-medium">$5.99 / half pound</span>
                <span className="bg-purple-200 text-purple-800 px-2 py-1 rounded-full text-xs">Classic</span>
              </div>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-xl border-2 border-purple-200 shadow-md">
              <h4 className="font-bold text-purple-700 mb-2">Candy Buttons</h4>
              <p className="text-purple-600 mb-2">Colorful sugar dots on paper strips</p>
              <div className="flex justify-between items-center">
                <span className="text-purple-800 font-medium">$1.49 / strip</span>
                <span className="bg-purple-200 text-purple-800 px-2 py-1 rounded-full text-xs">Retro</span>
              </div>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-xl border-2 border-purple-200 shadow-md">
              <h4 className="font-bold text-purple-700 mb-2">Wax Bottles</h4>
              <p className="text-purple-600 mb-2">Wax bottles filled with sweet liquid</p>
              <div className="flex justify-between items-center">
                <span className="text-purple-800 font-medium">$3.99 / dozen</span>
                <span className="bg-purple-200 text-purple-800 px-2 py-1 rounded-full text-xs">Old-Fashioned</span>
              </div>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-xl border-2 border-purple-200 shadow-md">
              <h4 className="font-bold text-purple-700 mb-2">Candy Cigarettes</h4>
              <p className="text-purple-600 mb-2">Chalky sugar sticks in a retro package</p>
              <div className="flex justify-between items-center">
                <span className="text-purple-800 font-medium">$1.99 / pack</span>
                <span className="bg-purple-200 text-purple-800 px-2 py-1 rounded-full text-xs">Vintage</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Special Dietary Options",
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 p-4 rounded-xl border-2 border-green-200 shadow-md">
              <h4 className="font-bold text-green-700 mb-2">Sugar-Free Chocolates</h4>
              <p className="text-green-600 mb-2">Assorted chocolates sweetened with stevia</p>
              <div className="flex justify-between items-center">
                <span className="text-green-800 font-medium">$10.99 / box</span>
                <span className="bg-green-200 text-green-800 px-2 py-1 rounded-full text-xs">Sugar-Free</span>
              </div>
            </div>
            
            <div className="bg-green-50 p-4 rounded-xl border-2 border-green-200 shadow-md">
              <h4 className="font-bold text-green-700 mb-2">Vegan Gummies</h4>
              <p className="text-green-600 mb-2">Plant-based gummies in fruit flavors</p>
              <div className="flex justify-between items-center">
                <span className="text-green-800 font-medium">$6.99 / quarter pound</span>
                <span className="bg-green-200 text-green-800 px-2 py-1 rounded-full text-xs">Vegan</span>
              </div>
            </div>
            
            <div className="bg-green-50 p-4 rounded-xl border-2 border-green-200 shadow-md">
              <h4 className="font-bold text-green-700 mb-2">Gluten-Free Licorice</h4>
              <p className="text-green-600 mb-2">Soft licorice twists made without wheat</p>
              <div className="flex justify-between items-center">
                <span className="text-green-800 font-medium">$5.49 / quarter pound</span>
                <span className="bg-green-200 text-green-800 px-2 py-1 rounded-full text-xs">Gluten-Free</span>
              </div>
            </div>
            
            <div className="bg-green-50 p-4 rounded-xl border-2 border-green-200 shadow-md">
              <h4 className="font-bold text-green-700 mb-2">Organic Fruit Chews</h4>
              <p className="text-green-600 mb-2">Made with organic fruit juices and sweeteners</p>
              <div className="flex justify-between items-center">
                <span className="text-green-800 font-medium">$7.99 / quarter pound</span>
                <span className="bg-green-200 text-green-800 px-2 py-1 rounded-full text-xs">Organic</span>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className={`min-h-screen p-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-pink-50 text-gray-800'}`}>
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold flex items-center gap-3 text-pink-600">
            <FaCandyCane className="text-pink-500" />
            Sweet Treats Candy Shop
          </h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`px-4 py-2 rounded-lg ${
              darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
            } shadow-md`}
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>

        <div className="space-y-6">
          {candyCategories.map((category, index) => (
            <div key={index} className="flex">
              <div className="mt-4 mr-2">
                {index === 0 && <FaCookie className="text-yellow-600" />}
                {index === 1 && <FaCandyCane className="text-red-500" />}
                {index === 2 && <FaIceCream className="text-purple-500" />}
                {index === 3 && <FaCakeCandles className="text-green-500" />}
              </div>
              <div className="flex-1">
                <Collapsible_32
                  title={category.title}
                  defaultOpen={index === 0}
                >
                  {category.content}
                </Collapsible_32>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Example_32; 