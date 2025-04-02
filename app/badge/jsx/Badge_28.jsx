import React from "react";

const TiltBadge = ({ text, color = "bg-cyan-500" }) => {
  return (
    <div
      className={`inline-block px-4 py-2 text-white font-semibold rounded-lg ${color} 
      hover:skew-x-12 transition-transform duration-300 cursor-pointer`}
    >
      {text}
    </div>
  );
};

export default TiltBadge;
