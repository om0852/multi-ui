import React from "react";
import { motion } from "framer-motion";

const colors = ["bg-red-500", "bg-yellow-400", "bg-green-500", "bg-blue-500", "bg-pink-500"];

// Generate a random number between min and max
const generateRandom = (min: number, max: number) => Math.random() * (max - min) + min;

interface ConfettiPieceProps {
  delay: number;
  duration: number;
  startX: number;
  endX: number;
  endY: number;
  color: string;
}

const ConfettiPiece: React.FC<ConfettiPieceProps> = ({ delay, duration, startX, endX, endY, color }) => (
  <motion.div
    className={`absolute w-3 h-3 rounded-full ${color}`}
    initial={{ opacity: 0, x: startX, y: 0 }}
    animate={{
      opacity: [0, 1, 0],
      x: endX,
      y: endY,
    }}
    transition={{
      delay,
      duration,
      repeat: Infinity,
    }}
  />
);

const Confetti: React.FC = () => {
  const confettiPieces = Array.from({ length: 50 }).map((_, i) => ({
    id: i,
    delay: generateRandom(0, 2),
    duration: generateRandom(1, 3),
    startX: generateRandom(0, window.innerWidth), // Start at a random horizontal position
    endX: generateRandom(-50, 50), // Slight horizontal drift
    endY: generateRandom(300, 600), // Fall to a random vertical position
    color: colors[Math.floor(generateRandom(0, colors.length))],
  }));

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {confettiPieces.map(({ id, delay, duration, startX, endX, endY, color }) => (
        <ConfettiPiece
          key={id}
          delay={delay}
          duration={duration}
          startX={startX}
          endX={endX + startX}
          endY={endY}
          color={color}
        />
      ))}
    </div>
  );
};

export default Confetti;
