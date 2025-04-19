"use client"

import React, { useState } from 'react';
import Confetti_14 from '../tsx/Confetti_14';

const Example_14: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isConfettiVisible, setIsConfettiVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsConfettiVisible(true);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className={`min-h-screen p-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'}`}>
      <div className="max-w-md mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Newsletter Signup</h1>
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
          {!isSubscribed ? (
            <div>
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">Join Our Newsletter</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Get the latest updates, news, and special offers directly to your inbox.
                </p>
              </div>
              
              <form onSubmit={handleSubscribe} className="space-y-4">
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-left text-sm font-medium mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-violet-500 text-white rounded-lg font-semibold transition-all ${
                    isLoading 
                      ? 'opacity-70 cursor-not-allowed' 
                      : 'hover:from-purple-600 hover:to-violet-600'
                  }`}
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    'Subscribe Now'
                  )}
                </button>
              </form>
            </div>
          ) : (
            <div className="py-8">
              <div className="inline-block p-3 bg-green-100 dark:bg-green-900 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-2">Successfully Subscribed!</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Thank you for subscribing to our newsletter. We&apos;ve sent a confirmation email to <span className="font-semibold">{email}</span>.
              </p>
            </div>
          )}

          {isConfettiVisible && (
            <div className="absolute inset-0">
              <Confetti_14 />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Example_14; 