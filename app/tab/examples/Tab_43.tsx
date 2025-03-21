"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../_components/Tab_43";

const TabExample43 = () => {
  return (
    <div className="w-full max-w-2xl mx-auto p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-indigo-800 dark:text-indigo-200">Project Timeline</h2>
      
      <Tabs defaultValue="timeline" className="w-full">
        <TabsList activeTab="timeline" setActiveTab={() => {}}>
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
          <TabsTrigger value="milestones">Milestones</TabsTrigger>
          <TabsTrigger value="team">Team</TabsTrigger>
        </TabsList>
        
        <TabsContent value="timeline" className="bg-white dark:bg-indigo-900/40 p-4 rounded-lg shadow-sm border border-indigo-200 dark:border-indigo-800">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-indigo-900 dark:text-indigo-100">Project Progress</h3>
              <div className="flex items-center gap-2">
                <span className="text-sm text-indigo-600 dark:text-indigo-400">75% Complete</span>
                <div className="w-32 h-2 bg-indigo-100 dark:bg-indigo-800 rounded-full">
                  <div className="w-3/4 h-full bg-indigo-500 rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="relative pl-6 pb-4 border-l-2 border-indigo-200 dark:border-indigo-700">
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-indigo-500"></div>
                <div className="space-y-1">
                  <h4 className="font-medium text-indigo-900 dark:text-indigo-100">Project Kickoff</h4>
                  <p className="text-sm text-indigo-600 dark:text-indigo-400">Initial planning and team setup</p>
                  <p className="text-xs text-indigo-500">March 1, 2024</p>
                </div>
              </div>
              <div className="relative pl-6 pb-4 border-l-2 border-indigo-200 dark:border-indigo-700">
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-indigo-500"></div>
                <div className="space-y-1">
                  <h4 className="font-medium text-indigo-900 dark:text-indigo-100">Design Phase</h4>
                  <p className="text-sm text-indigo-600 dark:text-indigo-400">UI/UX design and prototyping</p>
                  <p className="text-xs text-indigo-500">March 15, 2024</p>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="milestones" className="bg-white dark:bg-indigo-900/40 p-4 rounded-lg shadow-sm border border-indigo-200 dark:border-indigo-800">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-indigo-900 dark:text-indigo-100">Key Milestones</h3>
              <button className="px-3 py-1 text-sm rounded-md bg-indigo-100 dark:bg-indigo-800 text-indigo-700 dark:text-indigo-300">
                Add Milestone
              </button>
            </div>
            <div className="space-y-2">
              <div className="p-3 bg-indigo-50 dark:bg-indigo-900/60 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-indigo-900 dark:text-indigo-100">Beta Launch</h4>
                    <p className="text-sm text-indigo-600 dark:text-indigo-400">April 1, 2024</p>
                  </div>
                  <span className="px-2 py-1 text-xs rounded-full bg-indigo-100 dark:bg-indigo-800 text-indigo-700 dark:text-indigo-300">
                    Upcoming
                  </span>
                </div>
              </div>
              <div className="p-3 bg-indigo-50 dark:bg-indigo-900/60 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-indigo-900 dark:text-indigo-100">Final Release</h4>
                    <p className="text-sm text-indigo-600 dark:text-indigo-400">May 1, 2024</p>
                  </div>
                  <span className="px-2 py-1 text-xs rounded-full bg-indigo-100 dark:bg-indigo-800 text-indigo-700 dark:text-indigo-300">
                    Planned
                  </span>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="team" className="bg-white dark:bg-indigo-900/40 p-4 rounded-lg shadow-sm border border-indigo-200 dark:border-indigo-800">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-indigo-900 dark:text-indigo-100">Team Members</h3>
              <button className="px-3 py-1 text-sm rounded-md bg-indigo-100 dark:bg-indigo-800 text-indigo-700 dark:text-indigo-300">
                Invite Member
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-indigo-50 dark:bg-indigo-900/60 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-indigo-200 dark:bg-indigo-700 flex items-center justify-center">
                    <span className="text-indigo-600 dark:text-indigo-300">JD</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-indigo-900 dark:text-indigo-100">John Doe</h4>
                    <p className="text-sm text-indigo-600 dark:text-indigo-400">Project Lead</p>
                  </div>
                </div>
              </div>
              <div className="p-3 bg-indigo-50 dark:bg-indigo-900/60 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-indigo-200 dark:bg-indigo-700 flex items-center justify-center">
                    <span className="text-indigo-600 dark:text-indigo-300">AS</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-indigo-900 dark:text-indigo-100">Alice Smith</h4>
                    <p className="text-sm text-indigo-600 dark:text-indigo-400">Designer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TabExample43; 