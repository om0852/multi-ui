"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../_components/Tab_18";

const TabExample18 = () => {
  return (
    <div className="w-full max-w-2xl mx-auto p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-green-800 dark:text-green-200">Workout Tracker</h2>
      
      <Tabs defaultValue="today" className="w-full">
        <TabsList activeTab="today" setActiveTab={() => {}}>
          <TabsTrigger value="today">Today</TabsTrigger>
          <TabsTrigger value="stats">Stats</TabsTrigger>
          <TabsTrigger value="plan">Plan</TabsTrigger>
        </TabsList>
        
        <TabsContent value="today" className="bg-white dark:bg-green-900/40 p-4 rounded-lg shadow-sm border border-green-200 dark:border-green-800">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-green-900 dark:text-green-100">Today&apos;s Workout</h3>
                <p className="text-sm text-green-600 dark:text-green-400">Upper Body</p>
              </div>
              <span className="text-sm text-green-600 dark:text-green-400">45 min</span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-2 bg-green-50 dark:bg-green-900/60 rounded-lg">
                <span className="text-green-900 dark:text-green-100">Push-ups</span>
                <span className="text-sm text-green-600 dark:text-green-400">3x12</span>
              </div>
              <div className="flex items-center justify-between p-2 bg-green-50 dark:bg-green-900/60 rounded-lg">
                <span className="text-green-900 dark:text-green-100">Pull-ups</span>
                <span className="text-sm text-green-600 dark:text-green-400">3x8</span>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="stats" className="bg-white dark:bg-green-900/40 p-4 rounded-lg shadow-sm border border-green-200 dark:border-green-800">
          <div className="space-y-4">
            <h3 className="font-medium text-green-900 dark:text-green-100">Weekly Progress</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-green-50 dark:bg-green-900/60 p-3 rounded-lg">
                <p className="text-sm text-green-600 dark:text-green-400">Workouts</p>
                <p className="font-medium text-green-900 dark:text-green-100">4/5</p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/60 p-3 rounded-lg">
                <p className="text-sm text-green-600 dark:text-green-400">Duration</p>
                <p className="font-medium text-green-900 dark:text-green-100">180 min</p>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="plan" className="bg-white dark:bg-green-900/40 p-4 rounded-lg shadow-sm border border-green-200 dark:border-green-800">
          <div className="space-y-4">
            <h3 className="font-medium text-green-900 dark:text-green-100">Workout Plan</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-2 hover:bg-green-50 dark:hover:bg-green-900/60 rounded-lg">
                <div>
                  <p className="font-medium text-green-900 dark:text-green-100">Monday</p>
                  <p className="text-sm text-green-600 dark:text-green-400">Upper Body</p>
                </div>
                <span className="text-sm text-green-600 dark:text-green-400">9:00 AM</span>
              </div>
              <div className="flex items-center justify-between p-2 hover:bg-green-50 dark:hover:bg-green-900/60 rounded-lg">
                <div>
                  <p className="font-medium text-green-900 dark:text-green-100">Wednesday</p>
                  <p className="text-sm text-green-600 dark:text-green-400">Lower Body</p>
                </div>
                <span className="text-sm text-green-600 dark:text-green-400">9:00 AM</span>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TabExample18; 