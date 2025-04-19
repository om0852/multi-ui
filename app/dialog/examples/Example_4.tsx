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
} from "../tsx/Dialog_4";

type AnimationType = "pulseGlow" | "slideNeon" | "glowExpand";

export default function Example_4() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState<AnimationType>("pulseGlow");

  const animations: AnimationType[] = ["pulseGlow", "slideNeon", "glowExpand"];

  return (
    <div className="p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8 bg-gray-900 max-w-5xl mx-auto">
      <div className="space-y-3 sm:space-y-4">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-cyan-400">Neon Dialog Animations</h2>
        <div className="flex flex-wrap gap-2">
          {animations.map((animation) => (
            <button
              key={animation}
              onClick={() => setCurrentAnimation(animation)}
              className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm border ${
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

      <div className="flex flex-col sm:flex-row items-center sm:space-x-4 space-y-4 sm:space-y-0">
        <Dialog>
          <DialogTrigger onClick={() => setIsDialogOpen(true)}>
            <span className="block text-sm sm:text-base">Open Neon Dialog with {currentAnimation}</span>
          </DialogTrigger>
          <DialogContent
            isOpen={isDialogOpen}
            onClose={() => setIsDialogOpen(false)}
            animationType={currentAnimation}
            className="w-[95%] max-w-[95%] sm:max-w-[85%] md:max-w-md p-3 sm:p-4 md:p-6"
          >
            <DialogHeader>
              <DialogTitle>Cyberpunk Dialog</DialogTitle>
              <DialogDescription>
                Experience the future with our neon-themed dialog. Current effect: {currentAnimation}
              </DialogDescription>
            </DialogHeader>
            <div className="my-3 sm:my-4 md:my-6">
              <p className="text-cyan-400 text-sm sm:text-base">
                Neon Dialog features:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-cyan-200 text-sm sm:text-base">
                <li>Cyberpunk-inspired neon design</li>
                <li>Glowing animations and effects</li>
                <li>Dark mode optimized</li>
                <li>Gradient buttons</li>
                <li>Neon border accents</li>
              </ul>
            </div>
            <DialogFooter className="flex-col sm:flex-row gap-2 sm:gap-0">
              <button
                onClick={() => setIsDialogOpen(false)}
                className="w-full sm:w-auto bg-gray-800 text-cyan-400 py-2 px-4 rounded-lg border border-cyan-400 hover:bg-gray-700 text-sm sm:text-base"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setIsDialogOpen(false);
                  alert("Action confirmed!");
                }}
                className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-2 px-4 rounded-lg hover:from-blue-500 hover:to-cyan-500 text-sm sm:text-base"
              >
                Confirm
              </button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        
        <div className="hidden sm:block text-sm bg-gray-800 p-3 rounded-lg text-cyan-300 max-w-xs border border-cyan-800">
          <p>This cyberpunk-inspired dialog features neon effects and futuristic animations.</p>
        </div>
      </div>
      
      <div className="sm:hidden text-sm bg-gray-800 p-3 rounded-lg text-cyan-300 border border-cyan-800">
        <p>This cyberpunk-inspired dialog features neon effects and futuristic animations.</p>
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
