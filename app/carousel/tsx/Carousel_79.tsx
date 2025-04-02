"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Carousel79Props {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
  gridSize?: number
  pulseSpeed?: number
}

const Carousel79 = ({
  children,
  autoPlay = false,
  interval = 3000,
  gridSize = 10,
  pulseSpeed = 1,
}: Carousel79Props) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [lasers, setLasers] = useState<Array<{
    id: number
    isHorizontal: boolean
    position: number
    color: string
    delay: number
  }>>([])

  const colors = [
    "#00ff00",
    "#00ffaa",
    "#00ffff",
    "#00aaff",
  ]

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === children.length - 1 ? 0 : prevIndex + 1
    )
    generateLasers()
  }, [children.length])

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    )
    generateLasers()
  }

  const generateLasers = () => {
    const horizontalLasers = Array.from({ length: gridSize }, (_, i) => ({
      id: i,
      isHorizontal: true,
      position: (i + 1) * (100 / (gridSize + 1)),
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: i * 0.1,
    }))

    const verticalLasers = Array.from({ length: gridSize }, (_, i) => ({
      id: i + gridSize,
      isHorizontal: false,
      position: (i + 1) * (100 / (gridSize + 1)),
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: (i + gridSize) * 0.1,
    }))

    setLasers([...horizontalLasers, ...verticalLasers])
  }

  useEffect(() => {
    if (autoPlay && !isHovered) {
      const timer = setInterval(nextSlide, interval)
      return () => clearInterval(timer)
    }
  }, [autoPlay, interval, nextSlide, isHovered])

  return (
    <div
      className="relative w-full h-[400px] overflow-hidden bg-black"
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
        {lasers.map((laser) => (
          <motion.div
            key={`${laser.id}-${currentIndex}`}
            className="absolute"
            style={{
              left: laser.isHorizontal ? 0 : `${laser.position}%`,
              top: laser.isHorizontal ? `${laser.position}%` : 0,
              width: laser.isHorizontal ? "100%" : "1px",
              height: laser.isHorizontal ? "1px" : "100%",
              background: laser.color,
              boxShadow: `0 0 10px ${laser.color}`,
              filter: "blur(1px)",
              mixBlendMode: "screen",
              transformOrigin: "center",
            }}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: [0, 0.8, 0.2, 0.8, 0],
              boxShadow: [
                `0 0 5px ${laser.color}`,
                `0 0 20px ${laser.color}`,
                `0 0 10px ${laser.color}`,
                `0 0 20px ${laser.color}`,
                `0 0 5px ${laser.color}`,
              ],
            }}
            transition={{
              duration: 2 / pulseSpeed,
              delay: laser.delay,
              ease: "linear",
              times: [0, 0.2, 0.5, 0.8, 1],
            }}
          />
        ))}
      </AnimatePresence>

      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, rgba(0,255,128,0.1) 0%, transparent 70%)",
          mixBlendMode: "screen",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 3,
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

export default Carousel79 
