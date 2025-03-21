"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../_components/Tab_28";

const TabExample28 = () => {
  return (
    <div className="w-full max-w-2xl mx-auto p-4 bg-cyan-50 dark:bg-cyan-900/20 rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-cyan-800 dark:text-cyan-200">Project Manager</h2>
      
      <Tabs defaultValue="overview" className="w-full">
        <TabsList activeTab="overview" setActiveTab={() => {}}>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="tasks">Tasks</TabsTrigger>
          <TabsTrigger value="team">Team</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="bg-white dark:bg-cyan-900/40 p-4 rounded-lg shadow-sm border border-cyan-200 dark:border-cyan-800">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-cyan-50 dark:bg-cyan-900/60 p-4 rounded-lg">
                <h3 className="font-medium text-cyan-900 dark:text-cyan-100">Project Progress</h3>
                <div className="mt-2">
                  <div className="h-2 bg-cyan-100 dark:bg-cyan-800 rounded-full">
                    <div className="w-3/4 h-full bg-cyan-500 dark:bg-cyan-400 rounded-full"></div>
                  </div>
                  <p className="text-sm text-cyan-600 dark:text-cyan-400 mt-1">75% Complete</p>
                </div>
              </div>
              <div className="bg-cyan-50 dark:bg-cyan-900/60 p-4 rounded-lg">
                <h3 className="font-medium text-cyan-900 dark:text-cyan-100">Time Remaining</h3>
                <p className="text-2xl font-bold text-cyan-600 dark:text-cyan-400">15 days</p>
                <p className="text-sm text-cyan-500 dark:text-cyan-400">Until deadline</p>
              </div>
            </div>
            <div className="bg-cyan-50 dark:bg-cyan-900/60 p-4 rounded-lg">
              <h3 className="font-medium text-cyan-900 dark:text-cyan-100">Recent Updates</h3>
              <div className="mt-2 space-y-2">
                <div className="flex items-center gap-2 text-sm text-cyan-600 dark:text-cyan-400">
                  <span>•</span>
                  <span>Design phase completed</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-cyan-600 dark:text-cyan-400">
                  <span>•</span>
                  <span>New team member added</span>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="tasks" className="bg-white dark:bg-cyan-900/40 p-4 rounded-lg shadow-sm border border-cyan-200 dark:border-cyan-800">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <input type="text" placeholder="Add new task..." className="w-full px-3 py-2 rounded-md border border-cyan-200 dark:border-cyan-700 bg-white dark:bg-cyan-900/60 text-cyan-900 dark:text-cyan-100" />
            </div>
            <div className="space-y-2">
              <div className="p-3 bg-cyan-50 dark:bg-cyan-900/60 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="rounded border-cyan-300 dark:border-cyan-700" />
                    <span className="text-cyan-900 dark:text-cyan-100">Implement user authentication</span>
                  </div>
                  <span className="text-sm text-cyan-600 dark:text-cyan-400">In Progress</span>
                </div>
                <div className="mt-2 flex items-center gap-2 text-sm text-cyan-600 dark:text-cyan-400">
                  <span>Assigned to: John</span>
                  <span>•</span>
                  <span>Due: Tomorrow</span>
                </div>
              </div>
              <div className="p-3 bg-cyan-50 dark:bg-cyan-900/60 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="rounded border-cyan-300 dark:border-cyan-700" />
                    <span className="text-cyan-900 dark:text-cyan-100">Design dashboard layout</span>
                  </div>
                  <span className="text-sm text-cyan-600 dark:text-cyan-400">Completed</span>
                </div>
                <div className="mt-2 flex items-center gap-2 text-sm text-cyan-600 dark:text-cyan-400">
                  <span>Assigned to: Alice</span>
                  <span>•</span>
                  <span>Due: Yesterday</span>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="team" className="bg-white dark:bg-cyan-900/40 p-4 rounded-lg shadow-sm border border-cyan-200 dark:border-cyan-800">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-cyan-50 dark:bg-cyan-900/60 p-4 rounded-lg">
                <h3 className="font-medium text-cyan-900 dark:text-cyan-100">Team Members</h3>
                <div className="mt-2 space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-cyan-100 dark:bg-cyan-800 flex items-center justify-center">
                      <span className="text-cyan-600 dark:text-cyan-300">JD</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-cyan-900 dark:text-cyan-100">John Doe</p>
                      <p className="text-xs text-cyan-600 dark:text-cyan-400">Developer</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-cyan-100 dark:bg-cyan-800 flex items-center justify-center">
                      <span className="text-cyan-600 dark:text-cyan-300">AS</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-cyan-900 dark:text-cyan-100">Alice Smith</p>
                      <p className="text-xs text-cyan-600 dark:text-cyan-400">Designer</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-cyan-50 dark:bg-cyan-900/60 p-4 rounded-lg">
                <h3 className="font-medium text-cyan-900 dark:text-cyan-100">Team Stats</h3>
                <div className="mt-2 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-cyan-600 dark:text-cyan-400">Total Tasks</span>
                    <span className="text-sm font-medium text-cyan-900 dark:text-cyan-100">24</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-cyan-600 dark:text-cyan-400">Completed</span>
                    <span className="text-sm font-medium text-cyan-900 dark:text-cyan-100">18</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TabExample28; 