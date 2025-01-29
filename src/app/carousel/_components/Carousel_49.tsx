"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Carousel49Props {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
  rotationSpeed?: number
  perspective?: number
}

const Carousel49 = ({
  children,
  autoPlay = false,
  interval = 3000,
  rotationSpeed = 1,
  perspective = 1000,
}: Carousel49Props) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [rotationY, setRotationY] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === children.length - 1 ? 0 : prevIndex + 1
    )
    setRotationY((prev) => prev - 90)
  }, [children.length])

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    )
    setRotationY((prev) => prev + 90)
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
      style={{
        perspective: `${perspective}px`,
      }}
    >
      <motion.div
        className="w-full h-full relative"
        style={{
          transformStyle: "preserve-3d",
        }}
        animate={{
          rotateY: rotationY,
        }}
        transition={{
          duration: 0.8 / rotationSpeed,
          ease: "easeInOut",
        }}
      >
        <motion.div
          className="absolute inset-0"
          style={{
            transformStyle: "preserve-3d",
            transform: "translateZ(200px)",
          }}
        >
          {children[currentIndex]}
        </motion.div>

        <motion.div
          className="absolute inset-0"
          style={{
            transformStyle: "preserve-3d",
            transform: "rotateY(90deg) translateZ(200px)",
          }}
        >
          {children[(currentIndex + 1) % children.length]}
        </motion.div>

        <motion.div
          className="absolute inset-0"
          style={{
            transformStyle: "preserve-3d",
            transform: "rotateY(180deg) translateZ(200px)",
          }}
        >
          {children[(currentIndex + 2) % children.length]}
        </motion.div>

        <motion.div
          className="absolute inset-0"
          style={{
            transformStyle: "preserve-3d",
            transform: "rotateY(270deg) translateZ(200px)",
          }}
        >
          {children[(currentIndex + 3) % children.length]}
        </motion.div>
      </motion.div>

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

export default Carousel49 