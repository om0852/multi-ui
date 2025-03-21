"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../_components/Tab_27";

const TabExample27 = () => {
  return (
    <div className="w-full max-w-2xl mx-auto p-4 bg-lime-50 dark:bg-lime-900/20 rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-lime-800 dark:text-lime-200">Task Manager</h2>
      
      <Tabs defaultValue="inbox" className="w-full">
        <TabsList activeTab="inbox" setActiveTab={() => {}}>
          <TabsTrigger value="inbox">Inbox</TabsTrigger>
          <TabsTrigger value="today">Today</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
        </TabsList>
        
        <TabsContent value="inbox" className="bg-white dark:bg-lime-900/40 p-4 rounded-lg shadow-sm border border-lime-200 dark:border-lime-800">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <input type="text" placeholder="Add new task..." className="w-full px-3 py-2 rounded-md border border-lime-200 dark:border-lime-700 bg-white dark:bg-lime-900/60 text-lime-900 dark:text-lime-100" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 p-2 hover:bg-lime-50 dark:hover:bg-lime-900/60 rounded-lg">
                <input type="checkbox" className="rounded border-lime-300 dark:border-lime-700" />
                <span className="text-lime-900 dark:text-lime-100">Review project proposal</span>
              </div>
              <div className="flex items-center gap-2 p-2 hover:bg-lime-50 dark:hover:bg-lime-900/60 rounded-lg">
                <input type="checkbox" className="rounded border-lime-300 dark:border-lime-700" />
                <span className="text-lime-900 dark:text-lime-100">Schedule team meeting</span>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="today" className="bg-white dark:bg-lime-900/40 p-4 rounded-lg shadow-sm border border-lime-200 dark:border-lime-800">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-lime-50 dark:bg-lime-900/60 p-4 rounded-lg">
                <h3 className="font-medium text-lime-900 dark:text-lime-100">Morning</h3>
                <div className="mt-2 space-y-2">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="rounded border-lime-300 dark:border-lime-700" />
                    <span className="text-sm text-lime-900 dark:text-lime-100">9:00 AM - Team Standup</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="rounded border-lime-300 dark:border-lime-700" />
                    <span className="text-sm text-lime-900 dark:text-lime-100">10:30 AM - Code Review</span>
                  </div>
                </div>
              </div>
              <div className="bg-lime-50 dark:bg-lime-900/60 p-4 rounded-lg">
                <h3 className="font-medium text-lime-900 dark:text-lime-100">Afternoon</h3>
                <div className="mt-2 space-y-2">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="rounded border-lime-300 dark:border-lime-700" />
                    <span className="text-sm text-lime-900 dark:text-lime-100">2:00 PM - Client Meeting</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="rounded border-lime-300 dark:border-lime-700" />
                    <span className="text-sm text-lime-900 dark:text-lime-100">4:00 PM - Documentation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="upcoming" className="bg-white dark:bg-lime-900/40 p-4 rounded-lg shadow-sm border border-lime-200 dark:border-lime-800">
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="p-3 bg-lime-50 dark:bg-lime-900/60 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-lime-900 dark:text-lime-100">Project Deadline</h3>
                    <p className="text-sm text-lime-600 dark:text-lime-400">Due in 3 days</p>
                  </div>
                  <span className="text-sm text-lime-600 dark:text-lime-400">Friday</span>
                </div>
              </div>
              <div className="p-3 bg-lime-50 dark:bg-lime-900/60 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-lime-900 dark:text-lime-100">Team Workshop</h3>
                    <p className="text-sm text-lime-600 dark:text-lime-400">Next week</p>
                  </div>
                  <span className="text-sm text-lime-600 dark:text-lime-400">Monday</span>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TabExample27; 