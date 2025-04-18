"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../_components/Tab_15";

const TabExample15 = () => {
  return (
    <div className="w-full max-w-2xl mx-auto p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-indigo-800 dark:text-indigo-200">Weather Forecast</h2>
      
      <Tabs defaultValue="today" className="w-full">
        <TabsList activeTab="today" setActiveTab={() => {}}>
          <TabsTrigger value="today">Today</TabsTrigger>
          <TabsTrigger value="week">Week</TabsTrigger>
          <TabsTrigger value="month">Month</TabsTrigger>
        </TabsList>
        
        <TabsContent value="today" className="bg-white dark:bg-indigo-900/40 p-4 rounded-lg shadow-sm border border-indigo-200 dark:border-indigo-800">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-indigo-900 dark:text-indigo-100">24°C</h3>
                <p className="text-indigo-600 dark:text-indigo-400">Sunny</p>
              </div>
              <div className="text-4xl">☀️</div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-sm text-indigo-600 dark:text-indigo-400">Humidity</p>
                <p className="font-medium text-indigo-900 dark:text-indigo-100">65%</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-indigo-600 dark:text-indigo-400">Wind</p>
                <p className="font-medium text-indigo-900 dark:text-indigo-100">12 km/h</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-indigo-600 dark:text-indigo-400">UV Index</p>
                <p className="font-medium text-indigo-900 dark:text-indigo-100">7</p>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="week" className="bg-white dark:bg-indigo-900/40 p-4 rounded-lg shadow-sm border border-indigo-200 dark:border-indigo-800">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-indigo-50 dark:bg-indigo-900/60 p-3 rounded-lg">
                <p className="text-sm text-indigo-600 dark:text-indigo-400">Monday</p>
                <p className="font-medium text-indigo-900 dark:text-indigo-100">22°C</p>
                <p className="text-sm text-indigo-600 dark:text-indigo-400">Partly Cloudy</p>
              </div>
              <div className="bg-indigo-50 dark:bg-indigo-900/60 p-3 rounded-lg">
                <p className="text-sm text-indigo-600 dark:text-indigo-400">Tuesday</p>
                <p className="font-medium text-indigo-900 dark:text-indigo-100">25°C</p>
                <p className="text-sm text-indigo-600 dark:text-indigo-400">Sunny</p>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="month" className="bg-white dark:bg-indigo-900/40 p-4 rounded-lg shadow-sm border border-indigo-200 dark:border-indigo-800">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-indigo-50 dark:bg-indigo-900/60 p-3 rounded-lg">
                <p className="text-sm text-indigo-600 dark:text-indigo-400">Average High</p>
                <p className="font-medium text-indigo-900 dark:text-indigo-100">26°C</p>
              </div>
              <div className="bg-indigo-50 dark:bg-indigo-900/60 p-3 rounded-lg">
                <p className="text-sm text-indigo-600 dark:text-indigo-400">Average Low</p>
                <p className="font-medium text-indigo-900 dark:text-indigo-100">18°C</p>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TabExample15; 