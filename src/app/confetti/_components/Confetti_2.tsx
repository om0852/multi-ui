import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const colors = ["bg-red-500", "bg-yellow-400", "bg-green-500", "bg-blue-500", "bg-pink-500"];
const shapes = ["circle", "square", "triangle"];

// Utility to generate random values
const generateRandom = (min: number, max: number) => Math.random() * (max - min) + min;

interface ConfettiPieceProps {
  delay: number;
  duration: number;
  startX: number;
  endX: number;
  endY: number;
  size: number;
  color: string;
  shape: string;
}

const ConfettiPiece: React.FC<ConfettiPieceProps> = ({ delay, duration, startX, endX, endY, size, color, shape }) => {
  const shapeClass =
    shape === "circle"
      ? "rounded-full"
      : shape === "square"
      ? ""
      : "clip-path-[polygon(50%_0%,_0%_100%,_100%_100%)]";

  return (
    <motion.div
      className={`absolute ${color} ${shapeClass}`}
      style={{ width: `${size}px`, height: `${size}px` }}
      initial={{ opacity: 0, x: startX, y: 0, rotate: 0 }}
      animate={{
        opacity: [0, 1, 0],
        x: endX,
        y: endY,
        rotate: 360, // Spinning effect
        scale: [1, 1.5, 1], // Scaling effect
      }}
      transition={{
        delay,
        duration,
        repeat: Infinity,
      }}
    />
  );
};

const Confetti: React.FC = () => {
  const [confettiPieces, setConfettiPieces] = useState<any[]>([]);

  useEffect(() => {
    const screenWidth = window.innerWidth;

    const pieces = Array.from({ length: 100 }).map((_, i) => ({
      id: i,
      delay: generateRandom(0, 2),
      duration: generateRandom(2, 4),
      startX: generateRandom(0, screenWidth), // Dynamically calculate spawn position
      endX: generateRandom(-100, 100), // Drift horizontally
      endY: generateRandom(500, 1000), // Fall to varying depths
      size: generateRandom(6, 12), // Varied size
      color: colors[Math.floor(generateRandom(0, colors.length))],
      shape: shapes[Math.floor(generateRandom(0, shapes.length))],
    }));

    setConfettiPieces(pieces);
  }, []);

  // Render confetti only after hydration
  if (confettiPieces.length === 0) return null;

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {confettiPieces.map(({ id, delay, duration, startX, endX, endY, size, color, shape }) => (
        <ConfettiPiece
          key={id}
          delay={delay}
          duration={duration}
          startX={startX}
          endX={endX + startX}
          endY={endY}
          size={size}
          color={color}
          shape={shape}
        />
      ))}
    </div>
  );
};

export default Confetti;
