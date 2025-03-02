import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Array of image URLs passed by the user
const images = [
  "https://img.icons8.com/?size=100&id=63230&format=png&color=000000",
  "https://img.icons8.com/?size=100&id=t0pRVC1Kipju&format=png&color=000000",
  "https://img.icons8.com/?size=100&id=17570&format=png&color=000000",
  // Add more image URLs as needed
];

const generateRandom = (min: number, max: number) => Math.random() * (max - min) + min;

interface ConfettiPieceProps {
  delay: number;
  duration: number;
  startX: number;
  endX: number;
  endY: number;
  size: number;
  imageUrl: string;
}

const ConfettiPiece: React.FC<ConfettiPieceProps> = ({
  delay,
  duration,
  startX,
  endX,
  endY,
  size,
  imageUrl,
}) => {
  return (
    <motion.div
      className={`absolute`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        left: startX,
        top: 0,
      }}
      initial={{ opacity: 0, x: 0, y: 0, scale: 0.5, rotate: 0 }}
      animate={{
        opacity: [0, 1, 0],
        x: endX,
        y: endY,
        rotate: [0, 180, 360],
        scale: [1, 1.8, 1],
      }}
      transition={{
        delay,
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <img src={imageUrl} alt="confetti" className="w-full h-full object-contain" />
    </motion.div>
  );
};
interface PiecesProps{
  id: number;
  delay: number;
  duration: number;
  startX: number;
  endX: number;
  endY: number;
  size: number;
  imageUrl: string;
}
const Confetti: React.FC = () => {

  const [confettiPieces, setConfettiPieces] = useState<PiecesProps[]>([]);

  useEffect(() => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const pieces = Array.from({ length: 200 }).map((_, i) => ({
      id: i,
      delay: generateRandom(0, 2),
      duration: generateRandom(3, 6),
      startX: generateRandom(0, screenWidth),
      endX: generateRandom(-300, 300), // Drift horizontally
      endY: generateRandom(screenHeight / 2, screenHeight), // Fall to varying depths
      size: generateRandom(20, 50), // Smaller to add variety
      imageUrl: images[Math.floor(generateRandom(0, images.length))], // Random image
    }));

    setConfettiPieces(pieces);
  }, []);

  if (confettiPieces.length === 0) return null;

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {confettiPieces.map(({ id, delay, duration, startX, endX, endY, size, imageUrl }) => (
        <ConfettiPiece
          key={id}
          delay={delay}
          duration={duration}
          startX={startX}
          endX={endX + startX}
          endY={endY}
          size={size}
          imageUrl={imageUrl}
        />
      ))}
    </div>
  );
};

export default Confetti;
