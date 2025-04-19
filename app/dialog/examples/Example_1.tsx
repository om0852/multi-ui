"use client";
import { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "../tsx/Dialog_1";

type AnimationType = "fade" | "scale" | "slideUp" | "slideDown" | "slideLeft" | 
  "slideRight" | "zoomIn" | "zoomOut" | "rotate" | "flip" | "bounce" | 
  "swing" | "wobble" | "pulse" | "flash";

export default function Example_1() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState<AnimationType>("fade");

  const animations = [
    "fade",
    "scale",
    "slideUp",
    "slideDown",
    "slideLeft",
    "slideRight",
    "zoomIn",
    "zoomOut",
    "rotate",
    "flip",
    "bounce",
    "swing",
    "wobble",
    "pulse",
    "flash",
  ];

  return (
    <div className="p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8 max-w-5xl mx-auto">
      <div className="space-y-3 sm:space-y-4">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">Animation Types</h2>
        <div className="flex flex-wrap gap-2">
          {animations.map((animation) => (
            <button
              key={animation}
              onClick={() => setCurrentAnimation(animation as AnimationType)}
              className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm ${
                currentAnimation === animation
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {animation}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center sm:space-x-4 space-y-4 sm:space-y-0">
        <Dialog>
          <DialogTrigger onClick={() => setIsDialogOpen(true)}>
            <span className="block text-sm sm:text-base">Open Dialog with {currentAnimation} animation</span>
          </DialogTrigger>
          <DialogContent
            isOpen={isDialogOpen}
            onClose={() => setIsDialogOpen(false)}
            animationType={currentAnimation}
            className="w-[95%] max-w-[95%] sm:max-w-[85%] md:max-w-md p-3 sm:p-4 md:p-6"
          >
            <DialogHeader>
              <DialogTitle>Welcome to Dialog_1</DialogTitle>
              <DialogDescription>
                This is an example of Dialog_1 with the {currentAnimation} animation.
                Try different animations by selecting from the buttons above!
              </DialogDescription>
            </DialogHeader>
            <div className="my-3 sm:my-4 md:my-6">
              <p className="text-gray-700 text-sm sm:text-base">
                Dialog_1 features:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-gray-600 text-sm sm:text-base">
                <li>15 different animation types</li>
                <li>Responsive design</li>
                <li>Customizable header, content, and footer</li>
                <li>Close button in the top-right corner</li>
                <li>Background overlay with click-to-close</li>
              </ul>
            </div>
            <DialogFooter className="flex-col sm:flex-row gap-2 sm:gap-0">
              <button
                onClick={() => setIsDialogOpen(false)}
                className="w-full sm:w-auto bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300 text-sm sm:text-base"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setIsDialogOpen(false);
                  alert("Action confirmed!");
                }}
                className="w-full sm:w-auto bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 text-sm sm:text-base"
              >
                Confirm
              </button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        
        <div className="hidden sm:block text-sm bg-blue-50 p-3 rounded-lg text-blue-700 max-w-xs">
          <p>Try the different animation styles by selecting from the buttons above and opening the dialog.</p>
        </div>
      </div>
      
      <div className="sm:hidden text-sm bg-blue-50 p-3 rounded-lg text-blue-700">
        <p>Try the different animation styles by selecting from the buttons above and opening the dialog.</p>
      </div>
    </div>
  );
}
