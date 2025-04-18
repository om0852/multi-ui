"use client"

import React, { useState } from 'react';
import Collapsible_4 from '../_components/Collapsible_4';
import { FaMusic, FaPlay, FaForward, FaBackward, FaList, FaHeart, FaVolumeHigh, FaGear } from 'react-icons/fa6';

const Example_4: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const musicSections = [
    {
      title: "Now Playing",
      icon: <FaMusic className="text-purple-500" />,
      content: (
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex-shrink-0"></div>
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-bold dark:text-white">Summer Vibes</h3>
              <p className="text-gray-600 dark:text-gray-300">Electronic Dreams</p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">3:45 / 5:30</p>
            </div>
          </div>
          <div className="flex justify-center sm:justify-start gap-4">
            <button className="p-2 text-purple-500 hover:text-purple-600 dark:text-purple-400 dark:hover:text-purple-300">
              <FaBackward />
            </button>
            <button className="p-2 text-purple-500 hover:text-purple-600 dark:text-purple-400 dark:hover:text-purple-300">
              <FaPlay />
            </button>
            <button className="p-2 text-purple-500 hover:text-purple-600 dark:text-purple-400 dark:hover:text-purple-300">
              <FaForward />
            </button>
          </div>
        </div>
      )
    },
    {
      title: "Playlist",
      icon: <FaList className="text-purple-500" />,
      content: (
        <div className="space-y-3">
          {[
            { title: "Electronic Dreams", artist: "Synthwave", duration: "5:30" },
            { title: "Midnight Drive", artist: "Lo-Fi Beats", duration: "4:15" },
            { title: "Chill Morning", artist: "Ambient", duration: "6:20" }
          ].map((song, i) => (
            <div key={i} className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg">
              <div>
                <h4 className="font-medium dark:text-white">{song.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">{song.artist}</p>
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">{song.duration}</div>
            </div>
          ))}
        </div>
      )
    },
    {
      title: "Settings",
      icon: <FaGear className="text-purple-500" />,
      content: (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium dark:text-white">Repeat</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Repeat current track</p>
            </div>
            <div className="relative inline-block w-12 h-6 rounded-full bg-gray-200 dark:bg-gray-700">
              <div className="absolute right-1 top-1 bg-purple-500 w-4 h-4 rounded-full shadow-sm"></div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium dark:text-white">Shuffle</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Play in random order</p>
            </div>
            <div className="relative inline-block w-12 h-6 rounded-full bg-gray-200 dark:bg-gray-700">
              <div className="absolute left-1 top-1 bg-gray-400 w-4 h-4 rounded-full shadow-sm"></div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className={`min-h-screen p-4 sm:p-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'}`}>
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 sm:mb-8">
          <h1 className="text-xl sm:text-2xl font-bold flex items-center gap-3">
            <FaMusic className={darkMode ? 'text-purple-400' : 'text-purple-600'} />
            Music Player
          </h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`px-3 py-2 sm:px-4 sm:py-2 text-sm sm:text-base rounded-lg ${
              darkMode 
                ? 'bg-gray-800 text-white border border-gray-700 hover:bg-gray-700' 
                : 'bg-white text-gray-900 border border-gray-200 hover:bg-gray-50'
            } shadow-sm transition-colors`}
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {musicSections.map((section, index) => (
            <div key={index} className="flex">
              <div className="mt-3 sm:mt-4 mr-2 sm:mr-3">
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