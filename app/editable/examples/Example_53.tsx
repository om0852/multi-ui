"use client";

import React from "react";
import { Editable_53 } from "../_components/Editable_53";

export default function Example_53() {
  const handleSave = (content: string) => {
    console.log("Saved content:", content);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Music Player</h1>
        <p className="text-gray-600">
          Listen to your favorite music with customizable playlists
        </p>
      </div>

      <Editable_53
        initialContent="My Music Collection"
        onSave={handleSave}
        className="min-h-[600px] bg-white rounded-xl shadow-lg"
        playlists={[
          {
            id: "workout",
            name: "Workout Mix",
            tracks: [
              {
                id: "1",
                title: "Power Up",
                artist: "Energy Beats",
                album: "Workout Anthems",
                duration: 235,
                cover: "https://picsum.photos/200/200?random=1",
                url: "#"
              },
              {
                id: "2",
                title: "Run the World",
                artist: "Fitness Kings",
                album: "Training Mix",
                duration: 198,
                cover: "https://picsum.photos/200/200?random=2",
                url: "#"
              }
            ]
          },
          {
            id: "focus",
            name: "Focus Time",
            tracks: [
              {
                id: "3",
                title: "Deep Focus",
                artist: "Mind Waves",
                album: "Concentration",
                duration: 342,
                cover: "https://picsum.photos/200/200?random=3",
                url: "#"
              },
              {
                id: "4",
                title: "Study Flow",
                artist: "Brain Beats",
                album: "Focus Sessions",
                duration: 285,
                cover: "https://picsum.photos/200/200?random=4",
                url: "#"
              }
            ]
          },
          {
            id: "relax",
            name: "Evening Chill",
            tracks: [
              {
                id: "5",
                title: "Sunset Vibes",
                artist: "Chill Masters",
                album: "Evening Mood",
                duration: 264,
                cover: "https://picsum.photos/200/200?random=5",
                url: "#"
              },
              {
                id: "6",
                title: "Ocean Waves",
                artist: "Nature Sounds",
                album: "Relaxation",
                duration: 312,
                cover: "https://picsum.photos/200/200?random=6",
                url: "#"
              }
            ]
          }
        ]}
        currentTrack={{
          id: "1",
          title: "Power Up",
          artist: "Energy Beats",
          album: "Workout Anthems",
          duration: 235,
          cover: "https://picsum.photos/200/200?random=1",
          url: "#"
        }}
        isPlaying={true}
        volume={0.8}
        repeat="off"
        shuffle={false}
      />
    </div>
  );
} 