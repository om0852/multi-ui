import React from "react";

type PulseGlowBadgeProps = {
  text: string;
  color?: string;
};

const PulseGlowBadge: React.FC<PulseGlowBadgeProps> = ({
  text,
  color = "bg-blue-500",
}) => {
  return (
    <div className="relative inline-block">
      {/* Badge text */}
      <span
        className={`relative z-10 px-4 py-2 text-white font-semibold rounded-full ${color}`}
      >
        {text}
      </span>
      {/* Outer glowing pulse */}
      <div
        className={`absolute inset-0 w-full h-full rounded-full ${color} opacity-50 blur-md animate-ping`}
      ></div>
    </div>
  );
};

export default PulseGlowBadge;
