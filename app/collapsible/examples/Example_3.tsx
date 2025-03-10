"use client"

import React, { useState } from 'react';
import Collapsible_3 from '../_components/Collapsible_3';
import { FaListCheck, FaCircleCheck, FaCircleXmark, FaClock, FaUserGroup } from 'react-icons/fa6';

const Example_3: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const taskSections = [
    {
      title: "Today&apos;s Tasks",
      icon: <FaListCheck className="text-blue-500" />,
      content: (
        <div className="space-y-4">
          <div className="flex justify-between items-center mb-4">
            <div className="text-sm text-gray-500 dark:text-gray-400">
              3 of 5 tasks completed
            </div>
            <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-blue-500" style={{ width: '60%' }}></div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <FaCircleCheck className="text-green-500" />
              <span className="flex-1 line-through text-gray-500">Morning standup</span>
              <span className="text-xs text-gray-500">9:00 AM</span>
            </div>
            
            <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg">
              <FaCircleXmark className="text-gray-400" />
              <span className="flex-1">Code review</span>
              <span className="text-xs text-gray-500">11:00 AM</span>
            </div>
            
            <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <FaCircleCheck className="text-green-500" />
              <span className="flex-1 line-through text-gray-500">Update documentation</span>
              <span className="text-xs text-gray-500">2:00 PM</span>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Team Tasks",
      icon: <FaUserGroup className="text-purple-500" />,
      content: (
        <div className="space-y-4">
          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
            <h4 className="font-medium">Frontend Development</h4>
            <div className="mt-2 space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs">JD</div>
                <span className="text-sm text-gray-500 dark:text-gray-400">UI Components</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-purple-500 text-white flex items-center justify-center text-xs">AM</div>
                <span className="text-sm text-gray-500 dark:text-gray-400">State Management</span>
              </div>
            </div>
          </div>
          
          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
            <h4 className="font-medium">Backend Development</h4>
            <div className="mt-2 space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-xs">RK</div>
                <span className="text-sm text-gray-500 dark:text-gray-400">API Endpoints</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-yellow-500 text-white flex items-center justify-center text-xs">SL</div>
                <span className="text-sm text-gray-500 dark:text-gray-400">Database Optimization</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Upcoming Deadlines",
      icon: <FaClock className="text-red-500" />,
      content: (
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
            <div>
              <h4 className="font-medium">Project Milestone 1</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">Frontend Components</p>
            </div>
            <div className="text-sm text-red-500">2 days left</div>
          </div>
          
          <div className="flex items-center justify-between p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
            <div>
              <h4 className="font-medium">Project Milestone 2</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">Backend Integration</p>
            </div>
            <div className="text-sm text-red-500">5 days left</div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className={`min-h-screen p-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'}`}>
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold flex items-center gap-3">
            <FaListCheck className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
            Task Manager
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
          {taskSections.map((section, index) => (
            <div key={index} className="flex">
              <div className="mt-4 mr-2">
                {section.icon}
              </div>
              <div className="flex-1">
                <Collapsible_3
                  title={section.title}
                  defaultOpen={index === 0}
                >
                  {section.content}
                </Collapsible_3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Example_3; 