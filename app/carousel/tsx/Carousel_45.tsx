"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Carousel45Props {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
  spiralTurns?: number
  spiralSpeed?: number
}

const Carousel45 = ({
  children,
  autoPlay = false,
  interval = 3000,
  spiralTurns = 2,
  spiralSpeed = 1,
}: Carousel45Props) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === children.length - 1 ? 0 : prevIndex + 1
    )
  }, [children.length])

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    )
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
          initial={{ 
            opacity: 0,
            scale: 0,
            rotate: 360 * spiralTurns
          }}
          animate={{
            opacity: 1,
            scale: 1,
            rotate: 0,
            transition: {
              duration: 1 / spiralSpeed,
              ease: [0.4, 0, 0.2, 1],
            },
          }}
          exit={{
            opacity: 0,
            scale: 0,
            rotate: -360 * spiralTurns,
            transition: {
              duration: 1 / spiralSpeed,
              ease: [0.4, 0, 0.2, 1],
            },
          }}
          style={{
            transformOrigin: "center center",
          }}
        >
          <motion.div
            className="w-full h-full"
            animate={{
              scale: [1, 1.05, 1],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {children[currentIndex]}
          </motion.div>
        </motion.div>
      </AnimatePresence>

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

export default Carousel45 