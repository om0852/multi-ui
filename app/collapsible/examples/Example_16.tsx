"use client"

import React, { useState } from 'react';
import Collapsible_16 from '../tsx/Collapsible_16';
import { FaPlane, FaCalendarDays, FaListCheck, FaLocationDot, FaHotel, FaUtensils, FaSun, FaStar } from 'react-icons/fa6';

const Example_16: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const travelSections = [
    {
      title: "Trip Details",
      icon: <FaPlane className="text-blue-500" />,
      content: (
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-6 rounded-xl">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-bold">Paris, France</h3>
                <p className="text-blue-100">Summer Vacation 2024</p>
              </div>
              <FaLocationDot className="text-3xl text-blue-200" />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-blue-100">Departure</p>
                <p className="font-bold">June 15, 2024</p>
              </div>
              <div>
                <p className="text-sm text-blue-100">Return</p>
                <p className="font-bold">June 22, 2024</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <FaHotel className="text-indigo-500" />
                <span className="font-medium">Hotel</span>
              </div>
              <p className="text-sm text-gray-500">Grand Hotel Paris</p>
              <div className="flex text-yellow-500 mt-1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <FaSun className="text-yellow-500" />
                <span className="font-medium">Weather</span>
              </div>
              <p className="text-sm text-gray-500">Mostly Sunny</p>
              <p className="text-xs text-gray-400 mt-1">75&deg;F / 24&deg;C</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Itinerary",
      icon: <FaCalendarDays className="text-purple-500" />,
      content: (
        <div className="space-y-4">
          {[
            {
              day: "Day 1",
              activities: [
                { time: "09:00 AM", activity: "Eiffel Tower Visit", icon: <FaLocationDot /> },
                { time: "12:30 PM", activity: "Lunch at Le Cheval Blanc", icon: <FaUtensils /> },
                { time: "03:00 PM", activity: "Louvre Museum Tour", icon: <FaLocationDot /> }
              ]
            },
            {
              day: "Day 2",
              activities: [
                { time: "10:00 AM", activity: "Notre-Dame Cathedral", icon: <FaLocationDot /> },
                { time: "01:00 PM", activity: "Seine River Cruise", icon: <FaLocationDot /> },
                { time: "07:00 PM", activity: "Dinner at L'Arpège", icon: <FaUtensils /> }
              ]
            }
          ].map((day, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <h4 className="font-medium mb-3">{day.day}</h4>
              <div className="space-y-3">
                {day.activities.map((activity, j) => (
                  <div key={j} className="flex items-center gap-3">
                    <div className="text-purple-500">
                      {activity.icon}
                    </div>
                    <div>
                      <p className="font-medium">{activity.activity}</p>
                      <p className="text-sm text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )
    },
    {
      title: "Travel Checklist",
      icon: <FaListCheck className="text-green-500" />,
      content: (
        <div className="space-y-4">
          {[
            {
              category: "Documents",
              items: [
                { name: "Passport", checked: true },
                { name: "Visa", checked: true },
                { name: "Travel Insurance", checked: false }
              ]
            },
            {
              category: "Essentials",
              items: [
                { name: "Phone Charger", checked: true },
                { name: "Power Adapter", checked: false },
                { name: "Medications", checked: true }
              ]
            },
            {
              category: "Clothing",
              items: [
                { name: "Weather-appropriate clothes", checked: true },
                { name: "Comfortable shoes", checked: true },
                { name: "Formal attire", checked: false }
              ]
            }
          ].map((category, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <h4 className="font-medium mb-3">{category.category}</h4>
              <div className="space-y-2">
                {category.items.map((item, j) => (
                  <div key={j} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                      item.checked 
                        ? 'bg-green-500 border-green-500' 
                        : 'border-gray-300 dark:border-gray-600'
                    }`}>
                      {item.checked && (
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                    <span className={item.checked ? 'line-through text-gray-500' : ''}>
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )
    }
  ];

  return (
    <div className={`min-h-screen p-4 sm:p-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'}`}>
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 sm:mb-8">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 flex items-center gap-3">
            <FaPlane className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
            Travel Planner
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
          {travelSections.map((section, index) => (
            <div key={index} className="flex">
              <div className="mt-4 mr-2 text-lg sm:text-xl">
                {section.icon}
              </div>
              <div className="flex-1">
                <Collapsible_16
                  title={section.title}
                  defaultOpen={index === 0}
                >
                  <div className={`${
                    index === 0 ? 'grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4' : 'space-y-3 sm:space-y-4'
                  }`}>
                    {React.Children.map(section.content.props.children, (child) => 
                      React.cloneElement(child, {
                        className: `${child.props.className} transition-colors hover:shadow-md`
                      })
                    )}
                  </div>
                </Collapsible_16>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Example_16; 