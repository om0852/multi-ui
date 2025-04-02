"use client";

import { useState } from "react";
import {
  StyledDialog,
  StyledDialogTrigger,
  StyledDialogContent,
  StyledDialogHeader,
  StyledDialogDescription,
  StyledDialogFooter,
} from "../tsx/Dialog_11";

type AnimationType = "elastic" | "swirl" | "slide3D" | "bounce";

export default function Example_11() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState<AnimationType>("elastic");

  const animations: AnimationType[] = ["elastic", "swirl", "slide3D", "bounce"];
  const animationDescriptions = {
    elastic: "Springy and playful",
    swirl: "Elegant rotation",
    slide3D: "3D perspective slide",
    bounce: "Energetic bounce",
  };

  return (
    <div className="p-8 space-y-8 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 min-h-[400px]">
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300">
          Modern Gradient Dialog
        </h2>
        <p className="text-gray-300">
          Experience unique spring animations with elegant gradients.
        </p>
        <div className="flex flex-wrap gap-3">
          {animations.map((animation) => (
            <button
              key={animation}
              onClick={() => setCurrentAnimation(animation)}
              className={`px-4 py-2 rounded-xl text-white ${
                currentAnimation === animation
                  ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                  : "bg-white/10 hover:bg-white/20"
              } transition-all duration-300`}
            >
              {animation}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <StyledDialog>
          <StyledDialogTrigger onClick={() => setIsDialogOpen(true)}>
            Open Modern Dialog
          </StyledDialogTrigger>
          <StyledDialogContent
            isOpen={isDialogOpen}
            onClose={() => setIsDialogOpen(false)}
            animationType={currentAnimation}
          >
            <StyledDialogHeader>
              Spring Animations
            </StyledDialogHeader>
            <StyledDialogDescription>
              Currently using the {currentAnimation} animation: {animationDescriptions[currentAnimation]}.
              Try different animations to see unique spring-based motion effects!
            </StyledDialogDescription>
            <div className="my-6">
              <p className="text-indigo-300 font-semibold">
                Dialog_11 features:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-gray-300">
                <li>Spring-based animation system</li>
                <li>Modern gradient design</li>
                <li>Animated corner indicators</li>
                <li>Backdrop blur effect</li>
                <li>Interactive hover states</li>
              </ul>
            </div>
            <StyledDialogFooter>
              <button
                onClick={() => setIsDialogOpen(false)}
                className="px-6 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setIsDialogOpen(false);
                  alert("Action confirmed!");
                }}
                className="px-6 py-2 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white hover:opacity-90"
              >
                Confirm
              </button>
            </StyledDialogFooter>
          </StyledDialogContent>
        </StyledDialog>
      </div>

      <div className="mt-8 p-6 rounded-xl bg-black/30 border border-indigo-500/30 backdrop-blur-sm">
        <h3 className="text-indigo-300 font-bold mb-2">About this Dialog</h3>
        <p className="text-gray-300">
          Dialog_11 introduces a sophisticated spring animation system with four unique motion styles.
          The design features a modern gradient theme with animated corner indicators and interactive
          elements. Each animation is carefully tuned with spring physics for a natural, engaging feel.
        </p>
      </div>
    </div>
  );
}
