"use client"

import React, { useState } from 'react';
import Collapsible_1 from '../_components/Collapsible_1';
import { FaUser, FaCalendarDays, FaBell, FaGear } from 'react-icons/fa6';

const Example_1: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const dashboardSections = [
    {
      title: "Profile Overview",
      icon: <FaUser className="text-blue-500" />,
      content: (
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center text-white text-xl font-bold">
              JD
            </div>
            <div>
              <h3 className="font-medium dark:text-white">John Doe</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Software Developer</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
              <div className="text-sm text-gray-600 dark:text-gray-300">Email</div>
              <div className="font-medium dark:text-white">john.doe@example.com</div>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
              <div className="text-sm text-gray-600 dark:text-gray-300">Location</div>
              <div className="font-medium dark:text-white">San Francisco, CA</div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Calendar Events",
      icon: <FaCalendarDays className="text-purple-500" />,
      content: (
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
            <div>
              <h4 className="font-medium">Team Meeting</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">10:00 AM - 11:00 AM</p>
            </div>
            <div className="text-purple-500">Today</div>
          </div>
          <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg">
            <div>
              <h4 className="font-medium">Project Review</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">2:00 PM - 3:00 PM</p>
            </div>
            <div className="text-gray-500">Tomorrow</div>
          </div>
        </div>
      )
    },
    {
      title: "Notifications",
      icon: <FaBell className="text-yellow-500" />,
      content: (
        <div className="space-y-3">
          <div className="flex gap-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
            <FaBell className="text-yellow-500 mt-1" />
            <div>
              <h4 className="font-medium">New Message</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">Sarah sent you a message about the project</p>
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">5 minutes ago</p>
            </div>
          </div>
          <div className="flex gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg">
            <FaBell className="text-gray-400 mt-1" />
            <div>
              <h4 className="font-medium">Meeting Reminder</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">Team meeting starts in 30 minutes</p>
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">30 minutes ago</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Settings",
      icon: <FaGear className="text-gray-500" />,
      content: (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Email Notifications</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">Receive email updates</p>
            </div>
            <div className="relative inline-block w-12 h-6 rounded-full bg-gray-200 dark:bg-gray-700">
              <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full shadow-sm"></div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Dark Mode</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">Toggle dark theme</p>
            </div>
            <div className="relative inline-block w-12 h-6 rounded-full bg-gray-200 dark:bg-gray-700">
              <div className="absolute right-1 top-1 bg-white w-4 h-4 rounded-full shadow-sm"></div>
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
          <h1 className="text-xl sm:text-2xl font-bold flex items-center gap-3">
            <FaUser className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
            Personal Dashboard
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
          {dashboardSections.map((section, index) => (
            <div key={index} className="flex">
              <div className="mt-3 sm:mt-4 mr-2 sm:mr-3">
                {section.icon}
              </div>
              <div className="flex-1">
                <Collapsible_1
                  title={section.title}
                  defaultOpen={index === 0}
                >
                  {section.content}
                </Collapsible_1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Example_1; 