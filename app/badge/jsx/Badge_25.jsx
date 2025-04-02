import React from "react";

const SpinBadge = ({ text, color = "bg-blue-500" }) => {
  return (
    <div
      className={`inline-block px-4 py-2 text-white font-semibold rounded-md ${color} 
      hover:rotate-180 transition-transform duration-500 cursor-pointer`}
    >
      {text}
    </div>
  );
};

export default SpinBadge;
