"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../_components/Tab_8";

const TabExample8 = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl">
      <h2 className="text-2xl font-bold mb-6 text-indigo-800 dark:text-indigo-200">Task Manager</h2>
      
      <Tabs defaultValue="today" className="w-full">
        <TabsList activeTab="today" setActiveTab={() => {}}>
          <TabsTrigger value="today">Today</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>
        
        <TabsContent value="today" className="bg-white dark:bg-indigo-900/40 p-6 rounded-lg shadow-sm border border-indigo-200 dark:border-indigo-800">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-indigo-900 dark:text-indigo-100 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              Today&apos;s Tasks
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-indigo-50 dark:bg-indigo-900/60 p-4 rounded-lg">
                <h4 className="font-medium text-indigo-900 dark:text-indigo-100">Priority Tasks</h4>
                <p className="text-sm text-indigo-700 dark:text-indigo-300">High importance</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-indigo-600 dark:text-indigo-400">
                  <span>Count: 3</span>
                  <span>Due: Today</span>
                </div>
              </div>
              <div className="bg-indigo-50 dark:bg-indigo-900/60 p-4 rounded-lg">
                <h4 className="font-medium text-indigo-900 dark:text-indigo-100">Regular Tasks</h4>
                <p className="text-sm text-indigo-700 dark:text-indigo-300">Normal priority</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-indigo-600 dark:text-indigo-400">
                  <span>Count: 5</span>
                  <span>Due: Today</span>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="upcoming" className="bg-white dark:bg-indigo-900/40 p-6 rounded-lg shadow-sm border border-indigo-200 dark:border-indigo-800">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-indigo-900 dark:text-indigo-100 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-1.5"></path>
                <path d="M16 2v4"></path>
                <path d="M8 2v4"></path>
                <path d="M3 10h18"></path>
              </svg>
              Upcoming Tasks
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-indigo-50 dark:bg-indigo-900/60 p-4 rounded-lg">
                <h4 className="font-medium text-indigo-900 dark:text-indigo-100">This Week</h4>
                <p className="text-sm text-indigo-700 dark:text-indigo-300">Next 7 days</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-indigo-600 dark:text-indigo-400">
                  <span>Count: 8</span>
                  <span>Due: Week</span>
                </div>
              </div>
              <div className="bg-indigo-50 dark:bg-indigo-900/60 p-4 rounded-lg">
                <h4 className="font-medium text-indigo-900 dark:text-indigo-100">This Month</h4>
                <p className="text-sm text-indigo-700 dark:text-indigo-300">Next 30 days</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-indigo-600 dark:text-indigo-400">
                  <span>Count: 15</span>
                  <span>Due: Month</span>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="completed" className="bg-white dark:bg-indigo-900/40 p-6 rounded-lg shadow-sm border border-indigo-200 dark:border-indigo-800">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-indigo-900 dark:text-indigo-100 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              Completed Tasks
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-indigo-50 dark:bg-indigo-900/60 p-4 rounded-lg">
                <h4 className="font-medium text-indigo-900 dark:text-indigo-100">Today</h4>
                <p className="text-sm text-indigo-700 dark:text-indigo-300">Finished tasks</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-indigo-600 dark:text-indigo-400">
                  <span>Count: 4</span>
                  <span>Time: 2h 30m</span>
                </div>
              </div>
              <div className="bg-indigo-50 dark:bg-indigo-900/60 p-4 rounded-lg">
                <h4 className="font-medium text-indigo-900 dark:text-indigo-100">This Week</h4>
                <p className="text-sm text-indigo-700 dark:text-indigo-300">Weekly progress</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-indigo-600 dark:text-indigo-400">
                  <span>Count: 12</span>
                  <span>Time: 8h 45m</span>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="analytics" className="bg-white dark:bg-indigo-900/40 p-6 rounded-lg shadow-sm border border-indigo-200 dark:border-indigo-800">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-indigo-900 dark:text-indigo-100 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="20" x2="18" y2="10"></line>
                <line x1="12" y1="20" x2="12" y2="4"></line>
                <line x1="6" y1="20" x2="6" y2="14"></line>
              </svg>
              Task Analytics
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-indigo-50 dark:bg-indigo-900/60 p-4 rounded-lg">
                <h4 className="font-medium text-indigo-900 dark:text-indigo-100">Productivity</h4>
                <p className="text-sm text-indigo-700 dark:text-indigo-300">Task completion</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-indigo-600 dark:text-indigo-400">
                  <span>Rate: 85%</span>
                  <span>Trend: +5%</span>
                </div>
              </div>
              <div className="bg-indigo-50 dark:bg-indigo-900/60 p-4 rounded-lg">
                <h4 className="font-medium text-indigo-900 dark:text-indigo-100">Time Management</h4>
                <p className="text-sm text-indigo-700 dark:text-indigo-300">Task duration</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-indigo-600 dark:text-indigo-400">
                  <span>Avg: 45m</span>
                  <span>Efficiency: 90%</span>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TabExample8; 