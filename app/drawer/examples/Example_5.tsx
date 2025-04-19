"use client";

import { useState } from "react";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
} from "../_components/Drawer_5";

export default function Example_5() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8 bg-gradient-to-br from-gray-100 to-white min-h-[400px] max-w-5xl mx-auto">
      <div className="space-y-3 sm:space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 text-center">
          Minimalist Drawer Example
          <span className="inline-block ml-2">✨</span>
        </h2>
        <p className="text-gray-600 text-center text-sm sm:text-base">
          Experience our clean, minimalist drawer design
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
            position="right"
            className="w-[85%] sm:w-[65%] md:w-[400px] max-h-screen overflow-y-auto z-[100]"
          >
            <div className="space-y-4 sm:space-y-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-medium text-gray-900">
                  Minimalist Design
                </h2>
                <p className="mt-2 text-gray-600 text-sm sm:text-base">
                  Clean, simple, and elegant user interface with a focus on essential elements.
                </p>
              </div>
              
              <div className="grid gap-3 sm:gap-4">
                <div className="p-3 sm:p-4 rounded-lg bg-gray-50">
                  <h3 className="font-medium text-gray-900 text-sm sm:text-base">Whitespace</h3>
                  <p className="text-xs sm:text-sm text-gray-600">Balanced spacing improves readability and focus</p>
                </div>
                
                <div className="p-3 sm:p-4 rounded-lg bg-gray-50">
                  <h3 className="font-medium text-gray-900 text-sm sm:text-base">Typography</h3>
                  <p className="text-xs sm:text-sm text-gray-600">Clear hierarchies with elegant font choices</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:justify-end space-y-2 sm:space-y-0 sm:space-x-4 pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-gray-200">
                <button
                  onClick={() => setIsDrawerOpen(false)}
                  className="w-full sm:w-auto px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 transition-colors text-sm sm:text-base"
                >
                  Cancel
                </button>
                <button
                  onClick={() => alert("Action confirmed!")}
                  className="w-full sm:w-auto px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-white bg-black hover:bg-gray-800 transition-colors text-sm sm:text-base"
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
