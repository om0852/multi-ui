import React, { useState } from "react";

type RippleBadgeProps = {
  text: string;
  color?: string;
};

const RippleBadge: React.FC<RippleBadgeProps> = ({ text, color = "bg-violet-500" }) => {
  const [isRippling, setIsRippling] = useState(false);

  const handleClick = () => {
    setIsRippling(true);
    setTimeout(() => setIsRippling(false), 600);
  };

  return (
    <div className="relative inline-block">
      <div
        onClick={handleClick}
        className={`${color} px-4 py-2 text-white font-semibold rounded-lg cursor-pointer
        ${isRippling ? 'after:animate-ripple' : ''} 
        after:absolute after:inset-0 after:rounded-lg after:bg-white after:opacity-0`}
      >
        {text}
      </div>
    </div>
  );
};

export default RippleBadge;
