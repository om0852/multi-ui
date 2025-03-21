"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../_components/Tab_39";

const TabExample39 = () => {
  return (
    <div className="w-full max-w-2xl mx-auto p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-emerald-800 dark:text-emerald-200">User Profile</h2>
      
      <Tabs defaultValue="profile" className="w-full">
        <TabsList activeTab="profile" setActiveTab={() => {}}>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
          <TabsTrigger value="preferences">Preferences</TabsTrigger>
        </TabsList>
        
        <TabsContent value="profile" className="bg-white dark:bg-emerald-900/40 p-4 rounded-lg shadow-sm border border-emerald-200 dark:border-emerald-800">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-full bg-emerald-100 dark:bg-emerald-800 flex items-center justify-center">
                <span className="text-3xl text-emerald-600 dark:text-emerald-300">JD</span>
              </div>
              <div>
                <h3 className="text-lg font-medium text-emerald-900 dark:text-emerald-100">John Doe</h3>
                <p className="text-emerald-600 dark:text-emerald-400">Product Designer</p>
                <p className="text-sm text-emerald-600 dark:text-emerald-400">San Francisco, CA</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-emerald-700 dark:text-emerald-300">Bio</label>
                <textarea className="w-full px-3 py-2 rounded-md border border-emerald-200 dark:border-emerald-700 bg-white dark:bg-emerald-900/60 text-emerald-900 dark:text-emerald-100" rows={3} placeholder="Tell us about yourself"></textarea>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-emerald-700 dark:text-emerald-300">Email</label>
                  <input type="email" className="w-full px-3 py-2 rounded-md border border-emerald-200 dark:border-emerald-700 bg-white dark:bg-emerald-900/60 text-emerald-900 dark:text-emerald-100" value="john@example.com" readOnly />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-emerald-700 dark:text-emerald-300">Phone</label>
                  <input type="tel" className="w-full px-3 py-2 rounded-md border border-emerald-200 dark:border-emerald-700 bg-white dark:bg-emerald-900/60 text-emerald-900 dark:text-emerald-100" placeholder="Enter phone number" />
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="activity" className="bg-white dark:bg-emerald-900/40 p-4 rounded-lg shadow-sm border border-emerald-200 dark:border-emerald-800">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-emerald-900 dark:text-emerald-100">Recent Activity</h3>
              <select className="text-sm rounded-md border border-emerald-200 dark:border-emerald-700 bg-white dark:bg-emerald-900/60 text-emerald-900 dark:text-emerald-100">
                <option>This Week</option>
                <option>This Month</option>
                <option>All Time</option>
              </select>
            </div>
            <div className="space-y-2">
              <div className="p-3 bg-emerald-50 dark:bg-emerald-900/60 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-800 flex items-center justify-center">
                    <span className="text-emerald-600 dark:text-emerald-300">📝</span>
                  </div>
                  <div>
                    <p className="text-emerald-900 dark:text-emerald-100">Updated profile information</p>
                    <p className="text-sm text-emerald-600 dark:text-emerald-400">2 hours ago</p>
                  </div>
                </div>
              </div>
              <div className="p-3 bg-emerald-50 dark:bg-emerald-900/60 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-800 flex items-center justify-center">
                    <span className="text-emerald-600 dark:text-emerald-300">🎨</span>
                  </div>
                  <div>
                    <p className="text-emerald-900 dark:text-emerald-100">Changed profile theme</p>
                    <p className="text-sm text-emerald-600 dark:text-emerald-400">Yesterday</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="preferences" className="bg-white dark:bg-emerald-900/40 p-4 rounded-lg shadow-sm border border-emerald-200 dark:border-emerald-800">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-emerald-900 dark:text-emerald-100">Theme Preferences</h3>
                <p className="text-sm text-emerald-600 dark:text-emerald-400">Choose your preferred theme</p>
              </div>
              <select className="px-3 py-1 text-sm rounded-md bg-emerald-100 dark:bg-emerald-800 text-emerald-700 dark:text-emerald-300">
                <option>Light</option>
                <option>Dark</option>
                <option>System</option>
              </select>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-emerald-900 dark:text-emerald-100">Language</h3>
                <p className="text-sm text-emerald-600 dark:text-emerald-400">Select your preferred language</p>
              </div>
              <select className="px-3 py-1 text-sm rounded-md bg-emerald-100 dark:bg-emerald-800 text-emerald-700 dark:text-emerald-300">
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
              </select>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-emerald-900 dark:text-emerald-100">Privacy</h3>
                <p className="text-sm text-emerald-600 dark:text-emerald-400">Manage your privacy settings</p>
              </div>
              <button className="px-3 py-1 text-sm rounded-md bg-emerald-100 dark:bg-emerald-800 text-emerald-700 dark:text-emerald-300">
                Configure
              </button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TabExample39; 