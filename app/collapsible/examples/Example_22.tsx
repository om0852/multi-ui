"use client"

import React, { useState } from 'react';
import Collapsible_22 from '../_components/Collapsible_22';
import { FaPlane, FaCalendarDays, FaLocationDot, FaSun, FaHotel, FaUtensils, FaCamera, FaMap } from 'react-icons/fa6';

const Example_22: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const travelSections = [
    {
      title: "Trip Details",
      icon: <FaPlane className="text-blue-500" />,
      content: (
        <div className="space-y-4">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-medium mb-4">Paris Adventure</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-gray-500">
                  <FaCalendarDays />
                  <span>Departure</span>
                </div>
                <div className="font-medium">June 15, 2024</div>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-gray-500">
                  <FaCalendarDays />
                  <span>Return</span>
                </div>
                <div className="font-medium">June 22, 2024</div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <FaLocationDot className="text-blue-500" />
              <h4 className="font-medium">Destination Details</h4>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Location</span>
                <span>Paris, France</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Weather</span>
                <div className="flex items-center gap-1">
                  <FaSun className="text-yellow-500" />
                  <span>25&deg;C</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Time Zone</span>
                <span>GMT+1</span>
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
        <div className="space-y-3">
          {[
            {
              day: "Day 1",
              activities: [
                { time: "10:00 AM", title: "Eiffel Tower Visit", icon: <FaCamera /> },
                { time: "2:00 PM", title: "Louvre Museum", icon: <FaCamera /> },
                { time: "7:00 PM", title: "Seine River Dinner Cruise", icon: <FaUtensils /> }
              ]
            },
            {
              day: "Day 2",
              activities: [
                { time: "9:00 AM", title: "Notre-Dame Cathedral", icon: <FaCamera /> },
                { time: "1:00 PM", title: "Luxembourg Gardens", icon: <FaCamera /> },
                { time: "8:00 PM", title: "Local Restaurant", icon: <FaUtensils /> }
              ]
            }
          ].map((day, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <h4 className="font-medium mb-3">{day.day}</h4>
              <div className="space-y-3">
                {day.activities.map((activity, j) => (
                  <div key={j} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center text-green-500">
                      {activity.icon}
                    </div>
                    <div>
                      <div className="font-medium">{activity.title}</div>
                      <div className="text-sm text-gray-500">{activity.time}</div>
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
            <h4 className="font-medium mb-3">Accommodation</h4>
            <div className="flex items-center gap-3">
              <FaHotel className="text-blue-500" />
              <div>
                <div className="font-medium">Hotel Saint-Michel</div>
                <div className="text-sm text-gray-500">Latin Quarter, Paris</div>
              </div>
            </div>
            <div className="mt-3 text-sm text-gray-500">
              Check-in: 3:00 PM<br />
              Check-out: 11:00 AM
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
            <h4 className="font-medium mb-3">Essential Tips</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                <span>Learn basic French phrases</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                <span>Get a Metro pass for easy travel</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                <span>Book museum tickets in advance</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                <span>Keep important documents safe</span>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-medium mb-3">Emergency Contacts</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Police</span>
                <span>17</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Ambulance</span>
                <span>15</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Embassy</span>
                <span>+33 1 43 12 22 22</span>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className={`min-h-screen p-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-blue-50 text-gray-800'}`}>
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold flex items-center gap-3">
            <FaPlane className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
            Travel Planner
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
          {travelSections.map((section, index) => (
            <div key={index} className="flex">
              <div className="mt-4 mr-2">
                {section.icon}
              </div>
              <div className="flex-1">
                <Collapsible_22
                  title={section.title}
                  defaultOpen={index === 0}
                >
                  {section.content}
                </Collapsible_22>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Example_22; 