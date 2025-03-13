"use client";

import { useState } from "react";
import {
  StyledDialog,
  StyledDialogTrigger,
  StyledDialogContent,
  StyledDialogHeader,
  StyledDialogDescription,
  StyledDialogFooter,
} from "../_components/Dialog_27";

type AnimationType = "destination" | "booking" | "calendar" | "flight";

export default function Example_27() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState<AnimationType>("destination");

  const animations: AnimationType[] = ["destination", "booking", "calendar", "flight"];
  const travelDescriptions = {
    destination: "Explore new destinations",
    booking: "Seamless booking process",
    calendar: "Plan your travel dates",
    flight: "Take off with ease",
  };

  return (
    <div className="p-8 space-y-8 bg-gradient-to-br from-blue-50 to-teal-50 min-h-[400px]">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-teal-900 text-center">
          Travel Booking Dialog
          <span className="inline-block ml-2">✈️</span>
        </h2>
        <p className="text-teal-600 text-center text-sm">
          Plan your next adventure with smooth transitions
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          {animations.map((animation) => (
            <button
              key={animation}
              onClick={() => setCurrentAnimation(animation)}
              className={`px-4 py-2 rounded-lg ${
                currentAnimation === animation
                  ? "bg-teal-600 text-white shadow-teal-200"
                  : "bg-white text-teal-600 hover:bg-teal-50"
              } transition-all duration-200 shadow-sm border border-teal-100`}
            >
              {animation}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center">
        <StyledDialog>
          <StyledDialogTrigger onClick={() => setIsDialogOpen(true)}>
            Book Your Trip
          </StyledDialogTrigger>
          <StyledDialogContent
            isOpen={isDialogOpen}
            onClose={() => setIsDialogOpen(false)}
            animationType={currentAnimation}
          >
            <StyledDialogHeader>
              Travel Itinerary
            </StyledDialogHeader>
            <StyledDialogDescription>
              Experience the {currentAnimation} animation: {travelDescriptions[currentAnimation]}.
              Choose different animations to see how your travel plans come to life!
            </StyledDialogDescription>
            <div className="my-6">
              <p className="text-teal-600 font-semibold">
                Dialog_27 features:
              </p>
              <ul className="list-none mt-2 space-y-2 text-teal-700">
                <li>🌍 Explore destinations</li>
                <li>🛫 Flight booking</li>
                <li>📅 Calendar planning</li>
                <li>🧳 Seamless transitions</li>
                <li>🌟 Travel-inspired design</li>
              </ul>
            </div>
            <StyledDialogFooter>
              <button
                onClick={() => setIsDialogOpen(false)}
                className="px-6 py-2 text-teal-600 hover:bg-teal-50 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setIsDialogOpen(false);
                  alert("Trip booked successfully!");
                }}
                className="px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 
                  transition-colors shadow-sm shadow-teal-200"
              >
                Confirm
              </button>
            </StyledDialogFooter>
          </StyledDialogContent>
        </StyledDialog>
      </div>

      <div className="mt-8 p-6 bg-white rounded-xl shadow-sm border border-teal-100">
        <h3 className="text-teal-900 font-semibold mb-2">
          About this Dialog
        </h3>
        <p className="text-teal-600 text-sm leading-relaxed">
          Dialog_27 is designed for travel booking applications. It features 
          smooth transitions for exploring destinations, booking flights, and 
          planning travel dates. The interface includes travel-themed elements, 
          intuitive navigation, and a calming color palette that enhances the 
          user experience.
        </p>
      </div>
    </div>
  );
}
