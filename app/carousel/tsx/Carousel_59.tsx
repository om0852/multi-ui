"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Carousel59Props {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
  waveCount?: number
  waveAmplitude?: number
}

const Carousel59 = ({
  children,
  autoPlay = false,
  interval = 3000,
  waveCount = 20,
  waveAmplitude = 1,
}: Carousel59Props) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [waves, setWaves] = useState<Array<{
    id: number
    height: number
    delay: number
    speed: number
  }>>([])

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
      height: Math.random() * 100 * waveAmplitude,
      delay: i * 0.05,
      speed: 0.5 + Math.random() * 0.5,
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
        <div className="absolute inset-0 flex items-center justify-around pointer-events-none">
          {waves.map((wave) => (
            <motion.div
              key={`${wave.id}-${currentIndex}`}
              className="h-full w-2 flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="w-full bg-white/30 rounded-full"
                style={{
                  height: "2px",
                  filter: "blur(1px)",
                }}
                animate={{
                  height: [2, wave.height, 2],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: wave.speed,
                  delay: wave.delay,
                  repeat: 2,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          ))}
        </div>
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

export default Carousel59 