"use client";

import { useState } from "react";
import {
  StyledDialog,
  StyledDialogTrigger,
  StyledDialogContent,
  StyledDialogHeader,
  StyledDialogDescription,
  StyledDialogFooter,
} from "../_components/Dialog_22";

type AnimationType = "score" | "board" | "stats" | "flash";

export default function Example_22() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState<AnimationType>("score");

  const animations: AnimationType[] = ["score", "board", "stats", "flash"];
  const gameDescriptions = {
    score: "Points multiplier effect",
    board: "Leaderboard reveal",
    stats: "Player statistics panel",
    flash: "Power-up activation",
  };

  return (
    <div className="p-8 space-y-8 bg-gradient-to-br from-purple-900 to-indigo-900 min-h-[400px]">
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-purple-400 to-cyan-400 text-center">
          Game Dialog
          <span className="inline-block animate-bounce ml-2">🎮</span>
        </h2>
        <p className="text-purple-200 text-center">
          Level up your UI with gaming-inspired animations
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          {animations.map((animation) => (
            <button
              key={animation}
              onClick={() => setCurrentAnimation(animation)}
              className={`px-4 py-2 rounded-lg font-gaming uppercase tracking-wider ${
                currentAnimation === animation
                  ? "bg-gradient-to-r from-yellow-400 via-purple-400 to-cyan-400 text-purple-900"
                  : "bg-purple-800/50 text-purple-200 hover:bg-purple-700/50 border-purple-600/30"
              } transition-all duration-300 border shadow-lg shadow-purple-900/30`}
            >
              {animation}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center">
        <StyledDialog>
          <StyledDialogTrigger onClick={() => setIsDialogOpen(true)}>
            Start Game
          </StyledDialogTrigger>
          <StyledDialogContent
            isOpen={isDialogOpen}
            onClose={() => setIsDialogOpen(false)}
            animationType={currentAnimation}
          >
            <StyledDialogHeader>
              Player Status
            </StyledDialogHeader>
            <StyledDialogDescription>
              Activated {currentAnimation} animation: {gameDescriptions[currentAnimation]}.
              Select different power-ups to see more effects!
            </StyledDialogDescription>
            <div className="my-6">
              <p className="text-purple-200 font-bold mb-3">
                Game Features:
              </p>
              <ul className="grid grid-cols-2 gap-3">
                <li className="bg-purple-800/30 p-3 rounded-lg text-purple-200 text-sm">
                  ⚡️ Power-up effects
                </li>
                <li className="bg-purple-800/30 p-3 rounded-lg text-purple-200 text-sm">
                  🏆 Score animations
                </li>
                <li className="bg-purple-800/30 p-3 rounded-lg text-purple-200 text-sm">
                  📊 Stats display
                </li>
                <li className="bg-purple-800/30 p-3 rounded-lg text-purple-200 text-sm">
                  🎯 Achievement unlocks
                </li>
              </ul>
            </div>
            <StyledDialogFooter>
              <button
                onClick={() => setIsDialogOpen(false)}
                className="px-6 py-2 bg-purple-800/50 text-purple-200 rounded-lg 
                  hover:bg-purple-700/50 transition-colors border border-purple-600/30"
              >
                Exit Game
              </button>
              <button
                onClick={() => {
                  setIsDialogOpen(false);
                  alert("Level Complete! +100 XP");
                }}
                className="px-6 py-2 bg-gradient-to-r from-yellow-400 via-purple-400 to-cyan-400 
                  text-purple-900 font-bold rounded-lg hover:opacity-90 transition-opacity"
              >
                Play Now
              </button>
            </StyledDialogFooter>
          </StyledDialogContent>
        </StyledDialog>
      </div>

      <div className="mt-8 p-6 bg-purple-800/30 border border-purple-600/30 rounded-xl backdrop-blur-sm">
        <h3 className="text-purple-200 font-bold mb-2 flex items-center gap-2">
          <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
          Game Info
        </h3>
        <p className="text-purple-200/80">
          Dialog_22 brings gaming excitement to your UI with dynamic animations and 
          effects. The dialog features score multipliers, leaderboard reveals, 
          player statistics, and power-up activations. The design incorporates 
          gaming aesthetics with neon gradients, pixel-perfect animations, and 
          interactive elements that respond to player actions.
        </p>
      </div>
    </div>
  );
}
