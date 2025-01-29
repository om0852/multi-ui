"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Carousel34Props {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
  kaleidoscopeSegments?: number
  rotationSpeed?: number
}

const Carousel34 = ({
  children,
  autoPlay = false,
  interval = 3000,
  kaleidoscopeSegments = 8,
  rotationSpeed = 1,
}: Carousel34Props) => {
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
          initial={{ opacity: 0, scale: 0.8, rotate: -180 }}
          animate={{
            opacity: 1,
            scale: 1,
            rotate: 0,
            transition: {
              duration: 0.8,
              ease: "easeOut",
            },
          }}
          exit={{
            opacity: 0,
            scale: 0.8,
            rotate: 180,
            transition: {
              duration: 0.8,
              ease: "easeIn",
            },
          }}
          style={{
            clipPath: `polygon(50% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%)`,
            animation: `kaleidoscope ${8 / rotationSpeed}s linear infinite`,
          }}
        >
          {children[currentIndex]}
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

      <style jsx global>{`
        @keyframes kaleidoscope {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  )
}

export default Carousel34 