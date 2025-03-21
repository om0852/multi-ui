"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../_components/Tab_37";

const TabExample37 = () => {
  return (
    <div className="w-full max-w-2xl mx-auto p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-indigo-800 dark:text-indigo-200">Event Planner</h2>
      
      <Tabs defaultValue="upcoming" className="w-full">
        <TabsList activeTab="upcoming" setActiveTab={() => {}}>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="create">Create</TabsTrigger>
          <TabsTrigger value="calendar">Calendar</TabsTrigger>
        </TabsList>
        
        <TabsContent value="upcoming" className="bg-white dark:bg-indigo-900/40 p-4 rounded-lg shadow-sm border border-indigo-200 dark:border-indigo-800">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-indigo-900 dark:text-indigo-100">This Week</h3>
              <button className="text-sm text-indigo-600 dark:text-indigo-400">Filter ↓</button>
            </div>
            <div className="space-y-2">
              <div className="p-3 bg-indigo-50 dark:bg-indigo-900/60 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-indigo-900 dark:text-indigo-100">Team Standup</h3>
                    <p className="text-sm text-indigo-600 dark:text-indigo-400">Daily at 10:00 AM</p>
                  </div>
                  <span className="text-xs px-2 py-1 bg-indigo-100 dark:bg-indigo-800 text-indigo-600 dark:text-indigo-400 rounded-full">
                    Recurring
                  </span>
                </div>
                <div className="mt-2 flex items-center gap-2 text-sm text-indigo-600 dark:text-indigo-400">
                  <span>👥 12 participants</span>
                  <span>•</span>
                  <span>🎥 Video call</span>
                </div>
              </div>
              <div className="p-3 bg-indigo-50 dark:bg-indigo-900/60 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-indigo-900 dark:text-indigo-100">Project Review</h3>
                    <p className="text-sm text-indigo-600 dark:text-indigo-400">Tomorrow at 2:00 PM</p>
                  </div>
                  <span className="text-xs px-2 py-1 bg-indigo-100 dark:bg-indigo-800 text-indigo-600 dark:text-indigo-400 rounded-full">
                    Important
                  </span>
                </div>
                <div className="mt-2 flex items-center gap-2 text-sm text-indigo-600 dark:text-indigo-400">
                  <span>👥 5 participants</span>
                  <span>•</span>
                  <span>📍 Meeting Room A</span>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="create" className="bg-white dark:bg-indigo-900/40 p-4 rounded-lg shadow-sm border border-indigo-200 dark:border-indigo-800">
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-indigo-700 dark:text-indigo-300">Event Title</label>
              <input type="text" className="w-full px-3 py-2 rounded-md border border-indigo-200 dark:border-indigo-700 bg-white dark:bg-indigo-900/60 text-indigo-900 dark:text-indigo-100" placeholder="Enter event title" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-indigo-700 dark:text-indigo-300">Date</label>
                <input type="date" className="w-full px-3 py-2 rounded-md border border-indigo-200 dark:border-indigo-700 bg-white dark:bg-indigo-900/60 text-indigo-900 dark:text-indigo-100" />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-indigo-700 dark:text-indigo-300">Time</label>
                <input type="time" className="w-full px-3 py-2 rounded-md border border-indigo-200 dark:border-indigo-700 bg-white dark:bg-indigo-900/60 text-indigo-900 dark:text-indigo-100" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-indigo-700 dark:text-indigo-300">Location</label>
              <input type="text" className="w-full px-3 py-2 rounded-md border border-indigo-200 dark:border-indigo-700 bg-white dark:bg-indigo-900/60 text-indigo-900 dark:text-indigo-100" placeholder="Enter location" />
            </div>
            <button className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg">Create Event</button>
          </div>
        </TabsContent>
        
        <TabsContent value="calendar" className="bg-white dark:bg-indigo-900/40 p-4 rounded-lg shadow-sm border border-indigo-200 dark:border-indigo-800">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-indigo-900 dark:text-indigo-100">March 2024</h3>
              <div className="flex gap-2">
                <button className="p-1 rounded-md bg-indigo-100 dark:bg-indigo-800 text-indigo-600 dark:text-indigo-300">←</button>
                <button className="p-1 rounded-md bg-indigo-100 dark:bg-indigo-800 text-indigo-600 dark:text-indigo-300">→</button>
              </div>
            </div>
            <div className="grid grid-cols-7 gap-1">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div key={day} className="text-center text-sm text-indigo-600 dark:text-indigo-400 py-2">
                  {day}
                </div>
              ))}
              {Array.from({ length: 31 }, (_, i) => (
                <div key={i} className="aspect-square p-1">
                  <button className="w-full h-full flex items-center justify-center text-sm text-indigo-900 dark:text-indigo-100 hover:bg-indigo-100 dark:hover:bg-indigo-800 rounded-md">
                    {i + 1}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TabExample37; 