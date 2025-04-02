"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../tsx/Tab_7";

const TabExample7 = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-cyan-50 dark:bg-cyan-900/20 rounded-xl">
      <h2 className="text-2xl font-bold mb-6 text-cyan-800 dark:text-cyan-200">Weather App</h2>
      
      <Tabs defaultValue="current" className="w-full">
        <TabsList activeTab="current" setActiveTab={() => {}}>
          <TabsTrigger value="current">Current</TabsTrigger>
          <TabsTrigger value="hourly">Hourly</TabsTrigger>
          <TabsTrigger value="weekly">Weekly</TabsTrigger>
          <TabsTrigger value="alerts">Alerts</TabsTrigger>
        </TabsList>
        
        <TabsContent value="current" className="bg-white dark:bg-cyan-900/40 p-6 rounded-lg shadow-sm border border-cyan-200 dark:border-cyan-800">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-cyan-900 dark:text-cyan-100 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
              Current Weather
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-cyan-50 dark:bg-cyan-900/60 p-4 rounded-lg">
                <h4 className="font-medium text-cyan-900 dark:text-cyan-100">Temperature</h4>
                <p className="text-sm text-cyan-700 dark:text-cyan-300">Current conditions</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-cyan-600 dark:text-cyan-400">
                  <span>Now: 22°C</span>
                  <span>Feels: 24°C</span>
                </div>
              </div>
              <div className="bg-cyan-50 dark:bg-cyan-900/60 p-4 rounded-lg">
                <h4 className="font-medium text-cyan-900 dark:text-cyan-100">Humidity</h4>
                <p className="text-sm text-cyan-700 dark:text-cyan-300">Air quality</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-cyan-600 dark:text-cyan-400">
                  <span>Level: 65%</span>
                  <span>Wind: 12km/h</span>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="hourly" className="bg-white dark:bg-cyan-900/40 p-6 rounded-lg shadow-sm border border-cyan-200 dark:border-cyan-800">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-cyan-900 dark:text-cyan-100 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              Hourly Forecast
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-cyan-50 dark:bg-cyan-900/60 p-4 rounded-lg">
                <h4 className="font-medium text-cyan-900 dark:text-cyan-100">Next 6 Hours</h4>
                <p className="text-sm text-cyan-700 dark:text-cyan-300">Temperature trend</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-cyan-600 dark:text-cyan-400">
                  <span>Peak: 25°C</span>
                  <span>Low: 20°C</span>
                </div>
              </div>
              <div className="bg-cyan-50 dark:bg-cyan-900/60 p-4 rounded-lg">
                <h4 className="font-medium text-cyan-900 dark:text-cyan-100">Precipitation</h4>
                <p className="text-sm text-cyan-700 dark:text-cyan-300">Rain forecast</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-cyan-600 dark:text-cyan-400">
                  <span>Chance: 30%</span>
                  <span>Amount: 2mm</span>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="weekly" className="bg-white dark:bg-cyan-900/40 p-6 rounded-lg shadow-sm border border-cyan-200 dark:border-cyan-800">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-cyan-900 dark:text-cyan-100 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              Weekly Forecast
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-cyan-50 dark:bg-cyan-900/60 p-4 rounded-lg">
                <h4 className="font-medium text-cyan-900 dark:text-cyan-100">Temperature</h4>
                <p className="text-sm text-cyan-700 dark:text-cyan-300">7-day outlook</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-cyan-600 dark:text-cyan-400">
                  <span>High: 28°C</span>
                  <span>Low: 18°C</span>
                </div>
              </div>
              <div className="bg-cyan-50 dark:bg-cyan-900/60 p-4 rounded-lg">
                <h4 className="font-medium text-cyan-900 dark:text-cyan-100">Conditions</h4>
                <p className="text-sm text-cyan-700 dark:text-cyan-300">Weather pattern</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-cyan-600 dark:text-cyan-400">
                  <span>Sunny: 5 days</span>
                  <span>Rain: 2 days</span>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="alerts" className="bg-white dark:bg-cyan-900/40 p-6 rounded-lg shadow-sm border border-cyan-200 dark:border-cyan-800">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-cyan-900 dark:text-cyan-100 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                <line x1="12" y1="9" x2="12" y2="13"></line>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
              </svg>
              Weather Alerts
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-cyan-50 dark:bg-cyan-900/60 p-4 rounded-lg">
                <h4 className="font-medium text-cyan-900 dark:text-cyan-100">Active Alerts</h4>
                <p className="text-sm text-cyan-700 dark:text-cyan-300">Current warnings</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-cyan-600 dark:text-cyan-400">
                  <span>Count: 2</span>
                  <span>Severity: Medium</span>
                </div>
              </div>
              <div className="bg-cyan-50 dark:bg-cyan-900/60 p-4 rounded-lg">
                <h4 className="font-medium text-cyan-900 dark:text-cyan-100">Notifications</h4>
                <p className="text-sm text-cyan-700 dark:text-cyan-300">Alert settings</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-cyan-600 dark:text-cyan-400">
                  <span>Push: Enabled</span>
                  <span>Email: Enabled</span>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TabExample7; 