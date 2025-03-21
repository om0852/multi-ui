"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../_components/Tab_32";

const TabExample32 = () => {
  return (
    <div className="w-full max-w-2xl mx-auto p-4 bg-zinc-50 dark:bg-zinc-900/20 rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-zinc-800 dark:text-zinc-200">Help Center</h2>
      
      <Tabs defaultValue="faq" className="w-full">
        <TabsList activeTab="faq" setActiveTab={() => {}}>
          <TabsTrigger value="faq">FAQ</TabsTrigger>
          <TabsTrigger value="guides">Guides</TabsTrigger>
          <TabsTrigger value="contact">Contact</TabsTrigger>
        </TabsList>
        
        <TabsContent value="faq" className="bg-white dark:bg-zinc-900/40 p-4 rounded-lg shadow-sm border border-zinc-200 dark:border-zinc-800">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <input type="text" placeholder="Search FAQs..." className="w-full px-3 py-2 rounded-md border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900/60 text-zinc-900 dark:text-zinc-100" />
            </div>
            <div className="space-y-2">
              <div className="p-4 bg-zinc-50 dark:bg-zinc-900/60 rounded-lg">
                <h3 className="font-medium text-zinc-900 dark:text-zinc-100 mb-2">How do I reset my password?</h3>
                <p className="text-zinc-600 dark:text-zinc-400">Click on the Forgot Password link on the login page and follow the instructions sent to your email.</p>
              </div>
              <div className="p-4 bg-zinc-50 dark:bg-zinc-900/60 rounded-lg">
                <h3 className="font-medium text-zinc-900 dark:text-zinc-100 mb-2">How do I upgrade my account?</h3>
                <p className="text-zinc-600 dark:text-zinc-400">Go to Settings &gt; Subscription and choose your preferred plan.</p>
              </div>
              <div className="p-4 bg-zinc-50 dark:bg-zinc-900/60 rounded-lg">
                <h3 className="font-medium text-zinc-900 dark:text-zinc-100 mb-2">Can I cancel my subscription?</h3>
                <p className="text-zinc-600 dark:text-zinc-400">Yes, you can cancel your subscription at any time from your account settings.</p>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="guides" className="bg-white dark:bg-zinc-900/40 p-4 rounded-lg shadow-sm border border-zinc-200 dark:border-zinc-800">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-zinc-50 dark:bg-zinc-900/60 rounded-lg">
                <div className="text-2xl mb-2">📚</div>
                <h3 className="font-medium text-zinc-900 dark:text-zinc-100">Getting Started</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">Learn the basics of our platform</p>
              </div>
              <div className="p-4 bg-zinc-50 dark:bg-zinc-900/60 rounded-lg">
                <div className="text-2xl mb-2">🎯</div>
                <h3 className="font-medium text-zinc-900 dark:text-zinc-100">Advanced Features</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">Master advanced techniques</p>
              </div>
              <div className="p-4 bg-zinc-50 dark:bg-zinc-900/60 rounded-lg">
                <div className="text-2xl mb-2">🔧</div>
                <h3 className="font-medium text-zinc-900 dark:text-zinc-100">Troubleshooting</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">Common issues and fixes</p>
              </div>
              <div className="p-4 bg-zinc-50 dark:bg-zinc-900/60 rounded-lg">
                <div className="text-2xl mb-2">📱</div>
                <h3 className="font-medium text-zinc-900 dark:text-zinc-100">Mobile Guide</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">Using our mobile app</p>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="contact" className="bg-white dark:bg-zinc-900/40 p-4 rounded-lg shadow-sm border border-zinc-200 dark:border-zinc-800">
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Name</label>
              <input type="text" className="w-full px-3 py-2 rounded-md border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900/60 text-zinc-900 dark:text-zinc-100" placeholder="Enter your name" />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Email</label>
              <input type="email" className="w-full px-3 py-2 rounded-md border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900/60 text-zinc-900 dark:text-zinc-100" placeholder="Enter your email" />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Message</label>
              <textarea className="w-full px-3 py-2 rounded-md border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900/60 text-zinc-900 dark:text-zinc-100" rows={4} placeholder="How can we help?"></textarea>
            </div>
            <button className="w-full px-4 py-2 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-lg">Send Message</button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TabExample32; 