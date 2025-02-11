"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Carousel39Props {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
  flipDirection?: "horizontal" | "vertical"
  perspective?: number
}

const Carousel39 = ({
  children,
  autoPlay = false,
  interval = 3000,
  flipDirection = "horizontal",
  perspective = 1000,
}: Carousel39Props) => {
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
      style={{ perspective: `${perspective}px` }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="absolute inset-0"
          initial={{
            opacity: 0,
            rotateX: flipDirection === "vertical" ? 90 : 0,
            rotateY: flipDirection === "horizontal" ? -90 : 0,
          }}
          animate={{
            opacity: 1,
            rotateX: 0,
            rotateY: 0,
            transition: {
              duration: 0.8,
              ease: "easeOut",
            },
          }}
          exit={{
            opacity: 0,
            rotateX: flipDirection === "vertical" ? -90 : 0,
            rotateY: flipDirection === "horizontal" ? 90 : 0,
            transition: {
              duration: 0.8,
              ease: "easeIn",
            },
          }}
          style={{
            transformStyle: "preserve-3d",
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
    </div>
  )
}

export default Carousel39 