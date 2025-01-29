"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Carousel80Props {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
  waveCount?: number
  plasmaSpeed?: number
}

const Carousel80 = ({
  children,
  autoPlay = false,
  interval = 3000,
  waveCount = 5,
  plasmaSpeed = 1,
}: Carousel80Props) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [waves, setWaves] = useState<Array<{
    id: number
    baseY: number
    amplitude: number
    frequency: number
    color: string
    delay: number
  }>>([])

  const colors = [
    "rgba(255, 0, 255, 0.3)",
    "rgba(0, 255, 255, 0.3)",
    "rgba(255, 255, 0, 0.3)",
    "rgba(0, 128, 255, 0.3)",
  ]

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === children.length - 1 ? 0 : prevIndex + 1
    )
    generateWaves()
  }, [children.length])

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    )
    generateWaves()
  }

  const generateWaves = () => {
    const newWaves = Array.from({ length: waveCount }, (_, i) => ({
      id: i,
      baseY: (i / waveCount) * 100,
      amplitude: 20 + Math.random() * 30,
      frequency: 1 + Math.random() * 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: i * 0.2,
    }))
    setWaves(newWaves)
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
        {waves.map((wave) => (
          <motion.div
            key={`${wave.id}-${currentIndex}`}
            className="absolute w-full"
            style={{
              height: "100px",
              top: `${wave.baseY}%`,
              background: `linear-gradient(180deg, transparent, ${wave.color}, transparent)`,
              filter: "blur(20px)",
              mixBlendMode: "screen",
            }}
            initial={{
              scaleY: 0,
              opacity: 0,
            }}
            animate={{
              scaleY: [0, 1, 0.5, 1, 0],
              opacity: [0, 0.8, 0.4, 0.8, 0],
              y: Array.from({ length: 60 }, (_, i) => {
                const progress = i / 59
                return Math.sin(progress * Math.PI * 2 * wave.frequency) * wave.amplitude
              }),
            }}
            transition={{
              duration: 4 / plasmaSpeed,
              delay: wave.delay,
              ease: "linear",
              times: Array.from({ length: 60 }, (_, i) => i / 59),
              repeat: Infinity,
            }}
          />
        ))}
      </AnimatePresence>

      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, rgba(255,128,255,0.1) 0%, transparent 70%)",
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

export default Carousel80 