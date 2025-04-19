"use client";

import React, { useState } from "react";
import { Drawer, DrawerTrigger, DrawerContent } from "../tsx/Drawer_14";

export default function Example_14() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="p-4">
      <Drawer>
        <DrawerTrigger 
          onClick={() => setIsDrawerOpen(true)}
          className="w-full sm:w-auto px-5 py-2.5 text-sm sm:text-base"
        >
          Open Minimal Drawer
        </DrawerTrigger>
        <DrawerContent
          isOpen={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          animationType="slide"
          position="right"
          className="z-[100] w-[90%] sm:w-[65%] md:w-[380px] max-h-[100vh] overflow-y-auto"
        >
          <div className="flex flex-col h-full space-y-4 sm:space-y-6 pt-6 sm:pt-8 p-4 sm:p-6 md:p-8">
            <div>
              <h2 className="text-xl sm:text-2xl font-medium text-gray-900">
                Minimalist Design
              </h2>
              <p className="mt-2 text-sm sm:text-base text-gray-500 leading-relaxed">
                Experience the clean and uncluttered aesthetics of minimalist design principles.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-3 sm:gap-6 mt-2 sm:mt-4">
              <div className="p-3 sm:p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                <h3 className="font-medium text-gray-900 text-base sm:text-lg">Clean Aesthetics</h3>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">Focused on simplicity with clear visual hierarchy and ample white space</p>
              </div>
              
              <div className="p-3 sm:p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                <h3 className="font-medium text-gray-900 text-base sm:text-lg">Essential Elements</h3>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">Only what&apos;s necessary - no excess decoration or visual noise</p>
              </div>
            </div>

            <div className="flex justify-end space-x-3 pt-4 sm:pt-6 mt-auto border-t border-gray-100">
              <button
                onClick={() => setIsDrawerOpen(false)}
                className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-gray-700 hover:text-gray-800 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => alert("Confirmed!")}
                className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-white bg-gray-900 rounded-full hover:bg-gray-800 transition-colors"
              >
                Confirm
              </button>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
