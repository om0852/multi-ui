"use client";

import { useState } from "react";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
} from "../tsx/Drawer_8";

export default function Example_8() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8 bg-gradient-to-br from-slate-900 to-gray-900 min-h-[400px] max-w-5xl mx-auto">
      <div className="space-y-3 sm:space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-white text-center">
          Dashboard Drawer Example
          <span className="inline-block ml-2">📊</span>
        </h2>
        <p className="text-gray-300 text-center text-sm sm:text-base">
          A professional dashboard-style drawer
        </p>
      </div>

      <div className="flex items-center justify-center">
        <Drawer>
          <DrawerTrigger onClick={() => setIsDrawerOpen(true)}>
            <span className="text-sm sm:text-base">Open Dashboard</span>
          </DrawerTrigger>
          <DrawerContent
            isOpen={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
            position="left"
            className="w-[85%] sm:w-[65%] md:w-[320px] max-h-screen overflow-y-auto z-[100]"
          >
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-700">
                <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                  </svg>
                </div>
                <h2 className="text-lg sm:text-xl text-white font-semibold">Dashboard</h2>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center space-x-3 p-2 sm:p-3 rounded hover:bg-slate-700/50 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                  <span className="text-sm sm:text-base text-white">Home</span>
                </div>
                
                <div className="flex items-center space-x-3 p-2 sm:p-3 rounded hover:bg-slate-700/50 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm sm:text-base text-white">Profile</span>
                </div>
                
                <div className="flex items-center space-x-3 p-2 sm:p-3 rounded hover:bg-slate-700/50 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm sm:text-base text-white">Messages</span>
                </div>
                
                <div className="flex items-center space-x-3 p-2 sm:p-3 rounded hover:bg-slate-700/50 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm sm:text-base text-white">Settings</span>
                </div>
              </div>

              <div className="mt-auto pt-4 sm:pt-6 border-t border-slate-700">
                <button
                  onClick={() => setIsDrawerOpen(false)}
                  className="w-full flex items-center justify-center space-x-2 p-2 sm:p-3 bg-slate-700 hover:bg-slate-600 text-white rounded transition-colors text-sm sm:text-base"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" />
                  </svg>
                  <span>Close Menu</span>
                </button>
              </div>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
}
