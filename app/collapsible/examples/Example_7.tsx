"use client"

import React, { useState } from 'react';
import Collapsible_7 from '../_components/Collapsible_7';
import { FaPersonRunning, FaHeart, FaStopwatch, FaChartLine, FaCircleCheck, FaCircleXmark, FaMedal } from 'react-icons/fa6';

const Example_7: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const fitnessSections = [
    {
      title: "Activity Summary",
      icon: <FaPersonRunning className="text-blue-500" />,
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-blue-500">8,432</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Steps</div>
            </div>
            <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-red-500">2.5</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Miles</div>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-green-500">284</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Calories</div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Heart Rate</h4>
            <div className="flex items-center gap-2">
              <FaHeart className="text-red-500" />
              <span className="text-2xl font-bold">72</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">BPM</span>
            </div>
            <div className="mt-2 w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full bg-red-500" style={{ width: '65%' }}></div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Workout Log",
      icon: <FaStopwatch className="text-purple-500" />,
      content: (
        <div className="space-y-3">
          {[
            { type: "Morning Run", duration: "30 mins", distance: "2.5 miles", completed: true },
            { type: "Strength Training", duration: "45 mins", distance: null, completed: true },
            { type: "Evening Yoga", duration: "20 mins", distance: null, completed: false }
          ].map((workout, i) => (
            <div key={i} className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg">
              <div className="flex items-center gap-3">
                {workout.completed ? 
                  <FaCircleCheck className="text-green-500" /> : 
                  <FaCircleXmark className="text-red-500" />
                }
                <div>
                  <h4 className="font-medium">{workout.type}</h4>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <span>{workout.duration}</span>
                    {workout.distance && (
                      <>
                        <span>&bull;</span>
                        <span>{workout.distance}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )
    },
    {
      title: "Goals & Progress",
      icon: <FaChartLine className="text-green-500" />,
      content: (
        <div className="space-y-4">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-medium">Daily Steps</h4>
              <div className="flex items-center gap-1 text-yellow-500">
                <FaMedal />
                <span className="text-sm">84%</span>
              </div>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
              <div className="bg-yellow-500 h-full" style={{ width: '84%' }}></div>
            </div>
            <div className="flex justify-between mt-1 text-sm text-gray-500 dark:text-gray-400">
              <span>8,432 / 10,000 steps</span>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-medium">Weekly Workouts</h4>
              <div className="flex items-center gap-1 text-purple-500">
                <FaMedal />
                <span className="text-sm">60%</span>
              </div>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
              <div className="bg-purple-500 h-full" style={{ width: '60%' }}></div>
            </div>
            <div className="flex justify-between mt-1 text-sm text-gray-500 dark:text-gray-400">
              <span>3 / 5 workouts</span>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-medium">Monthly Distance</h4>
              <div className="flex items-center gap-1 text-blue-500">
                <FaMedal />
                <span className="text-sm">45%</span>
              </div>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
              <div className="bg-blue-500 h-full" style={{ width: '45%' }}></div>
            </div>
            <div className="flex justify-between mt-1 text-sm text-gray-500 dark:text-gray-400">
              <span>22.5 / 50 miles</span>
            </div>
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
            <FaPersonRunning className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
            Fitness Tracker
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
          {fitnessSections.map((section, index) => (
            <div key={index} className="flex">
              <div className="mt-4 mr-2">
                {section.icon}
              </div>
              <div className="flex-1">
                <Collapsible_7
                  title={section.title}
                  defaultOpen={index === 0}
                >
                  {section.content}
                </Collapsible_7>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Example_7; 