"use client";

import { useState } from "react";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
} from "../_components/Drawer_2";

export default function Example_2() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8 bg-gradient-to-br from-gray-50 to-gray-100 min-h-[400px] max-w-5xl mx-auto">
      <div className="space-y-3 sm:space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 text-center">
          Neumorphic Drawer Example
          <span className="inline-block ml-2">🗂️</span>
        </h2>
        <p className="text-gray-600 text-center text-sm sm:text-base">
          Experience soft UI design with smooth animations
        </p>
      </div>

      <div className="flex items-center justify-center">
        <Drawer>
          <DrawerTrigger onClick={() => setIsDrawerOpen(true)}>
            <span className="text-sm sm:text-base">Open Drawer</span>
          </DrawerTrigger>
          <DrawerContent
            isOpen={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
            animationType="slideRight"
            position="right"
            className="w-[85%] sm:w-[65%] md:w-[380px] max-h-screen overflow-y-auto z-[100]"
          >
            <div className="space-y-4 sm:space-y-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-200">
                  Neumorphic Design
                </h2>
                <p className="mt-2 text-sm sm:text-base text-gray-600 dark:text-gray-400">
                  Experience our soft UI design with smooth animations and elegant transitions.
                </p>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                <div className="p-3 sm:p-4 rounded-xl bg-gray-100 dark:bg-gray-800 shadow-[inset_-2px_-2px_6px_rgba(255,255,255,0.7),inset_2px_2px_6px_rgba(0,0,0,0.1)] dark:shadow-[inset_-2px_-2px_6px_rgba(255,255,255,0.1),inset_2px_2px_6px_rgba(0,0,0,0.3)]">
                  <h3 className="font-medium text-gray-800 dark:text-gray-200 text-sm sm:text-base">Soft Shadows</h3>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Beautiful neumorphic shadows create depth</p>
                </div>
                
                <div className="p-3 sm:p-4 rounded-xl bg-gray-100 dark:bg-gray-800 shadow-[inset_-2px_-2px_6px_rgba(255,255,255,0.7),inset_2px_2px_6px_rgba(0,0,0,0.1)] dark:shadow-[inset_-2px_-2px_6px_rgba(255,255,255,0.1),inset_2px_2px_6px_rgba(0,0,0,0.3)]">
                  <h3 className="font-medium text-gray-800 dark:text-gray-200 text-sm sm:text-base">Spring Animations</h3>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Smooth spring-based motion for natural feel</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:justify-end space-y-2 sm:space-y-0 sm:space-x-4 pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={() => setIsDrawerOpen(false)}
                  className="w-full sm:w-auto px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-gray-200 dark:bg-gray-700 shadow-[inset_-2px_-2px_6px_rgba(255,255,255,0.7),inset_2px_2px_6px_rgba(0,0,0,0.1)] dark:shadow-[inset_-2px_-2px_6px_rgba(255,255,255,0.1),inset_2px_2px_6px_rgba(0,0,0,0.3)] hover:shadow-[inset_-1px_-1px_3px_rgba(255,255,255,0.7),inset_1px_1px_3px_rgba(0,0,0,0.1)] dark:hover:shadow-[inset_-1px_-1px_3px_rgba(255,255,255,0.1),inset_1px_1px_3px_rgba(0,0,0,0.3)] text-gray-700 dark:text-gray-300 transition-all duration-150 ease-in-out focus:outline-none text-sm sm:text-base"
                >
                  Close
                </button>
                <button
                  onClick={() => alert("Action confirmed!")}
                  className="w-full sm:w-auto px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-blue-500 shadow-[inset_-2px_-2px_6px_rgba(255,255,255,0.2),inset_2px_2px_6px_rgba(0,0,0,0.3)] hover:shadow-[inset_-1px_-1px_3px_rgba(255,255,255,0.2),inset_1px_1px_3px_rgba(0,0,0,0.3)] text-white transition-all duration-150 ease-in-out focus:outline-none text-sm sm:text-base"
                >
                  Confirm
                </button>
              </div>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
}
