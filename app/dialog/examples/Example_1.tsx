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
} from "../_components/Dialog_1";

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
    <div className="p-8 space-y-8">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Animation Types</h2>
        <div className="flex flex-wrap gap-2">
          {animations.map((animation) => (
            <button
              key={animation}
              onClick={() => setCurrentAnimation(animation as AnimationType)}
              className={`px-3 py-1 rounded-full text-sm ${
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

      <div className="flex items-center space-x-4">
        <Dialog>
          <DialogTrigger onClick={() => setIsDialogOpen(true)}>
            Open Dialog with {currentAnimation} animation
          </DialogTrigger>
          <DialogContent
            isOpen={isDialogOpen}
            onClose={() => setIsDialogOpen(false)}
            animationType={currentAnimation}
          >
            <DialogHeader>
              <DialogTitle>Welcome to Dialog_1</DialogTitle>
              <DialogDescription>
                This is an example of Dialog_1 with the {currentAnimation} animation.
                Try different animations by selecting from the buttons above!
              </DialogDescription>
            </DialogHeader>
            <div className="my-6">
              <p className="text-gray-700">
                Dialog_1 features:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-gray-600">
                <li>15 different animation types</li>
                <li>Responsive design</li>
                <li>Customizable header, content, and footer</li>
                <li>Close button in the top-right corner</li>
                <li>Background overlay with click-to-close</li>
              </ul>
            </div>
            <DialogFooter>
              <button
                onClick={() => setIsDialogOpen(false)}
                className="bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setIsDialogOpen(false);
                  alert("Action confirmed!");
                }}
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
              >
                Confirm
              </button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
