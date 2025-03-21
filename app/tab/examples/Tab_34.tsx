"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../_components/Tab_34";

const TabExample34 = () => {
  return (
    <div className="w-full max-w-2xl mx-auto p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-amber-800 dark:text-amber-200">Task Board</h2>
      
      <Tabs defaultValue="todo" className="w-full">
        <TabsList activeTab="todo" setActiveTab={() => {}}>
          <TabsTrigger value="todo">To Do</TabsTrigger>
          <TabsTrigger value="inprogress">In Progress</TabsTrigger>
          <TabsTrigger value="done">Done</TabsTrigger>
        </TabsList>
        
        <TabsContent value="todo" className="bg-white dark:bg-amber-900/40 p-4 rounded-lg shadow-sm border border-amber-200 dark:border-amber-800">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <input type="text" placeholder="Add new task..." className="w-full px-3 py-2 rounded-md border border-amber-200 dark:border-amber-700 bg-white dark:bg-amber-900/60 text-amber-900 dark:text-amber-100" />
            </div>
            <div className="space-y-2">
              <div className="p-3 bg-amber-50 dark:bg-amber-900/60 rounded-lg">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-amber-900 dark:text-amber-100">Design Homepage</h3>
                  <span className="text-sm text-amber-600 dark:text-amber-400">High</span>
                </div>
                <p className="text-sm text-amber-600 dark:text-amber-400 mt-1">Create wireframes and mockups</p>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-xs text-amber-500">Due: Tomorrow</span>
                  <div className="flex items-center gap-2">
                    <button className="text-amber-600 dark:text-amber-400">✏️</button>
                    <button className="text-amber-600 dark:text-amber-400">🗑️</button>
                  </div>
                </div>
              </div>
              <div className="p-3 bg-amber-50 dark:bg-amber-900/60 rounded-lg">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-amber-900 dark:text-amber-100">Write Documentation</h3>
                  <span className="text-sm text-amber-600 dark:text-amber-400">Medium</span>
                </div>
                <p className="text-sm text-amber-600 dark:text-amber-400 mt-1">Update API documentation</p>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-xs text-amber-500">Due: Next Week</span>
                  <div className="flex items-center gap-2">
                    <button className="text-amber-600 dark:text-amber-400">✏️</button>
                    <button className="text-amber-600 dark:text-amber-400">🗑️</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="inprogress" className="bg-white dark:bg-amber-900/40 p-4 rounded-lg shadow-sm border border-amber-200 dark:border-amber-800">
          <div className="space-y-2">
            <div className="p-3 bg-amber-50 dark:bg-amber-900/60 rounded-lg">
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-amber-900 dark:text-amber-100">Implement Features</h3>
                <span className="text-sm text-amber-600 dark:text-amber-400">High</span>
              </div>
              <p className="text-sm text-amber-600 dark:text-amber-400 mt-1">Working on user authentication</p>
              <div className="mt-2">
                <div className="w-full bg-amber-200 dark:bg-amber-700 rounded-full h-2">
                  <div className="bg-amber-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="done" className="bg-white dark:bg-amber-900/40 p-4 rounded-lg shadow-sm border border-amber-200 dark:border-amber-800">
          <div className="space-y-2">
            <div className="p-3 bg-amber-50 dark:bg-amber-900/60 rounded-lg opacity-75">
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-amber-900 dark:text-amber-100 line-through">Setup Project</h3>
                <span className="text-sm text-green-600">✓</span>
              </div>
              <p className="text-sm text-amber-600 dark:text-amber-400 mt-1">Initial project setup and configuration</p>
              <div className="mt-2 text-xs text-amber-500">Completed: Yesterday</div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TabExample34; 