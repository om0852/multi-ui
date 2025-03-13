"use client";

import { useState } from "react";
import {
  StyledDialog,
  StyledDialogTrigger,
  StyledDialogContent,
  StyledDialogHeader,
  StyledDialogDescription,
  StyledDialogFooter,
} from "../_components/Dialog_16";

type AnimationType = "scroll" | "magic" | "flame" | "enchant";

export default function Example_16() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState<AnimationType>("scroll");

  const animations: AnimationType[] = ["scroll", "magic", "flame", "enchant"];
  const magicDescriptions = {
    scroll: "Ancient parchment unfurling",
    magic: "Mystical spinning entrance",
    flame: "Fiery transformation",
    enchant: "Arcane dimensional shift",
  };

  return (
    <div className="p-8 space-y-8 bg-[#2d1810] min-h-[400px]">
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-[#f4e4bc] font-medieval text-center relative inline-block">
          <span className="absolute -left-6 -top-6 text-4xl text-yellow-600 opacity-75">✧</span>
          Mystical Scroll Dialog
          <span className="absolute -right-6 -bottom-6 text-4xl text-yellow-600 opacity-75">✧</span>
        </h2>
        <p className="text-[#f4e4bc]/80 text-center font-serif">
          Experience magical animations with ancient scroll aesthetics.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          {animations.map((animation) => (
            <button
              key={animation}
              onClick={() => setCurrentAnimation(animation)}
              className={`px-4 py-2 rounded-lg font-medieval ${
                currentAnimation === animation
                  ? "bg-[#8b4513] text-[#f4e4bc] border-[#f4e4bc]"
                  : "bg-[#5c2d0c] text-[#f4e4bc]/80 hover:bg-[#8b4513]/80 border-[#f4e4bc]/30"
              } transition-all duration-300 border-2`}
            >
              {animation.charAt(0).toUpperCase() + animation.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center">
        <StyledDialog>
          <StyledDialogTrigger onClick={() => setIsDialogOpen(true)}>
            Reveal Ancient Wisdom
          </StyledDialogTrigger>
          <StyledDialogContent
            isOpen={isDialogOpen}
            onClose={() => setIsDialogOpen(false)}
            animationType={currentAnimation}
          >
            <StyledDialogHeader>
              Mystic Prophecy
            </StyledDialogHeader>
            <StyledDialogDescription>
              Behold the {currentAnimation} animation: {magicDescriptions[currentAnimation]}.
              Choose different enchantments to witness magical transformations!
            </StyledDialogDescription>
            <div className="my-6">
              <p className="text-[#8b4513] font-semibold font-medieval text-center">
                Ancient Scroll Features:
              </p>
              <ul className="list-none mt-4 space-y-2 text-[#5c2d0c] text-center font-serif">
                <li>⚜️ Ornate scroll design</li>
                <li>⚜️ Magical flame effects</li>
                <li>⚜️ Enchanted corners</li>
                <li>⚜️ Medieval typography</li>
                <li>⚜️ Mystical animations</li>
              </ul>
            </div>
            <StyledDialogFooter>
              <button
                onClick={() => setIsDialogOpen(false)}
                className="px-6 py-2 bg-[#5c2d0c] text-[#f4e4bc] font-medieval rounded-lg 
                  hover:bg-[#4a2409] transition-colors border border-[#f4e4bc]/30"
              >
                Seal Scroll
              </button>
              <button
                onClick={() => {
                  setIsDialogOpen(false);
                  alert("Ancient wisdom acquired!");
                }}
                className="px-6 py-2 bg-[#8b4513] text-[#f4e4bc] font-medieval rounded-lg 
                  hover:bg-[#6d3710] transition-colors border-2 border-[#f4e4bc]"
              >
                Accept Wisdom
              </button>
            </StyledDialogFooter>
          </StyledDialogContent>
        </StyledDialog>
      </div>

      <div className="mt-8 p-6 bg-[#f4e4bc]/10 rounded-lg border-2 border-double border-[#8b4513]">
        <h3 className="text-[#f4e4bc] font-bold mb-2 font-medieval text-center">
          About this Scroll
        </h3>
        <p className="text-[#f4e4bc]/80 text-center font-serif">
          Dialog_16 transports users to a realm of fantasy with its medieval scroll design.
          The dialog features ornate decorations, magical flame effects, and enchanted
          animations. The aesthetic combines ancient parchment textures, medieval typography,
          and mystical elements to create an immersive magical experience.
        </p>
      </div>
    </div>
  );
}
