"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../_components/Tab_24";

const TabExample24 = () => {
  return (
    <div className="w-full max-w-2xl mx-auto p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-blue-800 dark:text-blue-200">Chat</h2>
      
      <Tabs defaultValue="messages" className="w-full">
        <TabsList activeTab="messages" setActiveTab={() => {}}>
          <TabsTrigger value="messages">Messages</TabsTrigger>
          <TabsTrigger value="contacts">Contacts</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        
        <TabsContent value="messages" className="bg-white dark:bg-blue-900/40 p-4 rounded-lg shadow-sm border border-blue-200 dark:border-blue-800">
          <div className="space-y-4">
            <div className="space-y-4 h-[400px] overflow-y-auto">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-800 flex items-center justify-center">
                  <span className="text-blue-600 dark:text-blue-300">JD</span>
                </div>
                <div className="flex-1">
                  <div className="bg-blue-100 dark:bg-blue-800 rounded-lg p-3">
                    <p className="text-blue-900 dark:text-blue-100">Hey, how are you?</p>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3 flex-row-reverse">
                <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-800 flex items-center justify-center">
                  <span className="text-blue-600 dark:text-blue-300">ME</span>
                </div>
                <div className="flex-1">
                  <div className="bg-blue-100 dark:bg-blue-800 rounded-lg p-3">
                    <p className="text-blue-900 dark:text-blue-100">I&apos;m doing great, thanks!</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <input type="text" placeholder="Type a message..." className="flex-1 px-3 py-2 rounded-md border border-blue-200 dark:border-blue-700 bg-white dark:bg-blue-900/60 text-blue-900 dark:text-blue-100" />
              <button className="px-4 py-2 rounded-md bg-blue-500 text-white">Send</button>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="contacts" className="bg-white dark:bg-blue-900/40 p-4 rounded-lg shadow-sm border border-blue-200 dark:border-blue-800">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <input type="text" placeholder="Search contacts..." className="w-full px-3 py-2 rounded-md border border-blue-200 dark:border-blue-700 bg-white dark:bg-blue-900/60 text-blue-900 dark:text-blue-100" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-3 p-2 hover:bg-blue-50 dark:hover:bg-blue-900/60 rounded-lg">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-800 flex items-center justify-center">
                  <span className="text-blue-600 dark:text-blue-300">JD</span>
                </div>
                <div>
                  <h3 className="font-medium text-blue-900 dark:text-blue-100">John Doe</h3>
                  <p className="text-sm text-blue-600 dark:text-blue-400">Online</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-2 hover:bg-blue-50 dark:hover:bg-blue-900/60 rounded-lg">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-800 flex items-center justify-center">
                  <span className="text-blue-600 dark:text-blue-300">AS</span>
                </div>
                <div>
                  <h3 className="font-medium text-blue-900 dark:text-blue-100">Alice Smith</h3>
                  <p className="text-sm text-blue-600 dark:text-blue-400">Offline</p>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="settings" className="bg-white dark:bg-blue-900/40 p-4 rounded-lg shadow-sm border border-blue-200 dark:border-blue-800">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-blue-900 dark:text-blue-100">Notifications</h3>
                <p className="text-sm text-blue-600 dark:text-blue-400">Message notifications</p>
              </div>
              <button className="px-3 py-1 text-sm rounded-md bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-300">Enable</button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-blue-900 dark:text-blue-100">Dark Mode</h3>
                <p className="text-sm text-blue-600 dark:text-blue-400">Toggle dark theme</p>
              </div>
              <button className="px-3 py-1 text-sm rounded-md bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-300">On</button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TabExample24; 