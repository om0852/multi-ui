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
} from "../_components/Dialog_4";

type AnimationType = "pulseGlow" | "slideNeon" | "glowExpand";

export default function Example_4() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState<AnimationType>("pulseGlow");

  const animations: AnimationType[] = ["pulseGlow", "slideNeon", "glowExpand"];

  return (
    <div className="p-8 space-y-8 bg-gray-900">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-cyan-400">Neon Dialog Animations</h2>
        <div className="flex flex-wrap gap-2">
          {animations.map((animation) => (
            <button
              key={animation}
              onClick={() => setCurrentAnimation(animation)}
              className={`px-3 py-1 rounded-full text-sm border ${
                currentAnimation === animation
                  ? "bg-cyan-900 text-cyan-400 border-cyan-400 shadow-neon"
                  : "bg-gray-800 text-cyan-200 border-cyan-200 hover:bg-gray-700"
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
            Open Neon Dialog with {currentAnimation}
          </DialogTrigger>
          <DialogContent
            isOpen={isDialogOpen}
            onClose={() => setIsDialogOpen(false)}
            animationType={currentAnimation}
          >
            <DialogHeader>
              <DialogTitle>Cyberpunk Dialog</DialogTitle>
              <DialogDescription>
                Experience the future with our neon-themed dialog. Current effect: {currentAnimation}
              </DialogDescription>
            </DialogHeader>
            <div className="my-6">
              <p className="text-cyan-400">
                Neon Dialog features:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-cyan-200">
                <li>Cyberpunk-inspired neon design</li>
                <li>Glowing animations and effects</li>
                <li>Dark mode optimized</li>
                <li>Gradient buttons</li>
                <li>Neon border accents</li>
              </ul>
            </div>
            <DialogFooter>
              <button
                onClick={() => setIsDialogOpen(false)}
                className="bg-gray-800 text-cyan-400 py-2 px-4 rounded-lg border border-cyan-400 hover:bg-gray-700"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setIsDialogOpen(false);
                  alert("Action confirmed!");
                }}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-2 px-4 rounded-lg hover:from-blue-500 hover:to-cyan-500"
              >
                Confirm
              </button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <style jsx global>{`
        .shadow-neon {
          box-shadow: 0 0 10px rgba(0, 255, 255, 0.5),
                      0 0 20px rgba(0, 255, 255, 0.3),
                      0 0 30px rgba(0, 255, 255, 0.1);
        }
      `}</style>
    </div>
  );
}
