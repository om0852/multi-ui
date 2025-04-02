"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Carousel41Props {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
  rippleCount?: number
  rippleSpeed?: number
}

const Carousel41 = ({
  children,
  autoPlay = false,
  interval = 3000,
  rippleCount = 3,
  rippleSpeed = 1,
}: Carousel41Props) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([])

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === children.length - 1 ? 0 : prevIndex + 1
    )
    generateRipples()
  }, [children.length])

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    )
    generateRipples()
  }

  const generateRipples = () => {
    const newRipples = Array.from({ length: rippleCount }, (_, i) => ({
      id: i,
      x: 50,
      y: 50,
    }))
    setRipples(newRipples)
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
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: {
              duration: 0.5,
              ease: "easeOut",
            },
          }}
          exit={{
            opacity: 0,
            scale: 1.2,
            transition: {
              duration: 0.5,
              ease: "easeIn",
            },
          }}
        >
          {children[currentIndex]}
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        {ripples.map((ripple, index) => (
          <motion.div
            key={`${ripple.id}-${currentIndex}`}
            className="absolute rounded-full border-4 border-white/30 pointer-events-none"
            initial={{ 
              width: 0,
              height: 0,
              x: `${ripple.x}%`,
              y: `${ripple.y}%`,
              opacity: 0.8,
              transform: "translate(-50%, -50%)"
            }}
            animate={{
              width: "200%",
              height: "200%",
              opacity: 0,
              transition: {
                duration: 1.5 / rippleSpeed,
                delay: index * 0.2 / rippleSpeed,
                ease: "easeOut"
              }
            }}
            exit={{ opacity: 0 }}
          />
        ))}
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

export default Carousel41 