import React, { useState } from "react";

type BouncingGlowBadgeProps = {
  text: string;
  color?: string;
};

const BouncingGlowBadge: React.FC<BouncingGlowBadgeProps> = ({
  text,
  color = "bg-amber-500",
  ...props
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative inline-block px-4 py-2 text-white text-sm font-bold rounded-full transition-all duration-300 ${color} ${
        hovered ? "scale-110 shadow-xl" : "scale-100 shadow"
      }`}
      style={{
        animation: hovered ? "bounce 0.6s infinite alternate" : undefined,
      }}
      {...props}
    >
      {text}
      <style>
        {`
          @keyframes bounce {
            0% {
              transform: translateY(0px);
            }
            100% {
              transform: translateY(-8px);
            }
          }
        `}
      </style>
    </span>
  );
};

export default BouncingGlowBadge;
