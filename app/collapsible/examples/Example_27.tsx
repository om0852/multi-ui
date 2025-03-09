"use client"

import React, { useState } from 'react';
import Collapsible_27 from '../_components/Collapsible_27';
import { FaMusic, FaPlay, FaHeart, FaClock } from 'react-icons/fa6';

const Example_27: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);

  const playlists = [
    {
      title: "Chill Vibes",
      tracks: [
        { title: "Sunset Dreams", artist: "Ambient Waves", duration: "3:45" },
        { title: "Ocean Breeze", artist: "Coastal Sounds", duration: "4:12" },
        { title: "Mountain Echo", artist: "Nature's Call", duration: "5:30" },
        { title: "Starry Night", artist: "Cosmic Harmony", duration: "4:55" }
      ]
    },
    {
      title: "Workout Mix",
      tracks: [
        { title: "Power Up", artist: "Energy Boost", duration: "3:22" },
        { title: "Run Faster", artist: "Cardio Kings", duration: "2:58" },
        { title: "Lift Heavy", artist: "Iron Pumpers", duration: "3:45" },
        { title: "Cool Down", artist: "Recovery Mode", duration: "4:10" }
      ]
    },
    {
      title: "Focus & Study",
      tracks: [
        { title: "Deep Concentration", artist: "Mind Flow", duration: "6:15" },
        { title: "Thought Process", artist: "Brain Waves", duration: "5:40" },
        { title: "Clarity", artist: "Clear Mind", duration: "4:50" },
        { title: "Breakthrough", artist: "Eureka Moment", duration: "7:20" }
      ]
    },
    {
      title: "Evening Jazz",
      tracks: [
        { title: "Midnight Saxophone", artist: "Smooth Tones", duration: "5:30" },
        { title: "Piano Dreams", artist: "Ivory Keys", duration: "4:45" },
        { title: "Bass Walk", artist: "Deep Rhythm", duration: "6:10" },
        { title: "Drum Solo", artist: "Beat Master", duration: "3:55" }
      ]
    }
  ];

  return (
    <div className={`min-h-screen p-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`} style={{ 
      background: darkMode ? 'linear-gradient(135deg, #121212, #2d3436)' : 'linear-gradient(135deg, #f5f7fa, #c3cfe2)'
    }}>
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <FaMusic className="text-purple-500" />
            Music Playlists
          </h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`px-4 py-2 rounded-lg ${
              darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
            } shadow-md`}
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>

        <div className="space-y-4">
          {playlists.map((playlist, index) => (
            <Collapsible_27
              key={index}
              title={playlist.title}
              defaultOpen={index === 0}
            >
              <div className="space-y-3">
                {playlist.tracks.map((track, trackIndex) => (
                  <div key={trackIndex} className="flex items-center justify-between p-2 rounded-lg hover:bg-white hover:bg-opacity-10">
                    <div className="flex items-center gap-3">
                      <button className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-500 text-white">
                        <FaPlay className="text-xs" />
                      </button>
                      <div>
                        <h4 className="font-medium">{track.title}</h4>
                        <p className="text-sm text-gray-400">{track.artist}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <button className="text-gray-400 hover:text-red-400">
                        <FaHeart />
                      </button>
                      <div className="flex items-center gap-1 text-gray-400">
                        <FaClock className="text-xs" />
                        <span className="text-sm">{track.duration}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Collapsible_27>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Example_27; 