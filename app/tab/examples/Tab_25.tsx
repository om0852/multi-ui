"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../_components/Tab_25";

const TabExample25 = () => {
  return (
    <div className="w-full max-w-2xl mx-auto p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-emerald-800 dark:text-emerald-200">Dashboard</h2>
      
      <Tabs defaultValue="overview" className="w-full">
        <TabsList activeTab="overview" setActiveTab={() => {}}>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="bg-white dark:bg-emerald-900/40 p-4 rounded-lg shadow-sm border border-emerald-200 dark:border-emerald-800">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-emerald-50 dark:bg-emerald-900/60 p-4 rounded-lg">
                <h3 className="font-medium text-emerald-900 dark:text-emerald-100">Total Users</h3>
                <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">1,234</p>
                <p className="text-sm text-emerald-500 dark:text-emerald-400">+12% from last month</p>
              </div>
              <div className="bg-emerald-50 dark:bg-emerald-900/60 p-4 rounded-lg">
                <h3 className="font-medium text-emerald-900 dark:text-emerald-100">Revenue</h3>
                <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">$45,678</p>
                <p className="text-sm text-emerald-500 dark:text-emerald-400">+8% from last month</p>
              </div>
            </div>
            <div className="bg-emerald-50 dark:bg-emerald-900/60 p-4 rounded-lg">
              <h3 className="font-medium text-emerald-900 dark:text-emerald-100">Recent Activity</h3>
              <div className="mt-2 space-y-2">
                <div className="flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400">
                  <span>•</span>
                  <span>New user registration</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400">
                  <span>•</span>
                  <span>System update completed</span>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="analytics" className="bg-white dark:bg-emerald-900/40 p-4 rounded-lg shadow-sm border border-emerald-200 dark:border-emerald-800">
          <div className="space-y-4">
            <div className="bg-emerald-50 dark:bg-emerald-900/60 p-4 rounded-lg">
              <h3 className="font-medium text-emerald-900 dark:text-emerald-100">User Growth</h3>
              <div className="h-32 bg-emerald-100 dark:bg-emerald-800 rounded-lg mt-2 flex items-center justify-center">
                <span className="text-emerald-600 dark:text-emerald-400">Chart Placeholder</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-emerald-50 dark:bg-emerald-900/60 p-4 rounded-lg">
                <h3 className="font-medium text-emerald-900 dark:text-emerald-100">Conversion Rate</h3>
                <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">3.2%</p>
              </div>
              <div className="bg-emerald-50 dark:bg-emerald-900/60 p-4 rounded-lg">
                <h3 className="font-medium text-emerald-900 dark:text-emerald-100">Avg. Session</h3>
                <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">4m 32s</p>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="reports" className="bg-white dark:bg-emerald-900/40 p-4 rounded-lg shadow-sm border border-emerald-200 dark:border-emerald-800">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-emerald-900 dark:text-emerald-100">Monthly Reports</h3>
              <button className="px-3 py-1 text-sm rounded-md bg-emerald-100 dark:bg-emerald-800 text-emerald-700 dark:text-emerald-300">Download</button>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-2 hover:bg-emerald-50 dark:hover:bg-emerald-900/60 rounded-lg">
                <span className="text-emerald-900 dark:text-emerald-100">March 2024</span>
                <span className="text-sm text-emerald-600 dark:text-emerald-400">PDF</span>
              </div>
              <div className="flex items-center justify-between p-2 hover:bg-emerald-50 dark:hover:bg-emerald-900/60 rounded-lg">
                <span className="text-emerald-900 dark:text-emerald-100">February 2024</span>
                <span className="text-sm text-emerald-600 dark:text-emerald-400">PDF</span>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TabExample25; 