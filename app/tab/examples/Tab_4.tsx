"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../_components/Tab_4";

const TabExample4 = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
      <h2 className="text-2xl font-bold mb-6 text-blue-800 dark:text-blue-200">Travel Planner</h2>
      
      <Tabs defaultValue="flights" className="w-full">
        <TabsList activeTab="flights" setActiveTab={() => {}}>
          <TabsTrigger value="flights">Flights</TabsTrigger>
          <TabsTrigger value="hotels">Hotels</TabsTrigger>
          <TabsTrigger value="activities">Activities</TabsTrigger>
          <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
        </TabsList>
        
        <TabsContent value="flights" className="bg-white dark:bg-blue-900/40 p-6 rounded-lg shadow-sm border border-blue-200 dark:border-blue-800">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              Flight Options
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 dark:bg-blue-900/60 p-4 rounded-lg">
                <h4 className="font-medium text-blue-900 dark:text-blue-100">Economy</h4>
                <p className="text-sm text-blue-700 dark:text-blue-300">Basic comfort</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400">
                  <span>From: $299</span>
                  <span>Baggage: 1</span>
                </div>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/60 p-4 rounded-lg">
                <h4 className="font-medium text-blue-900 dark:text-blue-100">Business</h4>
                <p className="text-sm text-blue-700 dark:text-blue-300">Premium comfort</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400">
                  <span>From: $899</span>
                  <span>Baggage: 2</span>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="hotels" className="bg-white dark:bg-blue-900/40 p-6 rounded-lg shadow-sm border border-blue-200 dark:border-blue-800">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
              Hotel Options
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 dark:bg-blue-900/60 p-4 rounded-lg">
                <h4 className="font-medium text-blue-900 dark:text-blue-100">Standard Room</h4>
                <p className="text-sm text-blue-700 dark:text-blue-300">Comfortable stay</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400">
                  <span>From: $150/night</span>
                  <span>Rating: 4.5</span>
                </div>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/60 p-4 rounded-lg">
                <h4 className="font-medium text-blue-900 dark:text-blue-100">Suite</h4>
                <p className="text-sm text-blue-700 dark:text-blue-300">Luxury experience</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400">
                  <span>From: $300/night</span>
                  <span>Rating: 4.8</span>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="activities" className="bg-white dark:bg-blue-900/40 p-6 rounded-lg shadow-sm border border-blue-200 dark:border-blue-800">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              Local Activities
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 dark:bg-blue-900/60 p-4 rounded-lg">
                <h4 className="font-medium text-blue-900 dark:text-blue-100">City Tour</h4>
                <p className="text-sm text-blue-700 dark:text-blue-300">Guided exploration</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400">
                  <span>Duration: 4hr</span>
                  <span>Price: $50</span>
                </div>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/60 p-4 rounded-lg">
                <h4 className="font-medium text-blue-900 dark:text-blue-100">Food Tasting</h4>
                <p className="text-sm text-blue-700 dark:text-blue-300">Local cuisine</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400">
                  <span>Duration: 3hr</span>
                  <span>Price: $75</span>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="itinerary" className="bg-white dark:bg-blue-900/40 p-6 rounded-lg shadow-sm border border-blue-200 dark:border-blue-800">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              Travel Itinerary
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 dark:bg-blue-900/60 p-4 rounded-lg">
                <h4 className="font-medium text-blue-900 dark:text-blue-100">Day 1</h4>
                <p className="text-sm text-blue-700 dark:text-blue-300">Arrival & City Tour</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400">
                  <span>Morning: Arrival</span>
                  <span>Afternoon: Tour</span>
                </div>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/60 p-4 rounded-lg">
                <h4 className="font-medium text-blue-900 dark:text-blue-100">Day 2</h4>
                <p className="text-sm text-blue-700 dark:text-blue-300">Local Activities</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400">
                  <span>Morning: Food Tour</span>
                  <span>Evening: Show</span>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TabExample4; 