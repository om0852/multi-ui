"use client"

import React, { useState } from 'react';
import Collapsible_14 from '../_components/Collapsible_14';
import { FaHeart, FaPersonWalking, FaBed, FaChartLine, FaCircleCheck, FaCircleXmark } from 'react-icons/fa6';

const Example_14: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const healthSections = [
    {
      title: "Health Metrics",
      icon: <FaHeart className="text-red-500" />,
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <FaHeart className="text-red-500" />
                <span className="font-medium">Heart Rate</span>
              </div>
              <div className="text-2xl font-bold text-red-500">72 BPM</div>
              <div className="text-sm text-gray-500">Resting</div>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <FaBed className="text-blue-500" />
                <span className="font-medium">Sleep</span>
              </div>
              <div className="text-2xl font-bold text-blue-500">7.5h</div>
              <div className="text-sm text-gray-500">Last Night</div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-medium mb-3">Daily Stats</h4>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Steps</span>
                  <span>8,432 / 10,000</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
                  <div className="bg-green-500 h-full" style={{ width: '84%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Water Intake</span>
                  <span>1.8L / 2.5L</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
                  <div className="bg-blue-500 h-full" style={{ width: '72%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Calories</span>
                  <span>1,850 / 2,200</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
                  <div className="bg-orange-500 h-full" style={{ width: '84%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Activity Log",
      icon: <FaPersonWalking className="text-green-500" />,
      content: (
        <div className="space-y-3">
          {[
            { activity: "Morning Run", duration: "30 mins", calories: 320, time: "7:00 AM" },
            { activity: "Yoga Session", duration: "45 mins", calories: 180, time: "12:30 PM" },
            { activity: "Evening Walk", duration: "20 mins", calories: 120, time: "6:00 PM" }
          ].map((activity, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium">{activity.activity}</h4>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span>{activity.duration}</span>
                    <span>&bull;</span>
                    <span>{activity.calories} cal</span>
                  </div>
                </div>
                <div className="text-sm text-gray-500">
                  {activity.time}
                </div>
              </div>
            </div>
          ))}
          <button className="w-full text-center text-green-500 hover:text-green-600 text-sm font-medium">
            View All Activities
          </button>
        </div>
      )
    },
    {
      title: "Wellness Goals",
      icon: <FaChartLine className="text-purple-500" />,
      content: (
        <div className="space-y-4">
          {[
            { goal: "Exercise 5 times a week", progress: 3, total: 5, status: "in-progress" },
            { goal: "Drink 2.5L water daily", progress: 1.8, total: 2.5, status: "in-progress" },
            { goal: "8 hours sleep", progress: 7.5, total: 8, status: "in-progress" },
            { goal: "Meditate daily", progress: 1, total: 1, status: "completed" }
          ].map((goal, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                {goal.status === 'completed' ? (
                  <FaCircleCheck className="text-green-500" />
                ) : (
                  <FaCircleXmark className="text-yellow-500" />
                )}
                <h4 className="font-medium">{goal.goal}</h4>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
                <div 
                  className={`h-full ${goal.status === 'completed' ? 'bg-green-500' : 'bg-yellow-500'}`}
                  style={{ width: `${(goal.progress / goal.total) * 100}%` }}
                ></div>
              </div>
              <div className="mt-2 text-sm text-gray-500">
                Progress: {goal.progress} / {goal.total}
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
            <FaHeart className={darkMode ? 'text-red-400' : 'text-red-600'} />
            Health & Wellness
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
          {healthSections.map((section, index) => (
            <div key={index} className="flex">
              <div className="mt-4 mr-2 text-lg sm:text-xl">
                {section.icon}
              </div>
              <div className="flex-1">
                <Collapsible_14
                  title={section.title}
                  defaultOpen={index === 0}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {React.Children.map(section.content.props.children, (child) => 
                      React.cloneElement(child, {
                        className: `${child.props.className} transition-colors hover:shadow-md`
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