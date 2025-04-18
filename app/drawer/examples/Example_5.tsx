import React, { useState } from "react";
import { Drawer, DrawerTrigger, DrawerContent } from "../_components/Drawer_5";

export default function Example_5() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="p-4">
      <Drawer>
        <DrawerTrigger onClick={() => setIsDrawerOpen(true)}>
          Open Minimal Drawer
        </DrawerTrigger>
        <DrawerContent
          isOpen={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          animationType="elegant"
          position="right"
        >
          <div className="space-y-6 pt-8">
            <div>
              <h2 className="text-2xl font-medium text-gray-900">
                Minimal Design
              </h2>
              <p className="mt-2 text-gray-500 leading-relaxed">
                Experience our clean and minimal interface with elegant transitions.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-gray-50">
                <h3 className="font-medium text-gray-900">Simplicity</h3>
                <p className="text-sm text-gray-500">Clean and focused interface</p>
              </div>
              
              <div className="p-4 rounded-lg bg-gray-50">
                <h3 className="font-medium text-gray-900">Elegance</h3>
                <p className="text-sm text-gray-500">Smooth and refined animations</p>
              </div>
            </div>

            <div className="flex justify-end space-x-3 pt-6 mt-6 border-t border-gray-100">
              <button
                onClick={() => setIsDrawerOpen(false)}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-800 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => alert("Confirmed!")}
                className="px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-full hover:bg-gray-800 transition-colors"
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
