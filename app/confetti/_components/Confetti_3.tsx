import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const colors = [
  "bg-red-500",
  "bg-yellow-400",
  "bg-green-500",
  "bg-blue-500",
  "bg-pink-500",
  "bg-purple-400",
  "bg-orange-400",
];

const shapes = ["circle", "square", "triangle", "star", "diamond"];

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

const ConfettiPiece: React.FC<ConfettiPieceProps> = ({
  delay,
  duration,
  startX,
  endX,
  endY,
  size,
  color,
  shape,
}) => {
  const shapeClass =
    shape === "circle"
      ? "rounded-full"
      : shape === "square"
      ? ""
      : shape === "triangle"
      ? "clip-path-[polygon(50%_0%,_0%_100%,_100%_100%)]"
      : shape === "star"
      ? "clip-path-[polygon(50%_0%,_61%_35%,_98%_35%,_68%_57%,_79%_91%,_50%_70%,_21%_91%,_32%_57%,_2%_35%,_39%_35%)]"
      : "clip-path-[polygon(50%_0%,_100%_50%,_50%_100%,_0%_50%)]"; // Diamond shape

  return (
    <motion.div
      className={`absolute ${color} ${shapeClass}`}
      style={{ width: `${size}px`, height: `${size}px` }}
      initial={{ opacity: 0, x: startX, y: 0, rotate: 0 }}
      animate={{
        opacity: [0, 1, 0],
        x: endX,
        y: endY,
        rotate: [0, 360],
        scale: [1, 1.5, 1],
      }}
      transition={{
        delay,
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

const Confetti: React.FC = () => {
  const [confettiPieces, setConfettiPieces] = useState<any[]>([]);

  useEffect(() => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const pieces = Array.from({ length: 150 }).map((_, i) => ({
      id: i,
      delay: generateRandom(0, 2),
      duration: generateRandom(3, 6),
      startX: generateRandom(0, screenWidth),
      endX: generateRandom(-200, 200), // Drift horizontally
      endY: generateRandom(screenHeight / 2, screenHeight), // Fall to varying depths
      size: generateRandom(8, 16), // Varied size
      color: colors[Math.floor(generateRandom(0, colors.length))],
      shape: shapes[Math.floor(generateRandom(0, shapes.length))],
    }));

    setConfettiPieces(pieces);
  }, []);

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
