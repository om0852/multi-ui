import React from "react";

type SpinBadgeProps = {
  text: string;
  color?: string;
};

const SpinBadge: React.FC<SpinBadgeProps> = ({ text, color = "bg-red-500" }) => {
  return (
    <span
      className={`inline-block px-4 py-2 text-white text-sm font-semibold rounded-full shadow-lg ${color} transition-transform duration-300 hover:rotate-180`}
    >
      {text}
    </span>
  );
};

export default SpinBadge;
