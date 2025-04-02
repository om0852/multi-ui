import React from "react";

const PulseHoverBadge = ({ text, color = "bg-green-500" }) => {
  return (
    <div
      className={`inline-block px-4 py-2 text-white font-semibold rounded-lg shadow-lg cursor-pointer ${color} hover:animate-pulse`}
    >
      {text}
    </div>
  );
};

export default PulseHoverBadge;
