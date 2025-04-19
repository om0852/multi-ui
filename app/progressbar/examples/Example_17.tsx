"use client";
import React, { useState } from 'react';
import ProgressBar_17 from '../tsx/ProgressBar_17';

export default function ProgressBarExample() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [weatherData, setWeatherData] = useState({
    location: 'New York',
    temperature: '72°F',
    condition: 'Sunny',
    humidity: '45%',
    wind: '8 mph'
  });
  const [loadingText, setLoadingText] = useState('Fetching weather data...');
  
  // Array of possible locations
  const locations = [
    { name: 'New York', temp: '72°F', condition: 'Sunny' },
    { name: 'London', temp: '59°F', condition: 'Rainy' },
    { name: 'Tokyo', temp: '68°F', condition: 'Cloudy' },
    { name: 'Sydney', temp: '81°F', condition: 'Partly Cloudy' },
    { name: 'Paris', temp: '64°F', condition: 'Clear' },
    { name: 'Dubai', temp: '95°F', condition: 'Hot' }
  ];
  
  // Array of loading messages
  const loadingMessages = [
    'Fetching weather data...',
    'Analyzing atmospheric conditions...',
    'Checking satellite imagery...',
    'Processing meteorological data...',
    'Finalizing forecast...'
  ];

  // Function to simulate weather data loading
  const fetchWeatherData = () => {
    if (isLoading) return;
    
    // Reset progress and state
    setProgress(0);
    setIsLoading(true);
    setLoadingText(loadingMessages[0]);
    
    // Choose a random location
    const randomLocation = locations[Math.floor(Math.random() * locations.length)];
    
    // Generate random humidity and wind values
    const humidity = `${Math.floor(Math.random() * 50) + 30}%`;
    const wind = `${Math.floor(Math.random() * 15) + 3} mph`;
    
    // Simulate API call with varying speeds and loading messages
    let currentMessageIndex = 0;
    
    const interval = setInterval(() => {
      setProgress(prev => {
        // Random progress increment between 2 and 8
        const increment = Math.floor(Math.random() * 6) + 2;
        const newProgress = prev + increment;
        
        // Update loading message at certain progress points
        if (newProgress > (currentMessageIndex + 1) * 20 && currentMessageIndex < loadingMessages.length - 1) {
          currentMessageIndex++;
          setLoadingText(loadingMessages[currentMessageIndex]);
        }
        
        if (newProgress >= 100) {
          clearInterval(interval);
          
          // Update weather data
          setWeatherData({
            location: randomLocation.name,
            temperature: randomLocation.temp,
            condition: randomLocation.condition,
            humidity: humidity,
            wind: wind
          });
          
          // Simulate completion delay
          setTimeout(() => {
            setIsLoading(false);
          }, 500);
          
          return 100;
        }
        
        return newProgress;
      });
    }, 150);
  };

  // Weather condition icons
  const getWeatherIcon = (condition: string) => {
    switch (condition.toLowerCase()) {
      case 'sunny': return '☀️';
      case 'rainy': return '🌧️';
      case 'cloudy': return '☁️';
      case 'partly cloudy': return '⛅';
      case 'clear': return '🌤️';
      case 'hot': return '🔥';
      default: return '🌡️';
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-400 to-purple-500 p-4">
      <div className="w-full max-w-md p-6 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Weather Forecast
        </h1>
        
        {isLoading ? (
          <div className="space-y-6">
            <div className="flex items-center justify-center">
              <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-4xl animate-pulse">🌤️</span>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-gray-600 font-medium">{loadingText}</p>
            </div>
            
            <div className="w-full py-2">
              <ProgressBar_17 
                progress={progress}
                height="h-3"
                color="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                backgroundColor="bg-gray-200"
                rounded={true}
                animationDuration={0.3}
                showCounter={true}
              />
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">{weatherData.location}</h2>
                <p className="text-gray-600">Today&apos;s Forecast</p>
              </div>
              <span className="text-5xl">{getWeatherIcon(weatherData.condition)}</span>
            </div>
            
            <div className="flex items-center justify-center py-6">
              <span className="text-6xl font-bold text-gray-800">{weatherData.temperature}</span>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-blue-50 p-3 rounded-lg text-center">
                <p className="text-sm text-gray-600">Condition</p>
                <p className="font-medium text-gray-800">{weatherData.condition}</p>
              </div>
              <div className="bg-blue-50 p-3 rounded-lg text-center">
                <p className="text-sm text-gray-600">Humidity</p>
                <p className="font-medium text-gray-800">{weatherData.humidity}</p>
              </div>
              <div className="bg-blue-50 p-3 rounded-lg text-center">
                <p className="text-sm text-gray-600">Wind</p>
                <p className="font-medium text-gray-800">{weatherData.wind}</p>
              </div>
            </div>
            
            <div className="flex justify-center pt-4">
              <button
                onClick={fetchWeatherData}
                className="px-6 py-2 rounded-md font-medium text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 shadow-md"
              >
                Refresh Data
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
