"use client";

import { useState } from "react";
import {
  StyledDialog,
  StyledDialogTrigger,
  StyledDialogContent,
  StyledDialogHeader,
  StyledDialogDescription,
  StyledDialogFooter,
} from "../_components/Dialog_28";

type AnimationType = "gallery" | "zoom" | "slide" | "fade";

export default function Example_28() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState<AnimationType>("gallery");

  const animations: AnimationType[] = ["gallery", "zoom", "slide", "fade"];
  const galleryDescriptions = {
    gallery: "View the entire gallery",
    zoom: "Zoom into details",
    slide: "Slide through images",
    fade: "Fade between photos",
  };

  return (
    <div className="p-8 space-y-8 bg-gradient-to-br from-gray-50 to-gray-100 min-h-[400px]">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 text-center">
          Photo Gallery Dialog
          <span className="inline-block ml-2">🖼️</span>
        </h2>
        <p className="text-gray-600 text-center text-sm">
          Explore stunning visuals with smooth transitions
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          {animations.map((animation) => (
            <button
              key={animation}
              onClick={() => setCurrentAnimation(animation)}
              className={`px-4 py-2 rounded-lg ${
                currentAnimation === animation
                  ? "bg-gray-900 text-white shadow-gray-200"
                  : "bg-white text-gray-600 hover:bg-gray-50"
              } transition-all duration-200 shadow-sm border border-gray-100`}
            >
              {animation}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center">
        <StyledDialog>
          <StyledDialogTrigger onClick={() => setIsDialogOpen(true)}>
            Open Gallery
          </StyledDialogTrigger>
          <StyledDialogContent
            isOpen={isDialogOpen}
            onClose={() => setIsDialogOpen(false)}
            animationType={currentAnimation}
          >
            <StyledDialogHeader>
              Art Collection
            </StyledDialogHeader>
            <StyledDialogDescription>
              Experience the {currentAnimation} animation: {galleryDescriptions[currentAnimation]}.
              Choose different animations to see how your gallery comes to life!
            </StyledDialogDescription>
            <div className="my-6">
              <p className="text-gray-600 font-semibold">
                Dialog_28 features:
              </p>
              <ul className="list-none mt-2 space-y-2 text-gray-700">
                <li>🖼️ Stunning visuals</li>
                <li>🔍 Zoom functionality</li>
                <li>➡️ Slide transitions</li>
                <li>🌟 Smooth fades</li>
                <li>🎨 Gallery-inspired design</li>
              </ul>
            </div>
            <StyledDialogFooter>
              <button
                onClick={() => setIsDialogOpen(false)}
                className="px-6 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setIsDialogOpen(false);
                  alert("Gallery viewed successfully!");
                }}
                className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 
                  transition-colors shadow-sm shadow-gray-200"
              >
                Confirm
              </button>
            </StyledDialogFooter>
          </StyledDialogContent>
        </StyledDialog>
      </div>

      <div className="mt-8 p-6 bg-white rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-gray-900 font-semibold mb-2">
          About this Dialog
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Dialog_28 is designed for photo gallery applications. It features 
          smooth transitions for viewing galleries, zooming into details, and 
          sliding through images. The interface includes gallery-themed elements, 
          intuitive navigation, and a clean color palette that enhances the 
          user experience.
        </p>
      </div>
    </div>
  );
}
