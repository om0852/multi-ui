import React from "react";

type GlowBadgeProps = {
  text: string;
  color?: string;
};

const GlowBadge: React.FC<GlowBadgeProps> = ({ text, color = "bg-indigo-500", ...props }) => {
  return (
    <span
      className={`inline-block px-4 py-2 text-white text-sm font-bold rounded-full shadow-lg ${color} relative animate-glow`}
      {...props}
    >
      {text}
      <style>
        {`
          @keyframes glow {
            0% {
              box-shadow: 0 0 5px rgba(0, 0, 0, 0);
            }
            50% {
              box-shadow: 0 0 20px rgba(99, 102, 241, 0.8);
            }
            100% {
              box-shadow: 0 0 5px rgba(0, 0, 0, 0);
            }
          }
          .animate-glow {
            animation: glow 2s infinite;
          }
        `}
      </style>
    </span>
  );
};

export default GlowBadge;
