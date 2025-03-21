"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../_components/Tab_21";

const TabExample21 = () => {
  return (
    <div className="w-full max-w-2xl mx-auto p-4 bg-violet-50 dark:bg-violet-900/20 rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-violet-800 dark:text-violet-200">Calendar</h2>
      
      <Tabs defaultValue="month" className="w-full">
        <TabsList activeTab="month" setActiveTab={() => {}}>
          <TabsTrigger value="month">Month</TabsTrigger>
          <TabsTrigger value="week">Week</TabsTrigger>
          <TabsTrigger value="day">Day</TabsTrigger>
        </TabsList>
        
        <TabsContent value="month" className="bg-white dark:bg-violet-900/40 p-4 rounded-lg shadow-sm border border-violet-200 dark:border-violet-800">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-violet-900 dark:text-violet-100">March 2024</h3>
              <div className="flex gap-2">
                <button className="p-1 rounded-md bg-violet-100 dark:bg-violet-800 text-violet-600 dark:text-violet-300">←</button>
                <button className="p-1 rounded-md bg-violet-100 dark:bg-violet-800 text-violet-600 dark:text-violet-300">→</button>
              </div>
            </div>
            <div className="grid grid-cols-7 gap-1">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div key={day} className="text-center text-sm text-violet-600 dark:text-violet-400 py-2">
                  {day}
                </div>
              ))}
              {Array.from({ length: 31 }, (_, i) => (
                <div key={i} className="aspect-square p-1 text-center text-sm text-violet-900 dark:text-violet-100 hover:bg-violet-100 dark:hover:bg-violet-800 rounded-md cursor-pointer">
                  {i + 1}
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="week" className="bg-white dark:bg-violet-900/40 p-4 rounded-lg shadow-sm border border-violet-200 dark:border-violet-800">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-violet-900 dark:text-violet-100">Week 12</h3>
              <div className="flex gap-2">
                <button className="p-1 rounded-md bg-violet-100 dark:bg-violet-800 text-violet-600 dark:text-violet-300">←</button>
                <button className="p-1 rounded-md bg-violet-100 dark:bg-violet-800 text-violet-600 dark:text-violet-300">→</button>
              </div>
            </div>
            <div className="grid grid-cols-7 gap-1">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div key={day} className="text-center text-sm text-violet-600 dark:text-violet-400 py-2">
                  {day}
                </div>
              ))}
              {Array.from({ length: 7 }, (_, i) => (
                <div key={i} className="aspect-square p-1 text-center text-sm text-violet-900 dark:text-violet-100 hover:bg-violet-100 dark:hover:bg-violet-800 rounded-md cursor-pointer">
                  {i + 17}
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="day" className="bg-white dark:bg-violet-900/40 p-4 rounded-lg shadow-sm border border-violet-200 dark:border-violet-800">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-violet-900 dark:text-violet-100">March 17, 2024</h3>
              <div className="flex gap-2">
                <button className="p-1 rounded-md bg-violet-100 dark:bg-violet-800 text-violet-600 dark:text-violet-300">←</button>
                <button className="p-1 rounded-md bg-violet-100 dark:bg-violet-800 text-violet-600 dark:text-violet-300">→</button>
              </div>
            </div>
            <div className="space-y-2">
              {Array.from({ length: 24 }, (_, i) => (
                <div key={i} className="flex items-center gap-2 p-2 hover:bg-violet-50 dark:hover:bg-violet-900/60 rounded-md">
                  <span className="text-sm text-violet-600 dark:text-violet-400 w-12">{i.toString().padStart(2, '0')}:00</span>
                  <div className="flex-1 h-8 border border-dashed border-violet-200 dark:border-violet-700 rounded-md"></div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TabExample21; 