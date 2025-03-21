"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../_components/Tab_50";

const TabExample50 = () => {
  return (
    <div className="w-full max-w-2xl mx-auto p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-indigo-800 dark:text-indigo-200">Calendar</h2>
      
      <Tabs defaultValue="month" className="w-full">
        <TabsList activeTab="month" setActiveTab={() => {}}>
          <TabsTrigger value="month">Month</TabsTrigger>
          <TabsTrigger value="week">Week</TabsTrigger>
          <TabsTrigger value="agenda">Agenda</TabsTrigger>
        </TabsList>
        
        <TabsContent value="month" className="bg-white dark:bg-indigo-900/40 p-4 rounded-lg shadow-sm border border-indigo-200 dark:border-indigo-800">
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-indigo-900 dark:text-indigo-100">September 2024</h3>
              <div className="flex gap-2">
                <button className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-800 text-indigo-600 dark:text-indigo-300">◀</button>
                <button className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-800 text-indigo-600 dark:text-indigo-300">▶</button>
              </div>
            </div>
            
            <div className="grid grid-cols-7 gap-1">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div key={day} className="p-2 text-center text-sm font-medium text-indigo-600 dark:text-indigo-400">
                  {day}
                </div>
              ))}
              {Array.from({ length: 35 }).map((_, i) => (
                <div
                  key={i}
                  className="aspect-square p-2 border border-indigo-100 dark:border-indigo-800 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-800/50"
                >
                  <span className="text-sm text-indigo-900 dark:text-indigo-100">{i + 1}</span>
                  {i === 15 && (
                    <div className="mt-1 p-1 text-xs bg-indigo-100 dark:bg-indigo-800 text-indigo-600 dark:text-indigo-300 rounded">
                      Meeting
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="week" className="bg-white dark:bg-indigo-900/40 p-4 rounded-lg shadow-sm border border-indigo-200 dark:border-indigo-800">
          <div className="space-y-4">
            <div className="grid grid-cols-8 gap-2">
              <div className=""></div>
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div key={day} className="text-center">
                  <div className="text-sm font-medium text-indigo-600 dark:text-indigo-400">{day}</div>
                  <div className="text-lg font-semibold text-indigo-900 dark:text-indigo-100">
                    {day === "Wed" ? "15" : ""}
                  </div>
                </div>
              ))}
              
              {Array.from({ length: 12 }).map((_, i) => (
                <React.Fragment key={i}>
                  <div className="text-sm text-indigo-600 dark:text-indigo-400 text-right pr-2">
                    {`${(i + 8).toString().padStart(2, "0")}:00`}
                  </div>
                  {Array.from({ length: 7 }).map((_, j) => (
                    <div
                      key={j}
                      className="border border-indigo-100 dark:border-indigo-800 rounded-lg h-12"
                    >
                      {i === 2 && j === 3 && (
                        <div className="m-1 p-1 text-xs bg-indigo-100 dark:bg-indigo-800 text-indigo-600 dark:text-indigo-300 rounded">
                          Team Meeting
                        </div>
                      )}
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="agenda" className="bg-white dark:bg-indigo-900/40 p-4 rounded-lg shadow-sm border border-indigo-200 dark:border-indigo-800">
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-indigo-900 dark:text-indigo-100">Upcoming Events</h3>
              <button className="px-3 py-1 rounded-lg bg-indigo-100 dark:bg-indigo-800 text-indigo-600 dark:text-indigo-300">
                + New Event
              </button>
            </div>
            
            <div className="space-y-2">
              <div className="p-3 bg-indigo-50 dark:bg-indigo-900/60 rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium text-indigo-900 dark:text-indigo-100">Team Meeting</h4>
                    <p className="text-sm text-indigo-600 dark:text-indigo-400">Sep 15, 10:00 AM</p>
                  </div>
                  <span className="px-2 py-1 text-xs rounded-full bg-indigo-100 dark:bg-indigo-800 text-indigo-600 dark:text-indigo-300">
                    1 hour
                  </span>
                </div>
                <p className="mt-2 text-sm text-indigo-600 dark:text-indigo-400">
                  Weekly team sync meeting with project updates
                </p>
              </div>
              
              <div className="p-3 bg-indigo-50 dark:bg-indigo-900/60 rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium text-indigo-900 dark:text-indigo-100">Client Call</h4>
                    <p className="text-sm text-indigo-600 dark:text-indigo-400">Sep 15, 2:00 PM</p>
                  </div>
                  <span className="px-2 py-1 text-xs rounded-full bg-indigo-100 dark:bg-indigo-800 text-indigo-600 dark:text-indigo-300">
                    30 min
                  </span>
                </div>
                <p className="mt-2 text-sm text-indigo-600 dark:text-indigo-400">
                  Project review and feedback session
                </p>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TabExample50; 