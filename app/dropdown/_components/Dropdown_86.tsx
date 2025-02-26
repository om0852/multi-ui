import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

interface TrackOption {
  id: number;
  label: string;
  value: string;
  artist: string;
  album: string;
  artwork: string;
  duration: string;
  progress: number;
  isPlaying: boolean;
  genre: string;
  year: number;
  stats: {
    plays: number;
    likes: number;
    shares: number;
  };
  audio: {
    quality: 'high' | 'medium' | 'low';
    format: string;
    bitrate: string;
  };
  lyrics?: {
    timestamp: string;
    text: string;
  }[];
  relatedTracks: {
    label: string;
    artist: string;
    artwork: string;
  }[];
}

interface DropdownProps {
  options?: TrackOption[];
  placeholder?: string;
  value?: string;
  onSelect?: (value: string) => void;
  onChange?: (value: string) => void;
}

const Dropdown_86: React.FC<DropdownProps> = ({
  options = [
    {
      id: 1,
      label: 'Midnight City',
      value: 'midnight-city',
      artist: 'M83',
      album: 'Hurry Up, We\'re Dreaming',
      artwork: 'https://images.unsplash.com/photo-1496293455970-f8581aae0e3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
      duration: '4:03',
      progress: 45,
      isPlaying: true,
      genre: 'Electronic',
      year: 2011,
      stats: {
        plays: 15000000,
        likes: 850000,
        shares: 125000
      },
      audio: {
        quality: 'high',
        format: 'FLAC',
        bitrate: '1411 kbps'
      },
      lyrics: [
        { timestamp: '0:00', text: 'Waiting in a car' },
        { timestamp: '0:15', text: 'Waiting for a ride in the dark' },
        { timestamp: '0:30', text: 'The night city grows' }
      ],
      relatedTracks: [
        {
          label: 'Outro',
          artist: 'M83',
          artwork: 'https://images.unsplash.com/photo-1496293455970-f8581aae0e3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80'
        },
        {
          label: 'Wait',
          artist: 'M83',
          artwork: 'https://images.unsplash.com/photo-1496293455970-f8581aae0e3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80'
        }
      ]
    },
    {
      id: 2,
      label: 'Instant Crush',
      value: 'instant-crush',
      artist: 'Daft Punk ft. Julian Casablancas',
      album: 'Random Access Memories',
      artwork: 'https://images.unsplash.com/photo-1496293455970-f8581aae0e3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
      duration: '5:37',
      progress: 0,
      isPlaying: false,
      genre: 'Electronic',
      year: 2013,
      stats: {
        plays: 12000000,
        likes: 720000,
        shares: 95000
      },
      audio: {
        quality: 'high',
        format: 'FLAC',
        bitrate: '1411 kbps'
      },
      relatedTracks: [
        {
          label: 'Get Lucky',
          artist: 'Daft Punk',
          artwork: 'https://images.unsplash.com/photo-1496293455970-f8581aae0e3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80'
        },
        {
          label: 'Lose Yourself to Dance',
          artist: 'Daft Punk',
          artwork: 'https://images.unsplash.com/photo-1496293455970-f8581aae0e3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80'
        }
      ]
    },
    {
      id: 3,
      label: 'Blinding Lights',
      value: 'blinding-lights',
      artist: 'The Weeknd',
      album: 'After Hours',
      artwork: 'https://images.unsplash.com/photo-1496293455970-f8581aae0e3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
      duration: '3:20',
      progress: 0,
      isPlaying: false,
      genre: 'Synth-pop',
      year: 2020,
      stats: {
        plays: 25000000,
        likes: 1200000,
        shares: 180000
      },
      audio: {
        quality: 'high',
        format: 'FLAC',
        bitrate: '1411 kbps'
      },
      lyrics: [
        { timestamp: '0:00', text: 'I\'ve been tryna call' },
        { timestamp: '0:15', text: 'I\'ve been on my own for long enough' },
        { timestamp: '0:30', text: 'Maybe you can show me how to love, maybe' }
      ],
      relatedTracks: [
        {
          label: 'Save Your Tears',
          artist: 'The Weeknd',
          artwork: 'https://images.unsplash.com/photo-1496293455970-f8581aae0e3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80'
        },
        {
          label: 'In Your Eyes',
          artist: 'The Weeknd',
          artwork: 'https://images.unsplash.com/photo-1496293455970-f8581aae0e3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80'
        }
      ]
    }
  ],
  placeholder = "Select Track",
  value,
  onSelect,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | undefined>(value);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    setIsOpen(false);
    if (onSelect) onSelect(value);
    if (onChange) onChange(value);
  };

  const getSelectedOption = () => {
    return options.find(option => option.value === selectedValue);
  };

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    }
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K`;
    }
    return num.toString();
  };

  const ProgressBar = ({ progress }: { progress: number }) => (
    <div className="w-full h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
      <motion.div
        className="h-full bg-indigo-500"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
    </div>
  );

  const PlayButton = ({ isPlaying }: { isPlaying: boolean }) => (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="w-12 h-12 rounded-full bg-indigo-500 text-white flex items-center justify-center"
    >
      {isPlaying ? (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ) : (
        <svg className="w-5 h-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )}
    </motion.button>
  );

  return (
    <div className="relative w-[32rem]">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.98 }}
        className="w-full px-4 py-2.5 flex items-center justify-between rounded-lg bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-500 transition-colors duration-200"
      >
        <div className="flex items-center gap-3">
          {getSelectedOption() ? (
            <>
              <div className="w-10 h-10 rounded-lg overflow-hidden">
                <img
                  src={getSelectedOption()?.artwork}
                  alt={getSelectedOption()?.album}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="font-medium text-gray-900 dark:text-white block">
                  {getSelectedOption()?.label}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {getSelectedOption()?.artist}
                </span>
              </div>
            </>
          ) : (
            <span className="font-medium text-gray-500 dark:text-gray-400">
              {placeholder}
            </span>
          )}
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        >
          <svg 
            className="w-5 h-5 text-gray-500 dark:text-gray-400" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 9l-7 7-7-7" 
            />
          </svg>
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ 
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 500,
                damping: 30
              }
            }}
            exit={{ 
              opacity: 0,
              y: 8,
              scale: 0.96,
              transition: { duration: 0.15 }
            }}
            className="absolute w-full mt-2 py-2 bg-white dark:bg-gray-800 shadow-xl rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden z-50"
          >
            <div className="px-2">
              {options.map((option) => (
                <motion.div
                  key={option.id}
                  onClick={() => handleSelect(option.value)}
                  onHoverStart={() => setHoveredId(option.id)}
                  onHoverEnd={() => setHoveredId(null)}
                  className={`w-full p-4 rounded-lg cursor-pointer ${
                    hoveredId === option.id
                      ? 'bg-gray-50 dark:bg-gray-900/50'
                      : ''
                  }`}
                >
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex items-start gap-4">
                      <div className="relative w-24 h-24 rounded-lg overflow-hidden">
                        <img
                          src={option.artwork}
                          alt={option.album}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200">
                          <PlayButton isPlaying={option.isPlaying} />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className={`font-medium ${
                          selectedValue === option.value
                            ? 'text-indigo-600 dark:text-indigo-400'
                            : 'text-gray-900 dark:text-white'
                        }`}>
                          {option.label}
                        </h3>
                        <p className="mt-0.5 text-sm text-gray-500 dark:text-gray-400">
                          {option.artist}
                        </p>
                        <p className="mt-0.5 text-sm text-gray-500 dark:text-gray-400">
                          {option.album} • {option.year}
                        </p>
                        <div className="mt-2 flex items-center gap-4">
                          <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {formatNumber(option.stats.plays)}
                          </div>
                          <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                            {formatNumber(option.stats.likes)}
                          </div>
                          <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                            </svg>
                            {formatNumber(option.stats.shares)}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Progress */}
                    <div className="space-y-1">
                      <ProgressBar progress={option.progress} />
                      <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                        <span>0:00</span>
                        <span>{option.duration}</span>
                      </div>
                    </div>

                    {/* Audio Info */}
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
                          {option.audio.quality}
                        </span>
                        <span className="text-gray-500 dark:text-gray-400">
                          {option.audio.format} • {option.audio.bitrate}
                        </span>
                      </div>
                      <span className="text-gray-500 dark:text-gray-400">
                        {option.genre}
                      </span>
                    </div>

                    {/* Lyrics */}
                    {option.lyrics && (
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium text-gray-900 dark:text-white">Lyrics</h4>
                        <div className="space-y-1">
                          {option.lyrics.map((line, index) => (
                            <div key={index} className="flex items-start gap-2 text-sm">
                              <span className="text-gray-500 dark:text-gray-400 flex-shrink-0">
                                {line.timestamp}
                              </span>
                              <span className="text-gray-900 dark:text-white">
                                {line.text}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Related Tracks */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white">Related Tracks</h4>
                      <div className="flex gap-2 overflow-x-auto pb-2">
                        {option.relatedTracks.map((track, index) => (
                          <div key={index} className="flex-shrink-0 w-32">
                            <div className="w-32 h-32 rounded-lg overflow-hidden mb-2">
                              <img
                                src={track.artwork}
                                alt={track.label}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <h5 className="text-sm font-medium text-gray-900 dark:text-white truncate">
                              {track.label}
                            </h5>
                            <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                              {track.artist}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown_86; 