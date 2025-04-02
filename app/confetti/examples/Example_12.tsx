"use client"

import React, { useState } from 'react';
import Confetti_12 from '../tsx/Confetti_12';

const Example_12: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isConfettiVisible, setIsConfettiVisible] = useState(false);
  const [donation, setDonation] = useState(0);
  
  const goalAmount = 10000;
  const currentAmount = 8750 + donation;
  const progressPercentage = Math.min(100, (currentAmount / goalAmount) * 100);

  const handleDonate = () => {
    setDonation(donation + 1500);
    if (currentAmount + 1500 >= goalAmount) {
      setIsConfettiVisible(true);
    }
  };

  return (
    <div className={`min-h-screen p-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'}`}>
      <div className="max-w-md mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Fundraising Goal</h1>
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

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center relative overflow-hidden">
          <div className="mb-6">
            <h2 className="text-3xl font-bold mb-2">Community Center</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">Help us reach our fundraising goal!</p>
            
            <div className="flex justify-between items-center text-sm mb-2">
              <span>Current: ${currentAmount.toLocaleString()}</span>
              <span>Goal: ${goalAmount.toLocaleString()}</span>
            </div>
            
            <div className="h-6 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mb-4">
              <div 
                className="h-full bg-green-500 transition-all duration-1000 flex items-center justify-end pr-2 text-xs text-white font-bold"
                style={{ width: `${progressPercentage}%` }}
              >
                {progressPercentage >= 10 && `${Math.round(progressPercentage)}%`}
              </div>
            </div>
            
            {currentAmount >= goalAmount ? (
              <div className="text-green-600 dark:text-green-400 font-bold text-lg">
                Goal reached! Thank you to all donors! 🎉
              </div>
            ) : (
              <div className="text-gray-600 dark:text-gray-400">
                ${(goalAmount - currentAmount).toLocaleString()} still needed to reach our goal
              </div>
            )}
          </div>
          
          <button
            onClick={handleDonate}
            disabled={currentAmount >= goalAmount}
            className={`px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-semibold transition-all ${
              currentAmount >= goalAmount 
                ? 'opacity-50 cursor-not-allowed' 
                : 'hover:from-green-600 hover:to-emerald-700'
            }`}
          >
            Donate $1,500
          </button>

          {isConfettiVisible && (
            <div className="absolute inset-0">
              <Confetti_12 />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Example_12; 