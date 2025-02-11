"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const allTimeZones = [
  { label: "New York (EST)", offset: -5 },
  { label: "London (GMT)", offset: 0 },
  { label: "Paris (CET)", offset: 1 },
  { label: "Tokyo (JST)", offset: 9 },
  { label: "Sydney (AEDT)", offset: 11 },
  { label: "Mumbai (IST)", offset: 5.5 },
  { label: "Los Angeles (PST)", offset: -8 },
];

const WorldClock: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedTimeZones, setSelectedTimeZones] = useState(
    allTimeZones.slice(0, 3) // Default time zones
  );

  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const getTimeInZone = (offset: number): string => {
    const localTime = new Date(
      currentTime.getTime() + offset * 60 * 60 * 1000
    );
    return localTime.toISOString().slice(11, 19); // Format as HH:MM:SS
  };

  const handleAddZone = (zone: typeof allTimeZones[0]) => {
    if (!selectedTimeZones.some((tz) => tz.label === zone.label)) {
      setSelectedTimeZones([...selectedTimeZones, zone]);
    }
  };

  const handleRemoveZone = (label: string) => {
    setSelectedTimeZones(selectedTimeZones.filter((tz) => tz.label !== label));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <motion.h1
        className="text-4xl font-bold mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Adjustable World Clock
      </motion.h1>

      {/* Selected Time Zones */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {selectedTimeZones.map((zone) => (
          <motion.div
            key={zone.label}
            className="p-6 bg-gray-800 rounded-lg shadow-md text-center relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-lg font-medium mb-2">{zone.label}</h2>
            <motion.div
              className="text-3xl font-mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {getTimeInZone(zone.offset)}
            </motion.div>
            <button
              className="absolute top-2 right-2"
              onClick={() => handleRemoveZone(zone.label)}
              aria-label={`Remove ${zone.label}`}
            >
              <img
                src="https://img.icons8.com/?size=100&id=102550&format=png&color=000000"
                alt="Delete"
                className="w-6 h-6"
              />
            </button>
          </motion.div>
        ))}
      </div>

      {/* Add Time Zone */}
      <div className="flex flex-col items-center space-y-4">
        <h3 className="text-lg font-medium">Add a Time Zone:</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {allTimeZones.map((zone) => (
            <button
              key={zone.label}
              className={`px-4 py-2 text-sm rounded ${
                selectedTimeZones.some((tz) => tz.label === zone.label)
                  ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                  : "bg-green-600 text-white hover:bg-green-700"
              }`}
              onClick={() => handleAddZone(zone)}
              disabled={selectedTimeZones.some((tz) => tz.label === zone.label)}
            >
              {zone.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorldClock;
