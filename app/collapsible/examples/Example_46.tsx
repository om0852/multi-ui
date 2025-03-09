"use client"

import React, { useState } from 'react';
import Collapsible_46 from '../_components/Collapsible_46';
import { FaPlane, FaHotel, FaMapLocationDot, FaCompass, FaSuitcase } from 'react-icons/fa6';

const Example_46: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const travelPlans = [
    {
      title: "Paris Adventure",
      icon: <FaPlane className="text-blue-500" />,
      duration: "7 days",
      season: "Spring",
      budget: "$2,500",
      content: (
        <div className="space-y-4">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center gap-2">
                <FaSuitcase className="text-blue-500" />
                <span className="text-blue-700 dark:text-blue-300">7 Days in Paris</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-700 dark:text-blue-300">$2,500/person</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center text-sm">
              <div className="bg-white dark:bg-blue-900/30 p-2 rounded">
                <div className="font-medium text-blue-800 dark:text-blue-200">Flight</div>
                <div className="text-blue-600 dark:text-blue-300">$800</div>
              </div>
              <div className="bg-white dark:bg-blue-900/30 p-2 rounded">
                <div className="font-medium text-blue-800 dark:text-blue-200">Hotel</div>
                <div className="text-blue-600 dark:text-blue-300">$1,200</div>
              </div>
              <div className="bg-white dark:bg-blue-900/30 p-2 rounded">
                <div className="font-medium text-blue-800 dark:text-blue-200">Activities</div>
                <div className="text-blue-600 dark:text-blue-300">$500</div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-2">Itinerary Highlights</h4>
            <div className="space-y-3">
              <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm">
                <h5 className="font-medium mb-1">Day 1-2: City Exploration</h5>
                <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-400">
                  <li>Eiffel Tower visit</li>
                  <li>Seine River cruise</li>
                  <li>Louvre Museum tour</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm">
                <h5 className="font-medium mb-1">Day 3-4: Art & Culture</h5>
                <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-400">
                  <li>Musée d'Orsay</li>
                  <li>Montmartre walking tour</li>
                  <li>Opera Garnier visit</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm">
                <h5 className="font-medium mb-1">Day 5-7: Beyond Paris</h5>
                <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-400">
                  <li>Versailles Palace day trip</li>
                  <li>Giverny gardens</li>
                  <li>Local food tour</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <h4 className="font-medium text-lg mb-2">Travel Tips</h4>
            <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
              <li>Book museum passes in advance</li>
              <li>Learn basic French phrases</li>
              <li>Use Metro for transportation</li>
              <li>Stay in central arrondissements</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Tokyo Explorer",
      icon: <FaMapLocationDot className="text-red-500" />,
      duration: "10 days",
      season: "Fall",
      budget: "$3,500",
      content: (
        <div className="space-y-4">
          <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center gap-2">
                <FaSuitcase className="text-red-500" />
                <span className="text-red-700 dark:text-red-300">10 Days in Tokyo</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-red-700 dark:text-red-300">$3,500/person</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center text-sm">
              <div className="bg-white dark:bg-red-900/30 p-2 rounded">
                <div className="font-medium text-red-800 dark:text-red-200">Flight</div>
                <div className="text-red-600 dark:text-red-300">$1,200</div>
              </div>
              <div className="bg-white dark:bg-red-900/30 p-2 rounded">
                <div className="font-medium text-red-800 dark:text-red-200">Hotel</div>
                <div className="text-red-600 dark:text-red-300">$1,500</div>
              </div>
              <div className="bg-white dark:bg-red-900/30 p-2 rounded">
                <div className="font-medium text-red-800 dark:text-red-200">Activities</div>
                <div className="text-red-600 dark:text-red-300">$800</div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-2">Itinerary Highlights</h4>
            <div className="space-y-3">
              <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm">
                <h5 className="font-medium mb-1">Days 1-3: Modern Tokyo</h5>
                <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-400">
                  <li>Shibuya Crossing</li>
                  <li>Harajuku shopping</li>
                  <li>Robot Restaurant show</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm">
                <h5 className="font-medium mb-1">Days 4-7: Traditional Japan</h5>
                <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-400">
                  <li>Senso-ji Temple</li>
                  <li>Tea ceremony experience</li>
                  <li>Sumo wrestling tournament</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm">
                <h5 className="font-medium mb-1">Days 8-10: Day Trips</h5>
                <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-400">
                  <li>Mount Fuji tour</li>
                  <li>Kamakura temples</li>
                  <li>Hakone hot springs</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
            <h4 className="font-medium text-lg mb-2">Travel Tips</h4>
            <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
              <li>Get a JR Pass for trains</li>
              <li>Download offline maps</li>
              <li>Learn basic Japanese greetings</li>
              <li>Carry cash (many places don't accept cards)</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Bali Retreat",
      icon: <FaCompass className="text-emerald-500" />,
      duration: "12 days",
      season: "Summer",
      budget: "$2,800",
      content: (
        <div className="space-y-4">
          <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center gap-2">
                <FaSuitcase className="text-emerald-500" />
                <span className="text-emerald-700 dark:text-emerald-300">12 Days in Bali</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-700 dark:text-emerald-300">$2,800/person</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center text-sm">
              <div className="bg-white dark:bg-emerald-900/30 p-2 rounded">
                <div className="font-medium text-emerald-800 dark:text-emerald-200">Flight</div>
                <div className="text-emerald-600 dark:text-emerald-300">$1,000</div>
              </div>
              <div className="bg-white dark:bg-emerald-900/30 p-2 rounded">
                <div className="font-medium text-emerald-800 dark:text-emerald-200">Hotels</div>
                <div className="text-emerald-600 dark:text-emerald-300">$1,200</div>
              </div>
              <div className="bg-white dark:bg-emerald-900/30 p-2 rounded">
                <div className="font-medium text-emerald-800 dark:text-emerald-200">Activities</div>
                <div className="text-emerald-600 dark:text-emerald-300">$600</div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-2">Itinerary Highlights</h4>
            <div className="space-y-3">
              <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm">
                <h5 className="font-medium mb-1">Days 1-4: Ubud</h5>
                <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-400">
                  <li>Monkey Forest visit</li>
                  <li>Rice terrace trek</li>
                  <li>Yoga retreat</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm">
                <h5 className="font-medium mb-1">Days 5-8: Beach Life</h5>
                <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-400">
                  <li>Nusa Penida island tour</li>
                  <li>Snorkeling trip</li>
                  <li>Sunset at Uluwatu Temple</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm">
                <h5 className="font-medium mb-1">Days 9-12: Culture & Adventure</h5>
                <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-400">
                  <li>Mount Batur sunrise trek</li>
                  <li>Cooking class</li>
                  <li>Spa treatments</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg">
            <h4 className="font-medium text-lg mb-2">Travel Tips</h4>
            <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
              <li>Book private drivers in advance</li>
              <li>Get travel insurance</li>
              <li>Respect temple dress codes</li>
              <li>Stay hydrated in tropical climate</li>
            </ul>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className={`min-h-screen p-6 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-sky-50 text-gray-800'}`}>
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl md:text-3xl font-medium flex items-center gap-2">
            <FaPlane className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
            <span>Travel Planner</span>
          </h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`px-3 py-1.5 rounded-lg text-sm ${
              darkMode 
                ? 'bg-gray-800 text-blue-400 border border-gray-700' 
                : 'bg-white text-blue-700 border border-blue-200 shadow-sm'
            }`}
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>

        <div className="space-y-4">
          {travelPlans.map((plan, index) => (
            <div key={index} className="flex">
              <div className="mt-4 mr-2">
                {plan.icon}
              </div>
              <div className="flex-1">
                <Collapsible_46
                  title={plan.title}
                  defaultOpen={index === 0}
                >
                  {plan.content}
                </Collapsible_46>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Example_46; 