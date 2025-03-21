"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../_components/Tab_26";

const TabExample26 = () => {
  return (
    <div className="w-full max-w-2xl mx-auto p-4 bg-rose-50 dark:bg-rose-900/20 rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-rose-800 dark:text-rose-200">Form Builder</h2>
      
      <Tabs defaultValue="design" className="w-full">
        <TabsList activeTab="design" setActiveTab={() => {}}>
          <TabsTrigger value="design">Design</TabsTrigger>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        
        <TabsContent value="design" className="bg-white dark:bg-rose-900/40 p-4 rounded-lg shadow-sm border border-rose-200 dark:border-rose-800">
          <div className="space-y-4">
            <div className="bg-rose-50 dark:bg-rose-900/60 p-4 rounded-lg">
              <h3 className="font-medium text-rose-900 dark:text-rose-100 mb-2">Form Elements</h3>
              <div className="grid grid-cols-2 gap-2">
                <button className="p-2 text-sm rounded-md bg-white dark:bg-rose-800 text-rose-700 dark:text-rose-300 hover:bg-rose-100 dark:hover:bg-rose-700">
                  Text Input
                </button>
                <button className="p-2 text-sm rounded-md bg-white dark:bg-rose-800 text-rose-700 dark:text-rose-300 hover:bg-rose-100 dark:hover:bg-rose-700">
                  Checkbox
                </button>
                <button className="p-2 text-sm rounded-md bg-white dark:bg-rose-800 text-rose-700 dark:text-rose-300 hover:bg-rose-100 dark:hover:bg-rose-700">
                  Radio Button
                </button>
                <button className="p-2 text-sm rounded-md bg-white dark:bg-rose-800 text-rose-700 dark:text-rose-300 hover:bg-rose-100 dark:hover:bg-rose-700">
                  Dropdown
                </button>
              </div>
            </div>
            <div className="bg-rose-50 dark:bg-rose-900/60 p-4 rounded-lg">
              <h3 className="font-medium text-rose-900 dark:text-rose-100 mb-2">Form Preview</h3>
              <div className="space-y-2">
                <div className="p-2 bg-white dark:bg-rose-800 rounded-md">
                  <div className="h-8 bg-rose-100 dark:bg-rose-700 rounded"></div>
                </div>
                <div className="p-2 bg-white dark:bg-rose-800 rounded-md">
                  <div className="h-8 bg-rose-100 dark:bg-rose-700 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="preview" className="bg-white dark:bg-rose-900/40 p-4 rounded-lg shadow-sm border border-rose-200 dark:border-rose-800">
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-rose-700 dark:text-rose-300">Full Name</label>
              <input type="text" className="w-full px-3 py-2 rounded-md border border-rose-200 dark:border-rose-700 bg-white dark:bg-rose-900/60 text-rose-900 dark:text-rose-100" placeholder="Enter your name" />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-rose-700 dark:text-rose-300">Email</label>
              <input type="email" className="w-full px-3 py-2 rounded-md border border-rose-200 dark:border-rose-700 bg-white dark:bg-rose-900/60 text-rose-900 dark:text-rose-100" placeholder="Enter your email" />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-rose-700 dark:text-rose-300">Message</label>
              <textarea className="w-full px-3 py-2 rounded-md border border-rose-200 dark:border-rose-700 bg-white dark:bg-rose-900/60 text-rose-900 dark:text-rose-100" rows={4} placeholder="Enter your message"></textarea>
            </div>
            <button className="w-full px-4 py-2 rounded-md bg-rose-500 text-white">Submit</button>
          </div>
        </TabsContent>
        
        <TabsContent value="settings" className="bg-white dark:bg-rose-900/40 p-4 rounded-lg shadow-sm border border-rose-200 dark:border-rose-800">
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-rose-700 dark:text-rose-300">Form Title</label>
              <input type="text" className="w-full px-3 py-2 rounded-md border border-rose-200 dark:border-rose-700 bg-white dark:bg-rose-900/60 text-rose-900 dark:text-rose-100" placeholder="Enter form title" />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-rose-700 dark:text-rose-300">Submit Button Text</label>
              <input type="text" className="w-full px-3 py-2 rounded-md border border-rose-200 dark:border-rose-700 bg-white dark:bg-rose-900/60 text-rose-900 dark:text-rose-100" placeholder="Enter button text" />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-rose-900 dark:text-rose-100">Email Notifications</h3>
                <p className="text-sm text-rose-600 dark:text-rose-400">Send form submissions to email</p>
              </div>
              <button className="px-3 py-1 text-sm rounded-md bg-rose-100 dark:bg-rose-800 text-rose-700 dark:text-rose-300">Enable</button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TabExample26; 