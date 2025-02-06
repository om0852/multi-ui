import React from "react";

type NeonBadgeProps = {
  text: string;
  color?: string;
};

const NeonBadge: React.FC<NeonBadgeProps> = ({ text, color = "bg-fuchsia-500" }) => {
  return (
    <div
      className={`inline-block px-4 py-2 font-semibold rounded-lg cursor-pointer
      ${color} text-white hover:animate-neon-pulse
      hover:shadow-[0_0_15px_rgba(217,70,219,0.5)] 
      transition-all duration-300`}
    >
      {text}
    </div>
  );
};

export default NeonBadge; 