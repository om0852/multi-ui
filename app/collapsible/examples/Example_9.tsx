"use client"

import React, { useState } from 'react';
import Collapsible_9 from '../tsx/Collapsible_9';
import { FaPlane, FaCalendarDays, FaLocationDot, FaHotel, FaSun, FaUmbrella, FaMap } from 'react-icons/fa6';

const Example_9: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const travelSections = [
    {
      title: "Trip Details",
      icon: <FaPlane className="text-blue-500" />,
      content: (
        <div className="space-y-4">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <FaLocationDot className="text-blue-500" />
              <div>
                <h4 className="font-medium">Destination</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">Bali, Indonesia</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FaCalendarDays className="text-blue-500" />
              <div>
                <h4 className="font-medium">Travel Dates</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">June 15 - June 30, 2024</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-medium mb-3">Flight Information</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Departure</p>
                  <p className="font-medium">JFK → DPS</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">June 15, 10:30 AM</p>
                </div>
                <FaPlane className="text-gray-400" />
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Return</p>
                  <p className="font-medium">DPS → JFK</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">June 30, 2:15 PM</p>
                </div>
                <FaPlane className="text-gray-400 transform rotate-180" />
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Itinerary",
      icon: <FaMap className="text-green-500" />,
      content: (
        <div className="space-y-4">
          {[
            {
              day: "Day 1",
              activities: [
                { time: "11:00 AM", activity: "Hotel Check-in", icon: <FaHotel /> },
                { time: "2:00 PM", activity: "Beach Visit", icon: <FaUmbrella /> },
                { time: "7:00 PM", activity: "Welcome Dinner", icon: <FaSun /> }
              ]
            },
            {
              day: "Day 2",
              activities: [
                { time: "9:00 AM", activity: "Temple Tour", icon: <FaLocationDot /> },
                { time: "2:00 PM", activity: "Cooking Class", icon: <FaSun /> },
                { time: "6:00 PM", activity: "Sunset Cruise", icon: <FaUmbrella /> }
              ]
            }
          ].map((day, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <h4 className="font-medium mb-3">{day.day}</h4>
              <div className="space-y-3">
                {day.activities.map((activity, j) => (
                  <div key={j} className="flex items-center gap-3">
                    <div className="text-gray-400">{activity.icon}</div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{activity.time}</p>
                      <p className="font-medium">{activity.activity}</p>
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
      title: "Travel Tips",
      icon: <FaSun className="text-yellow-500" />,
      content: (
        <div className="space-y-4">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-medium mb-3">Weather</h4>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <FaSun className="text-yellow-500 mx-auto mb-1" />
                <p className="text-sm font-medium">85&deg;F</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">High</p>
              </div>
              <div className="text-center">
                <FaUmbrella className="text-blue-500 mx-auto mb-1" />
                <p className="text-sm font-medium">75&deg;F</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Low</p>
              </div>
              <div className="text-center">
                <FaLocationDot className="text-red-500 mx-auto mb-1" />
                <p className="text-sm font-medium">30%</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Rain</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-medium mb-3">Packing List</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <input type="checkbox" className="rounded text-blue-500" />
                <span>Passport & Documents</span>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" className="rounded text-blue-500" />
                <span>Beach Essentials</span>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" className="rounded text-blue-500" />
                <span>Comfortable Shoes</span>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" className="rounded text-blue-500" />
                <span>Travel Insurance</span>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-medium mb-3">Local Information</h4>
            <div className="space-y-2 text-sm">
              <p>&bull; Currency: Indonesian Rupiah (IDR)</p>
              <p>&bull; Language: Indonesian, English widely spoken</p>
              <p>&bull; Emergency: Dial 112</p>
              <p>&bull; Time Zone: GMT+8</p>
            </div>
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
                <Collapsible_9
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
                </Collapsible_9>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Example_9; 