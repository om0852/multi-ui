"use client";

import { useState } from "react";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
} from "../_components/Drawer_3";

export default function Example_3() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8 bg-gradient-to-br from-gray-50 to-gray-100 min-h-[400px] max-w-5xl mx-auto">
      <div className="space-y-3 sm:space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 text-center">
          3D Perspective Drawer Example
          <span className="inline-block ml-2">🗂️</span>
        </h2>
        <p className="text-gray-600 text-center text-sm sm:text-base">
          Experience innovative 3D perspective animations
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
            animationType="perspective"
            position="right"
            className="w-[85%] sm:w-[65%] md:w-[450px] max-h-screen overflow-y-auto z-[100]"
          >
            <div className="space-y-4 sm:space-y-6 pt-4 sm:pt-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                  3D Perspective Drawer
                </h2>
                <p className="mt-2 text-sm sm:text-base text-gray-600">
                  Experience our innovative 3D drawer with perspective animations and modern design.
                </p>
              </div>
              
              <div className="grid gap-3 sm:gap-4">
                <div className="p-3 sm:p-4 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100">
                  <h3 className="font-semibold text-indigo-900 text-sm sm:text-base">3D Animations</h3>
                  <p className="text-xs sm:text-sm text-indigo-600">Smooth perspective transitions</p>
                </div>
                
                <div className="p-3 sm:p-4 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100">
                  <h3 className="font-semibold text-purple-900 text-sm sm:text-base">Modern Design</h3>
                  <p className="text-xs sm:text-sm text-purple-600">Clean and minimal interface</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:justify-end space-y-2 sm:space-y-0 sm:space-x-4 pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-gray-100">
                <button
                  onClick={() => setIsDrawerOpen(false)}
                  className="w-full sm:w-auto px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors text-sm sm:text-base"
                >
                  Close
                </button>
                <button
                  onClick={() => alert("Action confirmed!")}
                  className="w-full sm:w-auto px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 text-sm sm:text-base"
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
