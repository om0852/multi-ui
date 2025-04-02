'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export const Editable_53 = ({
  initialContent,
  onSave,
  className = '',
  playlists = [
    {
      id: '1',
      name: 'Recently Played',
      tracks: [
        {
          id: '1',
          title: 'Bohemian Rhapsody',
          artist: 'Queen',
          album: 'A Night at the Opera',
          duration: 354,
          cover: 'https://picsum.photos/200/200?random=1',
          url: '#',
          liked: true,
        },
        {
          id: '2',
          title: 'Stairway to Heaven',
          artist: 'Led Zeppelin',
          album: 'Led Zeppelin IV',
          duration: 482,
          cover: 'https://picsum.photos/200/200?random=2',
          url: '#',
        },
      ],
      cover: 'https://picsum.photos/200/200?random=3',
    },
    {
      id: '2',
      name: 'Favorites',
      tracks: [
        {
          id: '3',
          title: 'Hotel California',
          artist: 'Eagles',
          album: 'Hotel California',
          duration: 391,
          cover: 'https://picsum.photos/200/200?random=4',
          url: '#',
          liked: true,
        },
      ],
      cover: 'https://picsum.photos/200/200?random=5',
    },
  ],
  currentTrack = {
    id: '1',
    title: 'Bohemian Rhapsody',
    artist: 'Queen',
    album: 'A Night at the Opera',
    duration: 354,
    cover: 'https://picsum.photos/200/200?random=1',
    url: '#',
    liked: true,
  },
  isPlaying = false,
  volume = 80,
  repeat = 'off',
  shuffle = false,
}) => {
  const [selectedPlaylist, setSelectedPlaylist] = useState(null)
  const [currentVolume, setCurrentVolume] = useState(volume)
  const [isShuffled, setIsShuffled] = useState(shuffle)
  const [repeatMode, setRepeatMode] = useState(repeat)
  const [isPlaying_, setIsPlaying_] = useState(isPlaying)
  const [content] = useState(initialContent)

  const handleSave = () => {
    onSave(content)
  }

  return (
    <motion.div
      className={`bg-white rounded-xl border border-gray-200 shadow-sm ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="p-6 border-b border-gray-800">
        <div className="flex items-center space-x-4">
          <img
            src={currentTrack.cover}
            alt={currentTrack.title}
            className="w-20 h-20 rounded-lg shadow-lg"
          />
          <div className="flex-1">
            <h2 className="text-lg font-semibold">{currentTrack.title}</h2>
            <p className="text-gray-400">{currentTrack.artist}</p>
            <p className="text-sm text-gray-500">{currentTrack.album}</p>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-4">Playlists</h3>
        <div className="space-y-4">
          {playlists.map((playlist) => (
            <motion.div
              key={playlist.id}
              className={`p-4 rounded-lg cursor-pointer ${
                selectedPlaylist === playlist.id ? 'bg-gray-800' : 'hover:bg-gray-800'
              }`}
              onClick={() => setSelectedPlaylist(playlist.id)}
            >
              <div className="flex items-center space-x-4">
                <img
                  src={playlist.cover}
                  alt={playlist.name}
                  className="w-16 h-16 rounded-lg shadow-md"
                />
                <div>
                  <h4 className="font-medium">{playlist.name}</h4>
                  <p className="text-sm text-gray-400">{playlist.tracks.length} tracks</p>
                </div>
              </div>
              <AnimatePresence>
                {selectedPlaylist === playlist.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="mt-4 space-y-2"
                  >
                    {playlist.tracks.map((track) => (
                      <div
                        key={track.id}
                        className="flex items-center justify-between p-2 rounded hover:bg-gray-700"
                      >
                        <div className="flex items-center space-x-3">
                          <img
                            src={track.cover}
                            alt={track.title}
                            className="w-10 h-10 rounded"
                          />
                          <div>
                            <p className="font-medium">{track.title}</p>
                            <p className="text-sm text-gray-400">{track.artist}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
      <button
        onClick={handleSave}
        className="px-4 py-2 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Save Changes
      </button>
    </motion.div>
  )
}
