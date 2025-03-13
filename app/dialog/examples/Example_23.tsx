"use client";

import { useState } from "react";
import {
  StyledDialog,
  StyledDialogTrigger,
  StyledDialogContent,
  StyledDialogHeader,
  StyledDialogDescription,
  StyledDialogFooter,
} from "../_components/Dialog_23";

type AnimationType = "calendar" | "month" | "date" | "event";

export default function Example_23() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState<AnimationType>("calendar");

  const animations: AnimationType[] = ["calendar", "month", "date", "event"];
  const calendarDescriptions = {
    calendar: "Full calendar view transition",
    month: "Monthly view sliding effect",
    date: "Date selection highlight",
    event: "Event details expansion",
  };

  return (
    <div className="p-8 space-y-8 bg-gradient-to-br from-blue-50 to-indigo-50 min-h-[400px]">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-blue-900 text-center">
          Calendar Dialog
          <span className="inline-block ml-2">📅</span>
        </h2>
        <p className="text-blue-600 text-center text-sm">
          Schedule and manage events with elegant transitions
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          {animations.map((animation) => (
            <button
              key={animation}
              onClick={() => setCurrentAnimation(animation)}
              className={`px-4 py-2 rounded-lg ${
                currentAnimation === animation
                  ? "bg-blue-600 text-white shadow-blue-200"
                  : "bg-white text-blue-600 hover:bg-blue-50"
              } transition-all duration-200 shadow-sm border border-blue-100`}
            >
              {animation}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center">
        <StyledDialog>
          <StyledDialogTrigger onClick={() => setIsDialogOpen(true)}>
            Schedule Event
          </StyledDialogTrigger>
          <StyledDialogContent
            isOpen={isDialogOpen}
            onClose={() => setIsDialogOpen(false)}
            animationType={currentAnimation}
          >
            <StyledDialogHeader>
              New Event
            </StyledDialogHeader>
            <StyledDialogDescription>
              Using {currentAnimation} animation: {calendarDescriptions[currentAnimation]}.
              Try different animations to see calendar interactions!
            </StyledDialogDescription>
            <div className="my-6">
              <div className="grid grid-cols-7 gap-1 mb-4">
                {Array.from({ length: 7 }).map((_, i) => (
                  <div key={i} className="text-center text-blue-400 text-sm font-medium">
                    {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"][i]}
                  </div>
                ))}
                {Array.from({ length: 35 }).map((_, i) => (
                  <button
                    key={i}
                    className={`aspect-square rounded-full text-sm flex items-center justify-center
                      ${i === 15 ? "bg-blue-600 text-white" : "hover:bg-blue-50 text-blue-900"}`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Event title"
                  className="w-full px-3 py-2 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                  placeholder="Event description"
                  className="w-full px-3 py-2 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={3}
                />
              </div>
            </div>
            <StyledDialogFooter>
              <button
                onClick={() => setIsDialogOpen(false)}
                className="px-6 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setIsDialogOpen(false);
                  alert("Event scheduled successfully!");
                }}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 
                  transition-colors shadow-sm shadow-blue-200"
              >
                Schedule
              </button>
            </StyledDialogFooter>
          </StyledDialogContent>
        </StyledDialog>
      </div>

      <div className="mt-8 p-6 bg-white rounded-xl shadow-sm border border-blue-100">
        <h3 className="text-blue-900 font-semibold mb-2">
          About this Dialog
        </h3>
        <p className="text-blue-600 text-sm leading-relaxed">
          Dialog_23 is designed for calendar and scheduling applications. It features 
          smooth transitions for different calendar views, date selections, and event 
          management. The interface includes a mini calendar, event form, and intuitive 
          navigation between different time periods, all enhanced with carefully crafted 
          animations that make scheduling feel natural and effortless.
        </p>
      </div>
    </div>
  );
}
