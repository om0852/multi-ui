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
} from "../_components/Dialog_3";

type AnimationType = "dropIn" | "zoomBounce" | "slideDiagonal";

export default function Example_3() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState<AnimationType>("dropIn");

  const animations: AnimationType[] = ["dropIn", "zoomBounce", "slideDiagonal"];

  return (
    <div className="p-8 space-y-8">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Dialog 3 Animations</h2>
        <div className="flex flex-wrap gap-2">
          {animations.map((animation) => (
            <button
              key={animation}
              onClick={() => setCurrentAnimation(animation)}
              className={`px-3 py-1 rounded-full text-sm ${
                currentAnimation === animation
                  ? "bg-green-500 text-white"
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
              <DialogTitle>Welcome to Dialog_3</DialogTitle>
              <DialogDescription>
                This dialog features smooth animations with a green accent theme. Current animation: {currentAnimation}
              </DialogDescription>
            </DialogHeader>
            <div className="my-6">
              <p className="text-gray-700 text-center">
                Dialog_3 features:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-gray-600 text-center">
                <li>Smooth animations with easeInOut timing</li>
                <li>Green accent color scheme</li>
                <li>Centered content layout</li>
                <li>Enhanced shadow effects</li>
                <li>Responsive design with max-width</li>
              </ul>
            </div>
            <DialogFooter>
              <button
                onClick={() => setIsDialogOpen(false)}
                className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setIsDialogOpen(false);
                  alert("Action confirmed!");
                }}
                className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
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
