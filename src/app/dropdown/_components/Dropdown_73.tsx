import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

interface TrackOption {
  id: number;
  label: string;
  value: string;
  artist: string;
  album: string;
  duration: string;
  artwork: string;
  genre: string;
  isPlaying?: boolean;
}

interface DropdownProps {
  options?: TrackOption[];
  placeholder?: string;
  value?: string;
  onSelect?: (value: string) => void;
  onChange?: (value: string) => void;
}

const Dropdown_73: React.FC<DropdownProps> = ({
  options = [
    {
      id: 1,
      label: 'Midnight Dreams',
      value: 'midnight-dreams',
      artist: 'Luna Eclipse',
      album: 'Starlight Symphony',
      duration: '3:45',
      artwork: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
      genre: 'Electronic',
      isPlaying: true
    },
    {
      id: 2,
      label: 'Ocean Waves',
      value: 'ocean-waves',
      artist: 'Coastal Beats',
      album: 'Seaside Sessions',
      duration: '4:20',
      artwork: 'https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
      genre: 'Ambient'
    },
    {
      id: 3,
      label: 'Urban Jungle',
      value: 'urban-jungle',
      artist: 'City Soundscape',
      album: 'Metropolitan Moods',
      duration: '3:55',
      artwork: 'https://images.unsplash.com/photo-1496449903678-68ddcb189a24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
      genre: 'Hip Hop'
    },
    {
      id: 4,
      label: 'Mountain Echo',
      value: 'mountain-echo',
      artist: 'Alpine Sounds',
      album: 'Peak Experience',
      duration: '5:10',
      artwork: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
      genre: 'Acoustic'
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

  const WaveformAnimation = () => {
    return (
      <div className="flex items-center gap-0.5 h-3">
        {[1, 2, 3, 4, 5].map((n) => (
          <motion.div
            key={n}
            className="w-0.5 bg-rose-500"
            animate={{
              height: [8, 16, 8],
              transition: {
                duration: 0.8,
                repeat: Infinity,
                delay: n * 0.1,
                ease: "easeInOut"
              }
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="relative w-96">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.98 }}
        className="w-full px-4 py-2.5 flex items-center justify-between rounded-lg bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700 hover:border-rose-500 dark:hover:border-rose-500 transition-colors duration-200"
      >
        <div className="flex items-center gap-3">
          {getSelectedOption() ? (
            <>
              <div className="relative w-10 h-10 rounded-lg overflow-hidden">
                <img
                  src={getSelectedOption()?.artwork}
                  alt={getSelectedOption()?.label}
                  className="w-full h-full object-cover"
                />
                {getSelectedOption()?.isPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <WaveformAnimation />
                  </div>
                )}
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
                <motion.button
                  key={option.id}
                  onClick={() => handleSelect(option.value)}
                  onHoverStart={() => setHoveredId(option.id)}
                  onHoverEnd={() => setHoveredId(null)}
                  className={`w-full p-3 flex items-start gap-3 rounded-lg ${
                    hoveredId === option.id
                      ? 'bg-gray-50 dark:bg-gray-900/50'
                      : ''
                  }`}
                >
                  {/* Track Artwork */}
                  <div className="relative flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden">
                    <img
                      src={option.artwork}
                      alt={option.label}
                      className="w-full h-full object-cover"
                    />
                    {option.isPlaying && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                        <WaveformAnimation />
                      </div>
                    )}
                  </div>

                  {/* Track Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className={`font-medium ${
                          selectedValue === option.value
                            ? 'text-rose-600 dark:text-rose-400'
                            : 'text-gray-900 dark:text-white'
                        }`}>
                          {option.label}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {option.artist} • {option.album}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {option.duration}
                        </span>
                      </div>
                    </div>

                    {/* Track Details */}
                    <div className="mt-2 flex items-center gap-2">
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400">
                        {option.genre}
                      </span>
                      {option.isPlaying && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400">
                          <span className="w-1 h-1 rounded-full bg-current animate-pulse" />
                          Now Playing
                        </span>
                      )}
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown_73; 