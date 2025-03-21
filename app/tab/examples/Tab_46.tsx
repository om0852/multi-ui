"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../_components/Tab_46";

const TabExample46 = () => {
  return (
    <div className="w-full max-w-2xl mx-auto p-4 bg-sky-50 dark:bg-sky-900/20 rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-sky-800 dark:text-sky-200">Weather Dashboard</h2>
      
      <Tabs defaultValue="current" className="w-full">
        <TabsList activeTab="current" setActiveTab={() => {}}>
          <TabsTrigger value="current">Current</TabsTrigger>
          <TabsTrigger value="forecast">Forecast</TabsTrigger>
          <TabsTrigger value="radar">Radar</TabsTrigger>
        </TabsList>
        
        <TabsContent value="current" className="bg-white dark:bg-sky-900/40 p-4 rounded-lg shadow-sm border border-sky-200 dark:border-sky-800">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-sky-900 dark:text-sky-100">New York City</h3>
                <p className="text-sky-600 dark:text-sky-400">Tuesday, 2:30 PM</p>
              </div>
              <button className="p-2 rounded-full hover:bg-sky-100 dark:hover:bg-sky-800">
                📍
              </button>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-sky-50 dark:bg-sky-900/60 rounded-lg">
              <div className="text-6xl">⛅</div>
              <div className="text-right">
                <div className="text-4xl font-bold text-sky-900 dark:text-sky-100">72°F</div>
                <div className="text-sky-600 dark:text-sky-400">Partly Cloudy</div>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              <div className="p-3 bg-sky-50 dark:bg-sky-900/60 rounded-lg text-center">
                <div className="text-sky-600 dark:text-sky-400">Humidity</div>
                <div className="text-xl font-bold text-sky-900 dark:text-sky-100">65%</div>
              </div>
              <div className="p-3 bg-sky-50 dark:bg-sky-900/60 rounded-lg text-center">
                <div className="text-sky-600 dark:text-sky-400">Wind</div>
                <div className="text-xl font-bold text-sky-900 dark:text-sky-100">8 mph</div>
              </div>
              <div className="p-3 bg-sky-50 dark:bg-sky-900/60 rounded-lg text-center">
                <div className="text-sky-600 dark:text-sky-400">UV Index</div>
                <div className="text-xl font-bold text-sky-900 dark:text-sky-100">4</div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="forecast" className="bg-white dark:bg-sky-900/40 p-4 rounded-lg shadow-sm border border-sky-200 dark:border-sky-800">
          <div className="space-y-4">
            <div className="grid grid-cols-5 gap-2">
              {["Wed", "Thu", "Fri", "Sat", "Sun"].map((day, i) => (
                <div key={i} className="p-2 bg-sky-50 dark:bg-sky-900/60 rounded-lg text-center">
                  <div className="text-sm text-sky-600 dark:text-sky-400">{day}</div>
                  <div className="text-2xl my-2">
                    {["🌤️", "⛅", "🌧️", "☀️", "⛅"][i]}
                  </div>
                  <div className="text-sky-900 dark:text-sky-100 font-bold">
                    {[74, 70, 68, 72, 71][i]}°F
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-4 bg-sky-50 dark:bg-sky-900/60 rounded-lg">
              <h3 className="font-medium text-sky-900 dark:text-sky-100 mb-2">Weekly Summary</h3>
              <p className="text-sm text-sky-600 dark:text-sky-400">
                Mostly sunny with occasional clouds. Chance of rain on Friday.
              </p>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="radar" className="bg-white dark:bg-sky-900/40 p-4 rounded-lg shadow-sm border border-sky-200 dark:border-sky-800">
          <div className="space-y-4">
            <div className="aspect-square bg-sky-900 rounded-lg relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-sky-400">Radar Map</span>
              </div>
              <div className="absolute bottom-4 right-4 flex gap-2">
                <button className="p-2 rounded-full bg-white/20 text-white">➕</button>
                <button className="p-2 rounded-full bg-white/20 text-white">➖</button>
              </div>
            </div>
            <div className="flex justify-between text-sm text-sky-600 dark:text-sky-400">
              <span>Last updated: 2:25 PM</span>
              <button className="hover:text-sky-800 dark:hover:text-sky-200">Refresh</button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TabExample46; 