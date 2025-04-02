"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Carousel81Props {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
  dustCount?: number
  driftSpeed?: number
}

const Carousel81 = ({
  children,
  autoPlay = false,
  interval = 3000,
  dustCount = 50,
  driftSpeed = 1,
}: Carousel81Props) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [dustParticles, setDustParticles] = useState<Array<{
    id: number
    x: number
    y: number
    size: number
    color: string
    delay: number
    drift: number
  }>>([])

  const colors = [
    "rgba(255, 220, 180, 0.4)",
    "rgba(255, 200, 150, 0.4)",
    "rgba(255, 180, 120, 0.4)",
    "rgba(255, 160, 100, 0.4)",
  ]

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === children.length - 1 ? 0 : prevIndex + 1
    )
    generateDust()
  }, [children.length])

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    )
    generateDust()
  }

  const generateDust = () => {
    const newDust = Array.from({ length: dustCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 1 + Math.random() * 3,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 2,
      drift: -20 + Math.random() * 40,
    }))
    setDustParticles(newDust)
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
        {dustParticles.map((dust) => (
          <motion.div
            key={`${dust.id}-${currentIndex}`}
            className="absolute rounded-full"
            style={{
              width: `${dust.size}px`,
              height: `${dust.size}px`,
              left: `${dust.x}%`,
              top: `${dust.y}%`,
              background: dust.color,
              boxShadow: `0 0 ${dust.size * 2}px ${dust.color}`,
              filter: "blur(1px)",
              mixBlendMode: "screen",
            }}
            initial={{
              scale: 0,
              opacity: 0,
            }}
            animate={{
              scale: [0, 1, 0.5, 1, 0],
              opacity: [0, 0.8, 0.4, 0.8, 0],
              x: [0, dust.drift * driftSpeed],
              y: [0, -50 * driftSpeed],
              rotate: [0, dust.drift * 2],
            }}
            transition={{
              duration: 4 / driftSpeed,
              delay: dust.delay,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
            }}
          />
        ))}
      </AnimatePresence>

      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, rgba(255,180,100,0.1) 0%, transparent 70%)",
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

export default Carousel81 