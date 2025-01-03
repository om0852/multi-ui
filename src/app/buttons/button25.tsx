import React, { useState } from "react";

interface RippleButtonProps {
  text: string;
  color?: string;
  size?: string;
  onClick?: () => void;
}

const Button25: React.FC<RippleButtonProps> = ({
  text,
  color = "bg-teal-500",
  size = "w-36 h-12",
  onClick,
}) => {
  const [ripple, setRipple] = useState({ x: 0, y: 0, show: false });

  const handleRipple = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setRipple({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      show: true,
    });
    setTimeout(() => setRipple({ ...ripple, show: false }), 500);
    if (onClick) onClick();
  };

  return (
    <button
      className={`relative ${size} ${color} text-white font-bold rounded-lg overflow-hidden`}
      onClick={handleRipple}
    >
      {ripple.show && (
        <span
          className="absolute w-16 h-16 bg-white opacity-30 rounded-full animate-[ripple_0.5s_ease_out]"
          style={{
            top: ripple.y - 32,
            left: ripple.x - 32,
          }}
        ></span>
      )}
      <span className="relative">{text}</span>
    </button>
  );
};

export default Button25;
