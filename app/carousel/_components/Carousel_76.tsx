"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Carousel76Props {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
  starCount?: number
  warpSpeed?: number
}

const Carousel76 = ({
  children,
  autoPlay = false,
  interval = 3000,
  starCount = 100,
  warpSpeed = 1,
}: Carousel76Props) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [stars, setStars] = useState<Array<{
    id: number
    x: number
    y: number
    size: number
    color: string
    delay: number
    distance: number
  }>>([])

  const colors = [
    "rgba(255, 255, 255, 0.8)",
    "rgba(200, 220, 255, 0.8)",
    "rgba(180, 200, 255, 0.8)",
    "rgba(160, 180, 255, 0.8)",
  ]

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === children.length - 1 ? 0 : prevIndex + 1
    )
    generateStars()
  }, [children.length])

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    )
    generateStars()
  }

  const generateStars = () => {
    const newStars = Array.from({ length: starCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 1 + Math.random() * 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 0.5,
      distance: Math.random(),
    }))
    setStars(newStars)
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
      style={{ perspective: "1000px" }}
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
        {stars.map((star) => (
          <motion.div
            key={`${star.id}-${currentIndex}`}
            className="absolute rounded-full"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              background: star.color,
              left: `${star.x}%`,
              top: `${star.y}%`,
              boxShadow: `0 0 ${star.size * 2}px ${star.color}`,
              mixBlendMode: "screen",
            }}
            initial={{
              scale: 0,
              opacity: 0,
              z: -1000,
            }}
            animate={{
              scale: [0, 1, star.distance * 4],
              opacity: [0, 1, 0],
              z: [-1000, 0, 1000],
            }}
            transition={{
              duration: 2 / (warpSpeed * (1 + star.distance)),
              delay: star.delay,
              ease: "linear",
              times: [0, 0.1, 1],
              repeat: Infinity,
            }}
          />
        ))}
      </AnimatePresence>

      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, rgba(0,0,255,0.1) 0%, transparent 70%)",
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

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.5) 100%)",
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

export default Carousel76 