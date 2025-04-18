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
} from "../_components/Drawer_1";

export default function Example_1() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="p-8 space-y-8 bg-gradient-to-br from-gray-50 to-gray-100 min-h-[400px]">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 text-center">
          Modern Drawer Example
          <span className="inline-block ml-2">🗂️</span>
        </h2>
        <p className="text-gray-600 text-center text-sm">
          Experience smooth animations and modern design
        </p>
      </div>

      <div className="flex items-center justify-center">
        <Drawer>
          <DrawerTrigger onClick={() => setIsDrawerOpen(true)}>
            Open Drawer
          </DrawerTrigger>
          <DrawerContent
            isOpen={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
            animationType="slideRight"
            position="top"
          >
            <DrawerHeader>
              <DrawerTitle>Welcome to Modern Drawer</DrawerTitle>
              <DrawerDescription>
                Experience our beautifully designed drawer with smooth animations and glass morphism effects.
              </DrawerDescription>
            </DrawerHeader>
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-white/50 backdrop-blur-sm border border-white/20">
                <h3 className="font-medium text-gray-800">Feature 1</h3>
                <p className="text-gray-600 text-sm">Smooth animations and transitions</p>
              </div>
              <div className="p-4 rounded-lg bg-white/50 backdrop-blur-sm border border-white/20">
                <h3 className="font-medium text-gray-800">Feature 2</h3>
                <p className="text-gray-600 text-sm">Glass morphism design</p>
              </div>
            </div>
            <DrawerFooter>
              <button
                onClick={() => setIsDrawerOpen(false)}
                className="px-4 py-2 rounded-lg text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
              >
                Cancel
              </button>
              <button
                onClick={() => alert("Action performed!")}
                className="px-4 py-2 rounded-lg text-white bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-500 hover:to-blue-400 transition-colors duration-200"
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
