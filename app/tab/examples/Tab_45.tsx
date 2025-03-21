"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../_components/Tab_45";

const TabExample45 = () => {
  return (
    <div className="w-full max-w-2xl mx-auto p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-emerald-800 dark:text-emerald-200">Chat</h2>
      
      <Tabs defaultValue="messages" className="w-full">
        <TabsList activeTab="messages" setActiveTab={() => {}}>
          <TabsTrigger value="messages">Messages</TabsTrigger>
          <TabsTrigger value="contacts">Contacts</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        
        <TabsContent value="messages" className="bg-white dark:bg-emerald-900/40 p-4 rounded-lg shadow-sm border border-emerald-200 dark:border-emerald-800">
          <div className="space-y-4">
            <div className="flex items-center gap-2 pb-3 border-b border-emerald-200 dark:border-emerald-700">
              <div className="w-10 h-10 rounded-full bg-emerald-200 dark:bg-emerald-700 flex items-center justify-center">
                AS
              </div>
              <div>
                <p className="font-medium text-emerald-900 dark:text-emerald-100">Alice Smith</p>
                <p className="text-sm text-emerald-600 dark:text-emerald-400">Online</p>
              </div>
            </div>
            
            <div className="space-y-4 min-h-[300px]">
              <div className="flex gap-2">
                <div className="w-8 h-8 rounded-full bg-emerald-200 dark:bg-emerald-700 flex items-center justify-center text-sm">
                  AS
                </div>
                <div className="bg-emerald-100 dark:bg-emerald-800 p-3 rounded-lg rounded-tl-none max-w-[80%]">
                  <p className="text-emerald-900 dark:text-emerald-100">Hey! How&apos;s the project going?</p>
                  <p className="text-xs text-emerald-600 dark:text-emerald-400 mt-1">10:30 AM</p>
                </div>
              </div>
              
              <div className="flex gap-2 justify-end">
                <div className="bg-emerald-600 dark:bg-emerald-700 p-3 rounded-lg rounded-tr-none max-w-[80%]">
                  <p className="text-white">Making good progress! Just finished the main features.</p>
                  <p className="text-xs text-emerald-200 mt-1">10:32 AM</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-white text-sm">
                  You
                </div>
              </div>
            </div>
            
            <div className="flex gap-2 mt-4">
              <input 
                type="text" 
                placeholder="Type a message..."
                className="flex-1 px-4 py-2 rounded-full border border-emerald-200 dark:border-emerald-700 bg-white dark:bg-emerald-900/60 text-emerald-900 dark:text-emerald-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <button className="p-2 rounded-full bg-emerald-600 text-white hover:bg-emerald-700">
                📤
              </button>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="contacts" className="bg-white dark:bg-emerald-900/40 p-4 rounded-lg shadow-sm border border-emerald-200 dark:border-emerald-800">
          <div className="space-y-4">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search contacts..."
                className="w-full px-4 py-2 pl-10 rounded-lg border border-emerald-200 dark:border-emerald-700 bg-white dark:bg-emerald-900/60 text-emerald-900 dark:text-emerald-100"
              />
              <span className="absolute left-3 top-2.5">🔍</span>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-800/60">
                <div className="w-10 h-10 rounded-full bg-emerald-200 dark:bg-emerald-700 flex items-center justify-center">
                  AS
                </div>
                <div>
                  <p className="font-medium text-emerald-900 dark:text-emerald-100">Alice Smith</p>
                  <p className="text-sm text-emerald-600 dark:text-emerald-400">Online</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-800/60">
                <div className="w-10 h-10 rounded-full bg-emerald-200 dark:bg-emerald-700 flex items-center justify-center">
                  JD
                </div>
                <div>
                  <p className="font-medium text-emerald-900 dark:text-emerald-100">John Doe</p>
                  <p className="text-sm text-emerald-600 dark:text-emerald-400">Last seen 5m ago</p>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="settings" className="bg-white dark:bg-emerald-900/40 p-4 rounded-lg shadow-sm border border-emerald-200 dark:border-emerald-800">
          <div className="space-y-4">
            <h3 className="font-medium text-emerald-900 dark:text-emerald-100">Chat Settings</h3>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-emerald-900 dark:text-emerald-100">Notifications</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" checked />
                  <div className="w-11 h-6 bg-emerald-600 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                </label>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-emerald-900 dark:text-emerald-100">Sound</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" checked />
                  <div className="w-11 h-6 bg-emerald-600 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                </label>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-emerald-900 dark:text-emerald-100">Read Receipts</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" checked />
                  <div className="w-11 h-6 bg-emerald-600 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                </label>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TabExample45; 