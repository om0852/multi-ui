"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../_components/Tab_47";

const TabExample47 = () => {
  return (
    <div className="w-full max-w-2xl mx-auto p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-blue-800 dark:text-blue-200">Project Management</h2>
      
      <Tabs defaultValue="overview" className="w-full">
        <TabsList activeTab="overview" setActiveTab={() => {}}>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="tasks">Tasks</TabsTrigger>
          <TabsTrigger value="team">Team</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="bg-white dark:bg-blue-900/40 p-4 rounded-lg shadow-sm border border-blue-200 dark:border-blue-800">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100">Website Redesign</h3>
                <p className="text-blue-600 dark:text-blue-400">Due in 2 weeks</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="px-2 py-1 text-sm rounded-full bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300">
                  On Track
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/60 rounded-lg">
                <h4 className="font-medium text-blue-900 dark:text-blue-100">Progress</h4>
                <div className="mt-2 h-2 bg-blue-200 dark:bg-blue-700 rounded-full">
                  <div className="h-full w-3/4 bg-blue-500 rounded-full"></div>
                </div>
                <p className="mt-2 text-sm text-blue-600 dark:text-blue-400">75% Complete</p>
              </div>
              <div className="p-4 bg-blue-50 dark:bg-blue-900/60 rounded-lg">
                <h4 className="font-medium text-blue-900 dark:text-blue-100">Budget</h4>
                <p className="text-2xl font-bold text-blue-900 dark:text-blue-100">$12,500</p>
                <p className="text-sm text-blue-600 dark:text-blue-400">of $15,000</p>
              </div>
            </div>
            
            <div className="p-4 bg-blue-50 dark:bg-blue-900/60 rounded-lg">
              <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">Recent Activity</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-blue-600 dark:text-blue-400">•</span>
                  <span className="text-blue-900 dark:text-blue-100">New design mockups uploaded</span>
                  <span className="text-blue-600 dark:text-blue-400">2h ago</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-blue-600 dark:text-blue-400">•</span>
                  <span className="text-blue-900 dark:text-blue-100">Team meeting scheduled</span>
                  <span className="text-blue-600 dark:text-blue-400">5h ago</span>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="tasks" className="bg-white dark:bg-blue-900/40 p-4 rounded-lg shadow-sm border border-blue-200 dark:border-blue-800">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-blue-900 dark:text-blue-100">Active Tasks</h3>
              <button className="px-3 py-1 text-sm rounded-md bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-300">
                Add Task
              </button>
            </div>
            
            <div className="space-y-2">
              <div className="p-3 bg-blue-50 dark:bg-blue-900/60 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="rounded border-blue-300 dark:border-blue-700" />
                    <span className="text-blue-900 dark:text-blue-100">Design Homepage Layout</span>
                  </div>
                  <span className="text-sm text-blue-600 dark:text-blue-400">Today</span>
                </div>
              </div>
              <div className="p-3 bg-blue-50 dark:bg-blue-900/60 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="rounded border-blue-300 dark:border-blue-700" />
                    <span className="text-blue-900 dark:text-blue-100">Implement User Authentication</span>
                  </div>
                  <span className="text-sm text-blue-600 dark:text-blue-400">Tomorrow</span>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="team" className="bg-white dark:bg-blue-900/40 p-4 rounded-lg shadow-sm border border-blue-200 dark:border-blue-800">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-blue-900 dark:text-blue-100">Team Members</h3>
              <button className="px-3 py-1 text-sm rounded-md bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-300">
                Invite
              </button>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center gap-3 p-2">
                <div className="w-10 h-10 rounded-full bg-blue-200 dark:bg-blue-800 flex items-center justify-center">
                  <span className="text-blue-600 dark:text-blue-400">JD</span>
                </div>
                <div>
                  <h4 className="font-medium text-blue-900 dark:text-blue-100">John Doe</h4>
                  <p className="text-sm text-blue-600 dark:text-blue-400">Project Lead</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-2">
                <div className="w-10 h-10 rounded-full bg-blue-200 dark:bg-blue-800 flex items-center justify-center">
                  <span className="text-blue-600 dark:text-blue-400">AS</span>
                </div>
                <div>
                  <h4 className="font-medium text-blue-900 dark:text-blue-100">Alice Smith</h4>
                  <p className="text-sm text-blue-600 dark:text-blue-400">Designer</p>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TabExample47; 