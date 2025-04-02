import React from "react";

const PulsingGlowBadge = ({ text, color = "bg-purple-500", glowColor = "purple" }) => {
  return (
    <div
      className={`inline-block px-4 py-2 text-white font-semibold rounded-full ${color} 
      animate-pulse shadow-lg hover:shadow-2xl transition-shadow duration-300`}
      style={{ boxShadow: `0 0 15px ${glowColor}` }}
    >
      {text}
    </div>
  );
};

export default PulsingGlowBadge;
