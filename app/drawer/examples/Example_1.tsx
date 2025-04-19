"use client";

import { useState } from "react";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
} from "../tsx/Drawer_1";

export default function Example_1() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8 bg-gradient-to-br from-gray-50 to-gray-100 min-h-[400px] max-w-5xl mx-auto">
      <div className="space-y-3 sm:space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 text-center">
          Modern Drawer Example
          <span className="inline-block ml-2">🗂️</span>
        </h2>
        <p className="text-gray-600 text-center text-sm sm:text-base">
          Experience smooth animations and modern design
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
            position="top"
            className="w-full sm:w-[85%] md:w-auto max-h-[80vh] sm:max-h-[70vh] z-[100]"
          >
            <DrawerHeader>
              <DrawerTitle>Welcome to Modern Drawer</DrawerTitle>
              <DrawerDescription>
                Experience our beautifully designed drawer with smooth animations and glass morphism effects.
              </DrawerDescription>
            </DrawerHeader>
            <div className="space-y-4 overflow-y-auto">
              <div className="p-3 sm:p-4 rounded-lg bg-white/50 backdrop-blur-sm border border-white/20">
                <h3 className="font-medium text-gray-800 text-sm sm:text-base">Feature 1</h3>
                <p className="text-gray-600 text-xs sm:text-sm">Smooth animations and transitions</p>
              </div>
              <div className="p-3 sm:p-4 rounded-lg bg-white/50 backdrop-blur-sm border border-white/20">
                <h3 className="font-medium text-gray-800 text-sm sm:text-base">Feature 2</h3>
                <p className="text-gray-600 text-xs sm:text-sm">Glass morphism design</p>
              </div>
            </div>
            <DrawerFooter>
              <button
                onClick={() => setIsDrawerOpen(false)}
                className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors duration-200 text-sm sm:text-base"
              >
                Cancel
              </button>
              <button
                onClick={() => alert("Action performed!")}
                className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-white bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-500 hover:to-blue-400 transition-colors duration-200 text-sm sm:text-base"
              >
                Confirm
              </button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
}
