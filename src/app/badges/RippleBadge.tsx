import React, { useState } from "react";

type RippleBadgeProps = {
  text: string;
  color?: string;
};

const RippleBadge: React.FC<RippleBadgeProps> = ({ text, color = "bg-blue-500" }) => {
  const [ripple, setRipple] = useState<{ x: number; y: number } | null>(null);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setRipple({ x: e.clientX - rect.left, y: e.clientY - rect.top });

    setTimeout(() => setRipple(null), 600);
  };

  return (
    <div
      className={`relative inline-flex items-center justify-center px-4 py-2 text-white font-semibold rounded-lg cursor-pointer overflow-hidden ${color}`}
      onClick={handleClick}
    >
      {text}
      {ripple && (
        <span
          className="absolute bg-white opacity-50 rounded-full transform scale-0 animate-ripple"
          style={{
            top: ripple.y,
            left: ripple.x,
            width: "100px",
            height: "100px",
          }}
        />
      )}
    </div>
  );
};

export default RippleBadge;
