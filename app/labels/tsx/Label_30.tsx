"use client";

import React from "react";
import { motion } from "framer-motion";

type MagneticLabelProps = {
  text: string;
  color?: string;
  className?: string;
};

export function Label_30({ text, color = "#3b82f6", className = "" }: MagneticLabelProps) {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const ref = React.useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;

    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const x = (clientX - centerX) * 0.2;
    const y = (clientY - centerY) * 0.2;

    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      className={`
        inline-flex items-center px-4 py-1.5
        rounded-md cursor-pointer ${className}
      `}
      style={{ backgroundColor: color }}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <span className="text-sm font-medium text-white">
        {text}
      </span>
    </motion.div>
  );
}

export function Component() {
  return (
    <div className="space-x-4">
      <Label_30 text="Magnetic" color="#3b82f6" />
      <Label_30 text="Interactive" color="#10b981" />
      <Label_30 text="Movement" color="#f59e0b" />
    </div>
  );
} 