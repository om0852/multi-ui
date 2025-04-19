"use client";
import { useState } from "react";
import {
  StyledDialog,
  StyledDialogTrigger,
  StyledDialogContent,
  StyledDialogHeader,
  StyledDialogDescription,
  StyledDialogFooter,
} from "../tsx/Dialog_12";

type AnimationType = "powerUp" | "levelUp" | "gameOver" | "combo";

export default function Example_12() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState<AnimationType>("powerUp");

  const animations: AnimationType[] = ["powerUp", "levelUp", "gameOver", "combo"];
  
  return (
    <div className="p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8 bg-[#2d3748] min-h-[400px] max-w-5xl mx-auto">
      <div className="space-y-3 sm:space-y-4">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#48bb78] uppercase tracking-wider [text-shadow:2px_2px_0_#276749]">
          8-Bit Dialog System
        </h2>
        <p className="text-sm sm:text-base text-gray-300 [text-shadow:1px_1px_0_#000]">
          A retro gaming inspired dialog system with pixel-perfect animations.
        </p>
        <div className="flex flex-wrap gap-2">
          {animations.map((animation) => (
            <button
              key={animation}
              onClick={() => setCurrentAnimation(animation)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-bold uppercase tracking-wide
                ${currentAnimation === animation
                  ? "bg-[#48bb78] text-white border-2 border-[#276749]"
                  : "bg-[#4a5568] text-white hover:bg-[#718096] border-2 border-[#2d3748]"
                } transition-colors rounded [image-rendering:pixelated]`}
            >
              {animation.replace(/([A-Z])/g, ' $1').trim()}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center sm:space-x-4 space-y-4 sm:space-y-0">
        <StyledDialog>
          <StyledDialogTrigger onClick={() => setIsDialogOpen(true)}>
            <span className="block text-sm sm:text-base">Start Game</span>
          </StyledDialogTrigger>
          <StyledDialogContent
            isOpen={isDialogOpen}
            onClose={() => setIsDialogOpen(false)}
            animationType={currentAnimation}
          >
            <StyledDialogHeader>
              8-Bit Dialog
            </StyledDialogHeader>
            <StyledDialogDescription>
              Choose your adventure! This retro-inspired dialog brings the charm of 
              classic video games with pixelated corners and game-like animations.
            </StyledDialogDescription>
            <div className="my-4 sm:my-6 [text-shadow:1px_1px_0_#000]">
              <p className="text-[#48bb78] font-bold uppercase">
                Game Features:
              </p>
              <ul className="list-none mt-2 space-y-1 text-gray-300">
                <li>→ Pixel-perfect design</li>
                <li>→ Retro animations: {currentAnimation}</li>
                <li>→ 8-bit inspired UI elements</li>
                <li>→ Pixelated corners and borders</li>
                <li>→ Authentic gaming experience</li>
              </ul>
            </div>
            <StyledDialogFooter>
              <button
                onClick={() => setIsDialogOpen(false)}
                className="w-full sm:w-auto px-4 py-2 bg-[#4a5568] text-white font-bold rounded
                hover:bg-[#718096] transition-colors uppercase tracking-wide
                border-2 border-[#2d3748]"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setIsDialogOpen(false);
                  alert("Game started!");
                }}
                className="w-full sm:w-auto px-4 py-2 bg-[#48bb78] text-white font-bold rounded
                hover:bg-[#38a169] transition-colors uppercase tracking-wide
                border-2 border-[#276749]"
              >
                Play
              </button>
            </StyledDialogFooter>
          </StyledDialogContent>
        </StyledDialog>
        
        <div className="hidden sm:block text-sm bg-[#1a1b2e] p-3 rounded-lg text-[#48bb78] max-w-xs border-2 border-[#4a5568] [image-rendering:pixelated]">
          <p className="[text-shadow:1px_1px_0_#000]">Try the different retro gaming animations to experience the full nostalgia of the 8-bit era!</p>
        </div>
      </div>
      
      <div className="sm:hidden text-sm bg-[#1a1b2e] p-3 rounded-lg text-[#48bb78] border-2 border-[#4a5568] mb-4 [image-rendering:pixelated]">
        <p className="[text-shadow:1px_1px_0_#000]">Try the different retro gaming animations to experience the full nostalgia of the 8-bit era!</p>
      </div>

      <div className="mt-4 sm:mt-8 p-3 sm:p-4 rounded-lg border-2 border-[#4a5568] bg-[#1a1b2e] [image-rendering:pixelated]">
        <div className="flex items-center">
          <div className="w-4 h-4 bg-[#48bb78] mr-2"></div>
          <h3 className="text-[#48bb78] font-bold mb-2 text-base sm:text-lg uppercase tracking-wider [text-shadow:1px_1px_0_#000]">Game Manual</h3>
        </div>
        <p className="text-gray-300 text-sm sm:text-base [text-shadow:1px_1px_0_#000]">
          Dialog_12 recreates the nostalgic feel of classic 8-bit games with pixelated design elements,
          retro-inspired animations, and game-like UI components. Each animation represents different
          in-game events: Power Up, Level Up, Game Over, and Combo moves.
        </p>
      </div>
    </div>
  );
}

