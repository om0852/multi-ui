import React, { useState } from "react";

type TypingBadgeProps = {
  text: string;
  color?: string;
};

const TypingBadge: React.FC<TypingBadgeProps> = ({ text, color = "bg-teal-500" }) => {
  const [isTyping, setIsTyping] = useState(false);

  return (
    <div
      className={`inline-block px-4 py-2 text-white font-semibold rounded-lg ${color} cursor-pointer`}
      onMouseEnter={() => setIsTyping(true)}
      onMouseLeave={() => setIsTyping(false)}
    >
      <span className={isTyping ? 'animate-typing overflow-hidden whitespace-nowrap' : ''}>
        {text}
      </span>
      <span className={isTyping ? 'animate-blink' : 'opacity-0'}>|</span>
    </div>
  );
};

export default TypingBadge; 