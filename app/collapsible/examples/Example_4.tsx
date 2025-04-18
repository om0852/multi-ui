"use client"

import React, { useState } from 'react';
import Collapsible_4 from '../_components/Collapsible_4';
import { FaMusic, FaPlay, FaForward, FaBackward, FaList, FaHeart, FaVolumeHigh } from 'react-icons/fa6';

const Example_4: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const musicSections = [
    {
      title: "Now Playing",
      icon: <FaMusic className="text-purple-500" />,
      content: (
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <FaMusic className="text-white text-2xl" />
            </div>
            <div>
              <h3 className="font-medium">Midnight Symphony</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Electronic Dreams</p>
              <p className="text-xs text-gray-400 dark:text-gray-500">3:45 / 5:30</p>
            </div>
          </div>
          
          <div className="w-full bg-gray-200 dark:bg-gray-700 h-1 rounded-full overflow-hidden">
            <div className="bg-purple-500 h-full" style={{ width: '65%' }}></div>
          </div>
          
          <div className="flex justify-center items-center gap-6">
            <button className="text-gray-600 dark:text-gray-300 hover:text-purple-500">
              <FaBackward />
            </button>
            <button className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white">
              <FaPlay />
            </button>
            <button className="text-gray-600 dark:text-gray-300 hover:text-purple-500">
              <FaForward />
            </button>
          </div>
        </div>
      )
    },
    {
      title: "Up Next",
      icon: <FaList className="text-blue-500" />,
      content: (
        <div className="space-y-3">
          {[
            { title: "Ocean Waves", artist: "Ambient Sounds", duration: "4:15" },
            { title: "Urban Jungle", artist: "City Beats", duration: "3:50" },
            { title: "Starlight", artist: "Night Vibes", duration: "5:20" }
          ].map((song, i) => (
            <div key={i} className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded flex items-center justify-center">
                  <FaMusic className="text-blue-500 text-sm" />
                </div>
                <div>
                  <h4 className="font-medium">{song.title}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{song.artist}</p>
                </div>
              </div>
              <span className="text-sm text-gray-500">{song.duration}</span>
            </div>
          ))}
        </div>
      )
    },
    {
      title: "Playlists",
      icon: <FaHeart className="text-red-500" />,
      content: (
        <div className="space-y-3">
          {[
            { name: "Favorites", songs: 24, duration: "1h 45m" },
            { name: "Workout Mix", songs: 18, duration: "1h 20m" },
            { name: "Chill Vibes", songs: 32, duration: "2h 15m" }
          ].map((playlist, i) => (
            <div key={i} className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-pink-500 rounded flex items-center justify-center">
                  <FaMusic className="text-white" />
                </div>
                <div>
                  <h4 className="font-medium">{playlist.name}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{playlist.songs} songs &bull; {playlist.duration}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )
    },
    {
      title: "Audio Settings",
      icon: <FaVolumeHigh className="text-green-500" />,
      content: (
        <div className="space-y-4">
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm">Volume</span>
              <span className="text-sm text-gray-500">80%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
              <div className="bg-green-500 h-full" style={{ width: '80%' }}></div>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Equalizer</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">Custom settings</p>
              </div>
              <div className="relative inline-block w-12 h-6 rounded-full bg-gray-200 dark:bg-gray-700">
                <div className="absolute right-1 top-1 bg-green-500 w-4 h-4 rounded-full"></div>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Crossfade</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">5 seconds</p>
              </div>
              <div className="relative inline-block w-12 h-6 rounded-full bg-gray-200 dark:bg-gray-700">
                <div className="absolute right-1 top-1 bg-green-500 w-4 h-4 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className={`min-h-screen p-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'}`}>
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold flex items-center gap-3">
            <FaMusic className={darkMode ? 'text-purple-400' : 'text-purple-600'} />
            Music Player
          </h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`px-4 py-2 rounded-lg ${
              darkMode 
                ? 'bg-gray-800 text-white border border-gray-700' 
                : 'bg-white text-gray-900 border border-gray-200'
            } shadow-sm`}
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>

        <div className="space-y-4">
          {musicSections.map((section, index) => (
            <div key={index} className="flex">
              <div className="mt-4 mr-2">
                {section.icon}
              </div>
              <div className="flex-1">
                <Collapsible_4
                  title={section.title}
                  defaultOpen={index === 0}
                >
                  {section.content}
                </Collapsible_4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Example_4; 