import React, { useState } from "react";
import { Drawer, DrawerTrigger, DrawerContent } from "../_components/Drawer_14";

export default function Example_14() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="p-4">
      <Drawer>
        <DrawerTrigger onClick={() => setIsDrawerOpen(true)}>
          Open Drawer 14
        </DrawerTrigger>
        <DrawerContent
          isOpen={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          animationType="slide"
          position="right"
        >
          <div className="space-y-6 pt-8">
            <div>
              <h2 className="text-2xl font-medium text-gray-900">
                Drawer 14 Design
              </h2>
              <p className="mt-2 text-gray-500 leading-relaxed">
                Experience the unique design and animations of Drawer 14.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-gray-50">
                <h3 className="font-medium text-gray-900">Feature 1</h3>
                <p className="text-sm text-gray-500">Description of feature 1</p>
              </div>
              
              <div className="p-4 rounded-lg bg-gray-50">
                <h3 className="font-medium text-gray-900">Feature 2</h3>
                <p className="text-sm text-gray-500">Description of feature 2</p>
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
