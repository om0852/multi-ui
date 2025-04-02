import React from "react";

const SpinningRibbonBadge = ({ text, color = "bg-purple-500", size = "w-32 h-32" }) => {
  return (
    <div className="relative flex items-center justify-center">
      {/* Spinning Ribbon Effect */}
      <div
        className={`absolute rounded-full border-4 border-dashed border-opacity-50 ${color} ${size} animate-spin`}
      ></div>

      {/* Badge Content */}
      <span
        className={`relative inline-block px-4 py-2 text-white font-bold text-sm rounded-full ${color}`}
      >
        {text}
      </span>
    </div>
  );
};

export default SpinningRibbonBadge;
