"use client"

import React, { useState } from 'react';
import Collapsible_3 from '../_components/Collapsible_3';
import { FaListCheck, FaCircleCheck, FaCircleXmark, FaClock, FaUserGroup, FaChartBar, FaTags } from 'react-icons/fa6';

const Example_3: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const taskSections = [
    {
      title: "Today's Tasks",
      icon: <FaListCheck className="text-blue-500" />,
      content: (
        <div className="space-y-3">
          {[
            { title: "Project Meeting", time: "10:00 AM", status: "completed" },
            { title: "Review Code", time: "2:00 PM", status: "in-progress" },
            { title: "Update Documentation", time: "4:00 PM", status: "pending" }
          ].map((task, i) => (
            <div key={i} className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg">
              <div className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full ${
                  task.status === 'completed' ? 'bg-green-500' :
                  task.status === 'in-progress' ? 'bg-yellow-500' : 'bg-red-500'
                }`} />
                <div>
                  <h4 className="font-medium dark:text-white">{task.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{task.time}</p>
                </div>
              </div>
              <span className={`text-sm ${
                task.status === 'completed' ? 'text-green-500' :
                task.status === 'in-progress' ? 'text-yellow-500' : 'text-red-500'
              }`}>
                {task.status.charAt(0).toUpperCase() + task.status.slice(1)}
              </span>
            </div>
          ))}
        </div>
      )
    },
    {
      title: "Task Statistics",
      icon: <FaChartBar className="text-purple-500" />,
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
            <div className="text-sm text-gray-600 dark:text-gray-300">Completed Tasks</div>
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">24</div>
            <div className="text-xs text-gray-600 dark:text-gray-300 mt-1">+3 from yesterday</div>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
            <div className="text-sm text-gray-600 dark:text-gray-300">In Progress</div>
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">12</div>
            <div className="text-xs text-gray-600 dark:text-gray-300 mt-1">-2 from yesterday</div>
          </div>
        </div>
      )
    },
    {
      title: "Task Categories",
      icon: <FaTags className="text-green-500" />,
      content: (
        <div className="space-y-3">
          {[
            { name: "Development", count: 15, color: "bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400" },
            { name: "Design", count: 8, color: "bg-pink-100 dark:bg-pink-900/20 text-pink-600 dark:text-pink-400" },
            { name: "Marketing", count: 12, color: "bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400" }
          ].map((category, i) => (
            <div key={i} className={`flex items-center justify-between p-3 rounded-lg ${category.color}`}>
              <span className="font-medium">{category.name}</span>
              <span className="text-sm">{category.count} tasks</span>
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
          <h1 className="text-xl sm:text-2xl font-bold flex items-center gap-3">
            <FaListCheck className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
            Task Manager
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
          {taskSections.map((section, index) => (
            <div key={index} className="flex">
              <div className="mt-3 sm:mt-4 mr-2 sm:mr-3">
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