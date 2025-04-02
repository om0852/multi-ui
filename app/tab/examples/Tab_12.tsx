"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../tsx/Tab_12";

const TabExample12 = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-teal-50 dark:bg-teal-900/20 rounded-xl">
      <h2 className="text-2xl font-bold mb-6 text-teal-800 dark:text-teal-200">Task Manager</h2>
      
      <Tabs defaultValue="today" className="w-full">
        <TabsList activeTab="today" setActiveTab={() => {}}>
          <TabsTrigger value="today">Today</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="archived">Archived</TabsTrigger>
        </TabsList>
        
        <TabsContent value="today" className="bg-white dark:bg-teal-900/40 p-6 rounded-lg shadow-sm border border-teal-200 dark:border-teal-800">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-teal-900 dark:text-teal-100 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              Today&apos;s Tasks
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-teal-50 dark:bg-teal-900/60 p-4 rounded-lg">
                <h4 className="font-medium text-teal-900 dark:text-teal-100">Project Meeting</h4>
                <p className="text-sm text-teal-700 dark:text-teal-300">Team sync</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-teal-600 dark:text-teal-400">
                  <span>10:00 AM</span>
                  <span>1 hour</span>
                </div>
              </div>
              <div className="bg-teal-50 dark:bg-teal-900/60 p-4 rounded-lg">
                <h4 className="font-medium text-teal-900 dark:text-teal-100">Code Review</h4>
                <p className="text-sm text-teal-700 dark:text-teal-300">Pull requests</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-teal-600 dark:text-teal-400">
                  <span>2:00 PM</span>
                  <span>2 hours</span>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="upcoming" className="bg-white dark:bg-teal-900/40 p-6 rounded-lg shadow-sm border border-teal-200 dark:border-teal-800">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-teal-900 dark:text-teal-100 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              Upcoming Tasks
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-teal-50 dark:bg-teal-900/60 p-4 rounded-lg">
                <h4 className="font-medium text-teal-900 dark:text-teal-100">Client Presentation</h4>
                <p className="text-sm text-teal-700 dark:text-teal-300">Project review</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-teal-600 dark:text-teal-400">
                  <span>Tomorrow</span>
                  <span>11:00 AM</span>
                </div>
              </div>
              <div className="bg-teal-50 dark:bg-teal-900/60 p-4 rounded-lg">
                <h4 className="font-medium text-teal-900 dark:text-teal-100">Team Workshop</h4>
                <p className="text-sm text-teal-700 dark:text-teal-300">Training session</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-teal-600 dark:text-teal-400">
                  <span>Next Week</span>
                  <span>3:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="completed" className="bg-white dark:bg-teal-900/40 p-6 rounded-lg shadow-sm border border-teal-200 dark:border-teal-800">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-teal-900 dark:text-teal-100 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              Completed Tasks
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-teal-50 dark:bg-teal-900/60 p-4 rounded-lg">
                <h4 className="font-medium text-teal-900 dark:text-teal-100">Documentation</h4>
                <p className="text-sm text-teal-700 dark:text-teal-300">API docs</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-teal-600 dark:text-teal-400">
                  <span>Completed</span>
                  <span>2 hours ago</span>
                </div>
              </div>
              <div className="bg-teal-50 dark:bg-teal-900/60 p-4 rounded-lg">
                <h4 className="font-medium text-teal-900 dark:text-teal-100">Bug Fix</h4>
                <p className="text-sm text-teal-700 dark:text-teal-300">Critical issue</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-teal-600 dark:text-teal-400">
                  <span>Completed</span>
                  <span>4 hours ago</span>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="archived" className="bg-white dark:bg-teal-900/40 p-6 rounded-lg shadow-sm border border-teal-200 dark:border-teal-800">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-teal-900 dark:text-teal-100 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="21 8 21 21 3 21 3 8"></polyline>
                <rect x="1" y="3" width="22" height="5"></rect>
                <line x1="10" y1="12" x2="14" y2="12"></line>
              </svg>
              Archived Tasks
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-teal-50 dark:bg-teal-900/60 p-4 rounded-lg">
                <h4 className="font-medium text-teal-900 dark:text-teal-100">Old Project</h4>
                <p className="text-sm text-teal-700 dark:text-teal-300">Legacy system</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-teal-600 dark:text-teal-400">
                  <span>Archived</span>
                  <span>2 months ago</span>
                </div>
              </div>
              <div className="bg-teal-50 dark:bg-teal-900/60 p-4 rounded-lg">
                <h4 className="font-medium text-teal-900 dark:text-teal-100">Deprecated Feature</h4>
                <p className="text-sm text-teal-700 dark:text-teal-300">Removed</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-teal-600 dark:text-teal-400">
                  <span>Archived</span>
                  <span>3 months ago</span>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TabExample12; 