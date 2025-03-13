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
} from "../_components/Dialog_2";

type AnimationType = "dropIn" | "zoomBounce" | "slideDiagonal";

export default function Example_2() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState<AnimationType>("dropIn");

  const animations: AnimationType[] = ["dropIn", "zoomBounce", "slideDiagonal"];

  return (
    <div className="p-8 space-y-8">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Dialog 2 Animations</h2>
        <div className="flex flex-wrap gap-2">
          {animations.map((animation) => (
            <button
              key={animation}
              onClick={() => setCurrentAnimation(animation)}
              className={`px-3 py-1 rounded-full text-sm ${
                currentAnimation === animation
                  ? "bg-purple-500 text-white"
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
              <DialogTitle>Welcome to Dialog_2</DialogTitle>
              <DialogDescription>
                This dialog features unique animations and a purple theme. Current animation: {currentAnimation}
              </DialogDescription>
            </DialogHeader>
            <div className="my-6">
              <p className="text-gray-700 text-center">
                Dialog_2 features:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-gray-600 text-center">
                <li>Unique animations: dropIn, zoomBounce, and slideDiagonal</li>
                <li>Purple-themed design</li>
                <li>Centered content layout</li>
                <li>Larger padding and rounded corners</li>
                <li>Enhanced shadow effects</li>
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
                className="bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600"
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
