import React from "react";

type SlidingGlowBadgeProps = {
  text: string;
  color?: string;
};

const SlidingGlowBadge: React.FC<SlidingGlowBadgeProps> = ({
  text,
  color = "bg-indigo-500",
}) => {
  return (
    <span
      className={`relative inline-block px-4 py-2 text-white text-sm font-semibold rounded-full ${color} overflow-hidden`}
    >
      {text}
      <span
        className="absolute inset-0 rounded-full border-2 border-transparent"
        style={{
          animation: "glow 2s linear infinite",
          background: `linear-gradient(90deg, rgba(255,255,255,0) 25%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0) 75%)`,
          maskImage: "linear-gradient(black, black)",
          WebkitMaskImage: "linear-gradient(black, black)",
        }}
      />
      <style>
        {`
          @keyframes glow {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </span>
  );
};

export default SlidingGlowBadge;
