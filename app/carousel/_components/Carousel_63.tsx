"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Carousel63Props {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
  tileSize?: number
  shatterForce?: number
}

interface MosaicTile {
  id: number
  x: number
  y: number
  size: number
  delay: number
  rotation: number
  scale: number
}

const Carousel63 = ({
  children,
  autoPlay = false,
  interval = 3000,
  tileSize = 40,
  shatterForce = 1,
}: Carousel63Props) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [tiles, setTiles] = useState<MosaicTile[]>([])
  const [direction, setDirection] = useState<"left" | "right">("right")

  const nextSlide = useCallback(() => {
    setDirection("right")
    setCurrentIndex((prevIndex) =>
      prevIndex === children.length - 1 ? 0 : prevIndex + 1
    )
    generateTiles()
  }, [children.length])

  const prevSlide = () => {
    setDirection("left")
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    )
    generateTiles()
  }

  const generateTiles = () => {
    const cols = Math.ceil(400 / tileSize)
    const rows = Math.ceil(400 / tileSize)
    const newTiles = []

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        newTiles.push({
          id: i * cols + j,
          x: j * tileSize,
          y: i * tileSize,
          size: tileSize,
          delay: Math.random() * 0.5,
          rotation: (Math.random() - 0.5) * 360 * shatterForce,
          scale: 0.5 + Math.random() * 0.5,
        })
      }
    }

    setTiles(newTiles)
  }

  useEffect(() => {
    if (autoPlay && !isHovered) {
      const timer = setInterval(nextSlide, interval)
      return () => clearInterval(timer)
    }
  }, [autoPlay, interval, nextSlide, isHovered])

  return (
    <div
      className="relative w-full h-[400px] overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              duration: 0.8,
              ease: "easeOut",
            },
          }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.8,
              ease: "easeIn",
            },
          }}
        >
          {children[currentIndex]}
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        {tiles.map((tile) => (
          <motion.div
            key={`${tile.id}-${currentIndex}`}
            className="absolute"
            style={{
              width: `${tile.size}px`,
              height: `${tile.size}px`,
              left: `${tile.x}px`,
              top: `${tile.y}px`,
              transformOrigin: "center",
            }}
            initial={{
              opacity: 1,
              scale: 1,
              rotate: 0,
              x: 0,
              y: 0,
            }}
            animate={{
              opacity: [1, 0],
              scale: [1, tile.scale],
              rotate: tile.rotation,
              x: (Math.random() - 0.5) * 200 * shatterForce,
              y: (Math.random() - 0.5) * 200 * shatterForce,
            }}
            transition={{
              duration: 1,
              delay: tile.delay,
              ease: "easeOut",
            }}
          >
            <div
              className="w-full h-full"
              style={{
                background: "rgba(255,255,255,0.1)",
                backdropFilter: "blur(4px)",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            />
          </motion.div>
        ))}
      </AnimatePresence>

      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)",
        }}
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/30 p-2 rounded-full hover:bg-white/50 transition-colors z-10"
      >
        ←
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/30 p-2 rounded-full hover:bg-white/50 transition-colors z-10"
      >
        →
      </button>
    </div>
  )
}

export default Carousel63 