"use client"

import React, { useState } from 'react';
import Collapsible_45 from '../_components/Collapsible_45';
import { FaDumbbell, FaPersonRunning, FaHeart, FaStopwatch, FaFire } from 'react-icons/fa6';

const Example_45: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const workoutPlans = [
    {
      title: "Strength Training",
      icon: <FaDumbbell className="text-purple-500" />,
      duration: "45 mins",
      difficulty: "Intermediate",
      calories: 350,
      content: (
        <div className="space-y-4">
          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center gap-2">
                <FaStopwatch className="text-purple-500" />
                <span className="text-purple-700 dark:text-purple-300">45 mins</span>
              </div>
              <div className="flex items-center gap-2">
                <FaFire className="text-red-500" />
                <span className="text-red-700 dark:text-red-300">350 cal</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center text-sm">
              <div className="bg-white dark:bg-purple-900/30 p-2 rounded">
                <div className="font-medium text-purple-800 dark:text-purple-200">Sets</div>
                <div className="text-purple-600 dark:text-purple-300">3-4</div>
              </div>
              <div className="bg-white dark:bg-purple-900/30 p-2 rounded">
                <div className="font-medium text-purple-800 dark:text-purple-200">Reps</div>
                <div className="text-purple-600 dark:text-purple-300">8-12</div>
              </div>
              <div className="bg-white dark:bg-purple-900/30 p-2 rounded">
                <div className="font-medium text-purple-800 dark:text-purple-200">Rest</div>
                <div className="text-purple-600 dark:text-purple-300">60s</div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-2">Exercises</h4>
            <div className="space-y-3">
              <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm">
                <h5 className="font-medium mb-1">Barbell Squats</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">3 sets x 10 reps</p>
                <div className="mt-2 h-1 bg-gray-200 rounded">
                  <div className="h-full w-3/4 bg-purple-500 rounded"></div>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm">
                <h5 className="font-medium mb-1">Bench Press</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">4 sets x 8 reps</p>
                <div className="mt-2 h-1 bg-gray-200 rounded">
                  <div className="h-full w-2/3 bg-purple-500 rounded"></div>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm">
                <h5 className="font-medium mb-1">Deadlifts</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">3 sets x 8 reps</p>
                <div className="mt-2 h-1 bg-gray-200 rounded">
                  <div className="h-full w-4/5 bg-purple-500 rounded"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
            <h4 className="font-medium text-lg mb-2">Tips</h4>
            <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
              <li>Warm up properly before starting</li>
              <li>Focus on form over weight</li>
              <li>Stay hydrated throughout</li>
              <li>Breathe steadily during exercises</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "HIIT Cardio",
      icon: <FaPersonRunning className="text-red-500" />,
      duration: "30 mins",
      difficulty: "Advanced",
      calories: 400,
      content: (
        <div className="space-y-4">
          <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center gap-2">
                <FaStopwatch className="text-red-500" />
                <span className="text-red-700 dark:text-red-300">30 mins</span>
              </div>
              <div className="flex items-center gap-2">
                <FaFire className="text-red-500" />
                <span className="text-red-700 dark:text-red-300">400 cal</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center text-sm">
              <div className="bg-white dark:bg-red-900/30 p-2 rounded">
                <div className="font-medium text-red-800 dark:text-red-200">Work</div>
                <div className="text-red-600 dark:text-red-300">40s</div>
              </div>
              <div className="bg-white dark:bg-red-900/30 p-2 rounded">
                <div className="font-medium text-red-800 dark:text-red-200">Rest</div>
                <div className="text-red-600 dark:text-red-300">20s</div>
              </div>
              <div className="bg-white dark:bg-red-900/30 p-2 rounded">
                <div className="font-medium text-red-800 dark:text-red-200">Rounds</div>
                <div className="text-red-600 dark:text-red-300">4</div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-2">Circuit</h4>
            <div className="space-y-3">
              <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm">
                <h5 className="font-medium mb-1">Burpees</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">40 seconds work / 20 seconds rest</p>
                <div className="mt-2 h-1 bg-gray-200 rounded">
                  <div className="h-full w-full bg-red-500 rounded"></div>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm">
                <h5 className="font-medium mb-1">Mountain Climbers</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">40 seconds work / 20 seconds rest</p>
                <div className="mt-2 h-1 bg-gray-200 rounded">
                  <div className="h-full w-full bg-red-500 rounded"></div>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm">
                <h5 className="font-medium mb-1">Jump Squats</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">40 seconds work / 20 seconds rest</p>
                <div className="mt-2 h-1 bg-gray-200 rounded">
                  <div className="h-full w-full bg-red-500 rounded"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
            <h4 className="font-medium text-lg mb-2">Tips</h4>
            <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
              <li>Keep intensity high during work periods</li>
              <li>Use rest periods wisely</li>
              <li>Modify exercises as needed</li>
              <li>Focus on form even when tired</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Recovery & Stretching",
      icon: <FaHeart className="text-green-500" />,
      duration: "20 mins",
      difficulty: "Beginner",
      calories: 100,
      content: (
        <div className="space-y-4">
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center gap-2">
                <FaStopwatch className="text-green-500" />
                <span className="text-green-700 dark:text-green-300">20 mins</span>
              </div>
              <div className="flex items-center gap-2">
                <FaHeart className="text-green-500" />
                <span className="text-green-700 dark:text-green-300">Recovery</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center text-sm">
              <div className="bg-white dark:bg-green-900/30 p-2 rounded">
                <div className="font-medium text-green-800 dark:text-green-200">Hold</div>
                <div className="text-green-600 dark:text-green-300">30s</div>
              </div>
              <div className="bg-white dark:bg-green-900/30 p-2 rounded">
                <div className="font-medium text-green-800 dark:text-green-200">Breathe</div>
                <div className="text-green-600 dark:text-green-300">Deep</div>
              </div>
              <div className="bg-white dark:bg-green-900/30 p-2 rounded">
                <div className="font-medium text-green-800 dark:text-green-200">Focus</div>
                <div className="text-green-600 dark:text-green-300">Mind-Body</div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-2">Stretches</h4>
            <div className="space-y-3">
              <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm">
                <h5 className="font-medium mb-1">Hamstring Stretch</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">Hold for 30 seconds each side</p>
                <div className="mt-2 h-1 bg-gray-200 rounded">
                  <div className="h-full w-1/2 bg-green-500 rounded"></div>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm">
                <h5 className="font-medium mb-1">Hip Flexor Stretch</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">Hold for 30 seconds each side</p>
                <div className="mt-2 h-1 bg-gray-200 rounded">
                  <div className="h-full w-1/2 bg-green-500 rounded"></div>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm">
                <h5 className="font-medium mb-1">Child&apos;s Pose</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">Hold for 1 minute</p>
                <div className="mt-2 h-1 bg-gray-200 rounded">
                  <div className="h-full w-1/2 bg-green-500 rounded"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <h4 className="font-medium text-lg mb-2">Benefits</h4>
            <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
              <li>Improves flexibility</li>
              <li>Reduces muscle soreness</li>
              <li>Prevents injury</li>
              <li>Enhances recovery</li>
            </ul>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className={`min-h-screen p-6 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-800'}`}>
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl md:text-3xl font-medium flex items-center gap-2">
            <FaDumbbell className={darkMode ? 'text-purple-400' : 'text-purple-600'} />
            <span>Workout Planner</span>
          </h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`px-3 py-1.5 rounded-lg text-sm ${
              darkMode 
                ? 'bg-gray-800 text-purple-400 border border-gray-700' 
                : 'bg-white text-purple-700 border border-purple-200 shadow-sm'
            }`}
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>

        <div className="space-y-4">
          {workoutPlans.map((plan, index) => (
            <div key={index} className="flex">
              <div className="mt-4 mr-2">
                {plan.icon}
              </div>
              <div className="flex-1">
                <Collapsible_45
                  title={plan.title}
                  defaultOpen={index === 0}
                >
                  {plan.content}
                </Collapsible_45>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Example_45; 