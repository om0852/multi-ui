"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../tsx/Tab_14";

const TabExample14 = () => {
  return (
    <div className="w-full max-w-2xl mx-auto p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-purple-800 dark:text-purple-200">Settings</h2>
      
      <Tabs defaultValue="profile" className="w-full">
        <TabsList activeTab="profile" setActiveTab={() => {}}>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>
        
        <TabsContent value="profile" className="bg-white dark:bg-purple-900/40 p-4 rounded-lg shadow-sm border border-purple-200 dark:border-purple-800">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-800 flex items-center justify-center">
                <span className="text-purple-600 dark:text-purple-300">JD</span>
              </div>
              <div>
                <h3 className="font-medium text-purple-900 dark:text-purple-100">John Doe</h3>
                <p className="text-sm text-purple-600 dark:text-purple-400">john@example.com</p>
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-purple-700 dark:text-purple-300">Display Name</label>
              <input type="text" className="w-full px-3 py-2 rounded-md border border-purple-200 dark:border-purple-700 bg-white dark:bg-purple-900/60 text-purple-900 dark:text-purple-100" placeholder="Enter your name" />
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="security" className="bg-white dark:bg-purple-900/40 p-4 rounded-lg shadow-sm border border-purple-200 dark:border-purple-800">
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-purple-700 dark:text-purple-300">Current Password</label>
              <input type="password" className="w-full px-3 py-2 rounded-md border border-purple-200 dark:border-purple-700 bg-white dark:bg-purple-900/60 text-purple-900 dark:text-purple-100" />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-purple-700 dark:text-purple-300">New Password</label>
              <input type="password" className="w-full px-3 py-2 rounded-md border border-purple-200 dark:border-purple-700 bg-white dark:bg-purple-900/60 text-purple-900 dark:text-purple-100" />
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="notifications" className="bg-white dark:bg-purple-900/40 p-4 rounded-lg shadow-sm border border-purple-200 dark:border-purple-800">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-purple-900 dark:text-purple-100">Email Notifications</h3>
                <p className="text-sm text-purple-600 dark:text-purple-400">Receive updates via email</p>
              </div>
              <button className="px-3 py-1 text-sm rounded-md bg-purple-100 dark:bg-purple-800 text-purple-700 dark:text-purple-300">Enable</button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-purple-900 dark:text-purple-100">Push Notifications</h3>
                <p className="text-sm text-purple-600 dark:text-purple-400">Get instant updates</p>
              </div>
              <button className="px-3 py-1 text-sm rounded-md bg-purple-100 dark:bg-purple-800 text-purple-700 dark:text-purple-300">Enable</button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TabExample14; 