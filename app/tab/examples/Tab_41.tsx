"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../_components/Tab_41";

const TabExample41 = () => {
  return (
    <div className="w-full max-w-2xl mx-auto p-4 bg-teal-50 dark:bg-teal-900/20 rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-teal-800 dark:text-teal-200">Blog Post</h2>
      
      <Tabs defaultValue="content" className="w-full">
        <TabsList activeTab="content" setActiveTab={() => {}}>
          <TabsTrigger value="content">Content</TabsTrigger>
          <TabsTrigger value="comments">Comments</TabsTrigger>
          <TabsTrigger value="related">Related</TabsTrigger>
        </TabsList>
        
        <TabsContent value="content" className="bg-white dark:bg-teal-900/40 p-4 rounded-lg shadow-sm border border-teal-200 dark:border-teal-800">
          <div className="space-y-4">
            <div className="aspect-video bg-teal-100 dark:bg-teal-800 rounded-lg flex items-center justify-center">
              <span className="text-4xl">📝</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-teal-900 dark:text-teal-100">Getting Started with React</h3>
              <div className="flex items-center gap-2 mt-2 text-sm text-teal-600 dark:text-teal-400">
                <span>By John Doe</span>
                <span>•</span>
                <span>5 min read</span>
                <span>•</span>
                <span>March 15, 2024</span>
              </div>
            </div>
            <div className="prose prose-teal dark:prose-invert">
              <p className="text-teal-700 dark:text-teal-300">
                React is a popular JavaScript library for building user interfaces. In this guide, we&apos;ll explore the fundamentals of React and learn how to create your first component.
              </p>
              <h4 className="text-lg font-semibold text-teal-900 dark:text-teal-100 mt-4">Prerequisites</h4>
              <ul className="list-disc list-inside text-teal-700 dark:text-teal-300">
                <li>Basic JavaScript knowledge</li>
                <li>Node.js installed</li>
                <li>Code editor</li>
              </ul>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="comments" className="bg-white dark:bg-teal-900/40 p-4 rounded-lg shadow-sm border border-teal-200 dark:border-teal-800">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-teal-900 dark:text-teal-100">Comments (3)</h3>
              <button className="px-3 py-1 text-sm rounded-md bg-teal-100 dark:bg-teal-800 text-teal-700 dark:text-teal-300">
                Add Comment
              </button>
            </div>
            <div className="space-y-4">
              <div className="p-3 bg-teal-50 dark:bg-teal-900/60 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-teal-200 dark:bg-teal-700 flex items-center justify-center">
                    <span className="text-teal-600 dark:text-teal-300">AS</span>
                  </div>
                  <div>
                    <p className="font-medium text-teal-900 dark:text-teal-100">Alice Smith</p>
                    <p className="text-xs text-teal-600 dark:text-teal-400">2 hours ago</p>
                  </div>
                </div>
                <p className="text-teal-700 dark:text-teal-300">Great article! Very helpful for beginners.</p>
              </div>
              <div className="p-3 bg-teal-50 dark:bg-teal-900/60 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-teal-200 dark:bg-teal-700 flex items-center justify-center">
                    <span className="text-teal-600 dark:text-teal-300">BK</span>
                  </div>
                  <div>
                    <p className="font-medium text-teal-900 dark:text-teal-100">Bob King</p>
                    <p className="text-xs text-teal-600 dark:text-teal-400">5 hours ago</p>
                  </div>
                </div>
                <p className="text-teal-700 dark:text-teal-300">Could you add more examples?</p>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="related" className="bg-white dark:bg-teal-900/40 p-4 rounded-lg shadow-sm border border-teal-200 dark:border-teal-800">
          <div className="space-y-4">
            <h3 className="font-medium text-teal-900 dark:text-teal-100">Related Posts</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-teal-50 dark:bg-teal-900/60 rounded-lg">
                <div className="aspect-video bg-teal-100 dark:bg-teal-800 rounded flex items-center justify-center mb-2">
                  <span className="text-2xl">📱</span>
                </div>
                <h4 className="font-medium text-teal-900 dark:text-teal-100">React Native Basics</h4>
                <p className="text-sm text-teal-600 dark:text-teal-400">Mobile development with React</p>
              </div>
              <div className="p-3 bg-teal-50 dark:bg-teal-900/60 rounded-lg">
                <div className="aspect-video bg-teal-100 dark:bg-teal-800 rounded flex items-center justify-center mb-2">
                  <span className="text-2xl">⚛️</span>
                </div>
                <h4 className="font-medium text-teal-900 dark:text-teal-100">Advanced React Hooks</h4>
                <p className="text-sm text-teal-600 dark:text-teal-400">Deep dive into React Hooks</p>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TabExample41; 