"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../tsx/Tab_5";

const TabExample5 = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-green-50 dark:bg-green-900/20 rounded-xl">
      <h2 className="text-2xl font-bold mb-6 text-green-800 dark:text-green-200">Fitness Tracker</h2>
      
      <Tabs defaultValue="workouts" className="w-full">
        <TabsList activeTab="workouts" setActiveTab={() => {}}>
          <TabsTrigger value="workouts">Workouts</TabsTrigger>
          <TabsTrigger value="stats">Stats</TabsTrigger>
          <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
          <TabsTrigger value="goals">Goals</TabsTrigger>
        </TabsList>
        
        <TabsContent value="workouts" className="bg-white dark:bg-green-900/40 p-6 rounded-lg shadow-sm border border-green-200 dark:border-green-800">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-green-900 dark:text-green-100 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"></path>
                <path d="M15 2H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"></path>
              </svg>
              Workout Plans
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-green-50 dark:bg-green-900/60 p-4 rounded-lg">
                <h4 className="font-medium text-green-900 dark:text-green-100">Cardio</h4>
                <p className="text-sm text-green-700 dark:text-green-300">30 min session</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-green-600 dark:text-green-400">
                  <span>Calories: 300</span>
                  <span>Duration: 30min</span>
                </div>
              </div>
              <div className="bg-green-50 dark:bg-green-900/60 p-4 rounded-lg">
                <h4 className="font-medium text-green-900 dark:text-green-100">Strength</h4>
                <p className="text-sm text-green-700 dark:text-green-300">45 min session</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-green-600 dark:text-green-400">
                  <span>Calories: 400</span>
                  <span>Duration: 45min</span>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="stats" className="bg-white dark:bg-green-900/40 p-6 rounded-lg shadow-sm border border-green-200 dark:border-green-800">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-green-900 dark:text-green-100 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="20" x2="18" y2="10"></line>
                <line x1="12" y1="20" x2="12" y2="4"></line>
                <line x1="6" y1="20" x2="6" y2="14"></line>
              </svg>
              Weekly Stats
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-green-50 dark:bg-green-900/60 p-4 rounded-lg">
                <h4 className="font-medium text-green-900 dark:text-green-100">Workouts</h4>
                <p className="text-sm text-green-700 dark:text-green-300">This week</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-green-600 dark:text-green-400">
                  <span>Count: 5</span>
                  <span>Streak: 3 days</span>
                </div>
              </div>
              <div className="bg-green-50 dark:bg-green-900/60 p-4 rounded-lg">
                <h4 className="font-medium text-green-900 dark:text-green-100">Calories</h4>
                <p className="text-sm text-green-700 dark:text-green-300">Burned</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-green-600 dark:text-green-400">
                  <span>Total: 2500</span>
                  <span>Daily: 500</span>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="nutrition" className="bg-white dark:bg-green-900/40 p-6 rounded-lg shadow-sm border border-green-200 dark:border-green-800">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-green-900 dark:text-green-100 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                <line x1="6" y1="1" x2="6" y2="4"></line>
                <line x1="10" y1="1" x2="10" y2="4"></line>
                <line x1="14" y1="1" x2="14" y2="4"></line>
              </svg>
              Nutrition Tracking
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-green-50 dark:bg-green-900/60 p-4 rounded-lg">
                <h4 className="font-medium text-green-900 dark:text-green-100">Macros</h4>
                <p className="text-sm text-green-700 dark:text-green-300">Daily goals</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-green-600 dark:text-green-400">
                  <span>Protein: 120g</span>
                  <span>Carbs: 200g</span>
                </div>
              </div>
              <div className="bg-green-50 dark:bg-green-900/60 p-4 rounded-lg">
                <h4 className="font-medium text-green-900 dark:text-green-100">Water</h4>
                <p className="text-sm text-green-700 dark:text-green-300">Intake</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-green-600 dark:text-green-400">
                  <span>Goal: 2.5L</span>
                  <span>Current: 1.8L</span>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="goals" className="bg-white dark:bg-green-900/40 p-6 rounded-lg shadow-sm border border-green-200 dark:border-green-800">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-green-900 dark:text-green-100 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              Fitness Goals
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-green-50 dark:bg-green-900/60 p-4 rounded-lg">
                <h4 className="font-medium text-green-900 dark:text-green-100">Weight Goal</h4>
                <p className="text-sm text-green-700 dark:text-green-300">Target: 70kg</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-green-600 dark:text-green-400">
                  <span>Current: 75kg</span>
                  <span>Progress: 60%</span>
                </div>
              </div>
              <div className="bg-green-50 dark:bg-green-900/60 p-4 rounded-lg">
                <h4 className="font-medium text-green-900 dark:text-green-100">Running</h4>
                <p className="text-sm text-green-700 dark:text-green-300">5km goal</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-green-600 dark:text-green-400">
                  <span>Best: 25min</span>
                  <span>Target: 20min</span>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TabExample5; 