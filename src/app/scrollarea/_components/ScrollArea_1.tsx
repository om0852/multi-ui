"use client"
import React, { useState } from "react";

interface ScrollAreaProps {
  orientation: "vertical" | "horizontal" | "both";
  scrollbarThickness: number;
  thumbColor: string;
  trackColor: string;
  children: React.ReactNode;
}

const ScrollArea: React.FC<ScrollAreaProps> = ({
  orientation,
  scrollbarThickness,
  thumbColor,
  trackColor,
  children,
}) => {
  // Determine overflow styles based on orientation
  const overflowClasses =
    orientation === "vertical"
      ? "overflow-y-auto"
      : orientation === "horizontal"
      ? "overflow-x-auto"
      : "overflow-auto";

  return (
    <div
      className={`relative ${overflowClasses} rounded-md w-full h-[auto] border`}
      style={{
        scrollbarWidth: `${scrollbarThickness}px` as 'thin' | 'none' | 'auto', // For Firefox
        scrollbarColor: `${thumbColor} ${trackColor}`, // Thumb and track colors for Firefox
      }}
    >
      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        ::-webkit-scrollbar {
          width: ${orientation === "vertical" || orientation === "both"
            ? `${scrollbarThickness}px`
            : "0"};
          height: ${orientation === "horizontal" || orientation === "both"
            ? `${scrollbarThickness}px`
            : "0"};
        }
        ::-webkit-scrollbar-track {
          background: ${trackColor};
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb {
          background: ${thumbColor};
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: ${thumbColor};
          opacity: 0.8;
        }
      `}</style>
      {children}
    </div>
  );
};

export function ScrollAreaDemo() {
  const [orientation, setOrientation] = useState<"vertical" | "horizontal" | "both">("both");
  const [scrollbarThickness, setScrollbarThickness] = useState(8);
  const [thumbColor, setThumbColor] = useState("#4b5563"); // Tailwind: text-gray-600
  const [trackColor, setTrackColor] = useState("#f1f5f9"); // Tailwind: bg-gray-100

  const tags = Array.from({ length: 50 }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`
  );

  return (
    <div className="p-4 space-y-6">
      {/* Adjustment Controls */}
      <div className="flex flex-col space-y-4 p-4 bg-gray-100 rounded-md border">
        <label className="flex items-center space-x-4">
          <span>Orientation:</span>
          <select
            className="p-2 border rounded-md"
            value={orientation}
            onChange={(e) =>
              setOrientation(e.target.value as "vertical" | "horizontal" | "both")
            }
          >
            <option value="vertical">Vertical</option>
            <option value="horizontal">Horizontal</option>
            <option value="both">Both</option>
          </select>
        </label>
        <label className="flex items-center space-x-4">
          <span>Scrollbar Thickness:</span>
          <input
            type="number"
            className="p-2 border rounded-md w-20"
            min="4"
            max="20"
            value={scrollbarThickness}
            onChange={(e) => setScrollbarThickness(Number(e.target.value))}
          />
        </label>
        <label className="flex items-center space-x-4">
          <span>Thumb Color:</span>
          <input
            type="color"
            className="p-1 rounded-md"
            value={thumbColor}
            onChange={(e) => setThumbColor(e.target.value)}
          />
        </label>
        <label className="flex items-center space-x-4">
          <span>Track Color:</span>
          <input
            type="color"
            className="p-1 rounded-md"
            value={trackColor}
            onChange={(e) => setTrackColor(e.target.value)}
          />
        </label>
      </div>

      {/* Scrollable Area */}
      <ScrollArea
        orientation={"horizontal"}
        scrollbarThickness={scrollbarThickness}
        thumbColor={thumbColor}
        trackColor={"red"}
      >
        <div className="min-w-[auto] flex h-[10vh] p-4 space-y-2">
          <h4 className="text-sm flex flex-row font-medium leading-none">Tags</h4>
          {tags.map((tag, index) => (
            <div key={index} className="text-sm">
              {tag}
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
