"use client";
import { useState } from "react";
import {
  StyledDialog,
  StyledDialogTrigger,
  StyledDialogContent,
  StyledDialogHeader,
  StyledDialogDescription,
  StyledDialogFooter,
} from "../_components/Dialog_13";

type AnimationType = "rain" | "thunder" | "wind" | "sun";

export default function Example_13() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState<AnimationType>("sun");

  const animations: AnimationType[] = ["rain", "thunder", "wind", "sun"];
  const weatherDescriptions = {
    rain: "Light showers expected",
    thunder: "Thunderstorms in the area",
    wind: "Strong gusts of wind",
    sun: "Clear skies and sunshine",
  };
  
  return (
    <div className="p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8 bg-gradient-to-br from-sky-400 to-blue-600 min-h-[400px] max-w-5xl mx-auto">
      <div className="space-y-3 sm:space-y-4">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white">Weather Forecast Dialog</h2>
        <p className="text-sm sm:text-base text-white/80">
          A weather-themed dialog with beautiful animations matching different weather conditions.
        </p>
        <div className="flex flex-wrap gap-2">
          {animations.map((animation) => (
            <button
              key={animation}
              onClick={() => setCurrentAnimation(animation)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium 
                ${currentAnimation === animation
                  ? "bg-white text-sky-700"
                  : "bg-white/20 text-white hover:bg-white/30"
                } backdrop-blur-sm transition-colors`}
            >
              {animation.charAt(0).toUpperCase() + animation.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center sm:space-x-4 space-y-4 sm:space-y-0">
        <StyledDialog>
          <StyledDialogTrigger onClick={() => setIsDialogOpen(true)}>
            <span className="block text-sm sm:text-base">Check Weather</span>
          </StyledDialogTrigger>
          <StyledDialogContent
            isOpen={isDialogOpen}
            onClose={() => setIsDialogOpen(false)}
            animationType={currentAnimation}
          >
            <StyledDialogHeader>
              Weather Forecast
            </StyledDialogHeader>
            <StyledDialogDescription>
              Today&apos;s forecast shows {weatherDescriptions[currentAnimation]}.
              The temperature will range from 68°F to 75°F throughout the day.
            </StyledDialogDescription>
            <div className="my-4 sm:my-6">
              <p className="text-sky-700 font-medium">
                Hourly Forecast:
              </p>
              <ul className="mt-2 space-y-2 text-sky-700">
                <li className="flex justify-between items-center">
                  <span>Morning</span>
                  <span className="font-medium">68°F</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Afternoon</span>
                  <span className="font-medium">75°F</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Evening</span>
                  <span className="font-medium">72°F</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Night</span>
                  <span className="font-medium">65°F</span>
                </li>
              </ul>
            </div>
            <StyledDialogFooter>
              <button
                onClick={() => setIsDialogOpen(false)}
                className="w-full sm:w-auto px-4 py-2 bg-gray-100 text-sky-700 
                  font-medium rounded-full hover:bg-gray-200 transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setIsDialogOpen(false);
                  alert("Weather details saved!");
                }}
                className="w-full sm:w-auto px-4 py-2 bg-gradient-to-r from-sky-400 to-blue-500
                  text-white font-medium rounded-full hover:from-sky-500 hover:to-blue-600
                  transition-colors"
              >
                Save
              </button>
            </StyledDialogFooter>
          </StyledDialogContent>
        </StyledDialog>
        
        <div className="hidden sm:block text-sm bg-white/20 backdrop-blur-md p-3 rounded-lg text-white max-w-xs">
          <p>Explore different weather animations by selecting conditions above and opening the dialog.</p>
        </div>
      </div>
      
      <div className="sm:hidden text-sm bg-white/20 backdrop-blur-md p-3 rounded-lg text-white mb-4">
        <p>Explore different weather animations by selecting conditions above and opening the dialog.</p>
      </div>

      <div className="mt-4 sm:mt-8 p-3 sm:p-4 rounded-lg bg-white/10 backdrop-blur-md">
        <h3 className="text-white font-bold mb-2 text-base sm:text-lg">About This Dialog</h3>
        <p className="text-white/80 text-sm sm:text-base">
          Dialog_13 features a beautiful weather-themed design with soft gradients and 
          weather-inspired animations. Each animation style corresponds to a different 
          weather condition: Rain, Thunder, Wind, and Sun. The dialog uses a light color 
          scheme with sky blue accents for a fresh and clean appearance.
        </p>
      </div>
    </div>
  );
}

