"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../tsx/Tab_10";

const TabExample10 = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl">
      <h2 className="text-2xl font-bold mb-6 text-emerald-800 dark:text-emerald-200">Analytics Dashboard</h2>
      
      <Tabs defaultValue="overview" className="w-full">
        <TabsList activeTab="overview" setActiveTab={() => {}}>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="bg-white dark:bg-emerald-900/40 p-6 rounded-lg shadow-sm border border-emerald-200 dark:border-emerald-800">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-emerald-900 dark:text-emerald-100 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
              </svg>
              Dashboard Overview
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-emerald-50 dark:bg-emerald-900/60 p-4 rounded-lg">
                <h4 className="font-medium text-emerald-900 dark:text-emerald-100">Total Users</h4>
                <p className="text-sm text-emerald-700 dark:text-emerald-300">Active accounts</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400">
                  <span>1,234</span>
                  <span>+12%</span>
                </div>
              </div>
              <div className="bg-emerald-50 dark:bg-emerald-900/60 p-4 rounded-lg">
                <h4 className="font-medium text-emerald-900 dark:text-emerald-100">Revenue</h4>
                <p className="text-sm text-emerald-700 dark:text-emerald-300">Monthly income</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400">
                  <span>$45,678</span>
                  <span>+8%</span>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="reports" className="bg-white dark:bg-emerald-900/40 p-6 rounded-lg shadow-sm border border-emerald-200 dark:border-emerald-800">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-emerald-900 dark:text-emerald-100 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
              Monthly Reports
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-emerald-50 dark:bg-emerald-900/60 p-4 rounded-lg">
                <h4 className="font-medium text-emerald-900 dark:text-emerald-100">Sales Report</h4>
                <p className="text-sm text-emerald-700 dark:text-emerald-300">Monthly summary</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400">
                  <span>Generated</span>
                  <span>PDF</span>
                </div>
              </div>
              <div className="bg-emerald-50 dark:bg-emerald-900/60 p-4 rounded-lg">
                <h4 className="font-medium text-emerald-900 dark:text-emerald-100">User Report</h4>
                <p className="text-sm text-emerald-700 dark:text-emerald-300">Growth analysis</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400">
                  <span>Generated</span>
                  <span>Excel</span>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="analytics" className="bg-white dark:bg-emerald-900/40 p-6 rounded-lg shadow-sm border border-emerald-200 dark:border-emerald-800">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-emerald-900 dark:text-emerald-100 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="20" x2="18" y2="10"></line>
                <line x1="12" y1="20" x2="12" y2="4"></line>
                <line x1="6" y1="20" x2="6" y2="14"></line>
              </svg>
              Data Analytics
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-emerald-50 dark:bg-emerald-900/60 p-4 rounded-lg">
                <h4 className="font-medium text-emerald-900 dark:text-emerald-100">User Growth</h4>
                <p className="text-sm text-emerald-700 dark:text-emerald-300">Trend analysis</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400">
                  <span>Daily</span>
                  <span>Weekly</span>
                  <span>Monthly</span>
                </div>
              </div>
              <div className="bg-emerald-50 dark:bg-emerald-900/60 p-4 rounded-lg">
                <h4 className="font-medium text-emerald-900 dark:text-emerald-100">Revenue Trends</h4>
                <p className="text-sm text-emerald-700 dark:text-emerald-300">Financial analysis</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400">
                  <span>Daily</span>
                  <span>Weekly</span>
                  <span>Monthly</span>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="settings" className="bg-white dark:bg-emerald-900/40 p-6 rounded-lg shadow-sm border border-emerald-200 dark:border-emerald-800">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-emerald-900 dark:text-emerald-100 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
              </svg>
              Dashboard Settings
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-emerald-50 dark:bg-emerald-900/60 p-4 rounded-lg">
                <h4 className="font-medium text-emerald-900 dark:text-emerald-100">Display Options</h4>
                <p className="text-sm text-emerald-700 dark:text-emerald-300">Visual preferences</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400">
                  <span>Dark Mode</span>
                  <span>Compact</span>
                </div>
              </div>
              <div className="bg-emerald-50 dark:bg-emerald-900/60 p-4 rounded-lg">
                <h4 className="font-medium text-emerald-900 dark:text-emerald-100">Data Refresh</h4>
                <p className="text-sm text-emerald-700 dark:text-emerald-300">Update frequency</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400">
                  <span>Auto</span>
                  <span>Manual</span>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TabExample10; 