import React from "react";

const PulseBadge = ({ text, color = "bg-red-500" }) => {
  return (
    <span
      className={`relative inline-block px-3 py-1 text-white text-sm font-bold rounded-full ${color}`}
    >
      {text}
      <span
        className={`absolute inset-0 w-full h-full rounded-full border-2 border-opacity-50 border-current animate-ping`}
      ></span>
    </span>
  );
};

export default PulseBadge;
