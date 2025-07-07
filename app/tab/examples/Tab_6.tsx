"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../tsx/Tab_6";

const TabExample6 = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
      <h2 className="text-2xl font-bold mb-6 text-purple-800 dark:text-purple-200">Music Player</h2>
      
      <Tabs defaultValue="playlist" className="w-full">
        <TabsList activeTab="playlist" setActiveTab={() => {}}>
          <TabsTrigger value="playlist">Playlist</TabsTrigger>
          <TabsTrigger value="queue">Queue</TabsTrigger>
          <TabsTrigger value="lyrics">Lyrics</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        
        <TabsContent value="playlist" className="bg-white dark:bg-purple-900/40 p-6 rounded-lg shadow-sm border border-purple-200 dark:border-purple-800">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-purple-900 dark:text-purple-100 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15V4"></path>
                <path d="M18.5 18c2.5 0 4.5-2 4.5-4.5S21 9 18.5 9s-4.5 2-4.5 4.5 2 4.5 4.5 4.5z"></path>
                <path d="M9 19V5"></path>
                <path d="M6.5 18c2.5 0 4.5-2 4.5-4.5S9 9 6.5 9 2 11 2 13.5s2 4.5 4.5 4.5z"></path>
              </svg>
              Current Playlist
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-purple-50 dark:bg-purple-900/60 p-4 rounded-lg">
                <h4 className="font-medium text-purple-900 dark:text-purple-100">Summer Vibes</h4>
                <p className="text-sm text-purple-700 dark:text-purple-300">15 tracks</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-purple-600 dark:text-purple-400">
                  <span>Duration: 1h 15m</span>
                  <span>Genre: Pop</span>
                </div>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/60 p-4 rounded-lg">
                <h4 className="font-medium text-purple-900 dark:text-purple-100">Workout Mix</h4>
                <p className="text-sm text-purple-700 dark:text-purple-300">20 tracks</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-purple-600 dark:text-purple-400">
                  <span>Duration: 1h 45m</span>
                  <span>Genre: EDM</span>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="queue" className="bg-white dark:bg-purple-900/40 p-6 rounded-lg shadow-sm border border-purple-200 dark:border-purple-800">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-purple-900 dark:text-purple-100 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="3" y1="9" x2="21" y2="9"></line>
                <line x1="9" y1="21" x2="9" y2="9"></line>
              </svg>
              Play Queue
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-purple-50 dark:bg-purple-900/60 p-4 rounded-lg">
                <h4 className="font-medium text-purple-900 dark:text-purple-100">Next Up</h4>
                <p className="text-sm text-purple-700 dark:text-purple-300">3 tracks</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-purple-600 dark:text-purple-400">
                  <span>Duration: 12m</span>
                  <span>Auto-play: On</span>
                </div>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/60 p-4 rounded-lg">
                <h4 className="font-medium text-purple-900 dark:text-purple-100">Recently Played</h4>
                <p className="text-sm text-purple-700 dark:text-purple-300">5 tracks</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-purple-600 dark:text-purple-400">
                  <span>Duration: 18m</span>
                  <span>History: Enabled</span>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="lyrics" className="bg-white dark:bg-purple-900/40 p-6 rounded-lg shadow-sm border border-purple-200 dark:border-purple-800">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-purple-900 dark:text-purple-100 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
              Lyrics View
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-purple-50 dark:bg-purple-900/60 p-4 rounded-lg">
                <h4 className="font-medium text-purple-900 dark:text-purple-100">Current Song</h4>
                <p className="text-sm text-purple-700 dark:text-purple-300">Synced lyrics</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-purple-600 dark:text-purple-400">
                  <span>Auto-scroll: On</span>
                  <span>Font: Medium</span>
                </div>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/60 p-4 rounded-lg">
                <h4 className="font-medium text-purple-900 dark:text-purple-100">Translation</h4>
                <p className="text-sm text-purple-700 dark:text-purple-300">Available</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-purple-600 dark:text-purple-400">
                  <span>Language: English</span>
                  <span>Style: Simple</span>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="settings" className="bg-white dark:bg-purple-900/40 p-6 rounded-lg shadow-sm border border-purple-200 dark:border-purple-800">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-purple-900 dark:text-purple-100 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
              </svg>
              Player Settings
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-purple-50 dark:bg-purple-900/60 p-4 rounded-lg">
                <h4 className="font-medium text-purple-900 dark:text-purple-100">Audio</h4>
                <p className="text-sm text-purple-700 dark:text-purple-300">Quality settings</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-purple-600 dark:text-purple-400">
                  <span>Quality: High</span>
                  <span>Format: MP3</span>
                </div>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/60 p-4 rounded-lg">
                <h4 className="font-medium text-purple-900 dark:text-purple-100">Playback</h4>
                <p className="text-sm text-purple-700 dark:text-purple-300">Behavior</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-purple-600 dark:text-purple-400">
                  <span>Crossfade: 5s</span>
                  <span>Repeat: All</span>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TabExample6; 