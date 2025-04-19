"use client"

import React, { useState } from 'react';
import Collapsible_14 from '../_components/Collapsible_14';
import { FaHeart, FaPersonWalking, FaBed, FaChartLine, FaCircleCheck, FaCircleXmark } from 'react-icons/fa6';

const Example_14: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const healthSections = [
    {
      title: "Health Metrics",
      icon: <FaHeart className="text-red-500 dark:text-red-400" />,
      content: (
        <div className="space-y-3 md:space-y-4">
          <div className="grid grid-cols-2 gap-2 md:gap-4">
            <div className="bg-red-50 dark:bg-red-900/30 p-3 md:p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-1 md:gap-2 mb-1 md:mb-2">
                <FaHeart className="text-red-500 dark:text-red-400 text-xs md:text-base" />
                <span className="text-sm md:text-base font-medium text-gray-800 dark:text-gray-100">Heart Rate</span>
              </div>
              <div className="text-xl md:text-2xl font-bold text-red-600 dark:text-red-400">72 BPM</div>
              <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Resting</div>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/30 p-3 md:p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-1 md:gap-2 mb-1 md:mb-2">
                <FaBed className="text-blue-500 dark:text-blue-400 text-xs md:text-base" />
                <span className="text-sm md:text-base font-medium text-gray-800 dark:text-gray-100">Sleep</span>
              </div>
              <div className="text-xl md:text-2xl font-bold text-blue-600 dark:text-blue-400">7.5h</div>
              <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Last Night</div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800/80 p-3 md:p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h4 className="text-sm md:text-base font-medium mb-2 md:mb-3 text-gray-800 dark:text-gray-100">Daily Stats</h4>
            <div className="space-y-2 md:space-y-3">
              <div>
                <div className="flex justify-between text-xs md:text-sm mb-1 text-gray-700 dark:text-gray-300">
                  <span>Steps</span>
                  <span>8,432 / 10,000</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 h-1.5 md:h-2 rounded-full overflow-hidden">
                  <div className="bg-green-500 dark:bg-green-400 h-full" style={{ width: '84%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs md:text-sm mb-1 text-gray-700 dark:text-gray-300">
                  <span>Water Intake</span>
                  <span>1.8L / 2.5L</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 h-1.5 md:h-2 rounded-full overflow-hidden">
                  <div className="bg-blue-500 dark:bg-blue-400 h-full" style={{ width: '72%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs md:text-sm mb-1 text-gray-700 dark:text-gray-300">
                  <span>Calories</span>
                  <span>1,850 / 2,200</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 h-1.5 md:h-2 rounded-full overflow-hidden">
                  <div className="bg-orange-500 dark:bg-orange-400 h-full" style={{ width: '84%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Activity Log",
      icon: <FaPersonWalking className="text-green-500 dark:text-green-400" />,
      content: (
        <div className="space-y-2 md:space-y-3">
          {[
            { activity: "Morning Run", duration: "30 mins", calories: 320, time: "7:00 AM" },
            { activity: "Yoga Session", duration: "45 mins", calories: 180, time: "12:30 PM" },
            { activity: "Evening Walk", duration: "20 mins", calories: 120, time: "6:00 PM" }
          ].map((activity, i) => (
            <div key={i} className="bg-white dark:bg-gray-800/80 p-3 md:p-4 rounded-lg shadow-sm hover:shadow-md transition-all">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-sm md:text-base font-medium text-gray-800 dark:text-gray-100">{activity.activity}</h4>
                  <div className="flex items-center gap-1 md:gap-2 text-xs md:text-sm text-gray-600 dark:text-gray-400">
                    <span>{activity.duration}</span>
                    <span>&bull;</span>
                    <span>{activity.calories} cal</span>
                  </div>
                </div>
                <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                  {activity.time}
                </div>
              </div>
            </div>
          ))}
          <button className="w-full text-center text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 text-xs md:text-sm font-medium py-1.5 md:py-2.5 bg-green-50 dark:bg-green-900/20 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors">
            View All Activities
          </button>
        </div>
      )
    },
    {
      title: "Wellness Goals",
      icon: <FaChartLine className="text-purple-500 dark:text-purple-400" />,
      content: (
        <div className="space-y-2 md:space-y-4">
          {[
            { goal: "Exercise 5 times a week", progress: 3, total: 5, status: "in-progress" },
            { goal: "Drink 2.5L water daily", progress: 1.8, total: 2.5, status: "in-progress" },
            { goal: "8 hours sleep", progress: 7.5, total: 8, status: "in-progress" },
            { goal: "Meditate daily", progress: 1, total: 1, status: "completed" }
          ].map((goal, i) => (
            <div key={i} className="bg-white dark:bg-gray-800/80 p-3 md:p-4 rounded-lg shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center gap-1 md:gap-2 mb-1 md:mb-2">
                {goal.status === 'completed' ? (
                  <FaCircleCheck className="text-green-500 dark:text-green-400 text-xs md:text-base" />
                ) : (
                  <FaCircleXmark className="text-yellow-500 dark:text-yellow-400 text-xs md:text-base" />
                )}
                <h4 className="text-sm md:text-base font-medium text-gray-800 dark:text-gray-100">{goal.goal}</h4>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 h-1.5 md:h-2 rounded-full overflow-hidden">
                <div 
                  className={`h-full ${goal.status === 'completed' ? 'bg-green-500 dark:bg-green-400' : 'bg-yellow-500 dark:bg-yellow-400'}`}
                  style={{ width: `${(goal.progress / goal.total) * 100}%` }}
                ></div>
              </div>
              <div className="mt-1 md:mt-2 text-xs md:text-sm text-gray-600 dark:text-gray-400">
                Progress: {goal.progress} / {goal.total}
              </div>
            </div>
          ))}
        </div>
      )
    }
  ];

  return (
    <div className={`min-h-screen p-3 md:p-8 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-800'} transition-colors duration-300`}>
      <div className="max-w-full md:max-w-3xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-4 mb-4 md:mb-8">
          <h1 className="text-lg md:text-2xl lg:text-3xl font-bold flex items-center gap-2 md:gap-3">
            <FaHeart className={`${darkMode ? 'text-red-400' : 'text-red-600'} text-base md:text-xl`} />
            Health & Wellness
          </h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`px-3 py-1.5 md:px-4 md:py-2.5 text-xs md:text-sm rounded-lg ${
              darkMode 
                ? 'bg-gray-800 text-gray-100 border border-gray-700 hover:bg-gray-700' 
                : 'bg-white text-gray-800 border border-gray-200 hover:bg-gray-50'
            } shadow-sm transition-colors`}
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>

        <div className="space-y-3 md:space-y-4">
          {healthSections.map((section, index) => (
            <div key={index} className="flex">
              <div className="mt-4 mr-2 text-base md:text-xl">
                {section.icon}
              </div>
              <div className="flex-1">
                <Collapsible_14
                  title={section.title}
                  defaultOpen={index === 0}
                >
                  <div className={`${
                    index === 0 
                      ? 'grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4' 
                      : 'space-y-2 md:space-y-4'
                  }`}>
                    {React.Children.map(section.content.props.children, (child) => 
                      React.cloneElement(child, {
                        className: `${child.props.className}`
                      })
                    )}
                  </div>
                </Collapsible_14>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Example_14; 