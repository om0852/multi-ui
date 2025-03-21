"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../_components/Tab_36";

const TabExample36 = () => {
  return (
    <div className="w-full max-w-2xl mx-auto p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-purple-800 dark:text-purple-200">Email Client</h2>
      
      <Tabs defaultValue="inbox" className="w-full">
        <TabsList activeTab="inbox" setActiveTab={() => {}}>
          <TabsTrigger value="inbox">Inbox</TabsTrigger>
          <TabsTrigger value="sent">Sent</TabsTrigger>
          <TabsTrigger value="drafts">Drafts</TabsTrigger>
        </TabsList>
        
        <TabsContent value="inbox" className="bg-white dark:bg-purple-900/40 p-4 rounded-lg shadow-sm border border-purple-200 dark:border-purple-800">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <input type="text" placeholder="Search emails..." className="w-full px-3 py-2 rounded-md border border-purple-200 dark:border-purple-700 bg-white dark:bg-purple-900/60 text-purple-900 dark:text-purple-100" />
            </div>
            <div className="space-y-2">
              <div className="p-3 bg-purple-50 dark:bg-purple-900/60 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="rounded border-purple-300 dark:border-purple-700" />
                    <div>
                      <h3 className="font-medium text-purple-900 dark:text-purple-100">Team Meeting Updates</h3>
                      <p className="text-sm text-purple-600 dark:text-purple-400">Meeting notes and action items from today&apos;s...</p>
                    </div>
                  </div>
                  <span className="text-xs text-purple-500">10:30 AM</span>
                </div>
              </div>
              <div className="p-3 bg-purple-50 dark:bg-purple-900/60 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="rounded border-purple-300 dark:border-purple-700" />
                    <div>
                      <h3 className="font-medium text-purple-900 dark:text-purple-100">Project Deadline Reminder</h3>
                      <p className="text-sm text-purple-600 dark:text-purple-400">The project deadline is approaching...</p>
                    </div>
                  </div>
                  <span className="text-xs text-purple-500">Yesterday</span>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="sent" className="bg-white dark:bg-purple-900/40 p-4 rounded-lg shadow-sm border border-purple-200 dark:border-purple-800">
          <div className="space-y-2">
            <div className="p-3 bg-purple-50 dark:bg-purple-900/60 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-purple-900 dark:text-purple-100">Re: Design Review</h3>
                  <p className="text-sm text-purple-600 dark:text-purple-400">To: design.team@example.com</p>
                </div>
                <span className="text-xs text-purple-500">2:15 PM</span>
              </div>
            </div>
            <div className="p-3 bg-purple-50 dark:bg-purple-900/60 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-purple-900 dark:text-purple-100">Weekly Report</h3>
                  <p className="text-sm text-purple-600 dark:text-purple-400">To: manager@example.com</p>
                </div>
                <span className="text-xs text-purple-500">Monday</span>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="drafts" className="bg-white dark:bg-purple-900/40 p-4 rounded-lg shadow-sm border border-purple-200 dark:border-purple-800">
          <div className="space-y-4">
            <div className="p-3 bg-purple-50 dark:bg-purple-900/60 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-purple-900 dark:text-purple-100">Project Proposal</h3>
                  <p className="text-sm text-purple-600 dark:text-purple-400">Draft saved 30 minutes ago</p>
                </div>
                <div className="flex items-center gap-2">
                  <button className="text-purple-600 dark:text-purple-400">✏️</button>
                  <button className="text-purple-600 dark:text-purple-400">🗑️</button>
                </div>
              </div>
            </div>
            <button className="w-full px-4 py-2 bg-purple-100 dark:bg-purple-800 text-purple-700 dark:text-purple-300 rounded-lg">
              Compose New Email
            </button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TabExample36; 