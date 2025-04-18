"use client"

import React, { useState } from 'react';
import Confetti_17 from '../_components/Confetti_17';

const Example_17: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isConfettiVisible, setIsConfettiVisible] = useState(false);
  
  const initialTasks = [
    { id: 1, text: "Complete project proposal", completed: false },
    { id: 2, text: "Review team feedback", completed: false },
    { id: 3, text: "Update documentation", completed: false },
    { id: 4, text: "Schedule client meeting", completed: false },
    { id: 5, text: "Prepare presentation slides", completed: false }
  ];
  
  const [tasks, setTasks] = useState(initialTasks);
  
  const handleToggleTask = (id: number) => {
    const updatedTasks = tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    
    setTasks(updatedTasks);
    
    // Check if all tasks are completed
    const allCompleted = updatedTasks.every(task => task.completed);
    if (allCompleted) {
      setIsConfettiVisible(true);
    }
  };
  
  const handleReset = () => {
    setTasks(initialTasks);
    setIsConfettiVisible(false);
  };
  
  const completedCount = tasks.filter(task => task.completed).length;
  const totalTasks = tasks.length;
  const progressPercentage = (completedCount / totalTasks) * 100;

  return (
    <div className={`min-h-screen p-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'}`}>
      <div className="max-w-md mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Task Manager</h1>
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

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 relative overflow-hidden">
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">Project Tasks</h2>
            
            <div className="flex justify-between items-center text-sm mb-2">
              <span>Progress: {completedCount}/{totalTasks} tasks</span>
              <span>{Math.round(progressPercentage)}% complete</span>
            </div>
            
            <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mb-6">
              <div 
                className="h-full bg-blue-500 transition-all duration-500"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            
            {progressPercentage === 100 && (
              <div className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 p-3 rounded-lg font-medium mb-4">
                🎉 All tasks completed! Great job!
              </div>
            )}
          </div>
          
          <ul className="space-y-2 mb-6">
            {tasks.map(task => (
              <li 
                key={task.id}
                className={`p-3 rounded-lg flex items-center gap-3 transition-colors ${
                  task.completed 
                    ? 'bg-blue-50 dark:bg-blue-900/30 line-through text-gray-500 dark:text-gray-400' 
                    : 'bg-gray-50 dark:bg-gray-800/50'
                }`}
              >
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => handleToggleTask(task.id)}
                  className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span>{task.text}</span>
              </li>
            ))}
          </ul>
          
          {progressPercentage === 100 && (
            <button
              onClick={handleReset}
              className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Reset Tasks
            </button>
          )}

          {isConfettiVisible && (
            <div className="absolute inset-0">
              <Confetti_17 />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Example_17; 