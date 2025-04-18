"use client"
import React from "react";

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
      className={`relative ${overflowClasses} rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg`}
      style={{
        scrollbarWidth: "thin",
        scrollbarColor: `${thumbColor} ${trackColor}`,
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
          border-radius: 12px;
          margin: 4px;
          border: 3px solid transparent;
          background-clip: padding-box;
          box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.05);
        }
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom right, ${thumbColor}, ${thumbColor}dd);
          border-radius: 12px;
          border: 3px solid transparent;
          background-clip: padding-box;
          transition: all 0.3s ease;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom right, ${thumbColor}dd, ${thumbColor});
          box-shadow: 0 0 10px ${thumbColor}66;
        }
        ::-webkit-scrollbar-corner {
          background: transparent;
        }
      `}</style>
      {children}
    </div>
  );
};



export default ScrollArea;