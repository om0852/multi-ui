"use client"

import React, { useState } from 'react';
import Confetti_16 from '../tsx/Confetti_16';

const Example_16: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isConfettiVisible, setIsConfettiVisible] = useState(false);
  const [followers, setFollowers] = useState(9850);
  const [hasReached10k, setHasReached10k] = useState(false);

  const handleAddFollowers = () => {
    const newFollowers = followers + 50;
    setFollowers(newFollowers);
    
    if (newFollowers >= 10000 && !hasReached10k) {
      setHasReached10k(true);
      setIsConfettiVisible(true);
    }
  };

  return (
    <div className={`min-h-screen p-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'}`}>
      <div className="max-w-md mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Social Milestone</h1>
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
            <div className="inline-block p-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            
            <h2 className="text-2xl font-bold mb-2">Follower Count</h2>
            <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 my-4 tabular-nums">
              {followers.toLocaleString()}
            </div>
            
            {hasReached10k ? (
              <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white p-3 rounded-lg font-bold animate-pulse">
                🎉 Congratulations on 10K Followers! 🎉
              </div>
            ) : (
              <p className="text-gray-600 dark:text-gray-400">
                You&apos;re just {(10000 - followers).toLocaleString()} followers away from 10K!
              </p>
            )}
          </div>
          
          <button
            onClick={handleAddFollowers}
            className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg font-semibold hover:from-pink-600 hover:to-purple-600 transition-all"
          >
            Gain 50 Followers
          </button>

          {isConfettiVisible && (
            <div className="absolute inset-0">
              <Confetti_16 />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Example_16; 