'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Track {
  id: string
  title: string
  artist: string
  album: string
  duration: number
  cover: string
  url: string
  liked?: boolean
}

interface Playlist {
  id: string
  name: string
  tracks: Track[]
  cover?: string
}

interface Editable_53Props {
  initialContent: string
  onSave: (content: string) => void
  className?: string
  playlists?: Playlist[]
  currentTrack?: Track
  isPlaying?: boolean
  volume?: number
  repeat?: 'off' | 'all' | 'one'
  shuffle?: boolean
}

export const Editable_53: React.FC<Editable_53Props> = ({
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
}): JSX.Element => {
  const [isEditing, setIsEditing] = useState(false)
  const [content, setContent] = useState(initialContent)
  const [selectedPlaylist, setSelectedPlaylist] = useState<string | null>(null)
  const [currentVolume, setCurrentVolume] = useState(volume)
  const [isShuffled, setIsShuffled] = useState(shuffle)
  const [repeatMode, setRepeatMode] = useState(repeat)
  const [isPlaying_, setIsPlaying_] = useState(isPlaying)

  const handleSave = () => {
    onSave(content)
    setIsEditing(false)
  }

  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
  }

  const getRepeatIcon = () => {
    switch (repeatMode) {
      case 'one':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            <text x="11" y="15" className="text-xs">1</text>
          </svg>
        )
      case 'all':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        )
      default:
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            <line x1="5" y1="5" x2="19" y2="19" strokeWidth={2} />
          </svg>
        )
    }
  }

  return (
    <div className={`bg-gray-900 text-white rounded-lg shadow-xl ${className}`}>
      {/* Now Playing */}
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
          <button className={`text-pink-500 ${currentTrack.liked ? 'opacity-100' : 'opacity-50'}`}>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </button>
        </div>

        {/* Progress Bar */}
        <div className="mt-4 space-y-2">
          <div className="relative h-1 bg-gray-700 rounded-full">
            <div className="absolute h-full w-1/3 bg-pink-500 rounded-full" />
          </div>
          <div className="flex justify-between text-xs text-gray-400">
            <span>1:58</span>
            <span>{formatDuration(currentTrack.duration)}</span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mt-6">
          <button
            className="text-gray-400 hover:text-white"
            onClick={() => setIsShuffled(!isShuffled)}
          >
            <svg className={`w-5 h-5 ${isShuffled ? 'text-pink-500' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </button>
          <button className="text-gray-400 hover:text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            className="p-3 bg-pink-500 rounded-full hover:bg-pink-600"
            onClick={() => setIsPlaying_(!isPlaying_)}
          >
            {isPlaying_ ? (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            )}
          </button>
          <button className="text-gray-400 hover:text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <button
            className="text-gray-400 hover:text-white"
            onClick={() => {
              setRepeatMode(repeatMode === 'off' ? 'all' : repeatMode === 'all' ? 'one' : 'off')
            }}
          >
            <span className={repeatMode !== 'off' ? 'text-pink-500' : ''}>
              {getRepeatIcon()}
            </span>
          </button>
        </div>

        {/* Volume */}
        <div className="flex items-center space-x-3 mt-6">
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
          </svg>
          <input
            type="range"
            min="0"
            max="100"
            value={currentVolume}
            onChange={(e) => setCurrentVolume(parseInt(e.target.value))}
            className="flex-1 h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>

      {/* Playlist */}
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
                        <div className="text-sm text-gray-400">
                          {formatDuration(track.duration)}
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
    </div>
  )
} 