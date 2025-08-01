import React from "react";

type PulseBadgeProps = {
  text: string;
  color?: string;
};

const PulseHoverBadge: React.FC<PulseBadgeProps> = ({ text, color = "bg-green-500", ...props }) => {
  return (
    <div
      className={`inline-block px-4 py-2 text-white font-semibold rounded-lg shadow-lg cursor-pointer ${color} hover:animate-pulse`}
      {...props}
    >
      {text}
    </div>
  );
};

export default PulseHoverBadge;
