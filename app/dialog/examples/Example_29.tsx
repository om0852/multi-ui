"use client";

import { useState } from "react";
import {
  StyledDialog,
  StyledDialogTrigger,
  StyledDialogContent,
  StyledDialogHeader,
  StyledDialogDescription,
  StyledDialogFooter,
} from "../_components/Dialog_29";

type AnimationType = "playlist" | "track" | "wave" | "fade";

export default function Example_29() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState<AnimationType>("playlist");

  const animations: AnimationType[] = ["playlist", "track", "wave", "fade"];
  const musicDescriptions = {
    playlist: "View the entire playlist",
    track: "Track transition",
    wave: "Waveform animation",
    fade: "Fade between tracks",
  };

  return (
    <div className="p-8 space-y-8 bg-gradient-to-br from-gray-900 to-gray-800 min-h-[400px]">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-white text-center">
          Music Playlist Dialog
          <span className="inline-block ml-2">🎵</span>
        </h2>
        <p className="text-gray-400 text-center text-sm">
          Experience music transitions with smooth animations
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          {animations.map((animation) => (
            <button
              key={animation}
              onClick={() => setCurrentAnimation(animation)}
              className={`px-4 py-2 rounded-lg ${
                currentAnimation === animation
                  ? "bg-blue-600 text-white shadow-blue-200"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              } transition-all duration-200 shadow-sm border border-gray-600`}
            >
              {animation}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center">
        <StyledDialog>
          <StyledDialogTrigger onClick={() => setIsDialogOpen(true)}>
            Open Playlist
          </StyledDialogTrigger>
          <StyledDialogContent
            isOpen={isDialogOpen}
            onClose={() => setIsDialogOpen(false)}
            animationType={currentAnimation}
          >
            <StyledDialogHeader>
              Now Playing
            </StyledDialogHeader>
            <StyledDialogDescription>
              Experience the {currentAnimation} animation: {musicDescriptions[currentAnimation]}.
              Choose different animations to see how your music comes to life!
            </StyledDialogDescription>
            <div className="my-6">
              <p className="text-gray-400 font-semibold">
                Dialog_29 features:
              </p>
              <ul className="list-none mt-2 space-y-2 text-gray-300">
                <li>🎶 Playlist management</li>
                <li>🎧 Track transitions</li>
                <li>🌊 Waveform animations</li>
                <li>🎼 Smooth fades</li>
                <li>🎹 Music-inspired design</li>
              </ul>
            </div>
            <StyledDialogFooter>
              <button
                onClick={() => setIsDialogOpen(false)}
                className="px-6 py-2 text-gray-300 hover:bg-gray-600 rounded-lg transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setIsDialogOpen(false);
                  alert("Playlist viewed successfully!");
                }}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 
                  transition-colors shadow-sm shadow-blue-200"
              >
                Confirm
              </button>
            </StyledDialogFooter>
          </StyledDialogContent>
        </StyledDialog>
      </div>

      <div className="mt-8 p-6 bg-gray-800 rounded-xl shadow-sm border border-gray-600">
        <h3 className="text-white font-semibold mb-2">
          About this Dialog
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          Dialog_29 is designed for music playlist applications. It features 
          smooth transitions for viewing playlists, transitioning between tracks, 
          and animating waveforms. The interface includes music-themed elements, 
          intuitive navigation, and a dark color palette that enhances the 
          user experience.
        </p>
      </div>
    </div>
  );
}
